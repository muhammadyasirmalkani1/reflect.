
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Mail, FileText, Clock, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSupport = () => {
  const handleLiveChat = () => {
    // In a real implementation, this would open a live chat widget
    alert("Opening live chat... (This would integrate with your actual chat system)");
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
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-6">Contact Support</h1>
          <p className="text-xl text-gray-300 mb-8">
            Get help from our expert support team whenever you need it.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <MessageCircle className="w-6 h-6 mr-3 text-reflect-purple" />
              Live Chat Support
            </h2>
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-green-400 font-semibold">Support team is online</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    Average response: 2 minutes
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Chat with our support team for immediate assistance. Our agents are available 24/7 to help you with any questions or issues.
                </p>
                <Button 
                  onClick={handleLiveChat}
                  className="bg-cosmic-gradient hover:opacity-90 transition-opacity w-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Live Chat
                </Button>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Support Channels</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-reflect-dark/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-blue-400" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Send us a detailed email and we'll get back to you within 24 hours.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>📧 support@reflect.app</p>
                    <p>⏱️ Response time: 24 hours</p>
                    <p>📋 Include: Account email, issue description</p>
                  </div>
                  <Button variant="outline" className="border-blue-400/30 hover:bg-blue-400/10 w-full">
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-reflect-dark/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-yellow-400" />
                    Support Ticket
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Create a detailed ticket for complex issues that require investigation.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>🎫 Ticket tracking system</p>
                    <p>⏱️ Response time: 12 hours</p>
                    <p>📋 Priority support available</p>
                  </div>
                  <Button variant="outline" className="border-yellow-400/30 hover:bg-yellow-400/10 w-full">
                    Create Ticket
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Phone className="w-6 h-6 mr-3 text-green-400" />
              Priority Support
            </h2>
            <Card className="bg-reflect-dark/50 border-white/10 border-l-4 border-l-green-400">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Enterprise & Pro Plans</h3>
                    <p className="text-gray-300">
                      Get priority phone support and dedicated account management.
                    </p>
                  </div>
                  <div className="bg-green-400/10 px-3 py-1 rounded-full text-green-400 text-sm">
                    Premium
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Phone support during business hours</li>
                      <li>• Dedicated account manager</li>
                      <li>• Priority ticket handling</li>
                      <li>• Screen sharing sessions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Contact:</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Phone: +1 (555) 123-REFLECT</li>
                      <li>• Hours: Mon-Fri 8AM-6PM PST</li>
                      <li>• Email: enterprise@reflect.app</li>
                    </ul>
                  </div>
                </div>
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  Upgrade for Priority Support
                </Button>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Users className="w-6 h-6 mr-3 text-reflect-purple" />
              Community Support
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-reflect-dark/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg">Community Forum</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Connect with other Reflect users and share tips, tricks, and solutions.
                  </p>
                  <Button variant="outline" className="border-reflect-purple/30 hover:bg-reflect-purple/10 w-full">
                    Visit Forum
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-reflect-dark/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg">Discord Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Join our Discord server for real-time discussions and community support.
                  </p>
                  <Button variant="outline" className="border-reflect-purple/30 hover:bg-reflect-purple/10 w-full">
                    Join Discord
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Before Contacting Support</h2>
            <div className="bg-reflect-dark/30 border border-white/10 rounded-lg p-6">
              <p className="text-gray-300 mb-4">To help us assist you faster, please:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-reflect-purple mr-2">•</span>
                  Check our <Link to="/docs" className="text-reflect-purple hover:underline">documentation</Link> and <Link to="/docs/common-errors" className="text-reflect-purple hover:underline">common errors</Link> page
                </li>
                <li className="flex items-start">
                  <span className="text-reflect-purple mr-2">•</span>
                  Include your account email and a detailed description of the issue
                </li>
                <li className="flex items-start">
                  <span className="text-reflect-purple mr-2">•</span>
                  Provide screenshots or screen recordings if relevant
                </li>
                <li className="flex items-start">
                  <span className="text-reflect-purple mr-2">•</span>
                  Mention your browser version and operating system
                </li>
                <li className="flex items-start">
                  <span className="text-reflect-purple mr-2">•</span>
                  List any error messages you've encountered
                </li>
              </ul>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactSupport;
