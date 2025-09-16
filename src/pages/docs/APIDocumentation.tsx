
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Key, Book, Zap, Globe, Shield, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const APIDocumentation = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExample = `curl -X GET "https://api.reflect.app/v1/notes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`;

  const createNoteExample = `{
  "title": "Meeting Notes - Q4 Planning",
  "content": "## Agenda\\n- Budget review\\n- Team goals\\n- Timeline",
  "tags": ["meetings", "planning", "q4"],
  "folder": "work/meetings"
}`;

  const responseExample = `{
  "id": "note_abc123",
  "title": "Meeting Notes - Q4 Planning",
  "content": "## Agenda\\n- Budget review\\n- Team goals\\n- Timeline",
  "tags": ["meetings", "planning", "q4"],
  "folder": "work/meetings",
  "created_at": "2023-12-01T10:00:00Z",
  "updated_at": "2023-12-01T10:00:00Z",
  "url": "https://reflect.app/note/abc123"
}`;

  return (
    <div className="min-h-screen bg-reflect-dark">
      <Navbar />
      
      <main className="pt-32 pb-16 max-w-6xl mx-auto px-6">
        <Link to="/docs" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Docs Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-6">API Documentation</h1>
          <p className="text-xl text-gray-300 mb-8">
            Build powerful integrations with Reflect's comprehensive RESTful API. Create, read, update, and manage your notes programmatically.
          </p>
        </motion.div>

        {/* API Overview */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Code className="w-6 h-6 mr-3 text-reflect-purple" />
            API Overview
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-400" />
                  RESTful
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Standard HTTP methods and status codes for predictable interactions.</p>
              </CardContent>
            </Card>
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-400" />
                  Secure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">OAuth 2.0 and API key authentication with rate limiting and encryption.</p>
              </CardContent>
            </Card>
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Book className="w-5 h-5 mr-2 text-purple-400" />
                  Well-Documented
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Comprehensive documentation with examples and interactive testing.</p>
              </CardContent>
            </Card>
            <Card className="bg-reflect-dark/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                  Fast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Optimized endpoints with caching and efficient data retrieval.</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Getting Started */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Getting Started</h2>
          
          <div className="space-y-6">
            <Card className="bg-reflect-dark/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Key className="w-5 h-5 mr-2 text-reflect-purple" />
                  1. Get Your API Key
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Generate an API key from your Reflect account settings to authenticate your requests.
                </p>
                <div className="bg-reflect-dark/50 border border-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Steps:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Go to Settings → Developer → API Keys</li>
                    <li>• Click "Generate New API Key"</li>
                    <li>• Copy and securely store your key</li>
                    <li>• Test authentication with a simple request</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-reflect-dark/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">2. Base URL and Headers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  All API requests should be made to the base URL with proper authentication headers.
                </p>
                <div className="bg-gray-900 border border-white/10 rounded-lg p-4 relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                    onClick={() => copyCode("https://api.reflect.app/v1", "base-url")}
                  >
                    {copiedCode === "base-url" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                  <div className="font-mono text-sm">
                    <div className="text-blue-400">Base URL:</div>
                    <div className="text-green-400">https://api.reflect.app/v1</div>
                    <div className="text-blue-400 mt-2">Headers:</div>
                    <div className="text-green-400">Authorization: Bearer YOUR_API_KEY</div>
                    <div className="text-green-400">Content-Type: application/json</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-reflect-dark/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">3. Make Your First Request</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Test your setup by retrieving your notes list.
                </p>
                <div className="bg-gray-900 border border-white/10 rounded-lg p-4 relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                    onClick={() => copyCode(codeExample, "first-request")}
                  >
                    {copiedCode === "first-request" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                  <pre className="font-mono text-sm text-green-400 overflow-x-auto">
                    {codeExample}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Core Endpoints */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Core Endpoints</h2>
          
          <div className="space-y-4">
            {[
              {
                method: "GET",
                endpoint: "/notes",
                description: "Retrieve all notes with optional filtering and pagination",
                params: "?limit=50&offset=0&tags=work,personal&search=meeting"
              },
              {
                method: "POST",
                endpoint: "/notes",
                description: "Create a new note with content, tags, and metadata",
                params: ""
              },
              {
                method: "GET",
                endpoint: "/notes/{id}",
                description: "Retrieve a specific note by its unique identifier",
                params: ""
              },
              {
                method: "PUT",
                endpoint: "/notes/{id}",
                description: "Update an existing note's content, tags, or metadata",
                params: ""
              },
              {
                method: "DELETE",
                endpoint: "/notes/{id}",
                description: "Permanently delete a note from your account",
                params: ""
              },
              {
                method: "GET",
                endpoint: "/search",
                description: "Search across all notes using full-text search with AI enhancement",
                params: "?q=project%20management&limit=20"
              },
              {
                method: "GET",
                endpoint: "/tags",
                description: "Retrieve all tags used in your notes with usage counts",
                params: ""
              },
              {
                method: "GET",
                endpoint: "/graph",
                description: "Get knowledge graph data showing note connections and relationships",
                params: "?depth=2&center_note={id}"
              }
            ].map((endpoint, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger
                  className="w-full text-left p-4 bg-reflect-dark/30 border border-white/10 rounded-lg hover:border-reflect-purple/30 transition-colors"
                  onClick={() => toggleSection(`endpoint-${index}`)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className={`px-2 py-1 rounded text-xs font-semibold mr-3 ${
                        endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                        endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                        endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="font-mono text-sm">{endpoint.endpoint}{endpoint.params}</code>
                    </div>
                    <span className="text-reflect-purple">
                      {expandedSection === `endpoint-${index}` ? '−' : '+'}
                    </span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 p-4 bg-reflect-dark/20 border border-white/5 rounded-lg">
                  <p className="text-gray-300 mb-4">{endpoint.description}</p>
                  {endpoint.method === 'POST' && endpoint.endpoint === '/notes' && (
                    <div>
                      <h4 className="font-semibold mb-2">Request Body Example:</h4>
                      <div className="bg-gray-900 border border-white/10 rounded-lg p-4 relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 text-gray-400 hover:text-white"
                          onClick={() => copyCode(createNoteExample, "create-note")}
                        >
                          {copiedCode === "create-note" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                        <pre className="font-mono text-sm text-green-400 overflow-x-auto">
                          {createNoteExample}
                        </pre>
                      </div>
                      <h4 className="font-semibold mb-2 mt-4">Response Example:</h4>
                      <div className="bg-gray-900 border border-white/10 rounded-lg p-4 relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 text-gray-400 hover:text-white"
                          onClick={() => copyCode(responseExample, "response")}
                        >
                          {copiedCode === "response" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                        <pre className="font-mono text-sm text-green-400 overflow-x-auto">
                          {responseExample}
                        </pre>
                      </div>
                    </div>
                  )}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </motion.section>

        {/* Rate Limits */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Rate Limits & Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-reflect-dark/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">Rate Limits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Standard requests:</span>
                    <span className="text-reflect-purple font-semibold">1000/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Search requests:</span>
                    <span className="text-reflect-purple font-semibold">100/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Bulk operations:</span>
                    <span className="text-reflect-purple font-semibold">50/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">File uploads:</span>
                    <span className="text-reflect-purple font-semibold">20/hour</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-reflect-dark/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Use pagination for large datasets</li>
                  <li>• Implement exponential backoff for retries</li>
                  <li>• Cache responses when possible</li>
                  <li>• Use webhooks for real-time updates</li>
                  <li>• Batch operations when available</li>
                  <li>• Monitor rate limit headers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* SDKs and Examples */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6">SDKs & Code Examples</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-reflect-dark/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">JavaScript/Node.js</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-4">Official SDK for JavaScript and Node.js applications.</p>
                <Button className="w-full bg-reflect-purple hover:bg-reflect-purple/80">
                  Download SDK
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-reflect-dark/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">Python</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-4">Pythonic interface for data science and automation workflows.</p>
                <Button className="w-full bg-reflect-purple hover:bg-reflect-purple/80">
                  Download SDK
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-reflect-dark/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">Go</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-4">High-performance SDK for Go applications and microservices.</p>
                <Button className="w-full bg-reflect-purple hover:bg-reflect-purple/80">
                  Download SDK
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Get Started */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-reflect-purple/10 to-blue-500/10 border border-reflect-purple/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Start Building with Reflect API</h2>
            <p className="text-gray-300 mb-6">
              Create powerful integrations and automate your knowledge management workflows.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-reflect-purple hover:bg-reflect-purple/80">
                <Key className="w-4 h-4 mr-2" />
                Generate API Key
              </Button>
              <Button variant="outline" className="border-reflect-purple/30 hover:bg-reflect-purple/10">
                <Book className="w-4 h-4 mr-2" />
                Interactive Docs
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default APIDocumentation;
