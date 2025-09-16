
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Network, Brain, Search, Link as LinkIcon, Zap } from "lucide-react";

const KnowledgeGraph = () => {
  return (
    <div className="min-h-screen bg-reflect-dark flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 max-w-5xl mx-auto px-6">
        <Link to="/docs/features" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Features
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Knowledge <span className="cosmic-text-gradient">Graph</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Visualize and discover connections between your ideas with Reflect's intelligent knowledge graph that maps your thinking patterns.
          </p>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-white">Understanding the Knowledge Graph</h2>
            
            <p className="text-gray-300 mb-6">
              The Knowledge Graph is a visual representation of all your notes and the relationships between them. 
              It automatically identifies connections based on shared concepts, linked references, and semantic similarities.
            </p>

            {/* Interactive Knowledge Graph Visualization */}
            <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Interactive Knowledge Graph View</h3>
              <div className="bg-black/30 rounded-lg h-80 relative overflow-hidden">
                {/* Simulated graph nodes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Central node */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-reflect-purple rounded-full flex items-center justify-center text-sm font-medium">
                        Project
                      </div>
                    </div>
                    
                    {/* Connected nodes */}
                    <div className="absolute top-20 left-1/3">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xs">
                        Ideas
                      </div>
                    </div>
                    
                    <div className="absolute top-1/3 right-20">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-xs">
                        Tasks
                      </div>
                    </div>
                    
                    <div className="absolute bottom-20 left-1/4">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-xs">
                        Notes
                      </div>
                    </div>
                    
                    <div className="absolute bottom-1/3 right-1/3">
                      <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-xs">
                        Research
                      </div>
                    </div>
                    
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      <line x1="50%" y1="50%" x2="33%" y2="20%" stroke="#a855f7" strokeWidth="2" opacity="0.6" />
                      <line x1="50%" y1="50%" x2="80%" y2="33%" stroke="#a855f7" strokeWidth="2" opacity="0.6" />
                      <line x1="50%" y1="50%" x2="25%" y2="80%" stroke="#a855f7" strokeWidth="2" opacity="0.6" />
                      <line x1="50%" y1="50%" x2="67%" y2="67%" stroke="#a855f7" strokeWidth="2" opacity="0.6" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-sm text-gray-400">
                  Click and drag to explore connections
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Key Benefits</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Brain className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">Pattern Recognition</h3>
                <p className="text-gray-300">Discover hidden patterns and themes across your notes that you might have missed.</p>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Search className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">Enhanced Discovery</h3>
                <p className="text-gray-300">Find related content and make new connections between seemingly unrelated ideas.</p>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <LinkIcon className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">Relationship Mapping</h3>
                <p className="text-gray-300">Visualize how concepts, people, projects, and ideas relate to each other.</p>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Zap className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">Intelligent Suggestions</h3>
                <p className="text-gray-300">Get AI-powered suggestions for new connections and related content.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">How the Knowledge Graph Works</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">1. Automatic Connection Detection</h3>
            <p className="text-gray-300 mb-4">
              Reflect automatically analyzes your notes to identify connections based on:
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Shared keywords and concepts
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Direct note links and references
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Semantic similarity analysis
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Temporal relationships (notes created around the same time)
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white">2. Visual Exploration</h3>
            <p className="text-gray-300 mb-6">
              Navigate your knowledge graph with intuitive controls:
            </p>

            <div className="bg-black/30 rounded-lg p-4 mb-6">
              <h4 className="font-semibold mb-2">Graph Navigation Controls</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>• Click and drag</span>
                  <span>Pan around the graph</span>
                </div>
                <div className="flex justify-between">
                  <span>• Mouse wheel</span>
                  <span>Zoom in and out</span>
                </div>
                <div className="flex justify-between">
                  <span>• Click on node</span>
                  <span>Open the note</span>
                </div>
                <div className="flex justify-between">
                  <span>• Double-click node</span>
                  <span>Focus on connections</span>
                </div>
                <div className="flex justify-between">
                  <span>• Right-click</span>
                  <span>Context menu options</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white">3. Filtering and Search</h3>
            <p className="text-gray-300 mb-4">
              Focus on specific aspects of your knowledge:
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Filter by tags, categories, or date ranges
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Search for specific notes or concepts
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Highlight paths between specific notes
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-white">Practical Use Cases</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-reflect-dark/40 border-l-4 border-reflect-purple pl-6 py-4">
                <h4 className="font-semibold mb-2">Research Projects</h4>
                <p className="text-gray-300">Visualize how different research sources, ideas, and conclusions connect to form a comprehensive understanding of your topic.</p>
              </div>
              
              <div className="bg-reflect-dark/40 border-l-4 border-blue-500 pl-6 py-4">
                <h4 className="font-semibold mb-2">Creative Writing</h4>
                <p className="text-gray-300">See how characters, plot points, themes, and world-building elements relate to each other in your story.</p>
              </div>
              
              <div className="bg-reflect-dark/40 border-l-4 border-green-500 pl-6 py-4">
                <h4 className="font-semibold mb-2">Project Management</h4>
                <p className="text-gray-300">Track dependencies between tasks, team members, resources, and project milestones.</p>
              </div>
              
              <div className="bg-reflect-dark/40 border-l-4 border-yellow-500 pl-6 py-4">
                <h4 className="font-semibold mb-2">Learning and Study</h4>
                <p className="text-gray-300">Connect concepts across different subjects and see how your understanding evolves over time.</p>
              </div>
            </div>

            <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-reflect-purple">Access Your Knowledge Graph</h3>
              <p className="text-gray-300 mb-4">
                Open the Knowledge Graph by clicking the graph icon in the sidebar or using the keyboard shortcut Cmd/Ctrl + G.
              </p>
              <Link to="/docs/smart-linking" className="inline-flex items-center text-reflect-purple hover:underline">
                Next: Learn about Smart Linking →
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default KnowledgeGraph;
