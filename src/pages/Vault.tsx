
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft,
  Eye,
  EyeOff,
  Key,
  Lock,
  Plus,
  Search,
  Trash2,
  Edit,
  Copy
} from "lucide-react";

interface VaultItem {
  id: string;
  title: string;
  type: "password" | "note" | "card";
  lastModified: string;
}

const Vault = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>({});

  // Mock data - replace with real data from Supabase
  const vaultItems: VaultItem[] = [
    { id: "1", title: "Gmail Account", type: "password", lastModified: "2 hours ago" },
    { id: "2", title: "Bank Login", type: "password", lastModified: "1 day ago" },
    { id: "3", title: "Secret Project Notes", type: "note", lastModified: "3 days ago" },
    { id: "4", title: "Credit Card Info", type: "card", lastModified: "1 week ago" },
  ];

  const filteredItems = vaultItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const togglePasswordVisibility = (id: string) => {
    setShowPasswords(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "password": return <Key className="w-4 h-4" />;
      case "card": return <Key className="w-4 h-4" />;
      default: return <Lock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-reflect-dark">
      {/* Header */}
      <header className="border-b border-white/10 bg-reflect-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="text-gray-400 hover:text-white">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-white flex items-center">
                  <Lock className="w-6 h-6 mr-2 text-reflect-purple" />
                  Secure Vault
                </h1>
                <p className="text-gray-400">Your encrypted personal storage</p>
              </div>
            </div>
            
            <Button className="bg-cosmic-gradient hover:opacity-90">
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search vault items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white"
            />
          </div>
        </div>

        {/* Vault Items */}
        <div className="grid gap-4">
          {filteredItems.length === 0 ? (
            <Card className="bg-reflect-dark/60 border border-white/10">
              <CardContent className="py-8 text-center">
                <Lock className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-400">
                  {searchTerm ? "No items found matching your search." : "Your vault is empty. Add your first secure item!"}
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredItems.map((item) => (
              <Card key={item.id} className="bg-reflect-dark/60 border border-white/10 hover:border-white/20 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-reflect-purple/20">
                        {getIcon(item.type)}
                      </div>
                      <div>
                        <CardTitle className="text-white">{item.title}</CardTitle>
                        <CardDescription className="text-gray-400 capitalize">
                          {item.type} • {item.lastModified}
                        </CardDescription>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {item.type === "password" && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => togglePasswordVisibility(item.id)}
                          className="text-gray-400 hover:text-white"
                        >
                          {showPasswords[item.id] ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                {item.type === "password" && showPasswords[item.id] && (
                  <CardContent className="pt-0">
                    <div className="bg-gray-800 rounded p-3 font-mono text-sm text-gray-300">
                      ••••••••••••••
                    </div>
                  </CardContent>
                )}
              </Card>
            ))
          )}
        </div>

        {/* Security Notice */}
        <div className="mt-8">
          <Card className="bg-reflect-purple/10 border border-reflect-purple/20">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Lock className="w-5 h-5 text-reflect-purple mt-0.5" />
                <div>
                  <h3 className="font-semibold text-reflect-purple mb-2">Secure & Encrypted</h3>
                  <p className="text-gray-300 text-sm">
                    All vault items are encrypted with end-to-end encryption. Only you can access your data.
                    We recommend using strong, unique passwords for all your accounts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Vault;
