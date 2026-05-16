import { Link } from "react-router-dom";
import { useEffect } from "react";
import CategoryCard from "../../components/CategoryCard/CategoryCard.jsx";
import ServiceCard from "../../components/ServiceCard/ServiceCard.jsx";
import { servicesList, categoryList } from "../../data/services.js";
import "./Home.css";

// HomePage — Landing page with hero, how it works, categories, featured, and trust
function HomePage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // .slice(0, 3) = get the first 3 services to feature on the home page
  let featuredServices = servicesList.slice(0, 3);

  return (
    <div className="home-page">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="hero-bg-shape"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            🚀 Just Launched — India's Safest Home Services Platform
          </div>
          <h1>
            Expert Help at Your Doorstep, <span className="hero-highlight">Zero Risk Involved.</span>
          </h1>
          <p className="hero-subtitle">
            Fixly is India's most secure platform for home services. Every professional is triple-verified to ensure your safety and 100% protection against fraud.{" "}
            <strong>Join today as an early member and get your first booking free!</strong>
          </p>
          <div className="hero-buttons">
            <Link to="/services">
              <button className="btn-primary-lg">Book Your First Service — It's Free!</button>
            </Link>
            <a href="#how-it-works">
              <button className="btn-outline-lg">See How It Works</button>
            </a>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="hero-stats">
          <div className="hero-stat-item">
            <span className="hero-stat-number">2,500+</span>
            <span className="hero-stat-label">Early Adopters</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-number">300+</span>
            <span className="hero-stat-label">Verified Pros</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-number">4.9★</span>
            <span className="hero-stat-label">Launch Rating</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-number">₹0</span>
            <span className="hero-stat-label">Booking Fee</span>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS / TRUST SECTION ===== */}
      <section className="home-section" id="how-it-works">
        <div className="section-header">
          <h2>Your Safety is Our Priority</h2>
          <p className="section-subtitle">We've built a system that eliminates fraud and ensures quality at every step</p>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon">🛡️</div>
            <h3>Strict Background Checks</h3>
            <p>Every professional undergoes a mandatory criminal record check and ID verification before they are allowed on our platform. No exceptions.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon">💰</div>
            <h3>Secure Escrow Payments</h3>
            <p>Your money is held securely. We only pay the professional after you confirm the job is done perfectly. Full protection against payment fraud.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon">🤝</div>
            <h3>Fixly Guarantee</h3>
            <p>Not happy with the result? We'll send another expert for free or refund your money. We stand behind every single booking.</p>
          </div>
        </div>
      </section>

      {/* ===== BROWSE CATEGORIES ===== */}
      <section className="home-section">
        <div className="section-header">
          <h2>One Platform, Every Home Need</h2>
          <p className="section-subtitle">Tap a category to discover top-rated professionals near you</p>
        </div>
        <div className="category-grid">
          {categoryList.map(function (eachCategory) {
            return <CategoryCard key={eachCategory} category={eachCategory} />;
          })}
        </div>
      </section>

      {/* ===== FEATURED SERVICES ===== */}
      <section className="home-section home-section-alt">
        <div className="section-header">
          <h2>Trending This Week</h2>
          <p className="section-subtitle">The most booked professionals on Fixly right now</p>
        </div>
        <div className="featured-grid">
          {featuredServices.map(function (eachService) {
            return <ServiceCard key={eachService.id} service={eachService} />;
          })}
        </div>
        <div className="section-footer">
          <Link to="/services">
            <button className="btn-outline-lg">Explore All 300+ Professionals →</button>
          </Link>
        </div>
      </section>

      {/* ===== WHY CHOOSE US / FINAL CTA ===== */}
      <section className="home-section final-cta-section">
        <div className="final-cta-card">
          <h2>Stop Taking Risks with Local Listings</h2>
          <p>Local ads often lead to inconsistent quality and safety concerns. Switch to Fixly for a guaranteed, fraud-free experience today.</p>
          <div className="cta-benefits">
            <span>✅ Background Checked Pros</span>
            <span>✅ No Advance Payments</span>
            <span>✅ 24/7 Priority Support</span>
          </div>
          <Link to="/services">
            <button className="btn-primary-lg">Claim Your Free First Service Now →</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
