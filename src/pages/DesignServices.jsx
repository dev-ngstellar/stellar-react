import React, { useEffect } from 'react';
import BannerCommon from '../components/BannerCommon';
import DesignServicesComponent from '../components/DesignServices';
import TechHubSection from '../components/TechHubSection';
import BenefitsTileSection from '../components/BenefitsTileSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import { Palette, Eye, Layout, Monitor } from 'lucide-react';

const DesignServices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const processItems = [
        {
            icon: Eye,
            title: "Discovery & Research",
            description: "We start by understanding your brand, audience, and goals to create a design strategy that aligns with your vision."
        },
        {
            icon: Layout,
            title: "Concept & Wireframing",
            description: "Our designers sketch out ideas and create wireframes to visualize the structure and layout of your project."
        },
        {
            icon: Palette,
            title: "Visual Design",
            description: "We bring concepts to life with stunning visuals, choosing the right colors, typography, and imagery for your brand."
        },
        {
            icon: Monitor,
            title: "Prototyping & Testing",
            description: "We create interactive prototypes to test usability and ensure the final design meets all user requirements."
        }
    ];

    const benefits = [
        { title: "Stronger Brand Identity", description: "stand out from the competition with a unique and memorable visual identity." },
        { title: "Improved User Experience", description: "Intuitive designs that make it easy for customers to interact with your products." },
        { title: "Higher Conversion Rates", description: "Engaging visuals and clear layouts that guide users towards taking action." },
        { title: "Increased Engagement", description: "Captivating content that keeps your audience interested and connected." },
        { title: "Professional Appeal", description: "High-quality designs that build trust and credibility with your potential clients." },
        { title: "Consistency Across Channels", description: "Maintain a cohesive look and feel across all your marketing platforms." },
        { title: "Effective Communication", description: "Visuals that convey your message quickly and clearly to your target audience." },
        { title: "Scalable Design Systems", description: "Future-proof designs that can grow and evolve with your business needs." },
        { title: "Emotional Connection", description: "Designs that evoke the right emotions and connect with your audience on a deeper level." }
    ];

    return (
        <div className="bg-[#020813] min-h-screen pt-24 font-sans selection:bg-purple-500/30">
            <BannerCommon
                badgeText="Services"
                title="Creative Design Services That <br /> Elevate Your Brand"
                description="Creative Design Services That Elevate Your Brand Impactful designs that strengthen brand identity and captivate audiences."
                gradient="from-purple-500 via-pink-500 to-red-500"
                backgroundImage="/banner-img/design_banner.jpg"
            />
            <DesignServicesComponent />
            <BenefitsTileSection
                title="Benefits of Professional Design"
                subtitle="for Your Brand"
                benefits={benefits}
            />
            <TechHubSection
                title="Our Creative"
                highlightText="Design Process"
                items={processItems}
            />
            <WhyChooseUsSection
                title="Why Choose Us for Design Services"
                items={[
                    { title: "Creative Experts", description: "Our team of talented designers brings years of experience and creativity to every project." },
                    { title: "User-Centric Approach", description: "We prioritize the needs and preferences of your users to create effective designs." },
                    { title: "Tailored Solutions", description: "We create custom design solutions that reflect your unique brand identity and goals." },
                    { title: "Attention to Detail", description: "We obsess over every pixel to ensure your designs are flawless and professional." },
                    { title: "Timely Delivery", description: "We value your time and work efficiently to deliver high-quality designs on schedule." },
                    { title: "Collaborative Process", description: "We work closely with you throughout the design process to ensure your vision is realized." }
                ]}
            />
        </div>
    );
};

export default DesignServices;
