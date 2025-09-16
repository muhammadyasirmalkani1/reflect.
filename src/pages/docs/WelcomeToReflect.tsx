
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Brain, Users } from "lucide-react";

const WelcomeToReflect = () => {
  return (
    <div className="min-h-screen bg-reflect-dark flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 max-w-4xl mx-auto px-6">
        <Link to="/docs/getting-started" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Getting Started
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to <span className="cosmic-text-gradient">Reflect</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Reflect is an AI-powered note-taking app that helps you think better by connecting your ideas and surfacing insights.
          </p>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-white">What makes Reflect different?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Brain className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
                <p className="text-gray-300">Your personal AI assistant helps you write, organize, and connect your thoughts effortlessly.</p>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Sparkles className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">Smart Linking</h3>
                <p className="text-gray-300">Automatically discover connections between your notes and ideas as you write.</p>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Users className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
                <p className="text-gray-300">Share knowledge and collaborate with your team in real-time.</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-white">Getting Started</h2>
            <p className="text-gray-300 mb-4">
              Ready to transform how you think and work? Here's what you'll learn in this documentation:
            </p>
            
            <ul className="space-y-2 text-gray-300 mb-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                How to set up your Reflect account
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Creating and organizing your first notes
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Leveraging AI to enhance your thinking
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Building a knowledge graph of connected ideas
              </li>
            </ul>
            
            <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-reflect-purple">Next Steps</h3>
              <p className="text-gray-300 mb-4">
                Continue with the installation guide to get Reflect set up on your device.
              </p>
              <Link to="/docs/installing-reflect" className="inline-flex items-center text-reflect-purple hover:underline">
                Installing Reflect →
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default WelcomeToReflect;
