
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Keyboard, Search, Edit, Navigation } from "lucide-react";

const KeyboardShortcuts = () => {
  return (
    <div className="min-h-screen bg-reflect-dark flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 max-w-4xl mx-auto px-6">
        <Link to="/docs/advanced" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Advanced
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Keyboard <span className="cosmic-text-gradient">Shortcuts</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Master Reflect with these keyboard shortcuts to work faster and more efficiently.
          </p>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
              <Navigation className="w-6 h-6 mr-3 text-reflect-purple" />
              Navigation
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Basic Navigation</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Quick search</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+K</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Command palette</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+Shift+P</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Go back</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+[</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Go forward</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+]</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Toggle sidebar</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+\</kbd>
                  </div>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Note Navigation</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Jump to note</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+O</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Random note</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+Shift+R</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Graph view</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+G</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Daily note</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+D</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Note info</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+I</kbd>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
              <Edit className="w-6 h-6 mr-3 text-reflect-purple" />
              Editing
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Note Creation</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">New note</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+N</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Quick capture</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+Shift+N</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">From template</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+T</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Duplicate note</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+Shift+D</kbd>
                  </div>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Text Formatting</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Bold</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+B</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Italic</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+I</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Code</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+E</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Strikethrough</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+Shift+X</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Highlight</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+Shift+H</kbd>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Links & References</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Insert link</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+L</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Link to note</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">[[</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Block reference</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+Shift+B</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Add tag</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">#</kbd>
                  </div>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">AI & Automation</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">AI assistant</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+J</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">AI rewrite</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+Shift+J</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Quick summary</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+Shift+S</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Auto-complete</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Tab</kbd>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
              <Search className="w-6 h-6 mr-3 text-reflect-purple" />
              Search & Organization
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Search</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Global search</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+F</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Search in note</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+Shift+F</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Replace</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+Shift+R</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Search tags</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+Shift+T</kbd>
                  </div>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Organization</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Toggle outline</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+Shift+O</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Fold/unfold</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+.</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Archive note</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+Shift+A</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Delete note</span>
                    <kbd className="bg-gray-700 px-3 py-1 rounded">Cmd+Del</kbd>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Windows/Linux Shortcuts</h2>
            
            <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6 mb-8">
              <p className="text-gray-300 mb-4">
                For Windows and Linux users, replace <kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Cmd</kbd> with <kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Ctrl</kbd> in all shortcuts above.
              </p>
              <p className="text-gray-300 text-sm">
                Some shortcuts may vary slightly on different platforms. Check the menu items for platform-specific shortcuts.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-4">
                <h4 className="font-semibold text-reflect-purple mb-2">💡 Customization</h4>
                <p className="text-gray-300 text-sm">
                  You can customize most keyboard shortcuts in Settings → Keyboard Shortcuts. Create your own shortcuts for frequently used actions.
                </p>
              </div>
              
              <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-4">
                <h4 className="font-semibold text-reflect-purple mb-2">🎯 Pro Tip</h4>
                <p className="text-gray-300 text-sm">
                  Learn 5-10 shortcuts at a time. Focus on the ones you'll use most often, then gradually expand your repertoire.
                </p>
              </div>
            </div>
            
            <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-reflect-purple">Master Your Workflow</h3>
              <p className="text-gray-300 mb-4">
                These shortcuts will significantly speed up your note-taking and knowledge management. Practice the most relevant ones for your workflow.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/docs/custom-templates" className="inline-flex items-center text-reflect-purple hover:underline">
                  Custom Templates →
                </Link>
                <Link to="/docs/advanced-search" className="inline-flex items-center text-reflect-purple hover:underline">
                  Advanced Search →
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

export default KeyboardShortcuts;
