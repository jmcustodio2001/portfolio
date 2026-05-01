// src/pages/HomePage.tsx
import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Menu,
  X,
  Code,
  Server,
  Database,
  ArrowDown,
  Briefcase,
  Users,
  FolderGit2,
  Download,
  UserPlus,
} from "lucide-react";
import profilePic from "./IDJ.jpg";
import TextType from "./TextType";
import TrueFocus from "./TrueFocus";

interface SocialLink {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  color: string;
  label: string;
}

const HomePage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const socialLinks: SocialLink[] = [
    {
      icon: Github,
      href: "https://github.com/jmcustodio2001",
      color: "hover:text-gray-400",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/john-mark-custodio-b205a03ab/",
      color: "hover:text-blue-400",
      label: "LinkedIn",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/jm.custodio.20",
      color: "hover:text-blue-500",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/jm_custodiio/",
      color: "hover:text-pink-500",
      label: "Instagram",
    },
  ];

  const stats = [
    {
      value: "3",
      label: "Projects",
      icon: FolderGit2,
      color: "from-blue-500 to-cyan-500",
    },
    {
      value: "1",
      label: "Project-Based Exp",
      icon: Briefcase,
      color: "from-purple-500 to-pink-500",
    },
    {
      value: "1",
      label: "Clients",
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const skills = [
    {
      name: "Frontend",
      icon: Code,
      technologies: [
        "HTML",
        "CSS",
        "TailwindCSS",
        "React",
        "TypeScript",
        "JavaScript",
        "Bootstrap",
      ],
    },
    {
      name: "Backend",
      icon: Server,
      technologies: ["PHP", "MySQL", "Laravel"],
    },
    {
      name: "Database",
      icon: Database,
      technologies: ["MySql"],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const downloadCV = () => {
    const cvUrl = "/cv/John_Mark_Custodio_Resume.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "John_Mark_Custodio_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHireMe = () => {
    const email = "j.mcustodio2001@gmail.com";
    const subject = "Job Opportunity - Hiring John Mark Custodio";
    const body = `Dear John Mark Custodio,

I hope this email finds you well.

I am writing to express interest in your development services for an upcoming project. We were impressed with your background and would like to discuss a potential collaboration.

Could you please share your current availability and standard rates? Additionally, if you have a portfolio or a brief overview of your recent work, that would be greatly appreciated.

You may reach me through the following details:

Name:
Company:
Phone:
Email:

Thank you, and I look forward to hearing from you soon.

Best regards,`;

    const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailComposeLink, "_blank");
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="fixed top-4 right-4 z-50 p-3 bg-purple-900/50 backdrop-blur-xl rounded-full text-white shadow-2xl border border-purple-500/30"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      )}

      {/* Mobile Navigation Drawer */}
      {isMobile && mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-72 bg-purple-950/95 backdrop-blur-xl z-40 shadow-2xl border-l border-purple-500/30 animate-slide-in-right">
            <div className="flex flex-col pt-24 px-8 space-y-6">
              {["Home", "Skills", "Projects", "Contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white text-left py-3 px-4 rounded-lg hover:bg-purple-800/50 transition-all font-medium animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Hero Section - Walang blur/scaling effect kapag nag-scroll */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-500"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center animate-fade-up">
            {/* Profile Image */}
            <div className="relative inline-block mb-8 animate-scale-in">
              <div
                className={`${isMobile ? "w-32 h-32" : "w-40 h-40"} rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-1 animate-spin-slow flex items-center justify-center`}
              >
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    src={profilePic}
                    alt="John Mark Custodio"
                    className="w-full h-full rounded-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-4 h-4 rounded-full border-2 border-gray-900"></div>
            </div>

            {/* Name - Walang blur effect kahit mag-scroll */}
            <div
              className="mb-4 animate-slide-down"
              style={{ animationDelay: "0.1s" }}
            >
              <TrueFocus
                sentence="John Mark Custodio"
                textColor="transparent"
                borderColor="#a855f7"
                glowColor="rgba(168, 85, 247, 0.6)"
                blurAmount={3}
                fontSize={isMobile ? "text-3xl" : "text-6xl"}
                fontWeight="font-bold"
                textGradient="linear-gradient(to right, #a78bfa, #f472b6, #60a5fa)"
              />
            </div>

            {/* Typing Animation */}
            <div
              className="mb-6 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <TextType
                as="p"
                text={["Junior Full-Stack Developer", "Software Developer"]}
                loop={true}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
                className={`text-gray-300 ${isMobile ? "text-base" : "text-xl"} font-medium`}
              />
            </div>

            {/* Description */}
            <p
              className={`text-gray-400 ${isMobile ? "text-sm" : "text-lg"} max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-up`}
              style={{ animationDelay: "0.3s" }}
            >
              I am a Junior Full-Stack Developer specializing in building
              functional, responsive web applications using React, Laravel, and
              MySQL. I focus on writing clean, efficient code and creating
              seamless user experiences.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex gap-4 justify-center flex-wrap animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <button
                onClick={handleHireMe}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <UserPlus size={isMobile ? 18 : 20} />
                Hire Me
              </button>

              <button
                onClick={downloadCV}
                className="px-6 py-3 bg-purple-800/30 backdrop-blur-xl rounded-full text-white font-semibold border border-purple-500/30 hover:bg-purple-700/50 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <Download size={isMobile ? 18 : 20} />
                Download CV
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={() => scrollToSection("skills")}
        >
          <ArrowDown className="text-purple-400 w-6 h-6" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-gradient-to-b from-gray-900 to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="relative group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-purple-900/30 backdrop-blur-xl rounded-2xl p-8 text-center border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center`}
                  >
                    <stat.icon className="text-white w-8 h-8" />
                  </div>
                  <div
                    className={`${isMobile ? "text-3xl" : "text-4xl"} font-bold text-white mb-2 animate-scale-in`}
                    style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-fade-up">
            <h2
              className={`${isMobile ? "text-2xl" : "text-4xl"} font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4`}
            >
              Skills & Technologies
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are the technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all group hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                    <skill.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-800/30 rounded-full text-sm text-gray-300 group-hover:bg-purple-500/30 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="relative py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full bg-purple-900/30 backdrop-blur-xl border border-purple-500/20 text-gray-300 ${social.color} transition-all hover:shadow-xl hover:scale-110 hover:rotate-6 animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <social.icon size={isMobile ? 20 : 24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style>{`
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
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
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
        
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .animate-fade-up {
          opacity: 0;
          animation: fade-up 0.5s ease forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease forwards;
        }
        
        .animate-scale-in {
          opacity: 0;
          animation: scale-in 0.5s ease forwards;
        }
        
        .animate-slide-down {
          opacity: 0;
          animation: slide-down 0.5s ease forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out forwards;
        }
        
        .animate-slide-in-left {
          opacity: 0;
          animation: slide-in-left 0.3s ease forwards;
        }
        
        .animate-bounce {
          animation: bounce 1.5s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
};

export default HomePage;
