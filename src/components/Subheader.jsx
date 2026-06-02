import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Universal Subheader component for inner pages.
 */
export default function Subheader({ title, tagline, backgroundImage, crumbTitle }) {
  const bgImg = backgroundImage || '/images/background/1.webp';
  const defaultTagline = tagline || 'Enjoy Your Stay';
  const displayCrumb = crumbTitle || title;

  return (
    <section 
      id="subheader" 
      className="section-dark bg-dark text-white relative"
      style={{
        margin: '30px 30px 30px 30px',
        borderRadius: '24px',
        overflow: 'hidden',
        position: 'relative',
        padding: '130px 0 100px 0',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)'
      }}
    >
      {/* Background Image Style Override */}
      <div 
        className="absolute top-0 start-0 w-100 h-100" 
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.95,
          zIndex: 1
        }}
      />
      
      {/* Warm, brown-tinted overlay for rich contrast and matching the mockup exactly */}
      <div 
        className="absolute top-0 start-0 w-100 h-100" 
        style={{
          background: 'linear-gradient(180deg, rgba(40, 28, 18, 0.5) 0%, rgba(40, 28, 18, 0.65) 100%)',
          zIndex: 2
        }}
      />
      
      <div className="container text-center" style={{ position: 'relative', zIndex: 3 }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            {/* Tagline above Title */}
            <span 
              className="d-block wow fadeInUp"
              style={{ 
                color: '#D09E5A', 
                fontFamily: "'Jost', sans-serif",
                fontWeight: '600',
                fontSize: '22px',
                letterSpacing: '-0.01em',
                marginBottom: '4px'
              }}
            >
              {defaultTagline}
            </span>
            
            {/* Title */}
            <h1 
              className="mb-0 wow fadeInUp text-white" 
              data-wow-delay=".2s"
              style={{ 
                fontSize: '64px', 
                fontWeight: '700',
                letterSpacing: '-0.03em',
                lineHeight: '1.15',
                fontFamily: "'Jost', sans-serif",
                textTransform: 'none',
                color: '#ffffff'
              }}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Centered Breadcrumb Pill - positioned at the bottom center of the subheader card */}
      <div 
        className="w-100 d-flex justify-content-center" 
        style={{
          position: 'absolute',
          bottom: '0px',
          left: 0,
          zIndex: 3
        }}
      >
        <div className="wow fadeInUp" data-wow-delay=".4s">
          <ul 
            className="crumb d-flex align-items-center gap-2" 
            style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(10px)', 
              borderRadius: '0px', 
              listStyle: 'none', 
              margin: 0, 
              padding: '12px 28px',
              border: 'none',
              boxShadow: 'none'
            }}
          >
            <li style={{ display: 'inline-flex', alignItems: 'center' }}>
              <Link to="/" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
                Home
              </Link>
            </li>
            <li className="active" style={{ color: '#ffffff', fontWeight: '600', fontSize: '13px', display: 'inline-flex', alignItems: 'center' }}>
              {displayCrumb}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

