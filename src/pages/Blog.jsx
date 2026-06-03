import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

/**
 * Blog Listing Component.
 * Lists 8 news cards in a clean, borderless light theme matching the mockup.
 */
export default function Blog() {
  const posts = [
    { 
      id: 1, 
      day: '20', 
      month: 'Jun', 
      title: 'Top Hotel Amenities That Guests Love in 2025 Trends', 
      desc: 'From smart-room technology to wellness features that elevate guest comfort and overall satisfaction.', 
      img: '/images/blog/1.jpg' 
    },
    { 
      id: 2, 
      day: '19', 
      month: 'Jun', 
      title: 'How to Choose the Perfect Room for Your Stay', 
      desc: 'Learn how to choose the ideal hotel room based on comfort, layout, and travel needs for a better stay.', 
      img: '/images/blog/2.jpg' 
    },
    { 
      id: 3, 
      day: '18', 
      month: 'Jun', 
      title: 'The Art of Hospitality: Behind Our Signature Services', 
      desc: 'Discover the thoughtful services and attention to detail that define exceptional hospitality experiences.', 
      img: '/images/blog/3.jpg' 
    },
    { 
      id: 4, 
      day: '17', 
      month: 'Jun', 
      title: 'Why Location Matters: Choosing a Hotel for Your Next Trip', 
      desc: 'See how hotel location impacts convenience, accessibility, and overall travel experience.', 
      img: '/images/blog/4.jpg' 
    },
    { 
      id: 5, 
      day: '16', 
      month: 'Jun', 
      title: "Luxury vs Budget Hotels: What's Right for You?", 
      desc: 'Compare luxury and budget hotels to find the best balance between comfort, value, and features.', 
      img: '/images/blog/5.jpg' 
    },
    { 
      id: 6, 
      day: '15', 
      month: 'Jun', 
      title: '5 Tips to Get the Best Hotel Deals Online', 
      desc: 'Learn smart strategies to book better hotel deals online while avoiding hidden fees.', 
      img: '/images/blog/6.jpg' 
    },
    { 
      id: 7, 
      day: '14', 
      month: 'Jun', 
      title: 'What Makes a Hotel Stay Truly Memorable?', 
      desc: 'Explore the key elements that turn an ordinary hotel stay into a lasting memory.', 
      img: '/images/blog/7.jpg' 
    },
    { 
      id: 8, 
      day: '13', 
      month: 'Jun', 
      title: 'Design Trends Shaping Modern Hotel Interiors', 
      desc: 'Discover modern hotel interior trends that blend style, comfort, and functionality.', 
      img: '/images/blog/8.jpg' 
    }
  ];

  return (
    <div className="blog-layout">
      {/* Navigation Header */}
      <Header headerClass="transparent header-light" />

      {/* Subheader banner */}
      <Subheader title="Blog" tagline="Enjoy Your Stay" backgroundImage="/images/background/1.webp" />

      <main className="bg-white text-dark py-5">
        <section className="py-4">
          <div className="container">
            <div className="row g-4">
              
              {posts.map((post) => (
                <div className="col-lg-6 col-xl-3" key={post.id}>
                  <div className="bg-transparent overflow-hidden h-100 d-flex flex-column justify-content-between border-0 transition-all duration-300 hover-scale-1-1">
                    
                    {/* Rounded Image Container */}
                    <div className="hover relative position-relative overflow-hidden" style={{ height: '240px', borderRadius: '16px' }}>
                      {/* Date Badge */}
                      <div 
                        className="abs z-2 text-white p-2 px-3 m-3 text-center fw-600" 
                        style={{ 
                          position: 'absolute', 
                          backgroundColor: 'rgba(0,0,0,0.65)', 
                          backdropFilter: 'blur(5px)', 
                          borderRadius: '12px',
                          zIndex: 5
                        }}
                      >
                        <div className="fs-20 fw-bold lh-1" style={{ fontFamily: "'Outfit', sans-serif" }}>{post.day}</div>
                        <span className="small" style={{ fontFamily: "'Jost', sans-serif" }}>{post.month}</span>
                      </div>
                      
                      <img src={post.img} className="w-100 h-100 object-fit-cover hover-scale-1-2" alt={post.title} style={{ objectFit: 'cover' }} />
                      <Link to="/blog-single" className="d-block abs w-100 h-100 top-0 start-0" style={{ position: 'absolute', zIndex: 3 }} />
                    </div>

                    {/* Card Description Segment */}
                    <div className="py-3 px-1 text-dark bg-transparent flex-grow-1 d-flex flex-column justify-content-between text-start">
                      <Link to="/blog-single" className="text-dark text-decoration-none">
                        <h3 className="fs-20 mb-2 hover-text-primary" style={{ transition: 'color 0.2s', fontWeight: 600, color: '#1a1a1a', fontFamily: "'Outfit', sans-serif" }}>{post.title}</h3>
                      </Link>
                      <p className="text-muted small mb-0 mt-2 leading-relaxed" style={{ fontFamily: "'Jost', sans-serif", fontSize: '15px' }}>{post.desc}</p>
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
