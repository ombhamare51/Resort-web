import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

/**
 * Filterable Photo Gallery Component.
 * Supports interactive tabs and pure React fullscreen image lightbox views.
 */
export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [
    { id: 1, src: '/images/gallery/1.webp', category: 'rooms' },
    { id: 2, src: '/images/gallery/6.webp', category: 'dining' },
    { id: 3, src: '/images/gallery/9.webp', category: 'facilities' },
    { id: 4, src: '/images/gallery/3.webp', category: 'rooms' },
    { id: 5, src: '/images/gallery/8.webp', category: 'dining' },
    { id: 6, src: '/images/gallery/5.webp', category: 'rooms' },
    { id: 7, src: '/images/gallery/11.webp', category: 'facilities' },
    { id: 8, src: '/images/gallery/2.webp', category: 'rooms' },
    { id: 9, src: '/images/gallery/10.webp', category: 'facilities' },
    { id: 10, src: '/images/gallery/4.webp', category: 'rooms' },
    { id: 11, src: '/images/gallery/7.webp', category: 'dining' },
    { id: 12, src: '/images/gallery/12.webp', category: 'facilities' }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="gallery-layout">
      {/* Header */}
      <Header headerClass="transparent header-light" />

      {/* Subheader */}
      <Subheader title="Gallery" tagline="Enjoy Your Stay" backgroundImage="/images/background/1.webp" />

      <main className="bg-white text-dark py-5">
        <section id="section-gallery" className="py-4 bg-light" aria-label="section">
          <div className="container">
            
            {/* Filter Buttons using template #filters */}
            <div className="row mb-5">
              <div className="col-md-12 text-center">
                <ul id="filters">
                  <li><span className={filter === 'all' ? 'selected' : ''} onClick={() => setFilter('all')} style={{ cursor: 'pointer' }}>View All</span></li>
                  <li><span className={filter === 'rooms' ? 'selected' : ''} onClick={() => setFilter('rooms')} style={{ cursor: 'pointer' }}>Rooms</span></li>
                  <li><span className={filter === 'dining' ? 'selected' : ''} onClick={() => setFilter('dining')} style={{ cursor: 'pointer' }}>Dining</span></li>
                  <li><span className={filter === 'facilities' ? 'selected' : ''} onClick={() => setFilter('facilities')} style={{ cursor: 'pointer' }}>Facilities</span></li>
                </ul>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="row g-4" id="gallery">
              {filteredImages.map((item) => (
                <div 
                  className="col-lg-4 col-md-6" 
                  key={item.id}
                >
                  <div 
                    className="d-block hover"
                    onClick={() => setLightboxImage(item.src)}
                    style={{ cursor: 'zoom-in' }}
                  >
                    <div className="relative overflow-hidden rounded-1">
                      <div className="absolute start-0 w-100 hover-op-1 p-5 abs-middle z-3 text-center text-white fw-bold">View</div>
                      <div className="absolute start-0 w-100 h-100 overlay-black-5 hover-op-1 z-2"></div>
                      <img 
                        src={item.src} 
                        className="w-100 hover-scale-1-2" 
                        alt={`Gallery view of ${item.category}`} 
                        style={{ height: '280px', objectFit: 'cover' }} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxImage && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 z-max d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 99999,
            cursor: 'zoom-out'
          }}
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="position-absolute top-0 end-0 m-4 btn text-white border-0 bg-transparent"
            style={{ fontSize: '32px' }}
            onClick={() => setLightboxImage(null)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          
          <div className="p-3" style={{ maxWidth: '90%', maxHeight: '90%' }}>
            <img 
              src={lightboxImage} 
              className="img-fluid rounded shadow-lg" 
              alt="Expanded preview" 
              style={{ objectFit: 'contain', maxHeight: '80vh' }} 
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
