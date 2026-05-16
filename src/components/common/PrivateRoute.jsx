/*
 * ============================================
 *  PrivateRoute.jsx — Protected Route Guard
 * ============================================
 *
 *  HOW IT WORKS:
 *  This component wraps any page that requires the user to be logged in.
 *  - If the user has a token in localStorage → render the protected page
 *  - If the user has NO token             → redirect to /login
 *
 *  USAGE in App.jsx:
 *    <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
 */

import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

function PrivateRoute({ children }) {
  const { isLoggedIn, isLoading } = useAuth();

  // Show nothing while checking auth status
  if (isLoading) {
    return null;
  }

  if (isLoggedIn) {
    // User is authenticated — render the requested page
    return children;
  }

  // User is NOT authenticated — send them to the login page
  // "replace" prevents the /home route from being added to browser history
  return <Navigate to="/login" replace />;
}

export default PrivateRoute;
