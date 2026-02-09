import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const PortfolioItem = ({ title, image, category, delay, link }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -10 }}
        className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer border border-white/10 bg-[#0A0F1C]"
    >
        <NavLink to={link} className="block w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2BFFFF]/20 to-[#3981d4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
            <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020813] via-[#020813]/60 to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-8 z-20">
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: delay + 0.2 }}
                    className="text-[#2BFFFF] font-bold text-sm mb-2 uppercase tracking-wider"
                >
                    {category}
                </motion.span>
                <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2BFFFF] group-hover:via-blue-400 group-hover:to-[#3981d4] transition-all duration-300">
                    {title}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#2BFFFF] to-[#3981d4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
        </NavLink>
    </motion.div>
);

const PortfolioSection = () => {
    return (
        <section className="py-24 bg-[#020813] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#3981d4]/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#2BFFFF]/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div className="space-y-2 text-center pb-16">
                    <div className="flex items-center gap-2 mb-6 justify-center">
                        <span className="text-xl text-[#2BFFFF] animate-pulse">❖</span>
                        <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] via-blue-400 to-[#3981d4]">OUR PORTFOLIO</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                        <span className="text-white">
                            Recent Work &{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] via-blue-400 to-[#3981d4]">Success Stories</span>
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PortfolioItem
                        title="Corporate Website Redesign"
                        category="Web Design"
                        image="/home/web-design-box.jpg"
                        delay={0}
                        link="/blog"
                    />
                    <PortfolioItem
                        title="Brand Identity Development"
                        category="Branding"
                        image="/home/branding-box.jpg"
                        delay={0.1}
                        link="/blog"
                    />
                    <PortfolioItem
                        title="Enterprise Mobile Application"
                        category="App Development"
                        image="/home/app-development-box.jpg"
                        delay={0.2}
                        link="/blog"
                    />
                </div>
                <div className="flex justify-center mt-7">
                    <NavLink to="/blog">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hover:cursor-pointer align-middle group relative px-7 py-3 rounded-full text-center align-middle bg-gradient-to-r from-[#2BFFFF] to-teal-500 text-black shadow-lg shadow-cyan-500/20 transition-all duration-300 text-xs font-bold tracking-widest uppercase hover:shadow-cyan-500/40 overflow-hidden inline-block"
                        >
                            <span className="relative z-10">View More</span>
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] -translate-x-[150%] transition-transform duration-700 ease-in-out group-hover:translate-x-[150%]" />
                        </motion.div>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;