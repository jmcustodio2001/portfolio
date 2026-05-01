// src/pages/AboutPage.tsx
import React, { useEffect, useState } from "react";
import {
  Code,
  Palette,
  Rocket,
  Coffee,
  Briefcase,
  MapPin,
  Lightbulb,
  Clock,
  GitBranch,
  Search,
  Sparkles,
  Zap,
  Award,
  CheckCircle,
  Database,
  Layout,
  Code2,
  Terminal,
  Layers,
  Network,
  Brain,
  Users,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import DecryptedText from "./DecryptedText";

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const AboutPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  // Skills with icons
  const skills = [
    {
      name: "React",
      description:
        "Building interactive components and single-page applications",
      icon: Code2,
    },
    {
      name: "TypeScript",
      description: "Implementing basic type-safety in web projects",
      icon: Layers,
    },
    {
      name: "PHP & Laravel",
      description:
        "Developing HR and Financial systems with AI-driven analytics",
      icon: Terminal,
    },
    {
      name: "MySQL",
      description: "Relational database design and query optimization",
      icon: Database,
    },
    {
      name: "Network Infrastructure",
      description: "LAN/WAN configuration and technical troubleshooting",
      icon: Network,
    },
    {
      name: "JavaScript",
      description: "Core ES6+ logic and functional web development",
      icon: Code2,
    },
    {
      name: "Tailwind CSS",
      description: "Rapid UI styling and mobile-friendly design",
      icon: Palette,
    },
    {
      name: "HTML/CSS",
      description: "Semantic markup and advanced responsive styling",
      icon: Layout,
    },
  ];

  const qualities = [
    { icon: Code, text: "Clean Code", color: "text-blue-500" },
    { icon: Palette, text: "UI/UX Focus", color: "text-purple-500" },
    { icon: Rocket, text: "Continuous Learning", color: "text-red-500" },
    { icon: Coffee, text: "Analytical Thinking", color: "text-amber-600" },
    { icon: CheckCircle2, text: "Results-Oriented", color: "text-emerald-500" },
    { icon: Brain, text: "Adaptability", color: "text-cyan-500" },
    { icon: Users, text: "Collaboration", color: "text-pink-500" },
    {
      icon: MessageSquare,
      text: "Technical Communication",
      color: "text-indigo-500",
    },
    { icon: Lightbulb, text: "Problem Solver", color: "text-orange-500" },
    { icon: Clock, text: "Project Management", color: "text-teal-500" },
    { icon: GitBranch, text: "Version Control (Git)", color: "text-green-600" },
    { icon: Search, text: "Attention to Detail", color: "text-rose-500" },
  ];

  const workExperiences: WorkExperience[] = [
    {
      title: "Network Installation Intern",
      company: "REDBERG Corp (PLDT 3rd Party)",
      location: "Caloocan, Manila",
      period: "2025 - 2026",
      description: [
        "Configured LAN/WAN infrastructure and resolved network issues for business clients — 300 hrs OJT",
        "Performed on-site troubleshooting and subscriber validation, ensuring stable internet connectivity",
      ],
    },
    {
      title: "Electronics Repair Technician",
      company: "DOYS K Electronic Repair Shop",
      location: "Quiapo, Manila",
      period: "2019 – 2020",
      description: [
        "Diagnosed and repaired customer electronics with a focus on accuracy and fast turnaround",
      ],
    },
    {
      title: "Computer Technician",
      company: "Artnetworkz Digital Printing / Internet Cafe",
      location: "Baesa, QC",
      period: "2017 – 2019",
      description: [
        "Maintained and troubleshot PCs for daily operations; developed strong hardware problem-solving skills",
      ],
    },
  ];

  // Responsive styles
  const getResponsiveStyles = () => {
    if (isMobile) {
      return {
        containerPadding: "p-4 pt-20",
        titleSize: "text-2xl",
        headingSize: "text-xl",
        cardPadding: "p-4",
        gapSize: "gap-3",
        gridCols: "grid-cols-2",
        skillGridCols: "grid-cols-1",
        iconSize: 24,
        textSize: "text-sm",
        skillIconSize: 20,
        sparkleSize: "w-6 h-6",
      };
    } else {
      return {
        containerPadding: "p-8 pt-24",
        titleSize: "text-4xl",
        headingSize: "text-2xl",
        cardPadding: "p-6",
        gapSize: "gap-4",
        gridCols: "grid-cols-3 lg:grid-cols-4",
        skillGridCols: "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        iconSize: 32,
        textSize: "text-base",
        skillIconSize: 24,
        sparkleSize: "w-8 h-8",
      };
    }
  };

  const styles = getResponsiveStyles();

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Floating Particles Background - Pure CSS Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-[10%] w-1 h-1 bg-purple-400/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-20 left-[30%] w-1 h-1 bg-purple-400/20 rounded-full animate-float-medium delay-200"></div>
        <div className="absolute top-30 left-[50%] w-1 h-1 bg-purple-400/20 rounded-full animate-float-fast delay-500"></div>
        <div className="absolute top-40 left-[70%] w-1 h-1 bg-purple-400/20 rounded-full animate-float-slow delay-300"></div>
        <div className="absolute top-50 left-[85%] w-1 h-1 bg-purple-400/20 rounded-full animate-float-medium delay-700"></div>
        <div className="absolute top-60 left-[15%] w-1 h-1 bg-purple-400/20 rounded-full animate-float-fast delay-100"></div>
        <div className="absolute top-70 left-[45%] w-1 h-1 bg-purple-400/20 rounded-full animate-float-slow delay-600"></div>
        <div className="absolute top-80 left-[65%] w-1 h-1 bg-purple-400/20 rounded-full animate-float-medium delay-400"></div>
        <div className="absolute top-90 left-[90%] w-1 h-1 bg-purple-400/20 rounded-full animate-float-fast delay-800"></div>
        <div className="absolute top-100 left-[5%] w-1 h-1 bg-purple-400/20 rounded-full animate-float-slow delay-900"></div>
      </div>

      <div className="relative z-10 animate-fade-in">
        <section className="relative z-[1] min-h-screen">
          <div
            className={`relative z-[2] min-h-screen ${styles.containerPadding} max-w-7xl mx-auto`}
          >
            {/* Title with Sparkles Icon */}
            <div className="mb-8 text-center animate-slide-down">
              {/* Sparkles Icon - Pure CSS Animation */}
              <div className="flex justify-center mb-3">
                <div className="animate-spin-slow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide lucide-sparkles text-purple-400 ${styles.sparkleSize}`}
                    aria-hidden="true"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                    <path d="M20 2v4" />
                    <path d="M22 4h-4" />
                    <circle cx="4" cy="20" r="2" />
                  </svg>
                </div>
              </div>

              <DecryptedText
                text="About Me"
                animateOn="view"
                revealDirection="center"
                className={`${styles.titleSize} font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent`}
                parentClassName="block"
                speed={30}
                maxIterations={10}
              />
              <div className="h-1 w-[60px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-3 animate-expand-width"></div>
            </div>

            {/* About Me Section */}
            <div
              className={`bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl ${styles.cardPadding} mb-8 transition-all duration-300 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-[1.01] animate-fade-up`}
            >
              <div className="flex items-start gap-3">
                <Sparkles className="text-purple-400 w-5 h-5 mt-1 flex-shrink-0" />
                <p
                  className={`text-gray-300 leading-relaxed ${styles.textSize}`}
                >
                  IT graduate (BSIT 2026) with hands-on experience in full-stack
                  web development and network infrastructure. Built production-
                  ready web applications using Laravel, PHP, and MySQL during
                  academic projects, and completed a 300-hour OJT at REDBERG
                  Corp (PLDT) configuring LAN/WAN networks and providing
                  technical support. Eager to contribute as a Junior Developer
                  or IT Support professional in a team that values practical
                  problem-solving and continuous learning.
                </p>
              </div>
            </div>

            {/* Work Experience Section */}
            <div>
              <div
                className={`${styles.headingSize} font-semibold text-white mb-6 flex items-center gap-2 flex-wrap`}
              >
                <Briefcase size={22} className="text-purple-500" />
                Work Experience
                <span className="ml-2 animate-spin-slow inline-block">
                  <Zap size={16} className="text-yellow-400" />
                </span>
              </div>

              <div className="mb-12">
                <div className="space-y-6">
                  {workExperiences.map((exp, index) => (
                    <div
                      key={index}
                      data-index={index}
                      className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-4 transition-all duration-300 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] animate-slide-in-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                        <div>
                          <h4 className="font-bold text-white text-base">
                            {exp.title}
                          </h4>
                          <p className="text-purple-300 text-sm font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs text-purple-300 bg-purple-500/20 px-2 py-1 rounded-full">
                            {exp.period}
                          </span>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        {exp.description.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                            <span className="text-gray-400 text-sm leading-relaxed">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <div
                className={`${styles.headingSize} font-semibold text-white mb-6 flex items-center gap-2 flex-wrap`}
              >
                <Award size={22} className="text-purple-500" />
                Skills & Expertise
              </div>

              <div className={`grid ${styles.skillGridCols} gap-4 mb-12`}>
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-4 transition-all duration-300 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.05] hover:-translate-y-1 group animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-colors">
                        <skill.icon
                          size={styles.skillIconSize}
                          className="text-purple-400"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">
                          {skill.name}
                        </h4>
                        <p className="text-gray-400 text-xs">
                          {skill.description}
                        </p>
                      </div>
                      <CheckCircle
                        size={16}
                        className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What I Bring Section */}
            <div>
              <div
                className={`${styles.headingSize} font-semibold text-white mb-6`}
              >
                What I Bring
              </div>

              <div className={`grid ${styles.gridCols} ${styles.gapSize}`}>
                {qualities.map((quality, index) => (
                  <div
                    key={quality.text}
                    className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-4 text-center cursor-pointer transition-all duration-300 hover:border-purple-500/70 hover:scale-[1.05] hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/30 group animate-scale-in"
                    style={{ animationDelay: `${index * 0.03}s` }}
                  >
                    <quality.icon
                      className={`${quality.color} mx-auto mb-2 transition-all duration-300 group-hover:scale-110`}
                      size={styles.iconSize}
                    />
                    <p
                      className={`font-medium text-gray-300 ${isMobile ? "text-xs" : "text-sm"} transition-all duration-300 group-hover:text-white`}
                    >
                      {quality.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Background Decoration */}
          <figure
            className="absolute top-0 left-0 pointer-events-none w-full h-full overflow-hidden z-[1]"
            aria-hidden="true"
          >
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

      {/* Tailwind CSS Animations */}
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
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
          from {
            width: 0;
          }
          to {
            width: 60px;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.5;
          }
        }
        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-15px);
            opacity: 0.4;
          }
        }
        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.3;
          }
        }
        
        .animate-fade-in { animation: fade-in 0.5s ease forwards; }
        .animate-fade-up { animation: fade-up 0.5s ease forwards; }
        .animate-slide-down { animation: slide-down 0.5s ease forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.5s ease forwards; opacity: 0; }
        .animate-scale-in { animation: scale-in 0.3s ease forwards; opacity: 0; }
        .animate-expand-width { animation: expand-width 0.5s ease forwards; }
        .animate-spin-slow { animation: spin-slow 2s linear infinite; }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 3s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 2s ease-in-out infinite; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
      `}</style>
    </div>
  );
};

export default AboutPage;
