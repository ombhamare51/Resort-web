import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Fullscreen Slider Room Layout.
 * Uses a gorgeous full-viewport slide viewer with selectors.
 */
export default function RoomsSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    { id: 1, name: 'Standard Room', price: 109, img: '/images/rooms/1.webp', guests: 2, size: '28 ft', desc: 'A gorgeous master bedroom meticulously crafted for comfort.' },
    { id: 2, name: 'Superior Room', price: 129, img: '/images/rooms/2.webp', guests: 2, size: '28 ft', desc: 'Indulge in organic bedding, bespoke climate dials, and high-tech touches.' },
    { id: 3, name: 'Executive Room', price: 149, img: '/images/rooms/3.webp', guests: 2, size: '28 ft', desc: 'Tailored for luxury corporate travelers, with premium lounge access.' },
    { id: 4, name: 'Premium Suite', price: 179, img: '/images/rooms/4.webp', guests: 2, size: '28 ft', desc: 'The absolute height of lavish space, boasting a private wellness sauna.' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="rooms-slider-layout bg-dark min-vh-100 d-flex flex-column justify-content-between text-light">
      {/* Navbar navigation */}
      <Header headerClass="transparent header-light" />

      <main className="flex-grow-1 position-relative" style={{ height: 'calc(100vh - 80px)', marginTop: '80px', minHeight: '600px' }}>
        
        {/* Fullscreen Slider Wrapper */}
        <div className="position-absolute w-100 h-100 top-0 start-0">
          {slides.map((room, idx) => (
            <div 
              key={room.id}
              className={`absolute top-0 start-0 w-100 h-100 transition-opacity duration-1000 ${idx === activeSlide ? 'opacity-100 z-2' : 'opacity-0 z-1'}`}
              style={{
                backgroundImage: `url(${room.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'opacity 1s ease-in-out'
              }}
            >
              {/* Overlay */}
              <div className="sw-overlay op-7 absolute w-100 h-100 top-0 start-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
              
              {/* Card info absolute */}
              <div className="position-absolute bottom-0 start-0 p-4 p-md-5 m-2 m-md-5 bg-dark bg-opacity-75 rounded border border-secondary border-opacity-25 z-3" style={{ maxWidth: '480px' }}>
                <div className="subtitle text-primary text-uppercase tracking-wider mb-2" style={{ color: '#c89c56' }}>Featured Room</div>
                <h2 className="fs-36 text-white mb-2" style={{ fontWeight: 700 }}>{room.name}</h2>
                <p className="text-muted small leading-relaxed mb-4">{room.desc}</p>
                <div className="d-flex justify-content-between align-items-center border-top border-secondary border-opacity-25 pt-3">
                  <div>
                    <h3 className="fs-24 text-white mb-0 fw-bold">${room.price}</h3>
                    <span className="text-muted small">rate per night</span>
                  </div>
                  <Link to="/room-single" className="btn-main py-2 px-4 rounded text-decoration-none">
                    <span>View Room</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow triggers */}
        <button 
          onClick={handlePrev}
          className="position-absolute top-50 start-0 translate-middle-y ms-4 btn rounded-circle d-flex align-items-center justify-content-center border-0 text-white z-3"
          style={{ width: '50px', height: '50px', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10 }}
          aria-label="Previous Room"
        >
          <i className="fa-solid fa-angle-left fs-24"></i>
        </button>

        <button 
          onClick={handleNext}
          className="position-absolute top-50 end-0 translate-middle-y me-4 btn rounded-circle d-flex align-items-center justify-content-center border-0 text-white z-3"
          style={{ width: '50px', height: '50px', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10 }}
          aria-label="Next Room"
        >
          <i className="fa-solid fa-angle-right fs-24"></i>
        </button>

        {/* Quick Indicators */}
        <div className="position-absolute bottom-5 end-5 m-4 z-3 d-flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className="border-0 rounded-circle"
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: idx === activeSlide ? '#c89c56' : 'rgba(255,255,255,0.4)',
                transition: 'all 0.3s'
              }}
              aria-label={`Room slide ${idx + 1}`}
            />
          ))}
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
