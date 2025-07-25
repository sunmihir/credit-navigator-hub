import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-primary-blue rounded-lg group-hover:scale-110 transition-transform">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-primary-blue">CardGenius</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary-blue transition-colors">
              Home
            </Link>
            <Link to="/cards" className="text-foreground hover:text-primary-blue transition-colors">
              Browse Cards
            </Link>
            <Link to="/calculator" className="text-foreground hover:text-primary-blue transition-colors">
              Calculator
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary-blue transition-colors">
              About
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link to="/selection">
              <Button className="btn-primary text-white font-semibold">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary-blue transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/cards" 
                className="text-foreground hover:text-primary-blue transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Browse Cards
              </Link>
              <Link 
                to="/calculator" 
                className="text-foreground hover:text-primary-blue transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Calculator
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary-blue transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link to="/selection" onClick={() => setIsOpen(false)}>
                <Button className="btn-primary text-white font-semibold w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;