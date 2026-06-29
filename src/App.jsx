import React from 'react';

export default function App() {
  return (
    <div style={{ backgroundColor: '#070709', color: '#e2e8f0', minHeight: '100vh', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      {/* Navbar */}
      <nav style={{ padding: '20px 40px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src="/Logo.png" alt="Mishra Capital Infra" style={{ height: '50px' }} />
        <button style={{ backgroundColor: '#fbbf24', color: '#000', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>INQUIRE NOW</button>
      </nav>

      {/* Hero */}
      <header style={{ padding: '80px 40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '20px' }}>YOUR AGILE SOURCING GATEWAY</h1>
        <p style={{ color: '#94a3b8', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>Lucknow-based, UDYAM MSME enterprise.</p>
      </header>

      {/* Matrix Section */}
      <section style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>INDEXED SOURCING MATRIX</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {['Solar Modules', 'Grid Inverters', 'Telemetry'].map((item, i) => (
            <div key={i} style={{ backgroundColor: '#111114', padding: '20px', border: '1px solid #333', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>{item}</h3>
              <p style={{ fontSize: '12px', color: '#666' }}>Specifications: Tier-1 Standard</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
