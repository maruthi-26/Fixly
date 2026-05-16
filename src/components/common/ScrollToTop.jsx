import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop Component
 * 
 * This component listens for route changes and automatically scrolls the 
 * browser window to the top (0,0). This ensures that when a user navigates 
 * to a new page, they start at the top of the content rather than 
 * staying at the scroll position of the previous page.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
