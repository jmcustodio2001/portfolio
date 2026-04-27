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
              className="card p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <info.icon className="text-blue-600" size={20} />
              </div>
              <span className="text-gray-700">{info.text}</span>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="card p-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Send Me a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="your.email@gmail.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
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
                className="mt-4 p-3 bg-green-50 text-green-600 rounded-lg flex items-center gap-2"
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
                className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-xs font-bold">!</span>
                </div>
                <span className="text-sm">{error}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
