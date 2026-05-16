import { Link } from "react-router-dom";

// Footer - Site-wide footer with links and info
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>⬡ Fixly</h3>
          <p>Your one-stop platform for finding trusted local professionals. Quality service, guaranteed satisfaction.</p>
        </div>

        <div className="footer-links-group">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Browse Services</Link>
          <Link to="/login">Login</Link>
        </div>

        <div className="footer-links-group">
          <h4>Categories</h4>
          <Link to="/services?category=Electrician">Electrician</Link>
          <Link to="/services?category=Plumber">Plumber</Link>
          <Link to="/services?category=Tutor">Tutor</Link>
          <Link to="/services?category=Cleaning">Cleaning</Link>
        </div>

        <div className="footer-links-group">
          <h4>Support</h4>
          <span>help@fixly.com</span>
          <span>+91 98765 00000</span>
          <span>Mon-Sat, 9am-8pm</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Fixly. All rights reserved. Made with ❤️ in India.</p>
      </div>
    </footer>
  );
}

export default Footer;
