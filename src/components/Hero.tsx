
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-28 pb-20">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-reflect-purple/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Think better with{" "}
            <span className="cosmic-text-gradient">Reflect</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AI-powered notes that help you remember everything and connect ideas in ways you never imagined.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity text-lg py-6 px-8">
              Get Started for Free
            </Button>
            <Button variant="outline" className="border-reflect-purple/50 hover:bg-reflect-purple/10 text-white text-lg py-6 px-8">
              Watch Demo
            </Button>
          </motion.div>
          
          <motion.div
            className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-cosmic-gradient opacity-5 z-0"></div>
            <div className="p-1 bg-gradient-to-r from-reflect-purple/30 to-reflect-blue/30 rounded-2xl">
              <div className="bg-reflect-dark/80 backdrop-blur-sm w-full h-full rounded-xl p-2">
                <div className="h-8 flex items-center px-4 border-b border-white/10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"
                  alt="Reflect app interface" 
                  className="w-full rounded-b-lg object-cover"
                  style={{ height: '400px' }}
                />
              </div>
            </div>
            
            {/* Visual elements */}
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-reflect-purple/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-60 h-60 bg-reflect-blue/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
