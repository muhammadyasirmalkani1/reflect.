
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";

const Company = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Co-founder",
      bio: "Former product lead at Google. Started Reflect after struggling to organize research for his PhD.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-founder",
      bio: "Previously led engineering teams at Dropbox. Expert in knowledge systems and distributed databases.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      name: "Marcus Williams",
      role: "Head of Design",
      bio: "Award-winning designer with experience at Airbnb and Figma. Passionate about cognitive science.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      name: "Elena Rodriguez",
      role: "Head of AI",
      bio: "PhD in machine learning from MIT. Leading our efforts to make AI assistants that truly understand context.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      name: "David Kim",
      role: "VP of Operations",
      bio: "Former operations leader at Stripe. Ensuring Reflect runs smoothly as we scale globally.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      name: "Priya Patel",
      role: "Head of Customer Success",
      bio: "Dedicated to making sure every Reflect user gets the most out of the platform.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    }
  ];
  
  return (
    <div className="min-h-screen bg-reflect-dark overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-reflect-purple/10 rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About <span className="cosmic-text-gradient">Reflect</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We're on a mission to augment human thinking and unlock the collective intelligence of teams.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Reflect began in 2023 when our founders, Alex and Sarah, found themselves drowning in information overload during their research at Stanford. They needed a better way to organize thoughts, make connections between ideas, and recall important information.
                </p>
                <p className="text-gray-300">
                  What started as a personal project soon grew into something bigger as friends and colleagues started asking to use the tool. We realized that knowledge management was a universal problem, and AI was finally advanced enough to make a real difference.
                </p>
                <p className="text-gray-300">
                  Today, Reflect is helping thousands of researchers, writers, students, and knowledge workers think better and work smarter.
                </p>
              </div>
            </div>
            <div className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="Reflect origin story" 
                className="w-full object-cover"
                style={{ height: '400px' }}
              />
            </div>
          </motion.div>
          
          {/* Our Values */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="bg-reflect-purple/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-reflect-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Augment, not Replace</h3>
                <p className="text-gray-400">
                  We believe AI should enhance human thinking, not substitute it. Our tools are designed to strengthen your natural cognitive abilities.
                </p>
              </div>
              
              <div className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="bg-reflect-purple/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-reflect-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Privacy by Design</h3>
                <p className="text-gray-400">
                  Your thoughts belong to you. We've built Reflect with end-to-end encryption and strict data controls from the ground up.
                </p>
              </div>
              
              <div className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="bg-reflect-purple/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-reflect-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Connected Knowledge</h3>
                <p className="text-gray-400">
                  Ideas don't exist in isolation. Our tools help you find unexpected connections and build a living network of your thoughts.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Team Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Team</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full object-cover h-64"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-reflect-purple mb-2">{member.role}</p>
                    <p className="text-gray-400">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Jobs Section */}
      <div className="py-16 relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're looking for passionate people to help us build the future of thinking tools.
            </p>
            <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity">
              See Open Positions
            </Button>
          </motion.div>
        </div>
      </div>
      
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Company;
