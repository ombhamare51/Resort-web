import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

// 1. Static Room Options configuration
const ROOM_OPTIONS = [
  { value: 'Standard Room', label: 'Standard Room | $119/night | 2 Guests', img: '/images/rooms/1.webp' },
  { value: 'Superior Room', label: 'Superior Room | $129/night | 2 Guests', img: '/images/rooms/2.webp' },
  { value: 'Executive Room', label: 'Executive Room | $149/night | 2 Guests', img: '/images/rooms/3.webp' },
  { value: 'Premium Suite', label: 'Premium Suite | $179/night | 2 Guests', img: '/images/rooms/4.webp' }
];

// Helper to safely get the current local date in YYYY-MM-DD format (timezone-safe, non-UTC).
const getLocalToday = () => {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

// Helper to advance date by 1 day.
const getTomorrow = (dateStr) => {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + 1);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

/**
 * Reservation Booking Page Component.
 * Supports query parameter syncing, numerical increments, custom select options, and booking state alerts.
 */
export default function Reservation() {
  const [searchParams] = useSearchParams();

  // Lazy state initializers
  const [checkin, setCheckin] = useState(() => {
    return searchParams.get('checkin') || getLocalToday();
  });

  const [checkout, setCheckout] = useState(() => {
    const checkinDate = searchParams.get('checkin') || getLocalToday();
    return searchParams.get('checkout') || getTomorrow(checkinDate);
  });

  const [adults, setAdults] = useState(() => {
    const guests = parseInt(searchParams.get('guests') || '2', 10);
    return Math.max(0, Math.min(guests, 4)); // Default to 0 if guests is not provided, matching the mockup where adult/children can be 0 or 1
  });

  const [children, setChildren] = useState(() => {
    const guests = parseInt(searchParams.get('guests') || '2', 10);
    const initialAdults = Math.max(0, Math.min(guests, 4));
    return Math.max(0, guests - initialAdults);
  });

  const [roomCount, setRoomCount] = useState(() => {
    return parseInt(searchParams.get('rooms') || '1', 10);
  });

  const [roomType, setRoomType] = useState('Standard Room');
  
  // Custom dropdown open state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Details form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Status Alerts
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  // Scroll back to the top when booking status changes to make alerts/messages fully visible
  useEffect(() => {
    if (formStatus === 'success' || formStatus === 'error') {
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: false, duration: 1.0 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [formStatus]);

  // State adjustment helper for date logic
  const handleCheckinChange = (val) => {
    setCheckin(val);
    if (new Date(checkout) <= new Date(val)) {
      setCheckout(getTomorrow(val));
    }
  };

  // Increment Decrement helpers
  const handleMinus = (stateSetter, min = 0) => {
    stateSetter(prev => Math.max(min, prev - 1));
  };

  const handlePlus = (stateSetter, max = 10) => {
    stateSetter(prev => Math.min(max, prev + 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API reservation call
    setTimeout(() => {
      if (name && email && phone) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    }, 1500);
  };

  // Find the selected room details safely
  const activeRoom = ROOM_OPTIONS.find(o => o.value === roomType) || ROOM_OPTIONS[0];

  return (
    <div className="reservation-layout bg-transparent">
      {/* Navbar - Keep Saptagiri name untouched inside Header */}
      <Header headerClass="transparent header-light" />

      {/* Subheader */}
      <Subheader title="Reservation" tagline="Enjoy Your Stay" backgroundImage="/images/background/1.webp" />

      <main className="bg-white py-5">
        <section id="section_form" className="relative py-4 text-dark bg-white">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                
                {/* SUCCESS NOTIFICATION */}
                {formStatus === 'success' && (
                  <div id="success_message" className="text-center p-5 rounded-3 bg-white text-dark border shadow-sm">
                    <i className="fa-regular fa-circle-check fs-60 text-success mb-3"></i>
                    <h2 className="text-dark fs-30 mb-2">Reservation Submitted!</h2>
                    <p className="text-muted col-lg-10 offset-lg-1">
                      Thank you, <strong>{name}</strong>. Your booking inquiry for a <strong>{roomType}</strong> has been received. We will contact you shortly at <strong>{email}</strong> to finalize details.
                    </p>
                    {message && (
                      <div className="mt-4 p-4 rounded-3 border text-start text-dark bg-light mx-auto" style={{ maxWidth: '600px', marginBottom: '24px' }}>
                        <span className="d-block mb-2 fs-12 text-uppercase text-muted fw-bold" style={{ letterSpacing: '1px' }}>Your Message Detail:</span>
                        <p className="mb-0 fs-14 text-dark italic" style={{ fontStyle: 'italic', lineHeight: '1.5' }}>"{message}"</p>
                      </div>
                    )}
                    <button 
                      onClick={() => {
                        setFormStatus('idle');
                        setName('');
                        setEmail('');
                        setPhone('');
                        setMessage('');
                      }} 
                      className="btn-main mt-3 py-2 px-4 text-white border-0"
                      style={{ borderRadius: '30px', backgroundColor: '#c89c56', fontWeight: 'bold' }}
                    >
                      Make Another Booking
                    </button>
                  </div>
                )}

                {/* ERROR NOTIFICATION */}
                {formStatus === 'error' && (
                  <div id="error_message" className="alert alert-danger text-center p-3 mb-4 rounded-3 border-0">
                    An error occurred sending your reservation message. Please verify your details and try again.
                  </div>
                )}

                {/* RESERVATION FORM */}
                {formStatus !== 'success' && (
                  <div id="booking_form_wrap" className="bg-white p-0">
                    <form name="booking_form" id="booking_form" onSubmit={handleSubmit}>
                      
                      {/* 1. CHOOSE DATE SECTION */}
                      <div className="mb-5">
                        <h4 className="fw-bold text-dark mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Choose Date</h4>
                        
                        <div 
                          className="d-flex align-items-center p-3" 
                          style={{ 
                            backgroundColor: '#f4f4f4', 
                            borderRadius: '6px', 
                            border: '1px solid #e8e8e8',
                            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.02)'
                          }}
                        >
                          {/* Check In input block */}
                          <div className="w-50 d-flex flex-column">
                            <span className="fs-11 text-uppercase text-muted fw-bold mb-1" style={{ letterSpacing: '1px' }}>Check In</span>
                            <input 
                              type="date" 
                              className="form-control border-0 bg-transparent p-0 text-dark fw-bold fs-15" 
                              value={checkin}
                              onChange={(e) => handleCheckinChange(e.target.value)}
                              min={getLocalToday()}
                              style={{ outline: 'none', boxShadow: 'none', cursor: 'pointer' }}
                              required 
                            />
                          </div>

                          {/* Split separator */}
                          <div style={{ width: '1px', backgroundColor: '#e2e2e2', height: '35px' }} className="mx-3"></div>

                          {/* Check Out input block */}
                          <div className="w-50 d-flex flex-column">
                            <span className="fs-11 text-uppercase text-muted fw-bold mb-1" style={{ letterSpacing: '1px' }}>Check Out</span>
                            <input 
                              type="date" 
                              className="form-control border-0 bg-transparent p-0 text-dark fw-bold fs-15" 
                              value={checkout}
                              onChange={(e) => setCheckout(e.target.value)}
                              min={checkin}
                              style={{ outline: 'none', boxShadow: 'none', cursor: 'pointer' }}
                              required 
                            />
                          </div>
                        </div>
                      </div>

                      {/* 2. GUEST & ROOM COUNTS SECTION */}
                      <div className="row g-4 mb-5 text-center justify-content-center">
                        {/* Adults count block */}
                        <div className="col-md-4">
                          <h5 className="fw-bold text-dark mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Adult</h5>
                          <div className="d-flex justify-content-center align-items-center gap-3">
                            <button 
                              type="button" 
                              onClick={() => handleMinus(setAdults, 0)} 
                              className="btn d-flex align-items-center justify-content-center"
                              style={{ 
                                backgroundColor: '#bca17a', 
                                color: '#ffffff', 
                                width: '32px', 
                                height: '32px', 
                                borderRadius: '3px',
                                border: 'none',
                                fontSize: '18px',
                                fontWeight: 'bold'
                              }}
                            >
                              -
                            </button>
                            <span className="fs-18 fw-bold text-dark" style={{ minWidth: '20px' }}>{adults}</span>
                            <button 
                              type="button" 
                              onClick={() => handlePlus(setAdults, 10)} 
                              className="btn d-flex align-items-center justify-content-center"
                              style={{ 
                                backgroundColor: '#bca17a', 
                                color: '#ffffff', 
                                width: '32px', 
                                height: '32px', 
                                borderRadius: '3px',
                                border: 'none',
                                fontSize: '18px',
                                fontWeight: 'bold'
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Children count block */}
                        <div className="col-md-4">
                          <h5 className="fw-bold text-dark mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Children</h5>
                          <div className="d-flex justify-content-center align-items-center gap-3">
                            <button 
                              type="button" 
                              onClick={() => handleMinus(setChildren, 0)} 
                              className="btn d-flex align-items-center justify-content-center"
                              style={{ 
                                backgroundColor: '#bca17a', 
                                color: '#ffffff', 
                                width: '32px', 
                                height: '32px', 
                                borderRadius: '3px',
                                border: 'none',
                                fontSize: '18px',
                                fontWeight: 'bold'
                              }}
                            >
                              -
                            </button>
                            <span className="fs-18 fw-bold text-dark" style={{ minWidth: '20px' }}>{children}</span>
                            <button 
                              type="button" 
                              onClick={() => handlePlus(setChildren, 10)} 
                              className="btn d-flex align-items-center justify-content-center"
                              style={{ 
                                backgroundColor: '#bca17a', 
                                color: '#ffffff', 
                                width: '32px', 
                                height: '32px', 
                                borderRadius: '3px',
                                border: 'none',
                                fontSize: '18px',
                                fontWeight: 'bold'
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Rooms count block */}
                        <div className="col-md-4">
                          <h5 className="fw-bold text-dark mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Room</h5>
                          <div className="d-flex justify-content-center align-items-center gap-3">
                            <button 
                              type="button" 
                              onClick={() => handleMinus(setRoomCount, 1)} 
                              className="btn d-flex align-items-center justify-content-center"
                              style={{ 
                                backgroundColor: '#bca17a', 
                                color: '#ffffff', 
                                width: '32px', 
                                height: '32px', 
                                borderRadius: '3px',
                                border: 'none',
                                fontSize: '18px',
                                fontWeight: 'bold'
                              }}
                            >
                              -
                            </button>
                            <span className="fs-18 fw-bold text-dark" style={{ minWidth: '20px' }}>{roomCount}</span>
                            <button 
                              type="button" 
                              onClick={() => handlePlus(setRoomCount, 10)} 
                              className="btn d-flex align-items-center justify-content-center"
                              style={{ 
                                backgroundColor: '#bca17a', 
                                color: '#ffffff', 
                                width: '32px', 
                                height: '32px', 
                                borderRadius: '3px',
                                border: 'none',
                                fontSize: '18px',
                                fontWeight: 'bold'
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* 3. SELECT ROOM DROPDOWN SECTION */}
                      <div className="mb-5">
                        <h4 className="fw-bold text-dark mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Select Room</h4>
                        
                        <div className="position-relative">
                          <div 
                            className="d-flex align-items-center justify-content-between p-3" 
                            style={{ 
                              backgroundColor: '#f4f4f4', 
                              borderRadius: '6px', 
                              border: '1px solid #e8e8e8',
                              cursor: 'pointer' 
                            }}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          >
                            <div className="d-flex align-items-center gap-3">
                              {activeRoom.img && (
                                <img 
                                  src={activeRoom.img} 
                                  alt={activeRoom.value} 
                                  style={{ width: '85px', height: '55px', objectFit: 'cover', borderRadius: '4px' }} 
                                />
                              )}
                              <span className="fw-semibold text-dark fs-15">{activeRoom.label}</span>
                            </div>
                            <i className={`fa fa-chevron-${isDropdownOpen ? 'up' : 'down'} text-muted fs-14`}></i>
                          </div>
                          
                          {/* Options dropdown menu */}
                          {isDropdownOpen && (
                            <div 
                              className="position-absolute w-100 mt-1 shadow-lg bg-white border border-light" 
                              style={{ zIndex: 100, borderRadius: '6px', overflow: 'hidden' }}
                            >
                              {ROOM_OPTIONS.map((opt) => (
                                <div 
                                  key={opt.value} 
                                  className="d-flex align-items-center gap-3 p-3 option-item"
                                  style={{ borderBottom: '1px solid #f0f0f0', cursor: 'pointer' }}
                                  onClick={() => {
                                    setRoomType(opt.value);
                                    setIsDropdownOpen(false);
                                  }}
                                >
                                  <img 
                                    src={opt.img} 
                                    alt={opt.value} 
                                    style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} 
                                  />
                                  <span className="text-dark fw-medium fs-14">{opt.label}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* 4. ENTER YOUR DETAILS SECTION */}
                      <div className="mb-4">
                        <h4 className="fw-bold text-dark mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Enter Your Details</h4>
                        
                        <div className="row g-4">
                          {/* Left Column: inputs */}
                          <div className="col-md-6 d-flex flex-column gap-3">
                            <input 
                              type="text" 
                              className="form-control" 
                              placeholder="Your Name" 
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              style={{ 
                                backgroundColor: '#f4f4f4', 
                                border: '1px solid #e8e8e8', 
                                color: '#333333', 
                                padding: '15px', 
                                borderRadius: '6px',
                                outline: 'none'
                              }}
                              required 
                            />
                            <input 
                              type="email" 
                              className="form-control" 
                              placeholder="Your Email" 
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              style={{ 
                                backgroundColor: '#f4f4f4', 
                                border: '1px solid #e8e8e8', 
                                color: '#333333', 
                                padding: '15px', 
                                borderRadius: '6px',
                                outline: 'none'
                              }}
                              required 
                            />
                            <input 
                              type="tel" 
                              className="form-control" 
                              placeholder="Your Phone" 
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              style={{ 
                                backgroundColor: '#f4f4f4', 
                                border: '1px solid #e8e8e8', 
                                color: '#333333', 
                                padding: '15px', 
                                borderRadius: '6px',
                                outline: 'none'
                              }}
                              required 
                            />
                          </div>

                          {/* Right Column: Textarea */}
                          <div className="col-md-6">
                            <textarea 
                              className="form-control h-100" 
                              placeholder="Your Message"
                              rows="6"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              style={{ 
                                backgroundColor: '#f4f4f4', 
                                border: '1px solid #e8e8e8', 
                                color: '#333333', 
                                padding: '15px', 
                                borderRadius: '6px',
                                outline: 'none',
                                resize: 'none'
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* 5. SUBMIT BUTTON SECTION */}
                      <div className="mt-4 pt-2">
                        <button 
                          type="submit" 
                          className="btn-main text-white py-3 px-5 border-0"
                          disabled={formStatus === 'submitting'}
                          style={{ 
                            borderRadius: '30px', 
                            backgroundColor: '#bca17a', 
                            fontWeight: 'bold', 
                            fontSize: '15px',
                            letterSpacing: '0.5px',
                            boxShadow: '0 4px 10px rgba(188, 161, 122, 0.2)',
                            transition: 'all 0.3s'
                          }}
                        >
                          {formStatus === 'submitting' ? 'Processing...' : 'Submit Form'}
                        </button>
                      </div>

                    </form>
                  </div>
                )}

              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Saptagiri named is retained */}
      <Footer />
    </div>
  );
}
