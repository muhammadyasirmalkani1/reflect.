
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Layout, Search, Menu, Settings } from "lucide-react";

const NavigatingTheInterface = () => {
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
            Navigating the <span className="cosmic-text-gradient">Interface</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Master the Reflect interface to work efficiently with your notes and ideas.
          </p>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-white">Interface Overview</h2>
            
            <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-3 gap-4 h-64 text-sm">
                <div className="bg-gray-700 rounded p-4 flex flex-col justify-center items-center">
                  <Menu className="w-8 h-8 text-reflect-purple mb-2" />
                  <span className="font-semibold">Sidebar</span>
                  <span className="text-gray-300 text-xs text-center mt-1">Notes, Tags, Search</span>
                </div>
                <div className="bg-gray-600 rounded p-4 flex flex-col justify-center items-center">
                  <Layout className="w-8 h-8 text-reflect-purple mb-2" />
                  <span className="font-semibold">Editor</span>
                  <span className="text-gray-300 text-xs text-center mt-1">Main writing area</span>
                </div>
                <div className="bg-gray-700 rounded p-4 flex flex-col justify-center items-center">
                  <Settings className="w-8 h-8 text-reflect-purple mb-2" />
                  <span className="font-semibold">Inspector</span>
                  <span className="text-gray-300 text-xs text-center mt-1">Links, Properties</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Main Areas</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Menu className="w-5 h-5 mr-2 text-reflect-purple" />
                  Left Sidebar
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Notes List:</strong> Browse all your notes chronologically</p>
                  <p><strong>Tags:</strong> Filter notes by tags and topics</p>
                  <p><strong>Search:</strong> Find notes quickly with full-text search</p>
                  <p><strong>Graph:</strong> Visualize connections between notes</p>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Layout className="w-5 h-5 mr-2 text-reflect-purple" />
                  Editor Area
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Writing Space:</strong> Your main area for creating and editing notes</p>
                  <p><strong>Toolbar:</strong> Quick access to formatting options</p>
                  <p><strong>AI Assistant:</strong> Get writing help and suggestions</p>
                  <p><strong>Live Preview:</strong> See formatted text as you write</p>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-reflect-purple" />
                  Right Inspector
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Backlinks:</strong> See which notes link to the current note</p>
                  <p><strong>Properties:</strong> Set metadata like tags, dates, and status</p>
                  <p><strong>Outline:</strong> Navigate through headings in long notes</p>
                  <p><strong>Related:</strong> Discover similar or connected notes</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Essential Keyboard Shortcuts</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Quick search</span>
                    <kbd className="bg-gray-700 px-2 py-1 rounded">Cmd+K</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">New note</span>
                    <kbd className="bg-gray-700 px-2 py-1 rounded">Cmd+N</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Toggle sidebar</span>
                    <kbd className="bg-gray-700 px-2 py-1 rounded">Cmd+\</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Go back</span>
                    <kbd className="bg-gray-700 px-2 py-1 rounded">Cmd+[</kbd>
                  </div>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Editing</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Bold text</span>
                    <kbd className="bg-gray-700 px-2 py-1 rounded">Cmd+B</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Italic text</span>
                    <kbd className="bg-gray-700 px-2 py-1 rounded">Cmd+I</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Insert link</span>
                    <kbd className="bg-gray-700 px-2 py-1 rounded">Cmd+L</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">AI assist</span>
                    <kbd className="bg-gray-700 px-2 py-1 rounded">Cmd+J</kbd>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Pro Tips</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-4">
                <h4 className="font-semibold text-reflect-purple mb-2">💡 Quick Capture</h4>
                <p className="text-gray-300 text-sm">
                  Use <kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Cmd+Shift+N</kbd> to quickly jot down ideas without leaving your current context.
                </p>
              </div>
              
              <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-4">
                <h4 className="font-semibold text-reflect-purple mb-2">🔍 Smart Search</h4>
                <p className="text-gray-300 text-sm">
                  Search supports operators like <code>tag:meeting</code> or <code>created:today</code> for precise filtering.
                </p>
              </div>
              
              <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-4">
                <h4 className="font-semibold text-reflect-purple mb-2">🔗 Graph View</h4>
                <p className="text-gray-300 text-sm">
                  Click on the graph icon to visualize how your notes connect and discover unexpected relationships.
                </p>
              </div>
            </div>
            
            <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-reflect-purple">Congratulations!</h3>
              <p className="text-gray-300 mb-4">
                You now know the basics of using Reflect. Ready to explore more advanced features?
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/docs/features" className="inline-flex items-center text-reflect-purple hover:underline">
                  Explore Features →
                </Link>
                <Link to="/docs/guides" className="inline-flex items-center text-reflect-purple hover:underline">
                  View Guides →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default NavigatingTheInterface;
