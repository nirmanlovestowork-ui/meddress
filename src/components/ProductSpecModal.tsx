import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ProductSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: {
    name: string;
    category: string;
  } | null;
}

type ProductVariant = { size: string; spec: string; pack: string };

const productDataListing: Record<string, ProductVariant[]> = {
  'Roller Bandage': [
    { size: '15 Cm x 3 mtr', spec: '35 TPI', pack: '10 Pcs' },
    { size: '10 Cm x 3 mtr', spec: '35 TPI', pack: '10 Pcs' },
    { size: '7.50 Cm x 3 mtr', spec: '35 TPI', pack: '10 Pcs' },
    { size: '5 Cm x 3 mtr', spec: '35 TPI', pack: '10 Pcs' },
    { size: '15 Cm x 5 mtr', spec: '35 TPI', pack: '10 Pcs' },
    { size: '10 Cm x 5 mtr', spec: '35 TPI', pack: '10 Pcs' },
    { size: '7.50 Cm x 5 mtr', spec: '35 TPI', pack: '10 Pcs' },
    { size: '5 Cm x 5 mtr', spec: '35 TPI', pack: '10 Pcs' },
    { size: '15 Cm x 6 mtr', spec: '35 TPI', pack: '10 Pcs' },
    { size: '10 Cm x 6 mtr', spec: '35 TPI', pack: '10 Pcs' },
    { size: '7.50 Cm x 6 mtr', spec: '35 TPI', pack: '10 Pcs' },
    { size: '5 Cm x 6 mtr', spec: '35 TPI', pack: '10 Pcs' },
  ],
  'Gauze Than': [
    { size: '60Cm x 16 Mtr', spec: '35 TPI', pack: '1 Pc' }
  ],
  'Gauze Swab': [
    { size: '8 Ply 10 x 10', spec: '36 TPI', pack: '100 Pcs' },
    { size: '8 Ply 7.5 x 7.5', spec: '36 TPI', pack: '100 Pcs' },
    { size: '8 Ply 5 x 5', spec: '36 TPI', pack: '100 Pcs' },
    { size: '12 Ply 10 x 10', spec: '36 TPI', pack: '100 Pcs' },
    { size: '12 Ply 10 x 10', spec: '36 TPI', pack: '50 Pcs' },
    { size: '12 Ply 7.5 x 7.5', spec: '36 TPI', pack: '100 Pcs' },
    { size: '12 Ply 5 x 5', spec: '36 TPI', pack: '100 Pcs' },
    { size: '12 Ply 5 x 5', spec: '36 TPI', pack: '50 Pcs' },
    { size: '12 Ply 7.5 x 7.5', spec: '36 TPI', pack: '50 Pcs' },
  ],
  'Gamjee Roll': [
    { size: '10 Cm', spec: '60 g', pack: '1 Pc' },
    { size: '15 Cm', spec: '90 g', pack: '1 Pc' },
  ],
  'Combined Dressing': [
    { size: '10 x 10 x 5D', spec: '-', pack: '5 Pcs' },
    { size: '10 x 10 x 10D', spec: '-', pack: '10 Pcs' },
  ],
  'Absorbent Cotton': [
    { size: '500 Gms', spec: 'Net wt', pack: '1 Pc' },
    { size: '500 Gms (Gross)', spec: 'Gross', pack: '1 Pc' },
    { size: '400 Gms', spec: 'Net wt', pack: '1 Pc' },
    { size: '400 Gms (Gross)', spec: 'Gross', pack: '1 Pc' },
    { size: '300 Gms', spec: 'Net wt', pack: '1 Pc' },
    { size: '200 Gms', spec: 'Net wt', pack: '1 Pc' },
    { size: '100 Gms', spec: 'Net wt', pack: '4 Pcs' },
    { size: '50 Gms', spec: 'Net wt', pack: '6 Pcs' },
    { size: '30 Gms', spec: 'Net wt', pack: '12 Pcs' },
    { size: '20 Gms', spec: 'Net wt', pack: '16 Pcs' },
    { size: '15 Gms', spec: 'Net wt', pack: '20 Pcs' },
  ],
  'Zigzag Cotton': [
    { size: '500 Gms', spec: 'Net wt', pack: '1 Pc' },
    { size: '400 Gms', spec: 'Net wt', pack: '1 Pc' },
    { size: '200 Gms', spec: 'Net wt', pack: '1 Pc' },
    { size: '100 Gms', spec: 'Net wt', pack: '1 Pc' },
  ],
  'Non - Absorbent Cotton': [
    { size: '500 Gms', spec: 'Net wt', pack: '1 Pc' },
  ],
  'Microporous Tape': [
    { size: '1.25 Cm x 5 mtr', spec: '1/2 Inch', pack: '24 Pcs' },
    { size: '5.00 Cm x 5 mtr', spec: '2 Inch', pack: '6 Pcs' },
    { size: '2.50 Cm x 5 mtr', spec: '1 Inch', pack: '12 Pcs' },
    { size: '1.25 Cm x 9.1 mtr', spec: '1/2 Inch', pack: '24 Pcs' },
    { size: '5.00 Cm x 9.1 mtr', spec: '2 Inch', pack: '6 Pcs' },
    { size: '2.50 Cm x 9.1 mtr', spec: '1 Inch', pack: '12 Pcs' },
  ],
  'POP Bandage': [
    { size: '10 Cm x 2.7 mtr', spec: '4 Inch', pack: '12 Pcs' },
    { size: '15 Cm x 2.7 mtr', spec: '6 Inch', pack: '12 Pcs' },
  ],
  'I.V.Cannula Fixator': [
    { size: '100 Pcs', spec: '-', pack: '100 Pcs' },
  ],
  'Cast Pad / Soft Roll Cotton': [
    { size: '10 Cm x 3 mtr', spec: '4 Inch', pack: '1 Pc' },
    { size: '15 Cm x 3 mtr', spec: '6 Inch', pack: '1 Pc' },
  ],
  'K99EL Masks': [
    { size: 'K99EL White Respirator Mask CE', spec: 'FFPE2', pack: '50 Pcs' },
    { size: 'K99EL White Respirator Mask CE(Single Pack)', spec: 'FFPE2', pack: '50 Pcs' },
  ],
  '2 / 3 Ply Masks': [
    { size: '2 Ply Mask Blue', spec: '2 Layer', pack: '100 Pcs' },
    { size: '3 Ply Mask Blue with MB', spec: '3 Layer with Melt Blown', pack: '100 Pcs' },
  ],
  'Bouffant Cap / Surgeon\'s Cap': [
    { size: 'Bouffant Cap 21" Blue', spec: '-', pack: '100 Pcs' },
    { size: 'Surgeon Cap Blue', spec: '-', pack: '100 Pcs' },
  ],
  'MOP': [
    { size: '8 Ply 25 x 25', spec: '35 TPI', pack: '10 Pcs' },
    { size: '4 Ply 30 x 30', spec: '35 TPI', pack: '10 Pcs' },
    { size: '12 Ply 25 x 25', spec: '35 TPI', pack: '10 Pcs' },
  ]
};

