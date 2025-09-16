
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { docCategories } from "@/components/docs/DocData";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const formatCategory = (str: string) => {
  // Converts url param like "getting-started" to "Getting Started"
  return str
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
};

const DocsCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryName = formatCategory(category || "");
  const docCategory = docCategories.find(
    (c) => c.name.toLowerCase() === categoryName.toLowerCase()
  );

  if (!docCategory) {
    return (
      <div className="min-h-screen bg-reflect-dark flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mb-4 text-red-400">Category not found</h1>
          <Link to="/docs" className="text-reflect-purple hover:underline">
            Back to Docs Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-reflect-dark flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 max-w-3xl mx-auto px-6">
        <Link to="/docs" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Docs Home
        </Link>
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {docCategory.name}
        </motion.h1>
        <div className="mb-8 text-gray-300">
          Browse articles related to <span className="text-reflect-purple font-semibold">{docCategory.name}</span>.
        </div>
        <div className="space-y-5">
          {docCategory.articles.map((article, i) => (
            <motion.div
              key={article.title}
              className="bg-reflect-dark/60 border border-white/10 rounded-lg p-5 hover:border-reflect-purple/30 transition-colors"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div className="flex items-center space-x-2">
                <span className="text-reflect-purple font-medium">
                  {i + 1 < 10 ? `0${i + 1}` : i + 1}.
                </span>
                <span className="text-lg font-medium">{article.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DocsCategoryPage;
