
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Filter, Calendar, Tag } from "lucide-react";

const AdvancedSearch = () => {
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
            Advanced <span className="cosmic-text-gradient">Search</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Master Reflect's powerful search capabilities to find exactly what you're looking for.
          </p>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-white">Search Operators</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-reflect-purple" />
                  Tag Search
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-800 rounded p-3">
                    <code className="text-reflect-purple">tag:meeting</code>
                    <p className="text-gray-400 mt-1">Find notes with "meeting" tag</p>
                  </div>
                  <div className="bg-gray-800 rounded p-3">
                    <code className="text-reflect-purple">tag:project tag:urgent</code>
                    <p className="text-gray-400 mt-1">Notes with both tags</p>
                  </div>
                  <div className="bg-gray-800 rounded p-3">
                    <code className="text-reflect-purple">-tag:archive</code>
                    <p className="text-gray-400 mt-1">Exclude archived notes</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-reflect-purple" />
                  Date Search
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-800 rounded p-3">
                    <code className="text-reflect-purple">created:today</code>
                    <p className="text-gray-400 mt-1">Notes created today</p>
                  </div>
                  <div className="bg-gray-800 rounded p-3">
                    <code className="text-reflect-purple">modified:week</code>
                    <p className="text-gray-400 mt-1">Modified this week</p>
                  </div>
                  <div className="bg-gray-800 rounded p-3">
                    <code className="text-reflect-purple">created:2024-01-15</code>
                    <p className="text-gray-400 mt-1">Specific date</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Content Search</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-800 rounded p-3">
                    <code className="text-reflect-purple">"exact phrase"</code>
                    <p className="text-gray-400 mt-1">Find exact phrase</p>
                  </div>
                  <div className="bg-gray-800 rounded p-3">
                    <code className="text-reflect-purple">word1 AND word2</code>
                    <p className="text-gray-400 mt-1">Both words must exist</p>
                  </div>
                  <div className="bg-gray-800 rounded p-3">
                    <code className="text-reflect-purple">word1 OR word2</code>
                    <p className="text-gray-400 mt-1">Either word can exist</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">File Properties</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-800 rounded p-3">
                    <code className="text-reflect-purple">title:project</code>
                    <p className="text-gray-400 mt-1">Search in note titles</p>
                  </div>
                  <div className="bg-gray-800 rounded p-3">
                    <code className="text-reflect-purple">path:inbox</code>
                    <p className="text-gray-400 mt-1">Notes in specific folder</p>
                  </div>
                  <div className="bg-gray-800 rounded p-3">
                    <code className="text-reflect-purple">type:template</code>
                    <p className="text-gray-400 mt-1">Search templates only</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Complex Search Queries</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Combining Operators</h3>
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded p-4">
                    <code className="text-reflect-purple text-sm">tag:meeting created:week "action items"</code>
                    <p className="text-gray-400 mt-2 text-sm">
                      Find meeting notes from this week that contain "action items"
                    </p>
                  </div>
                  <div className="bg-gray-800 rounded p-4">
                    <code className="text-reflect-purple text-sm">title:project AND (tag:urgent OR tag:important)</code>
                    <p className="text-gray-400 mt-2 text-sm">
                      Project notes that are either urgent or important
                    </p>
                  </div>
                  <div className="bg-gray-800 rounded p-4">
                    <code className="text-reflect-purple text-sm">modified:month -tag:archive path:work</code>
                    <p className="text-gray-400 mt-2 text-sm">
                      Work notes modified this month, excluding archived ones
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Search Filters</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-reflect-purple" />
                  Date Ranges
                </h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>• <code>today</code> - Today only</div>
                  <div>• <code>yesterday</code> - Yesterday only</div>
                  <div>• <code>week</code> - This week</div>
                  <div>• <code>month</code> - This month</div>
                  <div>• <code>year</code> - This year</div>
                  <div>• <code>2024-01-01..2024-01-31</code> - Date range</div>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Content Types</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>• <code>type:note</code> - Regular notes</div>
                  <div>• <code>type:template</code> - Templates</div>
                  <div>• <code>type:daily</code> - Daily notes</div>
                  <div>• <code>has:image</code> - Notes with images</div>
                  <div>• <code>has:link</code> - Notes with links</div>
                  <div>• <code>has:attachment</code> - Notes with files</div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Regular Expressions</h2>
            
            <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6 mb-8">
              <p className="text-gray-300 mb-4">
                Enable regex mode for powerful pattern matching:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded p-4">
                  <code className="text-reflect-purple text-sm">/regex:\d{4}-\d{2}-\d{2}/</code>
                  <p className="text-gray-400 mt-2 text-sm">Find dates in YYYY-MM-DD format</p>
                </div>
                <div className="bg-gray-800 rounded p-4">
                  <code className="text-reflect-purple text-sm">/regex:TODO.*urgent/i</code>
                  <p className="text-gray-400 mt-2 text-sm">Case-insensitive search for "TODO" followed by "urgent"</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Saved Searches</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Creating Saved Searches</h3>
                <div className="text-gray-300 space-y-3">
                  <p>1. Perform a search with your desired filters</p>
                  <p>2. Click the "Save Search" button in the search bar</p>
                  <p>3. Give your search a name and optional description</p>
                  <p>4. Access saved searches from the sidebar</p>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Useful Saved Search Examples</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-800 rounded p-3">
                    <strong className="text-white">Recent Work Notes</strong>
                    <div className="text-reflect-purple mt-1">tag:work modified:week</div>
                  </div>
                  <div className="bg-gray-800 rounded p-3">
                    <strong className="text-white">Unfinished Tasks</strong>
                    <div className="text-reflect-purple mt-1">TODO -tag:done</div>
                  </div>
                  <div className="bg-gray-800 rounded p-3">
                    <strong className="text-white">Meeting Notes</strong>
                    <div className="text-reflect-purple mt-1">tag:meeting created:month</div>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Search Tips</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-4">
                <h4 className="font-semibold text-reflect-purple mb-2">🔍 Wildcards</h4>
                <p className="text-gray-300 text-sm">
                  Use <code>*</code> for partial matches: <code>meet*</code> finds "meeting", "meetings", "meetup", etc.
                </p>
              </div>
              
              <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-4">
                <h4 className="font-semibold text-reflect-purple mb-2">📝 Search as You Type</h4>
                <p className="text-gray-300 text-sm">
                  Results update in real-time. Use <kbd className="bg-gray-700 px-2 py-1 rounded text-xs">↑</kbd> and <kbd className="bg-gray-700 px-2 py-1 rounded text-xs">↓</kbd> to navigate results.
                </p>
              </div>
              
              <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-4">
                <h4 className="font-semibold text-reflect-purple mb-2">🎯 Context Preview</h4>
                <p className="text-gray-300 text-sm">
                  Search results show context around matches to help you identify the right note quickly.
                </p>
              </div>
            </div>
            
            <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-reflect-purple">Search Like a Pro</h3>
              <p className="text-gray-300 mb-4">
                Master these search techniques to quickly find any information in your knowledge base, no matter how large it grows.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/docs/keyboard-shortcuts" className="inline-flex items-center text-reflect-purple hover:underline">
                  Keyboard Shortcuts →
                </Link>
                <Link to="/docs/data-export" className="inline-flex items-center text-reflect-purple hover:underline">
                  Data Export →
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

export default AdvancedSearch;
