
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Zap, Monitor, Cpu, HardDrive, Settings, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PerformanceOptimization = () => {
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
          <h1 className="text-4xl font-bold mb-6">Performance Optimization</h1>
          <p className="text-xl text-gray-300 mb-8">
            Learn how to optimize Reflect for maximum speed and efficiency.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Zap className="w-6 h-6 mr-3 text-yellow-400" />
              Quick Performance Wins
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-reflect-dark/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <HardDrive className="w-5 h-5 mr-2 text-blue-400" />
                    Storage Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Archive old notes regularly</li>
                    <li>• Compress large attachments</li>
                    <li>• Clean up unused tags</li>
                    <li>• Remove duplicate content</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-reflect-dark/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Monitor className="w-5 h-5 mr-2 text-green-400" />
                    Browser Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Close unused browser tabs</li>
                    <li>• Clear browser cache regularly</li>
                    <li>• Disable unnecessary extensions</li>
                    <li>• Update to latest browser version</li>
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
              <Settings className="w-6 h-6 mr-3 text-reflect-purple" />
              Reflect Settings Optimization
            </h2>
            <div className="bg-reflect-dark/30 border border-white/10 rounded-lg p-6">
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="font-semibold mb-2">Sync Frequency</h3>
                  <p className="text-gray-300 text-sm">
                    Adjust sync frequency in Settings &gt; Sync. For better performance, set to "Every 5 minutes" instead of "Real-time".
                  </p>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <h3 className="font-semibold mb-2">Auto-save Interval</h3>
                  <p className="text-gray-300 text-sm">
                    Increase auto-save interval to reduce background processing. Go to Settings &gt; Editor &gt; Auto-save.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Preview Generation</h3>
                  <p className="text-gray-300 text-sm">
                    Disable automatic preview generation for large documents in Settings &gt; Performance.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Cpu className="w-6 h-6 mr-3 text-red-400" />
              System Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-reflect-dark/30 border border-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-3">Minimum Requirements</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• 4GB RAM</li>
                  <li>• Modern browser (Chrome 80+, Firefox 75+)</li>
                  <li>• Stable internet connection</li>
                  <li>• 1GB free storage</li>
                </ul>
              </div>
              <div className="bg-reflect-dark/30 border border-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-3">Recommended</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• 8GB+ RAM</li>
                  <li>• Latest browser version</li>
                  <li>• High-speed internet</li>
                  <li>• SSD storage</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <TrendingUp className="w-6 h-6 mr-3 text-green-400" />
              Performance Monitoring
            </h2>
            <div className="bg-reflect-dark/30 border border-white/10 rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                Monitor your Reflect performance using the built-in diagnostics tool:
              </p>
              <ol className="space-y-2 text-gray-300">
                <li>1. Go to Settings &gt; Advanced &gt; Diagnostics</li>
                <li>2. Click "Run Performance Test"</li>
                <li>3. Review the results and recommendations</li>
                <li>4. Apply suggested optimizations</li>
              </ol>
            </div>
          </motion.section>

          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-gray-400 mb-4">Need help with performance issues?</p>
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

export default PerformanceOptimization;
