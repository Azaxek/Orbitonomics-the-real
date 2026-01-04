
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Map as MapIcon, 
  Shield, 
  Activity, 
  Globe, 
  ChevronRight,
  TrendingUp,
  Layout,
  Satellite
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
                <Activity size={16} className="mr-2" />
                Founded in 2023 by Aryav Agrawal
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                Transforming <span className="text-blue-600">Disaster Response</span> with Satellite Impact Maps
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
                Orbitonomics provides rapid, precise satellite-derived data to empower emergency responders and planners in high-risk zones globally.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                  to="/impact"
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  Explore Our Impact <ArrowRight size={20} />
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold shadow-md border border-slate-100 hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block relative animate-in zoom-in duration-1000">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200" 
                  alt="Satellite View of Earth" 
                  className="w-full h-auto object-cover aspect-[4/3] opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass p-4 rounded-xl border border-white/20">
                    <p className="text-white text-sm font-medium">Real-time spectral analysis of disaster-stricken zones</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl max-w-xs border border-white/50 animate-bounce transition-all hover:scale-105 duration-1000">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 bg-blue-600 rounded-lg text-white">
                    <MapIcon size={20} />
                  </div>
                  <div className="text-sm font-bold text-slate-900 uppercase tracking-wider">Regions Mapped</div>
                </div>
                <div className="text-3xl font-extrabold text-blue-600">3,000+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 rounded-3xl bg-slate-50 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="inline-flex p-4 rounded-2xl bg-blue-100 text-blue-600 mb-6">
                <Globe size={32} />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">3,000+</h3>
              <p className="text-slate-600 font-medium">Disaster-prone regions mapped globally</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-slate-50 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="inline-flex p-4 rounded-2xl bg-indigo-100 text-indigo-600 mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">640</h3>
              <p className="text-slate-600 font-medium">Safety routes developed for public safety</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-slate-50 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="inline-flex p-4 rounded-2xl bg-sky-100 text-sky-600 mb-6">
                <Layout size={32} />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">3</h3>
              <p className="text-slate-600 font-medium">Countries currently under our protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Revolutionary Technology for Humanitarian Impact</h2>
            <p className="text-lg text-slate-600">Orbitonomics combines high-frequency satellite feeds with advanced spatial analysis to save lives when every second counts.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Impact Assessment", 
                desc: "Identify damage zones within minutes of a disaster using automated satellite comparison.",
                icon: <Activity className="w-6 h-6" />
              },
              { 
                title: "Safety Route Optimization", 
                desc: "Real-time routing for public buildings that bypasses blocked roads and dangerous terrain.",
                icon: <TrendingUp className="w-6 h-6" />
              },
              { 
                title: "Resilience Mapping", 
                desc: "Predict future risk zones based on historical data and environmental topography.",
                icon: <MapIcon className="w-6 h-6" />
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Callout */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-2xl flex-shrink-0 bg-slate-900 p-1">
              <img 
                src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=600" 
                alt="Satellite in orbit" 
                className="w-full h-full object-cover rounded-[2.2rem]"
              />
            </div>
            <div>
              <div className="text-blue-200 font-semibold mb-2 uppercase tracking-widest text-sm">Our Founder's Vision</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">"Technology is most powerful when it serves those in their most vulnerable moments."</h2>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Satellite className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-xl font-bold">Aryav Agrawal</div>
                  <div className="text-blue-200">Founder & CEO, Orbitonomics</div>
                </div>
                <div className="h-10 w-px bg-white/20 hidden sm:block"></div>
                <Link to="/about" className="text-white hover:underline flex items-center gap-2 font-medium">Read our story <ChevronRight size={18} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
