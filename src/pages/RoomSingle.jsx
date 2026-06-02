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
    '/images/rooms/1.webp',
    '/images/rooms/2.webp',
    '/images/rooms/3.webp'
  ];

  const amenities = [
    'Ultra High-speed Wi-Fi',
    'Smart LED TV with Netflix',
    'Premium Espresso Coffee Maker',
    'Individual Climate Control',
    'Private Furnished Balcony',
    'Plush Bathrobes & Slippers',
    'In-room Digital Safe',
    'Premium Minibar'
  ];

  const suggestions = [
    { name: 'Superior Room', price: 129, img: '/images/rooms/2.webp', size: '28 ft', guests: 2 },
    { name: 'Executive Room', price: 149, img: '/images/rooms/3.webp', size: '28 ft', guests: 2 }
  ];

  return (
    <div className="room-single-layout">
      {/* Navbar */}
      <Header headerClass="transparent header-light" />

      {/* Subheader */}
      <Subheader title="Standard Room" tagline="$109/night" backgroundImage="/images/background/1.webp" />

      <main className="bg-dark text-light py-5">
        <section className="py-4">
          <div className="container">
            <div className="row g-5">

              {/* Main Content Area */}
              <div className="col-lg-8">
                
                {/* Photo Slideshow */}
                <div className="position-relative rounded-1 overflow-hidden mb-4" style={{ height: '420px' }}>
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
                  
                  {/* Thumb buttons inside */}
                  <div className="absolute bottom-0 end-0 m-4 z-3 d-flex gap-2">
                    {photos.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setActivePhoto(idx)}
                        className="btn border-0 rounded-circle"
                        style={{
                          width: '12px',
                          height: '12px',
                          backgroundColor: idx === activePhoto ? '#c89c56' : 'rgba(255,255,255,0.4)',
                          transition: 'all 0.3s'
                        }}
                        aria-label={`Photo ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Details Section */}
                <div className="bg-dark-2 p-4 p-md-5 rounded-1 border border-secondary border-opacity-10 mb-4">
                  <div className="d-flex flex-wrap gap-4 border-bottom border-secondary border-opacity-25 pb-3 mb-4 text-muted">
                    <span className="d-flex align-items-center"><i className="fa-solid fa-users text-primary me-2" style={{ color: '#c89c56' }}></i>2 Guests</span>
                    <span className="d-flex align-items-center"><i className="fa-solid fa-expand text-primary me-2" style={{ color: '#c89c56' }}></i>28 sq ft</span>
                    <span className="d-flex align-items-center"><i className="fa-solid fa-bed text-primary me-2" style={{ color: '#c89c56' }}></i>King Size Bed</span>
                    <span className="d-flex align-items-center"><i className="fa-solid fa-shower text-primary me-2" style={{ color: '#c89c56' }}></i>Rain Shower</span>
                  </div>

                  <h3 className="fs-28 text-white mb-4" style={{ fontWeight: 600 }}>Room Overview</h3>
                  <p className="text-muted leading-relaxed mb-4">
                    Our Standard Room is carefully arranged to provide an absolute sanctuary of comfort and premium utility. Combining elegant modern interior designs with curated color schemes, every room offers a peaceful space where guests can unwind effortlessly.
                  </p>

                  <h4 className="fs-20 text-white mt-5 mb-3" style={{ fontWeight: 600 }}>Luxury Amenities</h4>
                  <div className="row g-3 mb-5">
                    {amenities.map((item, idx) => (
                      <div className="col-md-6 d-flex align-items-center text-muted" key={idx}>
                        <i className="fa-solid fa-square-check text-primary fs-16 me-3" style={{ color: '#c89c56' }}></i>
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Similarity Suggestions */}
                  <h4 className="fs-20 text-white border-top border-secondary border-opacity-25 pt-5 mb-4" style={{ fontWeight: 600 }}>Similar Rooms</h4>
                  <div className="row g-4">
                    {suggestions.map((sug, idx) => (
                      <div className="col-md-6" key={idx}>
                        <Link to="/room-single" className="d-block hover text-decoration-none text-white transition-all duration-300 hover-scale-1-1">
                          <div className="rounded overflow-hidden mb-3">
                            <img src={sug.img} className="w-100" style={{ height: '180px', objectFit: 'cover' }} alt={sug.name} />
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <h5 className="mb-0 fs-18 fw-bold">{sug.name}</h5>
                            <span className="text-primary font-weight-bold" style={{ color: '#c89c56' }}>${sug.price}/night</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>

                </div>

              </div>

              {/* Sidebar Booking Column */}
              <div className="col-lg-4">
                <div className="bg-white rounded-1 p-4 p-md-5 text-dark shadow-sm border border-light position-sticky" style={{ top: '100px' }}>
                  <h3 className="fs-24 mb-4 text-dark" style={{ fontWeight: 700 }}>Book This Room</h3>

                  <div className="mb-4 border-bottom pb-3">
                    <h2 className="mb-0 text-primary fs-48 fw-bold" style={{ color: '#c89c56' }}>
                      $109
                    </h2>
                    <span className="text-muted small">rate per night (excluding taxes)</span>
                  </div>

                  <div className="d-flex flex-column gap-3 mb-4">
                    <Link 
                      to="/reservation?roomType=Standard Room&guests=2" 
                      className="btn-main fx-slide w-100 text-center py-3 rounded-1 text-decoration-none"
                    >
                      <span>Check Availability</span>
                    </Link>
                    <Link 
                      to="/contact" 
                      className="btn-main bg-light text-dark fx-slide w-100 text-center py-3 rounded-1 text-decoration-none border border-secondary border-opacity-25"
                    >
                      <span>Inquire Now</span>
                    </Link>
                  </div>

                  <p className="small text-muted mb-0 leading-relaxed">
                    Check-in: 2:00 PM | Check-out: 12:00 PM. Rates are subject to seasonal modifications. Review our booking policy for cancelations.
                  </p>
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
