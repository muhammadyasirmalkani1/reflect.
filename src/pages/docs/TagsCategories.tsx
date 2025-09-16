
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Tag, FolderOpen, Hash, Filter, Search, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TagsCategories = () => {
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
            Tags & <span className="cosmic-text-gradient">Categories</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Organize and discover your notes with flexible tagging and intelligent categorization that adapts to your thinking patterns.
          </p>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-white">Understanding Tags vs Categories</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Tag className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">Tags</h3>
                <p className="text-gray-300 mb-3">Flexible keywords that describe specific aspects, topics, or attributes of your notes.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-reflect-purple/20 text-reflect-purple rounded text-sm">#research</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">#urgent</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-sm">#meeting</span>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <FolderOpen className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Categories</h3>
                <p className="text-gray-300 mb-3">Hierarchical organizational structure for grouping related notes into logical folders.</p>
                <div className="space-y-1 text-sm text-gray-400">
                  <div>📁 Projects</div>
                  <div className="ml-4">📁 Work</div>
                  <div className="ml-8">📄 Q1 Planning</div>
                  <div className="ml-4">📁 Personal</div>
                </div>
              </div>
            </div>

            {/* Interactive Tagging Demo */}
            <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Interactive Tagging System</h3>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-2">Add tags to this note:</label>
                  <div className="flex gap-2 mb-3">
                    <Input 
                      placeholder="Type # to add tags..." 
                      className="bg-gray-800 border-gray-600"
                    />
                    <Button size="sm" className="bg-reflect-purple hover:bg-reflect-purple/80">
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-reflect-purple/20 text-reflect-purple rounded-full text-sm flex items-center">
                      #project-alpha
                      <button className="ml-2 text-xs opacity-60 hover:opacity-100">×</button>
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm flex items-center">
                      #high-priority
                      <button className="ml-2 text-xs opacity-60 hover:opacity-100">×</button>
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm flex items-center">
                      #deadline-march
                      <button className="ml-2 text-xs opacity-60 hover:opacity-100">×</button>
                    </span>
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <div className="text-sm text-gray-400 mb-2">Suggested tags based on content:</div>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-2 py-1 bg-gray-700 hover:bg-reflect-purple/20 rounded text-sm">+ #planning</button>
                    <button className="px-2 py-1 bg-gray-700 hover:bg-blue-500/20 rounded text-sm">+ #strategy</button>
                    <button className="px-2 py-1 bg-gray-700 hover:bg-green-500/20 rounded text-sm">+ #team-meeting</button>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Tag Organization Strategies</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">1. Hierarchical Tags</h3>
            <p className="text-gray-300 mb-4">
              Use forward slashes to create tag hierarchies for better organization:
            </p>
            <div className="bg-black/30 rounded-lg p-4 mb-6">
              <div className="space-y-2 text-sm">
                <div className="text-gray-300">#project/work/client-a</div>
                <div className="text-gray-300">#project/personal/home-renovation</div>
                <div className="text-gray-300">#status/in-progress</div>
                <div className="text-gray-300">#status/completed</div>
                <div className="text-gray-300">#priority/high</div>
                <div className="text-gray-300">#priority/low</div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white">2. Smart Tag Suggestions</h3>
            <p className="text-gray-300 mb-6">
              Reflect analyzes your content and suggests relevant tags based on:
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Content analysis and keyword extraction
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Previously used tags in similar contexts
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Tags from linked and related notes
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Temporal patterns and project phases
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-white">Advanced Filtering and Search</h2>
            
            {/* Advanced Search Demo */}
            <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Advanced Tag Search</h3>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="mb-4">
                  <Input 
                    placeholder="Search with tag operators: #tag1 AND #tag2 OR #tag3 NOT #tag4"
                    className="bg-gray-800 border-gray-600 mb-3"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Search Operators</h4>
                    <div className="space-y-1 text-xs text-gray-400">
                      <div><code>#tag1 AND #tag2</code> - Both tags required</div>
                      <div><code>#tag1 OR #tag2</code> - Either tag present</div>
                      <div><code>NOT #tag</code> - Exclude this tag</div>
                      <div><code>#project/*</code> - Any tag starting with 'project/'</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Quick Filters</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded text-xs cursor-pointer hover:bg-reflect-purple/20">Today</span>
                      <span className="px-2 py-1 bg-gray-700 rounded text-xs cursor-pointer hover:bg-reflect-purple/20">This Week</span>
                      <span className="px-2 py-1 bg-gray-700 rounded text-xs cursor-pointer hover:bg-reflect-purple/20">Untagged</span>
                      <span className="px-2 py-1 bg-gray-700 rounded text-xs cursor-pointer hover:bg-reflect-purple/20">Modified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Tag Visualization and Analytics</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Palette className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">Tag Cloud</h3>
                <p className="text-gray-300 mb-3">Visual representation of your most used tags with size indicating frequency.</p>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-lg text-reflect-purple">#project</span>
                  <span className="text-base text-blue-400">#meeting</span>
                  <span className="text-2xl text-green-400">#work</span>
                  <span className="text-sm text-yellow-400">#idea</span>
                  <span className="text-base text-pink-400">#research</span>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Filter className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Tag Statistics</h3>
                <p className="text-gray-300 mb-3">Track tag usage patterns and identify trends in your note-taking.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>#work</span>
                    <span className="text-gray-400">147 notes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>#project</span>
                    <span className="text-gray-400">89 notes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>#meeting</span>
                    <span className="text-gray-400">56 notes</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Category Management</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">1. Smart Categories</h3>
            <p className="text-gray-300 mb-4">
              Reflect can automatically suggest categories based on your note patterns:
            </p>
            <div className="bg-reflect-dark/40 p-4 rounded-lg mb-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-black/20 rounded">
                  <div className="flex items-center">
                    <FolderOpen className="w-4 h-4 text-blue-400 mr-2" />
                    <span>Work Projects</span>
                    <span className="ml-2 text-xs text-gray-400">(23 notes)</span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-xs">Auto-organize</Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-black/20 rounded">
                  <div className="flex items-center">
                    <FolderOpen className="w-4 h-4 text-green-400 mr-2" />
                    <span>Learning Resources</span>
                    <span className="ml-2 text-xs text-gray-400">(17 notes)</span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-xs">Auto-organize</Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-black/20 rounded">
                  <div className="flex items-center">
                    <FolderOpen className="w-4 h-4 text-purple-400 mr-2" />
                    <span>Meeting Notes</span>
                    <span className="ml-2 text-xs text-gray-400">(31 notes)</span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-xs">Auto-organize</Button>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white">2. Custom Category Rules</h3>
            <p className="text-gray-300 mb-4">
              Set up automatic categorization rules based on tags, content, or patterns:
            </p>
            <div className="bg-black/30 rounded-lg p-4 mb-6">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
                  <span>If tags contain "#meeting" → Move to "Work/Meetings"</span>
                  <span className="text-green-400">Active</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
                  <span>If title starts with "Daily" → Move to "Personal/Journal"</span>
                  <span className="text-green-400">Active</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
                  <span>If contains "@research" → Move to "Projects/Research"</span>
                  <span className="text-yellow-400">Pending</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Best Practices</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-reflect-dark/40 border-l-4 border-reflect-purple pl-6 py-4">
                <h4 className="font-semibold mb-2">Consistent Naming</h4>
                <p className="text-gray-300">Use consistent tag naming conventions. Prefer "#machine-learning" over "#ML" or "#MachineLearning" for better searchability.</p>
              </div>
              
              <div className="bg-reflect-dark/40 border-l-4 border-blue-500 pl-6 py-4">
                <h4 className="font-semibold mb-2">Tag Hierarchies</h4>
                <p className="text-gray-300">Use hierarchical tags for complex projects: "#project/website/frontend" allows filtering at any level.</p>
              </div>
              
              <div className="bg-reflect-dark/40 border-l-4 border-green-500 pl-6 py-4">
                <h4 className="font-semibold mb-2">Regular Cleanup</h4>
                <p className="text-gray-300">Periodically review and merge similar tags. Use the tag management dashboard to identify duplicates and unused tags.</p>
              </div>
              
              <div className="bg-reflect-dark/40 border-l-4 border-yellow-500 pl-6 py-4">
                <h4 className="font-semibold mb-2">Balance Structure and Flexibility</h4>
                <p className="text-gray-300">Don't over-organize. Tags should help you find content, not become a maintenance burden. Start simple and evolve your system.</p>
              </div>
            </div>

            <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-reflect-purple">Start Organizing</h3>
              <p className="text-gray-300 mb-4">
                Begin using tags by typing # anywhere in your notes. Categories can be created from the sidebar or by dragging notes into new folders.
              </p>
              <div className="flex gap-4">
                <Link to="/docs/guides" className="inline-flex items-center text-reflect-purple hover:underline">
                  Explore Guides →
                </Link>
                <Link to="/docs" className="inline-flex items-center text-gray-400 hover:text-white">
                  Back to Documentation
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

export default TagsCategories;
