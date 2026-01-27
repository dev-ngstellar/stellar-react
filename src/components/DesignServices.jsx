import React from 'react';
import {
    Palette,
    PenTool,
    Video,
    Film,
    Monitor,
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
        icon: Film,
        title: "Animation Videos",
        description: "Bring your stories to life with high-quality 2D and 3D animation services for marketing and entertainment."
    },
    {
        icon: Monitor,
        title: "Motion Graphics",
        description: "Enhance your video content with dynamic motion graphics that add a professional touch to your brand."
    },
    {
        icon: Layers,
        title: "Brand Identity",
        description: "Build a cohesive brand image with our comprehensive branding services, including style guides and collateral."
    },
    {
        icon: Image,
        title: "Print Design",
        description: "Get high-quality print materials like business cards, flyers, and banners designed to leave a lasting impression."
    },
    {
        icon: Package,
        title: "Packaging Design",
        description: "Stand out on the shelves with creative packaging designs that protect your product and attract customers."
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
