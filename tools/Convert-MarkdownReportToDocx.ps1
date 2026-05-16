param(
  [Parameter(Mandatory = $true)]
  [string]$InputPath,

  [Parameter(Mandatory = $true)]
  [string]$OutputPath
)

Add-Type -AssemblyName System.IO.Compression.FileSystem
Add-Type -AssemblyName System.IO.Compression

function Escape-XmlText {
  param([string]$Value)
  return [System.Security.SecurityElement]::Escape($Value)
}

function New-Run {
  param([string]$Text, [bool]$Bold = $false, [int]$Size = 24)
  $safeText = Escape-XmlText $Text
  $boldXml = if ($Bold) { "<w:b/>" } else { "" }
  return "<w:r><w:rPr>$boldXml<w:sz w:val=""$Size""/><w:szCs w:val=""$Size""/></w:rPr><w:t xml:space=""preserve"">$safeText</w:t></w:r>"
}

function New-Paragraph {
  param(
    [string]$Text,
    [string]$Style = "Normal",
    [string]$Align = "left",
    [bool]$Bold = $false,
    [int]$Size = 24
  )

  $styleXml = if ($Style -ne "Normal") { "<w:pStyle w:val=""$Style""/>" } else { "" }
  $jcXml = if ($Align -ne "left") { "<w:jc w:val=""$Align""/>" } else { "" }
  $spacingXml = "<w:spacing w:after=""120"" w:line=""276"" w:lineRule=""auto""/>"
  return "<w:p><w:pPr>$styleXml$jcXml$spacingXml</w:pPr>$(New-Run -Text $Text -Bold $Bold -Size $Size)</w:p>"
}

function New-TableRow {
  param([string[]]$Cells, [bool]$Header = $false)
  $cellsXml = ""
  foreach ($cell in $Cells) {
    $cellsXml += "<w:tc><w:tcPr><w:tcW w:w=""3000"" w:type=""dxa""/></w:tcPr>$(New-Paragraph -Text $cell.Trim() -Bold $Header)</w:tc>"
  }
  return "<w:tr>$cellsXml</w:tr>"
}

$markdown = Get-Content -LiteralPath $InputPath
$body = New-Object System.Text.StringBuilder
$inCode = $false
$codeBuffer = New-Object System.Collections.Generic.List[string]
$tableRows = New-Object System.Collections.Generic.List[string[]]

function Append-Body {
  param([string]$Xml)
  [void]$script:body.Append($Xml)
}

function Flush-Table {
  if ($script:tableRows.Count -eq 0) { return "" }
  $xml = "<w:tbl><w:tblPr><w:tblStyle w:val=""TableGrid""/><w:tblW w:w=""0"" w:type=""auto""/><w:tblBorders><w:top w:val=""single"" w:sz=""4""/><w:left w:val=""single"" w:sz=""4""/><w:bottom w:val=""single"" w:sz=""4""/><w:right w:val=""single"" w:sz=""4""/><w:insideH w:val=""single"" w:sz=""4""/><w:insideV w:val=""single"" w:sz=""4""/></w:tblBorders></w:tblPr>"
  $rowIndex = 0
  foreach ($row in $script:tableRows) {
    $xml += New-TableRow -Cells $row -Header ($rowIndex -eq 0)
    $rowIndex++
  }
  $xml += "</w:tbl>"
  $script:tableRows.Clear()
  return $xml
}

