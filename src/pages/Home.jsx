import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import Reviews from '../components/Reviews';

export default function Home() {
  const submitEstimate = (e) => {
    e.preventDefault();
    alert("Estimate Requested! Our master mechanic will contact you shortly.");
  };

  return (
    <div className="page-container" style={{paddingTop: 0}}>
      <section className="hero">
        <div className="hero-bg">
          <img src="/truck_painting.png" alt="High End Truck Painting" />
        </div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content reveal">
          <span className="hero-subtitle">High-Performance Fleet Repair</span>
          <h1>Engineered To <br/> <span style={{color: 'var(--primary-color)'}}>Dominate.</span></h1>
          <p className="hero-desc reveal delay-1">
            Shree Laxmi Garage is the ultimate auto-body facility. We fuse aerospace-grade painting tech with heavy-duty structural Electric Welding for body of truck to armor your fleet.
          </p>
          <div className="reveal delay-2">
            <Link to="/contact" className="btn btn-solid" style={{marginRight: '20px'}}>Request Priority Service</Link>
            <Link to="/gallery" className="btn">View Our Work</Link>
          </div>
        </div>
      </section>

      {/* NEW SECTION: The Rebuild Process */}
      <section className="section" style={{background: 'var(--bg-dark)'}}>
          <div className="section-header reveal">
            <h2>The Rebuild <span>Protocol</span></h2>
            <p style={{color: 'var(--secondary-color)', fontSize: '1.2rem', marginTop: '10px'}}>Our proprietary 4-step execution system.</p>
          </div>
          
          <div className="protocol-grid">
              <div className="protocol-card reveal">
                  <div className="protocol-card-number">01</div>
                  <div className="protocol-card-content">
                      <h3>Laser Assessment & Tear Down</h3>
                      <p>We don't guess. We use 3D laser telemetry to map exact frame deformities before our mechanics strip away all destroyed panels and corrupted shielding.</p>
                  </div>
              </div>
              
              <div className="protocol-card reveal delay-1">
                  <div className="protocol-card-number">02</div>
                  <div className="protocol-card-content">
                      <h3>Electric Welding</h3>
                      <p>Our certified technicians utilize high-penetration Electric Welding for body of truck to reconstruct structural steel support beams far exceeding factory strength tolerances.</p>
                  </div>
              </div>
              
              <div className="protocol-card reveal delay-2">
                  <div className="protocol-card-number">03</div>
                  <div className="protocol-card-content">
                      <h3>Aero-Grade Painting</h3>
                      <p>Inside our sterilized booths, we apply multi-layer carbon-resistant commercial paint finishes, perfectly computer-matched to your fleet's exact hex code.</p>
                  </div>
              </div>
              
              <div className="protocol-card reveal">
                  <div className="protocol-card-number">04</div>
                  <div className="protocol-card-content">
                      <h3>Final QA & Delivery</h3>
                      <p>Every rig passes a 50-point stress test and electronic sensor recalibration before we hand the keys back. Built. Tested. Delivered.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* NEW SECTION: High-Performance Stats */}
      <section className="section" style={{background: 'var(--primary-color)', padding: '50px 5%', borderTop: '1px solid #ff4d4d', borderBottom: '1px solid #ff4d4d'}}>
          <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '30px', textAlign: 'center', maxWidth: '1200px', margin: '0 auto'}}>
              <div className="reveal">
                  <h3 style={{fontSize: '4rem', color: '#fff', marginBottom: '10px', textShadow: '0 5px 15px rgba(0,0,0,0.3)'}}>15<span style={{fontSize: '2rem'}}>YRS</span></h3>
                  <p style={{color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase'}}>Industrial Excellence</p>
              </div>
              <div className="reveal delay-1">
                  <h3 style={{fontSize: '4rem', color: '#fff', marginBottom: '10px', textShadow: '0 5px 15px rgba(0,0,0,0.3)'}}>500<span style={{fontSize: '2rem'}}>+</span></h3>
                  <p style={{color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase'}}>Commercial Fleets Serviced</p>
              </div>
              <div className="reveal delay-2">
                  <h3 style={{fontSize: '4rem', color: '#fff', marginBottom: '10px', textShadow: '0 5px 15px rgba(0,0,0,0.3)'}}>24<span style={{fontSize: '2rem'}}>/7</span></h3>
                  <p style={{color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase'}}>Emergency Deployment</p>
              </div>
          </div>
      </section>

      <section className="section" style={{background: 'var(--bg-dark)', borderTop: '1px solid rgba(230,0,0,0.2)', textAlign: 'center'}}>
        <div className="section-header reveal">
          <h2>Core <span>Mechanics</span></h2>
          <p style={{color: 'var(--secondary-color)', fontSize: '1.2rem', marginTop: '10px', marginBottom: '60px'}}>We offer a full suite of industrial-grade heavy logistics repairs.</p>
        </div>
        
        <div className="services-grid" style={{textAlign: 'left', marginBottom: '60px'}}>
          <Link to="/services/color-work" className="service-card reveal">
            <div className="service-icon">🎨</div>
            <h3>Color Work</h3>
            <p>Computerized color matching and aerospace-grade rust-proofing.</p>
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
            <h3>Gas Welding</h3>
            <p>Gas welding for Show/ Cabin.</p>
          </Link>
          
          <Link to="/services/electric-welding" className="service-card reveal delay-2">
            <div className="service-icon">⚡</div>
            <h3>Electric Welding</h3>
            <p>Electric Welding for body of truck.</p>
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
        
        <div className="reveal delay-2">
           <Link to="/services" className="btn btn-solid" style={{padding: '20px 50px'}}>View Detailed Portfolio</Link>
        </div>
      </section>

      <Reviews />
      <CTA />
    </div>
  );
}
