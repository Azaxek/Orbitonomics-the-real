
import React from 'react';
// Added Satellite to imports
import { Target, Eye, Rocket, ShieldCheck, Cpu, Globe, Satellite } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">Our Mission</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Orbitonomics, we believe that the vantage point of space can solve some of the most pressing challenges on Earth.
          </p>
        </div>
      </section>

      {/* Vision/Mission Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-10 rounded-3xl">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Purpose</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Founded in 2023, Orbitonomics was born from a simple observation: disaster response is often slowed by a lack of real-time situational awareness. Traditional maps fail when the landscape changes overnight.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                We provide the critical layer of intelligence needed to navigate chaos, ensuring that help reaches the right places faster than ever before.
              </p>
            </div>
            
            <div className="bg-blue-600 p-10 rounded-3xl text-white">
              <div className="w-16 h-16 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-8">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                We envision a world where no community is "off the grid" during a disaster. Through a global network of satellite analysis, we aim to map every vulnerable region on the planet.
              </p>
              <ul className="space-y-4">
                {[
                  "Global Coverage for Vulnerable Regions",
                  "Sub-meter Mapping Accuracy",
                  "Instant Safe-Route Generation",
                  "AI-Powered Predictive Modeling"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={14} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
              <div className="relative z-10 w-full aspect-square bg-slate-900 rounded-3xl shadow-2xl flex items-center justify-center p-12 overflow-hidden border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
                  alt="Satellite Mesh" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <Satellite className="relative z-10 w-full h-full text-blue-400" />
              </div>
            </div>
            <div>
              <div className="text-blue-600 font-bold mb-4 uppercase tracking-widest text-sm">Founder & CEO</div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Aryav Agrawal</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Aryav Agrawal founded Orbitonomics with a deep commitment to humanitarian technology. With a background in aerospace systems and spatial analytics, Aryav saw a gap between space exploration and practical earth applications.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Under his leadership, Orbitonomics has rapidly expanded from a concept into a vital tool for NGOs and government agencies across three countries, mapping over 3,000 high-risk regions in its first year.
              </p>
              <div className="flex gap-4">
                <div className="flex-1 p-6 bg-white rounded-2xl border border-slate-200">
                  <div className="text-blue-600 font-bold text-2xl mb-1">2023</div>
                  <div className="text-sm text-slate-500">Year Founded</div>
                </div>
                <div className="flex-1 p-6 bg-white rounded-2xl border border-slate-200">
                  <div className="text-blue-600 font-bold text-2xl mb-1">Global</div>
                  <div className="text-sm text-slate-500">Operation Focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Technology Stack</h2>
            <p className="text-slate-600">The engine behind our impact mapping.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-100 rounded-2xl hover:border-blue-200 transition-colors">
              <Satellite className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Multi-Spectral Imaging</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We utilize multispectral satellite feeds to see through smoke, clouds, and darkness to get a clear picture of the ground situation.</p>
            </div>
            
            <div className="p-8 border border-slate-100 rounded-2xl hover:border-blue-200 transition-colors">
              <Cpu className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Edge-AI Processing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Proprietary algorithms process raw data in real-time to detect building damage, road blockages, and flood levels.</p>
            </div>
            
            <div className="p-8 border border-slate-100 rounded-2xl hover:border-blue-200 transition-colors">
              <Globe className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Dynamic Routing API</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Integrates with emergency dispatch systems to provide live safe-route navigation for responders on the move.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
