import { useState, useEffect } from 'react';
import { Droplet, Shield, PlusCircle, Smile, RefreshCw, Activity } from 'lucide-react';

import Roller_Bandage from '../images/product_images/Roller_Bandage.jpeg';
import Gauze_Than from '../images/product_images/Gauze_Than.jpeg';
import Gauze_Swab from '../images/product_images/Gauze_Swab.jpeg';
import Gamjee_Roll from '../images/product_images/Gamjee_Roll.jpeg';
import Combined_Dressing from '../images/product_images/Combined_Dressing.jpeg';
import Absorbent_Cotton from '../images/product_images/Absorbent_Cotton.jpeg';
import ZigZag_Cotton from '../images/product_images/ZigZag_Cotton.jpeg';
import Non_Absorbent_Cotton from '../images/product_images/Non_Absorbent_Cotton.jpeg';
import Microporous_Tape from '../images/product_images/Microporous_Tape.jpeg';
import POP_Bandage from '../images/product_images/POP_Bandage.jpeg';
import IV_Cannula_Fixator from '../images/product_images/IV_Cannula_Fixator.jpeg';
import Cast_Pad from '../images/product_images/Cast_Pad.jpeg';
import K99EL_Masks from '../images/product_images/K99EL_Masks.jpeg';
import Surgical_Masks from '../images/product_images/Surgical_Masks.jpeg';
import Surgical_Caps from '../images/product_images/Surgical_Caps.jpeg';
import MOP from '../images/product_images/MOP.jpeg';

const productImages: Record<string, string> = {
  'Roller Bandage': Roller_Bandage,
  'Gauze Than': Gauze_Than,
  'Gauze Swab': Gauze_Swab,
  'Gamjee Roll': Gamjee_Roll,
  'Combined Dressing': Combined_Dressing,
  'Absorbent Cotton': Absorbent_Cotton,
  'Zigzag Cotton': ZigZag_Cotton,
  'Non - Absorbent Cotton': Non_Absorbent_Cotton,
  'Microporous Tape': Microporous_Tape,
  'POP Bandage': POP_Bandage,
  'I.V.Cannula Fixator': IV_Cannula_Fixator,
  'Cast Pad / Soft Roll Cotton': Cast_Pad,
  'K99EL Masks': K99EL_Masks,
  '2 / 3 Ply Masks': Surgical_Masks,
  'Bouffant Cap / Surgeon\'s Cap': Surgical_Caps,
  'MOP': MOP
};

