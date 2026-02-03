import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const advantages = [
    {
        title: "Increased Operational Efficiency",
        content: "FieldEaze optimizes operations through task automation, route optimization, and seamless data collection. This innovative approach eliminates manual tasks, minimizes paperwork, and reduces administrative overhead, ultimately enhancing operational efficiency for businesses."
    },
    {
        title: "Enhanced Productivity",
        content: "With FieldEaze, field agents can streamline their operations and prioritize essential tasks over administrative hassles. The incorporation of automated scheduling, route optimization, and instant updates empowers agents to complete a higher volume of tasks in less time, ultimately enhancing their productivity."
    },
    {
        title: "Improved Customer Service",
        content: "FieldEaze Boosts Efficiency with Quick Response Times, Precise ETAs, and Enhanced Field Agent Coordination. Elevate Customer Satisfaction by Swiftly Attending to Customer Requirements, Offering Timely Updates, and Delivering Effective Solutions."
    },
    {
        title: "Effective Resource Allocation",
        content: "FieldEaze offers valuable insights into workforce performance, enabling managers to enhance resource allocation by leveraging skill sets, availability, and workload data. This results in the optimal assignment of personnel to tasks, leading to a substantial boost in operational efficiency."
    },
    {
        title: "Cost Reduction",
        content: "FieldEaze offers a comprehensive solution to minimize travel time, optimize routes, and eliminate manual paperwork, leading to significant reductions in operational costs. Moreover, our platform enhances productivity and resource allocation, ultimately maximizing the utilization of field resources and delivering substantial cost savings for your organization."
    },
    {
        title: "Compliance and Safety",
        content: "FieldEaze platforms frequently incorporate safety features like panic buttons and check-in systems to guarantee the welfare of field agents. Moreover, these platforms offer compliance tools for monitoring adherence to regulations and standard operating procedures, effectively mitigating legal and regulatory risks."
    }
];

const FieldEazeAdvantages = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-20 bg-[#0B1121] text-white overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2BFFFF]/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6 ">
                        Advantages of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] to-blue-500 animate-gradient-x">
                            FieldEaze
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Discover how FieldEaze transforms your field operations and drives business growth.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {advantages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-2xl overflow-hidden transition-all duration-300 border ${index === openIndex
                                ? 'bg-white/10 border-[#2BFFFF]/30 shadow-lg shadow-[#2BFFFF]/10 scale-[1.02]'
                                : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                                className="w-full px-8 py-6 flex items-center justify-between group text-left"
                            >
                                <span className={`text-xl font-bold transition-all duration-300 ${index === openIndex ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#2BFFFF] to-blue-400' : 'text-gray-200 group-hover:text-white'
                                    }`}>
                                    {item.title}
                                </span>
                                <div className={`relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${index === openIndex
                                    ? 'bg-[#2BFFFF]/20 text-[#2BFFFF]'
                                    : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white'
                                    }`}>
                                    {index === openIndex ? (
                                        <Minus className="w-5 h-5" />
                                    ) : (
                                        <Plus className="w-5 h-5" />
                                    )}
                                </div>
                            </button>
                            <AnimatePresence>
                                {index === openIndex && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-8 pt-0 mt-2 text-lg">
                                            <div className="mt-4 p-6 rounded-xl bg-black/40 border border-white/5 text-gray-300 shadow-inner relative overflow-hidden group/desc">
                                                {/* Glossy sheen effect */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/desc:opacity-100 transition-opacity duration-500" />
                                                <div className="relative z-10 leading-relaxed">
                                                    {item.content}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FieldEazeAdvantages;
