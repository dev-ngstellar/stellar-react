import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/919944659646"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-all duration-300 flex items-center justify-center group"
            aria-label="Chat with us on WhatsApp"
        >
            <div className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-75"></div>
            <FaWhatsapp className="w-8 h-8 relative z-10" />
            <span className="absolute right-full mr-4 bg-white text-black text-sm px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none font-medium">
                Chat with us
            </span>
        </a>
    );
};

export default FloatingWhatsApp;
