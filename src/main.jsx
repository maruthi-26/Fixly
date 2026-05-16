/*
 * ============================================
 *  main.jsx — React Entry Point
 * ============================================
 *
 *  This is the FIRST JavaScript file that runs.
 *  Vite loads this from index.html via:  <script src="/src/main.jsx">
 *
 *  WHAT EACH PIECE DOES:
 *
 *  1. StrictMode
 *     → Development-only wrapper that warns you about
 *       unsafe practices (like missing keys in .map()).
 *       It does NOT affect the production build.
 *
 *  2. BrowserRouter
 *     → Enables React Router to work. It listens to URL changes
 *       and tells <Routes> which component to render.
 *     → Must wrap the entire app so <Link>, <NavLink>, and
 *       <Routes> can all communicate.
 *
 *  3. createRoot
 *     → React 18+ API. Creates a "root" attached to the
 *       <div id="root"> in index.html, then renders our app into it.
 *
 *  4. Import "./styles/index.css"
 *     → Loads the global CSS (variables, reset, base styles).
 *       This MUST be imported before any component CSS so that
 *       CSS variables (--primary, --font, etc.) are available everywhere.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import App from "./App.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
