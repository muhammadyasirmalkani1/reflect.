
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Download, FileText, Archive, Shield } from "lucide-react";

const DataExport = () => {
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
            Data <span className="cosmic-text-gradient">Export</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Export your notes and data from Reflect in various formats for backup, migration, or sharing.
          </p>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-white">Export Options</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-reflect-purple" />
                  Individual Notes
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div>• <strong>Markdown:</strong> Preserves formatting and links</div>
                  <div>• <strong>PDF:</strong> Professional document format</div>
                  <div>• <strong>HTML:</strong> Web-compatible format</div>
                  <div>• <strong>Plain Text:</strong> Simple, universal format</div>
                </div>
                <p className="text-gray-400 text-xs mt-4">
                  Right-click any note → Export → Choose format
                </p>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Archive className="w-5 h-5 mr-2 text-reflect-purple" />
                  Bulk Export
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div>• <strong>Full Archive:</strong> All notes and attachments</div>
                  <div>• <strong>Filtered Export:</strong> Based on tags or dates</div>
                  <div>• <strong>JSON:</strong> Complete data with metadata</div>
                  <div>• <strong>ZIP Archive:</strong> Organized folder structure</div>
                </div>
                <p className="text-gray-400 text-xs mt-4">
                  Settings → Data → Export All Data
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Step-by-Step Export Process</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Method 1: Single Note Export</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start">
                    <span className="bg-reflect-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    <div>Open the note you want to export</div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-reflect-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    <div>Click the three-dot menu (⋯) in the note header</div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-reflect-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    <div>Select "Export" from the dropdown menu</div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-reflect-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    <div>Choose your preferred format (Markdown, PDF, HTML, or Text)</div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-reflect-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                    <div>Select download location and save</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Method 2: Bulk Export</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start">
                    <span className="bg-reflect-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    <div>Go to Settings (Cmd+,)</div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-reflect-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    <div>Navigate to the "Data" or "Export" section</div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-reflect-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    <div>Choose "Export All Data" or "Custom Export"</div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-reflect-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    <div>Select export format and filters (if any)</div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-reflect-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                    <div>Wait for processing and download the archive</div>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Export Formats</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Markdown (.md)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-green-400 mb-2">✅ Preserves</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Text formatting (bold, italic, etc.)</li>
                      <li>• Headers and structure</li>
                      <li>• Links between notes</li>
                      <li>• Code blocks and quotes</li>
                      <li>• Lists and tables</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-400 mb-2">⚠️ Limitations</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Embedded media as links</li>
                      <li>• Some Reflect-specific features</li>
                      <li>• Graph connections</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">JSON (.json)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-green-400 mb-2">✅ Preserves</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Complete note metadata</li>
                      <li>• Creation and modification dates</li>
                      <li>• Tags and properties</li>
                      <li>• Link relationships</li>
                      <li>• All Reflect-specific data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-400 mb-2">⚠️ Limitations</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Not human-readable</li>
                      <li>• Requires technical knowledge</li>
                      <li>• Platform-specific format</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Custom Export Filters</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Date Range Filters</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>• <strong>Last 30 days:</strong> Recent notes only</div>
                  <div>• <strong>This year:</strong> Current year's notes</div>
                  <div>• <strong>Custom range:</strong> Specific date period</div>
                  <div>• <strong>Before date:</strong> Archive old notes</div>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Content Filters</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>• <strong>By tags:</strong> Export specific topics</div>
                  <div>• <strong>By folder:</strong> Specific collections</div>
                  <div>• <strong>Note type:</strong> Templates, daily notes, etc.</div>
                  <div>• <strong>Size limit:</strong> Skip large attachments</div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Migration & Backup</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-reflect-purple" />
                  Regular Backups
                </h3>
                <div className="text-gray-300 space-y-3 text-sm">
                  <p>Set up automatic exports for peace of mind:</p>
                  <ul className="space-y-1">
                    <li>• Weekly full exports to cloud storage</li>
                    <li>• Monthly JSON archives for complete backup</li>
                    <li>• Real-time sync to external services</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Migration to Other Apps</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-800 rounded p-3">
                    <strong className="text-white">To Obsidian:</strong>
                    <div className="text-gray-300 mt-1">Export as Markdown, maintain folder structure</div>
                  </div>
                  <div className="bg-gray-800 rounded p-3">
                    <strong className="text-white">To Notion:</strong>
                    <div className="text-gray-300 mt-1">Use Markdown export, then Notion's import feature</div>
                  </div>
                  <div className="bg-gray-800 rounded p-3">
                    <strong className="text-white">To Roam Research:</strong>
                    <div className="text-gray-300 mt-1">JSON export with custom conversion script</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-4">
                <h4 className="font-semibold text-reflect-purple mb-2">💾 Export Size Limits</h4>
                <p className="text-gray-300 text-sm">
                  Large exports may be split into multiple files. Check your download folder for additional parts.
                </p>
              </div>
              
              <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-4">
                <h4 className="font-semibold text-reflect-purple mb-2">🔄 Automated Exports</h4>
                <p className="text-gray-300 text-sm">
                  Set up scheduled exports in Settings → Automation to maintain regular backups.
                </p>
              </div>
            </div>
            
            <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-reflect-purple">Your Data, Your Control</h3>
              <p className="text-gray-300 mb-4">
                Export features ensure you always have access to your data, whether for backup, migration, or sharing purposes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/docs/advanced-search" className="inline-flex items-center text-reflect-purple hover:underline">
                  Advanced Search →
                </Link>
                <Link to="/docs/custom-templates" className="inline-flex items-center text-reflect-purple hover:underline">
                  Custom Templates →
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

export default DataExport;
