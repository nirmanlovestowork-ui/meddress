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
    { size: '10 Cm', spec: '-', pack: '1 Pc' },
    { size: '15 Cm', spec: '-', pack: '1 Pc' },
  ],
  'Combined Dressing': [
    { size: '10 x 10 x 5D', spec: '-', pack: '5 Pcs' },
    { size: '10 x 10 x 10D', spec: '-', pack: '10 Pcs' },
  ],
  'Absorbent Cotton': [
    { size: '500 Gms', spec: 'Net wt', pack: '1 Pc' },
    { size: '500 Gms', spec: '400 Gms', pack: '1 Pc' },
    { size: '400 Gms', spec: 'Net wt', pack: '1 Pc' },
    { size: '400 Gms', spec: '300 Gms', pack: '1 Pc' },
    { size: '300 Gms', spec: 'Net wt', pack: '1 Pc' },
    { size: '200 Gms', spec: 'Net wt', pack: '1 Pc' },
    { size: '100 Gms', spec: 'Net wt', pack: '4 Pcs' },
    { size: '50 Gms', spec: 'Net wt', pack: '5 Pcs' },
    { size: '30 Gms', spec: 'Net wt', pack: '12 Pcs' },
    { size: '20 Gms', spec: 'Net wt', pack: '16 Pcs' },
    { size: '15 Gms', spec: 'Net wt', pack: '20 Pcs' },
    { size: '500 Gms', spec: 'Premium', pack: '1 Pc' },
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
    { size: '1.25 Cm x 5 mtr', spec: '-', pack: '24 Pcs' },
    { size: '5.00 Cm x 5 mtr', spec: '-', pack: '6 Pcs' },
    { size: '2.50 Cm x 5 mtr', spec: '-', pack: '12 Pcs' },
    { size: '1.25 Cm x 9.1 mtr', spec: '-', pack: '24 Pcs' },
    { size: '5.00 Cm x 9.1 mtr', spec: '-', pack: '6 Pcs' },
    { size: '2.50 Cm x 9.1 mtr', spec: '-', pack: '12 Pcs' },
  ],
  'POP Bandage': [
    { size: '10 Cm x 2.7 mtr', spec: '-', pack: '12 Pcs' },
    { size: '15 Cm x 2.7 mtr', spec: '-', pack: '12 Pcs' },
  ],
  'I.V.Cannula Fixator': [
    { size: '100 Pcs', spec: '-', pack: '100 Pcs' },
  ],
  'Cast Pad / Soft Roll Cotton': [
    { size: '10 Cm x 3 mtr', spec: '-', pack: '1 Pc' },
    { size: '15 Cm x 3 mtr', spec: '-', pack: '1 Pc' },
  ],
  'K99EL Masks': [
    { size: 'K99EL White Respirator Mask CE', spec: '-', pack: '50 Pcs' },
    { size: 'K99EL White Respirator Mask CE(Single Pack)', spec: '-', pack: '50 Pcs' },
  ],
  '2 / 3 Ply Masks': [
    { size: '2 Ply Mask Blue', spec: '-', pack: '100 Pcs' },
    { size: '3 Ply Mask Blue with MB', spec: '-', pack: '100 Pcs' },
  ],
  'Bouffant Cap / Surgeon\'s Cap': [
    { size: 'Bouffant Cap 21" Blue', spec: '-', pack: '100 Pcs' },
    { size: 'Surgeon Cap Blue', spec: '-', pack: '100 Pcs' },
  ],
  'MOP': [
    { size: '8 Ply 25 x 25', spec: '42 TPI', pack: '10 Pcs' },
    { size: '4 Ply 30 x 30', spec: '42 TPI', pack: '10 Pcs' },
    { size: '12 Ply 25 x 25', spec: '42 TPI', pack: '10 Pcs' },
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
