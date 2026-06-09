import React from 'react';
import { Shield, Target, CheckCircle2 } from 'lucide-react';

import SujitSahoo from '../images/team/sujit_sahoo.jpeg';
import JoshnaraniSahoo from '../images/team/joshnarani_sahoo.jpeg';
import UllasPradhan from '../images/team/ullas_pradhan.jpeg';

export default function AboutUs() {
  const team = [
    {
      name: "Mr. Sangam Kumar Ray",
      role: "Director [Production]",
      image: "https://placehold.co/400x400/f8fafc/14aebc?text=SKR",
      desc: "Leading production excellence and ensuring the highest standards of manufacturing processes."
    },
    {
      name: "Mrs. Joshnarani Sahoo",
      role: "Director [Administration]",
      image: JoshnaraniSahoo,
      desc: "Managing core administrative operations to ensure seamless functioning across all departments."
    },
    {
      name: "CA Sujit Sahoo",
      role: "Finance Head",
      image: SujitSahoo,
      desc: "Driving financial strategy and governance for sustainable organizational growth."
    },
    {
      name: "Mr. Ullas Pradhan",
      role: "Marketing Head",
      image: UllasPradhan,
      desc: "Spearheading marketing initiatives to expand reach and build strong healthcare partnerships."
    },
    {
      name: "Mr. Subrat Mohanty",
      role: "HR Consultant",
      image: "https://placehold.co/400x400/f8fafc/14aebc?text=SM",
      desc: "Optimizing human resource strategies to foster a motivated and skilled workforce."
    },
    {
      name: "Mr. Santosh Kumar Sahoo",
      role: "Business Consultant",
      image: "https://placehold.co/400x400/f8fafc/14aebc?text=SKS",
      desc: "Providing strategic business insights and guidance to navigate market opportunities."
    }
  ];

  return (
    <div className="w-full bg-white text-slate-800">
      {/* Hero Section */}
      <div className="w-full bg-[#f8fafc] pt-32 pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="about">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-50 rounded-full text-[#14aebc] font-semibold text-sm mb-6 border border-cyan-100">
            <span className="w-2 h-2 rounded-full bg-[#14aebc] mr-2"></span>
            About Meddress
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Pioneering Quality in <br className="hidden md:block" />
            <span className="text-[#14aebc]">Medical Supplies</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to providing hospitals, clinics, and healthcare professionals with the highest standards of medical dressings and surgical supplies. Built on a foundation of safety, trust, and precision.
          </p>
        </div>
      </div>

      {/* Our Mission & Vision */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission & Vision</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  At Meddress, our mission is to empower healthcare providers by ensuring they have access to reliable, sterile, and premium-quality medical dressings. We believe that every patient deserves the safest care possible, and that starts with the tools used in their recovery.
                </p>
                <p>
                  Our vision is to be the most trusted global partner in the medical supply chain, innovating continuously to meet the evolving demands of modern healthcare while maintaining our unyielding commitment to WHO-GMP compliance.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Target className="w-8 h-8 text-[#14aebc] mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">Precision</h3>
                  <p className="text-slate-500 text-sm">Every product manufactured with exacting standards.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Shield className="w-8 h-8 text-[#14aebc] mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">Safety</h3>
                  <p className="text-slate-500 text-sm">Strict adherence to international sterility protocols.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100">
                 <img src="https://placehold.co/800x600/f8fafc/00b2ce?text=Meddress+Manufacturing" alt="Meddress Facility" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">WHO-GMP Certified</h4>
                    <p className="text-sm text-slate-500">World-class manufacturing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="py-24 bg-slate-50 border-t border-slate-200" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The experts driving our commitment to excellence, quality assurance, and operational integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-50 group-hover:border-cyan-100 transition-colors">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-[#14aebc] font-medium mb-4">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
