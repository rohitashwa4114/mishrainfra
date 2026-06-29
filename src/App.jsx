import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070709] text-slate-200 p-6 md:p-12">
      <nav className="flex justify-between items-center pb-8 border-b border-slate-800">
        <img src="/Logo.png" alt="Logo" className="h-12" />
        <button className="bg-amber-400 text-black px-6 py-2 font-bold rounded hover:bg-amber-500 transition">
          INQUIRE NOW
        </button>
      </nav>

      <header className="py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-6">YOUR AGILE SOURCING GATEWAY</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Lucknow-based, UDYAM MSME sourcing high-spec hardware engineering components.</p>
      </header>

      <section>
        <h2 className="text-xl mb-6">INDEXED SOURCING MATRIX</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-[#111114] p-6 border border-slate-800 rounded-lg hover:border-amber-500 transition-all cursor-pointer">
              <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest">SOL-MONO</span>
              <h3 className="text-lg font-semibold my-2">Monocrystalline PV Module</h3>
              <p className="text-slate-500 text-sm">Specifications: Tier-1 Standard</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
