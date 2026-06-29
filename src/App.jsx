import React from 'react';
import { Search, ArrowUpRight } from 'lucide-react';

export default function App() {
  const catalog = [
    { id: "SOL-MONO", name: "Monocrystalline PV Modules", spec: "540W – 670W+ Tier-1" },
    { id: "WND-GRID", name: "Grid-Tie Inverter", spec: "High-Efficiency Central" },
    { id: "AI-TEL", name: "Telemetry Unit", spec: "IoT Smart Monitoring" }
  ];

  return (
    <div style={{ backgroundColor: '#070709', color: '#e2e8f0', minHeight: '100vh', fontFamily: 'Inter, sans-serif', padding: '0 40px' }}>
      {/* Navbar */}
      <nav style={{ padding: '20px 0', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src="/Logo.png" alt="Mishra Capital Infra" style={{ height: '50px' }} />
        <button style={{ backgroundColor: '#fbbf24', color: '#000', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>INQUIRE NOW</button>
      </nav>

      {/* Hero */}
      <header style={{ padding: '80px 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '56px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.1' }}>YOUR AGILE SOURCING GATEWAY<br/>FOR INFRASTRUCTURE</h1>
        <p style={{ color: '#94a3b8', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>Lucknow-based, UDYAM MSME sourcing high-spec hardware engineering components.</p>
      </header>

      {/* Matrix */}
      <section style={{ paddingBottom: '80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '24px' }}>INDEXED SOURCING MATRIX</h2>
          <div style={{ border: '1px solid #333', padding: '8px 15px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Search size={18} color="#666" />
            <input type="text" placeholder="Search components..." style={{ background: 'transparent', border: 'none', color: '#fff' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {catalog.map((item) => (
            <div key={item.id} style={{ backgroundColor: '#111114', padding: '25px', border: '1px solid #333', borderRadius: '8px' }}>
              <span style={{ fontSize: '10px', color: '#fbbf24', fontWeight: 'bold' }}>{item.id}</span>
              <h3 style={{ margin: '10px 0', fontSize: '18px' }}>{item.name}</h3>
              <p style={{ fontSize: '12px', color: '#94a3b8' }}>{item.spec}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
