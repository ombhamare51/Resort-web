import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Booking Availability Search Form.
 * Integrates directly with the reservation view by passing state via query params.
 */
export default function AvailabilityForm() {
  const navigate = useNavigate();

  // Get tomorrow's date string as a default checkout date
  const getTodayString = (offsetDays = 0) => {
    const date = new Date();
    date.setDate(date.getDate() + offsetDays);
    return date.toISOString().split('T')[0];
  };

  const [checkin, setCheckin] = useState(getTodayString(0));
  const [checkout, setCheckout] = useState(getTodayString(1));
  const [rooms, setRooms] = useState('1');
  const [guests, setGuests] = useState('2');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to reservation page with selected values
    navigate(`/reservation?checkin=${checkin}&checkout=${checkout}&rooms=${rooms}&guests=${guests}`);
  };

  return (
    <form name="contactForm" id="contact_form" onSubmit={handleSubmit}>
      <div className="row g-4 align-items-end">
        
        {/* Check In Date */}
        <div className="col-md-3">
          <div className="fs-16 text-dark fw-500 mb-2">Check In</div>
          <input 
            type="date" 
            id="checkin" 
            className="form-control py-2" 
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            min={getTodayString(0)}
            required 
          />
        </div>

        {/* Check Out Date */}
        <div className="col-md-3">
          <div className="fs-16 text-dark fw-500 mb-2">Check Out</div>
          <input 
            type="date" 
            id="checkout" 
            className="form-control py-2" 
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            min={checkin || getTodayString(1)}
            required 
          />
        </div>

        {/* Room Count Selector */}
        <div className="col-md-2">
          <div className="fs-16 text-dark fw-500 mb-2">Rooms</div>
          <select 
            name="rooms" 
            id="rooms" 
            className="form-control py-2"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          >
            {[...Array(10).keys()].map(i => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>

        {/* Guest Count Selector */}
        <div className="col-md-2">
          <div className="fs-16 text-dark fw-500 mb-2">Guests</div>
          <select 
            name="guests" 
            id="guests" 
            className="form-control py-2"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            {[...Array(10).keys()].map(i => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>

        {/* Search Submit Button */}
        <div className="col-md-2">
          <button type="submit" id="send_message" className="btn-main w-100 py-3 text-center border-0">
            Check Availability
          </button>
        </div>

      </div>
    </form>
  );
}
