// src/pages/ContactPage.tsx
import React, { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
  User,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import type { ContactInfo, FormData } from "../types";

const ContactPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Updated handleSubmit - diretso sa Gmail gamit ang mailto
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    try {
      // Validate email
      if (!formData.email || !formData.email.includes("@")) {
        throw new Error("Please enter a valid email address.");
      }

      // Create Gmail compose link with form data
      const subject = `Portfolio Contact: ${formData.name} sent a message`;
      const body = `Name: ${formData.name}Email: ${formData.email}Message:${formData.message}Sent from Portfolio Contact Form`;

      const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=j.mcustodio2001@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open Gmail in new tab
      window.open(gmailComposeLink, "_blank");

      // Show success message
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      console.error("Error:", err);
      setError(err.message || "Something went wrong. Please try again.");
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      text: "j.mcustodio2001@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=j.mcustodio2001@gmail.com",
      action: "email",
    },
    {
      icon: Phone,
      text: "+63 985 982 6398",
      href: "tel:+639859826398",
      action: "call",
    },
    {
      icon: MapPin,
      text: "Baesa Quezon City, Philippines",
      href: "https://www.google.com/maps/place/Baysa+Pharmacy/@14.6638104,121.0080943,17z/data=!4m6!3m5!1s0x3397b694e5bf509d:0x938912b09efab323!8m2!3d14.665576!4d121.0086599!16s%2Fg%2F11t9p9kx_4?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D",
      action: "map",
    },
  ];

  // Responsive styles
  const getResponsiveStyles = () => {
    if (isMobile) {
      return {
        containerPadding: "p-4",
        titleSize: "text-2xl",
        headingSize: "text-xl",
        cardPadding: "p-5",
        iconSize: 20,
        iconContainerSize: "w-10 h-10",
        buttonSize: "py-3",
        inputPadding: "px-3 py-2",
        inputTextSize: "text-sm",
      };
    } else {
      return {
        containerPadding: "p-8",
        titleSize: "text-4xl",
        headingSize: "text-2xl",
        cardPadding: "p-8",
        iconSize: 24,
        iconContainerSize: "w-12 h-12",
        buttonSize: "py-4",
        inputPadding: "px-4 py-3",
        inputTextSize: "text-base",
      };
    }
  };

  const styles = getResponsiveStyles();

  // Handle contact card clicks
  const handleContactClick = (info: any) => {
    if (info.action === "email") {
      window.open(info.href, "_blank");
    } else if (info.action === "call") {
      window.location.href = info.href;
    } else if (info.action === "map") {
      window.open(info.href, "_blank");
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative z-10"
      >
        <section className="relative z-[1] min-h-screen py-12">
          <div
            className={`relative z-[2] ${styles.containerPadding} max-w-6xl mx-auto`}
          >
            {/* Header with animation */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 20 }}
              className="text-center mb-12"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-4"
              >
                <Sparkles className="text-purple-400 w-8 h-8" />
              </motion.div>
              <h2
                className={`${styles.titleSize} font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-3`}
              >
                Contact Me
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Have a question or want to work together? I'd love to hear from
                you!
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Contact Info */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="space-y-6"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Contact Information
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Feel free to reach out through any of these channels
                  </p>

                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleContactClick(info)}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ delay: index * 0.1 }}
                        className="w-full bg-purple-900/30 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4 flex items-center gap-4 hover:border-purple-500/50 transition-all group cursor-pointer"
                      >
                        <div
                          className={`${styles.iconContainerSize} rounded-full bg-gradient-to-r from-purple-600/50 to-pink-600/50 flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <info.icon
                            className="text-purple-300 group-hover:text-white transition-colors"
                            size={styles.iconSize}
                          />
                        </div>
                        <div className="flex-1 text-left">
                          <span
                            className={`text-gray-300 ${isMobile ? "text-sm" : "text-base"} group-hover:text-white transition-colors`}
                          >
                            {info.text}
                          </span>
                        </div>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            delay: index * 0.2,
                          }}
                        >
                          <Send
                            size={16}
                            className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </motion.div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Availability Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-green-900/20 backdrop-blur-xl rounded-xl p-4 border border-green-500/20 text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mt-2">
                    Typically responds within 24 hours
                  </p>
                </motion.div>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl overflow-hidden">
                  <div className={`${styles.cardPadding}`}>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3
                        className={`${styles.headingSize} font-semibold text-white mb-2 flex items-center gap-2`}
                      >
                        <MessageSquare className="text-purple-400" size={24} />
                        Send Me a Message
                      </h3>
                      <p className="text-gray-400 text-sm mb-6">
                        I'll get back to you as soon as possible
                      </p>
                    </motion.div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name Field */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Your Name
                        </label>
                        <div className="relative">
                          <User
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            size={18}
                          />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`w-full ${styles.inputPadding} ${styles.inputTextSize} pl-10 bg-purple-900/50 border border-purple-500/30 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition placeholder:text-gray-500`}
                            placeholder="Full Name"
                          />
                        </div>
                      </motion.div>

                      {/* Email Field */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            size={18}
                          />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`w-full ${styles.inputPadding} ${styles.inputTextSize} pl-10 bg-purple-900/50 border border-purple-500/30 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition placeholder:text-gray-500`}
                            placeholder="Email Address (Required)"
                          />
                        </div>
                      </motion.div>

                      {/* Message Field */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Your Message
                        </label>
                        <div className="relative">
                          <MessageSquare
                            className="absolute left-3 top-3 text-gray-500"
                            size={18}
                          />
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={isMobile ? 5 : 6}
                            className={`w-full ${styles.inputPadding} ${styles.inputTextSize} pl-10 bg-purple-900/50 border border-purple-500/30 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition placeholder:text-gray-500 resize-none`}
                            placeholder="Input a Message"
                          />
                        </div>
                      </motion.div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSending}
                        whileHover={{ scale: isSending ? 1 : 1.02 }}
                        whileTap={{ scale: isSending ? 1 : 0.98 }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className={`w-full ${styles.buttonSize} bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/25 transition-all ${isSending ? "opacity-70 cursor-not-allowed" : ""}`}
                      >
                        {isSending ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </form>

                    {/* Status Messages */}
                    <AnimatePresence mode="wait">
                      {submitted && (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="mt-4 p-4 bg-gradient-to-r from-green-900/50 to-emerald-900/50 border border-green-500/30 text-green-400 rounded-xl flex items-center gap-3"
                        >
                          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                            <CheckCircle size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-medium">
                              Message sent successfully!
                            </p>
                            <p className="text-xs text-green-500/70">
                              Gmail compose window opened
                            </p>
                          </div>
                        </motion.div>
                      )}
                      {error && (
                        <motion.div
                          key="error"
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="mt-4 p-4 bg-gradient-to-r from-red-900/50 to-rose-900/50 border border-red-500/30 text-red-400 rounded-xl flex items-center gap-3"
                        >
                          <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                            <span className="text-sm font-bold">!</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Error</p>
                            <p className="text-xs text-red-500/70">{error}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-10 text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 backdrop-blur-xl rounded-full border border-purple-500/20">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-gray-400 text-xs">
                  Available for freelance work, collaborations, and job
                  opportunities
                </p>
              </div>
            </motion.div>
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
      </motion.div>
    </div>
  );
};

export default ContactPage;
