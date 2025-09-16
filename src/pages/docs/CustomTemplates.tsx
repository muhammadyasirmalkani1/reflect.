
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Plus, Settings } from "lucide-react";

const CustomTemplates = () => {
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
            Custom <span className="cosmic-text-gradient">Templates</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Create and use custom templates to standardize your note-taking process.
          </p>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-white">What are Templates?</h2>
            
            <p className="text-gray-300 mb-6">
              Templates in Reflect are pre-formatted note structures that help you maintain consistency 
              and save time when creating notes for specific purposes.
            </p>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Creating Your First Template</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Plus className="w-5 h-5 mr-2 text-reflect-purple" />
                  Step 1: Create a Note
                </h3>
                <p className="text-gray-300 mb-3">
                  Start by creating a note with the structure you want to reuse. Include:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Headers and sections</li>
                  <li>• Placeholder text</li>
                  <li>• Tags you commonly use</li>
                  <li>• Any recurring elements</li>
                </ul>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-reflect-purple" />
                  Step 2: Save as Template
                </h3>
                <p className="text-gray-300 mb-3">
                  Right-click on your note and select "Save as Template" or use the keyboard shortcut:
                </p>
                <div className="bg-gray-800 rounded p-3 mb-3">
                  <kbd className="bg-gray-700 px-2 py-1 rounded">Cmd+Shift+T</kbd>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-reflect-purple" />
                  Step 3: Configure Template
                </h3>
                <p className="text-gray-300 mb-3">
                  Give your template a name and description. You can also set:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Default tags</li>
                  <li>• Category assignment</li>
                  <li>• Quick access shortcuts</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Template Examples</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Meeting Notes</h3>
                <div className="bg-gray-800 rounded p-4 text-sm text-gray-300">
                  <div># Meeting: [Title]</div>
                  <div className="mt-2">**Date:** {new Date().toLocaleDateString()}</div>
                  <div>**Attendees:** </div>
                  <div className="mt-2">## Agenda</div>
                  <div>- </div>
                  <div className="mt-2">## Action Items</div>
                  <div>- [ ] </div>
                  <div className="mt-2">## Notes</div>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Daily Journal</h3>
                <div className="bg-gray-800 rounded p-4 text-sm text-gray-300">
                  <div># Daily Reflection - {new Date().toLocaleDateString()}</div>
                  <div className="mt-2">## Three Good Things</div>
                  <div>1. </div>
                  <div>2. </div>
                  <div>3. </div>
                  <div className="mt-2">## Goals for Tomorrow</div>
                  <div>- </div>
                  <div className="mt-2">## Random Thoughts</div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Using Templates</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-4">
                <h4 className="font-semibold text-reflect-purple mb-2">📋 Quick Access</h4>
                <p className="text-gray-300 text-sm">
                  Press <kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Cmd+T</kbd> to open the template picker and quickly create a note from any template.
                </p>
              </div>
              
              <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-4">
                <h4 className="font-semibold text-reflect-purple mb-2">🔄 Template Variables</h4>
                <p className="text-gray-300 text-sm">
                  Use variables like <code>{"{{date}}"}</code>, <code>{"{{time}}"}</code>, or <code>{"{{title}}"}</code> that get automatically replaced when creating from template.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Advanced Template Features</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Conditional Sections</h3>
                <p className="text-gray-300 mb-3">
                  Create sections that appear based on certain conditions or user choices.
                </p>
                <div className="bg-gray-800 rounded p-3 text-sm text-gray-300">
                  <code>{"{{if meeting_type == \"standup\"}}"}</code><br/>
                  <code>## Yesterday&apos;s Progress</code><br/>
                  <code>{"{{endif}}"}</code>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Nested Templates</h3>
                <p className="text-gray-300 mb-3">
                  Include other templates within templates for modular note structures.
                </p>
                <div className="bg-gray-800 rounded p-3 text-sm text-gray-300">
                  <code>{"{{include: \"header-template\"}}"}</code><br/>
                  <code>{"{{include: \"action-items\"}}"}</code>
                </div>
              </div>
            </div>
            
            <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-reflect-purple">Pro Tip</h3>
              <p className="text-gray-300 mb-4">
                Create a "Template Library" note to keep track of all your templates and their use cases. This becomes especially useful as your template collection grows.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/docs/keyboard-shortcuts" className="inline-flex items-center text-reflect-purple hover:underline">
                  Keyboard Shortcuts →
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

export default CustomTemplates;
