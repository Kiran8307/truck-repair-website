import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="section" style={{background: 'linear-gradient(to top, rgba(230,0,0,0.1), #050505)', textAlign: 'center', borderTop: '1px solid rgba(230,0,0,0.2)', padding: '100px 5%'}}>
      <div className="reveal">
        <h2 style={{fontSize: '4rem', marginBottom: '20px'}}>Ready To <span style={{color: 'var(--primary-color)'}}>Deploy?</span></h2>
        <p style={{color: 'var(--secondary-color)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px'}}>
          Our emergency bays are standing by. Get priority service and rapid factory-grade repair estimations today.
        </p>
        <Link to="/contact" className="btn btn-solid" style={{padding: '20px 60px', fontSize: '1.5rem', boxShadow: '0 10px 30px rgba(230,0,0,0.3)'}}>
          Contact Our Master Mechanics
        </Link>
      </div>
    </section>
  );
}
