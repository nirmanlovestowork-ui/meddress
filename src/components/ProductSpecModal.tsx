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
                {product?.category || 'Dressing'}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight pr-10">
                {product?.name || 'Roller Bandage'}
              </h2>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-6 md:px-8 pb-8">
            <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">
              <div className="flex flex-col sm:flex-row border-b border-slate-200 last:border-0">
                <div className="w-full sm:w-1/3 bg-slate-100 py-3 px-5 flex items-center border-b sm:border-b-0 sm:border-r border-slate-200 text-[11px] uppercase tracking-widest font-bold text-slate-500">Material</div>
                <div className="w-full sm:w-2/3 bg-white py-3 px-5 flex items-center text-sm font-medium text-slate-800">100% Absorbent Cotton</div>
              </div>
              
              <div className="flex flex-col sm:flex-row border-b border-slate-200 last:border-0">
                <div className="w-full sm:w-1/3 bg-slate-100 py-3 px-5 flex items-center border-b sm:border-b-0 sm:border-r border-slate-200 text-[11px] uppercase tracking-widest font-bold text-slate-500">Available Sizes</div>
                <div className="w-full sm:w-2/3 bg-white py-3 px-5 flex items-center text-sm font-medium text-slate-800">5cm x 3m, 7.5cm x 3m, 10cm x 4m</div>
              </div>
              
              <div className="flex flex-col sm:flex-row border-b border-slate-200 last:border-0">
                <div className="w-full sm:w-1/3 bg-slate-100 py-3 px-5 flex items-center border-b sm:border-b-0 sm:border-r border-slate-200 text-[11px] uppercase tracking-widest font-bold text-slate-500">Ply & Thread Count</div>
                <div className="w-full sm:w-2/3 bg-white py-3 px-5 flex items-center text-sm font-medium text-slate-800">Superior weaving with high thread count</div>
              </div>
              
              <div className="flex flex-col sm:flex-row border-b border-slate-200 last:border-0">
                <div className="w-full sm:w-1/3 bg-slate-100 py-3 px-5 flex items-center border-b sm:border-b-0 sm:border-r border-slate-200 text-[11px] uppercase tracking-widest font-bold text-slate-500">Sterility</div>
                <div className="w-full sm:w-2/3 bg-white py-3 px-5 flex items-center text-sm font-medium text-slate-800">Available in Sterile & Non-Sterile</div>
              </div>
              
              <div className="flex flex-col sm:flex-row border-b border-slate-200 last:border-0">
                <div className="w-full sm:w-1/3 bg-slate-100 py-3 px-5 flex items-center border-b sm:border-b-0 sm:border-r border-slate-200 text-[11px] uppercase tracking-widest font-bold text-slate-500">Packaging</div>
                <div className="w-full sm:w-2/3 bg-white py-3 px-5 flex items-center text-sm font-medium text-slate-800">100 pieces per box / 10 boxes per master carton</div>
              </div>
              
              <div className="flex flex-col sm:flex-row border-b border-slate-200 last:border-0">
                <div className="w-full sm:w-1/3 bg-slate-100 py-3 px-5 flex items-center border-b sm:border-b-0 sm:border-r border-slate-200 text-[11px] uppercase tracking-widest font-bold text-slate-500">Compliance</div>
                <div className="w-full sm:w-2/3 bg-white py-3 px-5 flex items-center text-sm font-medium text-slate-800">WHO-GMP & ISO 13485:2016</div>
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
