import React from 'react';
import { motion } from 'framer-motion';

const MissionVisionSection = () => {
    return (
        <section className="relative py-16 md:py-24 px-4 bg-[#0a0a0a] overflow-hidden">
            {/* Background Pattern - subtle hexagon/tech feel */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"></div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

                {/* Left Column: Visuals */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full max-w-[600px] mx-auto lg:mx-0"
                >
                    {/* Background Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 blur-[80px] md:blur-[100px] rounded-full"></div>

                    {/* Image 1 (Back/Left) */}
                    <div className="absolute top-4 left-4 sm:top-10 sm:left-0 w-[45%] sm:w-[55%] h-[70%] sm:h-[75%] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform -rotate-6 grayscale hover:grayscale-0 transition-all duration-500 hover:z-20 hover:scale-105">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
                            alt="Team collaboration"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* Image 2 (Front/Right) */}
                    <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-0 w-[45%] sm:w-[55%] h-[70%] sm:h-[75%] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 z-10 hover:scale-105">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                            alt="Digital innovation"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-white/5 rounded-full scale-150 animate-[spin_60s_linear_infinite] pointer-events-none border-dashed opacity-20"></div>
                </motion.div>

                {/* Right Column: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col text-center lg:text-left"
                >
                    {/* Brand Label */}
                    <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
                        <span className="text-xl text-[#2BFFFF] animate-pulse">❖</span>
                        <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] via-blue-400 to-[#3981d4]">Mission & Vision</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        Navigating the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] via-blue-400 to-[#3981d4]">Digital Landscape with Expertise</span>
                    </h2>

                    <p className="text-gray-400 text-base md:text-lg mb-12 leading-relaxed">
                        Through our unwavering commitment to our mission and vision, we aim to become a trusted partner for organizations seeking innovative software solutions that drive growth, efficiency, and success.
                    </p>

                    {/* Mission & Vision Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
                        {/* Mission */}
                        <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">Our Mission</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Our mission is to bring ingenious and dependable software solutions that empower businesses and individuals to achieve their goals.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:bg-white/10">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Our Vision</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Our vision is to be the preferred software development partner globally, known for delivering exceptional results and exceeding client expectations.
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default MissionVisionSection;
