import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

/**
 * Testimonials Reviews Listing Component.
 * Migrates reviews and star ratings.
 */
export default function Testimonials() {
  const reviews = [
    { name: 'Emily Johnson', text: 'Beautiful room, spotless bathroom, and incredibly comfortable bed. The romantic setup made our anniversary truly special.', date: '12 March 2025', rating: 5, avatar: '/images/testimonial/1.webp' },
    { name: 'Michael Brown', text: 'Exceptional service from check-in to check-out. Staff were warm, attentive, and always ready to help.', date: '28 February 2025', rating: 5, avatar: '/images/testimonial/2.webp' },
    { name: 'Sophia Lee', text: 'The breakfast was outstanding with plenty of options. Dining with a view made mornings unforgettable.', date: '18 February 2025', rating: 5, avatar: '/images/testimonial/3.webp' },
    { name: 'Daniel Martinez', text: 'Perfect location—quiet yet close to everything. Ideal for both relaxing and exploring the city.', date: '02 February 2025', rating: 5, avatar: '/images/testimonial/4.webp' },
    { name: 'Olivia Wilson', text: 'Spa facilities were top-notch. Exactly what we needed after a long day of travel.', date: '25 January 2025', rating: 5, avatar: '/images/testimonial/5.webp' },
    { name: 'James Anderson', text: 'Elegant interior, calming atmosphere, and excellent soundproofing. Slept incredibly well.', date: '10 January 2025', rating: 5, avatar: '/images/testimonial/6.webp' },
    { name: 'Laura Bennett', text: 'From the moment we arrived, everything felt thoughtfully curated. The room was beautifully designed, exceptionally clean, and incredibly comfortable. The romantic touches made our stay feel truly special and memorable.', date: '22 December 2024', rating: 5, avatar: '/images/testimonial/7.webp' },
    { name: 'Thomas Müller', text: 'The hotel strikes a perfect balance between luxury and warmth. Staff were professional yet genuinely friendly, and every request was handled quickly. The overall experience exceeded our expectations.', date: '18 December 2024', rating: 5, avatar: '/images/testimonial/8.webp' },
    { name: 'Isabella Rossi', text: 'Every detail felt intentional, from the soft lighting to the premium bedding. Breakfast was excellent with a wide selection, and the dining area created a relaxed, elegant atmosphere.', date: '10 December 2024', rating: 5, avatar: '/images/testimonial/9.webp' },
    { name: 'Daniel Wong', text: 'The location was ideal—peaceful and quiet, yet close enough to major attractions. The room was spacious, well-maintained, and perfect for relaxing after a long day.', date: '05 December 2024', rating: 5, avatar: '/images/testimonial/10.webp' },
    { name: 'Sophie Laurent', text: 'We stayed for a weekend and wished we could extend our stay. The ambiance, service quality, and attention to comfort made this one of our best hotel experiences.', date: '30 November 2024', rating: 5, avatar: '/images/testimonial/11.webp' },
    { name: 'Alexander Novak', text: 'This hotel delivers a refined, comfortable experience without feeling overly formal. Everything—from the room to the service—felt polished and thoughtfully executed.', date: '22 November 2024', rating: 5, avatar: '/images/testimonial/12.webp' }
  ];

  return (
    <div className="testimonials-layout">
      {/* Navigation Header */}
      <Header headerClass="transparent header-light" />

      {/* Subheader banner */}
      <Subheader title="Testimonials" tagline="Guest Reviews" backgroundImage="/images/background/1.webp" />

      <main className="bg-white text-dark py-5">
        <section aria-label="section" className="py-4 bg-light">
          <div className="container">

            <div className="row g-4">
              {reviews.map((rev, idx) => (
                <div className="col-lg-4 col-md-6 text-start" key={idx}>
                  <div className="bg-white rounded-1 p-30 border h-100 d-flex flex-column justify-content-between transition-all duration-300 hover-scale-1-1">
                    
                    <div>
                      {/* Reviewer Header info */}
                      <div className="d-flex justify-content-between mb-3 align-items-center">
                        <div className="d-flex align-items-center">
                          <img 
                            className="w-40px circle me-3" 
                            alt={rev.name} 
                            src={rev.avatar} 
                            style={{ borderRadius: '50%', width: '40px', height: '40px', objectFit: 'cover' }} 
                          />
                          <div className="mt-2">
                            <div className="text-dark fw-bold lh-1">{rev.name}</div>
                            <small className="text-muted">{rev.date}</small>
                          </div>
                        </div>
                        <img src="/images/misc/google-icon.svg" className="w-30px" alt="Google review" style={{ width: '30px', height: '30px' }} />
                      </div>

                      {/* Ext Rating stars */}
                      <div className="de-rating-ext mb-2">
                        <span className="d-stars text-primary" style={{ color: '#c89c56' }}>
                          {[...Array(rev.rating)].map((_, i) => (
                            <i key={i} className="fa fa-star me-1"></i>
                          ))}
                        </span>
                        <span className="ms-2 text-muted fw-bold">5.0</span>
                      </div>

                      {/* Review Text content */}
                      <p className="text-muted leading-relaxed mb-0">
                        "{rev.text}"
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
