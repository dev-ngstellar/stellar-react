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

  const getLightPosition = () => {
    switch (focusField) {
      case 1: return "translate-x-[-80%] translate-y-[-90%] scale-150";
      case 2: return "translate-x-[-150%] translate-y-[-110%] scale-125";
      case 3: return "translate-x-[-200%] translate-y-[-120%] scale-110";
      case 4: return "translate-x-[-120%] translate-y-[-150%] scale-150";
      default: return "translate-x-0 translate-y-0 opacity-40";
    }
  };

  return (
    <div className="pt-30 pb-10 min-h-screen bg-[#0B1121] font-sans px-4 md:px-10 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto min-h-[90vh] bg-white/5 backdrop-blur-3xl rounded-[3.5rem] border border-white/10 overflow-hidden flex items-center justify-center p-8 md:p-16 shadow-2xl">

        {/* LIGHT EFFECTS */}
        <div className={`absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2BFFFF]/20 blur-[120px] rounded-full transition-all duration-1000 ease-in-out pointer-events-none z-0 ${getLightPosition()}`}></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#3981d4]/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: FORM SECTION */}
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-none text-white">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] to-[#3981d4]">Us</span>
            </h1>

            <form onSubmit={validateForm} className="space-y-4 max-w-md">
              {error && <p className="text-red-400 text-xs font-bold tracking-wide">{error}</p>}

              <input name="name" value={formData.name} onChange={handleInputChange} onFocus={() => setFocusField(1)} type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#2BFFFF]/50 focus:ring-1 focus:ring-[#2BFFFF]/20 transition-all" required />
              <input name="email" value={formData.email} onChange={handleInputChange} onFocus={() => setFocusField(2)} type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#2BFFFF]/50 focus:ring-1 focus:ring-[#2BFFFF]/20 transition-all" required />
              <input name="mobile" value={formData.mobile} onChange={handleInputChange} onFocus={() => setFocusField(2)} type="tel" placeholder="Mobile Number" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#2BFFFF]/50 focus:ring-1 focus:ring-[#2BFFFF]/20 transition-all" required />

              <select name="interest" value={formData.interest} onChange={handleInputChange} onFocus={() => setFocusField(3)} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-gray-400 focus:outline-none focus:border-[#2BFFFF]/50 focus:ring-1 focus:ring-[#2BFFFF]/20 transition-all appearance-none cursor-pointer">
                <option value="" disabled>Interested in</option>
                <option value="web" className="bg-[#0B1121]">Website Development</option>
                <option value="app" className="bg-[#0B1121]">Ecommerce, Web & Mobile App Development</option>
                <option value="marketing" className="bg-[#0B1121]">Digital Marketing</option>
                <option value="sap" className="bg-[#0B1121]">SAP Services</option>
                <option value="ai" className="bg-[#0B1121]">AI LLM Security</option>
                <option value="threat" className="bg-[#0B1121]">ThreatVantage Services</option>
                <option value="others" className="bg-[#0B1121]">Others</option>
              </select>

              <textarea name="message" value={formData.message} onChange={handleInputChange} onFocus={() => setFocusField(4)} rows="3" placeholder="Your message" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#2BFFFF]/50 focus:ring-1 focus:ring-[#2BFFFF]/20 transition-all resize-none"></textarea>

              <div className="pt-2">
                <Button type="submit" className="w-full md:w-auto px-12 py-4">
                  SUBMIT
                </Button>
              </div>
            </form>
          </div>

          {/* RIGHT: PINNED MAP & INFO */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
            <div className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-[2.5rem] space-y-6 shadow-2xl backdrop-blur-md h-fit">
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-white uppercase tracking-relaxed leading-none">STELLAR SOLUTIONS</h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#2BFFFF] mt-1 shrink-0" />
                  <p className="text-gray-400 text-xs leading-relaxed">
                    No.6, Kandhaswamy Swamigal Rd, behind Aadhi Maruthi showroom, <br />
                    Ramanandha Nagar, Saravanampatti, Coimbatore, <br />
                    Tamil Nadu 641035 India.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-[#2BFFFF] shrink-0" />
                  <a href="tel:+918870659648" className="text-white font-medium hover:text-[#2BFFFF] transition-colors">+91 8870659648</a>
                </div>
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <FaEnvelope className="text-[#2BFFFF] shrink-0" />
                  <a href="mailto:info@stellarsolutions.org" className="text-white font-medium hover:text-[#2BFFFF] transition-colors">info@stellarsolutions.org</a>
                </div>
              </div>

              {/* STABLE MAP PIN */}
              <div className="relative w-full h-48 rounded-3xl overflow-hidden border border-white/10 mt-4 shadow-inner">
                <iframe
                  title="Stellar Solutions Map Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Stellar%20Solutions,%20Saravanampatti,%20Coimbatore+(Stellar%20Solutions)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  className="filter opacity-80 hover:opacity-100 hover:filter-none transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;