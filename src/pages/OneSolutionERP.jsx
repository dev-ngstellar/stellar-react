import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import BannerCommon from '../components/BannerCommon';
import TechServicesGrid from '../components/TechServicesGrid';
import OneSolutionERPFeatures from '../components/OneSolutionERPFeatures';
import OneSolutionERPIndustries from '../components/OneSolutionERPIndustries';
import OneSolutionERPTargetUsers from '../components/OneSolutionERPTargetUsers';
import StarBorder from '../components/StarBorder';
import { Link } from 'react-router-dom';
import { 
  coreModules, 
  keyFeaturesData, 
  industriesServed, 
  targetUsers 
} from '../data/OneSolutionERPData';

const OneSolutionERP = () => {
  const showcaseRef = React.useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToShowcase = () => {
    showcaseRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#020813] min-h-screen pt-24 font-sans selection:bg-[#2BFFFF]/30">
      <BannerCommon
        badgeText="Products"
        title="SolutionOne ERP"
        description="A robust ERP software designed for engineering and manufacturing businesses. Streamline sales, purchase, production, inventory, finance, and compliance on a single integrated platform."
        backgroundVideo="../banner-img/products-fieldeaze-hero.mp4" 
      >
        {/* Visit Our Site button - Fixed with proper centering */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <a
            href="https://www.solutiononeerp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer px-8 py-3 rounded-full bg-gradient-to-r from-[#2BFFFF] to-teal-500 text-black shadow-lg transition-all duration-300 text-xs font-bold tracking-widest uppercase inline-flex items-center justify-center min-h-[48px]"
          >
            Visit Our Site
          </a>
        </motion.div>
        <StarBorder
          as={Link}
          to="/contact"
          className="text-[#2BFFFF] font-bold tracking-widest uppercase text-sm"
          color="#2BFFFF"
          speed="3s"
        >
          Schedule Demo
        </StarBorder>
      </BannerCommon>

      {/* Enhanced Showcase Section with FieldEaze Layout */}
      <section className="relative py-14 px-6 bg-[#020813] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-900/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Block 1 */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Experience Manufacturing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] to-teal-500">
                  Excellence with SolutionOne ERP
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                SolutionOne ERP Software is an Indian ERP solution provider focused on delivering practical, scalable, and
                industry-specific ERP systems for manufacturers. With multiple successful implementations across India,
                SolutionOne ERP is trusted for its quality, reliability, and long-term support commitment.
              </p>
            </div>

            {/* Block 2 */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Why Trust{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] to-teal-500">
                  SolutionOne ERP?
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                SolutionOne ERP is a robust Enterprise Resource Planning (ERP) software designed specifically for engineering
                and manufacturing businesses. It helps organizations streamline operations across sales, purchase, production,
                inventory, finance, and statutory compliance on a single integrated platform.
              </p>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: -0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2BFFFF]/20 to-teal-600/20 blur-2xl transform scale-90" />

              <motion.img
                src="/onesolutionerp/solution_one_mobile_1.png"
                alt="Solution One ERP Mobile Interface"
                className="relative w-full max-w-md lg:max-w-lg drop-shadow-2xl z-10 rounded-2xl"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Users Section */}
      <OneSolutionERPTargetUsers targetUsers={targetUsers} />

      <div ref={showcaseRef}>
        {/* Core Modules Section */}
        <TechServicesGrid
          title="Core"
          highlightText="Modules"
          description="Comprehensive modules covering all aspects of manufacturing operations"
          services={coreModules}
        />
      </div>

      {/* What Makes us Different Section - ONLY IMAGE VERSION */}
      <section className="relative py-14 px-6 bg-[#020813] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-[#2BFFFF]/10 border border-[#2BFFFF]/30 text-[#2BFFFF] text-sm font-bold tracking-wide uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">
              What Makes Us{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] to-cyan-500">
                Different
              </span>
            </h2>
            {/* Added subtitle line here */}
            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
              Unique approach to manufacturing ERP with unmatched flexibility and insights
            </p>
          </motion.div>

          {/* Full Width Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-2xl transform scale-95" />

            {/* Static Image - No Animation */}
            <img
              src="/onesolutionerp/solution_one_ERP.webp"
              alt="Solution One ERP Dashboard"
              className="relative w-full h-auto drop-shadow-2xl z-10 rounded-2xl"
              style={{ maxHeight: '600px', objectFit: 'cover' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <OneSolutionERPFeatures 
        title="Key Features & Benefits"
        description="Powerful features designed for manufacturing excellence"
        features={keyFeaturesData}
      />

      {/* Industries Served Section */}
      <OneSolutionERPIndustries industries={industriesServed} />

      {/* Deployment Options Section */}
      <section className="relative py-14 px-6 bg-[#020813] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-900/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">
              Deployment{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Options
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              SolutionOne ERP is available in both <span className="font-bold text-blue-400">Cloud</span> and{' '}
              <span className="font-bold text-teal-400">On-Premise</span> deployment models, allowing businesses to choose the option that best suits their operational and security requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group p-10 bg-gradient-to-br from-[#0a1828]/50 to-[#071526]/50 rounded-3xl shadow-lg hover:shadow-2xl border-2 border-blue-500/20 hover:border-blue-500/40 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-400">Cloud Deployment</h3>
              </div>
              <ul className="text-left text-gray-300 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold text-xl">✓</span>
                  <span className="text-base leading-relaxed">Accessible from anywhere, anytime</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold text-xl">✓</span>
                  <span className="text-base leading-relaxed">Automatic updates and maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold text-xl">✓</span>
                  <span className="text-base leading-relaxed">Reduced IT infrastructure costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold text-xl">✓</span>
                  <span className="text-base leading-relaxed">Scalable and flexible</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group p-10 bg-gradient-to-br from-[#0a1828]/50 to-[#071526]/50 rounded-3xl shadow-lg hover:shadow-2xl border-2 border-teal-500/20 hover:border-teal-500/40 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-teal-400">On-Premise Deployment</h3>
              </div>
              <ul className="text-left text-gray-300 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 font-bold text-xl">✓</span>
                  <span className="text-base leading-relaxed">Full control over data and security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 font-bold text-xl">✓</span>
                  <span className="text-base leading-relaxed">Customization flexibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 font-bold text-xl">✓</span>
                  <span className="text-base leading-relaxed">No internet dependency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 font-bold text-xl">✓</span>
                  <span className="text-base leading-relaxed">Compliance with local regulations</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneSolutionERP;