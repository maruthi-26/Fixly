import { Link } from "react-router-dom";
import "./CategoryCard.css";

const categoryIcons = {
  Electrician: "⚡",
  Tutor: "📚",
  Plumber: "🔧",
  Mechanic: "🚗",
  Cleaning: "✨",
  "AC Repair": "❄️",
  Gardening: "🌿",
  "Home Care": "🏠",
  Painter: "🎨",
  Fitness: "💪",
};

function CategoryCard({ category }) {
  const icon = categoryIcons[category] || "🔹";

  return (
    <Link className="category-card" to={`/services?category=${category}`}>
      <div className="category-icon">{icon}</div>
      <div className="category-name">{category}</div>
    </Link>
  );
}

export default CategoryCard;
