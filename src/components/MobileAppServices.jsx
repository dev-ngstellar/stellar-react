import React from 'react';
import {
    Smartphone,
    MonitorSmartphone,
    Palette,
    Server,
    Share2,
    Zap,
    ShieldCheck,
    CheckCircle,
    HeadphonesIcon
} from 'lucide-react';
import TechServicesGrid from './TechServicesGrid';

const services = [
    {
        icon: Smartphone,
        title: "Custom Mobile App Solutions",
        description: "Custom apps tailored to your business needs with unique functionality."
    },
    {
        icon: MonitorSmartphone,
        title: "Cross-Platform Development",
        description: "Expand your reach with seamless cross-platform apps for iOS and Android."
    },
    {
        icon: Palette,
        title: "User-Friendly Interface Design",
        description: "Create intuitive interfaces that enhance user experience with a focus on usability and aesthetics."
    },
    {
        icon: Server,
        title: "Robust Backend Development",
        description: "Build a secure, scalable backend to support your app's functionality and performance."
    },
    {
        icon: Share2,
        title: "App Integration Services",
        description: "Enhance your app with seamless third-party service and API integration for extended functionality."
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        description: "Optimize your app for speed and efficiency with fast load times and smooth performance."
    },
    {
        icon: ShieldCheck,
        title: "Secure Mobile Applications",
        description: "Protect user data with robust security measures and industry-standard compliance."
    },
    {
        icon: CheckCircle,
        title: "App Testing and Quality Assurance",
        description: "Ensure a flawless launch with thorough testing for reliability, functionality, and bug-free performance."
    },
    {
        icon: HeadphonesIcon,
        title: "Post-Launch Support and Maintenance",
        description: "Ensure smooth app performance with ongoing support, updates, and bug fixes."
    }
];

const MobileAppServices = () => {
    return (
        <TechServicesGrid
            title="Comprehensive Mobile App"
            highlightText="Development Services"
            services={services}
        />
    );
};

export default MobileAppServices;
