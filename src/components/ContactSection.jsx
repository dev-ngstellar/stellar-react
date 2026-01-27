import React, { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        // Name Validation: Required & No Numbers
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (/\d/.test(formData.name)) {
            newErrors.name = 'Name should not contain numbers';
        }

        // Email Validation: Required & Format
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        // Subject Validation: Required & Min Length 3
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        } else if (formData.subject.length < 3) {
            newErrors.subject = 'Subject must be at least 3 characters';
        }

        // Message Validation: Required & Min Length 10
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Proceed with submission (e.g., API call)
            console.log('Form Submitted:', formData);
            alert('Message Sent Successfully!');
            // Reset form
            setFormData({ name: '', email: '', subject: '', message: '' });
        }
    };

    return (
        <section className="relative py-24 bg-[#0B1121] overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2BFFFF]/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3981d4]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 lg:gap-24">

                {/* Left Side: Text */}
                <div className="w-full md:w-1/2 mb-10 md:mb-0">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Let's <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] to-[#3981d4]">Talk !</span>
                    </h2>
                    <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                        Got a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon as possible.
                    </p>

                    <div className="space-y-6">
                        <a href="tel:+919944659646" className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-[#2BFFFF]/10 flex items-center justify-center group-hover:bg-[#2BFFFF]/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#2BFFFF]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </div>
                            <span className="text-white text-lg group-hover:text-[#2BFFFF] transition-colors">+91 9944659646</span>
                        </a>
                        <a href="mailto:info@stellarsolutions.org" className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-[#2BFFFF]/10 flex items-center justify-center group-hover:bg-[#2BFFFF]/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#2BFFFF]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <span className="text-white text-lg group-hover:text-[#2BFFFF] transition-colors">info@stellarsolutions.org</span>
                        </a>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-1/2">
                    <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-[#2BFFFF]/30 transition-all duration-300">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#2BFFFF]/10 blur-[40px] rounded-full pointer-events-none"></div>

                        <h3 className="text-2xl font-bold text-white mb-8">Send us a message</h3>
                        <div className="space-y-5">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className={`w-full px-6 py-4 rounded-xl bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-500 focus:border-[#2BFFFF] focus:ring-2 focus:ring-[#2BFFFF]/20 outline-none transition-all`}
                                />
                                {errors.name && <p className="text-red-400 text-sm mt-1 ml-1">{errors.name}</p>}
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className={`w-full px-6 py-4 rounded-xl bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-500 focus:border-[#2BFFFF] focus:ring-2 focus:ring-[#2BFFFF]/20 outline-none transition-all`}
                                />
                                {errors.email && <p className="text-red-400 text-sm mt-1 ml-1">{errors.email}</p>}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className={`w-full px-6 py-4 rounded-xl bg-white/5 border ${errors.subject ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-500 focus:border-[#2BFFFF] focus:ring-2 focus:ring-[#2BFFFF]/20 outline-none transition-all`}
                                />
                                {errors.subject && <p className="text-red-400 text-sm mt-1 ml-1">{errors.subject}</p>}
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    rows="4"
                                    className={`w-full px-6 py-4 rounded-xl bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-500 focus:border-[#2BFFFF] focus:ring-2 focus:ring-[#2BFFFF]/20 outline-none transition-all resize-none`}
                                ></textarea>
                                {errors.message && <p className="text-red-400 text-sm mt-1 ml-1">{errors.message}</p>}
                            </div>

                            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2BFFFF] to-[#3981d4] text-[#0B1121] font-bold text-lg hover:shadow-lg hover:shadow-[#2BFFFF]/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;


