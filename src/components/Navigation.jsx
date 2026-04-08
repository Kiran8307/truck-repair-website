import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo">
        <img src="/red_logo.png" alt="Shree Laxmi Garage Logo" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
        <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link></li>
        <li><Link to="/services" className={location.pathname.includes('/services') ? 'active' : ''}>Services</Link></li>
        <li><Link to="/contact" className={`btn ${location.pathname === '/contact' ? 'btn-solid' : ''}`} style={{padding: '10px 20px', fontSize: '1.2rem', marginLeft: '20px'}}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}
