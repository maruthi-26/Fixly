/*
 * ============================================
 *  Button.jsx — Reusable Button Component
 * ============================================
 *
 *  CONCEPT: FUNCTIONAL COMPONENT + PROPS
 *  This is a "stateless" component — it has no internal state (no useState).
 *  It only receives data through PROPS and renders accordingly.
 *
 *  PROPS EXPLAINED:
 *  - children   → The text/elements inside <Button>Click Me</Button>
 *  - className  → Extra CSS class for different button styles (e.g., "btn-primary-lg")
 *  - type       → HTML button type: "button" (default) or "submit" (for forms)
 *  - onClick    → Function to call when button is clicked
 *  - style      → Inline styles (used sparingly for one-off overrides)
 *
 *  WHY "children"?
 *  In React, anything between <Component> and </Component> is passed
 *  as the special "children" prop. So <Button>Book Now</Button>
 *  means children = "Book Now".
 */

import "./Button.css";

function Button({ children, className, type, onClick, style, disabled }) {
  // If a className is passed, combine it with base "btn" class.
  // Otherwise, just use "btn".
  // Example: className="btn-primary-lg" → fullClassName = "btn btn-primary-lg"
  let fullClassName = className ? "btn " + className : "btn";

  // Default type is "button" (not "submit") to prevent accidental form submission
  let buttonType = type ? type : "button";

  return (
    <button
      className={fullClassName}
      type={buttonType}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
