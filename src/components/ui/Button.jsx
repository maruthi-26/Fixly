/**
 * Button Component - Modern, flexible button with variants
 * 
 * Props:
 *  - children: Button text/content
 *  - className: Additional classes (e.g., "btn-secondary", "btn-small")
 *  - type: HTML button type (default: "button")
 *  - onClick: Click handler
 *  - style: Inline styles
 *  - disabled: Disabled state
 * 
 * Variants:
 *  - (default): Primary blue button
 *  - btn-secondary: Gray outline button
 *  - btn-small: Smaller padding
 *  - btn-large: Larger padding
 */

function Button({ 
  children, 
  className = "", 
  type = "button", 
  onClick, 
  style = {},
  disabled = false 
}) {
  const fullClassName = `btn ${className}`.trim();

  return (
    <button 
      className={fullClassName} 
      type={type} 
      onClick={onClick} 
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
