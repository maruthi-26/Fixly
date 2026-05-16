/*
 * ============================================
 *  App.jsx — Application Root with Protected Routes
 * ============================================
 *
 *  ROUTE PROTECTION:
 *  - PublicRoute  → Only guests can access (Login, Register)
 *                   If logged in  → redirect to /home
 *  - PrivateRoute → Only logged-in users can access (Home, Services, Details)
 *                   If not logged in → redirect to /login
 */

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar.jsx";
import Footer from "./components/Layout/Footer/Footer.jsx";
import HomePage from "./pages/Home/Home.jsx";
import ServicesPage from "./pages/Services/Services.jsx";
import ServiceDetailsPage from "./pages/ServiceDetails/ServiceDetails.jsx";
import BookingPage from "./pages/Booking/Booking.jsx";
import BookingsPage from "./pages/Bookings/Bookings.jsx";
import LoginPage from "./pages/Login/Login.jsx";
import RegisterPage from "./pages/Register/Register.jsx";
import NotFoundPage from "./pages/NotFound/NotFound.jsx";
import PrivateRoute from "./components/common/PrivateRoute.jsx";
import PublicRoute from "./components/common/PublicRoute.jsx";

function App() {
  return (
    <div className="app-shell">
      {/* Navbar appears on every page */}
      <Navbar />

      {/* Main content area — swaps based on URL */}
      <main>
        <Routes>
          {/* ── Public-only routes (guests only) ─────────────────── */}
          <Route
            path="/"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />

          {/* ── Private routes (login required) ──────────────────── */}
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/services"
            element={
              <PrivateRoute>
                <ServicesPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/service/:id"
            element={
              <PrivateRoute>
                <ServiceDetailsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/booking/:id"
            element={
              <PrivateRoute>
                <BookingPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/bookings"
            element={
              <PrivateRoute>
                <BookingsPage />
              </PrivateRoute>
            }
          />

          {/* ── 404 fallback ─────────────────────────────────────── */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Footer appears on every page */}
      <Footer />
    </div>
  );
}

export default App;
