import { Link } from 'react-router-dom';

export default function BreadcrumbHeader({ title, subtitle, image = '/truck_painting.png' }) {
  return (
    <div className="breadcrumb-header" style={{
        position: 'relative',
        padding: '100px 5% 60px',
        background: `linear-gradient(to bottom, rgba(0, 12, 26, 0.8), var(--bg-dark)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        borderBottom: '2px solid var(--primary-color)',
        textAlign: 'center',
        overflow: 'hidden',
        marginBottom: '50px'
    }}>
      <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="reveal" style={{ textShadow: '0 5px 15px rgba(0,0,0,0.8)' }}>{title}</h1>
          <p className="reveal delay-1" style={{ fontSize: '1.5rem', marginTop: '10px', color: 'var(--primary-color)', textShadow: '0 2px 5px rgba(0,0,0,0.8)' }}>
            {subtitle}
          </p>
          <div className="reveal delay-2" style={{ marginTop: '25px', display: 'inline-block', background: 'rgba(0, 12, 26, 0.8)', padding: '10px 25px', borderRadius: '30px', border: '1px solid rgba(255, 107, 0, 0.3)', backdropFilter: 'blur(5px)' }}>
              <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 'bold' }}>HOME</Link>
              <span style={{ margin: '0 10px', color: 'var(--primary-color)' }}>&gt;</span>
              <span style={{ color: '#fff', fontWeight: 'bold' }}>{title.toUpperCase()}</span>
          </div>
      </div>
    </div>
  );
}
