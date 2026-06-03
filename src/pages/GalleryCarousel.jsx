import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

/**
 * Slide Carousel-based Photo Gallery.
 * Includes slide buttons and lightbox capabilities.
 */
export default function GalleryCarousel() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [
    '/images/gallery/1.webp',
    '/images/gallery/6.webp',
    '/images/gallery/9.webp',
    '/images/gallery/3.webp',
    '/images/gallery/8.webp',
    '/images/gallery/5.webp',
    '/images/gallery/11.webp',
    '/images/gallery/2.webp',
    '/images/gallery/10.webp',
    '/images/gallery/4.webp',
    '/images/gallery/7.webp',
    '/images/gallery/12.webp'
  ];

  return (
    <div className="gallery-carousel-layout">
      {/* Navigation */}
      <Header headerClass="transparent header-light" />

      {/* Subheader banner */}
      <Subheader title="Gallery Carousel" tagline="Enjoy Your Stay" backgroundImage="/images/background/1.webp" />

      <main className="bg-white text-dark py-5">
        <section id="section-gallery" className="py-4 bg-light" aria-label="section">
          <div className="container-fluid">
            <div className="row">
              
              <div className="col-lg-12">
                <div className="owl-custom-nav menu-float" data-target="#carousel-1">
                  <a className="btn-next" style={{ cursor: 'pointer' }}></a>
                  <a className="btn-prev" style={{ cursor: 'pointer' }}></a>                                

                  <Swiper
                    modules={[Navigation]}
                    navigation={{
                      nextEl: '.btn-next',
                      prevEl: '.btn-prev',
                    }}
                    slidesPerView={1}
                    breakpoints={{
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 }
                    }}
                    spaceBetween={20}
                    centeredSlides={true}
                    loop={true}
                    className="swiper-container"
                  >
                    {images.map((src, idx) => (
                      <SwiperSlide key={idx} className="item">
                        <div 
                          className="d-block hover" 
                          onClick={() => setLightboxImage(src)}
                          style={{ cursor: 'zoom-in' }}
                        >
                          <div className="relative overflow-hidden rounded-1">
                            <div className="absolute start-0 w-100 hover-op-1 p-5 abs-middle z-3 text-center text-white fw-bold">View</div>
                            <div className="absolute start-0 w-100 h-100 overlay-black-5 hover-op-1 z-2"></div>
                            <img src={src} className="w-100 hover-scale-1-2" alt="" style={{ height: '320px', objectFit: 'cover' }} />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
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
