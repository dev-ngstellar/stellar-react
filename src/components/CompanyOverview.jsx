import React from 'react';
import { motion } from 'framer-motion';

const CompanyOverview = () => {
    return (

        <section className="relative py-24 px-4 bg-[#0a0a0a] overflow-hidden">
            {/* Dynamic Background Effects */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[100px] rounded-full mix-blend-screen animate-blob" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full mix-blend-screen animate-blob animation-delay-2000" />
                <div className="absolute top-[40%] left-[40%] w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10 items-start">

                {/* Left Column: Headline & Visuals */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-start relative"
                >
                    {/* Decorative Line */}
                    <div className="absolute -left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 hidden xl:block" />

                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
                        <span className="text-xl text-[#2BFFFF] animate-pulse">❖</span>
                        <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] via-blue-400 to-[#3981d4]">Company Overview</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-white tracking-tight mb-8">
                        Delivering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] via-blue-400 to-purple-400">
                            Digital Excellence
                        </span>
                        <br /> Since 2018.
                    </h2>

                    {/* Stats or Highlight */}
                    <div className="flex gap-8 mt-4 border-t border-white/10 pt-8 w-full max-w-md">
                        <div>
                            <p className="text-3xl font-bold text-white">5+</p>
                            <p className="text-sm text-gray-400 mt-1">Years of Innovation</p>
                        </div>
                        <div className="w-px h-12 bg-white/10"></div>
                        <div>
                            <p className="text-3xl font-bold text-white">100%</p>
                            <p className="text-sm text-gray-400 mt-1">Client Satisfaction</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Glass Card Description */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative lg:pt-4"
                >
                    {/* Glass Card */}
                    <div className="relative p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.2)] group overflow-hidden">

                        {/* Interactive Glow Effect */}
                        <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />

                        <p className="text-gray-300 text-lg md:text-[1.1rem] leading-relaxed font-light mb-6">
                            <span className="text-blue-400 font-semibold">Stellar</span> is a leading software development company, delivering innovative, high-quality solutions with a strong focus on customer satisfaction.
                        </p>

                        <p className="text-gray-400 text-[15px] leading-relaxed font-inter">
                            We understand that every business has unique challenges. Our skilled engineers, developers, and designers work closely with clients to analyze their needs and deliver tailored software solutions. Whether developing new applications, upgrading existing systems, or providing ongoing support, we focus on driving business growth through exceptional results.
                        </p>

                        {/* Decor */}
                        <div className="absolute bottom-6 right-6 opacity-30">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );

};

export default CompanyOverview;
