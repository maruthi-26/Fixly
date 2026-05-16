import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/";

  // Don't show footer on login or register pages
  if (isAuthPage) return null;

  // Scroll to top when links are clicked
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Brand Column */}
        <div className="footer-brand">
          <Link to="/home" className="footer-logo" onClick={handleNavigation}>
            <span className="logo-icon">⬡</span>
            <span className="logo-text">Fixly</span>
          </Link>
          <p>
            India's most secure home services platform. We protect you from fraud 
            and connect you with world-class, verified professionals.
          </p>
          <div className="footer-socials">
            <span className="social-icon" title="Twitter/X">𝕏</span>
            <span className="social-icon" title="Instagram">📸</span>
            <span className="social-icon" title="LinkedIn">💼</span>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer-links-group">
          <h4>Explore</h4>
          <Link to="/home" onClick={handleNavigation}>Home Dashboard</Link>
          <Link to="/services" onClick={handleNavigation}>All Services</Link>
          <Link to="/home#how-it-works" onClick={handleNavigation}>Safety & Trust</Link>
          <Link to="/services?category=Tutor" onClick={handleNavigation}>Academic Support</Link>
          <Link to="/services?category=Fitness" onClick={handleNavigation}>Personal Training</Link>
        </div>

        {/* Categories Column */}
        <div className="footer-links-group">
          <h4>Home Maintenance</h4>
          <Link to="/services?category=Cleaning" onClick={handleNavigation}>Home Cleaning</Link>
          <Link to="/services?category=AC Repair" onClick={handleNavigation}>AC Repair & Service</Link>
          <Link to="/services?category=Plumber" onClick={handleNavigation}>Professional Plumbing</Link>
          <Link to="/services?category=Electrician" onClick={handleNavigation}>Electrical Works</Link>
          <Link to="/services?category=Painter" onClick={handleNavigation}>Painting & Decor</Link>
        </div>

        {/* Support Column */}
        <div className="footer-links-group">
          <h4>Support & Safety</h4>
          <span className="footer-contact-item">📧 help@fixly.in</span>
          <span className="footer-contact-item">📞 1800-FIX-PRO</span>
          <span className="footer-contact-item">📍 Verified Providers Only</span>
          <div className="fraud-badge">
            Zero-Fraud Guarantee
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© 2026 Fixly Inc. All Rights Reserved. India's #1 Trusted Service Platform 🇮🇳</p>
          <div className="footer-legal">
            <Link to="/home" onClick={handleNavigation}>Privacy Policy</Link>
            <Link to="/home" onClick={handleNavigation}>Terms of Use</Link>
            <Link to="/home#how-it-works" onClick={handleNavigation}>Anti-Fraud Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
