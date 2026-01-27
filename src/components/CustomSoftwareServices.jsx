import React from 'react';
import {
    Cpu,
    Layers,
    Scaling,
    Network,
    Smile,
    Zap,
    Lock,
    BarChart2,
    Headphones
} from 'lucide-react';
import TechServicesGrid from './TechServicesGrid';

const services = [
    {
        icon: Cpu,
        title: "Bespoke Software Solutions",
        description: "We deliver custom software solutions tailored to your business needs and goals."
    },
    {
        icon: Layers,
        title: "End-to-End Development",
        description: "We offer end-to-end software development, from planning to deployment, for a seamless experience."
    },
    {
        icon: Scaling,
        title: "Scalable and Flexible Solutions",
        description: "We design scalable software that adapts to your growing business and evolving needs."
    },
    {
        icon: Network,
        title: "Integration with Existing Systems",
        description: "Our custom software seamlessly integrates with your existing systems."
    },
    {
        icon: Smile,
        title: "User-Centric Design",
        description: "We design user-friendly software with an intuitive interface for easy navigation and usability."
    },
    {
        icon: Zap,
        title: "Advanced Technology Implementation",
        description: "We use the latest technologies and practices to deliver cutting-edge, high-performance software."
    },
    {
        icon: Lock,
        title: "Robust Security Features",
        description: "We implement robust security measures like encryption and access controls to protect your data."
    },
    {
        icon: BarChart2,
        title: "Real-Time Analytics and Reporting",
        description: "Gain insights with integrated analytics and real-time reporting for informed decision-making."
    },
    {
        icon: Headphones,
        title: "Ongoing Support and Maintenance",
        description: "Get continuous support with regular updates, troubleshooting, and technical assistance."
    }
];

const CustomSoftwareServices = () => {
    return (
        <TechServicesGrid
            title="Tailored Custom Software"
            highlightText="Development Solutions"
            services={services}
        />
    );
};

export default CustomSoftwareServices;
