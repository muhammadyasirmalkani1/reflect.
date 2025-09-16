
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  BookOpen, 
  FileText, 
  Lock, 
  Plus, 
  Search, 
  Settings,
  User,
  Vault
} from "lucide-react";

const Dashboard = () => {
  // Mock data - replace with real data from Supabase
  const stats = {
    totalNotes: 127,
    vaultItems: 23,
    recentActivity: 8
  };

  return (
    <div className="min-h-screen bg-reflect-dark">
      {/* Header */}
      <header className="border-b border-white/10 bg-reflect-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-cosmic-gradient flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white">Dashboard</h1>
              <p className="text-sm text-gray-400">Welcome back, User!</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <User className="w-4 h-4 mr-2" />
              Profile
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-reflect-dark/60 border border-white/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Notes</CardTitle>
              <FileText className="h-4 w-4 text-reflect-purple" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalNotes}</div>
              <p className="text-xs text-gray-400">+12 from last month</p>
            </CardContent>
          </Card>
          
          <Card className="bg-reflect-dark/60 border border-white/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Vault Items</CardTitle>
              <Vault className="h-4 w-4 text-reflect-purple" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.vaultItems}</div>
              <p className="text-xs text-gray-400">Secure storage</p>
            </CardContent>
          </Card>
          
          <Card className="bg-reflect-dark/60 border border-white/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Recent Activity</CardTitle>
              <BarChart3 className="h-4 w-4 text-reflect-purple" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.recentActivity}</div>
              <p className="text-xs text-gray-400">Actions today</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-reflect-dark/60 border border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Plus className="w-5 h-5 mr-2 text-reflect-purple" />
                Quick Actions
              </CardTitle>
              <CardDescription className="text-gray-400">
                Common tasks to get you started
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-cosmic-gradient hover:opacity-90">
                <FileText className="w-4 h-4 mr-2" />
                Create New Note
              </Button>
              <Link to="/vault" className="block">
                <Button variant="outline" className="w-full justify-start border-white/20 text-white hover:bg-white/10">
                  <Vault className="w-4 h-4 mr-2" />
                  Access Vault
                </Button>
              </Link>
              <Button variant="outline" className="w-full justify-start border-white/20 text-white hover:bg-white/10">
                <Search className="w-4 h-4 mr-2" />
                Search Notes
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-reflect-dark/60 border border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-reflect-purple" />
                Recent Notes
              </CardTitle>
              <CardDescription className="text-gray-400">
                Your latest thoughts and ideas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {["Project Planning Notes", "Meeting Summary - Q4", "Research Ideas"].map((note, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 border border-white/5">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-3 text-gray-400" />
                      <span className="text-white text-sm">{note}</span>
                    </div>
                    <span className="text-xs text-gray-400">2h ago</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Links */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="text-gray-400 hover:text-white">
              ← Back to Home
            </Link>
            <Link to="/docs" className="text-gray-400 hover:text-white">
              Documentation
            </Link>
            <Link to="/company" className="text-gray-400 hover:text-white">
              About
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
