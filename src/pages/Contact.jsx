import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

/**
 * Contact Us Page Component.
 * Migrated to match the clean light theme design exactly.
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

  // Scroll back to top when submission status changes
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
      <Subheader title="Contact" tagline="Enjoy Your Stay" backgroundImage="/images/background/1.webp" />

      <main className="bg-white text-dark py-5">
        <section className="py-5">
          <div className="container py-3">
            <div className="row g-5 align-items-center">
              
              {/* Contact Information Sidebar */}
              <div className="col-lg-6 text-start">
                <span className="subtitle text-primary text-uppercase tracking-wider mb-2 d-block" style={{ color: '#c89c56', fontWeight: 700, fontFamily: "'Jost', sans-serif" }}>Write a Message</span>
                <h2 className="fs-48 text-dark mb-4" style={{ fontWeight: 700, fontFamily: "'Outfit', sans-serif", letterSpacing: '-1px' }}>Get In Touch</h2>
                <p className="text-muted leading-relaxed mb-5" style={{ fontFamily: "'Jost', sans-serif", fontSize: '16px' }}>
                  Have a question, suggestion, or just want to say hi?<br />
                  We're here and happy to hear from you!
                </p>

                <div className="row g-4 mt-2">
                  {/* Address */}
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-flex align-items-center justify-content-center text-white" style={{ width: '56px', height: '56px', backgroundColor: '#c89c56', minWidth: '56px', borderRadius: '12px' }}>
                        <i className="fa-solid fa-location-dot fs-20"></i>
                      </div>
                      <div className="text-start">
                        <h4 className="fs-18 text-dark mb-1" style={{ fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>Address</h4>
                        <span className="text-muted small" style={{ fontFamily: "'Jost', sans-serif" }}>742 Evergreen Terrace</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-flex align-items-center justify-content-center text-white" style={{ width: '56px', height: '56px', backgroundColor: '#c89c56', minWidth: '56px', borderRadius: '12px' }}>
                        <i className="fa-solid fa-envelope fs-20"></i>
                      </div>
                      <div className="text-start">
                        <h4 className="fs-18 text-dark mb-1" style={{ fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>Email</h4>
                        <span className="text-muted small" style={{ fontFamily: "'Jost', sans-serif" }}>contact@rivora.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-flex align-items-center justify-content-center text-white" style={{ width: '56px', height: '56px', backgroundColor: '#c89c56', minWidth: '56px', borderRadius: '12px' }}>
                        <i className="fa-solid fa-phone fs-20"></i>
                      </div>
                      <div className="text-start">
                        <h4 className="fs-18 text-dark mb-1" style={{ fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>Phone</h4>
                        <span className="text-muted small" style={{ fontFamily: "'Jost', sans-serif" }}>(123) 202-9296</span>
                      </div>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-flex align-items-center justify-content-center text-white" style={{ width: '56px', height: '56px', backgroundColor: '#c89c56', minWidth: '56px', borderRadius: '12px' }}>
                        <i className="fa-solid fa-phone fs-20"></i>
                      </div>
                      <div className="text-start">
                        <h4 className="fs-18 text-dark mb-1" style={{ fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>Instagram</h4>
                        <span className="text-muted small" style={{ fontFamily: "'Jost', sans-serif" }}>rivora_hotel_theme</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Form Column */}
              <div className="col-lg-6">
                <div className="p-4 p-md-5 text-start" style={{ backgroundColor: '#f3eae1', borderRadius: '24px' }}>
                  
                  {/* Alert messages */}
                  {validationError && (
                    <div className="alert alert-warning py-3 rounded-3 mb-4 border-0 text-dark">
                      <i className="fa-solid fa-triangle-exclamation me-2"></i> {validationError}
                    </div>
                  )}

                  {submitStatus === 'success' && (
                    <div className="alert alert-success py-3 rounded-3 mb-4 border-0 text-dark">
                      <i className="fa-solid fa-circle-check me-2"></i> Your message has been sent successfully.
                    </div>
                  )}

                  <form onSubmit={handleContactSubmit}>
                    <div className="row g-4">
                      
                      <div className="col-md-6 text-start">
                        <label className="text-dark fw-bold mb-2 d-block text-start" style={{ fontFamily: "'Outfit', sans-serif" }}>Name</label>
                        <input 
                          type="text" 
                          className="form-control bg-white border-0 py-3 text-dark rounded-3" 
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          disabled={submitStatus === 'sending'}
                          style={{ height: '52px', fontFamily: "'Jost', sans-serif" }}
                          required 
                        />
                      </div>

                      <div className="col-md-6 text-start">
                        <label className="text-dark fw-bold mb-2 d-block text-start" style={{ fontFamily: "'Outfit', sans-serif" }}>Email</label>
                        <input 
                          type="email" 
                          className="form-control bg-white border-0 py-3 text-dark rounded-3" 
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={submitStatus === 'sending'}
                          style={{ height: '52px', fontFamily: "'Jost', sans-serif" }}
                          required 
                        />
                      </div>

                      <div className="col-md-12 text-start">
                        <label className="text-dark fw-bold mb-2 d-block text-start" style={{ fontFamily: "'Outfit', sans-serif" }}>Phone</label>
                        <input 
                          type="tel" 
                          className="form-control bg-white border-0 py-3 text-dark rounded-3" 
                          placeholder="Your Phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          disabled={submitStatus === 'sending'}
                          style={{ height: '52px', fontFamily: "'Jost', sans-serif" }}
                          required 
                        />
                      </div>

                      <div className="col-md-12 text-start">
                        <label className="text-dark fw-bold mb-2 d-block text-start" style={{ fontFamily: "'Outfit', sans-serif" }}>Message</label>
                        <textarea 
                          rows="5" 
                          className="form-control bg-white border-0 py-3 text-dark rounded-3" 
                          placeholder="Your Message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          disabled={submitStatus === 'sending'}
                          style={{ fontFamily: "'Jost', sans-serif" }}
                          required
                        />
                      </div>

                      <div className="col-md-12 mt-4 text-start">
                        <button 
                          type="submit" 
                          className="btn-main px-4 py-3 border-0 text-white"
                          disabled={submitStatus === 'sending'}
                          style={{ borderRadius: '30px', backgroundColor: '#c89c56', fontWeight: '600', fontFamily: "'Outfit', sans-serif" }}
                        >
                          {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
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
