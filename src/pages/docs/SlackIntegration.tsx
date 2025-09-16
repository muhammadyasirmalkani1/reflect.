
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, MessageSquare, Bot, Bell, Search, Users, Zap, Settings, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const SlackIntegration = () => {
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
          <h1 className="text-4xl font-bold mb-6">Slack Integration</h1>
          <p className="text-xl text-gray-300 mb-8">
            Seamlessly connect Reflect with Slack to capture insights, share notes, and collaborate without leaving your workspace.
          </p>
        </motion.div>

        {/* Features Overview */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <MessageSquare className="w-6 h-6 mr-3 text-reflect-purple" />
            Integration Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Bot className="w-5 h-5 mr-2 text-blue-400" />
                  Reflect Bot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Add the Reflect bot to quickly save messages, create notes, and search your knowledge base.</p>
              </CardContent>
            </Card>
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-green-400" />
                  Smart Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Get notified when team members update shared notes or mention you in comments.</p>
              </CardContent>
            </Card>
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Search className="w-5 h-5 mr-2 text-purple-400" />
                  Quick Search
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Search your entire Reflect knowledge base directly from Slack using slash commands.</p>
              </CardContent>
            </Card>
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Users className="w-5 h-5 mr-2 text-orange-400" />
                  Team Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Share notes, collaborate on documents, and maintain team knowledge within Slack.</p>
              </CardContent>
            </Card>
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                  Automated Workflows
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Set up automated note creation from specific channels, mentions, or reactions.</p>
              </CardContent>
            </Card>
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-gray-400" />
                  Custom Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Configure integration settings, permissions, and notification preferences for your team.</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Setup Guide */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Setup Guide</h2>
          
          <div className="space-y-6">
            <Card className="bg-reflect-dark/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">1. Install the Reflect App</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Visit the Slack App Directory and search for "Reflect" or use the direct installation link.
                </p>
                <div className="bg-reflect-dark/50 border border-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Installation Steps:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Click "Add to Slack" from the Reflect app page</li>
                    <li>• Select your workspace and authorize permissions</li>
                    <li>• Choose which channels to enable integration</li>
                    <li>• Complete the setup wizard</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-reflect-dark/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">2. Connect Your Reflect Account</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Link your existing Reflect account or create a new one to sync your notes and preferences.
                </p>
                <div className="bg-reflect-dark/50 border border-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Connection Process:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Use the <code className="bg-reflect-purple/20 px-2 py-1 rounded">/reflect connect</code> command</li>
                    <li>• Follow the OAuth flow to authorize access</li>
                    <li>• Verify your account connection</li>
                    <li>• Set up initial preferences</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-reflect-dark/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">3. Configure Team Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Set up team-wide preferences, permissions, and workflow automations.
                </p>
                <div className="bg-reflect-dark/50 border border-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Configuration Options:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Default note-taking templates</li>
                    <li>• Channel-specific automation rules</li>
                    <li>• Notification preferences</li>
                    <li>• Access permissions and sharing settings</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Slash Commands */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Available Commands</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Basic Commands</h3>
              {[
                { command: "/reflect save", description: "Save the current message as a note" },
                { command: "/reflect search [query]", description: "Search your knowledge base" },
                { command: "/reflect create", description: "Create a new note" },
                { command: "/reflect share [note]", description: "Share a note with the channel" }
              ].map((cmd, index) => (
                <div key={index} className="bg-reflect-dark/30 border border-white/10 rounded-lg p-4">
                  <code className="text-reflect-purple font-mono text-sm">{cmd.command}</code>
                  <p className="text-gray-300 text-sm mt-2">{cmd.description}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Advanced Commands</h3>
              {[
                { command: "/reflect link", description: "Create smart links between notes" },
                { command: "/reflect ai [prompt]", description: "Ask the AI assistant for help" },
                { command: "/reflect template", description: "Use a note template" },
                { command: "/reflect settings", description: "Configure integration settings" }
              ].map((cmd, index) => (
                <div key={index} className="bg-reflect-dark/30 border border-white/10 rounded-lg p-4">
                  <code className="text-reflect-purple font-mono text-sm">{cmd.command}</code>
                  <p className="text-gray-300 text-sm mt-2">{cmd.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Automation Examples */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Automation Examples</h2>
          <div className="space-y-6">
            <div className="bg-reflect-dark/30 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Meeting Notes Automation</h3>
              <p className="text-gray-300 mb-4">
                Automatically create meeting notes when specific keywords are mentioned in designated channels.
              </p>
              <div className="bg-reflect-dark/50 border border-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Trigger:</h4>
                <p className="text-gray-300 text-sm mb-2">Messages containing "meeting notes" or "action items" in #meetings channel</p>
                <h4 className="font-semibold mb-2">Action:</h4>
                <p className="text-gray-300 text-sm">Create a structured note with meeting template, attendees, and key points</p>
              </div>
            </div>

            <div className="bg-reflect-dark/30 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Decision Tracking</h3>
              <p className="text-gray-300 mb-4">
                Capture important decisions and their context for future reference.
              </p>
              <div className="bg-reflect-dark/50 border border-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Trigger:</h4>
                <p className="text-gray-300 text-sm mb-2">React with 📝 emoji on any message</p>
                <h4 className="font-semibold mb-2">Action:</h4>
                <p className="text-gray-300 text-sm">Save message as decision note with context and timestamp</p>
              </div>
            </div>

            <div className="bg-reflect-dark/30 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Knowledge Sharing</h3>
              <p className="text-gray-300 mb-4">
                Automatically share relevant notes when team members ask questions.
              </p>
              <div className="bg-reflect-dark/50 border border-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Trigger:</h4>
                <p className="text-gray-300 text-sm mb-2">Questions matching existing note topics</p>
                <h4 className="font-semibold mb-2">Action:</h4>
                <p className="text-gray-300 text-sm">Suggest relevant notes and offer to share them</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "Is my data secure when using the Slack integration?",
                answer: "Yes, all data is encrypted in transit and at rest. The integration only accesses messages you explicitly choose to save, and follows strict privacy protocols."
              },
              {
                question: "Can I use the integration across multiple Slack workspaces?",
                answer: "Yes, you can connect multiple Slack workspaces to your Reflect account. Each workspace can have its own configuration and automation rules."
              },
              {
                question: "What happens if I disconnect the integration?",
                answer: "Your existing notes remain intact in Reflect. You'll lose access to Slack-specific features like commands and notifications, but can reconnect anytime."
              },
              {
                question: "Are there any limitations on the number of notes I can create?",
                answer: "The integration follows your Reflect plan limits. There are no additional restrictions imposed by the Slack integration itself."
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

        {/* Get Started */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-reflect-purple/10 to-blue-500/10 border border-reflect-purple/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Integrate with Slack?</h2>
            <p className="text-gray-300 mb-6">
              Connect your team's communication with intelligent note-taking and knowledge management.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-reflect-purple hover:bg-reflect-purple/80">
                <MessageSquare className="w-4 h-4 mr-2" />
                Install Slack App
              </Button>
              <Button variant="outline" className="border-reflect-purple/30 hover:bg-reflect-purple/10">
                View Integration Guide
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default SlackIntegration;
