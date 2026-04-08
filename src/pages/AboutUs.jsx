export default function AboutUs() {
  return (
    <div className="page-container">
      <div className="inner-header">
        <h1 className="reveal">About US </h1>
        <p className="reveal delay-1" style={{ fontSize: '1.5rem', marginTop: '20px', color: 'var(--primary-color)' }}>The Backbone of Commercial Trucking</p>
      </div>

      <div className="inner-content reveal delay-2">
        <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '80px', paddingTop: '50px' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ color: '#fff', marginBottom: '20px' }}>Our History</h2>
            <p style={{ marginBottom: '20px' }}>
              Founded on a bedrock of hard work and mechanical expertise, Shree Laxmi Body Repairing has grown from a single-bay welding shop into a premier heavy-duty truck collision center. For over a decade, we have partnered with massive logistics fleets to keep their assets on the road.
            </p>
            <p>
              We understand that a broken down truck isn't just an inconvenience—it's lost revenue. That's why we engineered our facility to execute rapid, factory-grade repairs using industrial arc welders, 3D frame measurement tech, and commercial paint booths.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: '300px', background: 'var(--bg-panel)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,184,0,0.2)' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>By The Numbers</h3>
            <ul style={{ listStyle: 'none', fontSize: '1.5rem', color: '#fff', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <li><strong style={{ color: 'var(--primary-color)', fontSize: '2.5rem' }}>500+</strong><br />Fleets Serviced</li>
              <li><strong style={{ color: 'var(--primary-color)', fontSize: '2.5rem' }}>15</strong><br />Years of Excellence</li>
              <li><strong style={{ color: 'var(--primary-color)', fontSize: '2.5rem' }}>24/7</strong><br />Emergency Estimation Support</li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '80px', paddingBottom: '40px' }}>
          <h2 style={{ marginBottom: '40px' }}>Meet The Master Mechanics</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 60px', fontSize: '1.2rem' }}>
            Our team is strictly composed of certified heavy-duty technicians. From our A-class gas welders to our precision color-match painters, Shree Laxmi mechanics treat every rig as if it were their own.
          </p>

          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ flex: 1, minWidth: '250px', background: 'var(--bg-panel)', padding: '30px', borderRadius: '4px', border: '1px solid rgba(230,0,0,0.2)' }}>
              <div style={{ width: '120px', height: '120px', background: '#222', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', filter: 'drop-shadow(0 0 10px rgba(230,0,0,0.3))' }}>👨‍🏭</div>
              <h3 style={{ color: '#fff', marginBottom: '5px' }}>Rajendra Patel</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '15px' }}>Chief ARC Welder</p>
              <p style={{ color: 'var(--secondary-color)', fontSize: '0.95rem' }}>15+ years restructuring heavy logistics beams and chassis frames.</p>
            </div>

            <div style={{ flex: 1, minWidth: '250px', background: 'var(--bg-panel)', padding: '30px', borderRadius: '4px', border: '1px solid rgba(230,0,0,0.2)' }}>
              <div style={{ width: '120px', height: '120px', background: '#222', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', filter: 'drop-shadow(0 0 10px rgba(230,0,0,0.3))' }}>🧑‍🦲</div>
              <h3 style={{ color: '#fff', marginBottom: '5px' }}>Vikram Singh</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '15px' }}>Master Color Mixologist</p>
              <p style={{ color: 'var(--secondary-color)', fontSize: '0.95rem' }}>Specializes in aerospace-grade clear coats and precision hex-code matching.</p>
            </div>

            <div style={{ flex: 1, minWidth: '250px', background: 'var(--bg-panel)', padding: '30px', borderRadius: '4px', border: '1px solid rgba(230,0,0,0.2)' }}>
              <div style={{ width: '120px', height: '120px', background: '#222', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', filter: 'drop-shadow(0 0 10px rgba(230,0,0,0.3))' }}>👨‍🔧</div>
              <h3 style={{ color: '#fff', marginBottom: '5px' }}>Amit Desai</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '15px' }}>Collision Assessment Lead</p>
              <p style={{ color: 'var(--secondary-color)', fontSize: '0.95rem' }}>Operates 3D laser telemetry. He decides if a truck lives or dies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
