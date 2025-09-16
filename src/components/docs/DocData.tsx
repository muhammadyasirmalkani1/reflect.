
import { ReactNode } from "react";
import { 
  Zap, 
  Lightbulb, 
  BookOpen, 
  Grid, 
  AlertCircle, 
  Settings
} from "lucide-react";

interface Article {
  title: string;
  url: string;
}

interface DocCategory {
  name: string;
  icon: ReactNode;
  articles: Article[];
}

export const docCategories: DocCategory[] = [
  {
    name: "Getting Started",
    icon: <Zap className="w-6 h-6" />,
    articles: [
      { title: "Welcome to Reflect", url: "/docs/welcome-to-reflect" },
      { title: "Installing Reflect", url: "/docs/installing-reflect" },
      { title: "Creating your first note", url: "/docs/creating-your-first-note" },
      { title: "Navigating the interface", url: "/docs/navigating-the-interface" }
    ]
  },
  {
    name: "Features",
    icon: <Lightbulb className="w-6 h-6" />,
    articles: [
      { title: "AI Assistant", url: "/docs/ai-assistant" },
      { title: "Knowledge Graph", url: "/docs/knowledge-graph" },
      { title: "Smart Linking", url: "/docs/smart-linking" },
      { title: "Tags & Categories", url: "/docs/tags-categories" }
    ]
  },
  {
    name: "Guides",
    icon: <BookOpen className="w-6 h-6" />,
    articles: [
      { title: "Building a personal wiki", url: "/docs/building-personal-wiki" },
      { title: "Research workflows", url: "/docs/research-workflows" },
      { title: "Project management", url: "/docs/project-management" },
      { title: "Meeting notes", url: "#" }
    ]
  },
  {
    name: "Integrations",
    icon: <Grid className="w-6 h-6" />,
    articles: [
      { title: "Notion import", url: "/docs/notion-import" },
      { title: "Slack integration", url: "/docs/slack-integration" },
      { title: "API documentation", url: "/docs/api-documentation" },
      { title: "Browser extension", url: "/docs/browser-extension" }
    ]
  },
  {
    name: "Troubleshooting",
    icon: <AlertCircle className="w-6 h-6" />,
    articles: [
      { title: "Sync issues", url: "/docs/sync-issues" },
      { title: "Performance optimization", url: "/docs/performance-optimization" },
      { title: "Common errors", url: "/docs/common-errors" },
      { title: "Contact support", url: "/docs/contact-support" }
    ]
  },
  {
    name: "Advanced",
    icon: <Settings className="w-6 h-6" />,
    articles: [
      { title: "Custom templates", url: "/docs/custom-templates" },
      { title: "Keyboard shortcuts", url: "/docs/keyboard-shortcuts" },
      { title: "Advanced search", url: "/docs/advanced-search" },
      { title: "Data export", url: "/docs/data-export" }
    ]
  }
];

export const popularArticles = [
  "Getting started with Reflect",
  "How to use the AI assistant",
  "Connecting notes with the knowledge graph",
  "Importing data from other tools",
  "Setting up team spaces"
];
