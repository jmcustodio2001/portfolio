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
        "A financial management application designed to track transactions, manage budgets, and visualize spending habits.",
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
                  : "bg-white text-gray-600 hover:bg-gray-100"
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
                className="card"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
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
                      className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
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
            <p className="text-gray-500">No projects found in this category.</p>
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
              className="card overflow-hidden"
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
                <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                  <Award size={36} className="text-purple-400" />
                </div>
              )}

              {/* Title & Issuer */}
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800 leading-tight mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-blue-600 font-medium">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
