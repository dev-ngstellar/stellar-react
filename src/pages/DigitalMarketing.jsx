import React, { useEffect } from 'react';
import BannerCommon from '../components/BannerCommon';
import DigitalMarketingServices from '../components/DigitalMarketingServices';
import TechHubSection from '../components/TechHubSection';
import BenefitsTileSection from '../components/BenefitsTileSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ContactSection from '../components/ContactSection';
import { Search, Share2, FileText, Mail } from 'lucide-react';

const DigitalMarketing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const hubItems = [
        {
            icon: Search,
            title: "Search Engine Optimization (SEO)",
            description: "In the digital realm, being seen is as important as being innovative. Our SEO experts employ cutting-edge techniques to optimize your website's visibility on search engines."
        },
        {
            icon: Share2,
            title: "Social Media Management",
            description: "In an era dominated by social connectivity, effective social media management is non-negotiable. We craft compelling strategies to engage your audience across platforms."
        },
        {
            icon: FileText,
            title: "Content Marketing",
            description: "Engaging and illuminating content is crucial for attracting and retaining your audience. Our specialists will develop a strategy tailored to your unique offerings."
        },
        {
            icon: Mail,
            title: "Email Marketing",
            description: "Harness the potential of email marketing for lead nurturing. Our strategies highlight your cutting-edge solutions, industry expertise, and exclusive promotions."
        }
    ];

    const benefits = [
        { title: "Increased Online Visibility", description: "Ensure your brand is found by customers searching for your products or services." },
        { title: "Higher ROI", description: "Trackable strategies ensure every dollar spent contributes to your bottom line." },
        { title: "Targeted Audience Reach", description: "Precise targeting ensures your message reaches the people most likely to convert." },
        { title: "Enhanced Brand Awareness", description: "Build a recognizable and trusted brand presence across multiple digital channels." },
        { title: "Improved Customer Engagement", description: "Foster two-way conversations that build relationships and loyalty." },
        { title: "Data-Driven Insights", description: "Stay ahead of your competitors with innovative digital marketing tactics. By leveraging the latest trends and technologies, you gain a competitive edge." }, // Bottom Right tile text from image 5
        { title: "Cost-Effective Advertising", description: "Reach more people for less money compared to traditional advertising methods." },
        { title: "Scalable Strategies", description: "Campaigns that can grow and evolve instantly based on performance data." },
        { title: "Competitive Edge", description: "Stay ahead of competitors by leveraging the latest digital tools and trends." }
    ];

    return (
        <div className="bg-[#020813] min-h-screen pt-24 font-sans selection:bg-blue-500/30">
            <BannerCommon
                badgeText="Services"
                title="Elevate Your Online Visibility with Result-Driven <br/> Digital Marketing Services"
                description="SEO, PPC, and marketing strategies that drive traffic, leads, and conversions."
                gradient="from-orange-500 via-red-500 to-pink-500"
                backgroundImage="/banner-img/digital_banner.jpg"
            />
            <DigitalMarketingServices />
            <BenefitsTileSection
                title="Benefits of Digital Marketing Services"
                subtitle="for Your Business"
                benefits={benefits}
            />
            <TechHubSection
                title="Strategic"
                highlightText="Marketing Channels"
                items={hubItems}
            />
            <WhyChooseUsSection
                title="Why Choose Us for Digital Marketing Services"
                items={[
                    { title: "Expert Digital Marketers", description: "We create effective, customized marketing campaigns tailored to your business." },
                    { title: "Customized Strategies", description: "Our personalized approach ensures that your marketing efforts are effective and impactful." },
                    { title: "Results-Driven Approach", description: "We use data-driven methods to track, analyze, and optimize campaigns for the best ROI." },
                    { title: "Comprehensive Service Offering", description: "Our wide range of digital marketing services covers all aspects of online marketing." },
                    { title: "Cutting-Edge Tools and Techniques", description: "We utilize the latest tools and technologies to enhance your digital marketing efforts." },
                    { title: "Transparent Reporting", description: "Receive clear and detailed reports on your digital marketing performance." }
                ]}
            />
        </div>
    );
};

export default DigitalMarketing;
