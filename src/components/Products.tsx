import { useState, useEffect, useRef } from 'react';
import { Download, ShoppingBag } from 'lucide-react';
import ProductSpecModal from './ProductSpecModal';

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

export default function Products() {
  const manufacturedProductsBase = [
    { name: 'Roller Bandage', type: 'Dressing', desc: 'Product description placeholder for additional details.' },
    { name: 'Gauze Than', type: 'Gauze', desc: 'Product description placeholder for additional details.' },
    { name: 'Gauze Swab', type: 'Gauze', desc: 'Product description placeholder for additional details.' },
    { name: 'Gamjee Roll', type: 'Dressing', desc: 'Product description placeholder for additional details.' },
    { name: 'Combined Dressing', type: 'Dressing', desc: 'Product description placeholder for additional details.' }
  ];

  const products = [
    { name: 'Roller Bandage', type: 'Dressing', desc: 'Product description placeholder for additional details.' },
    { name: 'Gauze Than', type: 'Gauze', desc: 'Product description placeholder for additional details.' },
    { name: 'Gauze Swab', type: 'Gauze', desc: 'Product description placeholder for additional details.' },
    { name: 'Gamjee Roll', type: 'Dressing', desc: 'Product description placeholder for additional details.' },
    { name: 'Combined Dressing', type: 'Dressing', desc: 'Product description placeholder for additional details.' },
    { name: 'Absorbent Cotton', type: 'Cotton', desc: 'Product description placeholder for additional details.' },
    { name: 'Zigzag Cotton', type: 'Cotton', desc: 'Product description placeholder for additional details.' },
    { name: 'Non - Absorbent Cotton', type: 'Cotton', desc: 'Product description placeholder for additional details.' },
    { name: 'Microporous Tape', type: 'Tape', desc: 'Product description placeholder for additional details.' },
    { name: 'POP Bandage', type: 'Bandage', desc: 'Product description placeholder for additional details.' },
    { name: 'I.V.Cannula Fixator', type: 'Fixator', desc: 'Product description placeholder for additional details.' },
    { name: 'Cast Pad / Soft Roll Cotton', type: 'Padding', desc: 'Product description placeholder for additional details.' },
    { name: 'K99EL Masks', type: 'PPE', desc: 'Product description placeholder for additional details.' },
    { name: '2 / 3 Ply Masks', type: 'PPE', desc: 'Product description placeholder for additional details.' },
    { name: 'Bouffant Cap / Surgeon\'s Cap', type: 'PPE', desc: 'Product description placeholder for additional details.' },
    { name: 'MOP', type: 'Consumable', desc: 'Product description placeholder for additional details.' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [shiftWidth, setShiftWidth] = useState(0);

  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{name: string, category: string} | null>(null);

  const totalBaseItems = manufacturedProductsBase.length;
  // Quadruple the array to have enough buffer for jumping seamlessly
  const extendedItems = [
    ...manufacturedProductsBase,
    ...manufacturedProductsBase,
    ...manufacturedProductsBase,
    ...manufacturedProductsBase
  ];

  useEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        setShiftWidth(cardRef.current.clientWidth + 24); // 24px is gap-6
      }
    };
    
    updateWidth();
    const timeout = setTimeout(updateWidth, 100);
    
    window.addEventListener('resize', updateWidth);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered]);

  useEffect(() => {
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
    <section id="products" className="py-24 bg-white relative">
      {/* Decorative background curve (approximate) */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 to-white -skew-y-2 origin-top-left" fill="none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Products Manufactured By Us */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">Products Manufactured By Us</h2>
            <p className="text-lg text-slate-600">
              Premium quality medical supplies crafted with precision and care in our own state-of-the-art facilities.
            </p>
          </div>

          <div 
            className="overflow-hidden py-4 -m-4 p-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="flex gap-6 w-max"
              style={{
                transform: `translateX(-${currentIndex * shiftWidth}px)`,
                transition: isTransitioning ? 'transform 700ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
              }}
            >
              {extendedItems.map((p, index) => (
                <div
                  key={`${index}`}
                  ref={index === 0 ? cardRef : null}
                  onClick={() => { setSelectedProduct({ name: p.name, category: p.type }); setIsSpecModalOpen(true); }}
                  className="shrink-0 w-[300px] sm:w-[320px] lg:w-[380px] bg-slate-50 rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col pt-6 cursor-pointer group"
                >
                  <div className="px-6 flex justify-start">
                      <span className="inline-block px-3 py-1 bg-[#1b2b3a] text-white text-xs font-semibold rounded-full group-hover:bg-[#14aebc] transition-colors">
                        {p.type}
                      </span>
                  </div>
                  <div className="p-6 pt-4 flex-grow flex items-center justify-center">
                    <div className="w-full rounded-xl overflow-hidden aspect-video relative shadow-sm border border-slate-100">
                       <img 
                         src={productImages[p.name] || `https://placehold.co/1280x720/ffffff/1b2b3a?text=${encodeURIComponent(p.name)}`} 
                         alt={p.name} 
                         className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                       />
                    </div>
                  </div>
                  <div className="bg-white p-6 border-t border-slate-100 mt-auto">
                    <h4 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-[#14aebc] transition-colors">{p.name}</h4>
                    <p className="text-sm text-slate-500">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">Our Product Range</h2>
          <p className="text-lg text-slate-600">
            Explore our comprehensive line of <strong className="text-slate-800">high-quality medical consumables and dressings,</strong> designed for maximum comfort, hygiene, and superior patient care.
          </p>
        </div>

        {/* Product Grid / Carousel approximation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-8">
          {products.map((p, i) => (
            <div 
              key={i} 
              onClick={() => { setSelectedProduct({ name: p.name, category: p.type }); setIsSpecModalOpen(true); }}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="p-6 pb-0 flex justify-start">
                  <span className="inline-block px-3 py-1 bg-cyan-100 text-[#0f8a96] text-xs font-semibold rounded-full">
                    {p.type}
                  </span>
              </div>
              <div className="p-6 pt-4 flex-grow flex items-center justify-center group">
                 <div className="w-full rounded-xl overflow-hidden aspect-video relative shadow-sm border border-slate-100">
                   <img 
                     src={productImages[p.name] || `https://placehold.co/1280x720/f8fafc/00b2ce?text=${encodeURIComponent(p.name)}`} 
                     alt={p.name} 
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
                   />
                 </div>
              </div>
              <div className="bg-slate-50 p-6 border-t border-slate-100 mt-auto">
                <h4 className="font-bold text-slate-800 text-base mb-2">{p.name}</h4>
                <p className="text-sm text-slate-500">{p.desc}</p>
                <div className="mt-4 text-xs font-medium text-[#14aebc]">Additional info placeholder...</div>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="flex items-center px-8 py-3 bg-[#14aebc] text-white rounded-full font-medium hover:bg-[#0f8a96] transition-colors shadow-md shadow-cyan-200">
            Download Brochure <Download className="ml-2 w-4 h-4" />
          </button>
          <button className="flex items-center px-8 py-3 bg-white text-[#14aebc] border-2 border-cyan-100 rounded-full font-medium hover:bg-cyan-50 transition-colors">
            Ordering Information
          </button>
        </div>

      </div>

      <ProductSpecModal 
        isOpen={isSpecModalOpen} 
        onClose={() => setIsSpecModalOpen(false)} 
        product={selectedProduct} 
      />
    </section>
  );
}
