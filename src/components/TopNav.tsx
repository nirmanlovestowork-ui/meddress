import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import meddressLogo from '../images/meddress_logo_website.jpg';

interface TopNavProps {
  onOpenContact?: () => void;
}

export default function TopNav({ onOpenContact }: TopNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-4 sm:top-6 z-50 flex justify-center px-4 w-full">
      <div className="relative w-full max-w-[1280px]">
        <header className="w-full bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex justify-between items-center h-[60px] sm:h-[76px] px-3 sm:px-6 md:px-10">
          
          {/* Mobile Menu Toggle & Logo Container */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Mobile Menu Icon */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="lg:hidden text-slate-600 hover:text-[#44C0C7] focus:outline-none p-1.5"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
            
            {/* Logo */}
            <a href="#" className="flex-shrink-0 flex items-center h-full py-2 sm:py-2 gap-1.5 sm:gap-2">
              <img src={meddressLogo} alt="Meddress Logo" className="h-full max-h-7 sm:max-h-12 object-contain" />
              <div className="flex flex-col justify-center pb-0 sm:pb-1">
                <div className="text-xl sm:text-[32px] font-bold text-[#44C0C7] flex items-center leading-none sm:mt-1">
                  <span className="italic tracking-tight">Med</span><span className="font-light italic text-[#44C0C7] opacity-80 tracking-tight">dress</span>
                  <sup className="text-[10px] sm:text-sm ml-0.5 mt-1 sm:mt-2 text-slate-400 font-normal">&reg;</sup>
                </div>
                <span className="text-[9.5px] text-slate-500 tracking-tight mt-1 hidden sm:block uppercase font-medium">Disposable Medical Dressings</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex space-x-10 items-center pl-4 lg:pl-8">
            <a href="#products" className="flex items-center text-slate-600 font-semibold text-[15px] hover:text-[#44C0C7] transition-colors">
              Products
            </a>
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
          <div className="flex items-center space-x-3 md:space-x-6 lg:space-x-8">
            <a href="tel:+919938508080" className="hidden md:flex items-center text-[#1b2b3a] font-bold text-[17px] cursor-pointer hover:text-[#44C0C7] transition-colors font-sans">
              <Phone className="w-4 h-4 mr-2.5 text-[#1b2b3a]" strokeWidth={2.5} />
              <span className="tracking-wide">+91 99385 08080</span>
            </a>
            
            <button 
              onClick={onOpenContact}
              className="bg-gradient-to-r from-[#17C5CB] to-[#4379EC] text-white px-4 sm:px-8 py-2 sm:py-[11px] rounded-full text-[13px] sm:text-[15px] font-semibold hover:opacity-90 transition-opacity shadow-sm tracking-wide flex-shrink-0"
            >
              Contact Us
            </button>
          </div>
        </header>

        {/* Mobile Nav Menu Dropdown */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-col py-4 px-6 gap-4 z-50">
            <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-semibold text-[16px] hover:text-[#44C0C7] transition-colors pb-3 border-b border-slate-50">
              Products
            </a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-semibold text-[16px] hover:text-[#44C0C7] transition-colors pb-3 border-b border-slate-50">
              About Us
            </a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-semibold text-[16px] hover:text-[#44C0C7] transition-colors pb-3 border-b border-slate-50">
              Certifications
            </a>
            <a href="#team" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-semibold text-[16px] hover:text-[#44C0C7] transition-colors pb-3 border-b border-slate-50">
              Our Team
            </a>
            <a href="tel:+919938508080" className="flex items-center text-[#1b2b3a] font-bold text-[16px] pt-1">
              <Phone className="w-4 h-4 mr-2 text-[#44C0C7]" />
              +91 99385 08080
            </a>
          </nav>
        )}
      </div>
    </div>
  );
}
