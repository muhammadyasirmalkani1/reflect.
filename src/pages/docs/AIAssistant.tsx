
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Brain, MessageCircle, Send, Sparkles, Zap, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AIAssistant = () => {
  const [chatMessages, setChatMessages] = useState([
    {
      type: "ai",
      message: "Hi! I'm your AI assistant. I can help you write, organize, and connect your thoughts. What would you like to work on today?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    setChatMessages(prev => [...prev, { type: "user", message: inputMessage }]);
    
    // Simulate AI response
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        type: "ai",
        message: "I understand you'd like help with that. Let me suggest some ideas and help you organize your thoughts..."
      }]);
    }, 1000);
    
    setInputMessage("");
  };

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
            AI <span className="cosmic-text-gradient">Assistant</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Your personal AI writing companion that helps you think better, write faster, and organize your ideas more effectively.
          </p>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-white">What can the AI Assistant do?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Brain className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">Writing Support</h3>
                <p className="text-gray-300">Get help with writing, editing, and improving your notes with intelligent suggestions.</p>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Sparkles className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">Idea Generation</h3>
                <p className="text-gray-300">Brainstorm new ideas and explore different perspectives on your topics.</p>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Zap className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">Smart Organization</h3>
                <p className="text-gray-300">Automatically organize and structure your thoughts for better clarity.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Try the AI Assistant</h2>
            <p className="text-gray-300 mb-6">
              Experience how the AI Assistant works by trying this live demo:
            </p>

            {/* Live Chat Demo */}
            <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-5 h-5 text-reflect-purple mr-2" />
                <h3 className="text-lg font-semibold">Live AI Chat Demo</h3>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4 mb-4 h-64 overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`mb-3 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block p-3 rounded-lg max-w-xs ${
                      msg.type === 'user' 
                        ? 'bg-reflect-purple text-white' 
                        : 'bg-gray-700 text-gray-100'
                    }`}>
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask the AI assistant anything..."
                  className="bg-black/20 border-white/20"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} className="bg-reflect-purple hover:bg-reflect-purple/80">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">1. Contextual Writing Help</h3>
            <p className="text-gray-300 mb-4">
              The AI Assistant understands the context of your notes and provides relevant suggestions:
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Grammar and style improvements
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Tone and clarity adjustments
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Content expansion suggestions
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white">2. Research Assistant</h3>
            <p className="text-gray-300 mb-4">
              Get help with research and fact-checking directly within your notes.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white">3. Note Templates</h3>
            <p className="text-gray-300 mb-6">
              The AI can suggest and create templates for different types of notes:
            </p>
            
            <div className="bg-black/30 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Meeting Notes Template</span>
                <Button variant="ghost" size="sm">
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <pre className="text-sm text-gray-300">
{`# Meeting Notes - [Date]

## Attendees
- 

## Agenda
1. 
2. 
3. 

## Discussion Points
-

## Action Items
- [ ] 
- [ ] 

## Next Steps
-`}
              </pre>
            </div>

            <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-reflect-purple">Getting Started</h3>
              <p className="text-gray-300 mb-4">
                To start using the AI Assistant, simply type "/" in any note and select "Ask AI" from the menu, or use the AI button in the toolbar.
              </p>
              <Link to="/docs/knowledge-graph" className="inline-flex items-center text-reflect-purple hover:underline">
                Next: Learn about Knowledge Graph →
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default AIAssistant;
