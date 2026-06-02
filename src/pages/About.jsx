import React from 'react';
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

  return (
    <div className="about-layout">
      {/* Header */}
      <Header headerClass="transparent header-light" />

      {/* Subheader Banner */}
      <Subheader title="About Us" tagline="Who We Are" backgroundImage="/images/background/1.webp" />

      <main className="bg-dark text-light">
        
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
              <div className="col-lg-6">
                <div className="ps-lg-4">
                  <div className="subtitle text-primary text-uppercase tracking-wider mb-2" style={{ color: '#c89c56' }}>About Our Hotel</div>
                  <h2 className="fs-40 text-white mb-3">Where Relaxation Meets Elegance</h2>
                  <p className="text-muted leading-relaxed mb-0">
                    Experience refined hospitality designed to make every stay memorable and effortless. Our hotel offers thoughtfully curated rooms, attentive service, and a welcoming atmosphere where comfort and convenience come together seamlessly. From restful nights to peaceful mornings, every detail is carefully arranged to ensure guests enjoy a relaxing, enjoyable, and truly satisfying stay throughout their visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-dark-2 py-5 border-top border-secondary border-opacity-10">
          <div className="container py-4">
            <div className="row g-4 mb-5 justify-content-center text-center">
              <div className="col-lg-6">
                <div className="subtitle text-primary text-uppercase" style={{ color: '#c89c56' }}>Our Team</div>
                <h2 className="text-white fs-40 mb-3">Meet Our Professionals</h2>
                <p className="text-muted">
                  Dedicated hospitality professionals working together to deliver seamless service and exceptional guest experiences throughout your stay.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {team.map((member, index) => (
                <div className="col-lg-3 col-md-6 text-center" key={index}>
                  <img src={member.img} className="w-100 rounded-10px hover-scale-1-1" alt={member.name} style={{ borderRadius: '10px' }} />
                  <div className="p-3 text-white">
                    <h3 className="mb-1 fs-20">{member.name}</h3>
                    <p className="text-muted small mb-3">{member.role}</p>
                    <div className="social-icons d-flex justify-content-center gap-2">
                      <a href="#" aria-label="Facebook"><i className="bg-white text-dark bg-hover-2 text-hover-white fa-brands fa-facebook-f p-2 rounded-circle" style={{ width: '32px', height: '32px', fontSize: '12px' }}></i></a>
                      <a href="#" aria-label="Twitter"><i className="bg-white text-dark bg-hover-2 text-hover-white fa-brands fa-x-twitter p-2 rounded-circle" style={{ width: '32px', height: '32px', fontSize: '12px' }}></i></a>
                      <a href="#" aria-label="Instagram"><i className="bg-white text-dark bg-hover-2 text-hover-white fa-brands fa-instagram p-2 rounded-circle" style={{ width: '32px', height: '32px', fontSize: '12px' }}></i></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Statistic Counters */}
        <section className="bg-dark py-5">
          <div className="container py-4">
            <div className="row g-4 mb-4 justify-content-center text-center">
              <div className="col-lg-6">
                <div className="subtitle text-primary text-uppercase" style={{ color: '#c89c56' }}>At a Glance</div>
                <h2 className="text-white fs-40">Hotel Statistics</h2>
              </div>
            </div>

            <div className="row g-4">
              {/* Counter 1 */}
              <div className="col-md-4 text-center">
                <div className="p-5 bg-dark-2 rounded-1 border border-secondary border-opacity-25">
                  <small className="text-uppercase text-muted border-bottom d-block pb-3 fw-semibold">TOTAL ROOMS</small>
                  <h2 className="mb-2 mt-4 text-white fs-60 fw-bold">
                    {countRooms}
                    <span className="text-primary ms-1" style={{ color: '#c89c56' }}>+</span>
                  </h2>
                  <p className="text-muted mb-0">luxury rooms & suites</p>
                </div>
              </div>

              {/* Counter 2 */}
              <div className="col-md-4 text-center">
                <div className="p-5 bg-dark-2 rounded-1 border border-secondary border-opacity-25">
                  <small className="text-uppercase text-muted border-bottom d-block pb-3 fw-semibold">YEARLY VISITORS</small>
                  <h2 className="mb-2 mt-4 text-white fs-60 fw-bold">
                    {countVisitors}
                    <span className="text-primary ms-1" style={{ color: '#c89c56' }}>+</span>
                  </h2>
                  <p className="text-muted mb-0">happy guests</p>
                </div>
              </div>

              {/* Counter 3 */}
              <div className="col-md-4 text-center">
                <div className="p-5 bg-dark-2 rounded-1 border border-secondary border-opacity-25">
                  <small className="text-uppercase text-muted border-bottom d-block pb-3 fw-semibold">SIGNATURE MENU</small>
                  <h2 className="mb-2 mt-4 text-white fs-60 fw-bold">
                    {countMenu}
                    <span className="text-primary ms-1" style={{ color: '#c89c56' }}>+</span>
                  </h2>
                  <p className="text-muted mb-0">curated dishes & beverages</p>
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
