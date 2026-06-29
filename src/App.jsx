import React from 'react';
import { Search, ArrowUpRight, MapPin, Mail } from 'lucide-react';

export default function App() {
  return (
    <div style={{ backgroundColor: '#070709', color: '#e2e8f0', minHeight: '100vh', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      {/* Navbar with your Logo */}
      <nav style={{ padding: '20px 40px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src="/Logo.png" alt="Mishra Capital Infra" style={{ height: '50px' }} />
        </div>
        <button style={{ backgroundColor: '#fbbf24', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>INQUIRE NOW</button>
      </nav>

      {/* Hero */}
      <header style={{ padding: '80px 40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '64px', fontWeight: '900', marginBottom: '20px' }}>YOUR AGILE SOURCING GATEWAY</h1>
        <p style={{ color: '#94a3b8', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>Lucknow-based, UDYAM MSME sourcing high-spec hardware engineering components.</p>
      </header>

      {/* Sourcing Matrix */}
      <section style={{ padding: '40px' }}>
        <h2 style={{ marginBottom: '30px' }}>INDEXED SOURCING MATRIX</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ backgroundColor: '#111114', padding: '20px', border: '1px solid #333' }}>
              <h3>Component {i}</h3>
              <p style={{ fontSize: '12px', color: '#666' }}>Specifications: 25%</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
