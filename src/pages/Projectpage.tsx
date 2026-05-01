// src/pages/ProjectsPage.tsx
import React, { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Code2,
  Sparkles,
  Star,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { Project } from "../types";
import project1Image from "./1.PNG";
import project2Image from "./11.PNG";
import project3Image from "./2.png";

type Category = "all" | "featured";

const ProjectsPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (window.innerWidth <= 768) {
      document.documentElement.style.scrollBehavior = "smooth";
    }

    return () => {
      window.removeEventListener("resize", checkDevice);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Jetlogue Travels: AI-Driven HR2 Management System",
      description:
        "A comprehensive Enterprise Information System (EIS) developed to automate HR processes. Features include AI-driven talent analytics for succession planning, recruitment modules, and employee data management built with Laravel and MySQL.",
      image: project1Image,
      tags: ["Laravel", "Bootstrap", "Tailwind", "MySQL", "JavaScript"],
      category: "frontend",
      github: "https://github.com/jmcustodio2001/capstone",
      demo: "https://hr2.jetlougetravels-ph.com/",
      featured: true,
      year: "2025 - 2026",
    },
    {
      id: 2,
      title: "TRANS GO (TNVS Financial Management)",
      description:
        "A specialized financial application designed for Transport Network Vehicle Services (TNVS) to track daily earnings, manage operational expenses, and generate automated financial reports. Built to help drivers and operators visualize their net income and spending habits.",
      image: project2Image,
      tags: ["HTML", "Tailwind", "Javascript", "Bootstrap", "PHP", "MySQL"],
      category: "frontend",
      github: "https://github.com/jmcustodio2001/financial",
      demo: "#",
      featured: false,
      year: "2024 - 2025",
    },
    {
      id: 3,
      title: "PORTFOLIO",
      description:
        "My personal website for showcasing projects, skills, and experience.",
      image: project3Image,
      tags: ["TypeScript", "React", "TailwindCSS"],
      category: "frontend",
      github: "https://github.com/jmcustodio2001/portfolio.git",
      demo: "#",
      featured: true,
      year: "2026",
    },
  ];

  const categories: { id: Category; label: string; icon: any }[] = [
    { id: "all", label: "All Projects", icon: Sparkles },
    { id: "featured", label: "Featured", icon: Star },
  ];

  const filteredProjects: Project[] =
    selectedCategory === "all"
      ? projects
      : selectedCategory === "featured"
        ? projects.filter((project) => project.featured)
        : projects.filter((project) => project.category === selectedCategory);

  const getResponsiveStyles = () => {
    if (isMobile) {
      return {
        containerPadding: "p-4 pt-20",
        titleSize: "text-2xl",
        headingSize: "text-xl",
        cardPadding: "p-4",
        imageHeight: "h-48",
        tagSize: "text-xs",
        descriptionSize: "text-sm",
        gridCols: "grid-cols-1",
        gapSize: "gap-4",
      };
    } else {
      return {
        containerPadding: "p-8 pt-24",
        titleSize: "text-4xl",
        headingSize: "text-2xl",
        cardPadding: "p-6",
        imageHeight: "h-64",
        tagSize: "text-sm",
        descriptionSize: "text-base",
        gridCols: "grid-cols-1 lg:grid-cols-2 xl:grid-cols-2",
        gapSize: "gap-6",
      };
    }
  };

  const styles = getResponsiveStyles();

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <div className="relative z-10 animate-fade-in">
        <section className="relative z-[1] min-h-screen">
          <div
            className={`relative z-[2] ${styles.containerPadding} max-w-7xl mx-auto`}
          >
            {/* Hero Section */}
            <div className="text-center mb-12 animate-slide-down">
              <div className="inline-block mb-4 animate-spin-slow">
                <Sparkles className="text-purple-400 w-8 h-8" />
              </div>
              <h2
                className={`${styles.titleSize} font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-3`}
              >
                Projects
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4 animate-expand-width"></div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Exploring innovative solutions through code and design
              </p>
            </div>

            {/* Category Filter */}
            <div
              className={`flex gap-3 mb-8 ${
                isMobile
                  ? "overflow-x-auto pb-2 snap-x snap-mandatory"
                  : "justify-center flex-wrap"
              } animate-fade-up`}
              style={{ animationDelay: "0.1s" }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all text-sm font-medium flex items-center gap-2 ${
                    isMobile ? "snap-start" : ""
                  } ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                      : "bg-purple-900/30 text-gray-300 hover:bg-purple-800/50 border border-purple-500/20 hover:scale-105 transition-transform"
                  }`}
                >
                  <category.icon size={16} />
                  {category.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className={`grid ${styles.gridCols} ${styles.gapSize} mb-12`}>
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl overflow-hidden group hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div
                    className={`relative overflow-hidden ${styles.imageHeight}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                    />
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star size={12} fill="white" />
                        Featured
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur rounded-full hover:scale-110 transition-transform"
                        >
                          <Github size={18} />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur rounded-full hover:scale-110 transition-transform"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={styles.cardPadding}>
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className={`${isMobile ? "text-base" : "text-xl"} font-semibold text-white group-hover:text-purple-400 transition-colors`}
                      >
                        {project.title}
                      </h3>
                      {project.year && (
                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                          <Calendar size={12} />
                          {project.year}
                        </div>
                      )}
                    </div>
                    <p
                      className={`text-gray-400 ${styles.descriptionSize} mb-4 leading-relaxed`}
                    >
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-1 bg-purple-900/50 text-purple-300 ${styles.tagSize} rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-colors animate-scale-in`}
                          style={{
                            animationDelay: `${index * 0.1 + 0.2 + tagIndex * 0.05}s`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span
                          className={`px-2.5 py-1 bg-purple-900/50 text-purple-300 ${styles.tagSize} rounded-full border border-purple-500/30`}
                        >
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-2 border-t border-purple-500/20">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-all hover:translate-x-1"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm transition-all hover:translate-x-1 group/link"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                        <ChevronRight
                          size={14}
                          className="transition-transform group-hover/link:translate-x-1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Projects Message */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16 bg-purple-900/30 backdrop-blur-xl rounded-2xl border border-purple-500/20 animate-fade-in">
                <Code2 size={48} className="mx-auto text-purple-400 mb-3" />
                <p className="text-gray-400">
                  No projects found in this category.
                </p>
              </div>
            )}

            {/* Call to Action with GitHub Link */}
            <div
              className="mt-12 text-center animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <a
                href="https://github.com/jmcustodio2001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-full border border-purple-500/30 hover:scale-105 transition-transform cursor-pointer group"
              >
                <Sparkles className="text-purple-400 w-4 h-4 animate-pulse-slow" />
                <p className="text-gray-400 text-sm group-hover:text-white transition-colors">
                  Want to see more? Check out my GitHub for additional projects
                </p>
                <ChevronRight className="text-purple-400 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Background Decoration */}
          <figure className="absolute top-0 left-0 pointer-events-none w-full h-full overflow-hidden z-[1]">
            <svg
              className={`absolute top-0 left-2/4 -translate-x-2/4 ${isMobile ? "w-[200%] opacity-30" : "w-[134%]"} h-auto ${isMobile ? "min-w-full" : "min-w-[1280px] max-w-[1980px]"}`}
              viewBox="0 0 1920 450"
              fill="none"
            >
              <rect
                opacity="0.5"
                x="1410.61"
                y="42.6123"
                width="246.643"
                height="304.604"
                transform="rotate(-45 1410.61 42.6123)"
                fill="url(#bg-decoration-v1-fx-1-linear-1)"
              />
              <rect
                opacity="0.5"
                x="1176"
                y="-20.5969"
                width="246.643"
                height="304.604"
                transform="rotate(-45 1176 -20.5969)"
                fill="url(#bg-decoration-v1-fx-1-linear-2)"
              />
              <circle
                opacity="0.5"
                cx="1572"
                cy="205"
                r="46"
                fill="url(#bg-decoration-v1-fx-1-radial-1)"
              />
              <g opacity="0.5" filter="url(#bg-decoration-v1-fx-1-blur-1)">
                <circle cx="1680" cy="324" r="26" fill="#4338ca" />
              </g>
              <defs>
                <filter
                  id="bg-decoration-v1-fx-1-blur-1"
                  x="1644"
                  y="288"
                  width="72"
                  height="72"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="5"
                    result="effect1_foregroundBlur"
                  />
                </filter>
                <linearGradient
                  id="bg-decoration-v1-fx-1-linear-1"
                  x1="1533.93"
                  y1="42.6123"
                  x2="1533.93"
                  y2="347.217"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9ca3af" />
                  <stop offset="1" stopColor="#9ca3af" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="bg-decoration-v1-fx-1-linear-2"
                  x1="1299.32"
                  y1="-20.5969"
                  x2="1299.32"
                  y2="284.007"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9ca3af" />
                  <stop offset="1" stopColor="#9ca3af" stopOpacity="0" />
                </linearGradient>
                <radialGradient
                  id="bg-decoration-v1-fx-1-radial-1"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(1572 205) rotate(90) scale(46)"
                >
                  <stop stopColor="#4338ca" stopOpacity="0" />
                  <stop offset="1" stopColor="#4338ca" />
                </radialGradient>
              </defs>
            </svg>
          </figure>
        </section>
      </div>

      {/* Pure Tailwind CSS Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes expand-width {
          from { width: 0; }
          to { width: 80px; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-fade-in { animation: fade-in 0.5s ease forwards; }
        .animate-fade-up { animation: fade-up 0.5s ease forwards; opacity: 0; }
        .animate-slide-down { animation: slide-down 0.5s ease forwards; }
        .animate-scale-in { animation: scale-in 0.3s ease forwards; opacity: 0; }
        .animate-expand-width { animation: expand-width 0.5s ease forwards; }
        .animate-spin-slow { animation: spin-slow 2s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
        
        .transition-duration-600 { transition-duration: 600ms; }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
