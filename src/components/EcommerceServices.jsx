import React from 'react';

import {
    LineChart,
    Wrench,
    Megaphone,
    MessageSquareText,
    ArrowLeftRight,
    Smartphone,
    BookOpen,
    Layers,
    Code
} from 'lucide-react';

const services = [
    {
        icon: LineChart,
        title: "E-commerce Analytics and Reporting",
        description: "Boost your E-commerce success with our analytics services for smarter decisions."
    },
    {
        icon: Wrench,
        title: "E-commerce Support & Maintenance",
        description: "Ensure your E-commerce success with our maintenance and support services for smooth operations."
    },
    {
        icon: Megaphone,
        title: "E-commerce Marketing Solutions",
        description: "Boost sales with our targeted E-commerce marketing solutions."
    },
    {
        icon: MessageSquareText,
        title: "E-commerce Consultation",
        description: "Stay ahead with our engaging, user-friendly website design."
    },
    {
        icon: ArrowLeftRight,
        title: "E-commerce Platform Migration",
        description: "Smooth and secure E-commerce platform migration."
    },
    {
        icon: Smartphone,
        title: "Mobile E-commerce Solutions",
        description: "Expand your reach with our mobile E-commerce solutions."
    },
    {
        icon: BookOpen,
        title: "User Training and Documentation",
        description: "Equip your team with E-commerce training and documentation."
    },
    {
        icon: Layers,
        title: "E-commerce Integration Services",
        description: "Streamline your business with our E-commerce integration services."
    },
    {
        icon: Code,
        title: "Custom E-commerce Development",
        description: "Customize your E-commerce platform with our development services."
    }
];

import TechServicesGrid from './TechServicesGrid';

const EcommerceServices = () => {
    return (
        <TechServicesGrid
            title="Our End-to-End"
            highlightText="Ecommerce Services"
            services={services}
        />
    );
};

export default EcommerceServices;
