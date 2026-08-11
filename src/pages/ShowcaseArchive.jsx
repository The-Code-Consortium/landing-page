import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MotionLink = motion(Link);

const globalRevealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

export default function ShowcaseArchive() {
  useEffect(() => {
    document.title = "Project Archive | The Code Consortium";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-black bg-gray-50 min-h-screen flex flex-col relative selection:bg-black selection:text-white">
      <Navbar />

      <main className="flex-grow max-w-screen-2xl mx-auto border-l border-r border-gray-300 bg-white pt-24 w-full">
        {/* Header Section */}
        <motion.div
          className="p-6 md:p-16 border-b border-gray-300"
          {...globalRevealProps}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black">Project Archive</h1>
          <p className="font-mono text-sm text-gray-500 uppercase max-w-md mt-4">
            A comprehensive selection of engineered platforms and high-performance digital assets built for modern enterprises.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-8">
          <MotionLink
            className="block flex flex-col group hover:bg-gray-50 transition-colors bg-white overflow-hidden border border-gray-300"
            to="/project/bakery-os"
            {...globalRevealProps}
          >
            <div className="p-6 md:p-8 overflow-hidden w-full h-48 md:h-64 border-b border-gray-300">
              <img
                alt="BakeryOS Cashier Portal"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ease-in-out"
                src="/bakery-showcase.png"
              />
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-bold text-lg group-hover:underline decoration-2 underline-offset-4">BakeryOS Cashier Portal</h3>
                <span className="material-symbols-outlined text-gray-300 group-hover:text-black transition-colors">arrow_outward</span>
              </div>
              <div className="font-mono text-xs tracking-widest uppercase text-gray-500 group-hover:text-black transition-colors mt-auto">
                DETAILS <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </div>
            </div>
          </MotionLink>

          <MotionLink
            className="block flex flex-col group hover:bg-gray-50 transition-colors bg-white overflow-hidden border border-gray-300"
            to="/project/hris-command-center"
            {...globalRevealProps}
          >
            <div className="p-6 md:p-8 overflow-hidden w-full h-48 md:h-64 border-b border-gray-300">
              <img
                alt="HRIS Command Center"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ease-in-out"
                src="/image(5).png"
              />
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-bold text-lg group-hover:underline decoration-2 underline-offset-4">HRIS Command Center</h3>
                <span className="material-symbols-outlined text-gray-300 group-hover:text-black transition-colors">arrow_outward</span>
              </div>
              <div className="font-mono text-xs tracking-widest uppercase text-gray-500 group-hover:text-black transition-colors mt-auto">
                DETAILS <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </div>
            </div>
          </MotionLink>

          <MotionLink
            className="block flex flex-col group hover:bg-gray-50 transition-colors bg-white overflow-hidden border border-gray-300"
            to="/project/bespoke-salon"
            {...globalRevealProps}
          >
            <div className="p-6 md:p-8 overflow-hidden w-full h-48 md:h-64 border-b border-gray-300">
              <img
                alt="Bespoke Salon Portal"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ease-in-out"
                src="/salon-showcase.png"
              />
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-bold text-lg group-hover:underline decoration-2 underline-offset-4">Bespoke Salon Portal</h3>
                <span className="material-symbols-outlined text-gray-300 group-hover:text-black transition-colors">arrow_outward</span>
              </div>
              <div className="font-mono text-xs tracking-widest uppercase text-gray-500 group-hover:text-black transition-colors mt-auto">
                DETAILS <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </div>
            </div>
          </MotionLink>
        </div>
      </main>

      <Footer />
    </div>
  );
}
