
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out Reflect",
    features: [
      "Up to 100 notes",
      "Basic AI assistance",
      "Knowledge graph",
      "Mobile and desktop apps",
      "1GB storage",
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$10",
    period: "/month",
    description: "Everything you need for serious note taking",
    features: [
      "Unlimited notes",
      "Advanced AI features",
      "Priority support",
      "10GB storage",
      "Offline mode",
      "Collaborative editing"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Team",
    price: "$20",
    period: "/user/month",
    description: "Collaborative knowledge for teams",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Team spaces",
      "Admin controls",
      "API access",
      "Advanced security",
      "Custom integrations"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <div className="py-20 relative" id="pricing">
      {/* Background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-reflect-purple/10 rounded-full blur-3xl opacity-50" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Simple, transparent <span className="cosmic-text-gradient">pricing</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose the plan that's right for you, and start thinking better with Reflect.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`
                relative rounded-2xl overflow-hidden
                ${plan.popular ? 'border-2 border-reflect-purple' : 'border border-white/10'} 
              `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-reflect-purple text-white text-xs font-semibold px-3 py-1 rounded-bl-md">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`p-8 bg-reflect-dark/50 backdrop-blur-sm h-full flex flex-col`}>
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-reflect-purple mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={
                    plan.popular 
                      ? "bg-cosmic-gradient hover:opacity-90 transition-opacity w-full"
                      : "bg-reflect-dark border border-reflect-purple/30 hover:bg-reflect-purple/10 text-white w-full"
                  }
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
