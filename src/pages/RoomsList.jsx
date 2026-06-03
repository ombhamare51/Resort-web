import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

/**
 * Rooms List Page Component.
 * Presents available hotel rooms vertically with image, details, and action sections.
 */
export default function RoomsList() {
  const rooms = [
    { 
      id: 1, 
      name: 'Standard Room', 
      price: 109, 
      img: '/images/rooms/1.webp', 
      guests: 2, 
      size: '28 ft', 
      desc: 'Elegant and cozy room designed for comfort and relaxation, featuring tasteful interiors and a warm, inviting atmosphere.' 
    },
    { 
      id: 2, 
      name: 'Superior Room', 
      price: 129, 
      img: '/images/rooms/2.webp', 
      guests: 2, 
      size: '28 ft', 
      desc: 'Refined space with premium amenities and modern design, offering enhanced comfort for a more enjoyable stay.', 
      tag: 'Best Selling' 
    },
    { 
      id: 3, 
      name: 'Executive Room', 
      price: 149, 
      img: '/images/rooms/3.webp', 
      guests: 2, 
      size: '28 ft', 
      desc: 'Ideal for business travelers, combining comfort and functionality with a calm and well-designed interior.' 
    },
    { 
      id: 4, 
      name: 'Premium Suite', 
      price: 179, 
      img: '/images/rooms/4.webp', 
      guests: 2, 
      size: '28 ft', 
      desc: 'Luxury suite offering spacious living areas and refined details for a more elevated stay experience.' 
    },
    { 
      id: 5, 
      name: 'Family Suite', 
      price: 229, 
      img: '/images/rooms/1.webp', 
      guests: 4, 
      size: '50 ft', 
      desc: 'Perfect choice for families, providing generous space and thoughtful layout for added comfort.' 
    },
    { 
      id: 6, 
      name: 'Luxury Suite', 
      price: 309, 
      img: '/images/rooms/4.webp', 
      guests: 4, 
      size: '60 ft', 
      desc: 'Ultimate luxury experience featuring exclusive facilities and refined design for discerning guests.' 
    }
  ];

  return (
    <div className="rooms-list-layout bg-transparent">
      {/* Navigation Header */}
      <Header headerClass="transparent header-light" />

      {/* Subheader */}
      <Subheader title="Our Rooms" tagline="Enjoy Your Stay" crumbTitle="Rooms" backgroundImage="/images/background/1.webp" />

      <main className="py-5 mx-2 rounded-4 overflow-hidden" style={{ backgroundColor: '#f8f9fa', marginLeft: '10px', marginRight: '10px', borderRadius: '24px' }}>
        <section className="py-4">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="row g-4">
              
              {rooms.map((room) => (
                <div className="col-lg-12" key={room.id}>
                  <div className="bg-white rounded-3 overflow-hidden border border-secondary border-opacity-10 transition-all duration-300 hover-scale-1-1 shadow-sm">
                    <div className="row g-0 align-items-center">
                      
                      {/* Left: Room Image */}
                      <div className="col-md-4">
                        <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
                          {room.tag && (
                            <h3 
                              className="abs bg-color rounded text-white fs-12 lh-1 p-2 px-3 m-3 top-0 start-0 z-3" 
                              style={{ backgroundColor: '#c89c56', position: 'absolute', fontWeight: 600 }}
                            >
                              {room.tag}
                            </h3>
                          )}
                          <img src={room.img} className="w-100 h-100 object-fit-cover hover-scale-1-2" alt={room.name} style={{ objectFit: 'cover' }} />
                        </div>
                      </div>

                      {/* Middle: Name, Stars, and Description */}
                      <div className="col-md-5">
                        <div className="p-4 text-dark">
                          <h3 className="fs-24 mb-1 text-dark" style={{ fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>{room.name}</h3>
                          
                          {/* 5-star rating */}
                          <div className="d-stars mb-3" style={{ color: '#c89c56' }}>
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="fa-solid fa-star fs-12 me-1"></i>
                            ))}
                          </div>

                          <p className="text-muted small leading-relaxed mb-0" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>{room.desc}</p>
                        </div>
                      </div>

                      {/* Right: Specifications & Action */}
                      <div className="col-md-3">
                        <div className="p-4 d-flex flex-column gap-2 text-dark border-start-md border-light h-100 justify-content-center" style={{ minHeight: '180px' }}>
                          <div className="d-flex align-items-center text-muted fs-14">
                            <i className="fa-regular fa-user me-2 text-dark fs-16"></i>
                            {room.guests} guests
                          </div>
                          
                          <div className="d-flex align-items-center text-muted fs-14 mb-2">
                            <i className="fa-solid fa-expand me-2 text-dark fs-16"></i>
                            {room.size}
                          </div>

                          <div className="d-flex align-items-baseline mb-3">
                            <span className="fs-24 fw-bold text-dark">${room.price}</span>
                            <span className="ms-1 fs-14 text-muted">/ night</span>
                          </div>

                          <Link 
                            to="/room-single" 
                            className="btn-main fx-slide hover-white py-2 px-4 rounded text-decoration-none text-center fw-semibold fs-14"
                            style={{ borderRadius: '30px', display: 'inline-block' }}
                          >
                            <span>Select Room</span>
                          </Link>
                        </div>
                      </div>

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
