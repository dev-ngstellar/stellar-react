import React from 'react';
import { motion } from 'framer-motion';

const ChooseCard = ({ icon, title, description }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="group relative p-8 rounded-2xl bg-[#020510] border border-white/5 hover:border-[#2BFFFF]/30 transition-all duration-500 overflow-hidden"
    >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2BFFFF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Icon Container with Gradient */}
        <div className="relative w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/50 border border-white/5">
            <div className="text-[#2BFFFF] group-hover:drop-shadow-[0_0_8px_rgba(43,255,255,0.5)] transition-all duration-300">
                {icon}
            </div>
        </div>

        <h3 className="text-center text-xl
         font-bold text-white mb-3 group-hover:text-[#2BFFFF] transition-colors duration-300">{title}</h3>
        <p className="text-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed text-sm">{description}</p>
    </motion.div>
);

const WhyChooseUs = () => {
    return (
        <section className="bg-dark-blue py-16 text-white relative overflow-hidden">
            {/* Background Overlay or Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div className="space-y-2 text-center">
                    <h2 className="text-4xl md:text-5xl pb-10 lg:text-5xl font-bold leading-tight">
                        <span className="text-white">
                            Why Choose{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] via-blue-400 to-[#3981d4]">Stellar Solutions ?</span>
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ChooseCard
                        icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
                        title="Expertise and Experience"
                        description="Years of industry experience delivering top-notch solutions."
                    />
                    <ChooseCard
                        icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>}
                        title="Proven Results"
                        description="We deliver measurable results that drive business growth."
                    />
                    <ChooseCard
                        icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>}
                        title="Comprehensive Services"
                        description="End-to-end digital services under one roof."
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;


