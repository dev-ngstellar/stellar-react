import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CountUp = ({ to, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(to);
      const incrementTime = (duration * 1000) / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}{to.includes('+') ? '+' : ''}</span>;
};

const StatItem = ({ number, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className="text-center group relative p-6 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:shadow-xl hover:shadow-[#2BFFFF]/10 w-full md:flex-1"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#2BFFFF]/10 via-blue-400/5 to-[#3981d4]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative">
      <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2BFFFF] via-blue-400 to-[#3981d4] mb-2 font-mono">
        <CountUp to={number} />
      </div>
      <div className="text-gray-400 font-medium group-hover:text-[#2BFFFF] transition-colors duration-300">{label}</div>
    </div>
  </motion.div>
);

const StatsSection = () => {
  return (
    <section className="py-24 bg-[#0B1121] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#2BFFFF]/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#3981d4]/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div className="space-y-2 text-center pb-16">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <span className="text-xl text-[#2BFFFF] animate-pulse">❖</span>
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] via-blue-400 to-[#3981d4]">OUR ACHIEVEMENTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-white">
            Numbers are telling{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] via-blue-400 to-[#3981d4]">our story</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Glossy Sheen */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center relative z-10">
            <StatItem number="20+" label={<>Years of <br /> Industry Experience</>} delay={0} />
            <StatItem number="100+" label={<>Projects Successfully <br /> Completed</>} delay={0.1} />
            <StatItem number="80+" label={<>Happy Clients <br /> around the World</>} delay={0.2} />
            <StatItem number="15+" label={<>Services are given on <br /> different Technologies</>} delay={0.3} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;


