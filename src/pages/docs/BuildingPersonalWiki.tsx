
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Link2, Tag, Search, Plus, FileText, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BuildingPersonalWiki = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-reflect-dark flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 max-w-5xl mx-auto px-6">
        <Link to="/docs/guides" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Guides
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Building a <span className="cosmic-text-gradient">Personal Wiki</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Transform your notes into a comprehensive knowledge base that grows with you over time.
          </p>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-white">What is a Personal Wiki?</h2>
            <p className="text-gray-300 mb-6">
              A personal wiki is an interconnected collection of notes that forms your personal knowledge base. 
              Unlike traditional note-taking, a wiki emphasizes connections between ideas, making it easy to 
              discover relationships and build upon existing knowledge.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-white">Getting Started</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">1. Start with Core Topics</h3>
            <p className="text-gray-300 mb-4">
              Begin by creating notes for the main areas of your life or work:
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Work projects and responsibilities
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Personal interests and hobbies
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Learning goals and courses
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Reference materials and resources
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white">2. Create Index Pages</h3>
            <p className="text-gray-300 mb-4">
              Index pages serve as navigation hubs for different areas of your wiki:
            </p>
            
            <div className="bg-black/30 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Example: Work Index</span>
                <Button variant="ghost" size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <pre className="text-sm text-gray-300">
{`# Work Index

## Current Projects
- [[Project Alpha]] - Q1 Product Launch
- [[Project Beta]] - Customer Research Initiative
- [[Team Planning]] - Sprint Planning & Retrospectives

## Resources
- [[Meeting Templates]]
- [[Company Processes]]
- [[Industry Research]]

## Goals & Objectives
- [[2024 OKRs]]
- [[Professional Development]]`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white">3. Use Consistent Naming</h3>
            <p className="text-gray-300 mb-6">
              Develop a consistent naming convention for your notes to make them easier to find and link:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <FileText className="w-8 h-8 text-reflect-purple mb-4" />
                <h4 className="text-lg font-semibold mb-2">Good Naming</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• "JavaScript Best Practices"</li>
                  <li>• "Meeting - Product Review 2024-01-15"</li>
                  <li>• "Book Notes - Atomic Habits"</li>
                </ul>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <FileText className="w-8 h-8 text-gray-400 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Avoid</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• "Notes"</li>
                  <li>• "Meeting 1"</li>
                  <li>• "Untitled"</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Building Connections</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">Link Liberally</h3>
            <p className="text-gray-300 mb-4">
              The power of a wiki comes from connections. Link to related notes whenever you mention:
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-center">
                <Link2 className="w-4 h-4 text-reflect-purple mr-3" />
                People you work with or learn from
              </li>
              <li className="flex items-center">
                <Link2 className="w-4 h-4 text-reflect-purple mr-3" />
                Projects, books, or resources
              </li>
              <li className="flex items-center">
                <Link2 className="w-4 h-4 text-reflect-purple mr-3" />
                Concepts and ideas
              </li>
              <li className="flex items-center">
                <Link2 className="w-4 h-4 text-reflect-purple mr-3" />
                Past experiences or events
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white">Use Tags Strategically</h3>
            <p className="text-gray-300 mb-4">
              Tags help you organize and find notes across different topics:
            </p>
            
            <div className="bg-black/30 rounded-lg p-4 mb-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-reflect-purple/20 text-reflect-purple px-2 py-1 rounded text-sm">#work</span>
                <span className="bg-reflect-purple/20 text-reflect-purple px-2 py-1 rounded text-sm">#meeting</span>
                <span className="bg-reflect-purple/20 text-reflect-purple px-2 py-1 rounded text-sm">#action-items</span>
                <span className="bg-reflect-purple/20 text-reflect-purple px-2 py-1 rounded text-sm">#q1-2024</span>
              </div>
              <p className="text-gray-300 text-sm">
                Example tags for a meeting note
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Wiki Maintenance</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">Regular Review</h3>
            <p className="text-gray-300 mb-4">
              Schedule regular reviews to keep your wiki organized and valuable:
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Weekly: Update index pages and link new notes
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Monthly: Clean up outdated information
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Quarterly: Reorganize structure if needed
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white">Search and Discovery</h3>
            <p className="text-gray-300 mb-4">
              Use Reflect's search capabilities to rediscover forgotten knowledge:
            </p>
            
            <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <Search className="w-5 h-5 text-reflect-purple mr-2" />
                <h4 className="text-lg font-semibold">Search Demo</h4>
              </div>
              
              <div className="relative mb-4">
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search your personal wiki..."
                  className="bg-black/20 border-white/20"
                />
                <Search className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
              </div>
              
              <div className="text-sm text-gray-400">
                Try searching for concepts, people, or project names to see how they connect across your notes.
              </div>
            </div>

            <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-reflect-purple">Pro Tips</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Start small and grow organically - don't try to create everything at once</li>
                <li>• Use templates for recurring note types (meetings, book notes, project plans)</li>
                <li>• Create "Map of Content" notes that provide overviews of large topics</li>
                <li>• Don't worry about perfect organization - embrace the organic growth</li>
              </ul>
              <Link to="/docs/research-workflows" className="inline-flex items-center text-reflect-purple hover:underline mt-4">
                Next: Research Workflows →
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default BuildingPersonalWiki;
