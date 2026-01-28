import React, { useEffect } from 'react';
import BannerCommon from '../components/BannerCommon';
import EcommerceServices from '../components/EcommerceServices';
import TechHubSection from '../components/TechHubSection';
import BenefitsTileSection from '../components/BenefitsTileSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ContactSection from '../components/ContactSection';
import { ShoppingBag, Globe, Palette, AppWindow } from 'lucide-react';

const Ecommerce = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const hubItems = [
        {
            icon: Globe,
            title: "WordPress Website Solutions",
            description: "Unlock the power of dynamic and versatile web presence with our WordPress website solutions in Coimbatore."
        },
        {
            icon: ShoppingBag,
            title: "Shopify Development",
            description: "Our dedicated team crafts scalable and visually compelling online stores that align with your brand vision."
        },
        {
            icon: Palette,
            title: "UI/UX Development",
            description: "Our skilled designers focus on creating visually stunning interfaces that captivate and engage users."
        },
        {
            icon: AppWindow,
            title: "Woocommerce Development",
            description: "Our expert team harnesses the power of this versatile WordPress plugin to build Ecommerce solutions tailored to you."
        }
    ];

    const benefits = [
        { title: "Increased Global Reach", description: "Break geographical barriers and sell your products to customers worldwide, 24/7." },
        { title: "24/7 Accessibility", description: "Your store never closes. Allow customers to browse and purchase at their convenience, anytime." },
        { title: "Cost-Efficiency", description: "Reduce overhead costs associated with physical stores while maximizing your market reach." },
        { title: "Enhanced Customer Insights", description: "Gain valuable data on customer behavior and preferences to optimize your strategy." },
        { title: "Scalability and Flexibility", description: "Easily scale your operations and product offerings as your business grows without physical limits." },
        { title: "Improved Customer Engagement", description: "Engage with customers through personalized content, recommendations, and direct communication channels." },
        { title: "Efficient Inventory Management", description: "Automate stock tracking and management to reduce errors and ensure product availability." },
        { title: "Quick and Secure Transactions", description: "Provide secure payment gateways that ensure fast, encrypted, and trustworthy financial transactions." },
        { title: "Marketing and Promotion Opportunities", description: "Leverage digital tools to run targeted campaigns, discounts, and loyalty programs effectively." }
    ];

    return (
        <div className="bg-[#020813] min-h-screen pt-24 font-sans selection:bg-blue-500/30">
            <BannerCommon
                badgeText="Services"
                title="Take Your Brand to the Next Level with Our Leading <br /> E-Commerce Website Development Services"
                description="Take Your Brand to the Next Level with Our Leading E-Commerce Website Development Services
High-performance e-commerce websites designed to sell, scale, and succeed."
                gradient="from-blue-600 via-indigo-600 to-purple-600"
                backgroundImage="/banner-img/e-com_banner.jpg"
            />
            <EcommerceServices />
            <BenefitsTileSection
                title="Benefits of Ecommerce Platforms"
                benefits={benefits}
            />
            <TechHubSection
                title="Specialized"
                highlightText="Platforms & Solutions"
                items={hubItems}
            />
            <WhyChooseUsSection
                title="Why Choose Stellar ?"
                items={[
                    { title: "E-commerce Analytics and Reporting", description: "We design responsive E-commerce platforms for a seamless user experience." },
                    { title: "Scalability and Flexibility", description: "Scalable E-commerce platforms that grow with your business." },
                    { title: "Customized Solutions", description: "Custom E-commerce platforms tailored to your business needs." },
                    { title: "Cutting-Edge Technology", description: "Stay ahead with our cutting-edge E-commerce solutions." },
                    { title: "Expertise and Experience", description: "Leverage our expertise for tailored E-commerce solutions." },
                    { title: "Local Understanding", description: "We tailor E-commerce solutions to fit local market needs." }
                ]}
            />
        </div>
    );
};

export default Ecommerce;
