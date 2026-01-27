import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#020813] pt-20 pb-10 font-sans overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none">
        <div className="relative w-[85%] h-[2px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60px] bg-[#2BFFFF] blur-[80px] opacity-20"></div>
          <div className="absolute top-0 left-1/2  -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#2BFFFF] to-transparent opacity-50"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <img src="/home/Stellar_logo.png" alt="Stellar Solutions" className="h-20 w-auto mb-4" />
            <p className="text-sm leading-relaxed text-gray-400">
              We leverage cutting-edge technologies to ensure your digital footprint
              stands out in the crowded online landscape.
            </p>
            <div className="flex gap-3 pt-2">
              {[FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 !text-gray-400 hover:border-[#2BFFFF] hover:!text-[#2BFFFF] hover:bg-[#2BFFFF]/10 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-base uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-3 text-sm">
                {[
                  { name: "E-commerce Website Development", path: "/services/ecommerce" },
                  { name: "Website Design and Development", path: "/services/website" },
                  { name: "Custom Software Development", path: "/services/custom-software" },
                  { name: "Digital Marketing Services", path: "/services/digital-marketing" },
                  { name: "Mobile App Development", path: "/services/mobile" },
                  { name: "Design Services", path: "/services/website" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="!text-gray-400 hover:!text-[#2BFFFF] transition-colors hover:translate-x-1 duration-200 block">
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-base uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Our Products", path: "/products" },
                { name: "Contact Us", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms and Conditions", path: "/terms" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="!text-gray-400 hover:!text-[#2BFFFF] transition-colors hover:translate-x-1 duration-200 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-base uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-bold text-gray-100 mb-2">Stellar Solutions</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  No.6, Kandhaswamy Swamigal Rd, Ramanandha Nagar, Saravanampatti, Coimbatore, Tamil Nadu 641035 India.
                </p>
              </div>

              <a href="tel:+918870659648" className="flex items-center gap-3 !text-gray-400 hover:!text-[#2BFFFF] transition-colors group">
                <HiOutlinePhone className="text-lg group-hover:scale-110 transition-transform" />
                <span>+91 8870659648</span>
              </a>

              <a href="mailto:info@stellarsolutions.org" className="flex items-center gap-3 !text-gray-400 hover:!text-[#2BFFFF] transition-colors group">
                <HiOutlineMail className="text-lg group-hover:scale-110 transition-transform" />
                <span>info@stellarsolutions.org</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Stellar Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;