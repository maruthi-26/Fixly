import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard/ServiceCard.jsx";
import { servicesList, categoryList } from "../../data/services.js";
import "./Services.css";

// ServicesPage — Browse and filter all services
function ServicesPage() {
  const [searchParams] = useSearchParams();

  // Read initial filter values from URL query params
  let categoryFromURL = searchParams.get("category");
  let initialCategory = categoryFromURL ? categoryFromURL : "All";

  const [pickedCategory, setPickedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("rating");

  // Scroll to top when component mounts or category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchParams]);

  // Sync pickedCategory with URL search params when they change
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setPickedCategory(category);
    } else {
      setPickedCategory("All");
    }
  }, [searchParams]);

  // Filter services by category
  let matchingServices = servicesList.filter(function (eachService) {
    return (pickedCategory === "All") || (eachService.category === pickedCategory);
  });

  // Sort the filtered results
  let sortedServices = matchingServices.slice();
  if (sortBy === "rating") {
    sortedServices.sort(function (a, b) { return b.rating - a.rating; });
  } else if (sortBy === "price-low") {
    sortedServices.sort(function (a, b) { return a.pricePerHour - b.pricePerHour; });
  } else if (sortBy === "price-high") {
    sortedServices.sort(function (a, b) { return b.pricePerHour - a.pricePerHour; });
  } else if (sortBy === "experience") {
    sortedServices.sort(function (a, b) { return parseInt(b.experience) - parseInt(a.experience); });
  }

  function handleCategoryPick(categoryName) {
    setPickedCategory(categoryName);
  }

  function handleSortChange(event) {
    setSortBy(event.target.value);
  }

  function handleClearFilters() {
    setPickedCategory("All");
    setSortBy("rating");
  }

  let categoryIcons = {
    "All": "🏠", "Electrician": "⚡", "Plumber": "🔧", "Tutor": "📚",
    "Mechanic": "🚗", "Cleaning": "✨", "AC Repair": "❄️",
    "Gardening": "🌿", "Home Care": "🏥", "Painter": "🎨", "Fitness": "💪",
  };

  return (
    <div className="services-page">
      {/* Page Hero with Search */}
      <div className="services-hero">
        <h1>Meet Your Next Favourite <span className="hero-highlight">Pro</span></h1>
        <p>300+ verified experts across 10 categories — all available to book right now</p>
      </div>

      {/* Category Pills */}
      <div className="category-pills-section">
        <div className="category-pills-scroll">
          <button
            className={"category-pill" + (pickedCategory === "All" ? " active" : "")}
            onClick={function () { handleCategoryPick("All"); }}
          >
            <span className="pill-icon">🏠</span> All
          </button>
          {categoryList.map(function (eachCategory) {
            let icon = categoryIcons[eachCategory] ? categoryIcons[eachCategory] : "🔹";
            return (
              <button
                className={"category-pill" + (pickedCategory === eachCategory ? " active" : "")}
                key={eachCategory}
                onClick={function () { handleCategoryPick(eachCategory); }}
              >
                <span className="pill-icon">{icon}</span> {eachCategory}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Bar */}
      <div className="results-bar">
        <div className="results-count">
          <span className="results-number">{sortedServices.length}</span>
          {" "}{sortedServices.length === 1 ? "professional" : "professionals"} found
          {pickedCategory !== "All" && (
            <span className="results-category-tag">
              in {pickedCategory}
              <button className="tag-remove-btn" onClick={function () { setPickedCategory("All"); }}>✕</button>
            </span>
          )}
        </div>
        <div className="results-controls">
          <select className="sort-select" value={sortBy} onChange={handleSortChange}>
            <option value="rating">⭐ Top Rated</option>
            <option value="price-low">💰 Price: Low → High</option>
            <option value="price-high">💰 Price: High → Low</option>
            <option value="experience">🏆 Most Experienced</option>
          </select>
          {(pickedCategory !== "All") && (
            <button className="clear-filters-btn" onClick={handleClearFilters}>✕ Clear All</button>
          )}
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="services-grid">
        {sortedServices.map(function (eachService) {
          return <ServiceCard key={eachService.id} service={eachService} />;
        })}
      </div>

      {/* Final CTA for Trust */}
      <div className="services-footer-cta">
        <h3>Didn't find what you need?</h3>
        <p>Our expert network is growing every day. Contact our priority support for custom requests.</p>
        <div className="trust-badges-mini">
          <span>🛡️ Verified Pros</span>
          <span>🔒 Secure Booking</span>
          <span>✅ Fraud Protection</span>
        </div>
      </div>

      {/* Empty State */}
      {sortedServices.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h2>No professionals found</h2>
          <p>Try a different category</p>
          <button className="btn-outline-lg" onClick={handleClearFilters} style={{ marginTop: "20px" }}>
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default ServicesPage;
