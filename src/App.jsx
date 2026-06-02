import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useScrollToTop } from './hooks/useScrollToTop';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Preloader from './components/Preloader';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomsList from './pages/RoomsList';
import RoomsSplit from './pages/RoomsSplit';
import RoomsSlider from './pages/RoomsSlider';
import RoomsInteractive from './pages/RoomsInteractive';
import RoomSingle from './pages/RoomSingle';
import Reservation from './pages/Reservation';
import About from './pages/About';
import Facilities from './pages/Facilities';
import Offers from './pages/Offers';
import OfferSingle from './pages/OfferSingle';
import Gallery from './pages/Gallery';
import GalleryCarousel from './pages/GalleryCarousel';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import Contact from './pages/Contact';

/**
 * Scroll Restorer Component wrapper.
 */
function ScrollToTopWrapper({ children }) {
  useScrollToTop();
  return children;
}

/**
 * Root Router Application assembly.
 * Defines SPAs routing for all 22 theme interfaces.
 */
export default function App() {
  useSmoothScroll();

  return (
    <Router>
      <ScrollToTopWrapper>
        <Preloader />
        <Routes>
          {/* Home Landing */}
          <Route path="/" element={<Home />} />

          {/* Rooms Views */}
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms-list" element={<RoomsList />} />
          <Route path="/rooms-split" element={<RoomsSplit />} />
          <Route path="/rooms-slider" element={<RoomsSlider />} />
          <Route path="/rooms-interactive" element={<RoomsInteractive />} />
          <Route path="/room-single" element={<RoomSingle />} />

          {/* Reservation Forms */}
          <Route path="/reservation" element={<Reservation />} />

          {/* Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/offer-single" element={<OfferSingle />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery-carousel" element={<GalleryCarousel />} />
          <Route path="/testimonials" element={<Testimonials />} />

          {/* Blog & News */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-single" element={<BlogSingle />} />

          {/* Contacts */}
          <Route path="/contact" element={<Contact />} />

          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </ScrollToTopWrapper>
    </Router>
  );
}
