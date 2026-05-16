/*
 * ============================================
 *  storage.js — Booking Data Storage Helpers
 * ============================================
 *
 *  OVERVIEW:
 *  Manages persistent storage of booking data in localStorage.
 *  Bookings persist even after the browser is closed.
 */

// getBookings — Retrieves all saved bookings
// Returns an empty array if no bookings exist
function getBookings() {
  const bookingsData = localStorage.getItem("bookings");
  return bookingsData ? JSON.parse(bookingsData) : [];
}

// saveBookings — Saves bookings array to localStorage
// Completely replaces existing bookings with the provided array
function saveBookings(bookings) {
  localStorage.setItem("bookings", JSON.stringify(bookings));
}

export { getBookings, saveBookings };
