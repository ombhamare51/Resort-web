import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

/**
 * Our Rooms Layout Component.
 * Presents hotel rooms with beautiful multi-image previews, specifications, description narratives, and checklist details.
 */
export default function RoomsInteractive() {
  const rooms = [
    { 
      id: 1, 
      name: 'Standard Room', 
      price: 109, 
      guests: 2, 
      size: '35 m²', 
      bed: 'Queen Bed',
      view: 'City View',
      images: ['/images/rooms/1.webp', '/images/rooms/2.webp', '/images/rooms/3.webp'],
      desc: 'Designed for travelers who prioritize essential comfort and value, the Standard Room features modern furnishings and warm ambient lighting. Thoughtfully curated to provide a functional and relaxing stay, the space includes premium features designed to make you feel right at home.',
      amenitiesCol1: ['Free Wi-Fi', 'Smart TV', 'Minibar'],
      amenitiesCol2: ['Queen Bed', 'Modern Bathroom', 'Workspace Desk']
    },
    { 
      id: 2, 
      name: 'Superior Room', 
      price: 129, 
      guests: 2, 
      size: '28 ft', 
      bed: 'Queen Bed',
      view: 'City View',
      tag: 'Best Selling',
      images: ['/images/rooms/2.webp', '/images/rooms/1.webp', '/images/rooms/3.webp'],
      desc: 'Crafted for guests who appreciate refined comfort and upgraded details, the Superior Room blends elegant finishes with a calm, welcoming atmosphere. Carefully designed to enhance relaxation and convenience, the space delivers a smooth balance between style and practicality, making it ideal for couples or travelers seeking an elevated stay.',
      amenitiesCol1: ['Free Wi-Fi', 'Smart TV', 'Minibar', 'Tea & Coffee Maker', 'Safe Deposit Box'],
      amenitiesCol2: ['Queen Bed', 'Modern Bathroom', 'Workspace Desk', 'Air Conditioning', 'In-Room Dining']
    },
    { 
      id: 3, 
      name: 'Executive Room', 
      price: 149, 
      guests: 2, 
      size: '28 ft', 
      bed: 'Queen Bed',
      view: 'City View',
      images: ['/images/rooms/3.webp', '/images/rooms/2.webp', '/images/rooms/4.webp'],
      desc: 'Designed for professionals who value productivity and comfort, the Executive Room features a quiet environment paired with smart functional design. With carefully arranged workspace elements and relaxing interiors, the room supports focused work during the day and restful relaxation at night, making it ideal for business travelers and extended stays.',
      amenitiesCol1: ['Free Wi-Fi', 'Smart TV', 'Minibar', 'Tea & Coffee Maker', 'Safe Deposit Box'],
      amenitiesCol2: ['Queen Bed', 'Modern Bathroom', 'Workspace Desk', 'Air Conditioning', 'In-Room Dining']
    },
    { 
      id: 4, 
      name: 'Premium Suite', 
      price: 179, 
      guests: 4, 
      size: '42 m²', 
      bed: 'King Bed',
      view: 'Sea View',
      images: ['/images/rooms/4.webp', '/images/rooms/3.webp', '/images/rooms/1.webp'],
      desc: 'The absolute height of lavish space, boasting a private wellness sauna, sweeping master bedrooms, luxury marble bathrooms, and custom concierge services designed for an unparalleled premium experience.',
      amenitiesCol1: ['Free Wi-Fi', 'Smart TV', 'Minibar', 'Tea & Coffee Maker', 'Safe Deposit Box'],
      amenitiesCol2: ['King Bed', 'Marble Bathroom', 'Private Sauna', 'Air Conditioning', 'In-Room Dining']
    }
  ];

  return (
    <div className="rooms-interactive-layout bg-transparent">
      {/* Header */}
      <Header headerClass="transparent header-light" />

      {/* Subheader */}
      <Subheader title="Our Rooms" tagline="Find Your Ideal Space" backgroundImage="/images/background/1.webp" />

      <main className="py-5 mx-2 rounded-4 overflow-hidden" style={{ backgroundColor: '#f8f9fa', marginLeft: '10px', marginRight: '10px', borderRadius: '24px' }}>
        <section className="py-4">
          <div className="container-fluid" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
            
            {rooms.map((room) => (
              <div 
                className="bg-white rounded-4 shadow-sm p-4 p-md-5 mb-5 border border-light" 
                key={room.id}
                style={{ borderRadius: '16px' }}
              >
                {/* 1. Multi-Image Previews */}
                <div className="position-relative mb-3">
                  <div className="row g-3">
                    {room.images.map((imgSrc, i) => (
                      <div className="col-4" key={i}>
                        <div className="overflow-hidden rounded-3 shadow-sm" style={{ borderRadius: '12px' }}>
                          <img 
                            src={imgSrc} 
                            className="w-100 hover-scale-1-1" 
                            style={{ height: '240px', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                            alt={`${room.name} view ${i + 1}`} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Left and Right slide arrows */}
                  <button 
                    className="position-absolute top-50 start-0 translate-middle-y ms-2 btn rounded-circle d-flex align-items-center justify-content-center border-0 text-white" 
                    style={{ width: '40px', height: '40px', backgroundColor: 'rgba(200, 156, 86, 0.85)', zIndex: 3, cursor: 'pointer' }}
                    aria-label="Previous image"
                  >
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                  <button 
                    className="position-absolute top-50 end-0 translate-middle-y me-2 btn rounded-circle d-flex align-items-center justify-content-center border-0 text-white" 
                    style={{ width: '40px', height: '40px', backgroundColor: 'rgba(200, 156, 86, 0.85)', zIndex: 3, cursor: 'pointer' }}
                    aria-label="Next image"
                  >
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </div>

                {/* Slider indicator dots */}
                <div className="d-flex justify-content-center gap-2 mb-4">
                  <span className="rounded-circle" style={{ width: '8px', height: '8px', backgroundColor: '#c89c56' }}></span>
                  <span className="rounded-circle" style={{ width: '8px', height: '8px', backgroundColor: 'rgba(200, 156, 86, 0.4)' }}></span>
                </div>

                {/* 2. Room Title & Ratings & Key Specifications */}
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3 border-bottom border-light">
                  <div className="mb-3 mb-md-0">
                    <h2 className="fs-32 text-dark mb-1" style={{ fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>
                      {room.name}
                    </h2>
                    <div className="d-stars" style={{ color: '#c89c56' }}>
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star fs-14 me-1"></i>
                      ))}
                    </div>
                  </div>

                  <div className="d-flex flex-wrap gap-4 align-items-center text-muted" style={{ fontSize: '15px' }}>
                    <span className="d-flex align-items-center">
                      <i className="fa-solid fa-user me-2 text-dark fs-16"></i>
                      {room.guests} Guests
                    </span>
                    <span className="d-flex align-items-center">
                      <i className="fa-solid fa-expand me-2 text-dark fs-16"></i>
                      {room.size}
                    </span>
                    <span className="d-flex align-items-center">
                      <i className="fa-solid fa-bed me-2 text-dark fs-16"></i>
                      {room.bed}
                    </span>
                    <span className="d-flex align-items-center">
                      <i className="fa-regular fa-image me-2 text-dark fs-16"></i>
                      {room.view}
                    </span>
                    <div className="d-flex align-items-baseline ms-2">
                      <span className="fs-28 fw-bold text-dark">${room.price}</span>
                      <span className="ms-1 fs-14 text-muted">/ night</span>
                    </div>
                  </div>
                </div>

                {/* 3. Narrative Description & Features Checklist */}
                <div className="row g-4 align-items-start">
                  <div className="col-lg-7">
                    <p className="text-muted leading-relaxed mb-4" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                      {room.desc}
                    </p>
                    <div className="mt-4">
                      <Link 
                        to="/reservation" 
                        className="btn-main fx-slide hover-white py-3 px-5 text-decoration-none fw-bold" 
                        style={{ borderRadius: '30px' }}
                      >
                        <span>Select Room</span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="row g-3">
                      <div className="col-6 d-flex flex-column gap-3 text-muted" style={{ fontSize: '15px' }}>
                        {room.amenitiesCol1.map((item, idx) => (
                          <span key={idx} className="d-flex align-items-center">
                            <i className="fa-solid fa-check me-2" style={{ color: '#c89c56' }}></i>
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="col-6 d-flex flex-column gap-3 text-muted" style={{ fontSize: '15px' }}>
                        {room.amenitiesCol2.map((item, idx) => (
                          <span key={idx} className="d-flex align-items-center">
                            <i className="fa-solid fa-check me-2" style={{ color: '#c89c56' }}></i>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
