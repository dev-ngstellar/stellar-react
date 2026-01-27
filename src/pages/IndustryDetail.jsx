import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BannerCommon from '../components/BannerCommon';
import { industryList } from '../data/IndustryData';
import { ArrowLeft } from 'lucide-react';

const IndustryDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Helper to slugify names for comparison
    const slugify = (text) => {
        return text
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    };

    const industry = industryList.find(item => slugify(item.name) === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!industry) {
        return (
            <div className="min-h-screen bg-[#020813] flex flex-col items-center justify-center text-white">
                <h2 className="text-3xl font-bold mb-4">Industry Not Found</h2>
                <button
                    onClick={() => navigate('/industries')}
                    className="text-[#2BFFFF] hover:underline flex items-center gap-2"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Industries
                </button>
            </div>
        );
    }

    return (
        <div className="bg-[#020813] min-h-screen pt-24 font-sans antialiased selection:bg-[#2BFFFF]/30 overflow-x-hidden">
            <BannerCommon
                badgeText="Industry Focus"
                title={industry.name}
                description={`Tailored digital solutions for the ${industry.name} sector.`}
                backgroundImage={industry.image}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20">
                <button
                    onClick={() => navigate('/industries')}
                    className="mb-8 text-gray-400 hover:text-[#2BFFFF] transition-colors flex items-center gap-2 text-sm uppercase tracking-wider font-medium"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Industries
                </button>

                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Content Side */}
                    <div className="w-full lg:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-[#2BFFFF]/10 rounded-xl border border-[#2BFFFF]/20">
                                    {/* Clone element to force color if needed, though usually className handles it */}
                                    {React.cloneElement(industry.icon, { className: "w-8 h-8 text-[#2BFFFF]" })}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">Overview</h2>
                            </div>

                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-gray-300 leading-relaxed text-lg text-justify">
                                    {industry.description}
                                </p>
                            </div>

                            <div className="mt-12 pt-12 border-t border-white/10">
                                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us for {industry.name}?</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Industry-specific domain expertise",
                                        "Scalable and secure architecture",
                                        "Compliance with industry standards",
                                        "Seamless integration with existing systems",
                                        "Ongoing support and maintenance"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-400">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2BFFFF] flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar / CTA Side */}
                    <div className="w-full lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sticky top-32"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">Ready to Transform?</h3>
                            <p className="text-gray-400 mb-8">
                                Let's discuss how our {industry.name} solutions can drive growth for your business.
                            </p>
                            <button
                                onClick={() => navigate('/contact')}
                                className="w-full py-4 bg-gradient-to-r from-[#2BFFFF] to-[#00a8ff] text-[#020813] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(43,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Get a Quote
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustryDetail;
