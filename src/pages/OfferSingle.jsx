import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

/**
 * Single Offer Detail Component.
 * Illustrates romantic weekend deals, inclusions, terms, and custom sidebar redirects.
 */
export default function OfferSingle() {
  return (
    <div className="offer-single-layout">
      {/* Header Navigation */}
      <Header headerClass="transparent header-light" />

      {/* Subheader banner */}
      <Subheader title="Romantic Stay" tagline="20% Off Weekend Packages" backgroundImage="/images/background/1.webp" />

      <main className="bg-dark text-light py-5">
        <section className="py-4">
          <div className="container">
            <div className="row g-5">

              {/* Main Content Area */}
              <div className="col-lg-8">
                <div className="bg-dark-2 p-4 p-md-5 rounded-1 border border-secondary border-opacity-10 mb-4">
                  <h3 className="fs-28 text-white mb-4" style={{ fontWeight: 600 }}>Unwind in Romantic Harmony</h3>
                  <p className="text-muted leading-relaxed mb-4">
                    Enjoy a memorable romantic getaway designed for couples seeking comfort,
                    intimacy, and unforgettable moments. Our Romantic Stay package combines
                    elegant accommodation, fine dining, and thoughtful touches to make your
                    weekend truly special.
                  </p>

                  <h4 className="fs-20 text-white mt-5 mb-3" style={{ fontWeight: 600 }}>What’s Included</h4>
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-5">
                    <li className="d-flex align-items-center text-muted">
                      <i className="fa-solid fa-circle-check text-primary fs-16 me-3" style={{ color: '#c89c56' }}></i>
                      Luxury room with custom romantic setup
                    </li>
                    <li className="d-flex align-items-center text-muted">
                      <i className="fa-solid fa-circle-check text-primary fs-16 me-3" style={{ color: '#c89c56' }}></i>
                      Complimentary premium wine on arrival
                    </li>
                    <li className="d-flex align-items-center text-muted">
                      <i className="fa-solid fa-circle-check text-primary fs-16 me-3" style={{ color: '#c89c56' }}></i>
                      Candlelight dining for two at our signature bistro
                    </li>
                    <li className="d-flex align-items-center text-muted">
                      <i className="fa-solid fa-circle-check text-primary fs-16 me-3" style={{ color: '#c89c56' }}></i>
                      Late check-out options (subject to availability)
                    </li>
                    <li className="d-flex align-items-center text-muted">
                      <i className="fa-solid fa-circle-check text-primary fs-16 me-3" style={{ color: '#c89c56' }}></i>
                      Daily gourmet hot breakfast buffet
                    </li>
                  </ul>

                  <h4 className="fs-20 text-white mt-4 mb-3" style={{ fontWeight: 600 }}>Terms & Conditions</h4>
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                    <li className="d-flex align-items-center text-muted">
                      <i className="fa-solid fa-circle-info text-primary fs-16 me-3" style={{ color: '#c89c56' }}></i>
                      Valid for weekend bookings only (Friday to Sunday nights)
                    </li>
                    <li className="d-flex align-items-center text-muted">
                      <i className="fa-solid fa-circle-info text-primary fs-16 me-3" style={{ color: '#c89c56' }}></i>
                      Minimum 2-day advanced reservations required
                    </li>
                    <li className="d-flex align-items-center text-muted">
                      <i className="fa-solid fa-circle-info text-primary fs-16 me-3" style={{ color: '#c89c56' }}></i>
                      This offer cannot be combined with other ongoing promotions
                    </li>
                    <li className="d-flex align-items-center text-muted">
                      <i className="fa-solid fa-circle-info text-primary fs-16 me-3" style={{ color: '#c89c56' }}></i>
                      Subject to rooms occupancy levels
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sidebar Booking Section */}
              <div className="col-lg-4">
                <div className="bg-white rounded-1 p-4 p-md-5 text-dark shadow-sm border border-light">
                  <h3 className="fs-24 mb-4 text-dark" style={{ fontWeight: 700 }}>Book This Offer</h3>

                  <div className="mb-4">
                    <h2 className="mb-1 text-primary fs-48 fw-bold" style={{ color: '#c89c56' }}>
                      20% OFF
                    </h2>
                    <span className="text-muted small">Limited-time weekend offer pack</span>
                  </div>

                  <div className="d-flex flex-column gap-3 mb-4">
                    <Link 
                      to="/reservation?roomType=Executive Room&guests=2" 
                      className="btn-main fx-slide w-100 text-center py-3 rounded-1 text-decoration-none"
                    >
                      <span>Book Now</span>
                    </Link>
                    <Link 
                      to="/contact" 
                      className="btn-main bg-light text-dark fx-slide w-100 text-center py-3 rounded-1 text-decoration-none border border-secondary border-opacity-25"
                    >
                      <span>Inquire Now</span>
                    </Link>
                  </div>

                  <p className="small text-muted mb-0 leading-relaxed">
                    Need instant help? Talk to our customer relations desk or send an inquiry through our dedicated contact form.
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
