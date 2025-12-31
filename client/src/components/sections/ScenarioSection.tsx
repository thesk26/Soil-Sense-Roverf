import { motion } from "framer-motion";
import { AlertTriangle, Droplets, Mountain } from "lucide-react";

export function ScenarioSection() {
  return (
    <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/criss-cross.png')" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-wider mb-4 border border-white/20">CURRENT SCENARIO</div>
            <h2 className="text-4xl font-display font-bold mb-6">Indian Agriculture & <br/>Soil Health Crisis</h2>
            <p className="text-emerald-100 text-lg leading-relaxed mb-6">
              With 60% of India's population depending on agriculture, soil degradation is a national emergency. Traditional testing methods are slow, expensive, and inaccessible to smallholder farmers.
            </p>
            <div className="p-4 bg-white/5 border-l-4 border-yellow-500 rounded-r-lg backdrop-blur-sm">
              <p className="italic text-sm text-gray-300">"Soil is not just a resource; it is the legacy we leave for future generations."</p>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="grid gap-6"
          >
            {[
              { icon: <Mountain size={28} className="text-red-400" />, title: "5.3 Billion Tonnes", desc: "Soil eroded annually in India due to poor management." },
              { icon: <AlertTriangle size={28} className="text-orange-400" />, title: "Nutrient Deficiency", desc: "Widespread lack of Nitrogen, Phosphorus, and Zinc reducing yields." },
              { icon: <Droplets size={28} className="text-blue-400" />, title: "Water Efficiency", desc: "Poor soil health leads to 30% wastage of irrigation water." }
            ].map((stat, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="mt-1">{stat.icon}</div>
                <div>
                  <h3 className="font-bold text-xl">{stat.title}</h3>
                  <p className="text-sm text-emerald-100/70">{stat.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
