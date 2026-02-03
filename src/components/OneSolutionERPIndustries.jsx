import React from 'react';
import {
  Factory,          // Manufacturing icon
  Construction,     // Engineering & Heavy Fabrication icon
  FlaskConical,     // Pharma Equipment icon
  Cog               // Machine Tools icon
} from 'lucide-react';
import TechHubSection from './TechHubSection';

const OneSolutionERPIndustries = () => {
  // Industries data
  const industries = [
    {
      icon: Factory,
      title: "Engineering & Manufacturing",
      description: "End-to-end ERP solutions for production planning, inventory control, and quality management in manufacturing facilities."
    },
    {
      icon: Construction,
      title: "Heavy Fabrication",
      description: "Specialized ERP systems for heavy fabrication with project tracking, material management, and workshop operations."
    },
    {
      icon: FlaskConical,
      title: "Pharma Equipment Manufacturing",
      description: "Compliance-focused ERP for pharmaceutical equipment manufacturers with traceability and quality assurance."
    },
    {
      icon: Cog,
      title: "Machine Tools & Industrial Components",
      description: "ERP solutions for precision machine tools and component manufacturers with assembly tracking and maintenance."
    }
  ];

  // Pass the image directly, TechHubSection handles the container/styling
  const centralIcon = (
    <img
      src="/onesolutionerp/one.png"
      alt="Solution One ERP Logo"
      className="w-20 h-auto brightness-0 invert opacity-90"
    />
  );

  return (
    <TechHubSection
      title="Industries"
      highlightText="Served"
      items={industries}
      centralIcon={centralIcon}
    />
  );
};

export default OneSolutionERPIndustries;