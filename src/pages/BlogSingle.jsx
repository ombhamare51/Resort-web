import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subheader from '../components/Subheader';

/**
 * Single Blog Article Reader Component.
 * Features sidebar widgets, comments list, and interactive fields.
 */
export default function BlogSingle() {
  const recentPosts = [
    { title: 'Top Hotel Amenities That Guests Love in 2025', date: '20 Jun 2026', img: '/images/blog/1.jpg' },
    { title: 'How to Choose the Perfect Room for Your Stay', date: '19 Jun 2026', img: '/images/blog/2.jpg' },
    { title: 'A Culinary Journey: Signature Dishes', date: '18 Jun 2026', img: '/images/blog/3.jpg' }
  ];

  return (
    <div className="blog-single-layout">
      {/* Navigation */}
      <Header headerClass="transparent header-light" />

      {/* Subheader */}
      <Subheader title="Blog Single" tagline="News & Articles" backgroundImage="/images/background/1.webp" />

      <main className="bg-dark text-light py-5">
        <section className="py-4">
          <div className="container">
            <div className="row g-5">

              {/* Main Reader Column */}
              <div className="col-lg-8">
                <div className="bg-dark-2 p-4 p-md-5 rounded-1 border border-secondary border-opacity-10 mb-4">
                  
                  {/* Article Metadata */}
                  <div className="d-flex gap-3 text-muted mb-3 fs-14">
                    <span><i className="fa-regular fa-user text-primary me-2" style={{ color: '#c89c56' }}></i>Admin</span>
                    <span><i className="fa-regular fa-calendar text-primary me-2" style={{ color: '#c89c56' }}></i>June 20, 2026</span>
                    <span><i className="fa-regular fa-comment text-primary me-2" style={{ color: '#c89c56' }}></i>2 Comments</span>
                  </div>

                  <h3 className="fs-32 text-white mb-4" style={{ fontWeight: 600 }}>Top Hotel Amenities That Guests Love in 2025 Trends</h3>
                  
                  {/* Cover Photo */}
                  <div className="rounded overflow-hidden mb-4" style={{ maxHeight: '420px' }}>
                    <img src="/images/blog/1.jpg" className="w-100" style={{ objectFit: 'cover' }} alt="Blog post cover" />
                  </div>

                  <p className="text-muted leading-relaxed mb-4">
                    In the rapidly evolving world of premium hospitality, guest expectations are reaching new heights. In 2025, the trends governing luxury hotel amenities go far beyond typical expectations of room cleanliness and default Wi-Fi connections. Today's travelers seek an integrated experience that blends intelligent room customization, health-centric facilities, and absolute convenience.
                  </p>

                  <blockquote className="border-start border-primary border-4 ps-4 my-4 fs-18 italic text-white" style={{ borderColor: '#c89c56' }}>
                    "The definition of true luxury is evolving from material objects to seamless, personalized experiences that align with comfort and modern technology."
                  </blockquote>

                  <p className="text-muted leading-relaxed mb-4">
                    One of the most notable transitions is the implementation of smart-room controls, allowing guests to adjust bedroom temperatures, order late-night dining, and control ambient room lighting directly from a voice assistant or custom mobile app. Furthermore, holistic wellness initiatives, such as private in-room air purifiers, custom organic mattresses, and mineral-rich bath salts, have become standard expectations for seasoned visitors.
                  </p>

                  {/* Tags */}
                  <div className="border-top border-secondary border-opacity-25 pt-4 mt-5 d-flex flex-wrap gap-2 align-items-center">
                    <span className="fw-bold text-white me-2">Tags:</span>
                    {['hotel', 'luxury', 'amenities', 'stay', 'lifestyle'].map(tag => (
                      <span key={tag} className="badge bg-dark-3 text-muted py-2 px-3 border border-secondary border-opacity-25 text-capitalize">{tag}</span>
                    ))}
                  </div>

                </div>

                {/* Comments List */}
                <div className="bg-dark-2 p-4 p-md-5 rounded-1 border border-secondary border-opacity-10 mb-4">
                  <h4 className="fs-22 text-white mb-4" style={{ fontWeight: 600 }}>Guest Comments (2)</h4>
                  
                  <div className="d-flex flex-column gap-4">
                    <div className="d-flex gap-3 border-bottom border-secondary border-opacity-25 pb-3">
                      <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-white font-weight-bold" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                        AL
                      </div>
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <h5 className="fs-16 text-white mb-0">Anna L.</h5>
                          <span className="text-muted small">June 21, 2026</span>
                        </div>
                        <p className="text-muted small mb-0">Excellent analysis. The transition into smart tech is indeed something that redefined my recent stays! Appreciate these insights.</p>
                      </div>
                    </div>

                    <div className="d-flex gap-3">
                      <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-white font-weight-bold" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                        MH
                      </div>
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <h5 className="fs-16 text-white mb-0">Michael H.</h5>
                          <span className="text-muted small">June 21, 2026</span>
                        </div>
                        <p className="text-muted small mb-0">Highly agree on the wellness amenities! I always check if a hotel has robust air purification and high-quality spas before making any reservations.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Leave Comment Form */}
                <div className="bg-dark-2 p-4 p-md-5 rounded-1 border border-secondary border-opacity-10">
                  <h4 className="fs-22 text-white mb-4" style={{ fontWeight: 600 }}>Leave a Comment</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <input type="text" className="form-control bg-transparent border-secondary text-white py-3" placeholder="Your Name" required />
                      </div>
                      <div className="col-md-6">
                        <input type="email" className="form-control bg-transparent border-secondary text-white py-3" placeholder="Your Email" required />
                      </div>
                      <div className="col-md-12">
                        <textarea rows="5" className="form-control bg-transparent border-secondary text-white py-3" placeholder="Your Comment..." required></textarea>
                      </div>
                      <div className="col-md-12 mt-3">
                        <button type="submit" className="btn-main px-4 py-3 rounded border-0">Submit Comment</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Sidebar Columns */}
              <div className="col-lg-4">
                
                {/* Search widget */}
                <div className="bg-dark-2 p-4 rounded-1 border border-secondary border-opacity-10 mb-4">
                  <h4 className="fs-18 text-white mb-3" style={{ fontWeight: 600 }}>Search Post</h4>
                  <div className="input-group">
                    <input type="text" className="form-control bg-transparent border-secondary text-white" placeholder="Type keyword..." />
                    <button className="btn btn-outline-secondary border-secondary text-white px-3" type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
                  </div>
                </div>

                {/* Recent posts widget */}
                <div className="bg-dark-2 p-4 rounded-1 border border-secondary border-opacity-10">
                  <h4 className="fs-18 text-white mb-4" style={{ fontWeight: 600 }}>Recent Posts</h4>
                  <div className="d-flex flex-column gap-3">
                    {recentPosts.map((post, index) => (
                      <Link to="/blog-single" key={index} className="d-flex gap-3 text-decoration-none text-white hover-scale-1-1 align-items-center">
                        <img src={post.img} className="rounded" alt="" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                        <div>
                          <h6 className="fs-14 mb-1 text-white hover-text-primary leading-snug" style={{ transition: 'color 0.2s' }}>{post.title}</h6>
                          <span className="text-muted small" style={{ fontSize: '11px' }}>{post.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
