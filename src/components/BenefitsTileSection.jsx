import React from 'react';
import { motion } from 'framer-motion';

const BenefitsTileSection = ({ title, subtitle, benefits }) => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-teal-100/50 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#020510]">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="group h-64 perspective-[1000px] cursor-pointer"
                        >
                            <div className="relative w-full h-full duration-700 transition-all [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">

                                {/* Front Face */}
                                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                                    <div className="h-full w-full bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-xl border border-slate-100 p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden group-hover:shadow-2xl transition-shadow duration-300">

                                        {/* Subtle corner accents */}
                                        <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full" />
                                        <div className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-full" />

                                        {/* Icon/Number placeholder or just styled title */}
                                        <h3 className="text-sm md:text-xl font-bold text-gray-800 text-center leading-tight break-words w-full">
                                            {item.title}
                                        </h3>
                                        <div className="h-1 my-5 w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto rounded-full opacity-70" />
                                    </div>
                                </div>

                                {/* Back Face */}
                                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateX(180deg)]">
                                    <div className="h-full w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl shadow-xl border border-blue-500/30 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">

                                        {/* Glowing Mesh Effect */}
                                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500 rounded-full blur-[60px] opacity-20" />
                                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-[60px] opacity-20" />

                                        <h4 className="text-lg font-bold text-sky-300 mb-3 relative z-10">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-300 leading-relaxed text-sm relative z-10">
                                            {item.description}
                                        </p>

                                        {/* Bottom Accent */}
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsTileSection;
