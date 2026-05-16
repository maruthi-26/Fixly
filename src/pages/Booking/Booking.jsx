/*
 * ============================================
 *  Booking.jsx — Service Booking Form Page
 * ============================================
 *
 *  FEATURES:
 *  - Display service details with summary
 *  - Form to capture customer booking information
 *  - Date validation: prevents selecting past dates
 *  - Time slot validation: prevents selecting past time slots
 *  - Auto-clear time if date changes and slot becomes invalid
 *  - Saves booking to localStorage upon submission
 */

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { servicesList } from "../../data/services.js";
import { getBookings, saveBookings } from "../../utils/storage.js";
import "./Booking.css";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the service by ID
  const service = servicesList.find((item) => item.id === Number(id));

  // Form state
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    address: "",
    date: "",
    timeSlot: "",
    problem: ""
  });
  
  const [error, setError] = useState("");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // ── Date/Time Validation Logic ──
  // Get today's date and current time
  const now = new Date();
  const todayString = now.toISOString().split("T")[0];
  const currentHour = now.getHours();

  // All available time slots (9 AM to 9 PM)
  const timeSlots = [
    { value: "09:00", label: "09:00 AM - 10:00 AM" },
    { value: "10:00", label: "10:00 AM - 11:00 AM" },
    { value: "12:00", label: "12:00 PM - 01:00 PM" },
    { value: "15:00", label: "03:00 PM - 04:00 PM" },
    { value: "17:00", label: "05:00 PM - 06:00 PM" },
    { value: "18:00", label: "06:00 PM - 07:00 PM" },
    { value: "20:00", label: "08:00 PM - 09:00 PM" },
  ];

  /*
   * isSlotInPast — checks if a time slot has already passed
   *
   * LOGIC:
   *   1. If no date is selected, all slots are available
   *   2. If the selected date is in the future, all slots are available
   *   3. If the selected date is today, check if the slot time has passed
   */
  function isSlotInPast(slotTime) {
    // No date selected yet — show all slots as available
    if (formData.date === "") {
      return false;
    }

    // Future date — all slots are available
    if (formData.date > todayString) {
      return false;
    }

    // Today — check if slot hour has already passed
    const slotHour = parseInt(slotTime);
    return slotHour <= currentHour;
  }

  // ── Form Input Handler ──
  const updateField = (event) => {
    const { name, value } = event.target;
    
    // Special handling for date field
    if (name === "date") {
      setFormData((currentData) => ({
        ...currentData,
        [name]: value
      }));

      // Auto-clear time slot if it becomes invalid
      if (value === todayString && formData.timeSlot !== "") {
        const selectedHour = parseInt(formData.timeSlot);
        if (selectedHour <= currentHour) {
          setFormData((currentData) => ({
            ...currentData,
            timeSlot: ""
          }));
        }
      }
    } else {
      setFormData((currentData) => ({
        ...currentData,
        [name]: value
      }));
    }
  };

  // ── Form Submission Handler ──
  const submitBooking = (event) => {
    event.preventDefault();
    setError("");

    // Validate service exists
    if (!service) {
      setError("Selected service is not available.");
      return;
    }

    // Validate all required fields
    if (
      !formData.customerName ||
      !formData.phone ||
      !formData.address ||
      !formData.date ||
      !formData.timeSlot
    ) {
      setError("Please fill all required booking details.");
      return;
    }

    // Validate date is not in the past
    if (formData.date < todayString) {
      setError("Booking date cannot be in the past.");
      return;
    }

    // Validate time slot is not in the past
    if (formData.date === todayString && isSlotInPast(formData.timeSlot)) {
      setError("The selected time slot has already passed. Please select a future time.");
      return;
    }

    // Create booking object
    const newBooking = {
      id: `${Date.now()}-${service.id}`,
      serviceId: service.id,
      serviceName: service.name,
      providerName: service.providerName,
      ...formData,
      status: "Pending",
      bookingTime: new Date().toISOString()
    };

    // Save to storage
    const bookings = getBookings();
    saveBookings([newBooking, ...bookings]);

    // Navigate to bookings page (or dashboard)
    navigate("/bookings");
  };

  // If service not found, show error state
  if (!service) {
    return (
      <section className="section page-section">
        <div className="empty-state">
          <h1>Service not found</h1>
          <p>Please choose a valid service before booking.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section page-section booking-layout">
      {/* Service Summary Sidebar */}
      <aside className="booking-summary">
        <div
          className="booking-profile-bg"
          style={{
            backgroundImage: `url('${service.backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="service-summary-content">
          <div className="booking-avatar-wrap">
            <img
              src={service.profileImage}
              alt={service.providerName}
              className="booking-avatar"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex'; }}
            />
            <div className="booking-avatar-fallback" style={{ display: 'none' }}>{service.providerName ? service.providerName[0] : '?'}</div>
          </div>

          <span className="pill">{service.category}</span>
          <h1>{service.name}</h1>
          <p className="provider-name">by {service.providerName}</p>
          <p className="rating">⭐ {service.rating} ({service.reviews} reviews)</p>
          <p>{service.description}</p>
          <div className="summary-price">
            <strong>Rs. {service.pricePerHour}/hour</strong>
            <span>{service.experience}</span>
          </div>
          <div className="service-tags">
            {service.tags?.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </aside>

      {/* Booking Form */}
      <form className="booking-form" onSubmit={submitBooking}>
        <p className="eyebrow">Appointment</p>
        <h2>Complete your booking</h2>

        {/* Customer Name */}
        <input
          type="text"
          name="customerName"
          placeholder="Full name *"
          value={formData.customerName}
          onChange={updateField}
          required
        />

        {/* Phone Number */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone number *"
          value={formData.phone}
          onChange={updateField}
          required
        />

        {/* Address */}
        <textarea
          name="address"
          placeholder="Full address *"
          value={formData.address}
          onChange={updateField}
          required
        ></textarea>

        {/* Date and Time Selection */}
        <div className="form-row">
          {/* Date Input - prevents selection of past dates */}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={updateField}
            min={todayString}
            required
          />

          {/* Time Slot Selection - filters out past times */}
          <select
            name="timeSlot"
            value={formData.timeSlot}
            onChange={updateField}
            required
          >
            <option value="">Select time slot</option>
            {timeSlots.map((slot) => (
              <option
                key={slot.value}
                value={slot.value}
                disabled={isSlotInPast(slot.value)}
              >
                {slot.label}
                {isSlotInPast(slot.value) ? " (Passed)" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Problem Description */}
        <textarea
          name="problem"
          placeholder="Describe the problem or service needed"
          value={formData.problem}
          onChange={updateField}
        ></textarea>

        {/* Error Message */}
        {error && <p className="form-error">{error}</p>}

        {/* Submit Button */}
        <button className="primary-button full-button" type="submit">
          Confirm Booking
        </button>
      </form>
    </section>
  );
}

export default Booking;
