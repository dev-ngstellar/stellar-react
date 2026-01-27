import React from 'react';
import { FaTasks, FaSave, FaChartLine, FaMicrophone } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

const FieldEazeFeatures = () => {
    return (
        <section className="relative text-white py-24 px-6 font-sans overflow-hidden">
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
                            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                                Features of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] to-blue-500 animate-gradient-x">
                                    FieldEaze
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-loose border-l-4 border-[#2BFFFF]/30 pl-6 backdrop-blur-sm bg-white/5 py-4 rounded-r-xl">
                                This encompassing solution facilitates the seamless coordination, monitoring, and tracking of on-field personnel. FieldEaze delivers a multitude of features that optimize workflows and boost operational efficiency.
                            </p>
                        </motion.div>

                        {/* Mobile Workforce (Orange) */}
                        <FeatureCard
                            icon={<FaMicrophone className="text-white text-2xl" />}
                            iconBg="from-orange-400 to-red-500"
                            shadowColor="shadow-orange-500/20"
                            title="Mobile Workforce Communication"
                            description="Facilitates smooth communication channels between field agents and managers. Real-time messaging, in-app calling, and document sharing features enhance team coordination."
                            delay={0.2}
                        />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-8 pt-0">
                        {/* Task Assignment (Pink) */}
                        <FeatureCard
                            icon={<FaTasks className="text-white text-2xl" />}
                            iconBg="from-pink-500 to-rose-500"
                            shadowColor="shadow-pink-500/20"
                            title="Task Assignment and Scheduling"
                            description="Empower streamlined task allocation, allowing managers to assign work orders with precision. Automated scheduling enhances route optimization and reduces travel time."
                            delay={0.4}
                        />

                        {/* Data Collection (Blue) */}
                        <FeatureCard
                            icon={<FaSave className="text-white text-2xl" />}
                            iconBg="from-blue-400 to-indigo-600"
                            shadowColor="shadow-blue-500/20"
                            title="Data Collection and Reporting"
                            description="Efficiently gather vital data directly from the field. Information is promptly aggregated into live dashboards, delivering valuable insights for informed decision-making."
                            delay={0.6}
                        />

                        {/* Performance Monitoring (Green) */}
                        <FeatureCard
                            icon={<FaChartLine className="text-white text-2xl" />}
                            iconBg="from-green-400 to-emerald-600"
                            shadowColor="shadow-green-500/20"
                            title="Performance Monitoring and Analytics"
                            description="Track essential metrics like task completion rates and customer satisfaction. Advanced analytics deliver insights to identify improvement areas and enhance efficiency."
                            delay={0.8}
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

export default FieldEazeFeatures;
