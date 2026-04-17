import { useState, useEffect } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('garage_reviews');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, name: "Arvind Freight Lines", rating: 5, text: "Excellent paint and body work on our Tata Signa fleet. Recommended!" },
      { id: 2, name: "Mahindra Logistics Hub", rating: 5, text: "They completely rebuilt a crashed chassis perfectly. 10/10." }
    ];
  });

  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');

  useEffect(() => {
    localStorage.setItem('garage_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !text) return;
    const newDoc = { id: Date.now(), name, rating, text };
    setReviews([newDoc, ...reviews]);
    setName('');
    setText('');
    setRating(5);
  };

  return (
    <section className="section" style={{ background: 'rgba(0,0,0,0.5)', borderTop: '1px solid var(--border-color)' }}>
      <div className="section-header reveal">
        <h2>Live <span>Ratings</span></h2>
        <p style={{ color: 'var(--secondary-color)', fontSize: '1.2rem', marginTop: '10px' }}>What India's top fleets say about us.</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
        {/* Reviews List */}
        <div style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="reveal delay-1">
          {reviews.map(r => (
            <div key={r.id} style={{ background: 'var(--bg-panel)', padding: '25px', borderRadius: '4px', borderLeft: '4px solid var(--primary-color)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <strong style={{ color: '#fff', fontSize: '1.2rem' }}>{r.name}</strong>
                <span style={{ color: '#FFB300', fontSize: '1.2rem' }}>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>"{r.text}"</p>
            </div>
          ))}
        </div>

        {/* Submit Review */}
        <div style={{ flex: 1, minWidth: '300px', background: 'var(--bg-dark)', padding: '40px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }} className="reveal delay-2">
          <h3 style={{ marginBottom: '20px', color: '#fff' }}>Leave a Review</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '5px' }}>Company / Name</label>
              <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required style={{ marginBottom: '0' }} placeholder="e.g. Tata Transport Solutions" />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '5px' }}>Rating</label>
              <select className="form-control" value={rating} onChange={e => setRating(Number(e.target.value))} style={{ marginBottom: '0' }}>
                <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                <option value="4">⭐⭐⭐⭐ Good</option>
                <option value="3">⭐⭐⭐ Average</option>
                <option value="2">⭐⭐ Poor</option>
                <option value="1">⭐ Terrible</option>
              </select>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '5px' }}>Feedback</label>
              <textarea className="form-control" value={text} onChange={e => setText(e.target.value)} required style={{ marginBottom: '0', minHeight: '100px' }} placeholder="How was the repair quality?"></textarea>
            </div>
            <button type="submit" className="btn btn-solid" style={{ width: '100%' }}>Post Live Review</button>
          </form>
        </div>
      </div>
    </section>
  );
}
