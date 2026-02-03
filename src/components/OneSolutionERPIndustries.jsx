import React from 'react';
import { motion } from 'framer-motion';
// Import Lucide React icons
import { 
  Factory,          // Manufacturing icon
  Construction,     // Engineering & Heavy Fabrication icon
  FlaskConical,     // Pharma Equipment icon
  Cog               // Machine Tools icon
} from 'lucide-react';

const OneSolutionERPIndustries = () => {
  // Industries data with your specific titles and descriptions
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

  // Central hub icon component
  const CentralIcon = () => (
    <div className="w-32 h-32 rounded-full bg-gradient-to-b from-[#0f172a] to-[#020617] border border-[#2BFFFF]/30 flex items-center justify-center shadow-[0_0_30px_rgba(43,255,255,0.3)] relative z-10">
      <img src="/onesolutionerp/one.png" alt="Solution One ERP Logo" className="w-20 h-auto brightness-0 invert opacity-90" />
    </div>
  );

  return (
    <section className="py-24 bg-[#020510] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10" />
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-[#2BFFFF]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[100px] mix-blend-screen animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] via-cyan-400 to-teal-400">Served</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            Trusted by leading manufacturers across diverse industries
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#2BFFFF] to-transparent mx-auto rounded-full opacity-70" />
        </motion.div>

        <div className="relative max-w-6xl mx-auto min-h-[auto] md:min-h-[600px] flex items-center justify-center">
          {/* Central Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
            <div className="relative">
              {/* Glowing Orbs */}
              <div className="absolute inset-0 bg-[#2BFFFF] rounded-full blur-[60px] opacity-20 animate-pulse" />
              <CentralIcon />

              {/* Spinning Rings */}
              <div className="absolute inset-[-20%] border border-[#2BFFFF]/10 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-[-40%] border border-teal-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </div>
          </div>

          {/* Connecting Lines (Desktop) */}
          <div className="absolute inset-0 hidden md:block pointer-events-none">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#2BFFFF]/30 to-transparent" />
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-[#2BFFFF]/30 to-transparent" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-32 md:gap-y-16 w-full relative z-10">
            {industries.map((item, index) => {
              // Calculate positions for staggered animation
              const isLeft = index % 2 === 0;
              const isTop = index < 2;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50, y: isTop ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative group ${isLeft ? 'md:text-right' : 'md:text-left'} ${index === 1 || index === 2 ? 'md:mt-0' : ''}`}
                >
                  <div className={`p-8 rounded-2xl bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/80 border border-white/5 hover:border-[#2BFFFF]/30 transition-all duration-300 backdrop-blur-xl group-hover:shadow-[0_0_30px_rgba(43,255,255,0.15)] md:max-w-md ${isLeft ? 'md:ml-auto' : 'md:mr-auto'}`}>

                    <div className={`mb-4 flex items-start gap-4 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                      <div className="w-12 h-12 rounded-xl bg-[#2BFFFF]/10 flex items-center justify-center border border-[#2BFFFF]/20 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-[#2BFFFF]" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#2BFFFF] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 text-[14px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Grid (fallback for smaller screens) */}
        <div className="md:hidden grid grid-cols-1 gap-8 mt-8">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-500 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-[#2BFFFF]/10 flex items-center justify-center border border-[#2BFFFF]/20 mx-auto mb-4">
                <item.icon className="w-8 h-8 text-[#2BFFFF]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#2BFFFF]">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OneSolutionERPIndustries;