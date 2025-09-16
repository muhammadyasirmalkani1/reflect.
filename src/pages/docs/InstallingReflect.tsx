
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Smartphone, Globe, Monitor } from "lucide-react";

const InstallingReflect = () => {
  return (
    <div className="min-h-screen bg-reflect-dark flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 max-w-4xl mx-auto px-6">
        <Link to="/docs/getting-started" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Getting Started
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Installing <span className="cosmic-text-gradient">Reflect</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Get Reflect running on all your devices in just a few minutes.
          </p>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-white">Choose Your Platform</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Monitor className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-3">Desktop App</h3>
                <p className="text-gray-300 mb-4">
                  Download the native desktop application for the best performance and offline access.
                </p>
                <div className="space-y-2">
                  <button className="w-full bg-reflect-purple hover:bg-reflect-purple/80 text-white px-4 py-2 rounded-lg transition-colors">
                    <Download className="w-4 h-4 inline mr-2" />
                    Download for macOS
                  </button>
                  <button className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
                    <Download className="w-4 h-4 inline mr-2" />
                    Download for Windows
                  </button>
                  <button className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
                    <Download className="w-4 h-4 inline mr-2" />
                    Download for Linux
                  </button>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Smartphone className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-3">Mobile App</h3>
                <p className="text-gray-300 mb-4">
                  Take your notes on the go with our mobile applications.
                </p>
                <div className="space-y-2">
                  <button className="w-full bg-reflect-purple hover:bg-reflect-purple/80 text-white px-4 py-2 rounded-lg transition-colors">
                    <Download className="w-4 h-4 inline mr-2" />
                    Download for iOS
                  </button>
                  <button className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
                    <Download className="w-4 h-4 inline mr-2" />
                    Download for Android
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6 mb-8">
              <Globe className="w-8 h-8 text-reflect-purple mb-4" />
              <h3 className="text-lg font-semibold mb-3">Web App</h3>
              <p className="text-gray-300 mb-4">
                Access Reflect directly from your browser - no installation required.
              </p>
              <button className="bg-reflect-purple hover:bg-reflect-purple/80 text-white px-6 py-2 rounded-lg transition-colors">
                Launch Web App
              </button>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-white">Installation Steps</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-reflect-purple w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold mb-2">Download the app</h4>
                  <p className="text-gray-300">Choose your platform and download the appropriate installer.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-reflect-purple w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold mb-2">Run the installer</h4>
                  <p className="text-gray-300">Follow the on-screen instructions to install Reflect on your device.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-reflect-purple w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold mb-2">Create your account</h4>
                  <p className="text-gray-300">Sign up for a new account or log in with your existing credentials.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-reflect-purple w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h4 className="font-semibold mb-2">Start taking notes</h4>
                  <p className="text-gray-300">You're all set! Begin creating your first note.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-reflect-purple">Next Steps</h3>
              <p className="text-gray-300 mb-4">
                Now that you have Reflect installed, let's create your first note.
              </p>
              <Link to="/docs/creating-your-first-note" className="inline-flex items-center text-reflect-purple hover:underline">
                Creating your first note →
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default InstallingReflect;
