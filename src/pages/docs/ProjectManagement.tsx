
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckSquare, Calendar, Users, Target, BarChart3, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const ProjectManagement = () => {
  const [projectProgress, setProjectProgress] = useState(65);

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
            Project <span className="cosmic-text-gradient">Management</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Turn Reflect into your central project management hub with structured workflows and clear tracking systems.
          </p>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-white">Project Structure Framework</h2>
            
            <p className="text-gray-300 mb-6">
              Every project in Reflect should follow a consistent structure for easy navigation and management:
            </p>

            <div className="bg-black/30 rounded-lg p-4 mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Project Template Structure</span>
              </div>
              <pre className="text-sm text-gray-300">
{`# [Project Name]

## Project Overview
- **Start Date:** YYYY-MM-DD
- **Target Completion:** YYYY-MM-DD
- **Project Manager:** [[Name]]
- **Team Members:** [[Member 1]], [[Member 2]]
- **Status:** In Progress / On Hold / Completed

## Objectives & Goals
- [ ] Primary objective 1
- [ ] Primary objective 2
- [ ] Secondary objective 1

## Current Sprint/Phase
- **Phase:** Planning / Execution / Review
- **Focus:** [Current focus area]
- **Deadline:** YYYY-MM-DD

## Quick Links
- [[Meeting Notes]]
- [[Requirements Document]]
- [[Timeline & Milestones]]
- [[Team Communication]]
- [[Risk Assessment]]`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Project Tracking Methods</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <CheckSquare className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">Task Management</h3>
                <p className="text-gray-300 text-sm mb-3">Track individual tasks and their completion status</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Use checkboxes for actionable items</li>
                  <li>• Add due dates and priorities</li>
                  <li>• Link to related documents</li>
                  <li>• Tag by project phase</li>
                </ul>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Calendar className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">Timeline Planning</h3>
                <p className="text-gray-300 text-sm mb-3">Visual project timeline with key milestones</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Create milestone notes</li>
                  <li>• Track dependencies</li>
                  <li>• Monitor critical path</li>
                  <li>• Update progress regularly</li>
                </ul>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <Users className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">Team Coordination</h3>
                <p className="text-gray-300 text-sm mb-3">Keep track of team members and their responsibilities</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Individual team member pages</li>
                  <li>• Role and responsibility matrix</li>
                  <li>• Communication logs</li>
                  <li>• Performance tracking</li>
                </ul>
              </div>
              
              <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6">
                <BarChart3 className="w-8 h-8 text-reflect-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
                <p className="text-gray-300 text-sm mb-3">Monitor project health and completion status</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Weekly progress reports</li>
                  <li>• Completion percentages</li>
                  <li>• Budget and resource tracking</li>
                  <li>• Risk assessments</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Live Project Dashboard</h2>
            
            <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4 text-white">Current Project: Website Redesign</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Overall Progress</span>
                    <span className="text-sm text-reflect-purple font-semibold">{projectProgress}%</span>
                  </div>
                  <Progress value={projectProgress} className="h-2 mb-4" />
                  <Button 
                    onClick={() => setProjectProgress(Math.min(100, projectProgress + 5))}
                    size="sm"
                    className="bg-reflect-purple hover:bg-reflect-purple/80"
                  >
                    Update Progress
                  </Button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Timeline</span>
                    <span className="text-sm text-white">On Track</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Budget</span>
                    <span className="text-sm text-green-400">Under Budget</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Team Status</span>
                    <span className="text-sm text-white">All Active</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Target className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-sm font-medium text-green-400">Completed</span>
                  </div>
                  <p className="text-2xl font-bold text-white">12</p>
                  <p className="text-xs text-gray-400">tasks</p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-sm font-medium text-yellow-400">In Progress</span>
                  </div>
                  <p className="text-2xl font-bold text-white">5</p>
                  <p className="text-xs text-gray-400">tasks</p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <AlertCircle className="w-4 h-4 text-red-400 mr-2" />
                    <span className="text-sm font-medium text-red-400">Blocked</span>
                  </div>
                  <p className="text-2xl font-bold text-white">2</p>
                  <p className="text-xs text-gray-400">tasks</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Meeting Management</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">Structured Meeting Notes</h3>
            <p className="text-gray-300 mb-4">
              Use consistent meeting templates to capture decisions and action items:
            </p>
            
            <div className="bg-black/30 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Project Meeting Template</span>
              </div>
              <pre className="text-sm text-gray-300">
{`# [Project Name] - [Meeting Type] - [Date]

## Attendees
- [[Team Member 1]] - Role
- [[Team Member 2]] - Role
- [[Stakeholder 1]] - Role

## Agenda
1. Progress review
2. Blockers and challenges
3. Next sprint planning
4. Budget and timeline updates

## Decisions Made
- Decision 1: [What was decided and why]
- Decision 2: [Impact and timeline]

## Action Items
- [ ] Task 1 - Assigned to [[Person]] - Due: [Date]
- [ ] Task 2 - Assigned to [[Person]] - Due: [Date]

## Next Meeting
- **Date:** [Next meeting date]
- **Focus:** [Main topics for next time]
- **Prep Required:** [What attendees should prepare]`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Risk Management</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">Risk Assessment Matrix</h3>
            <p className="text-gray-300 mb-4">
              Track potential project risks and mitigation strategies:
            </p>
            
            <div className="bg-reflect-dark/60 border border-white/10 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-red-400 mb-2">High Risk</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Key team member departure</li>
                    <li>• Budget overrun &gt; 20%</li>
                    <li>• Major scope changes</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-400 mb-2">Medium Risk</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Technology challenges</li>
                    <li>• Timeline delays</li>
                    <li>• Resource conflicts</li>
                  </ul>
                </div>
                
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-green-400 mb-2">Low Risk</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Minor feature changes</li>
                    <li>• Communication gaps</li>
                    <li>• Documentation delays</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Project Closure</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">Post-Project Review</h3>
            <p className="text-gray-300 mb-4">
              Capture lessons learned for future projects:
            </p>
            
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                What went well and why?
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                What could be improved?
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                What would we do differently?
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-reflect-purple rounded-full mr-3"></span>
                Key success factors to replicate
              </li>
            </ul>

            <div className="bg-reflect-purple/10 border border-reflect-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-reflect-purple">Project Management Best Practices</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Review and update project status weekly</li>
                <li>• Keep stakeholders informed with regular reports</li>
                <li>• Document all major decisions with rationale</li>
                <li>• Use tags to track project phases and priorities</li>
                <li>• Link all project notes to create a complete picture</li>
                <li>• Archive completed projects but keep them searchable</li>
              </ul>
              <Link to="/docs/all" className="inline-flex items-center text-reflect-purple hover:underline mt-4">
                View All Documentation →
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectManagement;
