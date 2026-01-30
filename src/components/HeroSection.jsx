import React from 'react';
import FloatingLines from './FloatingLines';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StarBorder from './StarBorder';

const HeroSection = () => {
  return (
    <section className="pt-24 relative w-full min-h-[100dvh] bg-[#0a0b1a] font-sans overflow-hidden flex items-center">

      {/* Background Floating Lines */}
      <div className="absolute inset-0 z-0">
        <FloatingLines
          linesGradient={["#255e5f", "#133272"]}
          animationSpeed={1}
          interactive
          bendRadius={5}
          bendStrength={-0.5}
          mouseDamping={0.05}
          parallax
          parallaxStrength={0.2}
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] text-center">

        {/* Main Content */}
        <div className="flex flex-col justify-center items-center text-center space-y-6 lg:space-y-8 max-w-5xl mx-auto">

          {/* Badge Line Container MATCHING BannerCommon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 sm:gap-6 mb-4 w-full max-w-2xl justify-center"
          >
            {/* Left Line */}
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Left Star */}
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#2BFFFF] drop-shadow-[0_0_8px_rgba(43,255,255,0.5)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>

            {/* Badge */}
            <div className="px-6 py-2 sm:px-8 sm:py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-xs sm:text-sm font-medium tracking-wide text-white shadow-[0_0_20px_-5px_rgba(43,255,255,0.4)] hover:shadow-[0_0_25px_-5px_rgba(43,255,255,0.6)] hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-default whitespace-nowrap">
              Stellar Solutions
            </div>

            {/* Right Star */}
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#2BFFFF] drop-shadow-[0_0_8px_rgba(43,255,255,0.5)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>

            {/* Right Line */}
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </motion.div>

          {/* Headline MATCHING BannerCommon Style */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter pb-4 select-none drop-shadow-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40"
          >
            Building Future-Ready<br /> Digital Experiences
          </motion.h1>

          {/* Subtext MATCHING BannerCommon Style */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative z-10 text-gray-300/80 text-center max-w-2xl text-base md:text-lg mb-8 leading-relaxed font-light tracking-wide px-4"
          >
            Smart, scalable digital solutions built for tomorrow’s business success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "backOut" }}
          >
            <StarBorder
              as={Link}
              to="/contact"
              className="text-white font-bold tracking-widest uppercase text-xs"
              color="#2BFFFF"
              speed="3s"
            >
              Get Started
            </StarBorder>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
