import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BreadcrumbHeader from '../components/BreadcrumbHeader';
import { db, storage } from '../firebase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, deleteDoc, doc as firestoreDoc } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL, deleteObject } from 'firebase/storage';

export default function Gallery() {
  const fileInputRef = useRef(null);
  const [userImages, setUserImages] = useState([]);
  const [pendingUpload, setPendingUpload] = useState(null);
  const [caption, setCaption] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // Generate or retrieve a persistent uploader ID for this browser
  const [uploaderId] = useState(() => {
    let id = localStorage.getItem('uploader_id');
    if (!id) {
      id = 'user_' + Math.random().toString(36).substring(2, 15) + Date.now();
      localStorage.setItem('uploader_id', id);
    }
    return id;
  });

  useEffect(() => {
    const q = query(collection(db, 'gallery'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const liveImages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUserImages(liveImages);
    });

    return () => unsubscribe();
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert("Please upload a valid image file (PNG, JPG, WEBP, etc.)");
        e.target.value = null;
        return;
      }
      if (file.size > 15 * 1024 * 1024) {
        alert("File size is too large. Please choose a photo under 15MB.");
        e.target.value = null;
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          // Dynamic compression for mobile photos
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 800; // Cap image width securely
          let width = img.width;
          let height = img.height;

          // Only scale down if the image is too large
          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          // Render as JPEG at 70% quality to strictly keep base64 size tiny
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
          
          setPendingUpload(compressedDataUrl);
          setCaption('');
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
    // clear input
    e.target.value = null;
  };

  const confirmUpload = async () => {
    if (pendingUpload && !isUploading) {
      setIsUploading(true);
      try {
        if (pendingUpload.length > 900000) {
           alert("Compression failed to make the image small enough for the database. Please try a different photo.");
           setIsUploading(false);
           return;
        }

        const uploadTask = addDoc(collection(db, 'gallery'), {
          src: pendingUpload,
          storagePath: null, 
          title: caption || 'Fleet Photo',
          uploaderId: uploaderId,
          createdAt: serverTimestamp()
        });

        // 15 second timeout to prevent indefinite hanging on mobile
        const timeoutTask = new Promise((_, reject) => 
           setTimeout(() => reject(new Error("Network connection timed out. Your browser might be blocking the database connection.")), 15000)
        );

        await Promise.race([uploadTask, timeoutTask]);
        
        setPendingUpload(null);
        setCaption('');
      } catch (error) {
        console.error("Error uploading image: ", error);
        alert(`Upload failed: ${error.message}`);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const deleteImage = async (imgId, storagePath) => {
    const confirm = window.confirm("Are you sure you want to delete this photo?");
    if (!confirm) return;
    
    try {
      if (storagePath) {
        // Delete from Storage
        const fileRef = ref(storage, storagePath);
        await deleteObject(fileRef);
      }
      // Delete from Firestore
      await deleteDoc(firestoreDoc(db, 'gallery', imgId));
    } catch (error) {
      console.error("Error deleting image: ", error);
    }
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
                accept="image/jpeg, image/png, image/webp, image/*" 
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
                    <button className="btn btn-solid" style={{padding: '10px 20px', fontSize: '1rem', opacity: isUploading ? 0.7 : 1}} onClick={confirmUpload} disabled={isUploading}>
                      {isUploading ? 'Uploading...' : 'Confirm Upload'}
                    </button>
                    <button className="btn" style={{padding: '10px 20px', fontSize: '1rem'}} onClick={() => setPendingUpload(null)} disabled={isUploading}>Cancel</button>
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
                       {img.uploaderId === uploaderId && (
                         <button 
                            onClick={() => deleteImage(img.id, img.storagePath)}
                            style={{background: 'rgba(255,0,0,0.8)', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', zIndex: 10}}
                         >
                           Delete
                         </button>
                       )}
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
