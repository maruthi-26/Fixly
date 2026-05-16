import { Link } from "react-router-dom";
import "./ServiceCard.css";
import "../Button/Button.css";

// ServiceCard — Shows a service provider card with avatar, rating, and booking
function ServiceCard({ service }) {
  let avatarLetter = service.providerName ? service.providerName[0] : "?";
  let yearsNumber = parseInt(service.experience);

  // Scroll to top when service card is clicked
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="service-card" onClick={handleNavigation} style={{ cursor: 'pointer' }}>
      <div className="service-card-avatar">
        <div className="avatar-circle">{avatarLetter}</div>
        <div className="rating-badge">⭐ {service.rating}</div>
      </div>

      <div className="service-card-body">
        <h3 className="service-card-name">{service.providerName}</h3>
        <p className="service-card-title">{service.category}</p>

        <div className="service-card-badges">
          <span className="badge">{yearsNumber} YRS EXP</span>
          <span className="badge badge-green">✓ VERIFIED</span>
        </div>

        <p className="service-card-desc">{service.description}</p>

        <div className="service-card-bottom">
          <span className="service-card-price">₹{service.pricePerHour}/hr</span>
          <Link to={"/service/" + service.id} onClick={(e) => e.stopPropagation()}>
            <button className="btn-book">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
