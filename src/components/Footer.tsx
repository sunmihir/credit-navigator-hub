import { CreditCard, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-white rounded-lg">
                <CreditCard className="w-6 h-6 text-primary-blue" />
              </div>
              <span className="text-xl font-bold">CardGenius</span>
            </div>
            <p className="text-blue-200 mb-6">
              Empowering smart financial decisions through personalized credit card recommendations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <div className="space-y-3">
              <Link to="/selection" className="block text-blue-200 hover:text-white transition-colors">
                Card Finder
              </Link>
              <Link to="/calculator" className="block text-blue-200 hover:text-white transition-colors">
                Savings Calculator
              </Link>
              <Link to="/cards" className="block text-blue-200 hover:text-white transition-colors">
                Browse Cards
              </Link>
              <Link to="/compare" className="block text-blue-200 hover:text-white transition-colors">
                Compare Cards
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <div className="space-y-3">
              <Link to="/about" className="block text-blue-200 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/careers" className="block text-blue-200 hover:text-white transition-colors">
                Careers
              </Link>
              <Link to="/blog" className="block text-blue-200 hover:text-white transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="block text-blue-200 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-3">
              <Link to="/privacy" className="block text-blue-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-blue-200 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/security" className="block text-blue-200 hover:text-white transition-colors">
                Security
              </Link>
              <Link to="/cookies" className="block text-blue-200 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            © 2024 CardGenius. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-blue-200 text-sm">Secured by</span>
            <div className="flex items-center gap-2 bg-white/10 rounded px-3 py-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">256-bit SSL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;