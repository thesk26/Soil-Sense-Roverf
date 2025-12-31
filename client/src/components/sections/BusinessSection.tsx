import { motion } from "framer-motion";
import { DollarSign, Map, Users, Target, ShoppingBag, RefreshCw } from "lucide-react";

export function BusinessSection() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Business Strategy</span>
          <h2 className="text-4xl font-display font-bold mt-2 text-foreground">Growth & Sustainability</h2>
        </div>

        {/* Revenue Model */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <DollarSign className="text-primary" /> Revenue Model
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Hardware Sales", icon: <ShoppingBag />, desc: "Direct sales of Soil Sense Rover units to FPOs and large farmers." },
              { title: "SaaS Subscription", icon: <RefreshCw />, desc: "Recurring revenue from Bhoomi Darpan Pro app features and API access." },
              { title: "Consumables", icon: <Target />, desc: "Recurring sales of chemical reagent refills for testing kits." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-border"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Roadmap & Customers Split */}
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Roadmap */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Map className="text-primary" /> Roadmap
            </h3>
            <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:h-full before:w-0.5 before:bg-gray-200">
              {[
                { phase: "Phase 1: R&D", year: "2024", desc: "Prototype completion and lab validation." },
                { phase: "Phase 2: Pilot", year: "2025 Q1", desc: "Deployment in 50 villages across Maharashtra." },
                { phase: "Phase 3: Launch", year: "2025 Q3", desc: "Pan-India commercial launch and B2B partnerships." }
              ].map((item, i) => (
                <div key={i} className="relative pl-10">
                  <div className="absolute left-0 top-1 w-6 h-6 bg-white border-4 border-primary rounded-full z-10"></div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-border">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded mb-2 inline-block">{item.year}</span>
                    <h4 className="font-bold">{item.phase}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Target Customers */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Users className="text-primary" /> Target Customers
            </h3>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: "Individual Farmers", sub: "Medium to Large landholders", color: "bg-green-100 text-green-800" },
                 { label: "FPOs & Co-ops", sub: "Community farming groups", color: "bg-blue-100 text-blue-800" },
                 { label: "Agri-Input Firms", sub: "Fertilizer companies", color: "bg-orange-100 text-orange-800" },
                 { label: "Govt Agencies", sub: "Soil Health Card schemes", color: "bg-purple-100 text-purple-800" }
               ].map((cust, i) => (
                 <div key={i} className={`${cust.color} p-6 rounded-xl flex flex-col justify-center h-32`}>
                   <span className="font-bold text-lg leading-tight">{cust.label}</span>
                   <span className="text-xs opacity-80 mt-1">{cust.sub}</span>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
