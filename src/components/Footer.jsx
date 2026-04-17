import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer-bg" style={{ 
      paddingTop: '80px', 
      paddingBottom: '20px', 
      borderTop: '2px solid var(--primary-color)', 
      textAlign: 'left' 
    }}>
      <div className="footer-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', maxWidth: '1200px', margin: '0 auto', paddingBottom: '50px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingLeft: '20px', paddingRight: '20px' }}>
        
        {/* Brand Column */}
        <div style={{ flex: '1.5 1 300px' }}>
            <Link to="/" className="nav-logo" style={{ marginBottom: '20px', display: 'block', textDecoration: 'none' }}>
                <Logo />
            </Link>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                The premier heavy-duty collision and truck body overhaul facility. Building unbreakable rigs for India's toughest logistics fleets.
            </p>
        </div>

        {/* Quick Links Column */}
        <div style={{ flex: '1 1 150px' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px', padding: 0 }}>
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/gallery" className="footer-link">Our Work (Gallery)</Link></li>
                <li><Link to="/services" className="footer-link">Core Services</Link></li>
                <li><Link to="/contact" className="footer-link">Contact Direct</Link></li>
            </ul>
        </div>

        {/* Operating Hours Column */}
        <div style={{ flex: '1 1 180px' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>Working Time</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px', color: 'var(--text-secondary)', padding: 0 }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                    <span>Mon - Sun:</span> <span style={{ color: '#fff' }}>9:00 am to 7:00 pm</span>
                </li>
                <li>
                    <span style={{ color: 'var(--primary-color)' }}>Holiday on</span><br/>Amavas and Public Holidays
                </li>
            </ul>
        </div>

        {/* Contact Column */}
        <div style={{ flex: '1.2 1 250px' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact Details</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px', color: 'var(--text-secondary)', padding: 0 }}>
                <li style={{ display: 'flex', gap: '15px', alignItems: 'center', marginTop: '5px' }}>
                   <div style={{minWidth: '28px'}}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                   </div>
                   <span>Shree Laxmi body Reparing<br/>Beside Jio Pump, Boriavi<br/>Anand 387310</span>
                </li>
                <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                   <div style={{minWidth: '28px', paddingTop: '4px'}}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                   </div> 
                   <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                       <a href="tel:+919428489399" style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 'bold', textDecoration: 'none', fontFamily: 'var(--font-display)', letterSpacing: '1px' }}>+91 9428489399</a>
                       <a href="tel:+918320652128" style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 'bold', textDecoration: 'none', fontFamily: 'var(--font-display)', letterSpacing: '1px' }}>+91 8320652128</a>
                   </div>
                </li>
                <li style={{ display: 'flex', gap: '15px', alignItems: 'center', marginTop: '5px' }}>
                   <div style={{minWidth: '28px'}}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                   </div>
                   <a href="mailto:mistrykiran536@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>mistrykiran536@gmail.com</a>
                </li>
            </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <p style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: '0.9rem' }}>
           &copy; {new Date().getFullYear()} Shree Laxmi Body Repairing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
