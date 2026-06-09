import { Download } from 'lucide-react';

export default function AboutMeddress() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight mb-4">About Meddress</h2>
          <div className="w-20 h-1.5 bg-[#14aebc] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 mb-8">Global standards. Direct manufacturing. Uncompromising clinical quality.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#14aebc] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0f8a96] transition-colors shadow-md shadow-cyan-200 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Product List
            </button>
            <button className="bg-white text-[#14aebc] px-8 py-3 rounded-full font-semibold border-2 border-cyan-100 hover:bg-cyan-50 transition-colors shadow-sm flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Brochure
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* History */}
          <div className="lg:col-span-12 bg-white rounded-[2rem] p-8 md:p-12 shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 relative overflow-hidden flex flex-col justify-center group">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight text-center mb-6 md:mb-8">Our History</h3>
            <p className="text-slate-600 leading-relaxed text-lg lg:text-xl font-light">
              Established on <strong className="text-[#14aebc] font-medium">23 August 2023</strong>, and founded and managed by seasoned business professionals with over <strong className="text-[#14aebc] font-medium">25 years of global industry experience</strong> including strategic collaborations with TOP Corporation (Japan), Leventon (Spain), and Swaoromed (Austria). Meddress was established to meet the escalating demand for high-quality, safe, and cost-effective surgical disposables, with a core focus on elevating patient care standards and making premium healthcare accessible to all.
            </p>
          </div>

          {/* Mission */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 relative overflow-hidden flex flex-col justify-center group">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight text-center mb-6">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-lg font-light">
              To manufacture and supply high-quality, economical, and easily accessible surgical disposable products to hospitals and healthcare providers. We are committed to continuously improving our core product lines while actively researching innovative new solutions to meet evolving clinical needs and dynamic market demands.
            </p>
          </div>

          {/* Vision */}
          <div className="lg:col-span-5 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 relative overflow-hidden flex flex-col justify-center group">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight text-center mb-6">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-xl md:text-2xl font-light italic tracking-tight">
              "To be the first and best choice in the healthcare industry."
            </p>
          </div>

          {/* Manufacturing & Technology */}
          <div className="lg:col-span-6 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 relative overflow-hidden flex flex-col justify-center group">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight text-center mb-6">Manufacturing & Technology</h3>
            <div className="space-y-4">
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                Our products are manufactured using highly advanced machinery within strictly monitored sterile environments. By leveraging the latest frontline technology, we eliminate the risk of contamination and ensure product integrity from production through transportation.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                Our modern manufacturing facility strictly conforms to Good Manufacturing Practices (GMP), a benchmark standard set by the World Health Organization (WHO).
              </p>
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="lg:col-span-6 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 relative overflow-hidden flex flex-col justify-center group">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight text-center mb-6">Quality Assurance</h3>
            <p className="text-slate-600 leading-relaxed text-lg font-light flex-grow">
              Our absolute mandate is the production of zero-defect medical supplies. To achieve this, we have meticulously integrated a rigorous series of automated and manual quality control protocols into every single stage of our supply chain, from raw material procurement to final manufacturing and packaging. All Meddress Quality Control systems proudly conform to the international ISO 13485:2016 standard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}