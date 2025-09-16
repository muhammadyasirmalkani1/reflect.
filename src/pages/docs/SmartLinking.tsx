
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Link as LinkIcon, Zap, Brain, Search, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";

const SmartLinking = () => {
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
            Smart <span className="cosmic-text-gradient">Linking</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Automatically discover and create meaningful connections between your notes with intelligent linking that understands context and relationships.
          </p>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-white">How Smart Linking Works</h2>
            
            <p className="text-gray-300 mb-6">
              Smart Linking goes beyond simple keyword matching. It uses AI to understand the semantic meaning of your content 
              and suggests relevant connections based on context, themes, and conceptual relationships.
            </p>

            {/* Interactive Demo */}
            <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Smart Linking in Action</h3>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">As you type:</div>
                  <div className="bg-gray-800 p-3 rounded border-l-4 border-reflect-purple">
                    <span className="text-gray-300">I'm working on a new </span>
                    <span className="bg-reflect-purple/20 text-reflect-purple px-1 rounded">machine learning</span>
                    <span className="text-gray-300"> project that involves </span>
                    <span className="bg-blue-500/20 text-blue-400 px-1 rounded">neural networks</span>
                    <span className="text-gray-300"> for image recognition...</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <div className="text-sm text-gray-400 mb-2">Smart suggestions appear:</div>
                  <div className="space-y-2">
                    <div className="flex items-center p-2 bg-gray-800/50 rounded">
                      <LinkIcon className="w-4 h-4 text-reflect-purple mr-2" />
                      <span className="text-sm">Link to "Deep Learning Fundamentals"</span>
                      <Button size="sm" variant="ghost" className="ml-auto text-xs">Connect</Button>
                    </div>
                    <div className="flex items-center p-2 bg-gray-800/50 rounded">
                      <LinkIcon className="w-4 h-4 text-blue-400 mr-2" />
                      <span className="text-sm">Link to "Computer Vision Research"</span>
                      <Button size="sm" variant="ghost" className="ml-auto text-xs">Connect</Button>
                    </div>
                    <div className="flex items-center p-2 bg-gray-800/50 rounded">
                      <LinkIcon className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm">Link to "TensorFlow Tutorial Notes"</span>
                      <Button size="sm" variant="ghost" className="ml-auto text-xs">Connect</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Types of Smart Links</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Brain className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">Conceptual Links</h3>
                <p className="text-gray-300 mb-3">Connects notes based on shared concepts and ideas, even when they use different terminology.</p>
                <div className="text-sm text-gray-400">
                  Example: "artificial intelligence" ↔ "machine learning" ↔ "neural networks"
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Hash className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Contextual Links</h3>
                <p className="text-gray-300 mb-3">Links based on the context and purpose of your notes, such as project phases or research stages.</p>
                <div className="text-sm text-gray-400">
                  Example: Research → Planning → Implementation → Review
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Search className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Reference Links</h3>
                <p className="text-gray-300 mb-3">Automatically detects when you mention people, places, or things that exist in other notes.</p>
                <div className="text-sm text-gray-400">
                  Example: "John Smith" mentioned in multiple meeting notes
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Temporal Links</h3>
                <p className="text-gray-300 mb-3">Connects notes created around the same time or that reference similar timeframes.</p>
                <div className="text-sm text-gray-400">
                  Example: All notes from "Q1 2024" or "Project Alpha timeline"
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Linking Syntax and Commands</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">1. Manual Linking</h3>
            <div className="bg-black/30 rounded-lg p-4 mb-6">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <code className="text-reflect-purple">[[Note Title]]</code>
                  <span className="text-gray-400">Creates a direct link to another note</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-blue-400">[[Note Title|Display Text]]</code>
                  <span className="text-gray-400">Link with custom display text</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-green-400">#tag</code>
                  <span className="text-gray-400">Creates a tag that links related content</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-yellow-400">@person</code>
                  <span className="text-gray-400">Reference a person across notes</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white">2. Smart Suggestions</h3>
            <p className="text-gray-300 mb-4">
              As you type, Reflect automatically suggests relevant links based on:
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Content similarity and semantic matching
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Existing tags and categories
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Previously linked content
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Project and topic relationships
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white">3. Backlinks</h3>
            <p className="text-gray-300 mb-6">
              Every note automatically shows which other notes link to it, creating a web of bidirectional connections 
              that helps you navigate your knowledge base intuitively.
            </p>

            <div className="bg-black/30 rounded-lg p-4 mb-8">
              <h4 className="font-semibold mb-3">Example: Backlinks Panel</h4>
              <div className="space-y-2">
                <div className="text-sm text-gray-400 mb-2">Notes linking to "Machine Learning":</div>
                <div className="space-y-1 ml-4">
                  <div className="text-sm text-gray-300">• AI Research Project - mentioned in goals section</div>
                  <div className="text-sm text-gray-300">• Data Science Learning Path - listed as prerequisite</div>
                  <div className="text-sm text-gray-300">• Weekly Review 03/15 - discussed in progress notes</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Advanced Linking Features</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">1. Link Strength Indicators</h3>
            <p className="text-gray-300 mb-4">
              Reflect shows how strong the connection is between notes:
            </p>
            <div className="bg-reflect-dark/40 p-4 rounded-lg mb-6">
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span>Strong connection (multiple shared concepts)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span>Medium connection (some shared context)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                  <span>Weak connection (minimal overlap)</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white">2. Link Types and Categories</h3>
            <p className="text-gray-300 mb-4">
              Categorize your links to understand different types of relationships:
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <strong>References:</strong> Sources, citations, and supporting materials
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <strong>Dependencies:</strong> Prerequisites and required knowledge
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                <strong>Related:</strong> Similar topics and parallel concepts
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                <strong>Contradicts:</strong> Opposing viewpoints and conflicting information
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white">3. Link Previews</h3>
            <p className="text-gray-300 mb-6">
              Hover over any link to see a preview of the linked content without leaving your current note, 
              making it easy to verify connections and explore related ideas.
            </p>

            <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-reflect-purple">Start Smart Linking</h3>
              <p className="text-gray-300 mb-4">
                Smart Linking is enabled by default. Just start typing [[ to manually create links, or let the AI suggest connections as you write.
              </p>
              <Link to="/docs/tags-categories" className="inline-flex items-center text-reflect-purple hover:underline">
                Next: Learn about Tags & Categories →
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default SmartLinking;
