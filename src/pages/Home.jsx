import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AvailabilityForm from '../components/AvailabilityForm';
import { useCountUp } from '../hooks/useCountUp';
import {
  useScrollFadeIn,
  useStaggerChildren,
  useSlideIn,
  useTextReveal,
  useElasticIn,
  useParallax,
  refreshScrollTrigger,
} from '../hooks/useGsapAnimations';

/**
 * Main Home Page Component (Homepage 1).
 */
export default function Home() {
  // ── GSAP Animation Refs ──

  // Hero slide content — use a timeline (not scroll-triggered, since hero is above the fold)
  const heroTitleRef = useRef(null);
  const heroDescRef = useRef(null);
  const heroCtaRef = useRef(null);

  // Rooms section
  const roomsHeadingRef = useTextReveal({ duration: 1, start: 'top 85%' });
  const roomsGridRef = useStaggerChildren({ childSelector: '.col-md-6', y: 60, stagger: 0.2 });
  const roomsBtnRef = useScrollFadeIn({ y: 30, delay: 0.4 });

  // Testimonials
  const testimonialSectionRef = useScrollFadeIn({ y: 0, duration: 1.2, start: 'top 80%' });

  // Counters & Facilities
  const facilitiesHeadingRef = useTextReveal({ duration: 1, start: 'top 85%' });
  const facilitiesImgRef = useSlideIn('left', { distance: 100, duration: 1.2 });
  const facilitiesGridRef = useStaggerChildren({ childSelector: '.col-md-6', y: 40, stagger: 0.15, start: 'top 80%' });

  // Gallery
  const galleryHeadingRef = useScrollFadeIn({ y: 50, duration: 1 });
  const galleryDescRef = useScrollFadeIn({ y: 40, delay: 0.2 });
  const galleryGridRef = useStaggerChildren({ childSelector: '.gallery-item', y: 50, stagger: 0.08, start: 'top 85%' });

  // Availability form
  const availabilityRef = useScrollFadeIn({ y: 40, duration: 0.8 });

  // Offers
  const offersHeadingRef = useTextReveal({ duration: 1 });
  const offersGridRef = useStaggerChildren({ childSelector: '.col-lg-4', y: 60, stagger: 0.2 });

  // FAQs
  const faqHeadingRef = useSlideIn('left', { distance: 80, duration: 1 });
  const faqAccordionRef = useSlideIn('right', { distance: 80, duration: 1 });

  // Slider play state
  const [isPlaying, setIsPlaying] = useState(false);
  const blogHeadingRef = useTextReveal({ duration: 1 });
  const blogGridRef = useStaggerChildren({ childSelector: '[class*="col-lg-6"], [class*="col-xl-3"]', y: 50, stagger: 0.15 });

  // Refresh ScrollTrigger after gallery filter changes
  useEffect(() => {
    const timeout = setTimeout(() => refreshScrollTrigger(), 100);
    return () => clearTimeout(timeout);
  }, []);
  // Slider states
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    { image: '/images/slider/3.webp' },
    { image: '/images/slider/4.webp' }
  ];

  // Hero text entrance animation — plays only once on initial page mount to maintain perfect stability
  useEffect(() => {
    const els = [heroTitleRef.current, heroDescRef.current].filter(Boolean);
    if (!els.length) return;

    // Reset and animate text elements
    gsap.set(els, { autoAlpha: 0, y: 50 });
    const tl = gsap.timeline();
    tl.to(heroTitleRef.current, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out' })
      .to(heroDescRef.current, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4');

    return () => tl.kill();
  }, []);

  // Stable button entrance animation — plays only once on initial page mount to prevent visual flashing during slide transitions
  useEffect(() => {
    if (heroCtaRef.current) {
      gsap.set(heroCtaRef.current, { autoAlpha: 0, y: 50 });
      gsap.to(heroCtaRef.current, { autoAlpha: 1, y: 0, duration: 1.2, delay: 0.8, ease: 'back.out(1.7)' });
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Room details
  const roomsList = [
    { id: 1, name: 'Standard Room', price: 109, img: '/images/rooms/1.webp', guests: 2, size: '28 ft' },
    { id: 2, name: 'Superior Room', price: 129, img: '/images/rooms/2.webp', guests: 2, size: '28 ft', bestSeller: true },
    { id: 3, name: 'Executive Room', price: 149, img: '/images/rooms/3.webp', guests: 2, size: '28 ft' },
    { id: 4, name: 'Premium Suite', price: 179, img: '/images/rooms/4.webp', guests: 2, size: '28 ft' }
  ];

  // Testimonials Carousel
  const testimonials = [
    { text: 'A truly outstanding stay — warm service, beautiful rooms, and an atmosphere that feels unforgettable.', author: 'Anna L., Paris' },
    { text: 'Everything exceeded expectations — from the amenities to the staff, truly a memorable hotel experience.', author: 'Michael H., Toronto' },
    { text: 'Impeccable attention to detail. Every moment felt personal and thoughtfully crafted during our stay.', author: 'Nadia R., Dubai' },
    { text: 'From check-in to check-out, the experience was effortless and luxurious. Highly recommended.', author: 'Tom S., Los Angeles' },
    { text: 'Beautiful interiors, friendly staff, and great location. We loved every moment of our vacation.', author: 'Elise K., Amsterdam' },
    { text: 'Exceptional hospitality and comfort. The perfect choice for a relaxing and refreshing getaway.', author: 'David M., Singapore' }
  ];
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Counters
  const countRooms = useCountUp(180);
  const countVisitors = useCountUp(8500);
  const countMenu = useCountUp(65);

  // Gallery filter state
  const [galleryFilter, setGalleryFilter] = useState('all');
  const galleryItems = [
    { id: 1, img: '/images/gallery/1.webp', category: 'rooms' },
    { id: 2, img: '/images/gallery/6.webp', category: 'dining' },
    { id: 3, img: '/images/gallery/9.webp', category: 'facilities' },
    { id: 4, img: '/images/gallery/3.webp', category: 'rooms' },
    { id: 5, img: '/images/gallery/8.webp', category: 'dining' },
    { id: 6, img: '/images/gallery/5.webp', category: 'rooms' },
    { id: 7, img: '/images/gallery/11.webp', category: 'facilities' },
    { id: 8, img: '/images/gallery/2.webp', category: 'rooms' },
    { id: 9, img: '/images/gallery/10.webp', category: 'facilities' },
    { id: 10, img: '/images/gallery/4.webp', category: 'rooms' },
    { id: 11, img: '/images/gallery/7.webp', category: 'dining' },
    { id: 12, img: '/images/gallery/12.webp', category: 'facilities' }
  ];

  const filteredGallery = galleryFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === galleryFilter);

  // FAQ state
  const [openFaq, setOpenFaq] = useState(0);
  const faqs = [
    { q: 'What time is check-in and check-out?', a: 'Check-in starts at 2:00 PM and check-out is at 12:00 PM. Early check-in and late check-out are available upon request and subject to availability.' },
    { q: 'Do you offer airport pick-up or shuttle service?', a: 'Yes, we provide airport transfers and private shuttle services. Please contact us in advance to arrange transportation.' },
    { q: 'Are pets allowed in the hotel?', a: 'We welcome small pets in designated pet-friendly rooms. Additional cleaning fees may apply.' },
    { q: 'Do you have free Wi-Fi?', a: 'Yes, complimentary high-speed Wi-Fi is available throughout the hotel, including rooms and public areas.' },
    { q: 'What facilities are available for guests?', a: 'Guests can enjoy our swimming pool, fitness center, spa, restaurant, lounge bar, and business center.' },
    { q: 'Do you offer breakfast?', a: 'Yes, we offer daily breakfast with continental and international options. Breakfast is included for certain room packages.' }
  ];

  // Selected offer mock data
  const offers = [
    { id: 1, tag: '20% OFF', title: 'Romantic Stay', desc: '20% Off Weekend Packages', img: '/images/offers/1.webp' },
    { id: 2, tag: '30% OFF', title: 'Early Bird Deal', desc: 'Save Up to 30% on Rooms', img: '/images/offers/2.webp', reverse: true },
    { id: 3, tag: 'SPECIAL', title: 'Family Getaway', desc: 'Kids Stay & Eat Free', img: '/images/offers/3.webp' }
  ];

  return (
    <div className="home-layout">
      {/* Header Navigation */}
      <Header headerClass="header-light bg-white header-s1" />

      <main>
        {/* Swiper Hero Image Slider */}
        <section className="text-light no-top no-bottom relative rounded-1 overflow-hidden mt-80 mt-sm-50 mx-2">
          <div className="mh-800 position-relative w-100" style={{ height: '700px' }}>
            
            {/* 1. Carousel Background Images & Overlays */}
            {slides.map((slide, idx) => (
              <div 
                key={idx}
                className="absolute top-0 start-0 w-100 h-100"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: idx === activeSlide ? 1 : 0,
                  zIndex: idx === activeSlide ? 2 : 1,
                  transition: idx === activeSlide ? 'opacity 1s ease-in-out' : 'opacity 0s 1s'
                }}
              >
                {/* Elegant light-to-transparent overlay that keeps the text readable while making the background image vibrant and bright */}
                <div className="sw-overlay absolute w-100 h-100 top-0 start-0" style={{ 
                  background: 'linear-gradient(to right, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 100%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.12)',
                  zIndex: 2
                }}></div>
              </div>
            ))}

            {/* 2. Hero Content Overlay */}
            <div className="abs bottom-10 w-100 p-5 mt-3 z-3" style={{ zIndex: 10 }}>
              <div className="container-fluid">
                <div className="row g-4 justify-content-between align-items-end">
                  <div className="col-md-10">
                    <h1 ref={heroTitleRef} className="hero-headline-large text-white mb-2">
                      Experience the Art of Luxury Living
                    </h1>
                  </div>
                  <div className="col-md-6 offset-md-1">
                    <p ref={heroDescRef} className="col-md-8 text-white opacity-9 mb-4" style={{ fontFamily: "'Jost', sans-serif", fontSize: '16px', lineHeight: '22px' }}>
                      Nestled in a serene sanctuary, Saptagiri offers a masterfully curated hospitality experience. Discover bespoke suites, refined amenities, and service tailored to your absolute comfort.
                    </p>
                    <div ref={heroCtaRef} className="hero-cta-init mt-4">
                      <Link to="/rooms" className="btn-main fx-slide hover-white px-5 py-3 rounded-1 text-decoration-none" data-hover="Explore Rooms">
                        <span>Explore Rooms</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Explore Room Section */}
        <section className="bg-white text-dark py-5">
          <div className="container py-4">
            <div className="row g-4 mb-5 justify-content-center">
              <div ref={roomsHeadingRef} className="col-lg-6 text-center">
                <div className="subtitle mb-1 text-primary text-uppercase tracking-wider" style={{ color: '#c89c56' }}>Enjoy Your Stay</div>
                <h2 className="fs-40 text-dark mb-3">Explore Rooms</h2>
                <p className="text-muted">
                  Discover a curated selection of elegant rooms designed for comfort. From cozy spaces to refined suites, every detail is crafted for a relaxing stay.
                </p>
              </div>
            </div>

            <div ref={roomsGridRef} className="row g-4">
              {roomsList.map((room) => (
                <div className="col-md-6" key={room.id}>
                  <Link to="/room-single" className="d-block h-100 hover relative text-decoration-none">
                    <div className="rounded-1 overflow-hidden position-relative">
                      {room.bestSeller && (
                        <h3 className="abs bg-color rounded-3 text-white fs-14 lh-1 p-2 px-3 m-4 top-0 start-0 z-3" style={{ backgroundColor: '#c89c56', position: 'absolute' }}>
                          Best Selling
                        </h3>
                      )}
                      <img src={room.img} className="w-100 hover-scale-1-2" alt={room.name} style={{ objectFit: 'cover', height: '350px' }} />
                    </div>
                    <div className="pt-4 text-dark">
                      <div className="d-flex mb-2 fs-15 justify-content-between text-muted border-bottom pb-2">
                        <div className="d-flex">    
                          <div className="d-flex align-items-center me-3">
                            <img src="/images/ui/user.webp" className="w-15px me-2" alt="" />
                            {room.guests} guests
                          </div>
                          <div className="d-flex align-items-center">
                            <img src="/images/ui/floorplan.webp" className="w-15px me-2" alt="" />
                            {room.size}
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="fs-20 fw-bold text-dark">${room.price}</div>
                          <span className="ms-1">/night</span>
                        </div>
                      </div>
                      <div className="relative">
                        <h3 className="mb-2 text-dark fs-24">{room.name}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

              <div ref={roomsBtnRef} className="col-lg-12 text-center mt-5">
                <Link to="/rooms" className="btn-main fx-slide hover-white px-5 py-3 rounded-1">
                  <span>View More Rooms</span>
                </Link>
              </div>            
            </div>
          </div>
        </section>

        {/* Jarallax Testimonials Banner */}
        <section 
          className="text-light mx-2 rounded-1 overflow-hidden position-relative d-flex align-items-center py-5"
          style={{
            backgroundImage: "url('/images/background/1.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '480px'
          }}
        >
          {/* Light warm translucent dark overlay to keep background lobby photo bright/visible and text highly readable */}
          <div className="absolute w-100 h-100 top-0 start-0" style={{ background: 'rgba(0, 0, 0, 0.22)', zIndex: 1 }}></div>
          <div ref={testimonialSectionRef} className="container relative z-2 py-4" style={{ zIndex: 2 }}>
            <div className="row g-4 gx-5 align-items-center">
              {/* Left Column: Ratings Summary */}
              <div className="col-lg-5 text-center d-flex flex-column align-items-center justify-content-center">
                <h2 className="fs-96 mb-0 text-white" style={{ fontWeight: 800, fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>4.9</h2>
                <div className="d-stars d-flex justify-content-center my-2" style={{ color: '#c89c56' }}>
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star fs-24 mx-1"></i>
                  ))}
                </div>
                <div className="text-white opacity-9" style={{ fontFamily: "'Jost', sans-serif", fontSize: '15px', fontWeight: 500 }}>
                  (300+ Reviews)
                </div>
              </div>

              {/* Right Column: Carousel of Testimonials */}
              <div className="col-lg-7">
                <div className="position-relative overflow-hidden" style={{ minHeight: '220px' }}>
                  
                  {testimonials.map((item, idx) => (
                    <div 
                      key={idx}
                      className="w-100"
                      style={{ 
                        position: idx === activeTestimonial ? 'relative' : 'absolute',
                        top: 0,
                        left: 0,
                        opacity: idx === activeTestimonial ? 1 : 0,
                        visibility: idx === activeTestimonial ? 'visible' : 'hidden',
                        transition: idx === activeTestimonial ? 'opacity 0.5s ease 0.3s, visibility 0.5s ease 0.3s' : 'opacity 0.3s ease, visibility 0.3s ease',
                        zIndex: idx === activeTestimonial ? 2 : 1
                      }}
                    >
                      {/* Star Rating above testimonial */}
                      <div className="d-stars d-block mb-3" style={{ color: '#c89c56' }}>
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star fs-16 me-1"></i>
                        ))}
                      </div>

                      {/* Testimonial Quote (no quotation marks, clean font) */}
                      <h3 className="text-white fs-36" style={{ fontWeight: 600, lineHeight: 1.4, letterSpacing: '-0.5px', fontFamily: "'Outfit', sans-serif", whiteSpace: 'normal', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                        {item.text}
                      </h3>
                      
                      {/* Author metadata */}
                      <div className="mt-4">
                        <span className="text-white fs-16 opacity-8" style={{ fontWeight: 500, fontFamily: "'Jost', sans-serif" }}>
                          {item.author}
                        </span>
                      </div>
                    </div>
                  ))}

                </div>

                {/* Dot Indicators positioned below testimonial content */}
                <div className="d-flex gap-2 mt-4 justify-content-center justify-content-lg-start pt-2">
                  {testimonials.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTestimonial(dotIdx);
                      }}
                      className="border-0 rounded-circle p-0"
                      style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: dotIdx === activeTestimonial ? '#c89c56' : 'rgba(255,255,255,0.4)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      aria-label={`Testimonial ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Counters & Facilities */}
        <section className="bg-light text-dark py-5">
          <div className="container py-4">
            <div className="row g-4 mb-5 justify-content-center">
              <div ref={facilitiesHeadingRef} className="col-lg-6 text-center">
                <div className="subtitle text-primary text-uppercase" style={{ color: '#c89c56' }}>Welcome to Saptagiri</div>
                <h2 className="text-dark fs-40 mb-3">Hotel Facilities</h2>
                <p className="text-muted">
                  From premium rooms to full-service amenities, our team ensures a comfortable and memorable stay from check-in to check-out.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div ref={facilitiesImgRef} className="col-lg-6">
                <div 
                  className="h-100 rounded-1 min-height-300 overflow-hidden" 
                  style={{
                    backgroundImage: "url('/images/misc/s1.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '380px'
                  }}
                />
              </div>

              <div className="col-lg-6">
                <div ref={facilitiesGridRef} className="row g-4">
                  {/* Total Rooms Counter */}
                  <div className="col-md-6">
                    <div className="p-4 bg-white rounded-1 h-100 text-dark border-start border-primary border-4">
                      <small className="text-uppercase text-muted border-bottom d-block pb-2 fw-semibold">TOTAL ROOMS</small>
                      <h2 className="mb-2 mt-4 text-dark fs-60 fw-bold">
                        {countRooms}
                        <span className="text-primary ms-1" style={{ color: '#c89c56' }}>+</span>
                      </h2>
                      <p className="text-muted mb-0">luxury rooms & suites</p>
                    </div>
                  </div>

                  {/* Yearly Visitors Counter */}
                  <div className="col-md-6">
                    <div className="p-4 bg-white rounded-1 h-100 text-dark border-start border-primary border-4">
                      <small className="text-uppercase text-muted border-bottom d-block pb-2 fw-semibold">YEARLY VISITORS</small>
                      <h2 className="mb-2 mt-4 text-dark fs-60 fw-bold">
                        {countVisitors}
                        <span className="text-primary ms-1" style={{ color: '#c89c56' }}>+</span>
                      </h2>
                      <p className="text-muted mb-0">happy guests</p>
                    </div>
                  </div>

                  {/* Signature Menu Items Counter */}
                  <div className="col-md-6">
                    <div className="p-4 bg-white rounded-1 h-100 text-dark border-start border-primary border-4">
                      <small className="text-uppercase text-muted border-bottom d-block pb-2 fw-semibold">SIGNATURE MENU</small>
                      <h2 className="mb-2 mt-4 text-dark fs-60 fw-bold">
                        {countMenu}
                        <span className="text-primary ms-1" style={{ color: '#c89c56' }}>+</span>
                      </h2>
                      <p className="text-muted mb-0">curated dishes & beverages</p>
                    </div>
                  </div>

                  {/* Dynamic Team image */}
                  <div className="col-md-6">
                    <div 
                      className="p-30 rounded-1 h-100 overflow-hidden" 
                      style={{
                        backgroundImage: "url('/images/misc/s2.webp')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '180px'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filterable Gallery Section */}
        <section className="text-dark py-5 position-relative" style={{ backgroundColor: '#FDF9F3' }}>
          <div className="container py-4">
            <div className="row g-4 gx-5 align-items-center justify-content-between mb-4">
              <div ref={galleryHeadingRef} className="col-lg-6">
                <div className="subtitle text-primary text-uppercase" style={{ color: '#c89c56' }}>Welcome</div>
                <h2 className="text-dark fs-40">Experience Comfort, Elegance, and Exceptional Hospitality</h2>
              </div>
              <div ref={galleryDescRef} className="col-lg-6">
                <p className="text-muted">
                  Welcome to our hotel, where comfort meets refined elegance in a setting designed for relaxation and unforgettable stays. 
                  Located in a prime destination, our property offers thoughtfully designed rooms, modern amenities, and warm hospitality 
                  tailored to every traveler. From peaceful mornings to restful nights, every detail is carefully crafted to ensure your stay 
                  is seamless, comfortable, and truly memorable.
                </p>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="row mb-5">
              <div className="col-md-12 text-center">
                <ul className="d-flex justify-content-center gap-3 list-unstyled flex-wrap">
                  {['all', 'rooms', 'dining', 'facilities'].map((cat) => (
                    <li key={cat}>
                      <button 
                        onClick={() => setGalleryFilter(cat)}
                        className={`btn px-4 py-2 border-0 rounded-pill text-capitalize ${galleryFilter === cat ? 'text-white' : 'bg-transparent text-muted'}`}
                        style={{
                          backgroundColor: galleryFilter === cat ? '#c89c56' : 'transparent',
                          color: galleryFilter === cat ? '#fff' : '#a0a0a0',
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

            {/* Filtered Gallery Grid */}
            <div ref={galleryGridRef} className="gallery-grid">
              {filteredGallery.map((item) => (
                <div className="gallery-item" key={item.id}>
                  <div className="relative overflow-hidden rounded-1 position-relative group hover">
                    <div className="absolute start-0 top-0 w-100 h-100 overlay-black-5 d-flex align-items-center justify-content-center opacity-0 hover-opacity-100 transition-all duration-300" style={{ backgroundColor: 'rgba(0,0,0,0.4)', cursor: 'pointer', position: 'absolute' }}>
                      <span className="text-white fs-18 fw-bold">View Image</span>
                    </div>
                    <img src={item.img} className="w-100 hover-scale-1-2" alt="Gallery item" style={{ height: '220px', objectFit: 'cover' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Availability Form Banner */}
        <section ref={availabilityRef} className="bg-white py-5 my-2 mx-2 rounded-1 text-dark position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="bg-white p-4 rounded-1 shadow-sm">
                  <AvailabilityForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Hotel Offers */}
        <section className="bg-light text-dark py-5">
          <div className="container py-4">
            <div className="row g-4 mb-5 justify-content-center">
              <div ref={offersHeadingRef} className="col-lg-6 text-center">
                <div className="subtitle text-primary text-uppercase" style={{ color: '#c89c56' }}>Exclusive Deals</div>
                <h2 className="text-dark fs-40">Latest Hotel Offers</h2>
              </div>
            </div>

            <div ref={offersGridRef} className="row g-4">
              {offers.map((offer) => (
                <div className="col-lg-4" key={offer.id}>
                  <div className="overflow-hidden rounded-1 h-100 bg-dark-2 d-flex flex-column justify-content-between border border-secondary border-opacity-25">
                    {offer.reverse ? (
                      <>
                        <div className="p-5 text-white" style={{ backgroundColor: '#181818' }}>
                          <Link className="text-white text-decoration-none" to="/offers">
                            <h3 className="fs-24 mb-2">{offer.title}</h3>
                            <p className="text-muted mb-0">{offer.desc}</p>
                          </Link>
                        </div>
                        <div className="hover relative position-relative overflow-hidden" style={{ width: '100%', aspectRatio: '795.2 / 1189.81' }}>
                          <h3 className="abs rounded-3 text-white fs-16 lh-1 p-2 px-3 m-4 bottom-0 start-0 z-3" style={{ backgroundColor: '#c89c56', position: 'absolute' }}>
                            {offer.tag}
                          </h3>
                          <img 
                            src={offer.img} 
                            className="w-100 h-100 hover-scale-1-1" 
                            alt={offer.title} 
                            style={{ objectFit: 'cover', objectPosition: 'center' }} 
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="hover relative position-relative overflow-hidden" style={{ width: '100%', aspectRatio: '795.2 / 1189.81' }}>
                          <h3 className="abs rounded-3 text-white fs-16 lh-1 p-2 px-3 m-4 top-0 start-0 z-3" style={{ backgroundColor: '#c89c56', position: 'absolute' }}>
                            {offer.tag}
                          </h3>
                          <img 
                            src={offer.img} 
                            className="w-100 h-100 hover-scale-1-1" 
                            alt={offer.title} 
                            style={{ objectFit: 'cover', objectPosition: 'center' }} 
                          />
                        </div>
                        <div className="p-5 text-white" style={{ backgroundColor: '#181818' }}>
                          <Link className="text-white text-decoration-none" to="/offers">
                            <h3 className="fs-24 mb-2">{offer.title}</h3>
                            <p className="text-muted mb-0">{offer.desc}</p>
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="text-dark py-5" style={{ backgroundColor: '#FAF5EA' }}>
          <div className="container py-4">
            <div className="row g-4 gx-5 justify-content-center">
              <div ref={faqHeadingRef} className="col-lg-5">
                <div className="subtitle text-primary text-uppercase" style={{ color: '#c89c56' }}>FAQ</div>
                <h2 className="text-dark fs-40 mb-4">
                  Everything You Need to Know About Staying With Us
                </h2>
                <p className="text-muted">
                  Have a question about check-in, check-out, facilities or pet policies? We have answers. If you need further assistance, feel free to contact our customer desk.
                </p>
              </div>

              <div ref={faqAccordionRef} className="col-lg-7">
                <div className="accordion title-boxed d-flex flex-column gap-3">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div className="accordion-section border-bottom border-secondary border-opacity-25 pb-3" key={index}>
                        <div 
                          className={`accordion-header fs-18 fw-bold py-2 d-flex justify-content-between align-items-center ${isOpen ? 'text-primary' : 'text-dark'}`}
                          onClick={() => setOpenFaq(isOpen ? -1 : index)}
                          style={{ cursor: 'pointer', color: isOpen ? '#c89c56' : '#222' }}
                        >
                          {faq.q}
                          <i className="fa-solid fa-chevron-down fs-14" style={{ 
                            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)', 
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            color: isOpen ? '#c89c56' : '#777'
                          }} />
                        </div>
                        <div className={`accordion-body-collapse ${isOpen ? 'open' : ''}`}>
                          <p className="pt-2 text-muted mb-0">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Video Section with seamless Inline Playback */}
        <section className="p-0 mx-2" aria-label="section">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-lg-12">
                {isPlaying ? (
                  <div className="ratio overflow-hidden rounded-1" style={{ height: '450px', backgroundColor: '#000' }}>
                    <iframe 
                      src="https://www.youtube.com/embed/C6rf51uHWJg?autoplay=1" 
                      title="Hotel Video Promo Banner"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                      className="w-100 h-100"
                    />
                  </div>
                ) : (
                  <div 
                    className="d-block hover overflow-hidden rounded-1 position-relative group cursor-pointer" 
                    onClick={() => setIsPlaying(true)}
                  >
                    <div className="absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center z-3" style={{ position: 'absolute' }}>
                      <div 
                        className="custom-play-btn no-border rounded-circle d-flex align-items-center justify-content-center shadow-lg" 
                        style={{ 
                          width: '85px', 
                          height: '85px', 
                          backgroundColor: '#c89c56',
                          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                          transform: 'scale(1)',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.12)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      >
                        {/* Golden ratio centering offset for the play triangle */}
                        <i className="fa-solid fa-play text-white fs-30" style={{ marginLeft: '4px' }}></i>
                      </div>
                    </div>
                    <div 
                      className="absolute start-0 top-0 w-100 h-100" 
                      style={{ 
                        position: 'absolute', 
                        backgroundColor: 'rgba(0, 0, 0, 0.45)', 
                        zIndex: 1, 
                        transition: 'background-color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.35)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.45)'}
                    ></div>
                    <img src="/images/background/2.webp" className="w-100 hover-scale-1-1" alt="Hotel Video Promo Banner" style={{ height: '450px', objectFit: 'cover' }} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Our Blog Segment */}
        <section className="bg-light text-dark py-5">
          <div className="container py-4">
            <div className="row g-4 mb-5 justify-content-center">
              <div ref={blogHeadingRef} className="col-lg-6 text-center">
                <div className="subtitle text-primary text-uppercase" style={{ color: '#c89c56' }}>Our Blog</div>
                <h2 className="text-dark fs-40">News &amp; Articles</h2>
              </div>
            </div>

            <div ref={blogGridRef} className="row g-4">
              <div className="col-lg-6 col-xl-3">
                <div className="overflow-hidden h-100 d-flex flex-column justify-content-between">
                  <div className="hover relative position-relative rounded-1 overflow-hidden">
                    <div className="abs z-2 text-white p-3 pb-2 m-4 text-center fw-600 rounded-3" style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)' }}>
                      <div className="fs-30 fw-bold lh-1">20</div>
                      <span className="small">Jun</span>
                    </div>
                    <img src="/images/blog/1.jpg" className="w-100 hover-scale-1-1" alt="Blog post 1" style={{ height: '200px', objectFit: 'cover' }} />
                    <Link to="/blog-single" className="d-block abs w-100 h-100 top-0 start-0" style={{ position: 'absolute' }} />
                  </div>
                  <div className="pt-4 text-dark">
                    <Link to="/blog-single" className="text-dark text-decoration-none">
                      <h3 className="fs-20 mb-2 hover-text-primary" style={{ transition: 'color 0.3s' }}>Top Hotel Amenities That Guests Love in 2025</h3>
                    </Link>
                    <p className="text-muted small">From smart-room technology to wellness features that elevate guest comfort and overall satisfaction.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-xl-3">
                <div className="overflow-hidden h-100 d-flex flex-column justify-content-between">
                  <div className="hover relative position-relative rounded-1 overflow-hidden">
                    <div className="abs z-2 text-white p-3 pb-2 m-4 text-center fw-600 rounded-3" style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)' }}>
                      <div className="fs-30 fw-bold lh-1">19</div>
                      <span className="small">Jun</span>
                    </div>
                    <img src="/images/blog/2.jpg" className="w-100 hover-scale-1-1" alt="Blog post 2" style={{ height: '200px', objectFit: 'cover' }} />
                    <Link to="/blog-single" className="d-block abs w-100 h-100 top-0 start-0" style={{ position: 'absolute' }} />
                  </div>
                  <div className="pt-4 text-dark">
                    <Link to="/blog-single" className="text-dark text-decoration-none">
                      <h3 className="fs-20 mb-2 hover-text-primary" style={{ transition: 'color 0.3s' }}>How to Choose the Perfect Room for Your Stay</h3>
                    </Link>
                    <p className="text-muted small">Learn how to choose the ideal hotel room based on comfort, layout, and travel needs for a better stay.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-xl-3">
                <div className="overflow-hidden h-100 d-flex flex-column justify-content-between">
                  <div className="hover relative position-relative rounded-1 overflow-hidden">
                    <div className="abs z-2 text-white p-3 pb-2 m-4 text-center fw-600 rounded-3" style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)' }}>
                      <div className="fs-30 fw-bold lh-1">18</div>
                      <span className="small">Jun</span>
                    </div>
                    <img src="/images/blog/3.jpg" className="w-100 hover-scale-1-1" alt="Blog post 3" style={{ height: '200px', objectFit: 'cover' }} />
                    <Link to="/blog-single" className="d-block abs w-100 h-100 top-0 start-0" style={{ position: 'absolute' }} />
                  </div>
                  <div className="pt-4 text-dark">
                    <Link to="/blog-single" className="text-dark text-decoration-none">
                      <h3 className="fs-20 mb-2 hover-text-primary" style={{ transition: 'color 0.3s' }}>A Culinary Journey: Signature Dishes at Our Restaurant</h3>
                    </Link>
                    <p className="text-muted small">Explore our signature menu curated by award-winning chefs, showcasing the finest local and global ingredients.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-xl-3">
                <div className="overflow-hidden h-100 d-flex flex-column justify-content-between">
                  <div className="hover relative position-relative rounded-1 overflow-hidden">
                    <div className="abs z-2 text-white p-3 pb-2 m-4 text-center fw-600 rounded-3" style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)' }}>
                      <div className="fs-30 fw-bold lh-1">17</div>
                      <span className="small">Jun</span>
                    </div>
                    <img src="/images/blog/4.jpg" className="w-100 hover-scale-1-1" alt="Blog post 4" style={{ height: '200px', objectFit: 'cover' }} />
                    <Link to="/blog-single" className="d-block abs w-100 h-100 top-0 start-0" style={{ position: 'absolute' }} />
                  </div>
                  <div className="pt-4 text-dark">
                    <Link to="/blog-single" className="text-dark text-decoration-none">
                      <h3 className="fs-20 mb-2 hover-text-primary" style={{ transition: 'color 0.3s' }}>Behind the Scenes: Secrets to Premium Hotel Service</h3>
                    </Link>
                    <p className="text-muted small">Discover the dedication and meticulous standards of hospitality that drive our service behind the scenes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Navigation */}
      <Footer />
    </div>
  );
}
