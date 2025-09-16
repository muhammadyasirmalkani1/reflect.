
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-cosmic-radial opacity-20" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          className="bg-reflect-dark/60 backdrop-blur-lg border border-white/10 rounded-3xl p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start thinking <span className="cosmic-text-gradient">better</span> today
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of knowledge workers who have transformed how they capture and connect ideas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity text-lg py-6 px-8">
              Try Reflect for Free
            </Button>
            <Button variant="outline" className="border-reflect-purple/50 hover:bg-reflect-purple/10 text-white text-lg py-6 px-8">
              Schedule a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTA;
