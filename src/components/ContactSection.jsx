import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Bubbles } from 'lucide-react';
import Button from './Button';

const ContactSection = () => {
    return (
        <section className="relative py-24 bg-[#0B1121] overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2BFFFF]/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3981d4]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 lg:gap-24">

                {/* Left Side: Text */}
                <div className="w-full md:w-1/2 mb-10 md:mb-0">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-inter">
                        Let's <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] to-[#3981d4]">Talk !</span>
                    </h2>
                    <p className="text-lg text-gray-400 mb-10 leading-relaxed font-inter">
                        Got a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon as possible.
                    </p>

                    <div className="space-y-6">
                        <a href="tel:+918870659648" className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-[#2BFFFF]/10 flex items-center justify-center group-hover:bg-[#2BFFFF]/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#2BFFFF]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </div>
                            <span className="text-white text-lg group-hover:text-[#2BFFFF] transition-colors font-jakarta">+91 8870659648</span>
                        </a>
                        <a href="mailto:info@stellarsolutions.org" className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-[#2BFFFF]/10 flex items-center justify-center group-hover:bg-[#2BFFFF]/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#2BFFFF]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <span className="text-white text-lg group-hover:text-[#2BFFFF] transition-colors font-jakarta">info@stellarsolutions.org</span>
                        </a>
                    </div>
                </div>

                {/* Right Side: CTA Card */}
                <div className="w-full md:w-1/2">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-[#2BFFFF]/30 transition-all duration-300 flex flex-col items-center justify-center text-center">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#2BFFFF]/10 blur-[40px] rounded-full pointer-events-none"></div>
                        <h3 className="text-3xl font-bold text-white mb-6 font-inter">Ready to start your project?</h3>
                        <p className="text-gray-400 mb-10 text-lg font-inter">
                            Let's build something amazing together. Our team is ready to bring your ideas to life.
                        </p>
                        <NavLink to="/contact"> 
                      <Button>Contact Us
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;


