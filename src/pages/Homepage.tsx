// src/pages/HomePage.tsx
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";
import profilePic from "./IDJ.jpg";
import TrueFocus from "./TrueFocus";
import TextType from "./TextType";

interface SocialLink {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  color: string;
}

const HomePage: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: Github,
      href: "https://github.com/jmcustodio2001",
      color: "hover:text-gray-900",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/john-mark-custodio-b205a03ab/",
      color: "hover:text-blue-600",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/jm.custodio.20",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/jm_custodiio/",
      color: "hover:text-pink-600",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mobile-container relative overflow-hidden"
    >
      <section
        className="relative z-[1] h-screen"
        style={{
          background: `linear-gradient(to right, #100119, #080707)`,
        }}
      >
        <div className="relative z-[2] min-h-screen flex flex-col justify-center items-center text-center bg-transparent">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative"
          >
            <div className="w-32 h-32 rounded-full bg-linear-to-r from-blue-500 to-purple-500 p-1">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full rounded-full object-cover bg-white"
              />
            </div>
          </motion.div>

          <TrueFocus
            sentence="John Mark Custodio"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            glowColor="rgba(255, 0, 0, 0.6)"
            animationDuration={1}
            pauseBetweenAnimations={0}
          />

          <TextType
            as="p"
            text={["Junior Developer"]}
            loop={true}
            typingSpeed={100}
            deletingSpeed={50}
            pauseDuration={1500}
            className="text-white mt-2 text-xl font-bold font-sans"
          />

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 mt-4 max-w-sm text-lg"
          >
            Junior Full-Stack Developer with a focus on building functional,
            responsive web applications. I enjoy transforming complex
            requirements into clean code and intuitive user interfaces, with a
            strong foundation in both front-end aesthetics and back-end logic.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex space-x-4 mt-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-full bg-gray-800 text-gray-300 transition-colors ${social.color}`}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-4 mt-12 w-full"
          >
            {[
              { label: "Projects", value: "3+" },
              { label: "Experience", value: "1+ yrs" },
              { label: "Client", value: "1" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
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
  );
};

export default HomePage;
