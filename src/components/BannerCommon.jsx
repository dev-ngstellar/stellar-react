import React from 'react';
import { motion } from 'framer-motion';

const BannerCommon = ({
    badgeText = "About Us",
    title = "Powering Business Growth Through Technology",
    description = "Streamline your business's financial management with our intuitive, scalable platform.",
    gradientFrom = "from-[#2BFFFF]/30",
    gradientTo = "to-teal-500/30",
    backgroundImage,
    backgroundVideo,
    className = "",
    children
}) => {
    return (
        <div className={`relative flex flex-col items-center justify-center py-24 px-4 overflow-hidden bg-[#030014] ${className}`}>
            {/* Optional Background Image or Video */}
            {backgroundVideo ? (
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                    >
                        <source src={backgroundVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                </div>
            ) : backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={backgroundImage}   
                        alt="Banner Background"
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            )}

            {/* Background Effects */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 2 }}
                className={`absolute top-0 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr ${gradientFrom} to-transparent blur-[120px] rounded-full -z-10 animate-pulse duration-[7000ms] pointer-events-none`}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 2, delay: 0.5 }}
                className={`absolute bottom-0 right-1/4 translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-bl ${gradientTo} to-transparent blur-[120px] rounded-full -z-10 animate-pulse duration-[8000ms] pointer-events-none`}
            />

            {/* Subtle Grid Overlay (Optional - adds texture) */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

            {/* Badge Line Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-center gap-6 mb-10 w-full max-w-2xl justify-center z-10"
            >
                {/* Left Line */}
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                {/* Left Star */}
                <svg className="w-5 h-5 text-[#2BFFFF] drop-shadow-[0_0_8px_rgba(43,255,255,0.5)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>

                {/* Badge */}
                <div className="px-8 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-sm font-medium tracking-wide text-white shadow-[0_0_20px_-5px_rgba(43,255,255,0.4)] hover:shadow-[0_0_25px_-5px_rgba(43,255,255,0.6)] hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-default">
                    {badgeText}
                </div>

                {/* Right Star */}
                <svg className="w-5 h-5 text-[#2BFFFF] drop-shadow-[0_0_8px_rgba(43,255,255,0.5)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>

                {/* Right Line */}
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </motion.div>

            {/* Headline */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-8 pb-4 tracking-tighter leading-tight select-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 drop-shadow-2xl"
                dangerouslySetInnerHTML={{ __html: title }}
            />

            {/* Subtext */}
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="relative z-10 text-gray-300/80 text-center max-w-2xl text-lg md:text-xl mb-14 leading-relaxed font-light tracking-wide"
            >
                {description}
            </motion.p>

            {/* Buttons / Children */}
            {children && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="relative z-10 flex flex-wrap justify-center gap-6"
                >
                    {children}
                </motion.div>
            )}
        </div>
    );
};

export default BannerCommon;
