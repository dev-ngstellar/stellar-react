import React, { useRef, useEffect } from 'react';
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

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const translateRef = useRef(0);
  const lastRef = useRef(0);
  const pausedRef = useRef(false);
  const loopWidthRef = useRef(0);

  useEffect(() => {
    const prefersReduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduce) return;

    const track = trackRef.current;
    if (!track) return;

    const children = track.children;
    if (!children || children.length === 0) return;

    // Measure the width of one full clients set by comparing the offsetLeft
    const setCount = clients.length;
    if (children.length < setCount * 2) return;

    const startLeft = children[0].offsetLeft;
    const secondSetLeft = children[setCount].offsetLeft;
    const loopWidth = Math.abs(secondSetLeft - startLeft) || track.scrollWidth / 2;
    loopWidthRef.current = loopWidth;

    const speed = 40; // pixels per second, adjust as needed

    function step(timestamp) {
      if (pausedRef.current) {
        lastRef.current = timestamp;
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      if (!lastRef.current) lastRef.current = timestamp;
      const delta = timestamp - lastRef.current;
      lastRef.current = timestamp;

      translateRef.current -= (speed * delta) / 1000;

      // Loop seamlessly when we've scrolled one setWidth
      if (Math.abs(translateRef.current) >= loopWidthRef.current && loopWidthRef.current > 0) {
        // add loopWidth until we're back within range (handles large deltas)
        translateRef.current += Math.ceil(Math.abs(translateRef.current) / loopWidthRef.current) * loopWidthRef.current;
      }

      track.style.transform = `translate3d(${translateRef.current}px,0,0)`;
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);

    const onVisibility = () => {
      if (document.hidden) {
        pausedRef.current = true;
      } else {
        pausedRef.current = false;
        lastRef.current = 0;
      }
    };

    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('resize', () => {
      // recompute loop width on resize
      const childrenNow = track.children;
      if (childrenNow.length >= setCount * 2) {
        const newSecondLeft = childrenNow[setCount].offsetLeft;
        loopWidthRef.current = Math.abs(newSecondLeft - childrenNow[0].offsetLeft) || track.scrollWidth / 2;
      }
    });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.removeEventListener('visibilitychange', onVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // hover handlers to pause/resume without changing sizes
  const handleMouseEnter = () => { pausedRef.current = true; };
  const handleMouseLeave = () => { pausedRef.current = false; lastRef.current = 0; };

  return (
    <section className="py-8 md:py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-4xl font-bold mb-5 text-[#020510]">Our Clients</h3>
        <div className="overflow-hidden w-full relative" ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div
            ref={trackRef}
            className="flex items-center gap-8 md:gap-16 whitespace-nowrap"
            style={{ display: 'flex', width: 'max-content', willChange: 'transform', transform: 'translate3d(0,0,0)' }}
          >
            {[...clients, ...clients].map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-2 min-w-[80px] md:min-w-[120px]">
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="h-10 md:h-16 w-auto object-contain"
                  style={{ transition: 'transform 0.25s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
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
