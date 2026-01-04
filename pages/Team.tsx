
import React from 'react';
import { Linkedin, Twitter, Mail, Satellite } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-32 pb-32">
      {/* Header */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">Our Leadership</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Pioneering the next generation of humanitarian space technology.
          </p>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden flex-shrink-0 shadow-lg bg-blue-600 flex items-center justify-center p-12 rotate-3 transition-transform hover:rotate-0 duration-500">
                <Satellite className="w-full h-full text-white" />
              </div>
              <div>
                <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">Founder & CEO</div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-4xl font-bold text-slate-900">Aryav Agrawal</h2>
                </div>
                <p className="text-blue-600 font-medium mb-6">Aerospace Strategist & Social Entrepreneur</p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Aryav founded Orbitonomics in 2023 with a mission to democratize satellite data for humanitarian aid. His expertise in spatial systems and passion for global safety have driven the company's rapid growth from a research project to an international operations hub.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={20} /></a>
                  <a href="#" className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all"><Twitter size={20} /></a>
                  <a href="#" className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all"><Mail size={20} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
