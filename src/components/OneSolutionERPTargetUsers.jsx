import React from "react";
import { motion } from "framer-motion";

const OneSolutionERPTargetUsers = ({ targetUsers }) => {
    if (!targetUsers || targetUsers.length === 0) return null;

    const firstThree = targetUsers.slice(0, 3);
    const lastTwo = targetUsers.slice(3, 5);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-teal-100/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#020510]">
                        Who Should Use
                    </h2>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {/* Row 1: 3 cards with equal spacing */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
                            {firstThree.map((item, index) => (
                                <Card key={index} item={item} delay={index * 0.1} />
                            ))}
                        </div>
                    </div>

                    {/* Row 2: 2 cards positioned between the gaps */}
                    <div className="flex justify-center mt-8 md:mt-12">
                        <div className="relative w-full">
                            {/* Position cards 4 and 5 in the gaps between cards 1-2 and 2-3 */}
                            <div className="grid grid-cols-2 gap-6 md:gap-8" 
                                 style={{ 
                                     width: 'calc(66.666% - 1rem)', // 2/3 of container minus gap
                                     marginLeft: 'calc(16.666% + 0.5rem)' // Offset to align in gaps
                                 }}>
                                {lastTwo.map((item, index) => (
                                    <Card
                                        key={index + 3}
                                        item={item}
                                        delay={(index + 3) * 0.1}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* Alternative cleaner solution using flexbox */
const OneSolutionERPTargetUsersClean = ({ targetUsers }) => {
    if (!targetUsers || targetUsers.length === 0) return null;

    const firstThree = targetUsers.slice(0, 3);
    const lastTwo = targetUsers.slice(3, 5);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-teal-100/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#020510]">
                        Who Should Use
                    </h2>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {/* Row 1 */}
                    <div className="flex justify-center gap-6 md:gap-8 mb-8 md:mb-12">
                        {firstThree.map((item, index) => (
                            <div key={index} className="w-full md:w-1/3">
                                <Card item={item} delay={index * 0.1} />
                            </div>
                        ))}
                    </div>

                    {/* Row 2 - offset by half a card width */}
                    <div className="flex justify-center">
                        <div className="relative" style={{ width: '66.666%' }}>
                            <div className="flex gap-6 md:gap-8">
                                {lastTwo.map((item, index) => (
                                    <div key={index + 3} className="w-1/2">
                                        <Card
                                            item={item}
                                            delay={(index + 3) * 0.1}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* Card Component (unchanged) */
const Card = ({ item, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="group h-80 perspective-[1000px] cursor-pointer"
    >
        <div className="relative w-full h-full duration-700 transition-all [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
            {/* Front */}
            <div className="absolute inset-0 [backface-visibility:hidden]">
                <div className="h-full w-full bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-xl border border-slate-100 p-8 flex items-center justify-center text-center">
                    <h3 className="text-xl font-bold text-gray-800 line-clamp-3">
                        {item.title}
                    </h3>
                </div>
            </div>

            {/* Back */}
            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <div className="h-full w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl shadow-xl border border-blue-500/30 p-8 flex flex-col items-center justify-center text-center">
                    <h4 className="text-xl font-bold text-sky-300 mb-3 line-clamp-2">
                        {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm line-clamp-4">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    </motion.div>
);

// Use the clean version
export default OneSolutionERPTargetUsersClean;