import { Link } from "react-router-dom";
import "./NotFound.css";

// NotFound — 404 page shown when no route matches
function NotFoundPage() {
  return (
    <div className="notfound-page">
      <div className="notfound-card">
        <div className="notfound-icon">🚫</div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/">
          <button className="btn-primary-lg">Go Home</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
