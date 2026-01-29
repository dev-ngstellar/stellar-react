import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Button from "./Button";

const ContactUs = () => {
  const [focusField, setFocusField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    interest: "",
    message: ""
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // VALIDATION: Only allow numbers and max 10 digits for mobile
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

  const validateForm = (e) => {
    e.preventDefault();
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
    alert("Thank you! Your message has been sent.");
  };

  return (
    <div className="pt-30 pb-10 min-h-screen bg-[#0B1121] font-sans px-4 md:px-10 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col lg:flex-row">

        {/* LEFT PANEL: Contact Information */}
        <div className="relative w-full lg:w-2/5 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-10 flex flex-col justify-between overflow-hidden">
          {/* Functional Decorative Circles */}
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#2BFFFF]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-10 right-10 w-20 h-20 bg-[#3981d4]/20 rounded-full blur-xl pointer-events-none"></div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-12">
              Fill up the form and our Team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4 !text-white group">
                <div className="w-10 h-10 rounded-full bg-[#2BFFFF]/10 flex items-center justify-center text-[#2BFFFF] group-hover:bg-[#2BFFFF] group-hover:text-black transition-all duration-300">
                  <FaPhoneAlt className="text-sm" />
                </div>
                <a href="tel:+918870659648" className="text-sm font-medium hover:text-[#2BFFFF] transition-colors !text-white">+91 8870659648</a>
              </div>

              <div className="flex items-center gap-4 text-white group">
                <div className="w-10 h-10 rounded-full bg-[#2BFFFF]/10 flex items-center justify-center text-[#2BFFFF] group-hover:bg-[#2BFFFF] group-hover:text-black transition-all duration-300">
                  <FaEnvelope className="text-sm" />
                </div>
                <a href="mailto:info@stellarsolutions.org" className="text-sm font-medium hover:text-[#2BFFFF] transition-colors !text-white">info@stellarsolutions.org</a>
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

          {/* Social Icons or Map Placeholder if needed (keeping it clean for now as per ref) */}
          <div className="mt-12 relative h-40 w-full rounded-2xl overflow-hidden border border-white/10 opacity-80 hover:opacity-100 transition-opacity">
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

        {/* RIGHT PANEL: Contact Form */}
        <div className="w-full lg:w-3/5 p-8 md:p-12 bg-transparent">
          <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>

          <form onSubmit={validateForm} className="space-y-6">
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
              <div className="relative">
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#2BFFFF]/50 focus:ring-1 focus:ring-[#2BFFFF]/50 focus:bg-white/10 transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-gray-500">Select an option</option>
                  <option value="web" className="bg-[#0B1121]">Website Development</option>
                  <option value="app" className="bg-[#0B1121]">Ecommerce, Web & Mobile App Development</option>
                  <option value="marketing" className="bg-[#0B1121]">Digital Marketing</option>
                  <option value="sap" className="bg-[#0B1121]">SAP Services</option>
                  <option value="ai" className="bg-[#0B1121]">AI LLM Security</option>
                  <option value="threat" className="bg-[#0B1121]">ThreatVantage Services</option>
                  <option value="others" className="bg-[#0B1121]">Others</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
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
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;