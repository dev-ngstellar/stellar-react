import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    interest: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const onlyNums = value.replace(/[^0-9]/g, "");
      if (onlyNums.length <= 10) {
        setFormData({ ...formData, [name]: onlyNums });
      }
    } else if (name === "name") {
      const onlyAlphabets = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData({ ...formData, [name]: onlyAlphabets });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ prevent page reload

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address (e.g., name@gmail.com).");
      return;
    }
    if (formData.mobile.length !== 10) {
      setError("Mobile number must be exactly 10 digits.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await emailjs.send(
        "service_69b7hhr",   // 🔴 replace
        "template_nqabmzj",  // 🔴 replace
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          interest: formData.interest,
          message: formData.message
        },
        "QBX0tqPoQTYBdTbO8"    // 🔴 replace
      );

      setFormData({
        name: "",
        email: "",
        mobile: "",
        interest: "",
        message: ""
      });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      alert("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#0B1121] font-sans relative overflow-hidden flex flex-col items-center justify-center">

      {/* BACKGROUND ANIMATIONS - LIQUID GLOSS */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Blob 1 - Cyan/Blue Mix */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 45, -45, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#3981d4]/30 rounded-full blur-[100px] mix-blend-screen opacity-60"
        />

        {/* Blob 2 - Electric Cyan */}
        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 100, -50, 0],
            scale: [1, 1.3, 0.8, 1],
            rotate: [0, -30, 30, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-[#2BFFFF]/20 rounded-full blur-[120px] mix-blend-screen opacity-50"
        />

        {/* Blob 3 - Deep Purple/Blue Accent (Center-ish) */}
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.1, 0.9, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4c1d95]/20 rounded-full blur-[150px] mix-blend-overlay"
        />

        {/* Glassy Overlay for sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-20 pointer-events-none"></div>
      </div>

      {/* PAGE HEADER */}
      <div className="relative z-10 text-center mb-8 md:mb-12 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 md:mb-4"
        >
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] to-[#3981d4]">Touch</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto px-4 leading-relaxed"
        >
          Have a project in mind? We'd love to hear from you. Let's create something amazing together.
        </motion.p>
      </div>

      <div className="w-full max-w-6xl bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col lg:flex-row relative z-10 mx-4 my-4">

        {/* LEFT PANEL */}
        <div className="relative w-full lg:w-2/5 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-6 md:p-10 flex flex-col justify-between overflow-hidden">
          {/* Functional Decorative Circles */}
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#2BFFFF]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-10 right-10 w-20 h-20 bg-[#3981d4]/20 rounded-full blur-xl pointer-events-none"></div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 md:mb-12">
              Fill up the form and our Team will get back to you within 24 hours.
            </p>
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4 !text-white group">
                <div className="w-10 h-10 rounded-full bg-[#2BFFFF]/10 flex items-center justify-center text-[#2BFFFF] group-hover:bg-[#2BFFFF] group-hover:text-black transition-all duration-300 shrink-0">
                  <FaPhoneAlt className="text-sm" />
                </div>
                <a href="tel:+918870659648" className="text-sm font-medium hover:text-[#2BFFFF] transition-colors !text-white">+91 8870659648</a>
              </div>
              <div className="flex items-center gap-4 text-white group">
                <div className="w-10 h-10 rounded-full bg-[#2BFFFF]/10 flex items-center justify-center text-[#2BFFFF] group-hover:bg-[#2BFFFF] group-hover:text-black transition-all duration-300 shrink-0">
                  <FaEnvelope className="text-sm" />
                </div>
                <a href="mailto:info@stellarsolutions.org" className="text-sm font-medium hover:text-[#2BFFFF] transition-colors !text-white break-all">info@stellarsolutions.org</a>
              </div>
              <div className="flex items-start gap-4 text-white group">
                <div className="w-10 h-10 rounded-full bg-[#2BFFFF]/10 flex items-center justify-center text-[#2BFFFF] shrink-0 group-hover:bg-[#2BFFFF] group-hover:text-black transition-all duration-300">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  No.6, Kandhaswamy Swamigal Rd, <br /> Saravanampatti, Coimbatore, <br /> Tamil Nadu 641035 India.
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-8 md:mt-12 relative h-40 w-full rounded-2xl overflow-hidden border border-white/10 opacity-80 hover:opacity-100 transition-opacity">
            <iframe
              title="Stellar Solutions Map Location"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Stellar%20Solutions,%20Saravanampatti,%20Coimbatore+(Stellar%20Solutions)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="filter transition-all duration-500"
            ></iframe>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full lg:w-3/5 p-8 md:p-12 bg-transparent">
          <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <p className="text-red-400 text-xs font-bold tracking-wide">{error}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Your Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#2BFFFF]/50 focus:ring-1 focus:ring-[#2BFFFF]/50 focus:bg-white/10 transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#2BFFFF]/50 focus:ring-1 focus:ring-[#2BFFFF]/50 focus:bg-white/10 transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Phone Number</label>
              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                type="tel"
                placeholder="+91 99999 99999"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#2BFFFF]/50 focus:ring-1 focus:ring-[#2BFFFF]/50 focus:bg-white/10 transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Interested in</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#2BFFFF]/50 focus:ring-1 focus:ring-[#2BFFFF]/50 focus:bg-white/10 transition-all duration-300 appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-gray-500">Select an option</option>
                <option value="Web-development" className="bg-[#0B1121]">Website Development</option>
                <option value="App-development" className="bg-[#0B1121]">Ecommerce, Web & Mobile App Development</option>
                <option value="Digital-marketing" className="bg-[#0B1121]">Digital Marketing</option>
                <option value="SAP" className="bg-[#0B1121]">SAP Services</option>
                <option value="AI" className="bg-[#0B1121]">AI LLM Security</option>
                <option value="Threat-Services" className="bg-[#0B1121]">ThreatVantage Services</option>
                <option value="others" className="bg-[#0B1121]">Others</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#2BFFFF]/50 focus:ring-1 focus:ring-[#2BFFFF]/50 focus:bg-white/10 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <div className="pt-2 flex justify-start">
              <Button type="submit" className="w-full md:w-auto px-10 py-3.5 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-[#2BFFFF]/10 backdrop-blur-md border border-[#2BFFFF]/50 text-[#2BFFFF] px-8 py-4 rounded-2xl shadow-[0_0_20px_rgba(43,255,255,0.3)] flex items-center gap-3"
          >
            <div className="w-6 h-6 rounded-full bg-[#2BFFFF] flex items-center justify-center text-black font-bold text-xs">
              ✓
            </div>
            <span className="font-semibold tracking-wide">Message sent successfully! We'll get back to you shortly.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactUs;
