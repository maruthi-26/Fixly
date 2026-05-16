import { Link, useParams, useNavigate } from "react-router-dom";
import { servicesList } from "../../data/services.js";
import { useState, useEffect } from "react";
import "./ServiceDetails.css";

/*
 * ALL TIME SLOTS AVAILABLE FOR BOOKING
 * From 9:00 AM to 9:00 PM (one slot per hour)
 */
let allTimeSlots = [
  "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00",
  "17:00", "18:00", "19:00", "20:00", "21:00"
];

/*
 * getDisplayTime — Converts "14:00" into "2:00 PM"
 *
 * HOW IT WORKS:
 *   1. parseInt("14:00") gives us the number 14
 *   2. If the hour is 12, show "12:00 PM"
 *   3. If the hour is more than 12, subtract 12 and add "PM"
 *   4. Otherwise just add "AM"
 */
function getDisplayTime(slotString) {
  let hour = parseInt(slotString);

  if (hour === 12) {
    return "12:00 PM";
  }
  if (hour > 12) {
    return (hour - 12) + ":00 PM";
  }
  return hour + ":00 AM";
}

// ServiceDetailsPage — Full details of one service with booking
function ServiceDetailsPage() {
  // useParams() reads the :id from the URL /service/:id
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top when component mounts or service ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // .find() returns the first item that matches the condition
  let foundService = servicesList.find(function (eachService) {
    return eachService.id === Number(id);
  });

  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");

  // If service not found, show error
  if (!foundService) {
    return (
      <div className="detail-page">
        <div className="empty-state">
          <div className="empty-icon">❌</div>
          <h1>Service not found</h1>
          <p>The service you are looking for is not available.</p>
          <Link to="/services">
            <button>Back to Services</button>
          </Link>
        </div>
      </div>
    );
  }

  /*
   * GETTING TODAY'S DATE AS A STRING
   *
   * new Date() gives us the current date/time object.
   * .toISOString() converts it to: "2026-05-06T15:15:00.000Z"
   * .split("T")[0] extracts just the date part: "2026-05-06"
   *
   * We use this as the "min" attribute on the date input
   * so the browser prevents selecting any date before today.
   */
  let now = new Date();
  let todayString = now.toISOString().split("T")[0];
  let currentHour = now.getHours();

  /*
   * isSlotInPast — checks if a time slot has already passed
   *
   * STEP-BY-STEP LOGIC:
   *   1. If no date is picked yet, we allow all slots (return false)
   *   2. If the picked date is a future date, all slots are available (return false)
   *   3. If the picked date is TODAY, we check the hour:
   *      - Get the hour number from the slot (e.g. "14:00" → 14)
   *      - If that hour is less than or equal to the current hour, it's in the past
   *
   * Example: If it's 3:30 PM (currentHour = 15):
   *   - "09:00" (hour 9)  → 9 <= 15  → true  (past, disabled)
   *   - "15:00" (hour 15) → 15 <= 15 → true  (past, disabled)
   *   - "16:00" (hour 16) → 16 <= 15 → false (future, enabled)
   */
  function isSlotInPast(slotString) {
    // Step 1: No date selected yet — show all slots as available
    if (bookingDate === "") {
      return false;
    }

    // Step 2: Future date — all slots are available
    if (bookingDate > todayString) {
      return false;
    }

    // Step 3: Today — check if the slot hour has already passed
    let slotHour = parseInt(slotString);
    if (slotHour <= currentHour) {
      return true;  // This slot is in the past
    }

    return false;  // This slot is still available
  }

  /*
   * handleBookNowClick — Runs when the user clicks "Confirm Booking"
   * If date or time is missing, show an alert. Otherwise, navigate to the booking form.
   */
  function handleBookNowClick() {
    if (bookingDate === "" || bookingTime === "") {
      alert("Please pick a date and time before booking.");
      return;
    }
    // Navigate to the booking form with the service ID
    navigate(`/booking/${id}`);
  }

  /*
   * handleDatePick — Runs when the user picks a date
   *
   * AUTO-CLEAR LOGIC:
   * If the user had already selected a time, and then switches the date
   * to today, we need to check if that time is now in the past.
   * If it is, clear it so they're forced to pick a valid slot.
   */
  function handleDatePick(event) {
    let pickedDate = event.target.value;
    setBookingDate(pickedDate);

    if (pickedDate === todayString && bookingTime !== "") {
      let selectedHour = parseInt(bookingTime);
      if (selectedHour <= currentHour) {
        setBookingTime("");
      }
    }
  }

  /*
   * handleTimeSlotClick — Runs when the user clicks a time slot
   * Only sets the time if the slot is NOT in the past
   */
  function handleTimeSlotClick(slot) {
    let isPast = isSlotInPast(slot);
    if (isPast === false) {
      setBookingTime(slot);
    }
  }

  let yearsOfExperience = parseInt(foundService.experience);
  let avatarLetter = foundService.providerName ? foundService.providerName[0] : "?";

  // Figure out the CSS class for the booking button
  let bookButtonClass = "btn-book-full";
  if (bookingDate === "" || bookingTime === "") {
    bookButtonClass = "btn-book-full disabled";
  }

  // Figure out the button text
  let bookButtonText = "Select Date & Time First";
  if (bookingDate !== "" && bookingTime !== "") {
    bookButtonText = "Confirm Booking →";
  }

  return (
    <div className="detail-page">
      {/* Back Navigation */}
      <div className="detail-top-bar">
        <Link className="back-link" to="/services">← Back to services</Link>
        <h2 className="detail-top-title">Service Details</h2>
        <span></span>
      </div>

      {/* Profile Header */}
      <div className="detail-profile-section">
        <div 
          className="detail-profile-bg"
          style={{
            backgroundImage: `url('${foundService.backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <img 
          src={foundService.profileImage} 
          alt={foundService.providerName}
          className="detail-avatar-large"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'flex';
          }}
        />
        <div className="detail-avatar-fallback">{avatarLetter}</div>
        <h1 className="detail-provider-name">{foundService.providerName}</h1>
        <p className="detail-provider-role">✅ {foundService.category} — {foundService.name}</p>
      </div>

      {/* Stats Row */}
      <div className="detail-stats-row">
        <div className="detail-stat">
          <span className="detail-stat-value">{foundService.rating} ⭐</span>
          <span className="detail-stat-label">{foundService.reviews} REVIEWS</span>
        </div>
        <div className="detail-stat">
          <span className="detail-stat-value">{yearsOfExperience}+</span>
          <span className="detail-stat-label">YEARS EXP.</span>
        </div>
        <div className="detail-stat">
          <span className="detail-stat-value">{foundService.successRate}%</span>
          <span className="detail-stat-label">SUCCESS RATE</span>
        </div>
      </div>

      <div className="detail-content-grid">
        {/* Left Column */}
        <div className="detail-left">
          <div className="detail-section-card">
            <h3 className="detail-section-title">ℹ️ About the Pro</h3>
            <p className="detail-about-text">{foundService.description}</p>
            <div className="detail-tags">
              {foundService.tags.map(function (eachTag) {
                return <span className="tag-pill" key={eachTag}>{eachTag}</span>;
              })}
            </div>
          </div>

          <div className="detail-section-card">
            <h3 className="detail-section-title">📞 Contact Information</h3>
            <div className="detail-contact-row">
              <span>📱 Phone</span>
              <strong>{foundService.phone}</strong>
            </div>
            <div className="detail-contact-row" style={{ marginTop: "10px" }}>
              <span>📧 Email</span>
              <strong>support@fixly.com</strong>
            </div>
          </div>

          <div className="detail-section-card">
            <div className="detail-reviews-header">
              <h3 className="detail-section-title">📝 Recent Reviews</h3>
              <span className="see-all-link">SEE ALL</span>
            </div>
            <div className="review-card">
              <div className="review-top">
                <div className="review-avatar">A</div>
                <div>
                  <strong>Ananya Sharma</strong>
                  <div className="review-stars">⭐⭐⭐⭐⭐</div>
                </div>
                <span className="review-date">2d ago</span>
              </div>
              <p className="review-text">
                Incredibly fast and professional. Fixed our issue in under an hour. Left the area cleaner than before! Highly recommend.
              </p>
            </div>
            <div className="review-card" style={{ marginTop: "12px" }}>
              <div className="review-top">
                <div className="review-avatar">R</div>
                <div>
                  <strong>Rajesh Kumar</strong>
                  <div className="review-stars">⭐⭐⭐⭐⭐</div>
                </div>
                <span className="review-date">5d ago</span>
              </div>
              <p className="review-text">
                Very polite and skilled. Explained everything clearly and charged exactly what was quoted. Will definitely call again.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column — Booking */}
        <div className="detail-right">
          <div className="booking-card">
            <div className="booking-header">
              <h3 className="booking-title">📅 Book a Service</h3>
              <div className="booking-price-tag">
                <span className="booking-price">₹{foundService.pricePerHour}</span>
                <span className="booking-price-unit">/hr</span>
              </div>
            </div>

            <div className="booking-form">
                {/* Step 1 — Pick a Date */}
                <div className="booking-step">
                  <div className="booking-step-header">
                    <span className={bookingDate !== "" ? "booking-step-number done" : "booking-step-number"}>
                      {bookingDate !== "" ? "✓" : "1"}
                    </span>
                    <span className="booking-step-title">Choose a Date</span>
                  </div>
                  <div className="booking-date-wrapper">
                    {/* min={todayString} blocks all past dates in the browser calendar */}
                    <input type="date" className="booking-date-input" value={bookingDate} onChange={handleDatePick} min={todayString} />
                  </div>
                  {bookingDate !== "" && (
                    <div className="booking-selected-info">📌 Selected: <strong>{bookingDate}</strong></div>
                  )}
                </div>

                {/* Step 2 — Pick a Time Slot */}
                <div className="booking-step">
                  <div className="booking-step-header">
                    <span className={bookingTime !== "" ? "booking-step-number done" : "booking-step-number"}>
                      {bookingTime !== "" ? "✓" : "2"}
                    </span>
                    <span className="booking-step-title">Choose a Time Slot</span>
                  </div>
                  <div className="time-slots-grid">
                    {allTimeSlots.map(function (slot) {
                      let isSelected = bookingTime === slot;
                      let isPast = isSlotInPast(slot);
                      let displayTime = getDisplayTime(slot);

                      // Build the CSS class name step by step
                      let slotClasses = "time-slot-btn";
                      if (isSelected) {
                        slotClasses = slotClasses + " selected";
                      }
                      if (isPast) {
                        slotClasses = slotClasses + " past";
                      }

                      return (
                        <button
                          key={slot}
                          className={slotClasses}
                          onClick={function () { handleTimeSlotClick(slot); }}
                          disabled={isPast}
                        >
                          {displayTime}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3 — Confirm Booking */}
                <div className="booking-step">
                  <div className="booking-step-header">
                    <span className="booking-step-number">3</span>
                    <span className="booking-step-title">Confirm Booking</span>
                  </div>
                  {bookingDate !== "" && bookingTime !== "" ? (
                    <div className="booking-summary">
                      <div className="booking-summary-row"><span>📅 Date</span><strong>{bookingDate}</strong></div>
                      <div className="booking-summary-row"><span>🕐 Time</span><strong>{getDisplayTime(bookingTime)}</strong></div>
                      <div className="booking-summary-row"><span>💰 Rate</span><strong>₹{foundService.pricePerHour}/hr</strong></div>
                    </div>
                  ) : (
                    <p className="booking-hint">Please select a date and time slot above</p>
                  )}
                  <button className={bookButtonClass} onClick={handleBookNowClick}>
                    {bookButtonText}
                  </button>
                </div>
              </div>

            <div className="booking-guarantee">
              <p className="guarantee-title">✓ Fixly Guarantee</p>
              <p className="guarantee-text">Every booking is protected by our trust and safety standards. If you're not satisfied, we'll make it right.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailsPage;
