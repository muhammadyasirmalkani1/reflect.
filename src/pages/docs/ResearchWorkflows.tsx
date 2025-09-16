
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Search, BookOpen, FileText, Link2, Archive, CheckCircle, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResearchWorkflows = () => {
  const [activeWorkflow, setActiveWorkflow] = useState("academic");

  return (
    <div className="min-h-screen bg-reflect-dark flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 max-w-5xl mx-auto px-6">
        <Link to="/docs/guides" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Guides
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Research <span className="cosmic-text-gradient">Workflows</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Streamline your research process from initial questions to final insights with proven workflows in Reflect.
          </p>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-white">Research Workflow Types</h2>
            
            <Tabs value={activeWorkflow} onValueChange={setActiveWorkflow} className="mb-8">
              <TabsList className="grid w-full grid-cols-3 bg-reflect-dark/60">
                <TabsTrigger value="academic">Academic Research</TabsTrigger>
                <TabsTrigger value="market">Market Research</TabsTrigger>
                <TabsTrigger value="personal">Personal Learning</TabsTrigger>
              </TabsList>
              
              <TabsContent value="academic" className="mt-6">
                <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Academic Research Workflow</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-reflect-purple/20 rounded-full p-1 mt-1">
                        <span className="text-reflect-purple text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Research Question Development</h4>
                        <p className="text-gray-300 text-sm">Start with a clear research question and create a dedicated note to track its evolution.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-reflect-purple/20 rounded-full p-1 mt-1">
                        <span className="text-reflect-purple text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Literature Review</h4>
                        <p className="text-gray-300 text-sm">Create individual notes for each source, linking related papers and themes.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-reflect-purple/20 rounded-full p-1 mt-1">
                        <span className="text-reflect-purple text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Synthesis & Analysis</h4>
                        <p className="text-gray-300 text-sm">Use the knowledge graph to identify patterns and create synthesis notes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="market" className="mt-6">
                <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Market Research Workflow</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-reflect-purple/20 rounded-full p-1 mt-1">
                        <span className="text-reflect-purple text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Market Definition</h4>
                        <p className="text-gray-300 text-sm">Define your target market and create competitor profiles.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-reflect-purple/20 rounded-full p-1 mt-1">
                        <span className="text-reflect-purple text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Data Collection</h4>
                        <p className="text-gray-300 text-sm">Gather data from surveys, interviews, and industry reports.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-reflect-purple/20 rounded-full p-1 mt-1">
                        <span className="text-reflect-purple text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Trend Analysis</h4>
                        <p className="text-gray-300 text-sm">Identify patterns and create actionable insights.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="personal" className="mt-6">
                <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Personal Learning Workflow</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-reflect-purple/20 rounded-full p-1 mt-1">
                        <span className="text-reflect-purple text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Learning Goals</h4>
                        <p className="text-gray-300 text-sm">Set clear learning objectives and track progress.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-reflect-purple/20 rounded-full p-1 mt-1">
                        <span className="text-reflect-purple text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Resource Gathering</h4>
                        <p className="text-gray-300 text-sm">Collect books, articles, videos, and course materials.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-reflect-purple/20 rounded-full p-1 mt-1">
                        <span className="text-reflect-purple text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Active Learning</h4>
                        <p className="text-gray-300 text-sm">Create summaries, ask questions, and make connections.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <h2 className="text-2xl font-bold mb-4 text-white">The Research Process</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">1. Question Formulation</h3>
            <p className="text-gray-300 mb-4">
              Start every research project with a clear, focused question:
            </p>
            
            <div className="bg-black/30 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Research Question Template</span>
              </div>
              <pre className="text-sm text-gray-300">
{`# Research Question: [Your Question Here]

## Background
- What do we already know?
- What gaps exist in current knowledge?

## Objectives
- [ ] Primary objective
- [ ] Secondary objectives

## Success Criteria
- How will we know when we've answered the question?
- What evidence would be convincing?

## Timeline
- Start date: 
- Key milestones:
- Target completion:`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white">2. Source Management</h3>
            <p className="text-gray-300 mb-4">
              Organize your sources effectively with consistent formatting:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <BookOpen className="w-8 h-8 text-reflect-purple mb-4" />
                <h4 className="text-lg font-semibold mb-2">Academic Sources</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Author, Year, Title</li>
                  <li>• Key findings summary</li>
                  <li>• Methodology notes</li>
                  <li>• Relevance rating (1-5)</li>
                </ul>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <FileText className="w-8 h-8 text-reflect-purple mb-4" />
                <h4 className="text-lg font-semibold mb-2">Web Sources</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• URL and access date</li>
                  <li>• Author/organization</li>
                  <li>• Key points extracted</li>
                  <li>• Credibility assessment</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white">3. Note-Taking Strategy</h3>
            <p className="text-gray-300 mb-4">
              Use different note types for different purposes:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <FileText className="w-5 h-5 text-reflect-purple mr-2" />
                  <h4 className="font-semibold">Source Notes</h4>
                </div>
                <p className="text-gray-300 text-sm">Direct quotes, paraphrases, and bibliographic information from each source.</p>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Link2 className="w-5 h-5 text-reflect-purple mr-2" />
                  <h4 className="font-semibold">Connection Notes</h4>
                </div>
                <p className="text-gray-300 text-sm">Your thoughts on how sources relate to each other and to your research question.</p>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Star className="w-5 h-5 text-reflect-purple mr-2" />
                  <h4 className="font-semibold">Synthesis Notes</h4>
                </div>
                <p className="text-gray-300 text-sm">High-level summaries that combine insights from multiple sources.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white">4. Research Timeline</h3>
            <p className="text-gray-300 mb-4">
              Track your research progress with time-based organization:
            </p>
            
            <div className="bg-black/30 rounded-lg p-4 mb-6">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-reflect-purple mr-3" />
                  <span className="text-gray-300">Week 1-2: Question formulation and initial source gathering</span>
                </div>
                <div className="flex items-center">
                  <Search className="w-4 h-4 text-reflect-purple mr-3" />
                  <span className="text-gray-300">Week 3-4: Deep dive into literature review</span>
                </div>
                <div className="flex items-center">
                  <Archive className="w-4 h-4 text-reflect-purple mr-3" />
                  <span className="text-gray-300">Week 5-6: Data analysis and synthesis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-reflect-purple mr-3" />
                  <span className="text-gray-300">Week 7-8: Conclusions and documentation</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Advanced Research Techniques</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">Citation Tracking</h3>
            <p className="text-gray-300 mb-4">
              Follow citation trails to discover related research:
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Track which papers cite your key sources
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Look for highly cited papers in your field
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Create citation maps using Reflect's linking features
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white">Research Journal</h3>
            <p className="text-gray-300 mb-6">
              Keep a daily research journal to track insights and progress:
            </p>
            
            <div className="bg-black/30 rounded-lg p-4 mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Daily Research Journal Entry</span>
              </div>
              <pre className="text-sm text-gray-300">
{`## [Date] - Research Log

### What I worked on today:
- 

### Key insights discovered:
- 

### Questions that emerged:
- 

### Next steps:
- 

### Connections made:
- Links to: [[Related Note 1]], [[Related Note 2]]`}
              </pre>
            </div>

            <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-reflect-purple">Research Best Practices</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Always capture the source URL or citation immediately</li>
                <li>• Use tags to categorize research by theme, methodology, or time period</li>
                <li>• Create regular backup summaries in case sources become unavailable</li>
                <li>• Link research notes to related projects and goals</li>
                <li>• Review and synthesize findings weekly to maintain momentum</li>
              </ul>
              <Link to="/docs/project-management" className="inline-flex items-center text-reflect-purple hover:underline mt-4">
                Next: Project Management →
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchWorkflows;
