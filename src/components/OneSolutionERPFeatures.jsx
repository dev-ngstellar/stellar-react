import React from 'react';
import { motion } from 'framer-motion';
// Import appropriate icons for ERP/Manufacturing features
import {
    FaIndustry,        // For Manufacturing-Focused ERP
    FaClock,          // For Real-Time Production Tracking
    FaCalculator,     // For Job-wise costing
    FaCogs,           // For Customizable workflows
    FaHeadset         // For After-sales support
} from 'react-icons/fa';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const OneSolutionERPFeatures = () => {
    return (
        <section className="relative text-white py-24 px-6 font-sans overflow-hidden bg-[#020813]">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-[#2BFFFF]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-1000"></div>
                <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >

                    {/* Left Column */}
                    <div className="flex flex-col gap-16">
                        {/* Header Section */}
                        <motion.div variants={itemVariants}>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] to-blue-500 animate-gradient-x">
                                    Features & Benefits
                                </span>
                            </h2>
                        </motion.div>

                        {/* Manufacturing-Focused ERP (Orange) */}
                        <FeatureCard
                            icon={<FaIndustry className="text-white text-2xl" />}
                            iconBg="from-orange-400 to-red-500"
                            shadowColor="shadow-orange-500/20"
                            title="Manufacturing-focused ERP"
                            description="Purpose-built for manufacturing businesses, not a generic system. Tailored specifically for engineering and fabrication industries."
                            delay={0.2}
                        />

                        {/* After-Sales Support (Cyan) - Moved to left side */}
                        <FeatureCard
                            icon={<FaHeadset className="text-white text-2xl" />}
                            iconBg="from-cyan-400 to-teal-600"
                            shadowColor="shadow-cyan-500/20"
                            title="Strong after-sales support & implementation guidance"
                            description="Expert guidance and support throughout your journey."
                            delay={0.4}
                        />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-8 pt-0">
                        {/* Real-Time Production Tracking (Blue) */}
                        <FeatureCard
                            icon={<FaClock className="text-white text-2xl" />}
                            iconBg="from-blue-400 to-indigo-600"
                            shadowColor="shadow-blue-500/20"
                            title="Real-time production tracking"
                            description="Monitor production and inventory in real-time with complete visibility across all operations and material movements."
                            delay={0.6}
                        />

                        {/* Job-wise Costing (Green) */}
                        <FeatureCard
                            icon={<FaCalculator className="text-white text-2xl" />}
                            iconBg="from-green-400 to-emerald-600"
                            shadowColor="shadow-green-500/20"
                            title="Job-wise costing analysis"
                            description="Detailed cost tracking and profitability analysis at the job level for accurate financial insights and decision making."
                            delay={0.8}
                        />

                        {/* Customizable Workflows (Purple) */}
                        <FeatureCard
                            icon={<FaCogs className="text-white text-2xl" />}
                            iconBg="from-purple-500 to-pink-500"
                            shadowColor="shadow-purple-500/20"
                            title="Customizable workflows and reports"
                            description="Adapt the system to your unique business processes with flexible workflow customization and report generation."
                            delay={1.0}
                        />
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon, iconBg, shadowColor, title, description }) => {
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative p-8 rounded-3xl bg-[#0a1120] border border-white/5 hover:border-white/10 transition-colors duration-300"
        >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icon */}
            <div className="flex items-start gap-6 relative z-10">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${iconBg} flex items-center justify-center shadow-lg ${shadowColor} group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 transform`}>
                    {icon}
                </div>

                <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#2BFFFF] transition-colors">{title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default OneSolutionERPFeatures;