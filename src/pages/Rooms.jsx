import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

/**
 * Default Rooms Grid Page Component.
 * Migrates rooms available at the hotel.
 */
export default function Rooms() {
  const rooms = [
    { id: 1, name: 'Standard Room', price: 109, img: '/images/rooms/1.webp', guests: 2, size: '28 ft' },
    { id: 2, name: 'Superior Room', price: 129, img: '/images/rooms/2.webp', guests: 2, size: '28 ft', tag: 'Best Selling' },
    { id: 3, name: 'Executive Room', price: 149, img: '/images/rooms/3.webp', guests: 2, size: '28 ft' },
    { id: 4, name: 'Premium Suite', price: 179, img: '/images/rooms/4.webp', guests: 2, size: '28 ft' }
  ];

  // Testimonials Carousel
  const testimonials = [
    { text: 'A truly outstanding stay — warm service, beautiful rooms, and an atmosphere that feels unforgettable.', author: 'Anna L., Paris' },
    { text: 'Everything exceeded expectations — from the amenities to the staff, truly a memorable hotel experience.', author: 'Michael H., Toronto' },
    { text: 'Impeccable attention to detail. Every moment felt personal and thoughtfully crafted during our stay.', author: 'Nadia R., Dubai' },
    { text: 'From check-in to check-out, the experience was effortless and luxurious. Highly recommended.', author: 'Tom S., Los Angeles' },
    { text: 'Beautiful interiors, friendly staff, and great location. We loved every moment of our vacation.', author: 'Elise K., Amsterdam' },
    { text: 'Exceptional hospitality and comfort. The perfect choice for a relaxing and refreshing getaway.', author: 'David M., Singapore' }
  ];
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rooms-layout">
      {/* Navigation */}
      <Header headerClass="transparent header-light" />

      {/* Subheader */}
      <Subheader title="Rooms" tagline="Choose Your Room" backgroundImage="/images/background/1.webp" />

      <main className="bg-white py-5">
        <section className="py-4">
          <div className="container">
            <div className="row g-4">
              
              {rooms.map((room) => (
                <div className="col-md-6" key={room.id}>
                  <Link to="/room-single" className="d-block h-100 hover relative text-decoration-none">
                    <div className="rounded-1 overflow-hidden position-relative">
                      {room.tag && (
                        <h3 
                          className="abs bg-color rounded-3 text-white fs-14 lh-1 p-2 px-3 m-4 top-0 start-0 z-3" 
                          style={{ backgroundColor: '#c89c56', position: 'absolute' }}
                        >
                          {room.tag}
                        </h3>
                      )}
                      <img src={room.img} className="w-100 hover-scale-1-2" alt={room.name} style={{ objectFit: 'cover', height: '380px' }} />
                    </div>
                    <div className="pt-4 text-dark">
                      <div className="d-flex mb-2 fs-15 justify-content-between text-muted border-bottom pb-2">
                        <div className="d-flex">    
                          <div className="d-flex align-items-center me-3">
                            <img src="/images/ui/user.webp" className="w-15px me-2" alt="" />
                            {room.guests} guests
                          </div>
                          <div className="d-flex align-items-center">
                            <img src="/images/ui/floorplan.webp" className="w-15px me-2" alt="" />
                            {room.size}
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="fs-20 fw-bold text-dark">${room.price}</div>
                          <span className="ms-1">/night</span>
                        </div>
                      </div>
                      <div className="relative">
                        <h3 className="mb-2 text-dark fs-24" style={{ fontWeight: 600 }}>{room.name}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

            </div>
          </div>
        </section>
      </main>

      {/* Jarallax Testimonials Banner */}
      <section 
        className="text-light mx-2 rounded-1 overflow-hidden position-relative d-flex align-items-center py-5 mb-5"
        style={{
          backgroundImage: "url('/images/background/1.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '480px'
        }}
      >
        {/* Light warm translucent dark overlay to keep background lobby photo bright/visible and text highly readable */}
        <div className="absolute w-100 h-100 top-0 start-0" style={{ background: 'rgba(0, 0, 0, 0.22)', zIndex: 1 }}></div>
        <div className="container relative z-2 py-4" style={{ zIndex: 2 }}>
          <div className="row g-4 gx-5 align-items-center">
            {/* Left Column: Ratings Summary */}
            <div className="col-lg-5 text-center d-flex flex-column align-items-center justify-content-center">
              <h2 className="fs-96 mb-0 text-white" style={{ fontWeight: 800, fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>4.9</h2>
              <div className="d-stars d-flex justify-content-center my-2" style={{ color: '#c89c56' }}>
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star fs-24 mx-1"></i>
                ))}
              </div>
              <div className="text-white opacity-9" style={{ fontFamily: "'Jost', sans-serif", fontSize: '15px', fontWeight: 500 }}>
                (300+ Reviews)
              </div>
            </div>

            {/* Right Column: Carousel of Testimonials */}
            <div className="col-lg-7">
              <div className="position-relative overflow-hidden" style={{ minHeight: '220px' }}>
                
                {testimonials.map((item, idx) => (
                  <div 
                    key={idx}
                    className="w-100"
                    style={{ 
                      position: idx === activeTestimonial ? 'relative' : 'absolute',
                      top: 0,
                      left: 0,
                      opacity: idx === activeTestimonial ? 1 : 0,
                      visibility: idx === activeTestimonial ? 'visible' : 'hidden',
                      transition: idx === activeTestimonial ? 'opacity 0.5s ease 0.3s, visibility 0.5s ease 0.3s' : 'opacity 0.3s ease, visibility 0.3s ease',
                      zIndex: idx === activeTestimonial ? 2 : 1
                    }}
                  >
                    {/* Star Rating above testimonial */}
                    <div className="d-stars d-block mb-3" style={{ color: '#c89c56' }}>
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star fs-16 me-1"></i>
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <h3 className="text-white fs-36" style={{ fontWeight: 600, lineHeight: 1.4, letterSpacing: '-0.5px', fontFamily: "'Outfit', sans-serif", whiteSpace: 'normal', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                      {item.text}
                    </h3>
                    
                    {/* Author metadata */}
                    <div className="mt-4">
                      <span className="text-white fs-16 opacity-8" style={{ fontWeight: 500, fontFamily: "'Jost', sans-serif" }}>
                        {item.author}
                      </span>
                    </div>
                  </div>
                ))}

              </div>

              {/* Dot Indicators positioned below testimonial content */}
              <div className="d-flex gap-2 mt-4 justify-content-center justify-content-lg-start pt-2">
                {testimonials.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTestimonial(dotIdx);
                    }}
                    className="border-0 rounded-circle p-0"
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: dotIdx === activeTestimonial ? '#c89c56' : 'rgba(255,255,255,0.4)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    aria-label={`Testimonial ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
