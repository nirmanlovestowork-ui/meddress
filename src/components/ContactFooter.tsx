import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube, ChevronDown, CheckCircle2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

const INDIAN_STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", 
  "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", 
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", 
  "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", 
  "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

interface ContactFooterProps {
  onOpenContact?: () => void;
}

export default function ContactFooter({ onOpenContact }: ContactFooterProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    organisationType: '',
    businessName: '',
    email: '',
    phone: '',
    inquiryNature: '',
    city: '',
    state: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');
    
    try {
      await addDoc(collection(db, 'inquiries'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setIsSuccess(true);
      setFormData({
        fullName: '',
        organisationType: '',
        businessName: '',
        email: '',
        phone: '',
        inquiryNature: '',
        city: '',
        state: ''
      });
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form: ", error);
      setErrorMsg('An error occurred while submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    
    setIsSubscribing(true);
    try {
      await addDoc(collection(db, 'newsletter'), {
        email: newsletterEmail,
        createdAt: serverTimestamp()
      });
      setSubscribeSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => {
        setSubscribeSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error subscribing to newsletter: ", error);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <>
      <section className="relative -mt-20 z-20 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl xl:shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row">
            
            {/* Left Box (Teal) */}
            <div className="bg-[#14aebc] p-10 md:p-14 text-white md:w-2/5 flex flex-col justify-center relative overflow-hidden">
               {/* Background abstract shapes */}
               <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                 <div className="absolute top-10 -right-10 w-40 h-40 rounded-full border-4 border-white"></div>
                 <div className="absolute bottom-10 -left-10 w-60 h-60 rounded-full border-4 border-white"></div>
               </div>

               <h3 className="text-3xl font-bold mb-4 relative z-10">Get in Touch Today!</h3>
               <p className="text-cyan-50 mb-10 text-sm relative z-10 leading-relaxed">
                 We are happy to provide assistance and support with any questions you may have.
               </p>
               
               <div className="space-y-6 relative z-10">
                 <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                     <Mail className="w-5 h-5" />
                   </div>
                   <span className="text-sm font-medium">sales@meddress.in</span>
                 </div>
                 <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                     <Phone className="w-5 h-5" />
                   </div>
                   <span className="text-sm font-medium">(+91) 9938508080</span>
                 </div>
                 <div className="flex items-start space-x-4">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                     <MapPin className="w-5 h-5" />
                   </div>
                   <span className="text-sm leading-relaxed">
                     Plot No. 672/4295 & 673/4294, Ground Floor, Shanti Nagar, Jharpada, Bhubaneswar - 751006
                   </span>
                 </div>
               </div>
            </div>

            {/* Right Box (Form) */}
            <div className="p-10 md:p-14 md:w-3/5 bg-white">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-2">Thank You!</h3>
                  <p className="text-slate-500 max-w-md mx-auto">
                    Your inquiry has been successfully submitted. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {errorMsg && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                      {errorMsg}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Full Name*</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Aditya Verma" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14aebc]/50 focus:border-[#14aebc] transition-all text-slate-700" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Organisation Type*</label>
                      <div className="relative">
                        <select 
                          name="organisationType"
                          value={formData.organisationType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14aebc]/50 focus:border-[#14aebc] transition-all appearance-none cursor-pointer text-slate-700"
                          required
                        >
                          <option value="" disabled className="text-slate-400">Select Type</option>
                          <option value="Hospital">Hospital</option>
                          <option value="Clinic">Clinic</option>
                          <option value="Dealer/Distributor">Dealer/Distributor</option>
                          <option value="Retail Pharmacy">Retail Pharmacy</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                          <ChevronDown size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Business Name*</label>
                      <input 
                        type="text" 
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="ABC Medical" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14aebc]/50 focus:border-[#14aebc] transition-all text-slate-700" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Email Address*</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="aditya@business.com" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14aebc]/50 focus:border-[#14aebc] transition-all text-slate-700" 
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Phone Number*</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 99999 99999" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14aebc]/50 focus:border-[#14aebc] transition-all text-slate-700" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Nature of Inquiry*</label>
                      <div className="relative">
                        <select 
                          name="inquiryNature"
                          value={formData.inquiryNature}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14aebc]/50 focus:border-[#14aebc] transition-all appearance-none cursor-pointer text-slate-700"
                          required
                        >
                          <option value="" disabled className="text-slate-400">Select Inquiry Type</option>
                          <option value="Order / Request Quote">Order / Request Quote</option>
                          <option value="Dealership / Distrubutorsip Inquiry">Dealership / Distrubutorsip Inquiry</option>
                          <option value="Request Product Samples">Request Product Samples</option>
                          <option value="Others">Others</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                          <ChevronDown size={16} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">City*</label>
                      <input 
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Mumbai" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14aebc]/50 focus:border-[#14aebc] transition-all text-slate-700" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">State*</label>
                      <div className="relative">
                        <select 
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14aebc]/50 focus:border-[#14aebc] transition-all appearance-none cursor-pointer text-slate-700"
                          required
                        >
                          <option value="" disabled className="text-slate-400">Select State/UT</option>
                          {INDIAN_STATES.map((state) => (
                            <option key={state} value={state}>{state}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                          <ChevronDown size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end border-t border-slate-100 pt-6 mt-2">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-[#14aebc] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0f8a96] transition-colors shadow-md text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Dark Footer */}
      <footer className="bg-[#1c1c1c] text-white pt-32 pb-6 relative overflow-hidden mt-[-100px]">
        {/* Abstract dark mode background graphics can go here if needed */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-8">
            <div className="lg:col-span-1">
              <div className="text-3xl font-bold text-white flex items-center mb-6">
                <span className="italic">Med</span><span className="font-light italic text-slate-400">dress</span>
                <sup className="text-xs ml-1">&reg;</sup>
              </div>
            </div>
            
            <div className="lg:col-span-2 flex flex-wrap gap-x-8 gap-y-4 items-center h-fit text-sm text-slate-400 font-medium">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Technology</a>
              <a href="#" className="hover:text-white transition-colors">Publications</a>
              <a href="#" className="hover:text-white transition-colors">Evidence</a>
              <a href="#" className="hover:text-white transition-colors">Events</a>
              <a href="#" className="hover:text-white transition-colors">Insights</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onOpenContact?.(); }} className="hover:text-white transition-colors cursor-pointer">Contact Us</a>
            </div>

            <div className="lg:col-span-1 bg-[#262626] p-6 rounded-2xl border border-slate-800">
               <h4 className="font-semibold mb-4 text-sm">Learn How Meddress Transforms Wound Care</h4>
               {subscribeSuccess ? (
                 <div className="flex flex-col items-center justify-center p-4 bg-green-900/20 border border-green-500/30 rounded-xl text-center">
                   <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
                   <p className="text-green-400 text-sm font-semibold">Subscribed successfully!</p>
                 </div>
               ) : (
                 <form onSubmit={handleNewsletterSubmit}>
                   <input 
                     type="email" 
                     value={newsletterEmail}
                     onChange={(e) => setNewsletterEmail(e.target.value)}
                     required
                     placeholder="Enter your email" 
                     className="w-full px-4 py-3 bg-[#1c1c1c] border border-slate-700 rounded-xl mb-3 text-sm focus:outline-none focus:border-[#14aebc] text-white placeholder-slate-500" 
                   />
                   <button 
                     type="submit"
                     disabled={isSubscribing}
                     className="w-full bg-[#14aebc] text-white py-3 rounded-xl text-sm font-semibold hover:bg-[#0f8a96] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                   >
                     {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                   </button>
                 </form>
               )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <div className="flex items-center mb-6 md:mb-0 space-x-6">
               <div className="flex items-center">
                  <span className="text-xl italic mr-1 tracking-wide">
                    <span className="font-bold text-white">Med</span>
                    <span className="font-medium text-slate-400">dress</span>
                  </span>
               </div>
               <p className="border-l border-slate-700 pl-6 py-2">
                 Copyright © 2026 | Meddress Surgicals Pvt Ltd. | All Rights Reserved | <a href="#" className="hover:text-white underline">Privacy Policy</a>
               </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#14aebc] hover:text-white transition-colors"><Linkedin size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#14aebc] hover:text-white transition-colors"><Twitter size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#14aebc] hover:text-white transition-colors"><Facebook size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#14aebc] hover:text-white transition-colors"><Instagram size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#14aebc] hover:text-white transition-colors"><Youtube size={14} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Banner Image / Graphic placeholder */}
        <div className="w-full mt-12 bg-gradient-to-t from-[#14aebc]/20 to-transparent pt-32 pb-4 text-center font-black italic text-white/5 text-[60px] sm:text-[100px] lg:text-[150px] leading-none select-none pointer-events-none relative flex flex-col items-center justify-end">
           <span className="absolute bottom-10">Meddress</span>
           
           
        </div>

      </footer>
    </>
  );
}
