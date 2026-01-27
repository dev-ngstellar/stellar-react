import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ children, className = '', onClick, to, href, ...props }) => {
    // Common styles matching the "Pill" design
    const styles = `group relative px-7 py-3 rounded-full bg-gradient-to-r from-[#2BFFFF] to-teal-500 !text-black shadow-lg hover:cursor-pointer shadow-cyan-500/20 transition-all duration-300 text-xs font-bold tracking-widest uppercase hover:shadow-cyan-500/40 overflow-hidden inline-flex items-center justify-center !no-underline ${className}`;

    // Inner content with shine effect
    const content = (
        <>
            <span className="relative z-10 flex items-center gap-2">{children}</span>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] -translate-x-[150%] transition-transform duration-700 ease-in-out group-hover:translate-x-[150%]" />
        </>
    );

    const animationProps = {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 }
    };

    // Render as React Router Link
    if (to) {
        // Create motion component for Link
        const MotionLink = motion(Link);
        return (
            <MotionLink to={to} className={styles} {...animationProps} {...props}>
                {content}
            </MotionLink>
        );
    }

    // Render as external anchor
    if (href) {
        return (
            <motion.a href={href} className={styles} {...animationProps} {...props}>
                {content}
            </motion.a>
        );
    }

    // Render as standard button
    return (
        <motion.button className={styles} onClick={onClick} {...animationProps} {...props}>
            {content}
        </motion.button>
    );
};

export default Button;
