import { ChevronDown, Phone } from 'lucide-react';
import meddressLogo from '../images/meddress_logo_website.jpg';

interface TopNavProps {
  onOpenContact?: () => void;
}

export default function TopNav({ onOpenContact }: TopNavProps) {
  return (
    <div className="sticky top-4 sm:top-6 z-50 flex justify-center px-4 w-full">
      <header className="w-full max-w-[1280px] bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex justify-between items-center h-[76px] px-6 md:px-10">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 flex items-center h-full py-2 gap-2">
          <img src={meddressLogo} alt="Meddress Logo" className="h-full max-h-12 object-contain" />
          <div className="flex flex-col justify-center pb-1">
            <div className="text-[32px] font-bold text-[#44C0C7] flex items-center leading-none mt-1">
              <span className="italic tracking-tight">Med</span><span className="font-light italic text-[#44C0C7] opacity-80 tracking-tight">dress</span>
              <sup className="text-sm ml-0.5 mt-2 text-slate-400 font-normal">&reg;</sup>
            </div>
            <span className="text-[9.5px] text-slate-500 tracking-tight mt-1 hidden sm:block uppercase font-medium">Disposable Medical Dressings</span>
          </div>
        </a>

        {/* Nav Links */}
        <nav className="hidden lg:flex space-x-10 items-center pl-8">
          <div className="relative group cursor-pointer">
            <a href="#products" className="flex items-center text-slate-600 font-semibold text-[15px] hover:text-[#44C0C7] transition-colors">
              Products
            </a>
          </div>
          <a href="#about" className="flex items-center text-slate-600 font-semibold text-[15px] hover:text-[#44C0C7] transition-colors">
            About Us
          </a>
          <a href="#" className="flex items-center text-slate-600 font-semibold text-[15px] hover:text-[#44C0C7] transition-colors">
            Certifications
          </a>
          <a href="#team" className="flex items-center text-slate-600 font-semibold text-[15px] hover:text-[#44C0C7] transition-colors">
            Our Team
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
          <a href="tel:+919938508080" className="hidden md:flex items-center text-[#1b2b3a] font-bold text-[17px] cursor-pointer hover:text-[#44C0C7] transition-colors font-sans">
            <Phone className="w-4 h-4 mr-2.5 text-[#1b2b3a]" strokeWidth={2.5} />
            <span className="tracking-wide">+91 99385 08080</span>
          </a>
          
          <button 
            onClick={onOpenContact}
            className="bg-gradient-to-r from-[#17C5CB] to-[#4379EC] text-white px-5 sm:px-8 py-2 sm:py-[11px] rounded-full text-sm sm:text-[15px] font-semibold hover:opacity-90 transition-opacity shadow-sm tracking-wide flex-shrink-0"
          >
            Contact Us
          </button>
        </div>
      </header>
    </div>
  );
}
