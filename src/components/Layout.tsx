
import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "News", path: "/news" },
    { name: "DevLogs", path: "/devlogs" },
    { name: "Support", path: "/support" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/0a0c8951-1d32-4201-bea5-c230c96fa8d2.png"
                alt="Wirebyte Logo"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">Wirebyte</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="nav-link"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-primary/20 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden glass"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Layout;
