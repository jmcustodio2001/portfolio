import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Home, User, Briefcase, Mail, Menu, X } from "lucide-react";
import DecryptedText from "./pages/DecryptedText";

import HomePage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import ProjectsPage from "./pages/Projectpage";
import ContactPage from "./pages/Contactpage";

import { motion, AnimatePresence } from "framer-motion";
import type { NavItem } from "./types";
import "./index.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/about", icon: User, label: "About" },
    { path: "/projects", icon: Briefcase, label: "Projects" },
    { path: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <Router>
      <div className="min-h-screen">
        {/* Mobile Header */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white"
          }`}
        >
          <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
            <DecryptedText
              text="My Portfolio"
              speed={50}
              maxIterations={10}
              sequential={false}
              revealDirection="start"
              className="text-xl font-bold gradient-text"
              encryptedClassName="text-gray-400"
              animateOn="hover"
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.header>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              className="fixed top-15 left-0 right-0 bottom-0 bg-white/95 backdrop-blur-md z-40"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 text-xl transition-all duration-300 ${
                        isActive
                          ? "gradient-text font-semibold"
                          : "text-gray-600 hover:text-blue-600"
                      }`
                    }
                  >
                    <item.icon size={24} />
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-gray-200">
          <div className="max-w-md mx-auto flex justify-around py-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }`
                }
              >
                <item.icon size={20} />
                <span className="text-xs mt-1">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="pt-16 pb-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

export default App;
