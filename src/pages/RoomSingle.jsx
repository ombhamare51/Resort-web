import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

/**
 * Room Detail Page Component.
 * Features specifications, details, photo carousel, amenities checklist, and inline sidebar bookings.
 */
export default function RoomSingle() {
  const [activePhoto, setActivePhoto] = useState(0);
  const photos = [
    '/images/room-single/1.webp',
    '/images/room-single/2.webp',
    '/images/room-single/3.webp',
    '/images/room-single/4.webp'
  ];

  const amenities = [
    'Free Wi-Fi',
    'Smart TV',
    'Minibar',
    'Tea & Coffee Maker',
    'Safe Deposit Box',
    'Standard Shower',
    'Queen Bed',
    'Modern Bathroom',
    'Essential Toiletries',
    'Workspace Desk',
    'Air Conditioning',
    'In-Room Dining'
  ];

  return (
    <div className="room-single-layout">
      {/* Navbar */}
      <Header headerClass="transparent header-light" />

      {/* Subheader */}
      <Subheader title="Standard Room" tagline="Enjoy Your Stay" backgroundImage="/images/background/1.webp" />

      <main className="bg-white text-dark py-5">
        <section className="py-4">
          <div className="container">
            <div className="row g-4 gx-5">

              {/* Top Specification Bar */}
              <div className="col-lg-12">
                <div className="p-4 fs-18 rounded-1 bg-color-op-1 d-lg-flex d-sm-block flex-wrap align-items-center justify-content-between gap-4 mb-4 fw-500 text-dark">
                  <div className="me-4 d-lg-block py-2 d-sm-inline-block relative lh-1-3 ps-30"><img src="/images/ui/user.webp" className="abs w-20px start-0" alt="" />2 Guests</div>
                  <div className="me-4 d-lg-block py-2 d-sm-inline-block relative lh-1-3 ps-30"><img src="/images/ui/floorplan.webp" className="abs w-20px start-0" alt="" />35 m²</div>
                  <div className="me-4 d-lg-block py-2 d-sm-inline-block relative lh-1-3 ps-30"><img src="/images/ui/bed.webp" className="abs w-20px start-0" alt="" />Queen Bed</div>
                  <div className="me-4 d-lg-block py-2 d-sm-inline-block relative lh-1-3 ps-30"><img src="/images/ui/view.webp" className="abs w-20px start-0" alt="" />City View</div>
                  <div className="d-lg-block d-sm-inline-block"><h2 className="fs-40 m-0 lh-1 text-dark">$109 <span className="fs-20">/ night</span></h2></div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="col-lg-8">
                
                {/* Photo Slideshow with custom float navigation */}
                <div className="owl-custom-nav menu-float" data-target="#room-carousel">
                  <a className="btn-next" onClick={() => setActivePhoto((prev) => (prev + 1) % photos.length)} style={{ cursor: 'pointer' }}></a>
                  <a className="btn-prev" onClick={() => setActivePhoto((prev) => (prev - 1 + photos.length) % photos.length)} style={{ cursor: 'pointer' }}></a>                                

                  <div className="position-relative overflow-hidden rounded-1 mb-4" style={{ height: '450px' }}>
                    {photos.map((src, idx) => (
                      <div 
                        key={idx}
                        className={`absolute top-0 start-0 w-100 h-100 transition-opacity duration-500 ${idx === activePhoto ? 'opacity-100 z-2' : 'opacity-0 z-1'}`}
                        style={{
                          backgroundImage: `url(${src})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          transition: 'opacity 0.5s ease'
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="spacer-single"></div>
                <p className="text-muted leading-relaxed">
                  Designed for travelers who prioritize essential comfort and value, the Standard Room features modern furnishings and warm ambient lighting. Thoughtfully curated to provide a functional and relaxing stay, the space offers everything you need for a restful night, making it the perfect choice for solo adventurers or business travelers on the go.
                </p>

                <h3 className="mt-4 mb-3 text-dark">Room Amenities</h3>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="ul-check text-muted">
                      {amenities.slice(0, 6).map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="ul-check text-muted">
                      {amenities.slice(6).map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Sidebar Booking Column */}
              <div className="col-lg-4" id="booking">
                <div className="p-40 bg-white rounded-1 border shadow-sm">
                  <form name="contactForm" id="contact_form" onSubmit={(e) => { e.preventDefault(); window.location.hash = "/reservation?roomType=Standard%20Room&guests=" + e.target.guests.value; }}>
                    <div className="row g-4 align-items-end">
                      
                      <div className="col-lg-12 text-start">
                        <div className="fs-18 text-dark fw-500 mb-10">Check In</div>
                        <input type="date" id="checkin" className="form-control text-dark" required />
                      </div>

                      <div className="col-lg-12 text-start">
                        <div className="fs-18 text-dark fw-500 mb-10">Check Out</div>
                        <input type="date" id="checkout" className="form-control text-dark" required />
                      </div>

                      <div className="col-lg-12 text-start">
                        <div className="fs-18 text-dark fw-500 mb-10">Rooms</div>
                        <select name="rooms" id="rooms" className="form-control text-dark">
                          {[...Array(10)].map((_, i) => (
                            <option key={i+1} value={i+1}>{i+1}</option>
                          ))}
                        </select>
                      </div>

                      <div className="col-lg-12 text-start">
                        <div className="fs-18 text-dark fw-500 mb-10">Guests</div>
                        <select name="guests" id="guests" className="form-control text-dark">
                          {[...Array(10)].map((_, i) => (
                            <option key={i+1} value={i+1}>{i+1}</option>
                          ))}
                        </select>
                      </div>

                      <div className="col-lg-12">
                        <div id='submit'>
                          <button type='submit' id='send_message' className="btn-main w-100 border-0">
                            <span>Check Availability</span>
                          </button>
                        </div>
                      </div>

                    </div>
                  </form>

                  <div className="mt-4 text-start">
                    <small className="text-muted">Risk-free booking: Free cancellation available.</small>
                  </div>
                </div>
              </div>

            </div>

            <div className="spacer-single"></div>

            {/* Other Rooms section */}
            <div className="mt-5 text-start">
              <h2 className="mb-4 fs-40 text-dark">Other Rooms</h2>
              <div className="row g-4">
                
                <div className="col-md-4">
                  <Link to="/room-single" className="d-block h-100 hover relative text-decoration-none">
                    <div className="rounded-1 overflow-hidden position-relative">
                      <h3 className="abs bg-color rounded-3 text-white fs-20 lh-1 p-2 px-3 m-4 top-0 start-0 z-3" style={{ position: 'absolute', backgroundColor: '#c89c56' }}>Best Selling</h3>
                      <img src="/images/rooms/2.webp" className="w-100 hover-scale-1-2" alt="" />
                    </div>
                    <div className="pt-4 text-dark">
                      <div className="d-flex mb-2 fs-15 justify-content-between text-muted border-bottom pb-2">
                        <div className="d-flex">    
                          <div className="d-flex align-items-center me-3">
                            <img src="/images/ui/user.webp" className="w-15px me-2" alt="" />2 guests
                          </div>
                          <div className="d-flex align-items-center">
                            <img src="/images/ui/floorplan.webp" className="w-15px me-2" alt="" />28 ft
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="fs-20 fw-bold text-dark">$129</div>
                          <span className="ms-1">/night</span>
                        </div>
                      </div>
                      <div className="relative">
                        <h3 className="mb-2 text-dark fs-24">Superior Room</h3>
                      </div>
                    </div>
                  </Link>
                </div>           

                <div className="col-md-4">
                  <Link to="/room-single" className="d-block h-100 hover relative text-decoration-none">
                    <div className="rounded-1 overflow-hidden">
                      <img src="/images/rooms/3.webp" className="w-100 hover-scale-1-2" alt="" />
                    </div>
                    <div className="pt-4 text-dark">
                      <div className="d-flex mb-2 fs-15 justify-content-between text-muted border-bottom pb-2">
                        <div className="d-flex">    
                          <div className="d-flex align-items-center me-3">
                            <img src="/images/ui/user.webp" className="w-15px me-2" alt="" />2 guests
                          </div>
                          <div className="d-flex align-items-center">
                            <img src="/images/ui/floorplan.webp" className="w-15px me-2" alt="" />28 ft
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="fs-20 fw-bold text-dark">$149</div>
                          <span className="ms-1">/night</span>
                        </div>
                      </div>
                      <div className="relative">
                        <h3 className="mb-2 text-dark fs-24">Executive Room</h3>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-md-4">
                  <Link to="/room-single" className="d-block h-100 hover relative text-decoration-none">
                    <div className="rounded-1 overflow-hidden">
                      <img src="/images/rooms/4.webp" className="w-100 hover-scale-1-2" alt="" />
                    </div>
                    <div className="pt-4 text-dark">
                      <div className="d-flex mb-2 fs-15 justify-content-between text-muted border-bottom pb-2">
                        <div className="d-flex">    
                          <div className="d-flex align-items-center me-3">
                            <img src="/images/ui/user.webp" className="w-15px me-2" alt="" />2 guests
                          </div>
                          <div className="d-flex align-items-center">
                            <img src="/images/ui/floorplan.webp" className="w-15px me-2" alt="" />28 ft
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="fs-20 fw-bold text-dark">$179</div>
                          <span className="ms-1">/night</span>
                        </div>
                      </div>
                      <div className="relative">
                        <h3 className="mb-2 text-dark fs-24">Premium Suite</h3>
                      </div>
                    </div>
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
