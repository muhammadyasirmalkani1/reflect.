
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface Article {
  title: string;
  url: string;
}

interface DocCategoryCardProps {
  category: {
    name: string;
    icon: ReactNode;
    articles: Article[];
  };
  index: number;
}

const DocCategoryCard = ({ category, index }: DocCategoryCardProps) => {
  return (
    <motion.div
      className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="flex items-center mb-6">
        <div className="bg-reflect-purple/10 w-12 h-12 rounded-xl flex items-center justify-center mr-4 text-reflect-purple">
          {category.icon}
        </div>
        <h3 className="text-xl font-semibold">{category.name}</h3>
      </div>
      
      <ul className="space-y-3 mb-6">
        {category.articles.map((article, i) => (
          <li key={i}>
            <Link to={article.url} className="text-gray-300 hover:text-reflect-purple flex items-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
      
      <Link to={`/docs/${category.name.toLowerCase()}`}>
        <Button className="bg-reflect-dark border border-reflect-purple/30 hover:bg-reflect-purple/10 text-white w-full">
          View All
        </Button>
      </Link>
    </motion.div>
  );
};

export default DocCategoryCard;