const productUsageListing: Record<string, string[]> = {
  'Roller Bandage': [
    'Securing wound dressings and pads firmly in place.',
    'Providing light, adjustable compression to reduce swelling or support joint sprains.',
    'Acting as a flexible first-aid base layer for orthopedic splints on fractured limbs.'
  ],
  'Gauze Than': [
    'Custom-cutting into specific, non-standard sizes for large wound coverage.',
    'Used as a primary layer for cleaning, scrubbing, and prepping surgical sites.',
    'Folding into thick, customized pads to absorb heavy exudate in severe trauma cases.'
  ],
  'Gauze Swab': [
    'Swabbing and cleaning minor cuts, scrapes, and surgical incisions.',
    'Applying topical ointments, antiseptic creams, and cleaning fluids precisely.',
    'Packing small, open wounds to absorb drainage and promote safe tissue healing.'
  ],
  'Gamjee Roll': [
    'Padding heavily draining wounds or large, sensitive surgical sites.',
    'Insulating healing areas to protect them from external mechanical trauma.',
    'Acting as a high-capacity, highly absorbent secondary layer over primary sterile dressings.'
  ],
  'Combined Dressing': [
    'Managing post-operative surgical wounds that exhibit moderate to heavy bleeding.',
    'Cushioning bodily pressure points to prevent bedsores or friction ulcers in bedridden patients.',
    'Functioning as a rapid-response, high-capacity trauma dressing for emergency first aid.'
  ],
  'Absorbent Cotton': [
    'Cleaning delicate skin areas and gently applying cosmetic or medical fluids.',
    'Serving as a generic, soft padding material for lightweight, everyday bandaging.',
    'Absorbing minor, localized bleeding during basic medical examinations or procedures.'
  ],
  'Zigzag Cotton': [
    'Tearing easily in precise quantities without unrolling, saving preparation time in busy clinics.',
    'Prepping and wiping patient skin with alcohol or disinfectants prior to injections.',
    'Stuffing and padding under casts or orthopedic splints for layered patient comfort.'
  ],
  'Non - Absorbent Cotton': [
    'Plugging test tubes, flasks, and laboratory glassware to prevent airborne contamination.',
    'Insulating boundaries around wet dressings where a fluid-repellent barrier is required.',
    'Cushioning delicate items during medical equipment packing and sterilization processes.'
  ],
  'Microporous Tape': [
    'Securing bandages, gauze, and lightweight dressings directly to sensitive or fragile skin.',
    'Anchoring I.V. lines, catheters, and thin medical tubing safely in place.',
    'Providing a highly breathable, hypoallergenic hold that allows natural skin moisture to escape.'
  ],
  'POP Bandage': [
    'Casting and completely immobilizing broken bones, fractures, and severe sprains.',
    'Creating rigid, custom-molded orthopedic splints to correct joint and bone deformities.',
    'Providing robust, post-operative structural support for reconstructive orthopedic surgeries.'
  ],
  'I.V.Cannula Fixator': [
    'Firmly securing the I.V. cannula to the patient\'s skin to prevent accidental dislodgement.',
    'Protecting the delicate insertion site from dirt, friction, and potential bacterial infection.',
    'Minimizing patient discomfort and vein trauma caused by unnecessary cannula movement.'
  ],
  'Cast Pad / Soft Roll Cotton': [
    'Wrapping directly under POP or synthetic casts to prevent severe skin irritation and chafing.',
    'Absorbing sweat and minor exudate beneath orthopedic casts to maintain skin hygiene.',
    'Evenly distributing pressure around bony prominences (like ankles and elbows) to avoid friction sores.'
  ],
  'K99EL Masks': [
    'Providing high-efficiency, multi-layer particulate filtration against airborne viruses and bacteria.',
    'Protecting frontline healthcare workers during high-risk, aerosol-generating medical procedures.',
    'Filtering industrial dust, severe pollutants, and hazardous medical waste particles.'
  ],
  '2 / 3 Ply Masks': [
    'Acting as a primary barrier against large respiratory droplets, coughs, and sneezes.',
    'Maintaining essential hygiene protocols in clinical, food service, or general workplace settings.',
    'Preventing the wearer from accidentally exhaling contaminants into sterile environments or onto patients.'
  ],
  'Bouffant Cap / Surgeon\'s Cap': [
    'Fully containing hair to prevent shedding and contamination in sterile surgical operating rooms.',
    'Maintaining strict hygienic standards in critical ICU, laboratory, or pharmaceutical environments.',
    'Protecting the wearer\'s hair from infectious fluids, medical splashes, or hazardous airborne chemicals.'
  ],
  'MOP': [
    'Absorbing massive amounts of blood and bodily fluids rapidly during deep, open surgeries.',
    'Packing bodily cavities or safely retracting delicate organs during abdominal procedures.',
    'Wiping and maintaining a clear, dry surgical field to provide the operating surgeon with maximum visibility.'
  ]
};

