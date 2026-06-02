import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

/**
 * Contact Us Page Component.
 * Supports contact maps, information cards, dynamic contact form, and checks.
 */
export default function Contact() {
  // Input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Status and error states
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, sending, success, error
  const [validationError, setValidationError] = useState('');

  // Scroll back to top when submission status changes to show alerts/success messages
  useEffect(() => {
    if (submitStatus === 'success' || submitStatus === 'error' || validationError) {
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: false, duration: 1.0 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [submitStatus, validationError]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setValidationError('');

    // Field validations
    if (name.trim().length < 3) {
      setValidationError('Please enter a valid name (at least 3 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    const phoneRegex = /^[0-9+\s-]{8,15}$/;
    if (!phoneRegex.test(phone)) {
      setValidationError('Please enter a valid phone number (8-15 digits).');
      return;
    }

    if (message.trim().length < 10) {
      setValidationError('Please write a brief message (at least 10 characters).');
      return;
    }

    // Simulate sending API request
    setSubmitStatus('sending');
    setTimeout(() => {
      setSubmitStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="contact-layout">
      {/* Header */}
      <Header headerClass="transparent header-light" />

      {/* Subheader banner */}
      <Subheader title="Contact Us" tagline="Get In Touch" backgroundImage="/images/background/1.webp" />

      <main className="bg-dark text-light py-5">
        <section className="py-4">
          <div className="container">
            <div className="row g-5">
              
              {/* Contact Information Sidebar */}
              <div className="col-lg-4">
                <div className="bg-dark-2 p-4 p-md-5 rounded-1 border border-secondary border-opacity-10 h-100 d-flex flex-column gap-4 justify-content-center">
                  
                  {/* Item 1 */}
                  <div className="d-flex align-items-start gap-3">
                    <div className="p-3 rounded-circle bg-dark-3 d-flex align-items-center justify-content-center border border-secondary border-opacity-25" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="fa-solid fa-map-location-dot text-primary fs-18" style={{ color: '#c89c56' }}></i>
                    </div>
                    <div>
                      <h4 className="fs-18 text-white mb-1" style={{ fontWeight: 600 }}>Location</h4>
                      <p className="text-muted small mb-0 leading-relaxed">
                        742 Evergreen Terrace<br />Brooklyn, NY 11201
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="d-flex align-items-start gap-3">
                    <div className="p-3 rounded-circle bg-dark-3 d-flex align-items-center justify-content-center border border-secondary border-opacity-25" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="fa-solid fa-phone-volume text-primary fs-18" style={{ color: '#c89c56' }}></i>
                    </div>
                    <div>
                      <h4 className="fs-18 text-white mb-1" style={{ fontWeight: 600 }}>Call Center</h4>
                      <p className="text-muted small mb-0 leading-relaxed">
                        T. +929 333 9296<br />M. +929 333 9297
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="d-flex align-items-start gap-3">
                    <div className="p-3 rounded-circle bg-dark-3 d-flex align-items-center justify-content-center border border-secondary border-opacity-25" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="fa-solid fa-envelope-open-text text-primary fs-18" style={{ color: '#c89c56' }}></i>
                    </div>
                    <div>
                      <h4 className="fs-18 text-white mb-1" style={{ fontWeight: 600 }}>Email Address</h4>
                      <p className="text-muted small mb-0 leading-relaxed">
                        contact@saptagiri.com<br />support@saptagiri.com
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Inquiry Form Column */}
              <div className="col-lg-8">
                <div className="bg-dark-2 p-4 p-md-5 rounded-1 border border-secondary border-opacity-10">
                  <h3 className="fs-28 text-white mb-2" style={{ fontWeight: 600 }}>Send Us a Message</h3>
                  <p className="text-muted small mb-4">Have an inquiry or want to customize your stay? Send a message and our team will reply within a few hours.</p>
                  
                  {/* Alert messages */}
                  {validationError && (
                    <div className="alert alert-warning py-3 rounded-1 mb-4 border-0 text-dark">
                      <i className="fa-solid fa-triangle-exclamation me-2"></i> {validationError}
                    </div>
                  )}

                  {submitStatus === 'success' && (
                    <div className="alert alert-success py-3 rounded-1 mb-4 border-0 text-dark">
                      <i className="fa-solid fa-circle-check me-2"></i> Your message has been sent successfully. Thank you for contacting Saptagiri.
                    </div>
                  )}

                  <form onSubmit={handleContactSubmit}>
                    <div className="row g-4">
                      
                      <div className="col-md-6">
                        <input 
                          type="text" 
                          className="form-control bg-transparent border-secondary text-white py-3" 
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          disabled={submitStatus === 'sending'}
                          required 
                        />
                      </div>

                      <div className="col-md-6">
                        <input 
                          type="email" 
                          className="form-control bg-transparent border-secondary text-white py-3" 
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={submitStatus === 'sending'}
                          required 
                        />
                      </div>

                      <div className="col-md-12">
                        <input 
                          type="tel" 
                          className="form-control bg-transparent border-secondary text-white py-3" 
                          placeholder="Your Phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          disabled={submitStatus === 'sending'}
                          required 
                        />
                      </div>

                      <div className="col-md-12">
                        <textarea 
                          rows="6" 
                          className="form-control bg-transparent border-secondary text-white py-3" 
                          placeholder="Your Message..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          disabled={submitStatus === 'sending'}
                          required
                        />
                      </div>

                      <div className="col-md-12 mt-4">
                        <button 
                          type="submit" 
                          className="btn-main px-5 py-3 border-0 rounded text-white"
                          disabled={submitStatus === 'sending'}
                        >
                          {submitStatus === 'sending' ? 'Sending Message...' : 'Submit Message'}
                        </button>
                      </div>

                    </div>
                  </form>
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
