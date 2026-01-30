import React from 'react';
import { motion } from 'framer-motion';

const TechServicesGrid = ({ title, highlightText, description, services }) => {
    return (
        <section className="py-24 bg-[#020510] text-white relative overflow-hidden min-h-screen">
            {/* Ambient Background - Soft & Deep */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">{highlightText}</span>
                    </h2>
                    {description && (
                        <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">{description}</p>
                    )}
                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto rounded-full opacity-70" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="group relative h-full"
                        >
                            {/* Card Content - Deep Glassmorphism */}
                            <div className="relative h-full p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.1] hover:shadow-2xl hover:shadow-blue-500/10">

                                {/* Inner Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    {/* Icon Container - Clean & Soft */}
                                    <div className="mb-6 relative">
                                        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
                                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-300">
                                            <service.icon className="w-8 h-8 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-400 text-[14px] leading-relaxed font-inter group-hover:text-gray-300 transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechServicesGrid;
