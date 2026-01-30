import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BannerCommon from '../components/BannerCommon';
import { industryList } from '../data/IndustryData';

const Industries = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Function to truncate description to 3 lines
    const truncateDescription = (text) => {
        const words = text.split(' ');
        if (words.length <= 25) return text;
        return words.slice(0, 25).join(' ') + '...';
    };

    // Helper to slugify names
    const slugify = (text) => {
        return text
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    };

    return (
        <div className="bg-[#020813] min-h-screen pt-24 font-sans antialiased selection:bg-[#2BFFFF]/30 overflow-x-hidden">
            <BannerCommon
                badgeText="Industries"
                title="Innovation Across <br /> Every Sector"
                description="Tailored digital solutions designed to scale your specific business vertical."
                backgroundVideo="/banner-img/industries-hero.mp4"
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-20 mt-24 mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl pb-2 font-bold text-white tracking-tight"
                >
                    Industries We
                    <span className="relative inline-block ml-2">
                        <span className="bg-gradient-to-r from-[#2BFFFF] to-[#00a8ff] bg-clip-text text-transparent">Serve</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#2BFFFF] to-[#00a8ff] blur-lg opacity-30 -z-10">Serve</span>
                    </span>
                </motion.h2>
            </div>

            <section className="pb-20 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">
                    {industryList.map((item, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 md:gap-24 ${!isEven ? "lg:flex-row-reverse" : ""}`}>

                                {/* Image Section */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full lg:w-[40%] max-w-md flex-shrink-0 relative group p-[2px] overflow-hidden rounded-2xl shadow-[0_0_30px_-10px_rgba(43,255,255,0.4)]"
                                >
                                    <motion.div
                                        className="absolute inset-[-150%] z-0"
                                        style={{ background: "conic-gradient(from 0deg, transparent 75%, #2BFFFF 95%, transparent 100%)" }}
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                    />
                                    <div className="relative z-10 aspect-square overflow-hidden rounded-2xl bg-[#020813]">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#020813]/80 via-transparent to-transparent" />
                                    </div>
                                </motion.div>

                                {/* Text Content Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className={`w-full lg:w-[50%] flex flex-col ${isEven ? "lg:items-start" : "lg:items-end"}`}
                                >
                                    <p className="text-[#2BFFFF] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">Talk to Our Experts</p>

                                    <div className={`flex items-center gap-4 mb-6 ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                                        {/* Simple, clean icon with subtle animation */}
                                        <motion.div
                                            className="p-2 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md"
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            whileInView={{
                                                scale: 1,
                                                opacity: 1,
                                                transition: {
                                                    duration: 0.6,
                                                    ease: "easeOut"
                                                }
                                            }}
                                            whileHover={{
                                                scale: 1.1,
                                                backgroundColor: "rgba(43, 255, 255, 0.1)",
                                                borderColor: "rgba(43, 255, 255, 0.4)",
                                                transition: { duration: 0.3 }
                                            }}
                                            viewport={{ once: true }}
                                        >
                                            {item.icon}
                                        </motion.div>

                                        <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight relative text-white">
                                            {item.name}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <div className="w-full max-w-lg">
                                        <p
                                            className="text-gray-400 text-lg leading-relaxed mb-4 line-clamp-3 text-justify"
                                        >
                                            {truncateDescription(item.description)}
                                        </p>

                                        {/* Learn More Button */}
                                        <motion.button
                                            onClick={() => navigate(`/industries/${slugify(item.name)}`)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="text-[#2BFFFF] font-bold tracking-[0.2em] uppercase text-xs hover:text-white transition-colors duration-300 flex items-center gap-2 group/learnmore"
                                        >
                                            Learn More <span className="text-lg group-hover/learnmore:translate-x-2 transition-transform duration-300">→</span>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Industries;