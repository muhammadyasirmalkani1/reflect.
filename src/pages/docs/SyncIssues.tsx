
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, RefreshCw, AlertTriangle, CheckCircle, Wifi, WifiOff, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SyncIssues = () => {
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
          <h1 className="text-4xl font-bold mb-6">Sync Issues</h1>
          <p className="text-xl text-gray-300 mb-8">
            Troubleshoot and resolve synchronization problems with Reflect.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <WifiOff className="w-6 h-6 mr-3 text-red-400" />
              Common Sync Problems
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-reflect-dark/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
                    Changes Not Syncing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Check your internet connection</li>
                    <li>• Verify you're logged into the same account</li>
                    <li>• Force refresh the app</li>
                    <li>• Clear browser cache and cookies</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-reflect-dark/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-400" />
                    Slow Sync Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Close unnecessary browser tabs</li>
                    <li>• Check for large file attachments</li>
                    <li>• Restart the application</li>
                    <li>• Update to the latest version</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <RefreshCw className="w-6 h-6 mr-3 text-reflect-purple" />
              Quick Fixes
            </h2>
            <div className="bg-reflect-dark/30 border border-white/10 rounded-lg p-6">
              <ol className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="bg-reflect-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                  <div>
                    <strong>Force Sync:</strong> Click the sync icon in the top navigation and select "Force Sync"
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-reflect-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                  <div>
                    <strong>Check Sync Status:</strong> Look for the sync indicator in the bottom status bar
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-reflect-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                  <div>
                    <strong>Restart Application:</strong> Close and reopen Reflect to reset the sync process
                  </div>
                </li>
              </ol>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
              Advanced Troubleshooting
            </h2>
            <div className="space-y-4">
              <div className="bg-reflect-dark/30 border border-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Conflict Resolution</h3>
                <p className="text-gray-300">
                  When sync conflicts occur, Reflect will show a conflict resolution dialog. 
                  Choose which version to keep or merge changes manually.
                </p>
              </div>
              <div className="bg-reflect-dark/30 border border-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Reset Sync State</h3>
                <p className="text-gray-300">
                  As a last resort, you can reset your sync state in Settings &gt; Advanced &gt; Reset Sync. 
                  This will re-download all your data from the server.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-400 mb-4">Still having sync issues?</p>
            <Link to="/docs/contact-support">
              <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity">
                Contact Support
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SyncIssues;
