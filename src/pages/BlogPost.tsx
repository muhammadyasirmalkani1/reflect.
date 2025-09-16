import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Tag } from "lucide-react";
import { getPostById, getRelatedPosts } from "@/data/blogData";
import NewsletterSignup from "@/components/NewsletterSignup";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const postId = id ? parseInt(id) : null;
  
  if (!postId) {
    return <Navigate to="/blog" replace />;
  }
  
  const post = getPostById(postId);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }
  
  const relatedPosts = getRelatedPosts(post.id, post.category, 3);

  return (
    <div className="min-h-screen bg-reflect-dark">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-reflect-purple/10 rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link to="/blog">
              <Button variant="outline" className="border-reflect-purple/30 hover:bg-reflect-purple/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </motion.div>
          
          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-reflect-purple text-sm font-medium mb-4">
              {post.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.authorRole}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
              {post.readTime && (
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              )}
            </div>
            
            {/* Tags */}
            {post.tags && (
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <Tag className="w-4 h-4 mr-2 text-gray-400" />
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-reflect-purple/10 text-reflect-purple text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden"
        >
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </motion.div>
      </div>
      
      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          <div 
            className="text-gray-300 leading-relaxed"
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.75'
            }}
            dangerouslySetInnerHTML={{ 
              __html: post.content
                .replace(/\n\n/g, '</p><p class="mb-6">')
                .replace(/^/, '<p class="mb-6">')
                .replace(/$/, '</p>')
                .replace(/## (.*?)$/gm, '<h2 class="text-2xl font-bold mt-12 mb-6 text-white">$1</h2>')
                .replace(/### (.*?)$/gm, '<h3 class="text-xl font-semibold mt-8 mb-4 text-white">$1</h3>')
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                .replace(/- (.*?)$/gm, '<li class="mb-2 ml-4">$1</li>')
                .replace(/(<li.*?>.*?<\/li>)/gs, '<ul class="list-disc pl-6 mb-6 space-y-2">$1</ul>')
                .replace(/(\d+)\. (.*?)$/gm, '<li class="mb-2 ml-4">$2</li>')
                .replace(/(<li.*?>.*?<\/li>)/gs, '<ol class="list-decimal pl-6 mb-6 space-y-2">$1</ol>')
            }}
          />
        </motion.div>
      </div>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="py-16 bg-reflect-dark/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Related Articles
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="inline-block text-reflect-purple text-sm font-medium mb-2">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{relatedPost.date}</span>
                      <Link 
                        to={`/blog/${relatedPost.id}`}
                        className="text-reflect-purple hover:underline"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/blog">
                <Button 
                  variant="outline" 
                  className="border-reflect-purple/30 hover:bg-reflect-purple/10"
                >
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
      
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default BlogPost;