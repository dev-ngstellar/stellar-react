import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, role, text, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        whileHover={{ y: -10, boxShadow: "0 20px 40px -5px rgba(43, 255, 255, 0.1)" }}
        className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/10 relative group hover:border-[#2BFFFF]/50 transition-all duration-300"
    >
        {/* Quote Icon */}
        <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-[#2BFFFF] to-[#3981d4] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.925 14.927 15.086C15.534 14.248 16.388 13.567 17.491 13.044L17.491 13.044C17.491 14.331 16.828 14.975 15.501 14.975L15.501 10.975C16.937 10.975 18.069 11.455 18.899 12.413C19.728 13.372 20.143 14.659 20.143 16.275L20.143 21L14.017 21ZM5.01699 21L5.01699 18C5.01699 16.896 5.32099 15.925 5.92799 15.086C6.53499 14.248 7.38799 13.567 8.49199 13.044L8.49099 13.044C8.49099 14.331 7.82899 14.975 6.50199 14.975L6.50199 10.975C7.93799 10.975 9.06999 11.455 9.89899 12.413C10.729 13.372 11.144 14.659 11.144 16.275L11.144 21L5.01699 21Z" />
            </svg>
        </div>

        <div className="pt-8">
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#2BFFFF]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>

            <p className="text-gray-300 italic mb-6 leading-relaxed relative z-10">"{text}"</p>

            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2BFFFF]/20 to-[#3981d4]/20 flex items-center justify-center text-xl font-bold text-[#3981d4]">
                    {name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-white group-hover:text-[#3981d4] transition-colors">{name}</h4>
                    <span className="text-xs font-semibold text-[#2BFFFF] uppercase tracking-wide">{role}</span>
                </div>
            </div>
        </div>

        {/* Decorative Gradient Blob */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#2BFFFF]/10 to-transparent rounded-tl-[100px] pointer-events-none"></div>
    </motion.div>
);

const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-[#0B1121] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2BFFFF]/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3981d4]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div className="space-y-2 text-center pb-20">
                    <div className="flex items-center gap-2 mb-6 justify-center">
                        <span className="text-xl text-[#2BFFFF] animate-pulse">❖</span>
                        <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] via-blue-400 to-[#3981d4]">TESTIMONIALS</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                        <span className="text-white">
                            Voices of {' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] via-blue-400 to-[#3981d4]">Satisfaction</span>
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-0">
                    <TestimonialCard
                        name="John Doe"
                        role="CEO, TechCorp"
                        text="Stellar Solutions transformed our digital presence. Their team is professional, creative, and timely. Truly a Stellar experience!"
                        delay={0}
                    />
                    <TestimonialCard
                        name="Sarah Smith"
                        role="Marketing Director"
                        text="The best SAP consulting we have ever received. Highly recommended for any business transformation looking for real results."
                        delay={0.1}
                    />
                    <TestimonialCard
                        name="Michael Brown"
                        role="Founder, StartUp"
                        text="Their cybersecurity solutions gave us peace of mind. Excellent support and very knowledgeable team that goes above and beyond."
                        delay={0.2}
                    />
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;


