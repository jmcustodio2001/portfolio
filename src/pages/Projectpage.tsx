// src/pages/ProjectsPage.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code2, Award } from "lucide-react";
import { Project } from "../types";
import project1Image from "./1.PNG";
import project2Image from "./11.PNG";
import project3Image from "./2.PNG";
// 👇 Import your certificate images here:
// import cert1Image from "./cert1.PNG";
// import cert2Image from "./cert2.PNG";

type Category = "all";

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Travel & Tourism Website",
      description:
        "Join a workforce that travels the world, deliver unforgettable experiences and builds real career opportunities.",
      image: project1Image,
      tags: ["Laravel", "Bootstrap", "Tailwind", "MySQL", "API", "JavaScript"],
      category: "frontend",
      github: "https://github.com/jmcustodio2001/capstone",
      demo: "https://hr2.jetlougetravels-ph.com/",
    },
    {
      id: 2,
      title: "TRANS GO",
      description:
        "A financial management application designed to track transactions, manage budgets, and visualize spending habits.",
      image: project2Image,
      tags: ["HTML", "Tailwind", "Javascript", "Bootstrap", "PHP", "MySQL"],
      category: "frontend",
      github: "https://github.com/jmcustodio2001/financial",
      demo: "#",
    },
    {
      id: 3,
      title: "PORTFOLIO",
      description:
        "My personal website for showcasing projects, skills, and experience.",
      image: project3Image,
      tags: ["typescript, react, tailwind"],
      category: "frontend",
      github: "https://github.com/jmcustodio2001/financial",
      demo: "#",
    },
  ];

  // 👇 Add your certificates here
  const certificates = [
    {
      id: 1,
      title: "React Developer Certification",
      issuer: "Meta",
      image: "", // replace with: cert1Image
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      image: "", // replace with: cert2Image
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      issuer: "Google",
      image: "", // replace with: cert3Image
    },
    {
      id: 4,
      title: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      image: "", // replace with: cert4Image
    },
  ];

  const categories: { id: Category; label: string }[] = [
    { id: "all", label: "All" },
  ];

  const filteredProjects: Project[] =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="relative w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mobile-container relative z-10"
      >
        <section
          className="relative z-[1] h-full"
          style={{
            background: `linear-gradient(to right, #100119, #080707)`,
          }}
        >
          <div className="relative z-[2] min-h-screen p-4">
            {/* ── PROJECTS SECTION ── */}
            <motion.h2
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-2xl font-bold gradient-text mb-6"
            >
              My Projects
            </motion.h2>

            {/* Category Filter */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-md"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>

            {/* Projects Grid */}
            <AnimatePresence>
              <motion.div layout className="space-y-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="card bg-gray-900/50 border border-gray-800 overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          className="flex items-center gap-1 text-gray-400 hover:text-white text-sm"
                        >
                          <Github size={16} />
                          Code
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demo}
                          className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Code2 size={48} className="mx-auto text-gray-400 mb-3" />
                <p className="text-gray-500">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
            {/* ── CERTIFICATES SECTION ── */}
            <motion.h2
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-2xl font-bold gradient-text mt-10 mb-6"
            >
              My Certificates
            </motion.h2>

            <div className="grid grid-cols-2 gap-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card bg-gray-900/50 border border-gray-800 overflow-hidden"
                >
                  {/* Certificate Image */}
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-32 object-cover"
                    />
                  ) : (
                    // Placeholder shown until you add real images
                    <div className="w-full h-32 bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                      <Award size={36} className="text-purple-400" />
                    </div>
                  )}

                  {/* Title & Issuer */}
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-white leading-tight mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-blue-400 font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <figure
            className="absolute top-0 left-0 pointer-events-none w-full h-full overflow-hidden z-[1]"
            aria-hidden="true"
          >
            <svg
              className="absolute top-0 left-2/4 -translate-x-2/4 w-[134%] min-w-[1280px] max-w-[1980px] h-auto"
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
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
