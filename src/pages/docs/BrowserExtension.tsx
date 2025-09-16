
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Chrome, Globe, Monitor, Bookmark, Zap, Shield, Download, MousePointer, Keyboard, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const BrowserExtension = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-reflect-dark">
      <Navbar />
      
      <main className="pt-32 pb-16 max-w-4xl mx-auto px-6">
        <Link to="/docs" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Docs Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-6">Browser Extension</h1>
          <p className="text-xl text-gray-300 mb-8">
            Capture insights, save articles, and access your knowledge base directly from your browser with the Reflect extension.
          </p>
        </motion.div>

        {/* Browser Support */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Supported Browsers</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Chrome className="w-6 h-6 mr-3 text-blue-400" />
                  Chrome
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-4">Full feature support with sync across devices.</p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  <Download className="w-4 h-4 mr-2" />
                  Chrome Web Store
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-orange-400" />
                  Firefox
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-4">Complete functionality with enhanced privacy features.</p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  <Download className="w-4 h-4 mr-2" />
                  Firefox Add-ons
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Monitor className="w-6 h-6 mr-3 text-blue-600" />
                  Edge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-4">Optimized for Microsoft ecosystem integration.</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Download className="w-4 h-4 mr-2" />
                  Edge Add-ons
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-reflect-purple" />
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Bookmark className="w-5 h-5 mr-2 text-green-400" />
                  Web Clipper
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Save entire articles, selected text, or webpage screenshots directly to your Reflect knowledge base.</p>
              </CardContent>
            </Card>
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <MousePointer className="w-5 h-5 mr-2 text-blue-400" />
                  Quick Capture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Right-click any text or image to instantly save it as a note with automatic source attribution.</p>
              </CardContent>
            </Card>
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Keyboard className="w-5 h-5 mr-2 text-purple-400" />
                  Keyboard Shortcuts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Use customizable hotkeys to quickly access search, create notes, or open the extension popup.</p>
              </CardContent>
            </Card>
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-red-400" />
                  Privacy First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">No tracking, minimal permissions, and secure sync with your Reflect account.</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Installation Guide */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Installation & Setup</h2>
          
          <div className="space-y-6">
            <Card className="bg-reflect-dark/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">1. Install the Extension</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Download and install the extension from your browser's official store.
                </p>
                <div className="bg-reflect-dark/50 border border-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Installation Steps:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Visit your browser's extension store</li>
                    <li>• Search for "Reflect" or use the direct link</li>
                    <li>• Click "Add to [Browser]" or "Install"</li>
                    <li>• Confirm the installation and permissions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-reflect-dark/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">2. Connect Your Account</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Link the extension to your Reflect account to sync your notes and preferences.
                </p>
                <div className="bg-reflect-dark/50 border border-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Connection Process:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Click the Reflect icon in your browser toolbar</li>
                    <li>• Choose "Sign In" or "Connect Account"</li>
                    <li>• Enter your Reflect credentials</li>
                    <li>• Authorize the extension to access your notes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-reflect-dark/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">3. Configure Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Customize the extension settings to match your workflow and preferences.
                </p>
                <div className="bg-reflect-dark/50 border border-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Customization Options:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Set keyboard shortcuts for quick actions</li>
                    <li>• Choose default folders for saved content</li>
                    <li>• Configure auto-tagging rules</li>
                    <li>• Set up content formatting preferences</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Usage Guide */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-6">How to Use</h2>
          
          <div className="space-y-4">
            {[
              {
                title: "Save Entire Articles",
                description: "Click the Reflect icon and select 'Save Page' to capture the full article with formatting, images, and metadata.",
                shortcut: "Ctrl/Cmd + Shift + S"
              },
              {
                title: "Clip Selected Text",
                description: "Highlight any text on a webpage and right-click to save just the selected content with source attribution.",
                shortcut: "Right-click → Save to Reflect"
              },
              {
                title: "Quick Note Creation",
                description: "Use the extension popup to create a new note instantly, with the current page URL automatically included.",
                shortcut: "Ctrl/Cmd + Shift + N"
              },
              {
                title: "Search Your Notes",
                description: "Open the extension popup and use the search bar to find relevant notes from your knowledge base.",
                shortcut: "Ctrl/Cmd + Shift + F"
              },
              {
                title: "Smart Context Suggestions",
                description: "The extension analyzes the current page and suggests related notes from your knowledge base.",
                shortcut: "Automatic"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-reflect-dark/30 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    {item.title}
                    <span className="text-sm font-mono bg-reflect-purple/20 px-2 py-1 rounded text-reflect-purple">
                      {item.shortcut}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Keyboard Shortcuts */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Keyboard Shortcuts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-reflect-dark/30 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Default Shortcuts</h3>
              <div className="space-y-3">
                {[
                  { action: "Open extension popup", shortcut: "Ctrl/Cmd + Shift + R" },
                  { action: "Save current page", shortcut: "Ctrl/Cmd + Shift + S" },
                  { action: "Create quick note", shortcut: "Ctrl/Cmd + Shift + N" },
                  { action: "Search notes", shortcut: "Ctrl/Cmd + Shift + F" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{item.action}</span>
                    <span className="font-mono bg-reflect-purple/20 px-2 py-1 rounded text-reflect-purple text-sm">
                      {item.shortcut}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-reflect-dark/30 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Customizable Actions</h3>
              <p className="text-gray-300 text-sm mb-4">
                You can customize these shortcuts in the extension settings:
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Right-click on extension icon</li>
                <li>• Select "Options" or "Settings"</li>
                <li>• Navigate to "Keyboard Shortcuts"</li>
                <li>• Click on any shortcut to modify it</li>
                <li>• Save your changes</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "Does the extension work offline?",
                answer: "The extension can capture content offline, but syncing with your Reflect account requires an internet connection. Captured content will sync once you're back online."
              },
              {
                question: "What permissions does the extension need?",
                answer: "The extension only requests minimal permissions: active tab access for content capture, storage for caching, and network access for syncing with Reflect servers."
              },
              {
                question: "Can I customize what gets saved?",
                answer: "Yes, you can configure auto-tagging rules, default folders, content formatting preferences, and exclude certain websites from being captured."
              },
              {
                question: "How does the extension handle sensitive content?",
                answer: "The extension respects your privacy settings and can be configured to exclude sensitive domains, private browsing sessions, or specific content types."
              }
            ].map((faq, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger
                  className="w-full text-left p-4 bg-reflect-dark/30 border border-white/10 rounded-lg hover:border-reflect-purple/30 transition-colors"
                  onClick={() => toggleSection(`faq-${index}`)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{faq.question}</h3>
                    <span className="text-reflect-purple">
                      {expandedSection === `faq-${index}` ? '−' : '+'}
                    </span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 p-4 bg-reflect-dark/20 border border-white/5 rounded-lg">
                  <p className="text-gray-300">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </motion.section>

        {/* Troubleshooting */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Troubleshooting</h2>
          <div className="bg-reflect-dark/30 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Common Issues</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Extension Not Appearing</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Check if the extension is enabled in browser settings</li>
                  <li>• Try refreshing the current page</li>
                  <li>• Restart your browser</li>
                  <li>• Reinstall the extension if necessary</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Sync Issues</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Verify your internet connection</li>
                  <li>• Check if you're signed in to your Reflect account</li>
                  <li>• Try disconnecting and reconnecting your account</li>
                  <li>• Clear extension cache in browser settings</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Content Not Saving</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Ensure the website allows content scraping</li>
                  <li>• Check if the page has anti-bot measures</li>
                  <li>• Try saving selected text instead of the full page</li>
                  <li>• Verify your Reflect account has available storage</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Get Started */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-reflect-purple/10 to-blue-500/10 border border-reflect-purple/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Install the Extension?</h2>
            <p className="text-gray-300 mb-6">
              Start capturing knowledge from anywhere on the web with the Reflect browser extension.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-reflect-purple hover:bg-reflect-purple/80">
                <Download className="w-4 h-4 mr-2" />
                Install Extension
              </Button>
              <Button variant="outline" className="border-reflect-purple/30 hover:bg-reflect-purple/10">
                <Settings className="w-4 h-4 mr-2" />
                View All Features
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default BrowserExtension;
