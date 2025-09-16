import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";
import { useState } from "react";
import { blogPosts, categories } from "@/data/blogData";

const POSTS_PER_LOAD = 6;

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_LOAD);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredPosts.length;

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + POSTS_PER_LOAD);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisiblePosts(POSTS_PER_LOAD);
  };

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
              Reflect <span className="cosmic-text-gradient">Blog</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Insights, tutorials, and stories about better thinking and knowledge management.
            </motion.p>
            
            {/* Categories */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant={selectedCategory === category ? "default" : "outline"} 
                  className={selectedCategory === category ? 
                    "bg-cosmic-gradient hover:opacity-90 transition-opacity" : 
                    "border-reflect-purple/30 hover:bg-reflect-purple/10"
                  }
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Featured Post */}
      <div className="py-8 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="inline-block text-reflect-purple text-sm font-medium mb-2">
                {displayedPosts[0]?.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {displayedPosts[0]?.title}
              </h2>
              <p className="text-gray-300 mb-6">
                {displayedPosts[0]?.excerpt}
              </p>
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <p className="font-semibold">{displayedPosts[0]?.author}</p>
                  <p className="text-sm text-gray-400">{displayedPosts[0]?.authorRole}</p>
                </div>
                <span className="text-gray-400 text-sm">{displayedPosts[0]?.date}</span>
              </div>
              <Link to={`/blog/${displayedPosts[0]?.id}`}>
                <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity">
                  Read Article
                </Button>
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img 
                src={displayedPosts[0]?.image} 
                alt={displayedPosts[0]?.title} 
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.slice(1).map((post, index) => (
              <motion.div 
                key={post.id}
                className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-reflect-purple/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block text-reflect-purple text-sm font-medium mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{post.date}</span>
                    <Link to={`/blog/${post.id}`} className="text-reflect-purple hover:underline">
                      Read more →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Load More Button */}
          {hasMorePosts && (
            <div className="mt-12 text-center">
              <Button 
                variant="outline" 
                className="border-reflect-purple/30 hover:bg-reflect-purple/10"
                onClick={loadMorePosts}
              >
                Load More Articles ({filteredPosts.length - visiblePosts} remaining)
              </Button>
            </div>
          )}
          
          {/* Show total posts when all are loaded */}
          {!hasMorePosts && filteredPosts.length > POSTS_PER_LOAD && (
            <div className="mt-12 text-center">
              <p className="text-gray-400">
                Showing all {filteredPosts.length} articles
              </p>
            </div>
          )}
        </div>
      </div>
      
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Blog;