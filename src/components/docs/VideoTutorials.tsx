
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const tutorials = [
  {
    title: "Getting Started with Reflect",
    duration: "6:42",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Setting Up Your Knowledge Graph",
    duration: "8:15",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    title: "AI Assistant Features",
    duration: "10:24",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  }
];

const VideoTutorials = () => {
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
          <h2 className="text-3xl font-bold mb-4">Video Tutorials</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Visual learners? Watch our detailed video guides to get the most out of Reflect.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={index}
              className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="relative">
                <img 
                  src={tutorial.thumbnail} 
                  alt={tutorial.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-14 h-14 rounded-full bg-reflect-purple/90 flex items-center justify-center cursor-pointer hover:bg-reflect-purple transition-colors">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs">
                  {tutorial.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">{tutorial.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoTutorials;