export default function ProductSpecModal({ isOpen, onClose, product }: ProductSpecModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentProductData = product && productDataListing[product.name] 
    ? productDataListing[product.name] 
    : [];

  const currentProductUsage = product && productUsageListing[product.name]
    ? productUsageListing[product.name]
    : [];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 shadow-2xl transition-opacity animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transition-transform animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
        
        {/* Absolutely positioned Close Button to top-right */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="p-6 md:p-8 pb-6">
            <div className="border-l-4 border-emerald-500 pl-4">
              <span className="inline-block px-3 py-1 bg-emerald-100/50 text-emerald-700 text-[10px] md:text-sm font-bold rounded-full mb-2 uppercase tracking-wider">
                {product?.category || 'Category'}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight pr-10">
                {product?.name || 'Product'}
              </h2>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-6 md:px-8 pb-8">
            {currentProductUsage.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">Product Usage</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {currentProductUsage.map((usage, idx) => (
                    <li key={idx} className="text-sm text-slate-600 leading-relaxed pl-1">{usage}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[400px]">
                <thead>
                  <tr className="bg-slate-100/80">
                    <th className="py-3 px-4 border-b border-slate-200 text-xs text-slate-600 font-bold uppercase tracking-wider">Available Sizes</th>
                    <th className="py-3 px-4 border-b border-slate-200 text-xs text-slate-600 font-bold uppercase tracking-wider">Specifications</th>
                    <th className="py-3 px-4 border-b border-slate-200 text-xs text-slate-600 font-bold uppercase tracking-wider">Pcs Per Pack</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {currentProductData.length > 0 ? currentProductData.map((variant, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 border-b border-slate-200 text-sm text-slate-800 font-medium">{variant.size}</td>
                      <td className="py-3 px-4 border-b border-slate-200 text-sm text-slate-800 text-slate-600">{variant.spec}</td>
                      <td className="py-3 px-4 border-b border-slate-200 text-sm text-slate-800 font-medium whitespace-nowrap">{variant.pack}</td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={3} className="py-8 text-center text-slate-500 text-sm">No variant data available for this product.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 bg-slate-50 py-4 px-8 text-center mt-auto shrink-0 z-10 w-full rounded-b-2xl">
           <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">Technical specifications are subject to change. Please contact us for custom dimensions.</p>
        </div>
      </div>
    </div>
  );
}
