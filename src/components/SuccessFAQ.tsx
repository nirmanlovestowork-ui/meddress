import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function SuccessFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const faqs = [
    { q: "1. Are your medical consumables manufactured in-house?", a: "Yes. Meddress is a direct manufacturer of hospital-grade medical consumables. Because we produce our supplies directly at our state-of-the-art facility in Odisha, we eliminate middlemen. This allows us to maintain strict quality control over every batch while offering unmatched direct wholesale pricing to our partners." },
    { q: "2. What quality certifications and standards do your products meet?", a: "Patient safety and product integrity are our top priorities. Meddress operates under strict quality management systems and is fully ISO certified. Furthermore, we hold an active MD-5 license, ensuring our manufacturing processes and final products consistently meet the highest regulatory and clinical-grade standards required by hospitals and healthcare professionals." },
    { q: "3. What is included in your core product range?", a: "We manufacture a comprehensive range of surgical dressings and wound care supplies. Our core high-volume products include sterile roller bandages, gauze than, gauze swabs, gamjee rolls, combined dressings, and absorbent surgical cotton. In addition to these essentials, we supply over 15 additional categories of specialized medical products to meet all your clinical needs." },
    { q: "4. Do you supply products to regions outside of Odisha?", a: "Absolutely. While our primary manufacturing and distribution hub is proudly based in Odisha, we have a robust logistics network capable of fulfilling bulk and wholesale orders for hospitals, clinics, and sub-distributors across neighboring states and regions. We ensure reliable, uninterrupted supply chains wherever your facility is located." },
    { q: "5. How can we request a custom quote or place a bulk wholesale order?", a: 'Getting a quote is fast and straightforward. You can use the "Contact Us" form directly on our website to share your specific requirements. Our dedicated enterprise sales team will review your needs and respond promptly with customized wholesale pricing, product details, and estimated fulfillment timelines.' },
  ];

  return (
    <div className="bg-slate-50 pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQs */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">FAQs</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const num = idx + 1;
              const isOpen = openFaq === num;
              return (
                <div key={num} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : num)}
                    className="w-full flex justify-between items-center p-5 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                  >
                    <span className={isOpen ? 'text-[#14aebc]' : ''}>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#14aebc] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-1 pb-5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
