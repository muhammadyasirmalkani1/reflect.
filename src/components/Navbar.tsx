import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-10 w-full fixed top-0 z-50 bg-reflect-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-cosmic-gradient flex items-center justify-center">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <span className="text-2xl font-semibold text-white">Reflect</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link>
          <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
          <Link to="/company" className="text-gray-300 hover:text-white transition-colors">Company</Link>
          <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
          <Link to="/docs" className="text-gray-300 hover:text-white transition-colors">Docs</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="text-white">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-reflect-dark/95 backdrop-blur-md border-b border-white/10 p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/products" className="text-gray-300 hover:text-white py-2 transition-colors" onClick={toggleMenu}>Products</Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white py-2 transition-colors" onClick={toggleMenu}>Pricing</Link>
            <Link to="/company" className="text-gray-300 hover:text-white py-2 transition-colors" onClick={toggleMenu}>Company</Link>
            <Link to="/blog" className="text-gray-300 hover:text-white py-2 transition-colors" onClick={toggleMenu}>Blog</Link>
            <Link to="/docs" className="text-gray-300 hover:text-white py-2 transition-colors" onClick={toggleMenu}>Docs</Link>
            <div className="pt-4 flex flex-col space-y-2">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="ghost" className="text-white w-full">
                  Login
                </Button>
              </Link>
              <Link to="/signup" onClick={toggleMenu}>
                <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity w-full">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
