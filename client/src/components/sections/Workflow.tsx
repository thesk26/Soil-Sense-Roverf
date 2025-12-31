import { motion } from "framer-motion";
import { Database, Smartphone, FileText, CheckCircle } from "lucide-react";
import sampleImage from "@assets/generated_images/close_up_of_soil_sample_collection.png";
import appImage from "@assets/generated_images/bhoomi_darpan_mobile_app_interface_on_a_phone.png";

const steps = [
  {
    id: 1,
    title: "Collection",
    desc: "Farmer collects soil sample in a specialized transparent container.",
    icon: <Database className="text-primary" size={24} />,
    image: sampleImage,
  },
  {
    id: 2,
    title: "Analysis",
    desc: "Container is placed in the Rover. Sensors analyze NPK & pH levels instantly.",
    icon: <CheckCircle className="text-primary" size={24} />,
    // Using a placeholder div for visual variety or re-using rover image in a small card
    customVisual: true
  },
  {
    id: 3,
    title: "Sync",
    desc: "Data syncs via Bluetooth/Wi-Fi to the Bhoomi Darpan mobile app.",
    icon: <Smartphone className="text-primary" size={24} />,
    image: appImage,
  },
  {
    id: 4,
    title: "Action",
    desc: "Generate comprehensive PDF reports and get actionable fertilizer recommendations.",
    icon: <FileText className="text-primary" size={24} />,
    isLast: true,
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">How It Works</span>
          <h2 className="text-4xl font-display font-bold mt-2 text-foreground">Field to Phone in Seconds</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-background rounded-2xl p-6 shadow-lg border border-border hover:border-primary/50 transition-all hover:-translate-y-2 h-full flex flex-col items-center text-center relative overflow-hidden">
                  
                  {/* Step Number Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-secondary-foreground text-sm">
                    {step.id}
                  </div>

                  <div className="mb-6 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step.desc}</p>
                  
                  {step.image && (
                    <div className="mt-auto w-full h-32 rounded-lg overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
                        <img src={step.image} alt={step.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  )}
                  {step.customVisual && (
                     <div className="mt-auto w-full h-32 rounded-lg bg-gray-100 flex items-center justify-center relative overflow-hidden">
                        <div className="w-16 h-16 bg-primary/20 rounded-full animate-ping absolute"></div>
                        <div className="w-8 h-8 bg-primary rounded-full relative z-10"></div>
                     </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
