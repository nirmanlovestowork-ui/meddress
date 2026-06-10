import React, { useEffect } from 'react';

import SujitSahoo from '../images/team/sujit_sahoo.jpeg';
import JoshnaraniSahoo from '../images/team/joshnarani_sahoo.jpeg';
import UllasPradhan from '../images/team/ullas_pradhan.jpeg';

export default function OurTeam() {
  useEffect(() => {
    // Scroll to the very top when this page is opened
    window.scrollTo(0, 0);
  }, []);

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
    <div className="w-full bg-slate-50 text-slate-800 pt-16 pb-24" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
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
  );
}
