import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container" style={{display: 'flex', flexWrap: 'wrap', gap: '50px', maxWidth: '1200px', margin: '0 auto', textAlign: 'left', paddingBottom: '50px', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
        <div style={{flex: 1, minWidth: '300px'}}>
            <div className="nav-logo" style={{marginBottom: '20px'}}>
                <img src="/red_logo.png" alt="Shree Laxmi Garage Logo" style={{height: '80px'}} />
            </div>
            <p style={{color: 'var(--text-secondary)'}}>
                The premier heavy-duty collision and truck body overhaul facility. We rebuild what the others write off.
            </p>
        </div>
        <div style={{flex: 1, minWidth: '200px'}}>
            <h3 style={{color: '#fff', fontSize: '1.5rem', marginBottom: '20px'}}>Navigation</h3>
            <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <li><Link to="/about" style={{color: 'var(--text-secondary)', textDecoration: 'none'}}>About Us</Link></li>
                <li><Link to="/gallery" style={{color: 'var(--text-secondary)', textDecoration: 'none'}}>Our Work (Gallery)</Link></li>
                <li><Link to="/services/color-work" style={{color: 'var(--text-secondary)', textDecoration: 'none'}}>Color Work & Painting</Link></li>
                <li><Link to="/services/accident-work" style={{color: 'var(--text-secondary)', textDecoration: 'none'}}>Accident Reconstruction</Link></li>
            </ul>
        </div>
        <div style={{flex: 1, minWidth: '200px'}}>
            <h3 style={{color: '#fff', fontSize: '1.5rem', marginBottom: '20px'}}>Headquarters</h3>
            <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px', color: 'var(--text-secondary)'}}>
                <li>Shree Laxmi Body Repair</li>
                <li>Main Highway, Gujarat</li>
                <li style={{color: 'var(--primary-color)', fontSize: '1.5rem', marginTop: '10px', fontFamily: 'var(--font-display)'}}>+1 (800) GARAGE-X</li>
            </ul>
        </div>
      </div>
      <p style={{color: 'var(--text-secondary)', marginTop: '40px'}}>
         &copy; 2026 Shree Laxmi Body Repairing. All rights reserved. React V19 Modernized.
      </p>
    </footer>
  );
}
