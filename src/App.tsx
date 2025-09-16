import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import PricingPage from "./pages/PricingPage";
import Company from "./pages/Company";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Docs from "./pages/Docs";
import DocsList from "./pages/DocsList";
import DocsCategoryPage from "./pages/docs/DocsCategoryPage";
import WelcomeToReflect from "./pages/docs/WelcomeToReflect";
import InstallingReflect from "./pages/docs/InstallingReflect";
import CreatingYourFirstNote from "./pages/docs/CreatingYourFirstNote";
import NavigatingTheInterface from "./pages/docs/NavigatingTheInterface";
import AIAssistant from "./pages/docs/AIAssistant";
import KnowledgeGraph from "./pages/docs/KnowledgeGraph";
import SmartLinking from "./pages/docs/SmartLinking";
import TagsCategories from "./pages/docs/TagsCategories";
import BuildingPersonalWiki from "./pages/docs/BuildingPersonalWiki";
import ResearchWorkflows from "./pages/docs/ResearchWorkflows";
import ProjectManagement from "./pages/docs/ProjectManagement";
import NotionImport from "./pages/docs/NotionImport";
import SlackIntegration from "./pages/docs/SlackIntegration";
import APIDocumentation from "./pages/docs/APIDocumentation";
import BrowserExtension from "./pages/docs/BrowserExtension";
import SyncIssues from "./pages/docs/SyncIssues";
import PerformanceOptimization from "./pages/docs/PerformanceOptimization";
import CommonErrors from "./pages/docs/CommonErrors";
import ContactSupport from "./pages/docs/ContactSupport";
import CustomTemplates from "./pages/docs/CustomTemplates";
import KeyboardShortcuts from "./pages/docs/KeyboardShortcuts";
import AdvancedSearch from "./pages/docs/AdvancedSearch";
import DataExport from "./pages/docs/DataExport";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Vault from "./pages/Vault";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/company" element={<Company />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/docs/all" element={<DocsList />} />
          {/* Category pages */}
          <Route path="/docs/getting-started" element={<DocsCategoryPage />} />
          <Route path="/docs/features" element={<DocsCategoryPage />}  />
          <Route path="/docs/guides" element={<DocsCategoryPage />} />
          <Route path="/docs/integrations" element={<DocsCategoryPage />} />
          <Route path="/docs/troubleshooting" element={<DocsCategoryPage />} />
          <Route path="/docs/advanced" element={<DocsCategoryPage />} />
          {/* Getting Started pages */}
          <Route path="/docs/welcome-to-reflect" element={<WelcomeToReflect />} />
          <Route path="/docs/installing-reflect" element={<InstallingReflect />} />
          <Route path="/docs/creating-your-first-note" element={<CreatingYourFirstNote />} />
          <Route path="/docs/navigating-the-interface" element={<NavigatingTheInterface />} />
          {/* Features pages */}
          <Route path="/docs/ai-assistant" element={<AIAssistant />} />
          <Route path="/docs/knowledge-graph" element={<KnowledgeGraph />} />
          <Route path="/docs/smart-linking" element={<SmartLinking />} />
          <Route path="/docs/tags-categories" element={<TagsCategories />} />
          {/* Guides pages */}
          <Route path="/docs/building-personal-wiki" element={<BuildingPersonalWiki />} />
          <Route path="/docs/research-workflows" element={<ResearchWorkflows />} />
          <Route path="/docs/project-management" element={<ProjectManagement />} />
          {/* Integration pages */}
          <Route path="/docs/notion-import" element={<NotionImport />} />
          <Route path="/docs/slack-integration" element={<SlackIntegration />} />
          <Route path="/docs/api-documentation" element={<APIDocumentation />} />
          <Route path="/docs/browser-extension" element={<BrowserExtension />} />
          {/* Troubleshooting pages */}
          <Route path="/docs/sync-issues" element={<SyncIssues />} />
          <Route path="/docs/performance-optimization" element={<PerformanceOptimization />} />
          <Route path="/docs/common-errors" element={<CommonErrors />} />
          <Route path="/docs/contact-support" element={<ContactSupport />} />
          {/* Advanced pages */}
          <Route path="/docs/custom-templates" element={<CustomTemplates />} />
          <Route path="/docs/keyboard-shortcuts" element={<KeyboardShortcuts />} />
          <Route path="/docs/advanced-search" element={<AdvancedSearch />} />
          <Route path="/docs/data-export" element={<DataExport />} />
          {/* Dynamic fallback */}
          <Route path="/docs/:category" element={<DocsCategoryPage />} />
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
