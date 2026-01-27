import React, { useEffect } from 'react';
import BannerCommon from '../components/BannerCommon';
import MobileAppServices from '../components/MobileAppServices';
import TechHubSection from '../components/TechHubSection';
import BenefitsTileSection from '../components/BenefitsTileSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ContactSection from '../components/ContactSection';
import { Lightbulb, Smartphone, Layers, Wrench } from 'lucide-react';

const MobileAppDev = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const hubItems = [
        {
            icon: Lightbulb,
            title: "Mobile Strategy Consulting",
            description: "Our team will assist you in defining a comprehensive mobile strategy that aligns with your business goals and objectives."
        },
        {
            icon: Smartphone,
            title: "Native App Development",
            description: "We excel in developing native mobile applications that leverage the full capabilities of iOS and Android platforms."
        },
        {
            icon: Layers,
            title: "Cross-Platform App Development",
            description: "If you prefer a cross-platform solution, we employ modern frameworks like React Native and Flutter to create high-performance apps."
        },
        {
            icon: Wrench,
            title: "App Maintenance and Support",
            description: "We offer ongoing maintenance and support services to keep your app up-to-date with the latest OS versions and security patches."
        }
    ];

    const benefits = [
        { title: "Enhanced Customer Engagement", description: "Direct channels to your customers through notifications and personalized content." },
        { title: "Increased Brand Visibility", description: "Be present on your customer's most personal device 24/7." },
        { title: "Improved Customer Experience", description: "Smoother, faster, and more intuitive interactions compared to mobile websites." },
        { title: "Higher Revenue Generation", description: "New revenue streams through in-app purchases, subscriptions, and easier checkout." },
        { title: "Data-Driven Insights", description: "Gather and analyze user data to gain insights into customer behavior and preferences. This data helps you make informed decisions." }, // Center tile text from image 3
        { title: "Competitive Advantage", description: "Stand out from competitors who don't offer a dedicated mobile experience." },
        { title: "Enhanced Customer Loyalty", description: "Reward programs and ease of access build lasting relationships." },
        { title: "Operational Efficiency", description: "Streamline business processes and employee workflows with internal apps." },
        { title: "Global Reach", description: "Distribute your app worldwide through App Store and Play Store." }
    ];

    return (
        <div className="bg-[#020813] min-h-screen pt-24 font-sans selection:bg-blue-500/30">
            <BannerCommon
                badgeText="Services"
                title="Mobile App Development"
                description="Create powerful, engaging mobile experiences that connect with your users wherever they are."
                gradient="from-pink-500 via-purple-500 to-indigo-500"
                backgroundImage="/banner-img/mobile-app_banner.jpg"
            />
            <MobileAppServices />
            <BenefitsTileSection
                title="Benefits of Mobile App Development"
                subtitle="for Your Business"
                benefits={benefits}
            />
            
            <TechHubSection
                title="End-to-End"
                highlightText="Mobile Solutions"
                items={hubItems}
            />
            <WhyChooseUsSection
                title="Why Should You Choose Stellar Solutions for Mobile App Development in India"
                items={[
                    { title: "Experienced Development Team", description: "Our team of mobile app developers brings extensive experience and expertise to every project." },
                    { title: "Custom Solutions for Your Business", description: "We provide bespoke mobile app development services designed specifically for your business." },
                    { title: "End-to-End Development Services", description: "Our end-to-end approach ensures a seamless process and a fully integrated solution." },
                    { title: "Focus on User Experience", description: "We prioritize creating intuitive and engaging user interfaces that enhance the user experience." },
                    { title: "Timely Project Delivery", description: "We understand the importance of timely delivery and adhere to strict project timelines." },
                    { title: "Local Expertise and Support", description: "As a India-based company, we offer local insights and personalized support." }
                ]}
            />
        </div>
    );
};

export default MobileAppDev;
