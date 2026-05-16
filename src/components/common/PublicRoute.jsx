/*
 * ============================================
 *  PublicRoute.jsx — Guest-Only Route Guard
 * ============================================
 *
 *  HOW IT WORKS:
 *  This component wraps pages that ONLY guests should see (Login, Register).
 *  - If the user is already logged in → redirect to /home (no need to log in again)
 *  - If the user is a guest           → render the login/register page
 *
 *  USAGE in App.jsx:
 *    <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
 */

import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

function PublicRoute({ children }) {
  const { isLoggedIn, isLoading } = useAuth();

  // Show nothing while checking auth status
  if (isLoading) {
    return null;
  }

  if (isLoggedIn) {
    // Already logged in — no need to see login page, send to home
    return <Navigate to="/home" replace />;
  }

  // User is a guest — render the login or register page
  return children;
}

export default PublicRoute;
