import React from 'react';
import { NavLink } from 'react-router-dom';
import GlobeComponent from './GlobeComponent';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="bg-[#000000] text-white py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* LEFT – CENTERED GLOBE */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full" />

              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover mix-blend-screen pointer-events-none scale-110"
              >
                <source src="/home/earth.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div className="w-full md:w-1/2 space-y-6 lg:space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold">
              About Us
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Stellar Solutions was founded in 2020. We serve small businesses
              and medium to large enterprises across the Middle East.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We deliver web, mobile, and custom software solutions that empower
              businesses to scale efficiently in a rapidly evolving digital
              landscape.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our mission is to simplify digital transformation through
              innovative, secure, and user-friendly technology.
            </p>

            <NavLink
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              to="/about"
              className="group relative px-7 py-3 hover:cursor-pointer rounded-full bg-gradient-to-r from-[#2BFFFF] to-teal-500 text-black shadow-lg shadow-cyan-500/20 transition-all duration-300 text-xs font-bold tracking-widest uppercase hover:shadow-cyan-500/40 overflow-hidden inline-block"
            >
              <span className="relative z-10">Read More</span>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] -translate-x-[150%] transition-transform duration-700 ease-in-out group-hover:translate-x-[150%]" />
            </NavLink>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
