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
    { 
      id: 1, 
      name: 'Standard Room', 
      price: 109, 
      img: '/images/rooms/1.webp', 
      guests: 2, 
      size: '28 ft', 
      desc: 'Elegant and cozy room designed for comfort and relaxation, featuring tasteful interiors and a warm, inviting atmosphere.' 
    },
    { 
      id: 2, 
      name: 'Superior Room', 
      price: 129, 
      img: '/images/rooms/2.webp', 
      guests: 2, 
      size: '28 ft', 
      desc: 'Refined space with premium amenities and modern design, offering enhanced comfort for a more enjoyable stay.' 
    },
    { 
      id: 3, 
      name: 'Executive Room', 
      price: 149, 
      img: '/images/rooms/3.webp', 
      guests: 2, 
      size: '28 ft', 
      desc: 'Ideal for business travelers, combining comfort and functionality with a calm and well-designed interior.' 
    },
    { 
      id: 4, 
      name: 'Premium Suite', 
      price: 179, 
      img: '/images/rooms/4.webp', 
      guests: 2, 
      size: '38 ft', 
      desc: 'Luxury suite with generous living space and refined details for an elevated stay experience.' 
    }
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
    <div className="rooms-slider-layout slider-light-theme bg-transparent min-vh-100 d-flex flex-column justify-content-between text-dark">
      {/* Navbar navigation */}
      <Header headerClass="transparent header-light" />

      {/* Main content slider area */}
      <main className="flex-grow-1 d-flex align-items-center py-4" style={{ marginTop: '80px' }}>
        <div className="container-fluid px-3 px-md-5">
          <div 
            className="position-relative overflow-hidden shadow-lg w-100 rooms-slider-card" 
            style={{ 
              borderRadius: '24px', 
              background: '#1a1a1a' 
            }}
          >
            {/* Slides container */}
            {slides.map((room, idx) => {
              const isActive = idx === activeSlide;
              return (
                <div
                  key={room.id}
                  className="position-absolute w-100 h-100 top-0 start-0"
                  style={{
                    opacity: isActive ? 1 : 0,
                    zIndex: isActive ? 2 : 1,
                    pointerEvents: isActive ? 'auto' : 'none',
                    transition: 'opacity 0.8s ease-in-out'
                  }}
                >
                  {/* Blurred Background Image */}
                  <div
                    className="position-absolute w-100 h-100 top-0 start-0"
                    style={{
                      backgroundImage: `url(${room.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'blur(20px) brightness(0.35)',
                      transform: 'scale(1.15)',
                      transition: 'background-image 0.8s ease-in-out'
                    }}
                  />

                  {/* Dark transparent tint filter */}
                  <div 
                    className="position-absolute w-100 h-100 top-0 start-0" 
                    style={{ 
                      backgroundColor: 'rgba(0,0,0,0.15)', 
                      zIndex: 2 
                    }} 
                  />

                  {/* Content Container */}
                  <div className="position-relative h-100 w-100 d-flex align-items-center px-4 px-md-5" style={{ zIndex: 3 }}>
                    <div className="container">
                      <div className="row align-items-center g-5">
                        
                        {/* Left column: Text details */}
                        <div className="col-lg-6 text-start text-white">
                          <h1 
                            className="text-white mb-2" 
                            style={{ 
                              fontSize: '56px', 
                              fontWeight: '700', 
                              fontFamily: "'Outfit', sans-serif",
                              letterSpacing: '-1.5px',
                              lineHeight: '1.1'
                            }}
                          >
                            {room.name}
                          </h1>
                          
                          {/* Stars */}
                          <div className="d-flex gap-1 mb-3" style={{ color: '#c89c56' }}>
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="fa-solid fa-star fs-14"></i>
                            ))}
                          </div>

                          {/* Description */}
                          <p 
                            className="text-white opacity-9 mb-4" 
                            style={{ 
                              fontFamily: "'Jost', sans-serif", 
                              fontSize: '18px', 
                              lineHeight: '1.65', 
                              maxWidth: '480px' 
                            }}
                          >
                            {room.desc}
                          </p>

                          {/* Icons and Price Line */}
                          <div 
                            className="d-flex justify-content-between align-items-center border-top border-white border-opacity-20 pt-4" 
                            style={{ maxWidth: '480px' }}
                          >
                            <div className="d-flex gap-4 fs-16 text-white opacity-9">
                              <div className="d-flex align-items-center gap-2">
                                <i className="fa-regular fa-user opacity-7"></i>
                                <span>{room.guests} guests</span>
                              </div>
                              <div className="d-flex align-items-center gap-2">
                                <i className="fa-solid fa-expand opacity-7"></i>
                                <span>{room.size}</span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center text-white">
                              <span className="fs-24 fw-bold">${room.price}</span>
                              <span className="opacity-7 ms-1">/night</span>
                            </div>
                          </div>
                        </div>

                        {/* Right column: Sharp Floating Image */}
                        <div className="col-lg-6 d-none d-lg-flex justify-content-center">
                          <div 
                            className="overflow-hidden w-100" 
                            style={{ 
                              borderRadius: '16px', 
                              maxHeight: '360px',
                              aspectRatio: '1.5',
                              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}
                          >
                            <img 
                              src={room.img} 
                              className="w-100 h-100" 
                              style={{ objectFit: 'cover' }} 
                              alt={room.name} 
                            />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Navigation buttons */}
            <button 
              onClick={handlePrev}
              className="position-absolute start-0 top-50 translate-middle-y border-0 bg-transparent text-white p-3"
              style={{ fontSize: '32px', cursor: 'pointer', zIndex: 10, opacity: 0.8, transition: 'all 0.3s' }}
              aria-label="Previous Room"
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <button 
              onClick={handleNext}
              className="position-absolute end-0 top-50 translate-middle-y border-0 bg-transparent text-white p-3"
              style={{ fontSize: '32px', cursor: 'pointer', zIndex: 10, opacity: 0.8, transition: 'all 0.3s' }}
              aria-label="Next Room"
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>

          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}


