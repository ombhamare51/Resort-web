import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';
import { useCountUp } from '../hooks/useCountUp';

/**
 * About Us Page Component.
 * Migrates team profiles, brand background, and count animations from about.php.
 */
export default function About() {
  const countRooms = useCountUp(180);
  const countVisitors = useCountUp(8500);
  const countMenu = useCountUp(65);

  const team = [
    { name: 'Thomas Bennett', role: 'Guest Experience Manager', img: '/images/team/1.webp' },
    { name: 'Barbara Charline', role: 'Housekeeping Supervisor', img: '/images/team/2.webp' },
    { name: 'Madison Jane', role: 'Room Quality Specialist', img: '/images/team/3.webp' },
    { name: 'Joshua Henry', role: 'Guest Service Coordinator', img: '/images/team/4.webp' }
  ];

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
    <div className="about-layout">
      {/* Header */}
      <Header headerClass="transparent header-light" />

      {/* Subheader Banner */}
      <Subheader title="About Us" tagline="Who We Are" backgroundImage="/images/background/1.webp" />

      <main className="bg-white text-dark">
        
        {/* Core Hospitality Narrative */}
        <section className="py-5">
          <div className="container py-4">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="relative position-relative">
                  <div className="w-100 pe-5 pb-5">
                    <img src="/images/misc/l1.webp" className="w-100 rounded-1" alt="Hotel Lounge View" />
                  </div>
                  <img 
                    src="/images/misc/s3.webp" 
                    className="w-40 rounded-1 abs end-0 bottom-0 z-2 soft-shadow" 
                    style={{ position: 'absolute', bottom: '20px', right: '0px', width: '40%' }} 
                    alt="Hotel Secondary View" 
                  />
                </div>
              </div>
              <div className="col-lg-6 text-start">
                <div className="ps-lg-4">
                  <div className="subtitle text-primary text-uppercase tracking-wider mb-2" style={{ color: '#c89c56' }}>About Our Hotel</div>
                  <h2 className="fs-40 text-dark mb-3">Where Relaxation Meets Elegance</h2>
                  <p className="text-muted leading-relaxed mb-0">
                    Experience refined hospitality designed to make every stay memorable and effortless. Our hotel offers thoughtfully curated rooms, attentive service, and a welcoming atmosphere where comfort and convenience come together seamlessly. From restful nights to peaceful mornings, every detail is carefully arranged to ensure guests enjoy a relaxing, enjoyable, and truly satisfying stay throughout their visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-color-op-1 rounded-1 m-2 mt-0 py-5">
          <div className="container py-4">
            <div className="row g-4 mb-5 justify-content-center text-center">
              <div className="col-lg-6">
                <div className="subtitle text-primary text-uppercase" style={{ color: '#c89c56' }}>Our Team</div>
                <h2 className="text-dark fs-40 mb-3">Meet Our Professionals</h2>
                <p className="text-muted">
                  Dedicated hospitality professionals working together to deliver seamless service and exceptional guest experiences throughout your stay.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {team.map((member, index) => (
                <div className="col-lg-3 col-md-6 text-center" key={index}>
                  <img src={member.img} className="w-100 rounded-10px hover-scale-1-1" alt={member.name} style={{ borderRadius: '10px' }} />
                  <div className="p-3 text-center text-dark">
                    <h3 className="mb-0 fs-20 text-dark">{member.name}</h3>
                    <p className="text-muted small mb-2">{member.role}</p>
                    <div className="social-icons d-flex justify-content-center gap-2">
                      <a href="#" aria-label="Facebook"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-facebook-f p-2 rounded-circle" style={{ width: '32px', height: '32px', fontSize: '12px' }}></i></a>
                      <a href="#" aria-label="Twitter"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-x-twitter p-2 rounded-circle" style={{ width: '32px', height: '32px', fontSize: '12px' }}></i></a>
                      <a href="#" aria-label="Instagram"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-instagram p-2 rounded-circle" style={{ width: '32px', height: '32px', fontSize: '12px' }}></i></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Banner */}
        <section 
          className="text-light mx-2 rounded-1 overflow-hidden position-relative d-flex align-items-center py-5"
          style={{
            backgroundImage: "url('/images/background/1.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px'
          }}
        >
          <div className="sw-overlay op-6 absolute w-100 h-100 top-0 start-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)', zIndex: 1 }}></div>
          <div className="container relative z-2 py-4" style={{ zIndex: 2 }}>
            <div className="row g-4 gx-5 align-items-center">
              <div className="col-lg-5 text-center d-flex flex-column align-items-center justify-content-center">
                <h2 className="fs-96 mb-0 text-white" style={{ fontWeight: 800, fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>4.9</h2>
                <div className="d-stars d-flex justify-content-center my-2" style={{ color: '#c89c56' }}>
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="icofont-star fs-24 mx-1"></i>
                  ))}
                </div>
                <div className="text-white opacity-9" style={{ fontFamily: "'Jost', sans-serif", fontSize: '15px', fontWeight: 500 }}>
                  (300+ Reviews)
                </div>
              </div>

              <div className="col-lg-7">
                <div className="position-relative overflow-hidden" style={{ minHeight: '220px' }}>
                  {testimonials.map((item, idx) => (
                    <div 
                      key={idx}
                      className="w-100 text-start"
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
                      <div className="d-stars d-block mb-3" style={{ color: '#c89c56' }}>
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="icofont-star fs-16 me-1"></i>
                        ))}
                      </div>

                      <h3 className="text-white fs-36" style={{ fontWeight: 600, lineHeight: 1.4, letterSpacing: '-0.5px', fontFamily: "'Outfit', sans-serif" }}>
                        {item.text}
                      </h3>
                      
                      <div className="mt-4">
                        <span className="text-white fs-16 opacity-8" style={{ fontWeight: 500, fontFamily: "'Jost', sans-serif" }}>
                          {item.author}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-flex gap-2 mt-4 justify-content-center justify-content-lg-start pt-2">
                  {testimonials.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveTestimonial(dotIdx)}
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

        {/* Statistics & Hotel Facilities Section */}
        <section className="bg-white text-dark py-5">
          <div className="container py-4">
            <div className="row g-4 mb-4 justify-content-center text-center">
              <div className="col-lg-6">
                <div className="subtitle id-color">Welcome to Saptagiri</div>
                <h2 className="text-dark fs-40 mb-3">Hotel Facilities</h2>
                <p className="text-muted">
                  From premium rooms to full-service amenities, our team ensures a comfortable and memorable stay from check-in to check-out.
                </p>
              </div>
            </div>
            
            <div className="row g-4">
              <div className="col-md-6">
                <div 
                  className="h-100 rounded-1 overflow-hidden" 
                  style={{
                    backgroundImage: "url('/images/misc/s1.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '380px'
                  }}
                />
              </div>
              <div className="col-md-6">
                <div className="row g-4">
                  
                  <div className="col-md-6">
                    <div className="p-4 bg-white rounded-1 h-100 text-dark border border-secondary border-opacity-10 text-start">
                      <small className="text-uppercase text-muted border-bottom d-block pb-2 fw-semibold">TOTAL ROOMS</small>
                      <div className="spacer-double sm-hide"></div>
                      <h2 className="mb-0 text-dark fs-48 fw-bold">
                        {countRooms}
                        <span className="text-primary ms-1" style={{ color: '#c89c56' }}>+</span>
                      </h2>
                      <span className="text-muted small">luxury rooms & suites</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="p-4 bg-white rounded-1 h-100 text-dark border border-secondary border-opacity-10 text-start">
                      <small className="text-uppercase text-muted border-bottom d-block pb-2 fw-semibold">YEARLY VISITORS</small>
                      <div className="spacer-double sm-hide"></div>
                      <h2 className="mb-0 text-dark fs-48 fw-bold">
                        {countVisitors}
                        <span className="text-primary ms-1" style={{ color: '#c89c56' }}>+</span>
                      </h2>
                      <span className="text-muted small">happy guests</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="p-4 bg-white rounded-1 h-100 text-dark border border-secondary border-opacity-10 text-start">
                      <small className="text-uppercase text-muted border-bottom d-block pb-2 fw-semibold">SIGNATURE MENU</small>
                      <div className="spacer-double sm-hide"></div>
                      <h2 className="mb-0 text-dark fs-48 fw-bold">
                        {countMenu}
                        <span className="text-primary ms-1" style={{ color: '#c89c56' }}>+</span>
                      </h2>
                      <span className="text-muted small">curated dishes & beverages</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div 
                      className="rounded-1 h-100 overflow-hidden" 
                      style={{
                        backgroundImage: "url('/images/misc/s2.webp')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '180px'
                      }}
                    />
                  </div>

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
