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

const ClientsSection = () => {
  const clients = [cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8, cl9, cl10,cl11];

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-5 text-[#020510]">Our Clients</h3>
        <div className="overflow-hidden w-full relative">
          <div className="flex items-center gap-16 animate-scroll whitespace-nowrap">
            {[...clients, ...clients].map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-2 min-w-[120px]">
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
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