foreach ($line in $markdown) {
  if ($line.Trim().StartsWith('```')) {
    if ($inCode) {
      Append-Body (Flush-Table)
      foreach ($codeLine in $codeBuffer) {
        $paragraphXml = New-Paragraph -Text $codeLine -Style "Code" -Size 20
        Append-Body $paragraphXml
      }
      $codeBuffer.Clear()
      $inCode = $false
    } else {
      Append-Body (Flush-Table)
      $inCode = $true
    }
    continue
  }

  if ($inCode) {
    $codeBuffer.Add($line)
    continue
  }

  if ($line.Trim() -eq "---") {
    Append-Body (Flush-Table)
    Append-Body "<w:p><w:r><w:br w:type=""page""/></w:r></w:p>"
    continue
  }

  if ($line.Trim().StartsWith('|') -and $line.Trim().EndsWith('|')) {
    $trimmed = $line.Trim().Trim('|')
    if ($trimmed -match '^-+\s*\|') { continue }
    $tableRows.Add(($trimmed -split '\|'))
    continue
  }

  Append-Body (Flush-Table)

  if ([string]::IsNullOrWhiteSpace($line)) {
    Append-Body "<w:p/>"
  } elseif ($line.StartsWith("# ")) {
    $paragraphXml = New-Paragraph -Text $line.Substring(2).Trim() -Style "Heading1" -Align "center" -Bold $true -Size 36
    Append-Body $paragraphXml
  } elseif ($line.StartsWith("## ")) {
    $paragraphXml = New-Paragraph -Text $line.Substring(3).Trim() -Style "Heading2" -Bold $true -Size 30
    Append-Body $paragraphXml
  } elseif ($line.StartsWith("### ")) {
    $paragraphXml = New-Paragraph -Text $line.Substring(4).Trim() -Style "Heading3" -Align "center" -Bold $true -Size 26
    Append-Body $paragraphXml
  } elseif ($line.StartsWith("- ")) {
    $paragraphXml = New-Paragraph -Text ("- " + $line.Substring(2).Trim()) -Size 24
    Append-Body $paragraphXml
  } else {
    $paragraphXml = New-Paragraph -Text $line.Trim() -Size 24
    Append-Body $paragraphXml
  }
}

Append-Body (Flush-Table)

$documentXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    $($body.ToString())
    <w:sectPr>
      <w:pgSz w:w="11906" w:h="16838"/>
      <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="708" w:footer="708" w:gutter="0"/>
    </w:sectPr>
  </w:body>
</w:document>
"@

$contentTypes = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>
"@

$rels = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>
"@

$styles = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style>
  <w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:before="240" w:after="160"/></w:pPr><w:rPr><w:b/><w:sz w:val="36"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:before="200" w:after="120"/></w:pPr><w:rPr><w:b/><w:sz w:val="30"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading3"><w:name w:val="heading 3"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:before="160" w:after="100"/></w:pPr><w:rPr><w:b/><w:sz w:val="26"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Code"><w:name w:val="Code"/><w:basedOn w:val="Normal"/><w:rPr><w:rFonts w:ascii="Consolas" w:hAnsi="Consolas"/><w:sz w:val="20"/></w:rPr></w:style>
  <w:style w:type="table" w:styleId="TableGrid"><w:name w:val="Table Grid"/><w:tblPr><w:tblBorders><w:top w:val="single" w:sz="4"/><w:left w:val="single" w:sz="4"/><w:bottom w:val="single" w:sz="4"/><w:right w:val="single" w:sz="4"/><w:insideH w:val="single" w:sz="4"/><w:insideV w:val="single" w:sz="4"/></w:tblBorders></w:tblPr></w:style>
</w:styles>
"@

if (Test-Path -LiteralPath $OutputPath) {
  Remove-Item -LiteralPath $OutputPath -Force
}

$fileStream = [System.IO.File]::Open($OutputPath, [System.IO.FileMode]::CreateNew)
$zip = New-Object System.IO.Compression.ZipArchive($fileStream, [System.IO.Compression.ZipArchiveMode]::Create)

function Add-ZipTextEntry {
  param(
    [System.IO.Compression.ZipArchive]$Archive,
    [string]$EntryName,
    [string]$Text
  )

  $entry = $Archive.CreateEntry($EntryName)
  $stream = $entry.Open()
  $writer = New-Object System.IO.StreamWriter($stream, [System.Text.UTF8Encoding]::new($false))
  $writer.Write($Text)
  $writer.Dispose()
  $stream.Dispose()
}

Add-ZipTextEntry -Archive $zip -EntryName "[Content_Types].xml" -Text $contentTypes
Add-ZipTextEntry -Archive $zip -EntryName "_rels/.rels" -Text $rels
Add-ZipTextEntry -Archive $zip -EntryName "word/document.xml" -Text $documentXml
Add-ZipTextEntry -Archive $zip -EntryName "word/styles.xml" -Text $styles

$zip.Dispose()
$fileStream.Dispose()

Write-Host "Created $OutputPath"
