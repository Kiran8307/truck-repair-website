export default function ContactUs() {
  const submitEstimate = (e) => {
    e.preventDefault();
    alert("Request Sent! Our team will contact you shortly.");
  };

  return (
    <div className="page-container">
      <div className="inner-header">
        <h1 className="reveal">Contact Us</h1>
        <p className="reveal delay-1" style={{fontSize: '1.5rem', marginTop: '20px', color: 'var(--primary-color)'}}>Initiate Protocol & Deploy Your Fleet</p>
      </div>
      
      <div className="inner-content reveal delay-2">
        {/* Contact Info Cards */}
        <div style={{display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '80px'}}>
            <div style={{flex: 1, minWidth: '250px', background: 'var(--bg-panel)', padding: '40px 10px', borderRadius: '4px', borderTop: '3px solid var(--primary-color)', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '15px'}}>📧</div>
                <h3 style={{color: '#fff', marginBottom: '10px'}}>Email Support</h3>
                <p style={{color: 'var(--secondary-color)', fontSize: '0.9rem'}}>
                   <a href="mailto:dispatch@shreelaxmigarage.com" style={{color: 'var(--secondary-color)', textDecoration: 'none'}}>dispatch@shreelaxmigarage.com</a><br/>
                   <a href="mailto:billing@shreelaxmigarage.com" style={{color: 'var(--secondary-color)', textDecoration: 'none'}}>billing@shreelaxmigarage.com</a>
                </p>
            </div>
            <div style={{flex: 1, minWidth: '250px', background: 'var(--bg-panel)', padding: '40px 10px', borderRadius: '4px', borderTop: '3px solid var(--primary-color)', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '15px'}}>📞</div>
                <h3 style={{color: '#fff', marginBottom: '10px'}}>Direct Dispatch</h3>
                <p style={{marginBottom: '5px'}}><a href="tel:+18004272439" style={{color: 'var(--primary-color)', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none'}}>+1 (800) GARAGE-X</a></p>
                <p style={{color: 'var(--secondary-color)'}}>Available 24/7 for Emergencies</p>
            </div>
            <div style={{flex: 1, minWidth: '250px', background: 'var(--bg-panel)', padding: '40px 10px', borderRadius: '4px', borderTop: '3px solid var(--primary-color)', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '15px'}}>📍</div>
                <h3 style={{color: '#fff', marginBottom: '10px'}}>Headquarters</h3>
                <p style={{color: 'var(--secondary-color)'}}>Shree Laxmi Body Repair<br/>Main Highway, Gujarat</p>
            </div>
        </div>

        {/* Contact Form */}
        <div style={{maxWidth: '800px', margin: '0 auto', padding: '50px', background: 'rgba(5,5,5,0.9)', border: '1px solid rgba(230,0,0,0.3)', marginBottom: '80px'}}>
          <h2 style={{textAlign: 'center', marginBottom: '40px'}}>Send A Message</h2>
          <form onSubmit={submitEstimate}>
            <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
               <div style={{flex: 1, minWidth: '250px', marginBottom: '25px'}}>
                  <label style={{display: 'block', fontSize:'1.2rem', color:'var(--secondary-color)', marginBottom:'10px'}}>Full Name / Company</label>
                  <input type="text" className="form-control" style={{marginBottom: 0}} required placeholder="Enter name..." />
               </div>
               <div style={{flex: 1, minWidth: '250px', marginBottom: '25px'}}>
                  <label style={{display: 'block', fontSize:'1.2rem', color:'var(--secondary-color)', marginBottom:'10px'}}>Phone Number</label>
                  <input type="tel" className="form-control" style={{marginBottom: 0}} required placeholder="(xxx) xxx-xxxx" />
               </div>
            </div>
            
            <div style={{marginBottom: '25px'}}>
                <label style={{display: 'block', fontSize:'1.2rem', color:'var(--secondary-color)', marginBottom:'10px'}}>Email Address</label>
                <input type="email" className="form-control" style={{marginBottom: 0}} required placeholder="contact@company.com" />
            </div>
            
            <div style={{marginBottom: '30px'}}>
                <label style={{display: 'block', fontSize:'1.2rem', color:'var(--secondary-color)', marginBottom:'10px'}}>Message / Requirements</label>
                <textarea className="form-control" style={{minHeight: '150px', marginBottom: 0}} required placeholder="How can we help your fleet?"></textarea>
            </div>
            
            <button type="submit" className="btn btn-solid" style={{width: '100%', padding: '20px', fontSize: '1.5rem'}}>Submit Request</button>
          </form>
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
