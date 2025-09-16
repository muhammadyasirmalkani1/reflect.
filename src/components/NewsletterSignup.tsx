
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your API
      console.log("Email submitted:", email);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Stay updated with our newsletter
        </h3>
        <p className="text-gray-300 mb-8">
          Get the latest Reflect updates, tips, and special offers delivered directly to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <div className="flex-grow">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-reflect-dark/70 border-white/20 focus:border-reflect-purple h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button 
            type="submit"
            className="bg-cosmic-gradient hover:opacity-90 transition-opacity h-12"
            disabled={submitted}
          >
            {submitted ? "Subscribed!" : "Subscribe"}
          </Button>
        </form>
        
        <p className="text-gray-400 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;
