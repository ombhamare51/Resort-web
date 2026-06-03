import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

/**
 * Split Layout Rooms Component.
 * Presents available hotel rooms in an alternating split layout with images and descriptions.
 */
export default function RoomsSplit() {
  const rooms = [
    { 
      id: 1, 
      name: 'Standard Room', 
      price: 109, 
      img: '/images/rooms/1.webp', 
      guests: 2, 
      size: '28 ft', 
      desc: 'Elegant and cozy room designed for comfort and relaxation, featuring tasteful interiors and a warm, inviting atmosphere throughout.' 
    },
    { 
      id: 2, 
      name: 'Superior Room', 
      price: 129, 
      img: '/images/rooms/2.webp', 
      guests: 2, 
      size: '28 ft', 
      desc: 'Refined and spacious room offering modern design accents and enhanced details for a more enjoyable stay.' 
    },
    { 
      id: 3, 
      name: 'Executive Room', 
      price: 149, 
      img: '/images/rooms/3.webp', 
      guests: 2, 
      size: '28 ft', 
      desc: 'Designed for business travelers, combining comfort, functionality, and a dedicated environment for productivity.' 
    },
    { 
      id: 4, 
      name: 'Premium Suite', 
      price: 179, 
      img: '/images/rooms/4.webp', 
      guests: 2, 
      size: '28 ft', 
      desc: 'Luxury suite with generous living space and refined details for an upscale and relaxing stay.' 
    },
    { 
      id: 5, 
      name: 'Family Suite', 
      price: 199, 
      img: '/images/rooms/1.webp', 
      guests: 4, 
      size: '35 ft', 
      desc: 'Spacious and family-friendly suite offering comfort and convenience for a relaxing stay together.' 
    },
    { 
      id: 6, 
      name: 'Luxury Suite', 
      price: 249, 
      img: '/images/rooms/4.webp', 
      guests: 5, 
      size: '50 ft', 
      desc: 'An exclusive suite offering expansive space, premium amenities, and a truly refined luxury stay.' 
    }
  ];

  return (
    <div className="rooms-split-layout bg-transparent">
      {/* Navigation Header */}
      <Header headerClass="transparent header-light" />

      {/* Subheader */}
      <Subheader title="Our Rooms" tagline="Enjoy Your Stay" crumbTitle="Rooms" backgroundImage="/images/background/1.webp" />

      <main className="py-5 mx-2 rounded-4 overflow-hidden" style={{ backgroundColor: '#f8f9fa', marginLeft: '10px', marginRight: '10px', borderRadius: '24px' }}>
        <section className="py-4">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="row g-4">
              
              {rooms.map((room, idx) => {
                const isEven = idx % 2 === 0;
                
                return (
                  <div className="col-lg-12 mb-4" key={room.id}>
                    <div className="bg-white rounded-3 overflow-hidden border border-secondary border-opacity-10 shadow-sm">
                      <div className="row g-0 align-items-center">
                        
                        {/* Text Content Column */}
                        <div className={`col-md-6 p-4 p-md-5 text-dark ${isEven ? 'order-2 order-md-1' : 'order-2 order-md-2'}`}>
                          <h3 className="fs-28 mb-1 text-dark" style={{ fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>{room.name}</h3>
                          
                          {/* 5-star rating */}
                          <div className="d-stars mb-3" style={{ color: '#c89c56' }}>
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="fa-solid fa-star fs-12 me-1"></i>
                            ))}
                          </div>

                          <p className="text-muted leading-relaxed mb-4" style={{ fontSize: '15px', lineHeight: '1.6' }}>{room.desc}</p>
                          
                          {/* Specs */}
                          <div className="d-flex flex-wrap gap-4 mb-4 text-muted fs-14">
                            <span className="d-flex align-items-center">
                              <i className="fa-regular fa-user me-2 text-dark fs-16"></i>
                              {room.guests} guests
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="fa-solid fa-expand me-2 text-dark fs-16"></i>
                              {room.size}
                            </span>
                          </div>

                          {/* Price & Action */}
                          <div className="d-flex align-items-center gap-4 border-top border-light pt-3 mt-3">
                            <div className="d-flex align-items-baseline">
                              <span className="fs-24 fw-bold text-dark">${room.price}</span>
                              <span className="ms-1 fs-14 text-muted">/ night</span>
                            </div>
                            <Link 
                              to="/room-single" 
                              className="btn-main fx-slide hover-white py-2 px-4 rounded text-decoration-none fw-semibold fs-14"
                              style={{ borderRadius: '30px' }}
                            >
                              <span>Select Room</span>
                            </Link>
                          </div>
                        </div>

                        {/* Image Column */}
                        <div className={`col-md-6 ${isEven ? 'order-1 order-md-2' : 'order-1 order-md-1'}`}>
                          <div className="position-relative overflow-hidden" style={{ height: '380px' }}>
                            <img src={room.img} className="w-100 h-100 object-fit-cover hover-scale-1-2" alt={room.name} style={{ objectFit: 'cover' }} />
                          </div>
                        </div>

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
