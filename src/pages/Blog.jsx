import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

/**
 * Blog Listing Component.
 * Lists 4 news cards.
 */
export default function Blog() {
  const posts = [
    { id: 1, day: '20', month: 'Jun', title: 'Top Hotel Amenities That Guests Love in 2025', desc: 'From smart-room technology to wellness features that elevate guest comfort and overall satisfaction.', img: '/images/blog/1.jpg' },
    { id: 2, day: '19', month: 'Jun', title: 'How to Choose the Perfect Room for Your Stay', desc: 'Learn how to choose the ideal hotel room based on comfort, layout, and travel needs for a better stay.', img: '/images/blog/2.jpg' },
    { id: 3, day: '18', month: 'Jun', title: 'A Culinary Journey: Signature Dishes at Our Restaurant', desc: 'Explore our signature menu curated by award-winning chefs, showcasing the finest local and global ingredients.', img: '/images/blog/3.jpg' },
    { id: 4, day: '17', month: 'Jun', title: 'Behind the Scenes: Secrets to Premium Hotel Service', desc: 'Discover the dedication and meticulous standards of hospitality that drive our service behind the scenes.', img: '/images/blog/4.jpg' }
  ];

  return (
    <div className="blog-layout">
      {/* Navigation Header */}
      <Header headerClass="transparent header-light" />

      {/* Subheader banner */}
      <Subheader title="Blog" tagline="Latest News & Articles" backgroundImage="/images/background/1.webp" />

      <main className="bg-dark text-light py-5">
        <section className="py-4">
          <div className="container">
            <div className="row g-4">
              
              {posts.map((post) => (
                <div className="col-lg-6 col-xl-3" key={post.id}>
                  <div className="bg-dark-2 rounded-1 overflow-hidden h-100 d-flex flex-column justify-content-between border border-secondary border-opacity-10 transition-all duration-300 hover-scale-1-1">
                    
                    {/* Hover Cover Image */}
                    <div className="hover relative position-relative overflow-hidden" style={{ height: '220px' }}>
                      <div 
                        className="abs z-2 text-white p-2 px-3 m-3 text-center fw-600 rounded-3" 
                        style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)' }}
                      >
                        <div className="fs-24 fw-bold lh-1">{post.day}</div>
                        <span className="small">{post.month}</span>
                      </div>
                      <img src={post.img} className="w-100 h-100 object-fit-cover hover-scale-1-2" alt={post.title} style={{ objectFit: 'cover' }} />
                      <Link to="/blog-single" className="d-block abs w-100 h-100 top-0 start-0" style={{ position: 'absolute' }} />
                    </div>

                    {/* Card Description Segment */}
                    <div className="p-4 text-white bg-dark-2 flex-grow-1 d-flex flex-column justify-content-between">
                      <Link to="/blog-single" className="text-white text-decoration-none">
                        <h3 className="fs-20 mb-2 hover-text-primary" style={{ transition: 'color 0.2s', fontWeight: 600 }}>{post.title}</h3>
                      </Link>
                      <p className="text-muted small mb-0 mt-2 leading-relaxed">{post.desc}</p>
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
