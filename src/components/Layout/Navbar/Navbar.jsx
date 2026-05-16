import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  // IMPORTANT: Check for auth pages FIRST, before calling any other hooks
  // This ensures the hook count stays consistent across all renders
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/";
  if (isAuthPage) return null;

  // Now call all other hooks (these are only called on non-auth pages)
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  // Update isLoggedIn when storage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  // Scroll to top when navigation happens
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className={"site-header" + (scrolled ? " scrolled" : "")}>
      <nav className="navbar">
        {/* Logo */}
        <Link className="logo" to={isLoggedIn ? "/home" : "/login"} onClick={handleNavigation}>
          <div className="logo-mark">⬡</div>
          Fixly
        </Link>

        {/* Nav Links */}
        <div className="nav-links">
          <NavLink to="/home" onClick={handleNavigation}>Home</NavLink>
          <NavLink to="/services" onClick={handleNavigation}>Services</NavLink>
          <NavLink to="/bookings" onClick={handleNavigation}>My Bookings</NavLink>
          {isLoggedIn ? (
            <button className="btn-nav" onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login" onClick={handleNavigation}>
              <button className="btn-nav">Login</button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
