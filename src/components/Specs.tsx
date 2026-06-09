export default function Specs() {
  return (
    <section className="py-24 bg-[#eef7f6] w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-4xl md:text-5xl font-bold text-[#068589] text-center mb-16">
          Global Scale & Clinical Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-10 relative overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] min-h-[280px] flex flex-col justify-center">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#9de3db" strokeWidth="1" fill="none">
                      <rect x="65%" y="-10%" width="80" height="80" rx="12" />
                      <rect x="75%" y="20%" width="80" height="80" rx="12" />
                      <rect x="65%" y="50%" width="80" height="80" rx="12" />
                      <rect x="55%" y="20%" width="80" height="80" rx="12" />
                      <rect x="85%" y="50%" width="80" height="80" rx="12" />
                      <rect x="55%" y="80%" width="80" height="80" rx="12" />
                      
                      <path d="M 0 0 L 1000 0" strokeDasharray="4 8" stroke="#f0f0f0" />
                      <line x1="85%" y1="0" x2="85%" y2="100%" stroke="#e6f5f4" />
                      <line x1="65%" y1="0" x2="65%" y2="100%" stroke="#e6f5f4" />
                      <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#e6f5f4" />
                  </g>
              </svg>
            </div>
            
            <div className="relative z-10 -mt-8">
              <h3 className="text-[3.5rem] leading-none font-bold text-slate-800 mb-4 tracking-tight">25+</h3>
              <p className="text-lg text-slate-500 leading-relaxed max-w-[200px]">
                Years of global industry expertise and manufacturing excellence.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-10 relative overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] min-h-[280px] flex flex-col justify-center">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#9de3db" strokeWidth="1" fill="none">
                      <rect x="50%" y="10%" width="80" height="80" rx="12" />
                      <rect x="70%" y="30%" width="80" height="80" rx="12" />
                      <rect x="60%" y="60%" width="80" height="80" rx="12" />
                      <rect x="80%" y="80%" width="80" height="80" rx="12" />
                      
                      <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#e6f5f4" />
                      <line x1="0" y1="40%" x2="100%" y2="40%" stroke="#e6f5f4" />
                      <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#e6f5f4" />
                  </g>
              </svg>
            </div>
            
            <div className="relative z-10 -mt-8">
              <h3 className="text-[3.5rem] leading-none font-bold text-slate-800 mb-4 tracking-tight">100<span className="text-[2.5rem]">%</span></h3>
              <p className="text-lg text-slate-500 leading-relaxed max-w-[220px]">
                WHO-GMP compliant, zero-defect cleanroom manufacturing.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-10 relative overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] min-h-[280px] flex flex-col justify-center">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#9de3db" strokeWidth="1" fill="none">
                      <rect x="40%" y="-20%" width="80" height="80" rx="12" />
                      <rect x="60%" y="10%" width="80" height="80" rx="12" />
                      <rect x="50%" y="40%" width="80" height="80" rx="12" />
                      <rect x="70%" y="30%" width="80" height="80" rx="12" />
                      <rect x="80%" y="60%" width="80" height="80" rx="12" />
                      
                      <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#e6f5f4" />
                      <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#e6f5f4" />
                      <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#e6f5f4" />
                  </g>
              </svg>
            </div>
            
            <div className="relative z-10 -mt-8">
              <h3 className="text-[3.5rem] leading-none font-bold text-slate-800 mb-4 tracking-tight">500+</h3>
              <p className="text-lg text-slate-500 leading-relaxed max-w-[200px]">
                Hospitals, clinics, and B2B distributors supplied worldwide.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
