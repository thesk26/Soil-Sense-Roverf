import { motion } from "framer-motion";
import { ArrowDown, Cpu, Wifi, Activity } from "lucide-react";
import heroBg from "@assets/generated_images/cinematic_farm_field_landscape_at_sunrise.png";
import roverImage from "@assets/generated_images/futuristic_soil_sense_rover_device_in_a_farm_setting.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax effect could go here, but simple absolute is fine for now */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Farm Background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary-foreground">
              Next Gen Agri-Tech
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-shadow">
            Soil Sense <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Rover
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
            The future of precision agriculture. Instant soil analysis, AI-driven insights, and seamless connectivity for smarter farming decisions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/25">
              Explore Features
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-lg font-bold transition-all">
              Watch Video
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Cpu size={18} className="text-primary" />
              <span>AI Processor</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi size={18} className="text-primary" />
              <span>IoT Connected</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity size={18} className="text-primary" />
              <span>Real-time Data</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Floating Effect */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/20 backdrop-blur-sm group">
                <img 
                  src={roverImage} 
                  alt="Soil Sense Rover" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* HUD Overlay Elements */}
                <div className="absolute top-10 right-10 bg-black/60 backdrop-blur-md p-4 rounded-lg border border-primary/30 text-white text-xs">
                   <div className="flex items-center gap-2 mb-2">
                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                     <span className="font-mono text-primary">SYSTEM ACTIVE</span>
                   </div>
                   <div className="space-y-1 font-mono text-gray-400">
                     <div className="flex justify-between gap-4"><span>N</span> <span className="text-white">45 mg/kg</span></div>
                     <div className="flex justify-between gap-4"><span>P</span> <span className="text-white">12 mg/kg</span></div>
                     <div className="flex justify-between gap-4"><span>K</span> <span className="text-white">180 mg/kg</span></div>
                   </div>
                </div>
             </div>
          </motion.div>
          
          {/* Decorative blurred glow behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full z-0" />
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <ArrowDown />
      </motion.div>
    </section>
  );
}
