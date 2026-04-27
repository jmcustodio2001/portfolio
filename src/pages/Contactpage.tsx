// src/pages/ContactPage.tsx
import React, { useState, useRef } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";

// src/pages/ContactPage.tsx
import type { ContactInfo } from "../types";
// src/pages/ContactPage.tsx
import type { FormData } from "../types";

// src/pages/ContactPage.tsx
const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    try {
      if (!formData.email.toLowerCase().endsWith("@gmail.com")) {
        throw new Error(
          "Only Gmail addresses are accepted for sending messages.",
        );
      }

      const response = await fetch("/send_email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      // Check if the response is actually JSON before parsing
      const contentType = response.headers.get("content-type");
      let result;

      if (contentType && contentType.includes("application/json")) {
        try {
          result = await response.json();
        } catch (parseError) {
          const text = await response.text();
          console.error("Failed to parse JSON response:", text);
          throw new Error(
            "The server returned an invalid response. This usually happens when there's a PHP error hidden in the output.",
          );
        }
      } else {
        const text = await response.text();
        console.error("Non-JSON response from server:", text);
        throw new Error(
          `Server Error (${response.status}): The server did not return a valid JSON response. Make sure your PHP server is running and configured correctly.`,
        );
      }

      if (response.ok && result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error(
          result.message || "Failed to send email. Please try again later.",
        );
      }
    } catch (err: any) {
      console.error("Failed to send email:", err);
      setError(err.message || "Something went wrong. Please try again later.");
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
      href: "mailto:j.mcustodio2001@gmail.com",
    },
    { icon: Phone, text: "+63 985 982 6398", href: "tel:+639859826398" },
    {
      icon: MapPin,
      text: "Manila, Philippines",
      href: "https://www.google.com/maps/dir//Baysa+Pharmacy,+214+Howmart+Rd,+Quezon+City,+1106+Kalakhang+Maynila/@14.6660004,121.0084074,20z/data=!4m17!1m7!3m6!1s0x3397b694e5bf509d:0x938912b09efab323!2sBaysa+Pharmacy!8m2!3d14.665576!4d121.0086599!16s%2Fg%2F11t9p9kx_4!4m8!1m0!1m5!1m1!1s0x3397b694e5bf509d:0x938912b09efab323!2m2!1d121.0086818!2d14.6655827!3e9?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D",
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
            <motion.h2
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-2xl font-bold gradient-text mb-6"
            >
              Get In Touch
            </motion.h2>

            {/* Contact Info Cards */}
            <div className="space-y-3 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="card bg-gray-900/50 border border-gray-800 p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center">
                    <info.icon className="text-blue-400" size={20} />
                  </div>
                  <span className="text-gray-300">{info.text}</span>
                </motion.a>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="card bg-gray-900/50 border border-gray-800 p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email{" "}
                    <span className="text-xs text-gray-500 font-normal">
                      (Gmail only)
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="your.email@gmail.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: isSending ? 1 : 1.02 }}
                  whileTap={{ scale: isSending ? 1 : 0.98 }}
                  className={`w-full py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all ${isSending ? "opacity-70 cursor-not-allowed" : ""}`}
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-3 bg-green-900/20 text-green-400 rounded-lg flex items-center gap-2"
                  >
                    <CheckCircle size={18} />
                    <span className="text-sm">Message sent successfully!</span>
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-3 bg-red-900/20 text-red-400 rounded-lg flex items-center gap-2"
                  >
                    <div className="w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center">
                      <span className="text-xs font-bold">!</span>
                    </div>
                    <span className="text-sm">{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>
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
    </div>
  );
};

export default ContactPage;
