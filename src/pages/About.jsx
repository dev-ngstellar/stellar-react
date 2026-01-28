import React from 'react';
import { motion } from 'framer-motion';
import BannerCommon from '../components/BannerCommon';
import CompanyOverview from '../components/CompanyOverview';
import MissionVisionSection from '../components/MissionVisionSection';
import KeyBenefitsSection from '../components/KeyBenefitsSection';
import StarBorder from '../components/StarBorder';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 font-sans selection:bg-[#2BFFFF]/30">
            <BannerCommon
                badgeText="About Us"
                title="Powering Business Growth <br/> Through Technology"
                description="From strategy to execution, our technology solutions help businesses grow faster, smarter, and stronger"
                backgroundImage="/banner-img/1.jpg"
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-[#2BFFFF] to-teal-500 text-black shadow-lg  transition-all duration-300 text-xs font-bold tracking-widest uppercase"
                >
                    Our Services
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
            <CompanyOverview />
            <MissionVisionSection />
            <KeyBenefitsSection />
        </div>
    );
};

export default About;
