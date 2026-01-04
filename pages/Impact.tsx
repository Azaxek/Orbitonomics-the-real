
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { Shield, MapPin, Navigation, TrendingUp } from 'lucide-react';

const Impact: React.FC = () => {
  const regionData = [
    { name: 'Coastal Regions', value: 1200, color: '#2563eb' },
    { name: 'Mountainous Areas', value: 850, color: '#3b82f6' },
    { name: 'Urban Centers', value: 640, color: '#60a5fa' },
    { name: 'Rural Settlements', value: 310, color: '#93c5fd' },
  ];

  const safetyRouteData = [
    { country: 'Region A', routes: 240 },
    { country: 'Region B', routes: 180 },
    { country: 'Region C', routes: 220 },
  ];

  return (
    <div className="pt-24 lg:pt-32">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-blue-500 h-full"></div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Global Impact</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Quantifying the safety and resilience we've built across 3 countries and 3,000+ mapped regions.
          </p>
        </div>
      </section>

      {/* Impact Stats Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-4">
                <MapPin className="text-blue-600" />
                Regional Coverage Analysis
              </h2>
              <div className="h-[400px] w-full bg-slate-50 rounded-3xl p-6 mb-8 border border-slate-100">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={regionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {regionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                    />
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {regionData.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm font-medium text-slate-600">{item.name}</span>
                      <span className="text-sm font-bold text-slate-900 ml-auto">{item.value}</span>
                    </div>
                  ))}
                </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-4">
                <Navigation className="text-blue-600" />
                Safety Route Development
              </h2>
              <div className="h-[400px] w-full bg-slate-50 rounded-3xl p-6 border border-slate-100 mb-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={safetyRouteData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="country" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                    <Tooltip 
                      cursor={{ fill: 'rgba(59, 130, 246, 0.05)' }}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                    />
                    <Bar dataKey="routes" fill="#2563eb" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                <h4 className="text-blue-800 font-bold mb-2">Did you know?</h4>
                <p className="text-blue-700 text-sm leading-relaxed">
                  Our routes have reduced emergency evacuation times by an average of 22% in the regions we currently monitor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Map Placeholder */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Live Impact Zones</h2>
            <p className="text-slate-600">Simulated satellite overlay of active mapping zones.</p>
          </div>
          
          <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white">
            <img 
              src="https://picsum.photos/seed/map/1200/600" 
              alt="Global Impact Map" 
              className="w-full h-auto object-cover opacity-90 transition-transform duration-[20s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
            
            {/* Pulsing Markers */}
            <div className="absolute top-1/4 left-1/3 w-6 h-6">
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
              <div className="absolute inset-1 bg-blue-600 rounded-full border-2 border-white"></div>
            </div>
            <div className="absolute top-1/2 right-1/4 w-6 h-6">
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
              <div className="absolute inset-1 bg-blue-600 rounded-full border-2 border-white"></div>
            </div>
            <div className="absolute bottom-1/3 left-1/2 w-6 h-6">
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
              <div className="absolute inset-1 bg-blue-600 rounded-full border-2 border-white"></div>
            </div>
            
            <div className="absolute bottom-10 left-10 glass p-6 rounded-2xl max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-slate-800 uppercase">Live Feed Active</span>
              </div>
              <div className="text-sm text-slate-600 leading-tight">
                Current data resolution: 0.5m GSD across all 3 monitoring nations.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Callout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Missions Completed", value: "142", icon: <TrendingUp size={24} /> },
              { label: "Safety Routes", value: "640", icon: <Shield size={24} /> },
              { label: "Partner Agencies", value: "12", icon: <Navigation size={24} /> },
              { label: "Lives Impacted", value: "250K+", icon: <TrendingUp size={24} /> },
            ].map((stat, i) => (
              <div key={i} className="p-8 text-center rounded-2xl bg-slate-50 border border-slate-100 transition-transform hover:-translate-y-2">
                <div className="inline-flex p-3 rounded-xl bg-blue-100 text-blue-600 mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
