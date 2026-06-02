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

      <main className="bg-dark text-light py-5">
        <section className="py-4">
          <div className="container">
            
            {/* Filter Buttons */}
            <div className="row mb-5">
              <div className="col-md-12 text-center">
                <ul className="d-flex justify-content-center gap-3 list-unstyled flex-wrap">
                  {['all', 'rooms', 'dining', 'facilities'].map((cat) => (
                    <li key={cat}>
                      <button 
                        onClick={() => setFilter(cat)}
                        className={`btn px-4 py-2 border-0 rounded-pill text-capitalize`}
                        style={{
                          backgroundColor: filter === cat ? '#c89c56' : 'transparent',
                          color: filter === cat ? '#fff' : '#a0a0a0',
                          border: '1px solid rgba(255,255,255,0.1)',
                          transition: 'all 0.3s'
                        }}
                      >
                        {cat === 'all' ? 'View All' : cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="gallery-grid">
              {filteredImages.map((item) => (
                <div 
                  className="gallery-item" 
                  key={item.id}
                  onClick={() => setLightboxImage(item.src)}
                  style={{ cursor: 'zoom-in' }}
                >
                  <div className="relative overflow-hidden rounded-1 position-relative group hover">
                    <div 
                      className="absolute start-0 top-0 w-100 h-100 overlay-black-5 d-flex align-items-center justify-content-center opacity-0 hover-opacity-100 transition-all duration-300"
                      style={{
                        position: 'absolute',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        transition: 'opacity 0.3s ease'
                      }}
                    >
                      <i className="fa-solid fa-magnifying-glass-plus text-white fs-30"></i>
                    </div>
                    <img 
                      src={item.src} 
                      className="w-100 hover-scale-1-2" 
                      alt={`Gallery view of ${item.category}`} 
                      style={{ height: '260px', objectFit: 'cover' }} 
                    />
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
