import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

export default function Services() {
  return (
    <div className="page-container">
      <div className="inner-header">
        <h1 className="reveal">Our Services</h1>
        <p className="reveal delay-1" style={{fontSize: '1.5rem', marginTop: '20px', color: 'var(--primary-color)'}}>Comprehensive Commercial Fleet Solutions</p>
      </div>
      
      <div className="inner-content reveal delay-2">
        <div className="services-grid">
          <Link to="/services/color-work" className="service-card reveal">
            <div className="service-icon">🎨</div>
            <h3>Color Work</h3>
            <p>Full fleet repainting, computerized color matching, and rust-proofing treatments.</p>
          </Link>
          
          <Link to="/services/accident-work" className="service-card reveal delay-1">
            <div className="service-icon">💥</div>
            <h3>Accident Rehab</h3>
            <p>Heavy collision chassis reconstruction using 3D measurement.</p>
          </Link>
          
          <Link to="/services/insurance-claims" className="service-card reveal delay-2">
            <div className="service-icon">📋</div>
            <h3>Cashless Claims</h3>
            <p>Complete claim settlement aligned with Indian motor regulations.</p>
          </Link>
          
          <Link to="/services/contract-work" className="service-card reveal">
            <div className="service-icon">🤝</div>
            <h3>Fleet Contracts</h3>
            <p>Priority lane maintenance for high-volume logistics.</p>
          </Link>
          
          <Link to="/services/gas-welding" className="service-card reveal delay-1">
            <div className="service-icon">🔥</div>
            <h3>Precision Gas</h3>
            <p>Oxy-fuel welding for cast iron components.</p>
          </Link>
          
          <Link to="/services/electric-welding" className="service-card reveal delay-2">
            <div className="service-icon">⚡</div>
            <h3>Electric ARC</h3>
            <p>High-penetration structural steel fusion.</p>
          </Link>
          
          <Link to="/services/making-containers" className="service-card reveal">
            <div className="service-icon">📦</div>
            <h3>Making Containers</h3>
            <p>Advanced custom fabrication of heavy-duty Indian shipping containers.</p>
          </Link>
          
          <Link to="/services/loading-platforms" className="service-card reveal delay-1">
            <div className="service-icon">🏗️</div>
            <h3>Loading Platforms</h3>
            <p>Reinforcing high-capacity open structural platforms for heavy haulage.</p>
          </Link>
        </div>
      </div>
      <CTA />
    </div>
  );
}
