
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, AlertTriangle, XCircle, Info, CheckCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CommonErrors = () => {
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
          <h1 className="text-4xl font-bold mb-6">Common Errors</h1>
          <p className="text-xl text-gray-300 mb-8">
            Quick solutions to the most frequently encountered issues in Reflect.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <XCircle className="w-6 h-6 mr-3 text-red-400" />
              Authentication Errors
            </h2>
            <div className="space-y-4">
              <Card className="bg-reflect-dark/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
                    "Session Expired" Error
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-300"><strong>Cause:</strong> Your login session has timed out.</p>
                    <p className="text-gray-300"><strong>Solution:</strong></p>
                    <ul className="space-y-1 text-gray-300 ml-4">
                      <li>• Log out and log back in</li>
                      <li>• Clear browser cookies for reflect.app</li>
                      <li>• Check if your password was recently changed</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-reflect-dark/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
                    "Invalid Credentials" Error
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-300"><strong>Cause:</strong> Incorrect email or password.</p>
                    <p className="text-gray-300"><strong>Solution:</strong></p>
                    <ul className="space-y-1 text-gray-300 ml-4">
                      <li>• Double-check your email address</li>
                      <li>• Use "Forgot Password" to reset</li>
                      <li>• Check for caps lock or extra spaces</li>
                    </ul>
                  </div>
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
              <Search className="w-6 h-6 mr-3 text-blue-400" />
              Data & Sync Errors
            </h2>
            <div className="space-y-4">
              <Card className="bg-reflect-dark/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
                    "Failed to Save" Error
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-300"><strong>Cause:</strong> Network connectivity or server issues.</p>
                    <p className="text-gray-300"><strong>Solution:</strong></p>
                    <ul className="space-y-1 text-gray-300 ml-4">
                      <li>• Check your internet connection</li>
                      <li>• Try saving again in a few moments</li>
                      <li>• Copy your content as backup</li>
                      <li>• Refresh the page and try again</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-reflect-dark/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
                    "Note Not Found" Error
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-300"><strong>Cause:</strong> Note was deleted or access permissions changed.</p>
                    <p className="text-gray-300"><strong>Solution:</strong></p>
                    <ul className="space-y-1 text-gray-300 ml-4">
                      <li>• Check if note was moved to trash</li>
                      <li>• Verify you have access permissions</li>
                      <li>• Try refreshing the page</li>
                      <li>• Contact the note owner if shared</li>
                    </ul>
                  </div>
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
              <Info className="w-6 h-6 mr-3 text-reflect-purple" />
              Browser & Performance Errors
            </h2>
            <div className="space-y-4">
              <Card className="bg-reflect-dark/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
                    "Page Unresponsive" Error
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-300"><strong>Cause:</strong> Browser overload or memory issues.</p>
                    <p className="text-gray-300"><strong>Solution:</strong></p>
                    <ul className="space-y-1 text-gray-300 ml-4">
                      <li>• Close other browser tabs</li>
                      <li>• Restart your browser</li>
                      <li>• Clear browser cache</li>
                      <li>• Try using incognito mode</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-reflect-dark/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
                    "Upload Failed" Error
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-300"><strong>Cause:</strong> File size limits or format restrictions.</p>
                    <p className="text-gray-300"><strong>Solution:</strong></p>
                    <ul className="space-y-1 text-gray-300 ml-4">
                      <li>• Check file size (max 25MB)</li>
                      <li>• Verify supported file formats</li>
                      <li>• Compress large files</li>
                      <li>• Try uploading one file at a time</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
              Error Prevention Tips
            </h2>
            <div className="bg-reflect-dark/30 border border-white/10 rounded-lg p-6">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Keep your browser updated to the latest version
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Save your work frequently using Ctrl+S (Cmd+S on Mac)
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Avoid opening too many notes simultaneously
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Maintain a stable internet connection while working
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Regularly clear browser cache and cookies
                </li>
              </ul>
            </div>
          </motion.section>

          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-gray-400 mb-4">Encountered an error not listed here?</p>
            <Link to="/docs/contact-support">
              <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity">
                Get Help from Support
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommonErrors;
