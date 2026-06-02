import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

/**
 * Slide Carousel-based Photo Gallery.
 * Includes slide buttons and lightbox capabilities.
 */
export default function GalleryCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [
    '/images/gallery/1.webp',
    '/images/gallery/2.webp',
    '/images/gallery/3.webp',
    '/images/gallery/4.webp',
    '/images/gallery/5.webp',
    '/images/gallery/6.webp'
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-carousel-layout">
      {/* Navigation */}
      <Header headerClass="transparent header-light" />

      {/* Subheader banner */}
      <Subheader title="Gallery Carousel" tagline="Enjoy Your Stay" backgroundImage="/images/background/1.webp" />

      <main className="bg-dark text-light py-5">
        <section className="py-4">
          <div className="container">
            <div className="row justify-content-center">
              
              <div className="col-lg-10">
                {/* Slideshow Wrap */}
                <div className="position-relative rounded-1 overflow-hidden" style={{ height: '500px' }}>
                  
                  {images.map((src, idx) => (
                    <div 
                      key={idx}
                      className={`absolute top-0 start-0 w-100 h-100 transition-opacity duration-700 d-flex align-items-center justify-content-center ${idx === activeSlide ? 'opacity-100 z-2' : 'opacity-0 z-1'}`}
                      style={{
                        backgroundImage: `url(${src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transition: 'opacity 0.8s ease'
                      }}
                      onClick={() => setLightboxImage(src)}
                    >
                      {/* Dark shade */}
                      <div className="sw-overlay op-3 absolute w-100 h-100 top-0 start-0" style={{ backgroundColor: 'rgba(0,0,0,0.25)', cursor: 'zoom-in' }}></div>
                      
                      <div className="position-absolute bottom-0 start-0 p-4 z-3 text-white bg-dark bg-opacity-50 m-4 rounded">
                        <span className="fs-18">Photo {idx + 1} of {images.length}</span>
                      </div>
                    </div>
                  ))}

                  {/* Navigation Buttons */}
                  <button 
                    onClick={handlePrev}
                    className="position-absolute top-50 start-0 translate-middle-y ms-4 btn rounded-circle d-flex align-items-center justify-content-center border-0 text-white z-3"
                    style={{ width: '50px', height: '50px', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10 }}
                    aria-label="Previous Slide"
                  >
                    <i className="fa-solid fa-angle-left fs-20"></i>
                  </button>

                  <button 
                    onClick={handleNext}
                    className="position-absolute top-50 end-0 translate-middle-y me-4 btn rounded-circle d-flex align-items-center justify-content-center border-0 text-white z-3"
                    style={{ width: '50px', height: '50px', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10 }}
                    aria-label="Next Slide"
                  >
                    <i className="fa-solid fa-angle-right fs-20"></i>
                  </button>

                </div>

                {/* Thumbnail dots list */}
                <div className="d-flex justify-content-center gap-2 mt-4">
                  {images.map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className="p-0 border-0 rounded"
                      style={{
                        width: '80px',
                        height: '50px',
                        backgroundImage: `url(${src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: idx === activeSlide ? 1 : 0.4,
                        border: idx === activeSlide ? '2px solid #c89c56' : 'none',
                        transition: 'opacity 0.3s'
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      {/* LIGHTBOX PREVIEW */}
      {lightboxImage && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 z-max d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: 'rgba(0,0, 0, 0.9)',
            zIndex: 99999,
            cursor: 'zoom-out'
          }}
          onClick={() => setLightboxImage(null)}
        >
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
