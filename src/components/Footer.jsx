import React from 'react';

/**
 * Universal Footer component with Saptagiri brand alignment.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="text-light relative custom-footer" 
      style={{ 
        fontFamily: "'Outfit', sans-serif"
      }}
    >
      <div className="container-fluid">
        <div className="row g-4 align-items-center text-center">
          {/* Address Column */}
          <div className="col-md-4 d-flex justify-content-md-start justify-content-center text-center">
            <div>
              <h5 
                className="text-white mb-3"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: '600',
                  fontSize: '20px',
                  letterSpacing: '0.2px'
                }}
              >
                Address
              </h5>
              <p 
                className="text-white m-0" 
                style={{ 
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: '400',
                  color: '#ffffff',
                  lineHeight: '1.65',
                  fontSize: '17px' 
                }}
              >
                742 Evergreen Terrace<br />
                Brooklyn, NY 11201
              </p>
            </div>
          </div>

          {/* Logo & Socials Column (Center) */}
          <div className="col-md-4 text-center my-4 my-md-0">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex align-items-center gap-2 mb-3">
                <img 
                  src="/images/Saptagiri.png" 
                  alt="Saptagiri Logo" 
                  style={{ maxHeight: '45px', width: 'auto' }}
                />
                <span 
                  style={{ 
                    fontFamily: "'Montserrat', sans-serif", 
                    fontWeight: 700, 
                    fontSize: '24px', 
                    color: '#ffffff',
                    letterSpacing: '0.5px'
                  }}
                >
                  Saptagiri
                </span>
              </div>
              <div className="social-icons d-flex justify-content-center gap-3">
                <a href="#" aria-label="Facebook" style={{ color: 'rgba(255, 255, 255, 0.6)', transition: 'color 0.3s' }} className="hover-white"><i className="fa-brands fa-facebook-f fs-16"></i></a>
                <a href="#" aria-label="Instagram" style={{ color: 'rgba(255, 255, 255, 0.6)', transition: 'color 0.3s' }} className="hover-white"><i className="fa-brands fa-instagram fs-16"></i></a>
                <a href="#" aria-label="Twitter" style={{ color: 'rgba(255, 255, 255, 0.6)', transition: 'color 0.3s' }} className="hover-white"><i className="fa-brands fa-twitter fs-16"></i></a>
                <a href="#" aria-label="YouTube" style={{ color: 'rgba(255, 255, 255, 0.6)', transition: 'color 0.3s' }} className="hover-white"><i className="fa-brands fa-youtube fs-16"></i></a>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="col-md-4 d-flex justify-content-md-end justify-content-center text-center">
            <div>
              <h5 
                className="text-white mb-3"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: '600',
                  fontSize: '20px',
                  letterSpacing: '0.2px'
                }}
              >
                Contact Us
              </h5>
              <p 
                className="text-white m-0" 
                style={{ 
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: '400',
                  color: '#ffffff',
                  lineHeight: '1.65',
                  fontSize: '17px' 
                }}
              >
                T. +929 333 9296<br />
                M. contact@saptagiri.com
              </p>
            </div>
          </div>
        </div>

        {/* Subfooter with Spaced Layout exactly like Mockup */}
        <div className="border-top border-white border-opacity-10 mt-5 pt-4">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
            {/* Left element: Invisible spacer to maintain perfect horizontal centering of copyright */}
            <div style={{ minWidth: '150px' }} className="d-none d-md-flex"></div>

            {/* Center element: Copyright */}
            <div className="text-center">
              <p className="text-white m-0 fs-13" style={{ fontFamily: "'Jost', sans-serif", color: '#ffffff' }}>
                Copyright {currentYear} - Saptagiri by Digi Mirai
              </p>
            </div>

            {/* Right element: Scroll to Top button */}
            <div style={{ minWidth: '150px' }} className="d-flex justify-content-center justify-content-md-end">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Scroll to Top"
                className="border-0 d-flex align-items-center justify-content-center" 
                style={{ 
                  backgroundColor: '#D09E5A', 
                  color: '#ffffff', 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '50%',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <i className="fa-solid fa-chevron-up fs-13"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
