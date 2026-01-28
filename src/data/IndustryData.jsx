import React from 'react';
import { 
  Stethoscope, GraduationCap, Shirt, Sprout, 
  Car, Plane, Utensils, Sofa, 
  ShoppingBag, CalendarDays, HardHat, Landmark 
} from 'lucide-react';


export const industryList = [
    { 
        name: "Healthcare", 
        icon: <Stethoscope className="w-10 h-10 text-[#2BFFFF]" />,
        description:"We deliver secure, scalable, and patient-centric digital solutions tailored to the evolving needs of the healthcare industry. Our offerings include custom healthcare software development, electronic health record (EHR/EMR) systems, telemedicine and remote patient monitoring platforms, hospital and clinic management systems, appointment scheduling and patient portals, and healthcare mobile applications. We also provide HIPAA-compliant data management, interoperability solutions, AI-driven analytics for clinical decision support, medical billing and revenue cycle management tools, and digital marketing solutions for healthcare providers. Our solutions are designed to improve patient outcomes, streamline clinical workflows, enhance data security, and enable healthcare organizations to deliver efficient, high-quality care in a digitally connected environment. ",
        image: "/industries/Healthcare.webp" 
    },
    { 
        name: "Education", 
        icon: <GraduationCap className="w-10 h-10 text-[#2BFFFF]" />,
        description:"We provide innovative, scalable, and learner-centric digital solutions designed to transform the education industry. Our offerings include custom e-learning platforms, Learning Management Systems (LMS), virtual classrooms, mobile learning applications, student information systems, online examination and assessment tools, and AI-powered personalized learning solutions. We also develop school and university management systems, admission and enrollment portals, content management systems for educators, and data analytics dashboards to track student performance and engagement. Our digital solutions help educational institutions, training providers, and edtech companies enhance learning experiences, improve administrative efficiency, support remote and hybrid learning models, and deliver high-quality education in a secure and engaging digital environment.",
        image:"/industries/Education.webp"
    },
    { 
        name: "Fashion", 
        icon: <Shirt className="w-10 h-10 text-[#2BFFFF]" />,
        description:"We deliver end-to-end digital solutions tailored to the fast-paced and visually driven fashion industry. Our services include fashion eCommerce website and mobile app development, product catalog and inventory management systems, omnichannel retail solutions, virtual try-on and AR experiences, and seamless payment and order fulfillment integrations. We also provide brand-focused UI/UX design, fashion marketplace platforms, AI-driven trend analysis, customer personalization tools, and digital marketing solutions including SEO, social media, and influencer campaign support. Our solutions help fashion brands, designers, and retailers enhance customer engagement, optimize operations, increase online sales, and build a strong, consistent digital presence across global markets.",
        image:"/industries/fashion.webp"
    },
    { 
        name: "Agriculture", 
        icon: <Sprout className="w-10 h-10 text-[#2BFFFF]" />,
        description:"We provide smart, technology-driven digital solutions designed to modernize and optimize the agriculture industry. Our offerings include farm management software, precision agriculture platforms, IoT-based crop and soil monitoring systems, weather and yield forecasting tools, and mobile applications for farmers and agribusinesses. We also develop supply chain and inventory management systems, agri-marketplace platforms, traceability solutions, and data analytics dashboards to support informed decision-making. Our digital solutions help farmers, cooperatives, and agribusiness companies increase productivity, reduce operational costs, improve sustainability, and make agriculture more efficient, data-driven, and resilient.",
        image: "/industries/agriculture.png" 
    },
    { 
        name: "Automobile", 
        icon: <Car className="w-10 h-10 text-[#2BFFFF]" />,
        description:"We deliver advanced digital solutions tailored to the evolving automobile industry, supporting manufacturers, dealers, and mobility service providers. Our offerings include automotive website and mobile app development, dealer management systems (DMS), vehicle inventory and supply chain management solutions, connected vehicle and IoT integrations, and customer relationship management (CRM) platforms. We also provide digital solutions for vehicle booking, service scheduling, fleet management, telematics, and data analytics for performance and predictive maintenance. Combined with intuitive UI/UX design and digital marketing solutions, our technology helps automotive businesses enhance customer experiences, streamline operations, and drive innovation across the automotive value chain.",
        image: "/industries/Automobile.webp" 
    },
    { 
        name: "Travel", 
        icon: <Plane className="w-10 h-10 text-[#2BFFFF]" />,
        description:"We provide comprehensive digital solutions designed to support the dynamic needs of the travel industry. Our services include travel website and mobile app development, online booking and reservation systems, itinerary management platforms, and integrations with global distribution systems (GDS) and payment gateways. We also develop solutions for tour operators, travel agencies, and hospitality providers, including CRM systems, customer loyalty programs, real-time pricing and availability management, and data analytics for demand forecasting. With user-centric UI/UX design and digital marketing solutions such as SEO and social media promotion, our digital solutions help travel businesses enhance customer experiences, streamline operations, and increase bookings in a highly competitive global market.",
        image: "/industries/travel.jpg" 
    },
    { 
        name: "Food", 
        icon: <Utensils className="w-10 h-10 text-[#2BFFFF]" />,
        description:"We deliver robust and scalable digital solutions tailored to the diverse needs of the food industry, including restaurants, food manufacturers, distributors, and delivery platforms. Our offerings include food ordering and delivery applications, restaurant and kitchen management systems, inventory and supply chain management solutions, and POS integrations. We also develop customer loyalty programs, menu management platforms, quality control and traceability systems, and data analytics tools for demand forecasting and operational optimization. Combined with intuitive UI/UX design and digital marketing solutions, our technology helps food businesses improve efficiency, ensure food safety, enhance customer engagement, and drive sustainable growth in a competitive marketplace.",
        image: "/industries/food.webp" 
    },
    { 
        name: "Furniture", 
        icon: <Sofa className="w-10 h-10 text-[#2BFFFF]" />,
        description:"We provide tailored digital solutions designed to meet the unique needs of the furniture industry, from manufacturers to retailers and distributors. Our services include furniture eCommerce website and mobile app development, product visualization tools, 3D and AR-based virtual room planning, and inventory and warehouse management systems. We also develop custom ERP and CRM solutions, order and supply chain management platforms, and integrations with logistics and payment systems. With intuitive UI/UX design and data-driven digital marketing solutions, our technology helps furniture brands enhance customer experiences, streamline operations, increase online sales, and scale efficiently in a competitive global market.",
        image: "/industries/furniture.webp" 
    },
    { 
        name: "Retail", 
        icon: <ShoppingBag className="w-10 h-10 text-[#2BFFFF]" />,
        description:"We deliver comprehensive digital solutions designed to help retail businesses thrive in an increasingly omnichannel environment. Our offerings include retail eCommerce platforms, point-of-sale (POS) integrations, inventory and order management systems, and omnichannel customer experience solutions across web, mobile, and in-store touchpoints. We also develop CRM and loyalty programs, AI-driven customer insights and demand forecasting tools, and real-time analytics dashboards. Supported by intuitive UI/UX design and performance-focused digital marketing solutions, our technology helps retailers optimize operations, increase sales, improve customer retention, and build a seamless, data-driven retail ecosystem.",
        image: "/industries/retails.png" 
    },
    { 
        name: "Events", 
        icon: <CalendarDays className="w-10 h-10 text-[#2BFFFF]" />,
        description:"We provide end-to-end digital solutions tailored to the dynamic needs of the events industry, including corporate events, exhibitions, conferences, and entertainment experiences. Our services include event management platforms, online event registration and ticketing systems, attendee engagement and networking applications, and virtual and hybrid event solutions. We also develop tools for agenda management, speaker coordination, real-time analytics, and post-event reporting, along with CRM and marketing automation integrations. With intuitive UI/UX design and targeted digital marketing solutions, our technology helps event organizers streamline planning, enhance attendee experiences, improve operational efficiency, and maximize event ROI.",
        image: "/industries/events.png"
    },
    { 
        name: "Construction", 
        icon: <HardHat className="w-10 h-10 text-[#2BFFFF]" />,
        description:"We deliver integrated digital solutions designed to support construction companies, real estate developers, and infrastructure firms across the project lifecycle. Our offerings include construction project management systems, real estate CRM platforms, property listing and management solutions, cost estimation and budgeting tools, and document management systems. We also develop solutions for site monitoring, workflow automation, contractor and vendor management, and data analytics for project tracking and performance optimization. Combined with intuitive UI/UX design and digital marketing solutions for real estate, our technology helps organizations improve project visibility, reduce delays, control costs, and deliver high-quality developments efficiently and on schedule.",
        image: "/industries/construction.webp"
    },
    { 
        name: "Finance", 
        icon: <Landmark className="w-10 h-10 text-[#2BFFFF]" />,
        description:"We provide secure, compliant, and scalable digital solutions tailored to the evolving needs of the finance industry, including banks, fintech companies, investment firms, and financial service providers. Our offerings include custom financial software development, digital banking platforms, payment gateway integrations, mobile banking and wallet applications, and automated accounting and reporting systems. We also develop solutions for risk management, fraud detection, regulatory compliance, data analytics, and customer relationship management (CRM). With robust security standards, intuitive UI/UX design, and performance-driven digital marketing solutions, our technology helps financial organizations enhance operational efficiency, improve customer trust, and drive sustainable growth in a highly regulated environment.",
        image: "/industries/finance.webp"
    }
];