// src/pages/AboutPage.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Rocket,
  Coffee,
  Briefcase,
  Calendar,
  MapPin,
  Lightbulb,
  Clock,
  GitBranch,
  Search,
} from "lucide-react";
import { GiStrong } from "react-icons/gi";
import { PiBrainDuotone } from "react-icons/pi";
import type { Skill } from "../types";
import { RiTeamLine } from "react-icons/ri";
import { RiVoiceprintFill } from "react-icons/ri";
import DecryptedText from "./DecryptedText";

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

const AboutPage: React.FC = () => {
  const skills: Skill[] = [
    { name: "React", level: 40, color: "bg-blue-500" },
    { name: "JavaScript", level: 50, color: "bg-yellow-500" },
    { name: "Node.js", level: 30, color: "bg-green-500" },
    { name: "Tailwind CSS", level: 80, color: "bg-teal-500" },
    { name: "Python", level: 40, color: "bg-pink-500" },
    { name: "HTML", level: 100, color: "bg-red-500" },
    { name: "MySql", level: 50, color: "bg-purple-500" },
  ];

  const qualities = [
    { icon: Code, text: "Clean Code", color: "text-blue-500" },
    { icon: Palette, text: "Creative Design", color: "text-purple-500" },
    { icon: Rocket, text: "Fast Learning", color: "text-red-500" },
    { icon: Coffee, text: "Problem Solver", color: "text-amber-600" },
    { icon: GiStrong, text: "Hard Working", color: "text-yellow-600" },
    { icon: PiBrainDuotone, text: "Adaptability", color: "text-cyan-500" },
    { icon: RiTeamLine, text: "Team Work", color: "text-pink-500" },
    {
      icon: RiVoiceprintFill,
      text: "Communication Skills",
      color: "text-indigo-500",
    },
    { icon: Lightbulb, text: "Critical Thinking", color: "text-orange-500" },
    { icon: Clock, text: "Time Management", color: "text-teal-500" },
    { icon: GitBranch, text: "Version Control", color: "text-green-600" },
    { icon: Search, text: "Attention to Detail", color: "text-rose-500" },
  ];

  const workExperiences: WorkExperience[] = [
    {
      title: "Network Installation Intern",
      company: "REDBERG Corp (PLDT 3rd Party)",
      location: "Caloocan, Manila",
      period: "2025 - 2026",
      description:
        " LAN/WAN setup, TCP/IP configuration, on-site network support.",
    },
    {
      title: "Electronics Repair — DOYS K Electronic Repair Shop",
      company: "Digital Innovations Co.",
      location: "Quiapo, Manila",
      period: "2019 – 2020",
      description: "Hardware diagnostics, component repair and testing.",
    },
    {
      title: "Computer Technician",
      company: "Artnetworkz Digital Printing / Internet Cafe",
      location: "Baesa, QC",
      period: "2017 – 2019",
      description:
        "PC maintenance, troubleshooting, technical support (Family Business).",
    },
    {
      title: " Logistics & Support Assistant",
      company: "Asia Brewery Inc.",
      location: "Baesa, QC",
      period: "2016 – 2017",
      description: "Delivery operations, logistics coordination.",
    },
  ];

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
            <div className="mb-6">
              <DecryptedText
                text="About Me"
                animateOn="view"
                revealDirection="center"
                className="text-2xl font-bold gradient-text"
                parentClassName="block"
                speed={30}
                maxIterations={10}
              />
            </div>

            {/* About Me Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="card bg-gray-900/50 border border-gray-800 p-6 mb-6"
            >
              <p className="text-gray-300 leading-relaxed">
                IT graduate seeking a Junior Developer role. Skilled in web
                development, database management, and network support. Quick
                learner committed to contributing to team goals.
              </p>
            </motion.div>

            {/* Work Experience Section */}
            <motion.h3
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-xl font-semibold text-white mb-4 flex items-center gap-2"
            >
              <Briefcase size={22} className="text-blue-500" />
              Work Experience
            </motion.h3>

            <div className="space-y-4 mb-8">
              {workExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ delay: 0.1 * index }}
                  className="card bg-gray-900/50 border border-gray-800 p-4 transition-colors hover:border-blue-500/50"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h4 className="font-bold text-white text-lg">
                        {exp.title}
                      </h4>
                      <p className="text-blue-400 font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <span className="flex items-center text-sm text-gray-400">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </span>
                      <span className="flex items-center text-sm text-gray-400">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Skills Section */}
            <motion.h3
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-xl font-semibold text-white mb-4"
            >
              Skills & Expertise
            </motion.h3>

            <div className="space-y-4 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ delay: 0.1 * index }}
                  className="card bg-gray-900/50 border border-gray-800 p-4 transition-colors hover:border-blue-500/50"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 * index }}
                      className={`h-full ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* What I Bring Section */}
            <motion.h3
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-xl font-semibold text-white mb-4"
            >
              What I Bring
            </motion.h3>

            <div className="grid grid-cols-2 gap-4">
              {qualities.map((quality, index) => (
                <motion.div
                  key={quality.text}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{
                    scale: 1.05,
                    translateY: -5,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3)",
                  }}
                  transition={{
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="card bg-gray-900/50 border border-gray-800 p-4 text-center cursor-default transition-colors hover:border-blue-500/50"
                >
                  <quality.icon
                    className={`${quality.color} mx-auto mb-2`}
                    size={32}
                  />
                  <p className="text-sm font-medium text-gray-300">
                    {quality.text}
                  </p>
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

export default AboutPage;
