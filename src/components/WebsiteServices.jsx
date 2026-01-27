import React from 'react';
import {
    Monitor,
    Smartphone,
    ShoppingCart,
    FileText,
    Search,
    Palette,
    Settings,
    Code2,
    TrendingUp
} from 'lucide-react';
import TechServicesGrid from './TechServicesGrid';

const services = [
    {
        icon: Monitor,
        title: "Custom Website Design",
        description: "Custom designs that reflect your brand and captivate your audience."
    },
    {
        icon: Smartphone,
        title: "Responsive Web Development",
        description: "Create responsive websites for seamless experiences across mobile, tablet, and desktop."
    },
    {
        icon: ShoppingCart,
        title: "E-commerce Solutions",
        description: "Boost online sales with secure, scalable e-commerce solutions tailored to your business."
    },
    {
        icon: FileText,
        title: "Content Management Systems",
        description: "Effortlessly manage content with WordPress, Joomla, and custom CMS solutions."
    },
    {
        icon: Search,
        title: "SEO Optimization",
        description: "Boost your online visibility with expert SEO strategies for higher rankings and increased organic traffic."
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Create intuitive user experiences with our user-centered UI/UX designs, balancing functionality and aesthetics."
    },
    {
        icon: Settings,
        title: "Website Maintenance and Support",
        description: "Ensure your website runs smoothly with our maintenance, updates, and support services."
    },
    {
        icon: Code2,
        title: "Web Application Development",
        description: "Turn your ideas into powerful web applications with our robust, scalable solutions."
    },
    {
        icon: TrendingUp,
        title: "Digital Strategy and Consulting",
        description: "Craft a winning digital strategy with our expert consulting to achieve your online goals and maximize ROI."
    }
];

const WebsiteServices = () => {
    return (
        <TechServicesGrid
            title="Website Design & Development"
            highlightText="Services"
            services={services}
        />
    );
};

export default WebsiteServices;
