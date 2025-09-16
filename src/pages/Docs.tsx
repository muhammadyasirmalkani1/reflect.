
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocHero from "@/components/docs/DocHero";
import DocCategories from "@/components/docs/DocCategories";
import SupportSection from "@/components/docs/SupportSection";
import VideoTutorials from "@/components/docs/VideoTutorials";
import { docCategories, popularArticles } from "@/components/docs/DocData";

const Docs = () => {
  return (
    <div className="min-h-screen bg-reflect-dark overflow-hidden">
      <Navbar />
      <DocHero popularArticles={popularArticles} />
      <DocCategories categories={docCategories} />
      <SupportSection />
      <VideoTutorials />
      <Footer />
    </div>
  );
};

export default Docs;
