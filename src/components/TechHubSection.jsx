import React from 'react';
import { motion } from 'framer-motion';

const TechHubSection = ({ title, highlightText, items, centralIcon }) => {
    // items should be an array of 4 objects: { icon, title, description }

    return (
        <section className="py-24 bg-[#020510] text-white relative overflow-hidden">
            {/* Background Effects */}

            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {title && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">{highlightText}</span>
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto rounded-full opacity-70" />
                    </motion.div>
                )}

                <div className="relative max-w-6xl mx-auto min-h-[auto] md:min-h-[600px] flex items-center justify-center">

                    {/* Central Hub */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                        <div className="relative">
                            {/* Glowing Orbs */}
                            <div className="absolute inset-0 bg-blue-500 rounded-full blur-[60px] opacity-20 animate-pulse" />
                            <div className="w-32 h-32 rounded-full bg-gradient-to-b from-[#0f172a] to-[#020617] border border-blue-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] relative z-10">
                                {/* Central Logo/Icon */}
                                {centralIcon ? centralIcon : (
                                    <img src="/home/Stellar_logo.png" alt="Stellar" loading="lazy" className="w-20 h-auto brightness-0 invert opacity-90" />
                                )}
                            </div>

                            {/* Spinning Rings */}
                            <div className="absolute inset-[-20%] border border-blue-500/10 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-[-40%] border border-cyan-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        </div>
                    </div>

                    {/* Connecting Lines (Desktop) */}
                    <div className="absolute inset-0 hidden md:block pointer-events-none">
                        {/* Horizontal Line */}
                        <div className="absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
                    </div>


                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-32 md:gap-y-16 w-full relative z-10">
                        {items.map((item, index) => {
                            // Calculate positions for staggered animation
                            const isLeft = index % 2 === 0;
                            const isTop = index < 2;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isLeft ? -50 : 50, y: isTop ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative group ${isLeft ? 'md:text-right' : 'md:text-left'} ${index === 1 || index === 2 ? 'md:mt-0' : ''}`}
                                >
                                    <div className={`p-8 rounded-2xl bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/80 border border-white/5 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-xl group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] md:max-w-md ${isLeft ? 'md:ml-auto' : 'md:mr-auto'}`}>

                                        <div className={`mb-4 flex items-center gap-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform duration-300 shrink-0">
                                                <item.icon className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors flex-1">
                                                {item.title}
                                            </h3>
                                        </div>

                                        <p className={`text-gray-400 text-[14px] leading-relaxed font-inter ${isLeft ? 'md:text-right' : ''}`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechHubSection;