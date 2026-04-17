import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className={`nav-header ${menuOpen ? 'menu-open' : ''}`}>
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>
        <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)} className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
        <li><Link to="/gallery" onClick={() => setMenuOpen(false)} className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link></li>
        <li><Link to="/services" onClick={() => setMenuOpen(false)} className={location.pathname.includes('/services') ? 'active' : ''}>Services</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)} className={`btn ${location.pathname === '/contact' ? 'btn-solid' : ''}`} style={{padding: '10px 20px', fontSize: '1.2rem'}}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}
