import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, BarChart3, Users, Clock, Globe2, Target, Smartphone, Code2, Rocket, Share2 } from 'lucide-react';

const WhyChooseUsSection = ({ title, items }) => {

    // Helper to get a relevant icon
    const getIcon = (itemTitle) => {
        const lowerTitle = itemTitle.toLowerCase();
        if (lowerTitle.includes('team') || lowerTitle.includes('expert')) return <Users className="w-6 h-6" />;
        if (lowerTitle.includes('time') || lowerTitle.includes('delivery') || lowerTitle.includes('speed')) return <Clock className="w-6 h-6" />;
        if (lowerTitle.includes('support') || lowerTitle.includes('maintenance')) return <ShieldCheck className="w-6 h-6" />;
        if (lowerTitle.includes('custom') || lowerTitle.includes('tailored') || lowerTitle.includes('strategies')) return <Target className="w-6 h-6" />;
        if (lowerTitle.includes('cost') || lowerTitle.includes('affordable') || lowerTitle.includes('roi')) return <BarChart3 className="w-6 h-6" />;
        if (lowerTitle.includes('tech') || lowerTitle.includes('tools')) return <Code2 className="w-6 h-6" />;
        if (lowerTitle.includes('user') || lowerTitle.includes('experience')) return <Smartphone className="w-6 h-6" />;
        if (lowerTitle.includes('global') || lowerTitle.includes('local')) return <Globe2 className="w-6 h-6" />;
        if (lowerTitle.includes('analytic') || lowerTitle.includes('report') || lowerTitle.includes('data')) return <BarChart3 className="w-6 h-6" />;
        if (lowerTitle.includes('scale') || lowerTitle.includes('scalab')) return <Rocket className="w-6 h-6" />;
        if (lowerTitle.includes('market') || lowerTitle.includes('strategy')) return <Share2 className="w-6 h-6" />;
        return <CheckCircle2 className="w-6 h-6" />;
    };

    return (
        <section className="pb-24 relative overflow-hidden bg-[#020510]">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 inline-block mb-4 pb-2">
                        {title}
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto rounded-full opacity-70" />
                </motion.div>

                {/* Central Spine Architecture */}
                <div className="relative max-w-5xl mx-auto">

                    {/* The Glowing Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-12 md:space-y-24">
                        {items.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-start md:items-start gap-8 ${isEven ? 'md:flex-row-reverse' : ''
                                        }`}
                                >
                                    {/* Content Side */}
                                    <div className="flex-1 w-full pl-12 md:pl-0">
                                        <div className={`group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-500 hover:border-blue-500/30 ${isEven ? 'md:text-right' : 'md:text-left'
                                            }`}>
                                            {/* Glow Effect on Hover */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" />

                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center Node / Icon */}
                                    <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border border-blue-500/30 bg-[#020510] shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 group mt-6 md:mt-6">
                                        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md animate-pulse" />
                                        <div className="relative text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                                            {getIcon(item.title)}
                                        </div>
                                    </div>

                                    {/* Spacer Side (Empty for balance) */}
                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
