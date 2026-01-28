import React from 'react';
import {
    Palette,
    PenTool,
    Video,
    Film,
    CreditCard,
    Layers,
    Image,
    Layout,
    Package
} from 'lucide-react';
import TechServicesGrid from './TechServicesGrid';

const services = [
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "We craft intuitive and visually stunning user interfaces that enhance user experience and engagement."
    },
    {
        icon: PenTool,
        title: "Logo Design",
        description: "Create a memorable brand identity with our custom logo design services tailored to your business values."
    },
    {
        icon: Layout,
        title: "Graphic Design",
        description: "From brochures to social media assets, we create compelling visuals that communicate your message effectively."
    },
    {
        icon: Video,
        title: "Explainer Videos",
        description: "Simplify complex concepts with engaging explainer videos that captivate and educate your audience."
    },
    {
        icon: Layers,
        title: "Brand Identity",
        description: "Build a cohesive brand image with our comprehensive branding services, including style guides and collateral."
    },
    {
        icon: CreditCard,
        title: "Business Cards",
        description: "Professionally designed business cards that showcase your brand and contact details with style."
    }
];

const DesignServices = () => {
    return (
        <TechServicesGrid
            title="Creative Design"
            highlightText="Services that Inspire"
            services={services}
        />
    );
};

export default DesignServices;
