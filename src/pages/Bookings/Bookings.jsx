/*
 * ============================================
 *  Bookings.jsx — User's Booking History
 * ============================================
 *
 *  FEATURES:
 *  - Display all user bookings from localStorage
 *  - Show booking status (Pending, Confirmed, Completed, Cancelled)
 *  - Allow cancellation of pending bookings
 *  - Display service details and appointment info
 */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBookings, saveBookings } from "../../utils/storage.js";
import "./Bookings.css";

function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load bookings from localStorage
  useEffect(() => {
    const savedBookings = getBookings();
    setBookings(savedBookings);
  }, []);

  // Cancel a booking
  const handleCancelBooking = (bookingId) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      const updatedBookings = bookings.map((booking) =>
        booking.id === bookingId ? { ...booking, status: "Cancelled" } : booking
      );
      setBookings(updatedBookings);
      saveBookings(updatedBookings);
    }
  };

  // Format date to readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

  // Format time slot for display
  const formatTimeSlot = (time) => {
    const [hours] = time.split(":");
    const hour = parseInt(hours);
    
    if (hour === 12) {
      return "12:00 PM - 1:00 PM";
    }
    if (hour > 12) {
      return `${hour - 12}:00 PM - ${hour - 12 + 1}:00 PM`;
    }
    return `${hour}:00 AM - ${hour + 1}:00 AM`;
  };

  // Get status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "status-pending";
      case "Confirmed":
        return "status-confirmed";
      case "Completed":
        return "status-completed";
      case "Cancelled":
        return "status-cancelled";
      default:
        return "status-pending";
    }
  };

  if (bookings.length === 0) {
    return (
      <section className="section page-section">
        <div className="empty-state">
          <div className="empty-icon">📅</div>
          <h1>No Bookings Yet</h1>
          <p>You haven't made any bookings. Start by exploring our services!</p>
          <Link to="/services">
            <button className="primary-button">Browse Services</button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section page-section bookings-page">
      <div className="bookings-header">
        <h1>My Bookings</h1>
        <p className="bookings-subtitle">Manage and track all your service bookings</p>
      </div>

      <div className="bookings-list">
        {bookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <div className="booking-card-header">
              <div className="booking-info">
                <h3>{booking.serviceName}</h3>
                <p className="provider-name">by {booking.providerName}</p>
              </div>
              <div className={`status-badge ${getStatusColor(booking.status)}`}>
                {booking.status}
              </div>
            </div>

            <div className="booking-card-body">
              <div className="booking-detail">
                <span className="detail-label">📅 Date</span>
                <span className="detail-value">{formatDate(booking.date)}</span>
              </div>

              <div className="booking-detail">
                <span className="detail-label">⏰ Time</span>
                <span className="detail-value">{formatTimeSlot(booking.timeSlot)}</span>
              </div>

              <div className="booking-detail">
                <span className="detail-label">👤 Customer</span>
                <span className="detail-value">{booking.customerName}</span>
              </div>

              <div className="booking-detail">
                <span className="detail-label">📞 Phone</span>
                <span className="detail-value">{booking.phone}</span>
              </div>

              <div className="booking-detail">
                <span className="detail-label">📍 Address</span>
                <span className="detail-value">{booking.address}</span>
              </div>

              {booking.problem && (
                <div className="booking-detail">
                  <span className="detail-label">🔧 Problem</span>
                  <span className="detail-value">{booking.problem}</span>
                </div>
              )}

              <div className="booking-detail">
                <span className="detail-label">🆔 Booking ID</span>
                <span className="detail-value booking-id">{booking.id}</span>
              </div>
            </div>

            <div className="booking-card-footer">
              {booking.status === "Pending" && (
                <button
                  className="btn-cancel"
                  onClick={() => handleCancelBooking(booking.id)}
                >
                  Cancel Booking
                </button>
              )}
              {booking.status !== "Pending" && (
                <span className="booking-status-text">
                  {booking.status === "Cancelled"
                    ? "This booking has been cancelled"
                    : "Your booking is confirmed"}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bookings-footer">
        <Link to="/services">
          <button className="primary-button">Book Another Service</button>
        </Link>
      </div>
    </section>
  );
}

export default BookingsPage;
