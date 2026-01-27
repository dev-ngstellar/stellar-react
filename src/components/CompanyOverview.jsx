import React from 'react';
import { motion } from 'framer-motion';

const CompanyOverview = () => {
    return (
        <section className="relative py-24 px-4 bg-[#0a0a0a overflow-hidden">
            {/* Adaptable Color Gradient Background */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-900/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">

                {/* Left Column: Headline */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-start"
                >
                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
                        <span className="text-xl text-[#2BFFFF] animate-pulse">❖</span>
                        <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] via-blue-400 to-[#3981d4]">Company Overview</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-white tracking-tight">
                        Stellar is a leading software development company, founded in 2018, delivering innovative, high-quality solutions with a strong focus on customer satisfaction.
                    </h2>
                </motion.div>

                {/* Right Column: Description */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col justify-center gap-8 text-gray-400 text-lg leading-relaxed font-light"
                >
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                        At Stellar, we understand that every business has unique challenges, so our skilled engineers, developers, and designers work closely with clients to analyze their needs and deliver tailored software solutions. Whether developing new applications, upgrading existing systems, or providing ongoing support, we focus on driving business growth through exceptional results, with customer satisfaction and close collaboration at the core of everything we do.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CompanyOverview;
