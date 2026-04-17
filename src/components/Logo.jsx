export default function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <img 
        src="/truck_logo.png" 
        alt="Shree Laxmi Mark" 
        style={{ height: '55px', borderRadius: '6px', border: '2px solid var(--primary-color)', boxShadow: '0 0 10px rgba(255, 107, 0, 0.4)' }}
      />
      <div>
        <h1 style={{ fontSize: '1.4rem', margin: 0, color: '#fff', letterSpacing: '1px', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
           SHREE LAXMI
        </h1>
        <p style={{ margin: 0, color: 'var(--primary-color)', letterSpacing: '2px', fontSize: '0.75rem', fontWeight: 'bold' }}>
           BODY REPAIRING
        </p>
      </div>
    </div>
  );
}
