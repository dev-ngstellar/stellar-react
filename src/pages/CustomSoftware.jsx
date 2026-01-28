import React, { useEffect } from 'react';
import BannerCommon from '../components/BannerCommon';
import CustomSoftwareServices from '../components/CustomSoftwareServices';
import TechHubSection from '../components/TechHubSection';
import BenefitsTileSection from '../components/BenefitsTileSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ContactSection from '../components/ContactSection';
import { ClipboardList, PenTool, Code2, Rocket } from 'lucide-react';

const CustomSoftware = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const hubItems = [
        {
            icon: ClipboardList,
            title: "Requirement Gathering",
            description: "We start by closely collaborating with you to understand your business needs, objectives, and challenges."
        },
        {
            icon: PenTool,
            title: "Design and Prototyping",
            description: "Based on the gathered requirements, our talented designers create intuitive user interfaces (UI) and engaging user experiences (UX)."
        },
        {
            icon: Code2,
            title: "Development and Testing",
            description: "Our experienced software developers begin the coding process, using the latest technologies and industry best practices."
        },
        {
            icon: Rocket,
            title: "Deployment and Integration",
            description: "Once the software is developed and thoroughly tested, we deploy it to your preferred environment, whether it's on-premises or cloud-based."
        }
    ];

    const benefits = [
        { title: "Tailored to Your Specific Needs", description: "Software built exactly for your workflow, solving your specific business problems." },
        { title: "Improved Efficiency", description: "Automate manual processes and eliminate bottlenecks to boost productivity." },
        { title: "Competitive Advantage", description: "Unique features that differentiate your business from those using off-the-shelf software." },
        { title: "Scalability and Flexibility", description: "Systems designed to grow with you, allowing for easy updates and additions." },
        { title: "Enhanced Security", description: "Protect your sensitive data with tailored security measures. Custom software includes security features designed to safeguard your information." }, // Center tile from image 4
        { title: "Seamless Integration", description: "Connect perfectly with your existing hardware and software ecosystem." },
        { title: "Better User Experience", description: "Interfaces designed specifically for your team's needs, reducing training time." },
        { title: "Cost-Effectiveness in the Long Run", description: "Avoid license fees and expensive workarounds often required by generic software." },
        { title: "Enhanced Support and Maintenance", description: "Direct access to the developers who built your system for quick resolution." }
    ];

    return (
        <div className="bg-[#020813] min-h-screen pt-24 font-sans selection:bg-blue-500/30">
            <BannerCommon
                badgeText="Services"
                title="Custom Software Development Services That <br/> Drive Efficiency and Growth"
                description="Custom Software Development Services That Drive Efficiency and Growth Tailored software solutions that streamline operations and boost productivity."
                gradient="from-emerald-500 via-teal-500 to-cyan-500"
                backgroundImage="/banner-img/custom-software_banner.jpg"
            />
            <CustomSoftwareServices />
            <BenefitsTileSection
                title="Benefits of Custom Software"
                subtitle="Development for Your Business"
                benefits={benefits}
            />
            <TechHubSection
                title="Software Development"
                highlightText="Lifecycle"
                items={hubItems}
            />
            <WhyChooseUsSection
                title="Why Choose Stellar Solutions for Custom Software Development"
                items={[
                    { title: "Expert Development Team", description: "We leverage our expertise to deliver high-quality, effective software tailored to your needs." },
                    { title: "Client-Centric Approach", description: "We prioritize your business goals and requirements." },
                    { title: "Innovative Technology Utilization", description: "We use the latest technologies and development practices to build cutting-edge software." },
                    { title: "Comprehensive Project Management", description: "Our structured project management process guarantees timely delivery and adherence to budget." },
                    { title: "Custom Solutions for Every Industry", description: "We cater to diverse industries with tailored software solutions." },
                    { title: "Ongoing Support and Maintenance", description: "Enjoy reliable support and maintenance services post-launch." }
                ]}
            />
        </div>
    );
};

export default CustomSoftware;
