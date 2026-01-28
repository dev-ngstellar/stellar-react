import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesTimeoutRef = useRef(null);
  const productsTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled ? 'bg-[#020510]/80 backdrop-blur-lg border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* 1. Logo (Left) */}
        <NavLink to="/" className="flex-shrink-0 relative z-20">
          <div className="flex items-center gap-2 group">
            <img
              src="/home/Stellar_logo.png"
              alt="Stellar Logo"
              className="h-20 w-auto brightness-0 invert transition-transform group-hover:scale-105"
            />
          </div>
        </NavLink>

        {/* 2. Navigation Pill (Center - Desktop Only) */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className={`relative px-8 h-12 rounded-full flex items-center gap-8 transition-all duration-300 border ${scrolled ? 'bg-white/5 border-white/10 shadow-lg' : 'bg-white/5 border-white/10 backdrop-blur-md shadow-2xl'}`}>

            <NavLink
              to="/"
              end
              className={({ isActive }) => `text-sm font-medium relative group transition-all whitespace-nowrap ${isActive ? '!text-[#2BFFFF]' : '!text-white/80 hover:!text-white'}`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2BFFFF] group-hover:w-full transition-all duration-300"></span>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `text-sm font-medium relative group transition-all whitespace-nowrap ${isActive ? '!text-[#2BFFFF]' : '!text-white/80 hover:!text-white'}`}
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2BFFFF] group-hover:w-full transition-all duration-300"></span>
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (servicesTimeoutRef.current) {
                  clearTimeout(servicesTimeoutRef.current);
                  servicesTimeoutRef.current = null;
                }
                setServicesOpen(true);
              }}
              onMouseLeave={() => {
                servicesTimeoutRef.current = setTimeout(() => {
                  setServicesOpen(false);
                }, 250);
              }}
            >
              <button className={`!bg-transparent !border-none !shadow-none !p-0 transition-all text-sm font-medium flex items-center gap-1.5 group relative whitespace-nowrap ${location.pathname.includes('/services') ? '!text-[#2BFFFF]' : '!text-white/80 hover:!text-white'}`}>
                Services
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2BFFFF] group-hover:w-full transition-all duration-300"></span>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-[#020510]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl py-2 overflow-visible z-50 animate-in fade-in slide-in-from-top-2 duration-80">
                  <div className="px-1 space-y-0.5">
                    <NavLink to="/services/ecommerce" onClick={() => setServicesOpen(false)} className={({ isActive }) => `block px-4 py-2.5 text-sm rounded-lg transition-all ${isActive ? '!text-[#2BFFFF] bg-white/5' : '!text-gray-300 hover:!text-white hover:bg-white/5'}`}>E-commerce Website Development</NavLink>
                    <NavLink to="/services/website" onClick={() => setServicesOpen(false)} className={({ isActive }) => `block px-4 py-2.5 text-sm rounded-lg transition-all ${isActive ? '!text-[#2BFFFF] bg-white/5' : '!text-gray-300 hover:!text-white hover:bg-white/5'}`}>Website Design and Development</NavLink>
                    <NavLink to="/services/mobile" onClick={() => setServicesOpen(false)} className={({ isActive }) => `block px-4 py-2.5 text-sm rounded-lg transition-all ${isActive ? '!text-[#2BFFFF] bg-white/5' : '!text-gray-300 hover:!text-white hover:bg-white/5'}`}>Mobile App Development</NavLink>
                    <NavLink to="/services/custom-software" onClick={() => setServicesOpen(false)} className={({ isActive }) => `block px-4 py-2.5 text-sm rounded-lg transition-all ${isActive ? '!text-[#2BFFFF] bg-white/5' : '!text-gray-300 hover:!text-white hover:bg-white/5'}`}>Custom Software Development</NavLink>
                    <NavLink to="/services/digital-marketing" onClick={() => setServicesOpen(false)} className={({ isActive }) => `block px-4 py-2.5 text-sm rounded-lg transition-all ${isActive ? '!text-[#2BFFFF] bg-white/5' : '!text-gray-300 hover:!text-white hover:bg-white/5'}`}>Digital Marketing Services</NavLink>

                    <NavLink to="/services/design" onClick={() => setServicesOpen(false)} className={({ isActive }) => `block px-4 py-2.5 text-sm rounded-lg transition-all ${isActive ? '!text-[#2BFFFF] bg-white/5' : '!text-gray-300 hover:!text-white hover:bg-white/5'}`}>Design Services</NavLink>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (productsTimeoutRef.current) {
                  clearTimeout(productsTimeoutRef.current);
                  productsTimeoutRef.current = null;
                }
                setProductsOpen(true);
              }}
              onMouseLeave={() => {
                productsTimeoutRef.current = setTimeout(() => {
                  setProductsOpen(false);
                }, 250);
              }}
            >
              <button className={`!bg-transparent !border-none !shadow-none !p-0 transition-all text-sm font-medium flex items-center gap-1.5 group relative whitespace-nowrap ${location.pathname.includes('/products') ? '!text-[#2BFFFF]' : '!text-white/80 hover:!text-white'}`}>
                Products
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2BFFFF] group-hover:w-full transition-all duration-300"></span>
              </button>

              {productsOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 pt-2 w-48 bg-[#020510]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-80">
                  <Link to="/products/fieldeaze" onClick={() => setProductsOpen(false)} className="block px-4 py-2.5 text-sm !text-gray-300 hover:!text-white hover:bg-white/5 rounded-lg transition-all">FieldEaze</Link>
                </div>
              )}
            </div>

            <NavLink
              to="/industries"
              className={({ isActive }) => `text-sm font-medium relative group transition-all whitespace-nowrap ${isActive ? '!text-[#2BFFFF]' : '!text-white/80 hover:!text-white'}`}
            >
              Industries
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2BFFFF] group-hover:w-full transition-all duration-300"></span>
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) => `text-sm font-medium relative group transition-all whitespace-nowrap ${isActive ? '!text-[#2BFFFF]' : '!text-white/80 hover:!text-white'}`}
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2BFFFF] group-hover:w-full transition-all duration-300"></span>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => `text-sm font-medium relative group transition-all whitespace-nowrap ${isActive ? '!text-[#2BFFFF]' : '!text-white/80 hover:!text-white'}`}
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2BFFFF] group-hover:w-full transition-all duration-300"></span>
            </NavLink>
          </div>
        </div>

        {/* 3. Right Actions (Enquire & Mobile Menu) */}
        <div className="flex items-center gap-4 relative z-20">
          <div className="hidden lg:block">
            <Button>Enquire Us</Button>

          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#2BFFFF] focus:outline-none p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {
        isOpen && (
          <div className="lg:hidden fixed top-28 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md bg-black/95 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden mt-2 animate-in fade-in slide-in-from-top-2 duration-80">
            <div className="px-4 pt-6 pb-6 space-y-1">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                end
                className={({ isActive }) => `block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${isActive ? '!text-[#2BFFFF] bg-white/10' : '!text-white hover:!text-[#2BFFFF] hover:bg-white/10'}`}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${isActive ? '!text-[#2BFFFF] bg-white/10' : '!text-white hover:!text-[#2BFFFF] hover:bg-white/10'}`}
              >
                About Us
              </NavLink>

              {/* Services Mobile */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${location.pathname.includes('/services') ? '!text-[#2BFFFF]' : '!text-white hover:!text-[#2BFFFF] hover:bg-white/10'}`}
                >
                  <span>Services</span>
                  <svg className={`w-5 h-5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="pl-4 mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                    <NavLink to="/services/ecommerce" onClick={() => setIsOpen(false)} className={({ isActive }) => `block px-4 py-2.5 text-sm rounded-lg transition-all ${isActive ? '!text-[#2BFFFF]' : '!text-gray-300 hover:!text-[#2BFFFF] hover:bg-white/10'}`}>
                      E-commerce Website Development
                    </NavLink>
                    <NavLink to="/services/website" onClick={() => setIsOpen(false)} className={({ isActive }) => `block px-4 py-2.5 text-sm rounded-lg transition-all ${isActive ? '!text-[#2BFFFF]' : '!text-gray-300 hover:!text-[#2BFFFF] hover:bg-white/10'}`}>
                      Website Design and Development
                    </NavLink>
                    <NavLink to="/services/mobile" onClick={() => setIsOpen(false)} className={({ isActive }) => `block px-4 py-2.5 text-sm rounded-lg transition-all ${isActive ? '!text-[#2BFFFF]' : '!text-gray-300 hover:!text-[#2BFFFF] hover:bg-white/10'}`}>
                      Mobile App Development
                    </NavLink>
                    <NavLink to="/services/custom-software" onClick={() => setIsOpen(false)} className={({ isActive }) => `block px-4 py-2.5 text-sm rounded-lg transition-all ${isActive ? '!text-[#2BFFFF]' : '!text-gray-300 hover:!text-[#2BFFFF] hover:bg-white/10'}`}>
                      Custom Software Development
                    </NavLink>
                    <NavLink to="/services/digital-marketing" onClick={() => setIsOpen(false)} className={({ isActive }) => `block px-4 py-2.5 text-sm rounded-lg transition-all ${isActive ? '!text-[#2BFFFF]' : '!text-gray-300 hover:!text-[#2BFFFF] hover:bg-white/10'}`}>
                      Digital Marketing Services
                    </NavLink>
                    <NavLink to="/services/design" onClick={() => setIsOpen(false)} className={({ isActive }) => `block px-4 py-2.5 text-sm rounded-lg transition-all ${isActive ? '!text-[#2BFFFF]' : '!text-gray-300 hover:!text-[#2BFFFF] hover:bg-white/10'}`}>
                      Design Services
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Products Mobile */}
              <div>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${location.pathname.includes('/products') ? '!text-[#2BFFFF]' : '!text-white hover:!text-[#2BFFFF] hover:bg-white/10'}`}
                >
                  <span>Products</span>
                  <svg className={`w-5 h-5 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {productsOpen && (
                  <div className="pl-4 mt-1 animate-in slide-in-from-top-2 duration-200">
                    <NavLink to="/products/fieldeaze" onClick={() => setIsOpen(false)} className={({ isActive }) => `block px-4 py-2.5 text-sm rounded-lg transition-all ${isActive ? '!text-[#2BFFFF]' : '!text-gray-300 hover:!text-[#2BFFFF] hover:bg-white/10'}`}>
                      FieldEaze
                    </NavLink>
                  </div>
                )}
              </div>

              <NavLink
                to="/industries"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${isActive ? '!text-[#2BFFFF] bg-white/10' : '!text-white hover:!text-[#2BFFFF] hover:bg-white/10'}`}
              >
                Industries
              </NavLink>
              <NavLink
                to="/blog"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${isActive ? '!text-[#2BFFFF] bg-white/10' : '!text-white hover:!text-[#2BFFFF] hover:bg-white/10'}`}
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${isActive ? '!text-[#2BFFFF] bg-white/10' : '!text-white hover:!text-[#2BFFFF] hover:bg-white/10'}`}
              >
                Contact Us
              </NavLink>

              <div className="pt-4 border-t border-white mt-4">
                <Link
                  to="/signin"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-[#2BFFFF] to-teal-500 !text-white px-6 py-3.5 rounded-full font-semibold shadow-lg shadow-purple-500/30 hover:scale-105 transition-all duration-300"
                >
                  Enquire Us
                </Link>
              </div>
            </div>
          </div>
        )
      }
    </nav >
  );
};

export default Navbar;
