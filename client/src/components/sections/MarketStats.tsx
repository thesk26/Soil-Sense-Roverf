import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export function MarketStats() {
  const tamSamSomData = [
    { name: 'TAM (Global)', value: 100, color: '#e5e7eb', label: '$12.8B' },
    { name: 'SAM (India)', value: 45, color: '#86efac', label: '$4.2B' },
    { name: 'SOM (Target)', value: 15, color: '#16a34a', label: '$500M' },
  ];

  return (
    <section id="market" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 blur-[150px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold">Market Potential</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Addressing a critical gap in the massive agricultural analytics market.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Charts */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold mb-6 text-center">TAM - SAM - SOM Analysis</h3>
            <div className="h-[300px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tamSamSomData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {tamSamSomData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', border: 'none', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              
              {/* Custom Legend/Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-3xl font-display font-bold text-primary">High</div>
                <div className="text-xs text-gray-400">Growth</div>
              </div>
            </div>
            
            <div className="flex justify-center gap-6 mt-6 text-sm">
              {tamSamSomData.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-gray-300">{item.name} <span className="font-bold text-white block">{item.label}</span></span>
                </div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6">
              <h4 className="text-2xl font-bold mb-2">The Problem</h4>
              <p className="text-gray-400">
                Traditional lab testing takes 10-14 days. Farmers guess fertilizer usage, leading to 
                <span className="text-red-400"> 30% yield loss</span> and soil degradation.
              </p>
            </div>
            
            <div className="border-l-4 border-white pl-6">
              <h4 className="text-2xl font-bold mb-2">Our Solution</h4>
              <p className="text-gray-400">
                Lab-grade accuracy in the field. Results in <span className="text-primary">5 minutes</span>. 
                Actionable insights that save costs and boost yield.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
               <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">60%</div>
                  <div className="text-xs text-gray-400">Cost Reduction</div>
               </div>
               <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-1">2X</div>
                  <div className="text-xs text-gray-400">Yield Improvement</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
