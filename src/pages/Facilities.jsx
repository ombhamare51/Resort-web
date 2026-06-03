import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

/**
 * Facilities Page Component.
 * Migrates modular grid blocks showcasing cafe, pool, spa, and fitness areas.
 */
export default function Facilities() {
  const facilityItems = [
    {
      title: 'Cafe and Restaurant',
      desc: 'Indulge in our exquisite restaurant and cafe menus, boasting signature creations by award-winning global culinary artists.',
      img: '/images/misc/s4.webp',
      imgPosition: 'left' // text is on the right
    },
    {
      title: 'Swimming Pool',
      desc: 'Rejuvenate your senses at our state-of-the-art heated infinity pool, offering sweeping city and nature views.',
      img: '/images/misc/s5.webp',
      imgPosition: 'left' // text is on the right
    },
    {
      title: 'Spa & Massage',
      desc: 'Relax and unwind with bespoke massage therapies, sauna sessions, and personalized holistic wellness programs.',
      img: '/images/misc/s6.webp',
      imgPosition: 'right' // text is on the left
    },
    {
      title: 'Fitness Center',
      desc: 'Stay energetic and achieve your health targets using our ultra-modern cardio machines and resistance weights.',
      img: '/images/misc/s7.webp',
      imgPosition: 'right' // text is on the left
    }
  ];

  return (
    <div className="facilities-layout">
      {/* Navigation */}
      <Header headerClass="transparent header-light" />

      {/* Subheader */}
      <Subheader title="Facilities" tagline="Enjoy Your Stay" backgroundImage="/images/background/1.webp" />

      <main className="bg-white py-5 text-dark">
        <section className="py-4 bg-light">
          <div className="container">
            <div className="row g-0">
              
              {/* Cafe & Restaurant */}
              <div className="col-lg-6">
                <div>
                  <div className="row g-0 align-items-end">
                    <div className="col-md-6">
                      <div className="relative overflow-hidden">
                        <img src="/images/misc/s4.webp" className="w-100 hover-scale-1-2" alt="Cafe and Restaurant" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="p-40 text-start">
                        <h3 className="text-dark">Cafe and Restaurant</h3>
                        <p className="mb-0 text-muted">Indulge in our exquisite restaurant and cafe menus, boasting signature creations by award-winning global culinary artists.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Swimming Pool */}
              <div className="col-lg-6">
                <div>
                  <div className="row g-0 align-items-end">
                    <div className="col-md-6">
                      <div className="relative overflow-hidden">
                        <img src="/images/misc/s5.webp" className="w-100 hover-scale-1-2" alt="Swimming Pool" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="p-40 text-start">
                        <h3 className="text-dark">Swimming Pool</h3>
                        <p className="mb-0 text-muted">Rejuvenate your senses at our state-of-the-art heated infinity pool, offering sweeping city and nature views.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spa & Massage */}
              <div className="col-lg-6">
                <div>
                  <div className="row g-0 align-items-start">
                    <div className="col-md-6 col-sm-12 text-start">
                      <div className="p-40">
                        <h3 className="text-dark">Spa & Massage</h3>
                        <p className="mb-0 text-muted">Relax and unwind with bespoke massage therapies, sauna sessions, and personalized holistic wellness programs.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="relative overflow-hidden">
                        <img src="/images/misc/s6.webp" className="w-100 hover-scale-1-2" alt="Spa & Massage" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fitness Center */}
              <div className="col-lg-6">
                <div>
                  <div className="row g-0 align-items-start">
                    <div className="col-md-6 col-sm-12 text-start">
                      <div className="p-40">
                        <h3 className="text-dark">Fitness Center</h3>
                        <p className="mb-0 text-muted">Stay energetic and achieve your health targets using our ultra-modern cardio machines and resistance weights.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="relative overflow-hidden">
                        <img src="/images/misc/s7.webp" className="w-100 hover-scale-1-2" alt="Fitness Center" />
                      </div>
                    </div>
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
