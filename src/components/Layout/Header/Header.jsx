import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/";

  // Don't show header on login or register pages
  if (isAuthPage) return null;

  return (
    <header className="site-header">
      <div className="header-content">
        {/* Brand Column */}
        <div className="header-brand">
          <Link to="/home" className="header-logo">
            <span className="logo-icon">⬡</span>
            <span className="logo-text">Fixly</span>
          </Link>
          <p>
            India's most secure home services platform — trusted by 500K+ households
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="header-links-group">
          <h4>Quick Links</h4>
          <Link to="/home">Dashboard</Link>
          <Link to="/services">Browse Services</Link>
          <Link to="/services?category=Electrician">Find Experts</Link>
        </div>

        {/* Popular Services Column */}
        <div className="header-links-group">
          <h4>Popular Services</h4>
          <Link to="/services?category=Cleaning">Home Cleaning</Link>
          <Link to="/services?category=Electrician">Electrical Work</Link>
          <Link to="/services?category=Plumber">Plumbing</Link>
          <Link to="/services?category=AC Repair">AC Repair</Link>
        </div>

        {/* Trust Badge Column */}
        <div className="header-trust-group">
          <h4>Why Choose Us?</h4>
          <div className="trust-badges">
            <span className="trust-badge">✓ 500K+ Happy Customers</span>
            <span className="trust-badge">✓ All Verified Professionals</span>
            <span className="trust-badge">✓ Zero-Fraud Guarantee</span>
            <span className="trust-badge">✓ 24/7 Support</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
