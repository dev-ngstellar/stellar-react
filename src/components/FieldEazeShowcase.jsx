import React from 'react';
import { motion } from 'framer-motion';
import phoneImg from '../assets/product-fieldeaze-phone.png';
import Button from './Button';

const FieldEazeShowcase = () => {
    return (
        <section className="relative py-24 px-6 bg-[#020813] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    {/* Block 1 */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Experience Operational <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] to-blue-500">
                                Excellence with FieldEaze
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            FieldEaze is here to simplify, secure, and elevate your field operations. From everyday task management to long-term strategic planning, our platform is built to support your workforce's success. Discover the FieldEaze difference and start your journey toward operational efficiency today.
                        </p>
                    </div>

                    {/* Block 2 */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Why Trust{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] to-blue-500">
                                FieldEaze ?
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            At Stellar Solutions, we know that reliability is key when it comes to your field data. That's why we've built a platform that's not only secure but also transparent, user-friendly, and focused on your team's productivity. Here's why you can trust FieldEaze with your business journey.
                        </p>

                         
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, x: 30, rotate: 0 }}
                    whileInView={{ opacity: 1, x: 0, rotate: -0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative">
                        {/* Glow behind phone */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#2BFFFF]/20 to-purple-600/20 blur-2xl transform scale-90" />

                        <motion.img
                            src={phoneImg}
                            alt="FieldEaze Mobile App Interface"
                            className="relative w-full max-w-md lg:max-w-lg drop-shadow-2xl z-10"
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Optional Floating UI Elements (if desired later, for now just the image) */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FieldEazeShowcase;
