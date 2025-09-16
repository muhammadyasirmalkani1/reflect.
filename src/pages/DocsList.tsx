
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { docCategories } from "@/components/docs/DocData";

const DocsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Flatten all articles into a single array for searching
  const allArticles = docCategories.flatMap(category => 
    category.articles.map(article => ({
      ...article,
      category: category.name
    }))
  );
  
  // Filter articles based on search query
  const filteredArticles = searchQuery.trim() === "" 
    ? allArticles 
    : allArticles.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-reflect-dark overflow-hidden">
      <Navbar />
      
      {/* Header */}
      <div className="pt-32 pb-10 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/docs" className="inline-flex items-center text-gray-400 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Docs Home
          </Link>
          
          <motion.h1 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            All Documentation Pages
          </motion.h1>
          
          {/* Search */}
          <div className="max-w-2xl relative mb-10">
            <Input 
              type="text" 
              placeholder="Search documentation..." 
              className="w-full bg-reflect-dark/70 border border-white/20 focus:border-reflect-purple text-white rounded-lg px-4 py-3 pl-12 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {docCategories.map((category, index) => (
            <motion.div 
              key={category.name}
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-reflect-purple/10 w-10 h-10 rounded-xl flex items-center justify-center mr-3 text-reflect-purple">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-semibold">{category.name}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.articles
                  .filter(article => 
                    searchQuery.trim() === "" || 
                    article.title.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((article, i) => (
                    <Link 
                      to={article.url} 
                      key={i}
                      className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-reflect-purple/30 transition-colors"
                    >
                      <h3 className="font-medium">{article.title}</h3>
                    </Link>
                  ))}
              </div>
            </motion.div>
          ))}
          
          {filteredArticles.length === 0 && searchQuery.trim() !== "" && (
            <div className="text-center py-10">
              <p className="text-gray-400 mb-4">No results found for "{searchQuery}"</p>
              <Button 
                variant="outline" 
                className="border-reflect-purple/30 hover:bg-reflect-purple/10"
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DocsList;
