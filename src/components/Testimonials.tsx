
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Reflect has completely transformed how I organize my thoughts and research. The AI suggestions are eerily accurate and helpful.",
    name: "Sarah Johnson",
    title: "Product Designer",
    company: "Figma"
  },
  {
    quote: "As a researcher, I need to connect ideas across hundreds of papers. Reflect's knowledge graph makes this trivially easy.",
    name: "Dr. Michael Chen",
    title: "Neuroscientist",
    company: "Stanford University"
  },
  {
    quote: "My team uses Reflect for all our project documentation. The collaborative features are incredible for keeping everyone on the same page.",
    name: "Alex Rodriguez",
    title: "Engineering Lead",
    company: "Stripe"
  }
];

const Testimonials = () => {
  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] bg-reflect-purple/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Loved by <span className="cosmic-text-gradient">thinkers</span> worldwide
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of writers, researchers, and knowledge workers who use Reflect daily.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Quote mark */}
              <div className="absolute top-4 left-4 text-reflect-purple/20 text-6xl font-serif">"</div>
              
              <div className="relative">
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
