import { Link } from 'react-router-dom';

export default function Gallery() {
  return (
    <div className="page-container">
      <div className="inner-header">
        <h1 className="reveal">The Showcase</h1>
        <p className="reveal delay-1" style={{fontSize: '1.5rem', marginTop: '20px', color: 'var(--primary-color)'}}>Behind The Scenes of Mechanical Perfection</p>
      </div>
      
      <div className="inner-content reveal delay-2">
        <p style={{textAlign: 'center', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px'}}>
            Take a look inside the highly sterile, advanced environment of Shree Laxmi Garage. We operate industry-leading carbon fiber paint booths and strictly managed structural welding zones to ensure your fleet gets priority care.
        </p>

        <div className="gallery-grid">
            <div className="gallery-item reveal">
                <img src="/truck_painting.png" alt="High End Painting Booth" />
                <div className="gallery-caption">
                    <h4>Aerospace Grade Coating</h4>
                </div>
            </div>
            
            <div className="gallery-item reveal delay-1">
                <img src="/truck_welding.png" alt="Electric ARC Welding" />
                <div className="gallery-caption">
                    <h4>Structural ARC Fusion</h4>
                </div>
            </div>
            
            <div className="gallery-item reveal delay-2">
                <img src="/truck_crash.png" alt="Collision Reconstruction Work" />
                <div className="gallery-caption">
                    <h4>Chassis Reconstruction</h4>
                </div>
            </div>
        </div>

        <div style={{marginTop: '80px', textAlign: 'center'}}>
            <Link to="/#contact" className="btn btn-solid">Deploy Your Fleet Today</Link>
        </div>
      </div>
    </div>
  );
}
