import { useState } from 'react';
import BreadcrumbHeader from '../components/BreadcrumbHeader';

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    try {
        await fetch("https://formsubmit.co/ajax/mistrykiran536@gmail.com", {
            method: "POST",
            body: formData
        });
    } catch(error) {
        console.error("Submission failed", error);
    }

    setIsSubmitted(true);
    setTimeout(() => {
        setIsSubmitted(false);
        e.target.reset();
    }, 7000);
  };

  return (
    <div className="page-container">
      <BreadcrumbHeader title="Contact Us" subtitle="Initiate Protocol & Deploy Your Fleet" image="/truck_painting.png" />
      
      <div className="inner-content reveal delay-2">
        {/* Contact Info Cards */}
        <div style={{display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '80px'}}>
            <div style={{flex: 1, minWidth: '250px', background: 'var(--bg-panel)', padding: '40px 10px', borderRadius: '4px', borderTop: '3px solid var(--primary-color)', textAlign: 'center'}}>
                <div style={{marginBottom: '15px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <h3 style={{color: '#fff', marginBottom: '10px'}}>Email Support</h3>
                <p style={{color: 'var(--secondary-color)', fontSize: '0.9rem'}}>
                   <a href="mailto:mistrykiran536@gmail.com" style={{color: 'var(--secondary-color)', textDecoration: 'none'}}>mistrykiran536@gmail.com</a>
                </p>
            </div>
            <div style={{flex: 1, minWidth: '250px', background: 'var(--bg-panel)', padding: '40px 10px', borderRadius: '4px', borderTop: '3px solid var(--primary-color)', textAlign: 'center'}}>
                <div style={{marginBottom: '15px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </div>
                <h3 style={{color: '#fff', marginBottom: '10px'}}>Call On</h3>
                <p style={{marginBottom: '5px'}}><a href="tel:+919428489399" style={{color: 'var(--primary-color)', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none'}}>+91 9428489399</a></p>
                <p style={{marginBottom: '5px'}}><a href="tel:+918320652128" style={{color: 'var(--primary-color)', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none'}}>+91 8320652128</a></p>
                <p style={{color: 'var(--secondary-color)', marginTop: '10px'}}>Available 24/7 for Emergencies</p>
            </div>
            <div style={{flex: 1, minWidth: '250px', background: 'var(--bg-panel)', padding: '40px 10px', borderRadius: '4px', borderTop: '3px solid var(--primary-color)', textAlign: 'center'}}>
                <div style={{marginBottom: '15px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <h3 style={{color: '#fff', marginBottom: '10px'}}>Location</h3>
                <p style={{color: 'var(--secondary-color)'}}>Shree Laxmi body Reparing<br/>Beside Jio Pump, Boriavi<br/>Anand 387310</p>
            </div>
        </div>

        {/* Contact Form */}
        <div style={{maxWidth: '800px', margin: '0 auto', padding: '50px', background: 'rgba(5,5,5,0.9)', border: '1px solid rgba(255,107,0,0.3)', marginBottom: '80px'}}>
          <h2 style={{textAlign: 'center', marginBottom: '40px'}}>Send A Message</h2>
          {isSubmitted ? (
              <div style={{textAlign: 'center', padding: '30px', background: 'rgba(74, 222, 128, 0.1)', border: '1px solid rgba(74, 222, 128, 0.5)', borderRadius: '4px'}}>
                  <h3 style={{color: '#4ade80', marginBottom: '10px', fontSize: '2rem'}}>Request Dispatch Successful!</h3>
                  <p style={{color: '#fff', fontSize: '1.2rem'}}>Your message has been directly submitted. We will contact you at your provided email/phone shortly.</p>
              </div>
          ) : (
          <form onSubmit={handleSubmit}>
            <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
               <div style={{flex: 1, minWidth: '250px', marginBottom: '25px'}}>
                  <label style={{display: 'block', fontSize:'1.2rem', color:'var(--secondary-color)', marginBottom:'10px'}}>Full Name / Company</label>
                  <input type="text" name="name" className="form-control" style={{marginBottom: 0}} required placeholder="Enter name..." />
               </div>
               <div style={{flex: 1, minWidth: '250px', marginBottom: '25px'}}>
                  <label style={{display: 'block', fontSize:'1.2rem', color:'var(--secondary-color)', marginBottom:'10px'}}>Phone Number</label>
                  <input type="tel" name="phone" className="form-control" style={{marginBottom: 0}} required placeholder="(xxx) xxx-xxxx" />
               </div>
            </div>
            
            <div style={{marginBottom: '25px'}}>
                <label style={{display: 'block', fontSize:'1.2rem', color:'var(--secondary-color)', marginBottom:'10px'}}>Email Address</label>
                <input type="email" name="email" className="form-control" style={{marginBottom: 0}} required placeholder="contact@company.com" />
            </div>
            
            <div style={{marginBottom: '30px'}}>
                <label style={{display: 'block', fontSize:'1.2rem', color:'var(--secondary-color)', marginBottom:'10px'}}>Message / Requirements</label>
                <textarea name="message" className="form-control" style={{minHeight: '150px', marginBottom: 0}} required placeholder="How can we help your fleet?"></textarea>
            </div>
            
            <button type="submit" className="btn btn-solid" style={{width: '100%', padding: '20px', fontSize: '1.5rem'}}>Submit Request</button>
          </form>
          )}
        </div>

        {/* Map Section */}
        <div>
            <h2 style={{textAlign: 'center', marginBottom: '40px'}}>Locate Facility</h2>
            <div style={{width: '100%', height: '400px', background: '#222', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)'}}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    loading="lazy" 
                    allowFullScreen 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14732.10941501123!2d72.9136205871582!3d22.6154537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4f9409cb2a89%3A0x61e31ebefcc8540d!2sShree%20Laxmi%20Body%20Repair!5e0!3m2!1sen!2sin!4v1775646362139!5m2!1sen!2sin">
                </iframe>
            </div>
        </div>
      </div>
    </div>
  );
}
