import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Workflow } from "@/components/sections/Workflow";
import { ScenarioSection } from "@/components/sections/ScenarioSection";
import { Features } from "@/components/sections/Features";
import { MarketStats } from "@/components/sections/MarketStats";
import { BusinessSection } from "@/components/sections/BusinessSection";
import { Leaf, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <ScenarioSection />
        <Workflow />
        <Features />
        <MarketStats />
        <BusinessSection />
        
        {/* Call to Action */}
        <section id="contact" className="py-24 bg-primary text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Dig Deeper?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Join the revolution in precision agriculture. Partner with Agri Risk Analytics today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Pre-Order Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
               <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                 <Leaf size={20} />
               </div>
               <span className="font-display font-bold text-xl">Agri Risk Analytics</span>
            </div>
            <p className="max-w-xs mb-6 text-sm">
              Empowering farmers with data-driven insights for a sustainable and profitable future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary">Soil Sense Rover</a></li>
              <li><a href="#" className="hover:text-primary">Bhoomi Darpan App</a></li>
              <li><a href="#" className="hover:text-primary">Enterprise API</a></li>
              <li><a href="#" className="hover:text-primary">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
          © 2024 Agri Risk Analytics. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
