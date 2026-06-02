import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

/**
 * Universal Header Component.
 * Supports sticky scroll transitions, active routes, and interactive mobile menus.
 */
export default function Header({ headerClass }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  const location = useLocation();

  // Scroll handler for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleSubMenu = (menuKey) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  // Combine parent header classes with dynamic sticky state
  const baseClass = headerClass || 'transparent header-light';
  const stickyClass = isSticky ? 'sticky solid shadow-sm' : '';
  const finalClass = `${baseClass} ${stickyClass}`.trim();

  return (
    <header className={finalClass} style={{ transition: 'all 0.3s', top: 0, left: 0 }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex">
              <div className="de-flex-col">
                {/* Logo Section */}
                <div id="logo">
                  <Link to="/" className="d-flex align-items-center" style={{ textDecoration: 'none' }}>
                    {/* Logo image */}
                    <img 
                      className="logo-main" 
                      src="/images/Saptagiri.png" 
                      alt="Saptagiri Logo" 
                      style={{ maxHeight: '60px', width: 'auto' }}
                    />
                    <img 
                      className="logo-mobile" 
                      src="/images/Saptagiri.png" 
                      alt="Saptagiri Mobile Logo" 
                      style={{ maxHeight: '40px', width: 'auto' }}
                    />
                    <span 
                      className="ms-1" 
                      style={{ 
                        fontFamily: "'Montserrat', sans-serif", 
                        fontWeight: 700, 
                        fontSize: '28px', 
                        color: 'var(--heading-font-color)',
                        letterSpacing: '0.5px'
                      }}
                    >
                      Saptagiri
                    </span>
                  </Link>
                </div>
              </div>

              {/* Navigation Menu Column */}
              <div className="de-flex-col">
                <div className={`de-flex-col header-col-mid navigation-col ${mobileMenuOpen ? 'mobile-show' : ''}`}>
                  <ul id="mainmenu">
                    {/* HOME */}
                    <li>
                      <NavLink to="/" end className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}>Home</NavLink>
                    </li>

                    {/* ROOMS DROPDOWN */}
                    <li className={`has-child ${expandedMenus['rooms'] ? 'expanded' : ''}`}>
                      <a href="#" className="menu-item" onClick={(e) => { e.preventDefault(); toggleSubMenu('rooms'); }}>Rooms</a>
                      <ul style={{ display: expandedMenus['rooms'] || window.innerWidth > 992 ? 'block' : 'none' }}>
                        <li><NavLink to="/rooms" end className={({ isActive }) => isActive ? 'active' : ''}>Rooms Default</NavLink></li>
                        <li><NavLink to="/rooms-interactive" className={({ isActive }) => isActive ? 'active' : ''}>Interactive <span className="badge bg-danger ms-1">New</span></NavLink></li>
                        <li><NavLink to="/rooms-list" className={({ isActive }) => isActive ? 'active' : ''}>Rooms List</NavLink></li>
                        <li><NavLink to="/rooms-split" className={({ isActive }) => isActive ? 'active' : ''}>Rooms Split</NavLink></li>
                        <li><NavLink to="/rooms-slider" className={({ isActive }) => isActive ? 'active' : ''}>Rooms Slider</NavLink></li>
                        <li><NavLink to="/room-single" className={({ isActive }) => isActive ? 'active' : ''}>Single Room</NavLink></li>
                      </ul>
                    </li>

                    {/* RESERVATION */}
                    <li>
                      <NavLink to="/reservation" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}>Reservation</NavLink>
                    </li>

                    {/* PAGES DROPDOWN */}
                    <li className={`has-child ${expandedMenus['pages'] ? 'expanded' : ''}`}>
                      <a href="#" className="menu-item" onClick={(e) => { e.preventDefault(); toggleSubMenu('pages'); }}>Pages</a>
                      <ul style={{ display: expandedMenus['pages'] || window.innerWidth > 992 ? 'block' : 'none' }}>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink></li>
                        <li><NavLink to="/facilities" className={({ isActive }) => isActive ? 'active' : ''}>Facilities</NavLink></li>
                        <li><NavLink to="/offers" className={({ isActive }) => isActive ? 'active' : ''}>Offers</NavLink></li>
                        <li><NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>Gallery</NavLink></li>
                        <li><NavLink to="/gallery-carousel" className={({ isActive }) => isActive ? 'active' : ''}>Gallery Carousel</NavLink></li>
                        <li><NavLink to="/testimonials" className={({ isActive }) => isActive ? 'active' : ''}>Testimonials</NavLink></li>
                      </ul>
                    </li>

                    {/* BLOG */}
                    <li>
                      <NavLink to="/blog" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}>Blog</NavLink>
                    </li>

                    {/* CONTACT */}
                    <li>
                      <NavLink to="/contact" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}>Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Column (Reservation Button & Hamburger Toggle) */}
              <div className="de-flex-col">
                <div className="menu_side_area d-flex align-items-center">
                  <Link to="/reservation" className="btn-main fx-slide hover-white" style={{ borderRadius: '30px' }}>
                    <span>Reservation</span>
                  </Link>
                  {/* Hamburger menu button for mobile screens */}
                  <span 
                    id="menu-btn" 
                    className={mobileMenuOpen ? 'open' : ''} 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
