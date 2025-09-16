
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, FileText } from "lucide-react";

const SupportSection = () => {
  return (
    <div className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our support team is here to help you get the most out of Reflect.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-reflect-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-reflect-purple">
              <MessageCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
            <p className="text-gray-400 mb-6">
              Chat with our support team directly from the app. Available Monday-Friday, 9am-5pm PST.
            </p>
            <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity w-full">
              Open Chat
            </Button>
          </motion.div>
          
          <motion.div
            className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-reflect-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-reflect-purple">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Email Support</h3>
            <p className="text-gray-400 mb-6">
              Send us an email and we'll get back to you within 24 hours, even on weekends.
            </p>
            <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity w-full">
              Email Us
            </Button>
          </motion.div>
          
          <motion.div
            className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-reflect-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-reflect-purple">
              <FileText className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Submit a Ticket</h3>
            <p className="text-gray-400 mb-6">
              For complex issues, submit a detailed support ticket and we'll investigate.
            </p>
            <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity w-full">
              Submit Ticket
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
