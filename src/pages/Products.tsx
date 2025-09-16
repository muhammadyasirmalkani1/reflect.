
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CTA from "@/components/CTA";

const Products = () => {
  return (
    <div className="min-h-screen bg-reflect-dark overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
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
              Our <span className="cosmic-text-gradient">Products</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover the full suite of Reflect tools designed to enhance your thinking and productivity.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Products Section */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Product 1 */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Reflect Notes</h2>
              <p className="text-gray-300 mb-6">
                Our flagship note-taking application with bi-directional linking, AI assistance, and knowledge graph visualization.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-reflect-purple flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI-powered writing assistant</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-reflect-purple flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Knowledge graph visualization</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-reflect-purple flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>End-to-end encryption</span>
                </li>
              </ul>
              <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity">
                Learn More
              </Button>
            </div>
            <div className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
              <div className="h-8 flex items-center px-4 border-b border-white/10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Reflect Notes Interface" 
                className="w-full object-cover"
                style={{ height: '300px' }}
              />
            </div>
          </motion.div>
          
          {/* Product 2 */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center mb-24 md:flex-row-reverse"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">Reflect Mobile</h2>
              <p className="text-gray-300 mb-6">
                Take your notes on the go with our powerful mobile application, available for iOS and Android.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-reflect-purple flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Seamless sync with desktop</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-reflect-purple flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Offline access to notes</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-reflect-purple flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Voice-to-text capabilities</span>
                </li>
              </ul>
              <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity">
                Download App
              </Button>
            </div>
            <div className="order-2 md:order-1 bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Reflect Mobile App" 
                className="w-full object-cover"
                style={{ height: '300px' }}
              />
            </div>
          </motion.div>
          
          {/* Product 3 */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Reflect Teams</h2>
              <p className="text-gray-300 mb-6">
                Collaborative knowledge management for teams and organizations of all sizes.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-reflect-purple flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Shared workspaces</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-reflect-purple flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced permissions</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-reflect-purple flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Organization-wide knowledge graph</span>
                </li>
              </ul>
              <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </div>
            <div className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Reflect Teams Interface" 
                className="w-full object-cover"
                style={{ height: '300px' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <CTA />
      <Footer />
    </div>
  );
};

export default Products;
