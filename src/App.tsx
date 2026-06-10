import TopNav from './components/TopNav';
import Hero from './components/Hero';
// import Features from './components/Features';
import Specs from './components/Specs';
import Products from './components/Products';
import AboutMeddress from './components/AboutMeddress';
import SuccessFAQ from './components/SuccessFAQ';
import ContactFooter from './components/ContactFooter';
import AboutUs from './components/AboutUs';
import OurTeam from './components/OurTeam';
import ContactFormModal from './components/ContactFormModal';
import { useState, useEffect } from 'react';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen">
      <TopNav onOpenContact={() => setIsContactModalOpen(true)} />
      <main>
        {hash === '#about' ? (
          <AboutUs />
        ) : hash === '#team' ? (
          <OurTeam />
        ) : (
          <>
            <Hero />
            {/* <Features /> */}
            <Specs />
            <AboutMeddress />
            <Products />
            <SuccessFAQ />
          </>
        )}
      </main>
      <ContactFooter onOpenContact={() => setIsContactModalOpen(true)} />
      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}
