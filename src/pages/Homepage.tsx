// src/pages/HomePage.tsx
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const { scrollYProgress } = useScroll();

  // Para sa smooth na transition ng opacity habang nag-scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.98]);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const socialLinks: SocialLink[] = [
    {
      icon: Github,
      href: "https://github.com/j.mcustodio2001",
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

  // Function for downloading CV
  const downloadCV = () => {
    // Ilagay ang CV file sa public/cv/ folder
    const cvUrl = "/cv/John_Mark_Custodio_Resume.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "John_Mark_Custodio_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function for Hire Me button - Direktang Gmail compose (GUMAGANA ITO!)
  const handleHireMe = () => {
    const email = "j.mcustodio2001@gmail.com"; // Palitan ng actual email mo kung iba
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

    // Direktang Gmail compose link - ito ang gagana!
    const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open sa bagong tab
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
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed top-0 right-0 h-full w-72 bg-purple-950/95 backdrop-blur-xl z-40 shadow-2xl border-l border-purple-500/30"
        >
          <div className="flex flex-col pt-24 px-8 space-y-6">
            {["Home", "Skills", "Projects", "Contact"].map((item, index) => (
              <motion.button
                key={item}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white text-left py-3 px-4 rounded-lg hover:bg-purple-800/50 transition-all font-medium"
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.section
        id="home"
        style={{
          opacity: heroOpacity,
          scale: heroScale,
        }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative inline-block mb-8"
            >
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
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
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
            </motion.div>

            {/* Typing Animation */}
            <div className="mb-6">
              <TextType
                as="p"
                text={["Junior Full-Stack Developer", "Sofware Developer"]}
                loop={true}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
                className={`text-gray-300 ${isMobile ? "text-base" : "text-xl"} font-medium`}
              />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-gray-400 ${isMobile ? "text-sm" : "text-lg"} max-w-2xl mx-auto mb-8 leading-relaxed`}
            >
              I am a Junior Full-Stack Developer specializing in building
              functional, responsive web applications using React, Laravel, and
              MySQL. I focus on writing clean, efficient code and creating
              seamless user experiences.
            </motion.p>

            {/* CTA Buttons - Hire Me & Download CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleHireMe}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
              >
                <UserPlus size={isMobile ? 18 : 20} />
                Hire Me
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="px-6 py-3 bg-purple-800/30 backdrop-blur-xl rounded-full text-white font-semibold border border-purple-500/30 hover:bg-purple-700/50 transition-all flex items-center gap-2"
              >
                <Download size={isMobile ? 18 : 20} />
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("skills")}
        >
          <ArrowDown className="text-purple-400 w-6 h-6" />
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="relative py-16 bg-gradient-to-b from-gray-900 to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-purple-900/30 backdrop-blur-xl rounded-2xl p-8 text-center border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center`}
                  >
                    <stat.icon className="text-white w-8 h-8" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    className={`${isMobile ? "text-3xl" : "text-4xl"} font-bold text-white mb-2`}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className={`${isMobile ? "text-2xl" : "text-4xl"} font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4`}
            >
              Skills & Technologies
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are the technologies I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all group"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="relative py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-full bg-purple-900/30 backdrop-blur-xl border border-purple-500/20 text-gray-300 ${social.color} transition-all hover:shadow-xl`}
              >
                <social.icon size={isMobile ? 20 : 24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
