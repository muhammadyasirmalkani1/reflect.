
import DocCategoryCard from "./DocCategoryCard";
import { ReactNode } from "react";

interface Article {
  title: string;
  url: string;
}

interface DocCategory {
  name: string;
  icon: ReactNode;
  articles: Article[];
}

interface DocCategoriesProps {
  categories: DocCategory[];
}

const DocCategories = ({ categories }: DocCategoriesProps) => {
  return (
    <div className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <DocCategoryCard 
              key={index}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocCategories;
