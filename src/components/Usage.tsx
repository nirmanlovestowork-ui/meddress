export default function Usage() {
  const recommendations = [
    { icon: '🦶', name: 'Diabetic Ulcer' },
    { icon: '💺', name: 'Pressure Sores' },
    { icon: '🔥', name: 'Superficial and Partial Thickness Burns' },
    { icon: '🦵', name: 'Venous Ulcers' },
    { icon: '💉', name: 'Donor Site' },
    { icon: '🕳️', name: 'Cavity Wounds' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Recommended For */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Recommended for</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {recommendations.map((rec, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 bg-white border border-slate-100 rounded-2xl shadow-sm w-40 h-44 hover:border-cyan-200 transition-colors hover:shadow-md">
                 <div className="w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center text-3xl mb-4 text-[#14aebc]">
                   {rec.icon}
                 </div>
                 <span className="text-sm font-medium text-slate-700 text-center leading-tight">
                   {rec.name}
                 </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
