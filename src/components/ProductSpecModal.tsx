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

const productDataListing: Record<string, { sizes: string, specs: string, pack: string }> = {
  'Roller Bandage': {
    sizes: '15 Cm x 3 mtr, 10 Cm x 3 mtr, 7.50 Cm x 3 mtr, 5 Cm x 3 mtr',
    specs: '35 TPI',
    pack: '10 Pcs'
  },
  'Gauze Than': {
    sizes: '60 Cm x 16 Mtr',
    specs: '35 TPI',
    pack: '1 Pc'
  },
  'Gauze Swab': {
    sizes: '8 Ply & 12 Ply (10 x 10, 7.5 x 7.5, 5 x 5)',
    specs: '36 TPI',
    pack: '50 Pcs, 100 Pcs'
  },
  'Gamjee Roll': {
    sizes: '10 Cm, 15 Cm',
    specs: 'N/A',
    pack: '1 Pc'
  },
  'Combined Dressing': {
    sizes: '10 x 10 x 5D, 10 x 10 x 10D',
    specs: 'N/A',
    pack: '5 Pcs, 10 Pcs'
  },
  'Absorbent Cotton': {
    sizes: '500 Gms, 400 Gms, 300 Gms, 200 Gms, 100 Gms, 50 Gms, 30 Gms, 20 Gms, 15 Gms',
    specs: 'Net wt, Premium',
    pack: '1 Pc, 4 Pcs, 5 Pcs, 12 Pcs, 16 Pcs, 20 Pcs'
  },
  'Zigzag Cotton': {
    sizes: '500 Gms, 400 Gms, 200 Gms, 100 Gms',
    specs: 'Net wt',
    pack: '1 Pc'
  },
  'Non - Absorbent Cotton': {
    sizes: '500 Gms',
    specs: 'Net wt',
    pack: '1 Pc'
  },
  'Microporous Tape': {
    sizes: '1.25 Cm x 5 mtr, 2.50 Cm x 5 mtr, 5.00 Cm x 5 mtr, 1.25 Cm x 9.1 mtr, 2.50 Cm x 9.1 mtr, 5.00 Cm x 9.1 mtr',
    specs: 'N/A',
    pack: '6 Pcs, 12 Pcs, 24 Pcs'
  },
  'POP Bandage': {
    sizes: '10 Cm x 2.7 mtr, 15 Cm x 2.7 mtr',
    specs: 'N/A',
    pack: '12 Pcs'
  },
  'I.V.Cannula Fixator': {
    sizes: '100 Pcs',
    specs: 'N/A',
    pack: '100 Pcs'
  },
  'Cast Pad / Soft Roll Cotton': {
    sizes: '10 Cm x 3 mtr, 15 Cm x 3 mtr',
    specs: 'N/A',
    pack: '1 Pc'
  },
  'K99EL Masks': {
    sizes: 'N/A',
    specs: 'K99EL White Respirator Mask CE',
    pack: '50 Pcs'
  },
  '2 / 3 Ply Masks': {
    sizes: 'N/A',
    specs: '2 Ply Mask Blue, 3 Ply Mask Blue with MB',
    pack: '100 Pcs'
  },
  'Bouffant Cap / Surgeon\'s Cap': {
    sizes: '21" Blue',
    specs: 'Bouffant Cap, Surgeon Cap',
    pack: '100 Pcs'
  },
  'MOP': {
    sizes: '8 Ply 25 x 25, 4 Ply 30 x 30, 12 Ply 25 x 25',
    specs: '42 TPI',
    pack: '10 Pcs'
  }
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
    : { sizes: 'N/A', specs: 'N/A', pack: 'N/A' };

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
            <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">
              <div className="flex flex-col sm:flex-row border-b border-slate-200 last:border-0 hover:bg-slate-50 transition-colors">
                <div className="w-full sm:w-1/3 bg-slate-100/80 py-4 px-5 flex items-center border-b sm:border-b-0 sm:border-r border-slate-200 text-xs uppercase tracking-widest font-bold text-slate-600">Available Sizes</div>
                <div className="w-full sm:w-2/3 bg-white hover:bg-slate-50 py-4 px-5 flex items-center text-[15px] font-medium text-slate-800 leading-relaxed">{currentProductData.sizes}</div>
              </div>
              
              <div className="flex flex-col sm:flex-row border-b border-slate-200 last:border-0 hover:bg-slate-50 transition-colors">
                <div className="w-full sm:w-1/3 bg-slate-100/80 py-4 px-5 flex items-center border-b sm:border-b-0 sm:border-r border-slate-200 text-xs uppercase tracking-widest font-bold text-slate-600">Specifications</div>
                <div className="w-full sm:w-2/3 bg-white hover:bg-slate-50 py-4 px-5 flex items-center text-[15px] font-medium text-slate-800 leading-relaxed">{currentProductData.specs}</div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-slate-200 last:border-0 hover:bg-slate-50 transition-colors">
                <div className="w-full sm:w-1/3 bg-slate-100/80 py-4 px-5 flex items-center border-b sm:border-b-0 sm:border-r border-slate-200 text-xs uppercase tracking-widest font-bold text-slate-600">Pieces Per Pack</div>
                <div className="w-full sm:w-2/3 bg-white hover:bg-slate-50 py-4 px-5 flex items-center text-[15px] font-medium text-slate-800 leading-relaxed">{currentProductData.pack}</div>
              </div>
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
