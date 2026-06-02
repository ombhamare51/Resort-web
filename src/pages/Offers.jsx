import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

/**
 * Special Offers List Page Component.
 * Features 6 luxurious deals with custom discount tags.
 */
export default function Offers() {
  const deals = [
    { id: 1, title: 'Romantic Stay', desc: '20% Off Weekend Packages', img: '/images/offers/1.webp', tag: '20% OFF' },
    { id: 2, title: 'Early Bird Deal', desc: 'Save Up to 30% on Rooms', img: '/images/offers/2.webp', tag: '30% OFF' },
    { id: 3, title: 'Family Getaway', desc: 'Kids Stay & Eat Free', img: '/images/offers/3.webp', tag: 'HOT DEAL' },
    { id: 4, title: 'Spa Escape', desc: 'Complimentary Spa Session', img: '/images/offers/4.webp', tag: '15% OFF' },
    { id: 5, title: 'Long Stay Offer', desc: 'Save More on 5+ Nights', img: '/images/offers/5.webp', tag: 'SAVER' },
    { id: 6, title: 'Business Package', desc: 'Free Breakfast & Airport Pickup', img: '/images/offers/6.webp', tag: 'EXECUTIVE' }
  ];

  return (
    <div className="offers-layout">
      {/* Navigation */}
      <Header headerClass="transparent header-light" />

      {/* Subheader */}
      <Subheader title="Special Offers" tagline="Enjoy Your Stay" backgroundImage="/images/background/1.webp" />

      <main className="bg-dark py-5 text-light">
        <section className="py-4">
          <div className="container">
            <div className="row g-4">
              
              {deals.map((deal) => (
                <div className="col-lg-4 col-md-6" key={deal.id}>
                  <div className="overflow-hidden rounded-1 h-100 bg-dark-2 d-flex flex-column justify-content-between border border-secondary border-opacity-10 transition-all duration-300 hover-scale-1-1">
                    
                    {/* Hover Card Cover */}
                    <div className="hover relative position-relative overflow-hidden" style={{ width: '100%', aspectRatio: '795.2 / 1189.81' }}>
                      <h3 
                        className="abs rounded-3 text-white fs-14 lh-1 p-2 px-3 m-4 top-0 start-0 z-3" 
                        style={{ backgroundColor: '#c89c56', position: 'absolute' }}
                      >
                        {deal.tag}
                      </h3>
                      <img 
                        src={deal.img} 
                        className="w-100 h-100 object-fit-cover hover-scale-1-2" 
                        alt={deal.title} 
                        style={{ objectFit: 'cover', objectPosition: 'center' }} 
                      />
                      <Link to="/offer-single" className="d-block abs w-100 h-100 top-0 start-0" style={{ position: 'absolute' }}></Link>
                    </div>

                    {/* Card Content Section */}
                    <div className="p-4 p-md-5 text-white bg-dark-2">
                      <Link className="text-white text-decoration-none" to="/offer-single">
                        <h3 className="fs-22 mb-2 hover-text-primary" style={{ transition: 'color 0.2s', fontWeight: 600 }}>{deal.title}</h3>
                        <p className="text-muted mb-0 small">{deal.desc}</p>
                      </Link>
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
