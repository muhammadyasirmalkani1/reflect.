
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Upload, Check, AlertCircle, FileText, Database, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const NotionImport = () => {
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
          <h1 className="text-4xl font-bold mb-6">Notion Import</h1>
          <p className="text-xl text-gray-300 mb-8">
            Seamlessly migrate your Notion workspace to Reflect while preserving structure and content.
          </p>
        </motion.div>

        {/* Overview */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Database className="w-6 h-6 mr-3 text-reflect-purple" />
            Import Overview
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-400" />
                  Pages & Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Import all your Notion pages, databases, and hierarchical structure.</p>
              </CardContent>
            </Card>
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-400" />
                  Team Workspaces
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Migrate shared workspaces with proper permissions and collaboration.</p>
              </CardContent>
            </Card>
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-purple-400" />
                  Preserve Metadata
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Keep creation dates, authors, tags, and other important metadata intact.</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Step-by-step Guide */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Step-by-Step Import Process</h2>
          
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Export from Notion",
                content: "Navigate to Settings & Members > Settings > Export content. Select 'Export all workspace content' and choose HTML format for best compatibility."
              },
              {
                step: 2,
                title: "Prepare Your Data",
                content: "Download the export file and extract the ZIP archive. Review the folder structure to understand how your content is organized."
              },
              {
                step: 3,
                title: "Start Import Process",
                content: "In Reflect, go to Settings > Import Data > Notion Import. Click 'Choose Files' and select your extracted Notion export folder."
              },
              {
                step: 4,
                title: "Configure Import Settings",
                content: "Choose which content types to import, set up workspace organization, and configure user permissions for team imports."
              },
              {
                step: 5,
                title: "Review & Import",
                content: "Preview the import structure and mapping. Click 'Start Import' to begin the migration process. This may take several minutes for large workspaces."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-reflect-dark/30 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <div className="w-8 h-8 bg-reflect-purple rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                      {item.step}
                    </div>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Supported Content Types */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Supported Content Types</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-reflect-dark/30 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center text-green-400">
                <Check className="w-5 h-5 mr-2" />
                Fully Supported
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Text content and formatting</li>
                <li>• Headers and subheaders</li>
                <li>• Lists (ordered and unordered)</li>
                <li>• Tables and databases</li>
                <li>• Images and attachments</li>
                <li>• Links (internal and external)</li>
                <li>• Code blocks</li>
                <li>• Quotes and callouts</li>
              </ul>
            </div>
            <div className="bg-reflect-dark/30 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center text-yellow-400">
                <AlertCircle className="w-5 h-5 mr-2" />
                Limited Support
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Embedded content (converted to links)</li>
                <li>• Complex formulas (basic ones supported)</li>
                <li>• Advanced database views</li>
                <li>• Real-time collaboration history</li>
                <li>• Custom integrations</li>
                <li>• Advanced permissions</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "How long does the import process take?",
                answer: "Import time depends on the size of your workspace. Small workspaces (under 100 pages) typically take 2-5 minutes, while large workspaces (1000+ pages) may take 30-60 minutes."
              },
              {
                question: "Will my Notion workspace structure be preserved?",
                answer: "Yes, Reflect maintains your folder hierarchy, page relationships, and database structures during the import process."
              },
              {
                question: "Can I import specific pages instead of my entire workspace?",
                answer: "Currently, you can import your entire workspace or individual pages. Selective folder imports will be available in a future update."
              },
              {
                question: "What happens to my Notion databases?",
                answer: "Notion databases are converted to Reflect's structured notes with preserved properties, filters, and sorting options where possible."
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
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Troubleshooting</h2>
          <div className="bg-reflect-dark/30 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Common Issues</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Import Fails to Start</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Ensure your export file is in HTML format</li>
                  <li>• Check that the ZIP file was fully extracted</li>
                  <li>• Verify you have sufficient storage space</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Missing Content</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Some content types may not be supported yet</li>
                  <li>• Check the import log for skipped items</li>
                  <li>• Contact support for assistance with specific content</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Slow Import Speed</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Large files and images take longer to process</li>
                  <li>• Consider importing in smaller batches</li>
                  <li>• Ensure stable internet connection</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Get Started */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-reflect-purple/10 to-blue-500/10 border border-reflect-purple/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Import Your Notion Workspace?</h2>
            <p className="text-gray-300 mb-6">
              Start your migration today and experience the power of Reflect's intelligent note-taking.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-reflect-purple hover:bg-reflect-purple/80">
                <Upload className="w-4 h-4 mr-2" />
                Start Import
              </Button>
              <Button variant="outline" className="border-reflect-purple/30 hover:bg-reflect-purple/10">
                <Download className="w-4 h-4 mr-2" />
                Export from Notion
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default NotionImport;
