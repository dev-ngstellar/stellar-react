import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import BannerCommon from '../components/BannerCommon';
import FieldEazeFeatures from '../components/FieldEazeFeatures';
import FieldEazeAdvantages from '../components/FieldEazeAdvantages';
import FieldEazeShowcase from '../components/FieldEazeShowcase';
import StarBorder from '../components/StarBorder';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const FieldEaze = () => {
    const showcaseRef = React.useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToShowcase = () => {
        showcaseRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-[#020813] min-h-screen pt-24 font-sans selection:bg-[#2BFFFF]/30">
            <BannerCommon
                badgeText="Products"
                title="FieldEaze"
                description="Streamline your field operations with our comprehensive management solution."
                backgroundVideo="/banner-img/products-fieldeaze-hero.mp4"
            >
                 <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hover:cursor-pointer px-8 py-3 rounded-full bg-gradient-to-r from-[#2BFFFF] to-teal-500 text-black shadow-lg  transition-all duration-300 text-xs font-bold tracking-widest uppercase"
                >
                    Get Started
                </motion.button>
                 <StarBorder
              as={Link}
              to="/contact"
              className="text-[#2BFFFF] font-bold tracking-widest uppercase text-sm"
              color="#2BFFFF"
              speed="3s"
            >
              Get in Touch
            </StarBorder>
            </BannerCommon>
            <div ref={showcaseRef}>
                <FieldEazeShowcase />
            </div>
            <FieldEazeFeatures />
            <FieldEazeAdvantages />
        </div>
    );
};

export default FieldEaze;
