import { useParams, Link } from 'react-router-dom';
import CTA from '../components/CTA';

const serviceData = {
  'color-work': {
    title: 'Color Work & Painting',
    icon: '🎨',
    image: '/truck_painting.png',
    desc: 'Full fleet repainting, computerized color matching, and rust-proofing treatments designed for extreme weather resistance.',
    details: 'Our massive commercial paint booths can handle 18-wheelers effortlessly. We use aerospace-grade clear coats to ensure your fleet looks premium while resisting industrial wear.',
    features: ['Computerized Hex Matching', 'Multi-Layer Carbon Coasting', 'Sterilized Vacuum Booths']
  },
  'accident-work': {
    title: 'Accident Reconstruction',
    icon: '💥',
    image: '/truck_crash.png',
    desc: 'Heavy collision rebuilding. We reconstruct chassis, fix bent commercial frames, and replace destroyed body panels.',
    details: 'Using advanced 3D laser frame measuring, we ensure a truck that has suffered massive trauma can drive perfectly straight down the highway again. We rebuild structural integrity to factory specifications.',
    features: ['3D Laser Telemetry', 'Heavy Winch Frame Pulling', 'Chassis Alignment Validation']
  },
  'insurance-claims': {
    title: 'Insurance Cashless Claims',
    icon: '📋',
    image: '/truck_crash.png',
    desc: 'Complete claim settlement and documentation support strictly aligned with Indian motor insurance regulations and RTO guidelines.',
    details: 'We seamlessly process cashless claims and handle surveyor approvals across major Indian insurance companies (New India, Tata AIG, ICICI Lombard, etc.). Our dedicated claim settlement cell ensures zero-hassle documentation and maximum claim passing.',
    features: ['Cashless Claim Processing', 'Insurance Surveyor Coordination', 'RTO-Compliant Documentation']
  },
  'contract-work': {
    title: 'Fleet Contract Work',
    icon: '🤝',
    image: '/truck_painting.png',
    desc: 'Ongoing fleet maintenance contracts for logistics companies to keep your trucks on the road instead of in the shop.',
    details: 'Logistics requires reliability. With our contract work, your fleet gets priority lane placement, routine integrity checks, and scheduled downtime body-repairs to prevent catastrophic mid-route failures.',
    features: ['Priority Service Queues', 'Preventative Rust Maintenance', 'Monthly Fleet Audits']
  },
  'gas-welding': {
    title: 'Precision Gas Welding',
    icon: '🔥',
    image: '/truck_welding.png',
    desc: 'Precision oxy-fuel welding for cast iron components, advanced cutting, and specialized heavy metal joining.',
    details: 'For delicate but heavy engine blocks or specific commercial metal alloys, our oxy-acetylene torches ensure precision melting without destroying the surrounding heat-treated metals.',
    features: ['Cast-Iron Block Repairs', 'Oxy-Acetylene Cutting', 'Heat-Treated Joint Fusion']
  },
  'electric-welding': {
    title: 'Electric ARC/MIG Welding',
    icon: '⚡',
    image: '/truck_welding.png',
    desc: 'High-penetration ARC and MIG welding for structural steel reinforcement and undercarriage armor rebuilding.',
    details: 'When repairing a broken frame, strength is non-negotiable. We use ultra-high amperage electric welding to fuse heavy structural steel back together cleanly, ensuring maximum load-bearing limits are restored.',
    features: ['High-Amperage Penetration', 'Structural Beam Fusion', 'MIG & TIG Industrial Outputs']
  },
  'making-containers': {
    title: 'Making Containers',
    icon: '📦',
    image: '/truck_welding.png',
    desc: 'Advanced custom fabrication of heavy-duty shipping containers and specialized closed logistic bodies.',
    details: 'We engineer robust metal containers from scratch explicitly designed to withstand extreme Indian road conditions. We utilize heavy-gauge corrugated steel and high-tensile framing to guarantee your cargo remains strictly protected against impact and weather.',
    features: ['Heavy-Gauge Corrugated Walls', 'Waterproof Cargo Sealing', 'Custom Cargo Dimensions']
  },
  'loading-platforms': {
    title: 'Loading Platforms',
    icon: '🏗️',
    image: '/truck_welding.png',
    desc: 'Manufacturing and reinforcing high-capacity open structural platforms and flatbeds for heavy haulage.',
    details: 'Our custom-built platforms are heavily armored to bear insane vertical loads. Whether you transport raw heavy machinery, steel coils, or agricultural yields, we build reinforced truck decks that refuse to buckle under pressure.',
    features: ['Reinforced Bed Plating', 'Custom Heavy-Duty Tie-Downs', 'Anti-Buckle Crossmembers']
  }
};

export default function ServicePage() {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) {
    return <div className="page-container" style={{textAlign: 'center', padding: '150px 20px'}}><h2>Service Not Found</h2><Link to="/" className="btn">Return Home</Link></div>;
  }

  return (
    <div className="page-container">
      <div className="inner-header">
        <div style={{fontSize: '5rem', marginBottom: '20px', filter: 'drop-shadow(0 0 10px rgba(230,0,0,0.5))'}} className="reveal">{service.icon}</div>
        <h1 className="reveal delay-1">{service.title}</h1>
      </div>
      
      <div className="inner-content reveal delay-2">
        <div style={{display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start'}}>
            <div style={{flex: 2, minWidth: '350px'}}>
                <div style={{background: 'var(--bg-panel)', padding: '50px', borderRadius: '4px', borderTop: '3px solid var(--primary-color)'}}>
                    <h3 style={{color: 'var(--primary-color)', marginBottom: '30px'}}>Service Overview</h3>
                    <p style={{fontSize: '1.4rem', color: '#fff', marginBottom: '30px'}}>{service.desc}</p>
                    <h3 style={{color: 'var(--primary-color)', marginBottom: '30px', marginTop: '50px'}}>Technical Details</h3>
                    <p style={{fontSize: '1.2rem', lineHeight: '2'}}>{service.details}</p>
                    
                    <h4 style={{color: '#fff', fontSize: '1.3rem', marginTop: '40px', marginBottom: '20px', borderBottom: '1px solid rgba(230,0,0,0.2)', paddingBottom: '10px'}}>Core Execution Features</h4>
                    <ul style={{listStyle: 'none', padding: 0}}>
                        {service.features.map((feat, index) => (
                            <li key={index} style={{color: 'var(--secondary-color)', fontSize: '1.1rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                                <span style={{color: 'var(--primary-color)'}}>⮞</span> {feat}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div style={{flex: 1, minWidth: '300px'}}>
                 <div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden'}}>
                    <img src={service.image} alt={service.title} style={{width: '100%', height: '350px', objectFit: 'cover', filter: 'brightness(0.7) contrast(1.2)'}} />
                 </div>
                 <div style={{marginTop: '40px', background: 'linear-gradient(to top, rgba(230,0,0,0.1), transparent)', padding: '40px', border: '1px solid var(--border-color)', textAlign: 'center', borderRadius: '4px'}}>
                     <h4 style={{color: '#fff', fontSize: '1.5rem', marginBottom: '15px'}}>Emergency Response</h4>
                     <p style={{color: 'var(--secondary-color)', marginBottom: '30px'}}>Need priority access to this protocol?</p>
                     <Link to="/contact" className="btn btn-solid" style={{width: '100%', padding: '15px'}}>Request Deployment</Link>
                 </div>
            </div>
        </div>
      </div>
      <CTA />
    </div>
  );
}
