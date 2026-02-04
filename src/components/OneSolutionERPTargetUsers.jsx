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
                    {/* Mobile View: Unified Grid */}
                    <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {targetUsers.slice(0, 5).map((item, index) => (
                            <Card key={index} item={item} delay={index * 0.1} />
                        ))}
                    </div>

                    {/* Desktop View: Split Layout */}
                    <div className="hidden md:block">
                        {/* Row 1 */}
                        <div className="grid grid-cols-3 gap-8 mb-12">
                            {firstThree.map((item, index) => (
                                <Card key={index} item={item} delay={index * 0.1} />
                            ))}
                        </div>

                        {/* Row 2 - offset by half a card width on desktop */}
                        <div className="flex justify-center">
                            <div className="w-2/3">
                                <div className="grid grid-cols-2 gap-8">
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

            {/* Front Face */}
            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                <div className="h-full w-full bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col items-center justify-center relative overflow-hidden group-hover:shadow-2xl transition-shadow duration-300">

                    {/* Subtle corner accents */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-full" />

                    <h3 className="text-xl font-bold text-gray-800 text-center leading-tight break-words w-full relative z-10">
                        {item.title}
                    </h3>
                    <div className="h-1 my-5 w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto rounded-full opacity-70 relative z-10" />
                </div>
            </div>

            {/* Back Face */}
            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <div className="h-full w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl shadow-xl border border-blue-500/30 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">

                    {/* Glowing Mesh Effect */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500 rounded-full blur-[60px] opacity-20" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-[60px] opacity-20" />

                    <h4 className="text-xl font-bold text-sky-300 mb-3 relative z-10 line-clamp-2">
                        {item.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm relative z-10 line-clamp-4">
                        {item.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                </div>
            </div>

        </div>
    </motion.div>
);

// Use the clean version
export default OneSolutionERPTargetUsersClean;