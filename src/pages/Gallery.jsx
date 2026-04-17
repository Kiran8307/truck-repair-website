import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BreadcrumbHeader from '../components/BreadcrumbHeader';

export default function Gallery() {
  const fileInputRef = useRef(null);
  const [userImages, setUserImages] = useState(() => {
    const saved = localStorage.getItem('garage_gallery');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });
  
  const [pendingUpload, setPendingUpload] = useState(null);
  const [caption, setCaption] = useState('');

  useEffect(() => {
    localStorage.setItem('garage_gallery', JSON.stringify(userImages));
  }, [userImages]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPendingUpload(reader.result);
        setCaption('');
      };
      reader.readAsDataURL(file);
    }
    // clear input
    e.target.value = null;
  };

  const confirmUpload = () => {
    if (pendingUpload) {
      setUserImages([{ src: pendingUpload, title: caption || 'Fleet Photo', id: Date.now() }, ...userImages]);
      setPendingUpload(null);
      setCaption('');
    }
  };

  const deleteImage = (idToRemove) => {
    setUserImages(userImages.filter(img => img.id !== idToRemove));
  };

  return (
    <div className="page-container">
      <BreadcrumbHeader title="The Showcase" subtitle="Behind The Scenes of Mechanical Perfection" image="/truck_welding.png" />
      
      <div className="inner-content reveal delay-2">
        <p style={{textAlign: 'center', marginBottom: '40px', maxWidth: '800px', margin: '0 auto'}}>
            Take a look inside the highly sterile, advanced environment of Shree Laxmi Garage. We operate industry-leading painting booths and strictly managed structural welding zones to ensure your fleet gets priority care.
        </p>

        {/* Upload Button */}
        <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef} 
                style={{display: 'none'}} 
                onChange={handleFileUpload} 
            />
            {!pendingUpload ? (
              <>
                <button 
                  className="btn btn-solid" 
                  onClick={() => fileInputRef.current.click()}
                  style={{padding: '10px 30px', fontSize: '1.2rem', gap: '10px', display: 'inline-flex', alignItems: 'center'}}
                >
                  <span>📸</span> Upload Your Fleet Photo
                </button>
                <p style={{marginTop: '10px', color: 'var(--text-secondary)', fontSize: '0.9rem'}}>Add a photo of your repaired truck to our wall of fame!</p>
              </>
            ) : (
              <div style={{background: 'var(--bg-panel)', padding: '20px', borderRadius: '8px', border: '1px solid var(--primary-color)', maxWidth: '400px', margin: '0 auto'}}>
                 <img src={pendingUpload} alt="Preview" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '15px'}} />
                 <input 
                   type="text" 
                   className="form-control" 
                   placeholder="Enter a short caption..." 
                   value={caption} 
                   onChange={(e) => setCaption(e.target.value)}
                   style={{marginBottom: '15px'}}
                 />
                 <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
                    <button className="btn btn-solid" style={{padding: '10px 20px', fontSize: '1rem'}} onClick={confirmUpload}>Confirm Upload</button>
                    <button className="btn" style={{padding: '10px 20px', fontSize: '1rem'}} onClick={() => setPendingUpload(null)}>Cancel</button>
                 </div>
              </div>
            )}
        </div>

        <div className="gallery-grid">
            {/* User Uploaded Images */}
            {userImages.map((img) => (
               <div key={img.id} className="gallery-item reveal">
                   <img src={img.src} alt={img.title} />
                   <div className="gallery-caption" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                       <h4>{img.title}</h4>
                       <button 
                          onClick={() => deleteImage(img.id)}
                          style={{background: 'rgba(255,0,0,0.8)', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', zIndex: 10}}
                       >
                         Delete
                       </button>
                   </div>
               </div>
            ))}

            <div className="gallery-item reveal">
                <img src="/truck_painting.png" alt="High End Painting Booth" />
                <div className="gallery-caption">
                    <h4>Aerospace Grade Coating</h4>
                </div>
            </div>
            
            <div className="gallery-item reveal delay-1">
                <img src="/truck_welding.png" alt="Electric Welding for Body of truck" />
                <div className="gallery-caption">
                    <h4>Electric Welding</h4>
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
            <Link to="/contact" className="btn btn-solid">Deploy Your Fleet Today</Link>
        </div>
      </div>
    </div>
  );
}
