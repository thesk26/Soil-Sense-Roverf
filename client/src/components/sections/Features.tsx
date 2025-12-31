import { motion } from "framer-motion";
import { Check, ShieldCheck, Sprout, TrendingUp, BarChart3, Users, Globe } from "lucide-react";
import appImage from "@assets/generated_images/bhoomi_darpan_mobile_app_interface_on_a_phone.png";

export function Features() {
  const features = [
    { title: "Instant Analysis", icon: <TrendingUp />, desc: "Get soil nutrient data (N, P, K, pH) in under 5 minutes." },
    { title: "AI Recommendations", icon: <Sprout />, desc: "Machine learning models suggest exact fertilizer dosage." },
    { title: "Cloud Sync", icon: <Globe />, desc: "Data is automatically stored and synced to the cloud." },
    { title: "Portable Design", icon: <ShieldCheck />, desc: "Rugged, lightweight, and battery-powered for field use." },
  ];

  return (
    <section id="product" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Mobile Integration</span>
            <h2 className="text-4xl font-display font-bold mt-2 mb-6">Bhoomi Darpan App</h2>
            <p className="text-muted-foreground text-lg mb-8">
              The companion app that turns data into decisions. Visualize soil health trends, manage multiple farm plots, and generate professional PDF reports for banking and insurance compliance.
            </p>
            
            <ul className="space-y-4 mb-8">
              {["Multi-language Support (Regional)", "Historical Data Tracking", "Offline Mode Capability", "Direct Expert Connection"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-primary flex items-center justify-center">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="font-medium text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <button className="px-6 py-3 bg-foreground text-background rounded-lg font-bold hover:bg-foreground/90 transition-colors">
              Download Brochure
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl transform scale-90"></div>
            <img 
              src={appImage} 
              alt="Bhoomi Darpan App" 
              className="relative z-10 max-h-[600px] w-auto drop-shadow-2xl rounded-[3rem] border-8 border-gray-900"
            />
            
            {/* Floating Feature Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -left-10 top-1/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-border max-w-[180px] hidden md:block"
            >
              <BarChart3 className="text-primary mb-2" />
              <div className="font-bold text-sm">Visual Analytics</div>
              <div className="text-xs text-muted-foreground">Easy to read charts</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute -right-5 bottom-1/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-border max-w-[180px] hidden md:block"
            >
              <Users className="text-secondary-foreground mb-2" />
              <div className="font-bold text-sm">Community</div>
              <div className="text-xs text-muted-foreground">Connect with experts</div>
            </motion.div>

          </motion.div>

        </div>

        {/* Feature Grid */}
        <div className="mt-32 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
