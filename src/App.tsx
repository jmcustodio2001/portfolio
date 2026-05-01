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
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false); // Add loading state

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };

    const checkDevice = (): void => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkDevice);
    checkDevice();

    // Set loaded after initial render
    setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  const navItems: NavItem[] = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/about", icon: User, label: "About" },
    { path: "/projects", icon: Briefcase, label: "Projects" },
    { path: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
        {/* Header with Navigation - Mas mataas na z-index */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
            scrolled
              ? "bg-purple-900/90 backdrop-blur-xl shadow-lg border-b border-purple-500/30"
              : "bg-purple-950/80 backdrop-blur-md border-b border-purple-500/20"
          } ${!isLoaded ? "opacity-0" : "opacity-100"}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0 z-[101]">
                <DecryptedText
                  text="My Portfolio"
                  speed={50}
                  maxIterations={10}
                  sequential={false}
                  revealDirection="start"
                  className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  encryptedClassName="text-gray-400"
                  animateOn="hover"
                />
              </div>

              {/* Desktop Navigation - Hide initially */}
              {!isMobile && (
                <nav
                  className={`flex items-center space-x-1 z-[101] transition-opacity duration-300 ${!isLoaded ? "invisible" : "visible"}`}
                >
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                            : "text-gray-300 hover:text-white hover:bg-purple-800/50"
                        }`
                      }
                    >
                      <item.icon size={18} />
                      <span className="font-medium">{item.label}</span>
                    </NavLink>
                  ))}
                </nav>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`p-2 rounded-xl bg-purple-800/50 text-white hover:bg-purple-700/50 transition-colors z-[101] ${!isLoaded ? "opacity-0" : "opacity-100"}`}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
              )}
            </div>
          </div>
        </motion.header>

        {/* Mobile Navigation Drawer - Higher z-index than header */}
        <AnimatePresence>
          {isMobile && isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200]"
              />

              {/* Drawer */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25 }}
                className="fixed top-0 right-0 h-full w-72 bg-gradient-to-br from-gray-900 to-purple-900 shadow-2xl z-[201] border-l border-purple-500/30"
              >
                <div className="flex flex-col h-full">
                  {/* Drawer Header */}
                  <div className="p-6 border-b border-purple-500/20 pt-20">
                    <DecryptedText
                      text="Menu"
                      speed={50}
                      maxIterations={10}
                      sequential={false}
                      revealDirection="start"
                      className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                      encryptedClassName="text-gray-400"
                      animateOn="hover"
                    />
                  </div>

                  {/* Drawer Navigation Items */}
                  <div className="flex-1 py-8">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <NavLink
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center gap-4 px-6 py-4 mx-4 mb-2 rounded-xl transition-all duration-300 ${
                              isActive
                                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                                : "text-gray-300 hover:text-white hover:bg-purple-800/50"
                            }`
                          }
                        >
                          <item.icon size={24} />
                          <span className="font-medium text-lg">
                            {item.label}
                          </span>
                        </NavLink>
                      </motion.div>
                    ))}
                  </div>

                  {/* Drawer Footer */}
                  <div className="p-6 border-t border-purple-500/20">
                    <p className="text-gray-500 text-xs text-center">
                      © 2024 My Portfolio
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main Content - May top padding para hindi matabunan ng header */}
        <main className="pt-16 md:pt-20">
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
