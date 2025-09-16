
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Our free trial gives you full access to all Pro features for 14 days. No credit card required. At the end of your trial, you can choose to subscribe or downgrade to the free plan."
  },
  {
    question: "Can I switch between plans?",
    answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time. If you upgrade, you'll be charged the prorated amount for the remainder of your billing cycle. If you downgrade, the changes will take effect at the end of your current billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal. For Team and Enterprise plans, we also offer invoicing and wire transfers."
  },
  {
    question: "Do you offer discounts for educational institutions?",
    answer: "Yes, we offer special pricing for students, educators, and educational institutions. Please contact our sales team for more information."
  },
  {
    question: "What happens to my data if I cancel my subscription?",
    answer: "If you cancel your paid subscription, you'll be downgraded to the Free plan. You'll still have access to your notes, but some features will be limited. We never delete your data unless you explicitly request us to do so."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for all new paid subscriptions. If you're not satisfied with Reflect, contact our support team within 30 days of your initial payment for a full refund."
  }
];

const PricingPage = () => {
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
              Simple, transparent <span className="cosmic-text-gradient">pricing</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Choose the plan that's right for you. All plans include a 14-day free trial.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Pricing Component */}
      <Pricing />
      
      {/* Enterprise Section */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Enterprise Plan</h2>
                <p className="text-xl text-gray-300 mb-6">
                  For large organizations with custom requirements and advanced security needs.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-reflect-purple flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated account manager and priority support</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-reflect-purple flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom integrations and API access</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-reflect-purple flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced security features and compliance</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-reflect-purple flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>User provisioning and SSO</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2 text-reflect-purple flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom training and onboarding</span>
                  </li>
                </ul>
                
                <button className="bg-cosmic-gradient hover:opacity-90 transition-opacity text-white font-medium py-3 px-6 rounded-lg">
                  Contact Sales
                </button>
              </div>
              
              <div className="bg-reflect-dark/80 rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold mb-4">Some of our Enterprise customers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center py-4 px-2 bg-reflect-dark rounded-lg border border-white/5">
                    <p className="text-xl font-medium">Acme Corp</p>
                  </div>
                  <div className="text-center py-4 px-2 bg-reflect-dark rounded-lg border border-white/5">
                    <p className="text-xl font-medium">Globex</p>
                  </div>
                  <div className="text-center py-4 px-2 bg-reflect-dark rounded-lg border border-white/5">
                    <p className="text-xl font-medium">Initech</p>
                  </div>
                  <div className="text-center py-4 px-2 bg-reflect-dark rounded-lg border border-white/5">
                    <p className="text-xl font-medium">Umbrella</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-16 relative">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      
      <CTA />
      <Footer />
    </div>
  );
};

export default PricingPage;
