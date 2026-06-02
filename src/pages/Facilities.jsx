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

      <main className="bg-dark py-5 text-light">
        <section className="py-4">
          <div className="container">
            <div className="row g-4">
              
              {facilityItems.map((item, index) => {
                const isImageLeft = item.imgPosition === 'left';
                return (
                  <div className="col-lg-6" key={index}>
                    <div className="bg-dark-2 rounded-1 overflow-hidden h-100 border border-secondary border-opacity-10 transition-all duration-300 hover-scale-1-1">
                      
                      {/* Responsive row alignment */}
                      <div className="row g-0 align-items-center h-100">
                        {isImageLeft ? (
                          <>
                            <div className="col-md-6 h-100">
                              <div className="h-100 overflow-hidden" style={{ minHeight: '260px' }}>
                                <img src={item.img} className="w-100 h-100 object-fit-cover hover-scale-1-2" alt={item.title} style={{ height: '100%', minHeight: '260px', objectFit: 'cover' }} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="p-4 p-md-5">
                                <h3 className="fs-24 text-white mb-3" style={{ fontWeight: 600 }}>{item.title}</h3>
                                <p className="text-muted mb-0 small leading-relaxed">{item.desc}</p>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="col-md-6 order-2 order-md-1">
                              <div className="p-4 p-md-5">
                                <h3 className="fs-24 text-white mb-3" style={{ fontWeight: 600 }}>{item.title}</h3>
                                <p className="text-muted mb-0 small leading-relaxed">{item.desc}</p>
                              </div>
                            </div>
                            <div className="col-md-6 order-1 order-md-2 h-100">
                              <div className="h-100 overflow-hidden" style={{ minHeight: '260px' }}>
                                <img src={item.img} className="w-100 h-100 object-fit-cover hover-scale-1-2" alt={item.title} style={{ height: '100%', minHeight: '260px', objectFit: 'cover' }} />
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
