export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50/50 to-cyan-50/50 pt-16 pb-32">
      {/* Abstract Background Element (Simplified) */}
      <div className="absolute top-0 right-0 -m-32 w-[600px] h-[600px] border-[40px] border-[#14aebc]/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 -m-32 w-[400px] h-[400px] border-[20px] border-[#14aebc]/5 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h3 className="text-lg text-slate-500 font-medium mb-4">
          Manufacturing that <span className="font-bold text-slate-800">elevates patient care</span>
        </h3>
        
        <div className="inline-block px-4 py-1.5 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold rounded-full mb-8 shadow-sm">
          CDSCO MD-5 Approved & ISO 13485 Certified
        </div>
        
        <div className="mb-6">
          <h1 className="text-5xl md:text-6xl font-black italic text-slate-800 tracking-tight">
            Med<span className="text-[#14aebc]">dress</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold italic text-slate-800 mt-2">
            Premium Surgical Dressings
          </h2>
        </div>
        
        {/* Product Image Placeholder */}
        <div className="relative mt-12 max-w-3xl mx-auto">
          <div className="aspect-[16/9] bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center p-8 relative overflow-hidden">
             {/* Butterfly decoration */}
             <div className="absolute top-4 right-10 text-[rgb(123,55,200)] opacity-80">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M11.96 14.94A4.32 4.32 0 0 1 12 15a4.34 4.34 0 0 1-4.34 4.34 4.34 4.34 0 0 1-4.34-4.34c0-2.2 1.63-4.04 3.75-4.32L4 8l1.58-.8 3.51 3.5a4.34 4.34 0 0 1 2.87-1.08c1.1 0 2.11.4 2.88 1.08l3.5-3.5L20 8l-3.07 2.68c2.12.28 3.75 2.12 3.75 4.32A4.34 4.34 0 0 1 16.34 19.34 4.34 4.34 0 0 1 12 15a4.32 4.32 0 0 1-.04-.06z"/></svg>
             </div>
             <img src="https://placehold.co/1280x720/ffffff/00b2ce?text=Meddress+Product+Box+%26+Dressing" alt="Meddress Product" className="object-cover w-full h-full mix-blend-multiply opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
