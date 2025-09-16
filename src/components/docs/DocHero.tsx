
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { List } from "lucide-react";

interface DocHeroProps {
  popularArticles: string[];
}

const DocHero = ({ popularArticles }: DocHeroProps) => {
  return (
    <div className="pt-32 pb-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-reflect-purple/10 rounded-full blur-3xl opacity-50" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Documentation <span className="cosmic-text-gradient">Center</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to get the most out of Reflect.
          </motion.p>
          
          {/* View All Pages Button */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/docs/all">
              <Button variant="outline" className="border-reflect-purple/30 hover:bg-reflect-purple/10">
                <List className="mr-2" size={18} /> View All Pages
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            className="max-w-2xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search the documentation..." 
                className="w-full bg-reflect-dark/70 border border-white/20 focus:border-reflect-purple text-white rounded-lg px-4 py-3 pl-12 outline-none"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            </div>
            
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {popularArticles.map((article, index) => (
                <button 
                  key={index} 
                  className="text-sm bg-reflect-dark/80 border border-white/10 hover:border-reflect-purple/50 rounded-full px-4 py-1 transition-colors"
                >
                  {article}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DocHero;
