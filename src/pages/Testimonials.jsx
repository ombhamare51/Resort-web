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
    { text: 'A truly outstanding stay — warm service, beautiful rooms, and an atmosphere that feels unforgettable.', author: 'Anna L., Paris', rating: 5, date: 'May 12, 2026' },
    { text: 'Everything exceeded expectations — from the amenities to the staff, truly a memorable hotel experience.', author: 'Michael H., Toronto', rating: 5, date: 'April 28, 2026' },
    { text: 'Impeccable attention to detail. Every moment felt personal and thoughtfully crafted during our stay.', author: 'Nadia R., Dubai', rating: 5, date: 'April 15, 2026' },
    { text: 'From check-in to check-out, the experience was effortless and luxurious. Highly recommended.', author: 'Tom S., Los Angeles', rating: 5, date: 'March 30, 2026' },
    { text: 'Beautiful interiors, friendly staff, and great location. We loved every moment of our vacation.', author: 'Elise K., Amsterdam', rating: 5, date: 'March 18, 2026' },
    { text: 'Exceptional hospitality and comfort. The perfect choice for a relaxing and refreshing getaway.', author: 'David M., Singapore', rating: 5, date: 'Feb 24, 2026' }
  ];

  return (
    <div className="testimonials-layout">
      {/* Navigation Header */}
      <Header headerClass="transparent header-light" />

      {/* Subheader banner */}
      <Subheader title="Testimonials" tagline="Guest Reviews" backgroundImage="/images/background/1.webp" />

      <main className="bg-dark text-light py-5">
        <section className="py-4">
          <div className="container">
            
            <div className="row g-4 justify-content-center mb-5 text-center">
              <div className="col-lg-6">
                <div className="subtitle text-primary text-uppercase" style={{ color: '#c89c56' }}>Reviews</div>
                <h2 className="text-white fs-40">What Our Guests Say</h2>
                <p className="text-muted">
                  We are extremely proud to share the verified reviews and feedback provided by our beloved guests.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {reviews.map((rev, idx) => (
                <div className="col-md-6 col-lg-4" key={idx}>
                  <div className="p-4 p-md-5 bg-dark-2 rounded-1 border border-secondary border-opacity-10 h-100 d-flex flex-column justify-content-between transition-all duration-300 hover-scale-1-1">
                    
                    {/* Stars & Text */}
                    <div>
                      <div className="d-stars text-primary mb-3" style={{ color: '#c89c56' }}>
                        {[...Array(rev.rating)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star fs-16 me-1"></i>
                        ))}
                      </div>
                      <p className="text-muted leading-relaxed mb-4 italic" style={{ fontSize: '15px' }}>
                        "{rev.text}"
                      </p>
                    </div>

                    {/* Author Metadata */}
                    <div className="border-top border-secondary border-opacity-25 pt-3 d-flex justify-content-between align-items-center">
                      <span className="fw-bold text-white" style={{ fontSize: '15px' }}>{rev.author}</span>
                      <span className="text-muted small">{rev.date}</span>
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
