import React from 'react';
import cl1 from '../assets/cl-1.png';
import cl2 from '../assets/cl-2.png';
import cl3 from '../assets/cl-3.png';
import cl4 from '../assets/cl-4.png';
import cl5 from '../assets/cl-5.png';
import cl6 from '../assets/cl-6.png';
import cl7 from '../assets/cl-7.png';
import cl8 from '../assets/cl-8.png';
import cl9 from '../assets/cl-9.png';
import cl10 from '../assets/cl-10.png';
import cl11 from '../assets/cl-11.png';
import cl12 from '../assets/cl-12.jpg';
import cl13 from '../assets/cl-13.png';
import cl14 from '../assets/cl-14.png';
import cl15 from '../assets/cl-15.png';
import cl16 from '../assets/cl-16.png';
import cl17 from '../assets/cl-17.png';
import cl18 from '../assets/cl-18.png';
import cl19 from '../assets/cl-19.png';
import cl20 from '../assets/cl-20.png';
import cl21 from '../assets/cl-21.png';
import cl22 from '../assets/cl-22.png';
import cl23 from '../assets/cl-23.png';
import cl24 from '../assets/cl-24.png';
import cl25 from '../assets/cl-25.png';
import cl26 from '../assets/cl-26.png';
import cl27 from '../assets/cl-27.png';
import cl28 from '../assets/cl-28.png';
import cl29 from '../assets/cl-29.png';
import cl30 from '../assets/cl-30.png';
import cl31 from '../assets/cl-31.png';
import cl32 from '../assets/cl-32.png';

const ClientsSection = () => {
  const clients = [cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl14, cl8, cl9, cl10, cl11, cl12, cl13, cl15, cl16, cl17, cl18, cl19, cl20, cl21, cl22, cl23, cl24, cl25, cl26, cl27, cl28, cl29, cl30, cl31, cl32];

  return (
    <section className="py-8 md:py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-4xl font-bold mb-5 text-[#020510]">Our Clients</h3>
        <div className="overflow-hidden w-full relative">
          <div className="flex items-center gap-8 md:gap-16 animate-scroll delay-100 whitespace-nowrap">
            {[...clients, ...clients].map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-2 min-w-[80px] md:min-w-[120px]">
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  loading="lazy"
                  className="h-10 md:h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