export default function Features() {
  const products = [
    { name: 'Roller Bandage' },
    { name: 'Gauze Than' },
    { name: 'Gauze Swab' },
    { name: 'Gamjee Roll' },
    { name: 'Combined Dressing' },
    { name: 'Absorbent Cotton' },
    { name: 'Zigzag Cotton' },
    { name: 'Non - Absorbent Cotton' },
    { name: 'Microporous Tape' },
    { name: 'POP Bandage' },
    { name: 'I.V.Cannula Fixator' },
    { name: 'Cast Pad / Soft Roll Cotton' },
    { name: 'K99EL Masks' },
    { name: '2 / 3 Ply Masks' },
    { name: 'Bouffant Cap / Surgeon\'s Cap' },
    { name: 'MOP' }
  ];

  const features = [
    { title: 'Exudate Management', icon: Droplet, position: 'left', sup: '1,2,3' },
    { title: 'Provides Microbial protection', icon: Shield, position: 'right', sup: '1,2,5' },
    { title: 'Provides Autolytic Debridement', icon: PlusCircle, position: 'left', sup: '2,4' },
    { title: 'Improves patient comfort', icon: Smile, position: 'right', sup: '' },
    { title: 'Ease of application and removal', icon: RefreshCw, position: 'left', sup: '3,6' },
    { title: 'Hemostasis: Controls minor bleeding', icon: Activity, position: 'right', sup: '1,4,6' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const totalBaseItems = products.length;
  // Duplicate few times for infinite looping
  const extendedItems = [
    ...products,
    ...products,
    ...products,
  ];

  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);

  useEffect(() => {
    // When we've shown the second full set of items
    // (index reaches totalBaseItems * 2), jump back to totalBaseItems
    // to maintain the illusion of an infinite loop
    if (currentIndex >= totalBaseItems * 2) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - totalBaseItems);
        // Force reflow and restart transition
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 700); // Wait for transition to complete
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalBaseItems]);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-20 relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            The clinical standard for uncompromising safety
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
            Our strictly monitored Zero-Defect Cleanroom Process works meticulously to eliminate contamination risks, delivering clinical-grade sterility you can trust, in every single dressing.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-white border border-slate-200 rounded-full font-medium text-slate-700 shadow-sm">
            <strong className="text-[#14aebc] mr-2">ISO 13485:2016 Certified Production</strong> 
            Engineered for use in critical surgical and trauma environments.
          </div>
        </div>

        <div 
          className="relative w-full overflow-hidden pb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex w-full will-change-transform"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? 'transform 700ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            }}
          >
            {extendedItems.map((product, idx) => (
              <div key={idx} className="shrink-0 w-full px-4">
                <div className="relative max-w-5xl mx-auto bg-white rounded-[3rem] shadow-sm border border-slate-100 p-4 sm:p-6 md:p-12 mb-4 flex flex-col md:block">
                  {/* Central Image Placeholder */}
                  <div className="md:absolute md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-[80%] md:w-80 aspect-video mb-4 md:mb-0 bg-slate-50/50 backdrop-blur rounded-[1.5rem] border border-slate-100 shadow-lg z-10 flex flex-col items-center justify-center p-4 md:p-6 text-center overflow-hidden relative mx-auto shrink-0">
                    <span className="text-white drop-shadow-md font-bold text-base md:text-xl mb-1 md:mb-2 relative z-10">{product.name}</span>
                    <div className="absolute inset-0 bg-slate-900/10 z-0"></div>
                    <img src={productImages[product.name] || `https://placehold.co/1280x720/ffffff/00b2ce?text=${encodeURIComponent(product.name)}`} alt={product.name} className="object-cover absolute inset-0 w-full h-full mix-blend-multiply opacity-50" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-[26rem] gap-y-2 md:gap-y-12 relative z-20">
                    {features.map((feature, fIdx) => (
                      <div 
                        key={fIdx} 
                        className={`flex items-center space-x-3 md:space-x-4 bg-white p-3 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 relative group ${
                          feature.position === 'left' ? 'justify-start md:justify-end md:text-right' : 'justify-start md:text-left'
                        }`}
                      >
                        {/* On mobile, icons always on left */}
                        <div className={`flex-shrink-0 w-8 md:w-12 h-8 md:h-12 flex items-center justify-center bg-[#eefafb] rounded-full text-[#14aebc] group-hover:bg-[#14aebc] group-hover:text-white transition-colors ${feature.position === 'left' ? 'md:hidden' : 'block'}`}>
                          <feature.icon className="w-4 md:w-5 h-4 md:h-5" strokeWidth={2.5} />
                        </div>
                        
                        <div className="flex-1 md:flex-none">
                          <h4 className="font-bold text-slate-700 tracking-tight leading-tight text-[12px] md:text-[15px]">
                            {feature.title} <sup className="text-[9px] md:text-[10px] text-slate-400 font-semibold ml-0.5">{feature.sup}</sup>
                          </h4>
                        </div>

                        {/* On md+, position matters for icon */}
                        {feature.position === 'left' && (
                          <div className="hidden md:flex flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#eefafb] rounded-full text-[#14aebc] group-hover:bg-[#14aebc] group-hover:text-white transition-colors">
                            <feature.icon className="w-5 h-5" strokeWidth={2.5} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Connective Lines (Decorative) */}
                  <div className="hidden md:block absolute top-[15%] bottom-[15%] left-1/2 w-px bg-slate-100 -translate-x-1/2 z-0" />
                  {/* Horizontal connectives */}
                  <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-px bg-slate-100 -translate-y-1/2 z-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
