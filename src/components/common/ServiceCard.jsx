import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button.jsx";

function ServiceCard({ service }) {
  const navigate = useNavigate();
  const yearsNumber = parseInt(service.experience);
  const successRate = Math.round((service.rating / 5) * 100);

  function handleCardClick() {
    navigate("/service/" + service.id);
  }

  const getInitial = (name) => (name ? name[0].toUpperCase() : "?");

  return (
    <article className="service-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      {/* Provider Avatar - Large Circular */}
      <div className="service-card-avatar">
        <div className="service-card-image">
          {service.avatar ? (
            <img src={service.avatar} alt={service.providerName} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <div style={{
              width: "100%",
              height: "100%",
              backgroundColor: "var(--primary-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
              fontWeight: "700",
              color: "var(--primary)"
            }}>
              {getInitial(service.providerName)}
            </div>
          )}
        </div>
        {service.isOnline && (
          <div className="service-card-badge" title="Online">✓</div>
        )}
      </div>

      {/* Provider Content */}
      <div className="service-card-content">
        <div className="service-card-header">
          <div>
            <h3 className="service-card-name">{service.providerName}</h3>
            <p className="service-card-title">{service.category}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="service-card-stats">
          <div className="stat-item">
            <span className="stat-value">{service.rating.toFixed(1)}</span>
            <span className="stat-label">124 Reviews</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{yearsNumber}+</span>
            <span className="stat-label">Years Exp</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{successRate}%</span>
            <span className="stat-label">Success</span>
          </div>
        </div>

        {/* Description */}
        <p className="service-card-description">
          {service.description}
        </p>

        {/* Tags */}
        <div className="service-card-tags">
          <span className="tag">{service.category}</span>
          {service.tags?.slice(0, 2).map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>

        {/* Footer */}
        <div className="service-card-footer">
          <span style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--primary)" }}>
            ₹{service.pricePerHour}/hr
          </span>
          <Link to={`/service/${service.id}`} onClick={(e) => e.stopPropagation()}>
            <Button>Book Now</Button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
