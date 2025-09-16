
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Plus, Type, Hash, Link as LinkIcon } from "lucide-react";

const CreatingYourFirstNote = () => {
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
            Creating Your <span className="cosmic-text-gradient">First Note</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Learn the basics of creating and formatting notes in Reflect.
          </p>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-white">Creating a New Note</h2>
            
            <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Plus className="w-5 h-5 mr-2 text-reflect-purple" />
                Quick Start
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>• Press <kbd className="bg-gray-700 px-2 py-1 rounded text-sm">Cmd+N</kbd> (Mac) or <kbd className="bg-gray-700 px-2 py-1 rounded text-sm">Ctrl+N</kbd> (Windows) to create a new note</p>
                <p>• Click the "+" button in the sidebar</p>
                <p>• Use the quick capture feature with <kbd className="bg-gray-700 px-2 py-1 rounded text-sm">Cmd+Shift+N</kbd></p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Basic Formatting</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Type className="w-6 h-6 text-reflect-purple mb-3" />
                <h3 className="text-lg font-semibold mb-3">Text Formatting</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><strong>**Bold text**</strong> - Make text bold</p>
                  <p><em>*Italic text*</em> - Make text italic</p>
                  <p><code>`Code text`</code> - Inline code</p>
                  <p><span className="line-through">~~Strikethrough~~</span> - Cross out text</p>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Hash className="w-6 h-6 text-reflect-purple mb-3" />
                <h3 className="text-lg font-semibold mb-3">Headings</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p># Main Heading (H1)</p>
                  <p>## Section Heading (H2)</p>
                  <p>### Subsection (H3)</p>
                  <p>#### Minor Heading (H4)</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Smart Features</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <LinkIcon className="w-6 h-6 text-reflect-purple mb-3" />
                <h3 className="text-lg font-semibold mb-3">Linking Notes</h3>
                <p className="text-gray-300 mb-3">
                  Create connections between your notes using double brackets:
                </p>
                <div className="bg-gray-800 p-3 rounded text-sm font-mono">
                  [[Note Title]] - Links to another note
                </div>
                <p className="text-gray-300 mt-3 text-sm">
                  Reflect will automatically suggest existing notes as you type.
                </p>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Hash className="w-6 h-6 text-reflect-purple mb-3" />
                <h3 className="text-lg font-semibold mb-3">Tags</h3>
                <p className="text-gray-300 mb-3">
                  Organize your notes with tags:
                </p>
                <div className="bg-gray-800 p-3 rounded text-sm font-mono">
                  #productivity #ideas #meeting-notes
                </div>
                <p className="text-gray-300 mt-3 text-sm">
                  Tags help you find related notes and build topic clusters.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Example Note Structure</h2>
            
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 mb-8">
              <div className="font-mono text-sm space-y-2">
                <div className="text-yellow-400"># Project Meeting Notes</div>
                <div className="text-gray-400">*Date: 2024-01-15*</div>
                <div className="text-gray-300"></div>
                <div className="text-blue-400">## Attendees</div>
                <div className="text-gray-300">- [[John Smith]]</div>
                <div className="text-gray-300">- [[Sarah Johnson]]</div>
                <div className="text-gray-300"></div>
                <div className="text-blue-400">## Key Decisions</div>
                <div className="text-gray-300">We decided to move forward with the new **feature roadmap**.</div>
                <div className="text-gray-300"></div>
                <div className="text-purple-400">#meeting #project #roadmap</div>
              </div>
            </div>
            
            <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-reflect-purple">Next Steps</h3>
              <p className="text-gray-300 mb-4">
                Great! Now let's explore how to navigate the Reflect interface effectively.
              </p>
              <Link to="/docs/navigating-the-interface" className="inline-flex items-center text-reflect-purple hover:underline">
                Navigating the interface →
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default CreatingYourFirstNote;
