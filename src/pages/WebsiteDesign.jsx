import React, { useEffect } from 'react';
import BannerCommon from '../components/BannerCommon';
import WebsiteServices from '../components/WebsiteServices';
import TechHubSection from '../components/TechHubSection';
import BenefitsTileSection from '../components/BenefitsTileSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ContactSection from '../components/ContactSection';
import { Smartphone, Code, Zap, Megaphone } from 'lucide-react';

const WebsiteDesign = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const hubItems = [
        {
            icon: Smartphone,
            title: "Mobile-First Design",
            description: "Prioritize the mobile user experience with our mobile-first design approach. We ensure your website is optimized for speed and usability."
        },
        {
            icon: Code,
            title: "Custom Web Development",
            description: "Create tailored web solutions that align with your business goals. Our custom development services offer flexibility and innovation."
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description: "Boost your website's speed and efficiency with our performance optimization services. using advanced techniques to enhance loading times."
        },
        {
            icon: Megaphone,
            title: "Integrated Marketing Solutions",
            description: "Connect your website with comprehensive marketing strategies. We integrate SEO, social media, and content marketing."
        }
    ];

    const benefitsFixed = [
        { title: "Enhanced User Experience", description: "Intuitive navigation and layout ensure visitors find what they need quickly." },
        { title: "Increased Conversion Rates", description: "Optimized designs guide users effective toward purchase and contact points." },
        { title: "Improved Mobile Responsiveness", description: "Flawless presentation across all devices ensuring no customer is left behind." },
        { title: "Strengthened Brand Identity", description: "A consistent, professional look that builds trust and recognition in your market." },
        { title: "High Performance", description: "Keep your audience engaged with quick-loading pages. Optimized development practices reduce load times, improving user satisfaction and search engine rankings." },
        { title: "SEO Optimization", description: "Clean code and structure that search engines love, driving more organic traffic." },
        { title: "Easy Content Management", description: "Effortlessly update your site content without needing a developer for every change." },
        { title: "Greater Security", description: "Advanced security protocols to protect your business and user data." },
        { title: "Scalability and Flexibility", description: "Future-proof solutions that grow and adapt alongside your business." }
    ];

    return (
        <div className="bg-[#020813] min-h-screen pt-24 font-sans selection:bg-blue-500/30">
            <BannerCommon
                badgeText="Services"
                title="Take Your Online Presence to New Heights with the <br /> Magic of Website Development"
                description="Fast, responsive websites that engage users and grow your brand online."
                gradient="from-cyan-500 via-blue-500 to-indigo-500"
                backgroundImage="/banner-img/website_banner.jpg"
            />
            <WebsiteServices />
            <BenefitsTileSection
                title="Benefits of Website Design & Development"
                benefits={benefitsFixed}
            />
            <TechHubSection
                title="Our Development"
                highlightText="Approach"
                items={hubItems}
            />
            <WhyChooseUsSection
                title={<span>Why Choose Stellar Solutions for <br /> Website Design & Development</span>}
                items={[
                    { title: "Expert Team of Designers and Developers", description: "Our talented team has extensive experience in crafting visually stunning and highly functional websites." },
                    { title: "Tailored Design Solutions", description: "Our personalized approach ensures your website stands out and resonates with your target audience." },
                    { title: "Affordable Pricing", description: "We provide cost-effective solutions that deliver excellent value without compromising on quality." },
                    { title: "Timely Project Completion", description: "We prioritize efficiency and understand the importance of meeting deadlines." },
                    { title: "Ongoing Support and Maintenance", description: "Benefit from our reliable post-launch support and maintenance services." },
                    { title: "Local Expertise in India", description: "Our regional insights help us craft websites that drive engagement and growth." }
                ]}
            />
        </div>
    );
};

export default WebsiteDesign;
