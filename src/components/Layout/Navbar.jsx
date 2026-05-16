import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button.jsx";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <Link className="logo" to="/">
          Fixly
        </Link>

        <div className="navbar-content">
          <div className="navbar-links">
            <NavLink className="navbar-link" to="/">Home</NavLink>
            <NavLink className="navbar-link" to="/services">Services</NavLink>
          </div>
          <NavLink to="/login">
            <Button>Login</Button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
