import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
    {
        title: "Tailored Solutions",
        description: "We don't believe in one-size-fits-all. Our software is custom-built to perfectly align with your specific business workflows and goals.",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        ),
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "Scalable Architecture",
        description: "Build for today, ready for tomorrow. Our systems are designed to grow effortlessly alongside your expanding business needs.",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        ),
        gradient: "from-purple-500 to-pink-500"
    },
    {
        title: "Real-Time Analytics",
        description: "Turn data into decisions. Gain actionable insights with integrated dashboards that track performance and key metrics instantly.",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        ),
        gradient: "from-cyan-400 to-blue-600"
    },
    {
        title: "Agile Development",
        description: "Speed without compromise. Our agile methodology ensures rapid delivery, flexibility, and continuous improvement throughout the lifecycle.",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        ),
        gradient: "from-amber-400 to-orange-500"
    },
    {
        title: "Automated Workflows",
        description: "Eliminate manual tasks. We implement smart automation to streamline operations, reduce errors, and free up your team for higher-value work.",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        ),
        gradient: "from-green-400 to-emerald-600"
    },
    {
        title: "Enterprise Security",
        description: "Protect what matters most. We implement industry-leading security protocols to safeguard your data and ensure compliance.",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        ),
        gradient: "from-red-500 to-rose-600"
    },
    {
        title: "Dedicated Support",
        description: "We are with you every step of the way. Our dedicated support team ensures your systems run smoothly long after deployment.",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        ),
        gradient: "from-indigo-400 to-violet-500"
    },
    {
        title: "Future-Ready Tech",
        description: "Stay ahead of the curve. We leverage cutting-edge technologies to ensure your solution remains competitive in a rapidly evolving market.",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        ),
        gradient: "from-fuchsia-500 to-purple-600"
    },
];

const KeyBenefitsSection = () => {
    return (
        <section className="relative py-24 px-4 bg-[#050505] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Key Benefits of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] via-blue-400 to-[#3981d4]">Stellar Solutions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-[16px] leading-relaxed font-inter"
                    >
                        Discover how our expert software engineering streamlines your operations through efficiency, security, and innovation.                  </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 rounded-3xl bg-[#0f0f11] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${item.gradient}`}></div>

                            {/* Hexagon Icon Wrapper */}
                            <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                                {/* Glowing Background Blur */}
                                <div className={`absolute inset-0 bg-gradient-to-tr ${item.gradient} blur-[20px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>

                                {/* Hexagon Shape (CSS) */}
                                <div className={`relative z-10 w-12 h-12 flex items-center justify-center text-white`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 rounded-xl transform rotate-45 group-hover:rotate-12 transition-transform duration-500`}></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        {item.icon}
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 text-[14px] leading-relaxed font-inter group-hover:text-gray-300 transition-colors">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default KeyBenefitsSection;
