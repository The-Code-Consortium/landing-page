import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const globalRevealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const pathVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const chars = '!<>-_\\/[]{}—=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function ScrambleLink({ href, onClick, children }) {
  const text = children.toUpperCase();
  const [displayText, setDisplayText] = useState(text);
  const [scrambledIndices, setScrambledIndices] = useState(new Set());
  const intervalRef = useRef(null);

  const startScramble = () => {
    let iterations = 0;
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      const newIndices = new Set();
      const scrambledWord = text.split('').map((char, index) => {
        if (char === ' ') return ' ';
        
        if (index < iterations) {
          return text[index];
        }
        
        newIndices.add(index);
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');

      setDisplayText(scrambledWord);
      setScrambledIndices(newIndices);
      
      if (iterations >= text.length) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
        setScrambledIndices(new Set());
      }
      
      iterations += text.length / 10;
    }, 35);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setDisplayText(text);
    setScrambledIndices(new Set());
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={startScramble}
      onMouseLeave={stopScramble}
      className="font-mono uppercase text-sm text-gray-500 hover:text-black transition-colors duration-200 cursor-pointer select-none tracking-widest"
    >
      {displayText.split('').map((char, index) => {
        const isScrambled = scrambledIndices.has(index);
        return (
          <span 
            key={index} 
            className={isScrambled ? 'text-blue-600 font-bold' : 'text-inherit'}
          >
            {char}
          </span>
        );
      })}
    </a>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of screen
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            setActiveSection(id);
          }
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-gray-50 text-black font-sans antialiased overflow-x-hidden selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-300 h-20">
        <div className="max-w-screen-2xl mx-auto h-full flex justify-between items-center px-6 md:px-12">
          <div className="flex items-center gap-4">
            <img 
              alt="Logo" 
              className="h-12 w-auto object-contain" 
              src="./logo.png"
            />
            <div className="font-mono text-base md:text-lg font-semibold tracking-widest text-gray-800 uppercase">The Code Consortium</div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <ScrambleLink 
              href="#about"
              onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }}
            >
              About
            </ScrambleLink> 
            <ScrambleLink 
              href="#services"
              onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}
            >
              Services
            </ScrambleLink> 
            <ScrambleLink 
              href="#showcase"
              onClick={(e) => { e.preventDefault(); handleScrollTo('showcase'); }}
            >
              Showcase
            </ScrambleLink> 
            <ScrambleLink 
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}
            >
              Contact
            </ScrambleLink> 
            <a 
              className="px-6 py-2 font-mono uppercase text-sm hover:bg-black hover:text-white transition-colors bg-black text-white" 
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}
            >
              Inquire
            </a>
          </div>
          
          <button 
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-300 z-50 flex flex-col p-6 space-y-4 shadow-lg">
            <a 
              className="font-mono uppercase text-sm text-gray-500 hover:text-black transition-colors" 
              href="#about"
              onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); handleScrollTo('about'); }}
            >
              About
            </a>
            <a 
              className="font-mono uppercase text-sm text-gray-500 hover:text-black transition-colors" 
              href="#services"
              onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); handleScrollTo('services'); }}
            >
              Services
            </a>
            <a 
              className="font-mono uppercase text-sm text-gray-500 hover:text-black transition-colors" 
              href="#showcase"
              onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); handleScrollTo('showcase'); }}
            >
              Showcase
            </a>
            <a 
              className="font-mono uppercase text-sm text-gray-500 hover:text-black transition-colors" 
              href="#contact"
              onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); handleScrollTo('contact'); }}
            >
              Contact
            </a>
            <a 
              className="px-6 py-3 font-mono uppercase text-sm text-center bg-black text-white hover:bg-white hover:text-black border border-black transition-colors" 
              href="#contact"
              onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); handleScrollTo('contact'); }}
            >
              Inquire
            </a>
          </div>
        )}
      </nav>

      {/* Scroll Tracker Dot Indicators */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5 pr-4" id="scroll-tracker">
        {['hero', 'about', 'services', 'showcase', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => handleScrollTo(section)}
            className="group relative flex items-center justify-end focus:outline-none py-1"
            aria-label={`Scroll to ${section}`}
          >
            {/* Hover Tooltip Text Label */}
            <span className="absolute right-7 font-mono text-[10px] tracking-widest text-black uppercase opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none bg-white border border-gray-300 px-2 py-0.5 shadow-sm whitespace-nowrap">
              {section === 'hero' ? 'THE CODE CONSORTIUM' : section}
            </span>
            
            {/* Dynamic Dash */}
            <span
              className={`h-[2px] transition-all duration-300 ${
                activeSection === section ? 'bg-black w-6' : 'bg-gray-300 w-4 group-hover:bg-black'
              }`}
            />
          </button>
        ))}
      </div>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section 
          className="max-w-screen-2xl mx-auto border-l border-r border-gray-300 bg-white min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center relative px-6 md:px-12 py-16 overflow-hidden scroll-mt-24" 
          id="hero"
        >
          {/* Particle Vibe Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60 z-0 pointer-events-none" />

          {/* Centered Content */}
          <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto w-full">
            {/* Centered Snake-Border Badge */}
            <div className="relative mb-8 overflow-hidden p-[1px] rounded-full bg-gray-300 self-center">
              <div 
                className="absolute inset-[-200%] animate-[spin_3s_linear_infinite]"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 70%, #000000 100%)'
                }}
              />
              <div className="relative font-mono uppercase text-sm text-gray-500 bg-white inline-flex items-center px-6 py-2 rounded-full z-10">
                <span>Meet the new digital standard</span>
                <span className="material-symbols-outlined text-[16px] ml-2">chevron_right</span>
              </div>
            </div>

            {/* Massive Centered Headline */}
            <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tighter mb-12 max-w-4xl">
              Software built to solve, not just run.
            </h1>

            {/* Centered Side-by-Side Softly Rounded Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
              <a 
                className="bg-black text-white px-8 py-4 font-mono uppercase text-sm text-center border border-black hover:bg-white hover:text-black transition-colors rounded-full shadow-sm" 
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}
              >
                Start Your Project
              </a>
              <a 
                className="bg-white text-black px-8 py-4 font-mono uppercase text-sm text-center border border-gray-300 hover:border-black transition-colors rounded-full shadow-sm" 
                href="#showcase"
                onClick={(e) => { e.preventDefault(); handleScrollTo('showcase'); }}
              >
                See Our Work
              </a>
            </div>
          </div>
        </section>

        <div className="w-full h-16 md:h-24 border-t border-b border-gray-300 bg-gray-50"></div>

        {/* About Section */}
        <section 
          className="max-w-screen-2xl mx-auto border-l border-r border-gray-300 bg-white flex flex-col md:flex-row relative scroll-mt-24" 
          id="about"
        >
          {/* Left Side (60%) */}
          <motion.div 
            className="w-full md:w-[60%] p-6 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-300"
            {...globalRevealProps}
          >
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-3xl">
              A modern software studio transforming traditional businesses into digital powerhouses.
            </h2>
          </motion.div>
          {/* Right Side (40%) */}
          <motion.div 
            className="w-full md:w-[40%] flex flex-col bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
            {...globalRevealProps}
          >
            <div className="p-8 border-b border-gray-300">
              <span className="font-mono uppercase text-xs text-gray-500 mb-2 block">// 01</span>
              <h3 className="font-bold text-2xl mb-4">Total Simplicity</h3>
              <p className="font-mono text-sm text-gray-500 uppercase">
                We abstract away the technical complexity, delivering sleek, intuitive interfaces that your team and customers will actually enjoy using.
              </p>
            </div>
            <div className="p-8 border-b border-gray-300">
              <span className="font-mono uppercase text-xs text-gray-500 mb-2 block">// 02</span>
              <h3 className="font-bold text-2xl mb-4">Built to Scale</h3>
              <p className="font-mono text-sm text-gray-500 uppercase">
                Architected on modern cloud infrastructure, ensuring your digital assets grow seamlessly alongside your business ambitions.
              </p>
            </div>
            <div className="p-8">
              <span className="font-mono uppercase text-xs text-gray-500 mb-2 block">// 03</span>
              <h3 className="font-bold text-2xl mb-4">Hands-Free Care</h3>
              <p className="font-mono text-sm text-gray-500 uppercase">
                Comprehensive ongoing support, security updates, and performance monitoring, so you can focus entirely on running your business.
              </p>
            </div>
          </motion.div>
        </section>

        <div className="w-full h-16 md:h-24 border-t border-b border-gray-300 bg-gray-50"></div>

        {/* Services Section */}
        <section 
          className="max-w-screen-2xl mx-auto border-l border-r border-gray-300 bg-white scroll-mt-24" 
          id="services"
        >
          <motion.div 
            className="p-6 md:p-16 border-b border-gray-300"
            {...globalRevealProps}
          >
            <span className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-4 block">CAPABILITIES</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-black">Service Map</h2>
          </motion.div>
          
          {/* Service Rows */}
          <div className="flex flex-col">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row border-b border-gray-300">
              <motion.div 
                className="w-full md:w-[60%] p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-300"
                {...globalRevealProps}
              >
                <h3 className="font-bold text-3xl md:text-4xl mb-4">Digital Presence</h3>
                <p className="font-mono text-sm text-gray-500 uppercase max-w-lg">
                  Foundational digital assets designed for maximum conversion and brand authority.
                </p>
              </motion.div>
              <motion.div 
                className="w-full md:w-[40%] p-8 md:p-12 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                {...globalRevealProps}
              >
                <motion.ul 
                  className="space-y-6 font-mono text-sm uppercase"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={containerVariants}
                >
                  {['Web Development', 'Managed Hosting', 'E-Commerce Solutions'].map((service, index) => (
                    <li key={index} className="flex items-center">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-4 flex-shrink-0 text-black">
                        <rect x="0.5" y="0.5" width="19" height="19" stroke="currentColor" strokeWidth="1" />
                        <motion.path 
                          d="M4 10L8 14L16 6" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          variants={pathVariants}
                        />
                      </svg>
                      {service}
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
            
            {/* Row 2 */}
            <div className="flex flex-col md:flex-row border-b border-gray-300">
              <motion.div 
                className="w-full md:w-[60%] p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-300"
                {...globalRevealProps}
              >
                <h3 className="font-bold text-3xl md:text-4xl mb-4">Custom Operations</h3>
                <p className="font-mono text-sm text-gray-500 uppercase max-w-lg">
                  Bespoke software engineered to streamline your unique internal workflows.
                </p>
              </motion.div>
              <motion.div 
                className="w-full md:w-[40%] p-8 md:p-12 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                {...globalRevealProps}
              >
                <motion.ul 
                  className="space-y-6 font-mono text-sm uppercase"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={containerVariants}
                >
                  {['Web & Mobile Apps', 'Desktop Applications', 'Cloud Infrastructure'].map((service, index) => (
                    <li key={index} className="flex items-center">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-4 flex-shrink-0 text-black">
                        <rect x="0.5" y="0.5" width="19" height="19" stroke="currentColor" strokeWidth="1" />
                        <motion.path 
                          d="M4 10L8 14L16 6" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          variants={pathVariants}
                        />
                      </svg>
                      {service}
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
            
            {/* Row 3 */}
            <div className="flex flex-col md:flex-row">
              <motion.div 
                className="w-full md:w-[60%] p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-300"
                {...globalRevealProps}
              >
                <h3 className="font-bold text-3xl md:text-4xl mb-4">Intelligent Systems</h3>
                <p className="font-mono text-sm text-gray-500 uppercase max-w-lg">
                  Advanced integrations and data solutions to future-proof your operations.
                </p>
              </motion.div>
              <motion.div 
                className="w-full md:w-[40%] p-8 md:p-12 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                {...globalRevealProps}
              >
                <motion.ul 
                  className="space-y-6 font-mono text-sm uppercase"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={containerVariants}
                >
                  {['AI Chatbots', 'Analytics Dashboards', 'Cybersecurity Audits'].map((service, index) => (
                    <li key={index} className="flex items-center">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-4 flex-shrink-0 text-black">
                        <rect x="0.5" y="0.5" width="19" height="19" stroke="currentColor" strokeWidth="1" />
                        <motion.path 
                          d="M4 10L8 14L16 6" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          variants={pathVariants}
                        />
                      </svg>
                      {service}
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="w-full h-16 md:h-24 border-t border-b border-gray-300 bg-gray-50"></div>

        {/* Tech Stack */}
        <section className="max-w-screen-2xl mx-auto border-l border-r border-gray-300 bg-white py-12 md:py-20 relative overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="relative z-10 w-full flex flex-col items-center">
            <p className="font-mono text-sm tracking-widest text-gray-500 uppercase mb-12 text-center">Engineered With Precision</p>
            
            {/* Tracks Container */}
            <div className="w-full flex flex-col gap-10 overflow-hidden select-none">
              
              {/* Row 1 Track */}
              <div className="w-full overflow-hidden flex">
                <motion.div 
                  className="flex gap-8 w-max pr-8"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                >
                  {["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "Redis", "Docker", "AWS", "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "Redis", "Docker", "AWS"].map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="border border-gray-300 bg-white px-8 py-3 rounded-none font-mono text-xs uppercase text-black tracking-widest whitespace-nowrap shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Row 2 Track */}
              <div className="w-full overflow-hidden flex">
                <motion.div 
                  className="flex gap-8 w-max pr-8"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                >
                  {["Tailwind CSS", "Supabase", "MongoDB", "GraphQL", "OpenAI API", "TensorFlow", "Stripe", "Electron", "Kubernetes", "Tailwind CSS", "Supabase", "MongoDB", "GraphQL", "OpenAI API", "TensorFlow", "Stripe", "Electron", "Kubernetes"].map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="border border-gray-300 bg-white px-8 py-3 rounded-none font-mono text-xs uppercase text-black tracking-widest whitespace-nowrap shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        <div className="w-full h-16 md:h-24 border-t border-b border-gray-300 bg-gray-50"></div>

        {/* Showcase */}
        <section 
          className="max-w-screen-2xl mx-auto border-l border-r border-gray-300 bg-white scroll-mt-24" 
          id="showcase"
        >
          <motion.div 
            className="p-6 md:p-16 border-b border-gray-300"
            {...globalRevealProps}
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-black">Showcase</h2>
            <p className="font-mono text-sm text-gray-500 uppercase max-w-md mt-4">
              A selection of engineered platforms and high-performance digital assets built for modern enterprises.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300">
            <motion.a 
              className="block flex flex-col group hover:bg-gray-50 transition-colors bg-white overflow-hidden" 
              href="#"
              {...globalRevealProps}
            >
              <div className="overflow-hidden w-full h-48 md:h-64 border-b border-gray-300">
                <img 
                  alt="Fintech Dashboard" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  src="./project-1.jpg"
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-bold text-lg group-hover:underline decoration-2 underline-offset-4">Fintech Dashboard</h3>
                  <span className="material-symbols-outlined text-gray-300 group-hover:text-black transition-colors">arrow_outward</span>
                </div>
                <div className="font-mono text-xs tracking-widest uppercase text-gray-500 group-hover:text-black transition-colors mt-auto">
                  DETAILS <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </div>
              </div>
            </motion.a>
            <motion.a 
              className="block flex flex-col group hover:bg-gray-50 transition-colors bg-white overflow-hidden" 
              href="#"
              {...globalRevealProps}
            >
              <div className="overflow-hidden w-full h-48 md:h-64 border-b border-gray-300">
                <img 
                  alt="E-Commerce Build" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  src="./project-2.jpg"
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-bold text-lg group-hover:underline decoration-2 underline-offset-4">E-Commerce Build</h3>
                  <span className="material-symbols-outlined text-gray-300 group-hover:text-black transition-colors">arrow_outward</span>
                </div>
                <div className="font-mono text-xs tracking-widest uppercase text-gray-500 group-hover:text-black transition-colors mt-auto">
                  DETAILS <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </div>
              </div>
            </motion.a>
            <motion.a 
              className="block flex flex-col group hover:bg-gray-50 transition-colors bg-white overflow-hidden" 
              href="#"
              {...globalRevealProps}
            >
              <div className="overflow-hidden w-full h-48 md:h-64 border-b border-gray-300">
                <img 
                  alt="AI Booking System" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  src="./project-3.jpg"
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-bold text-lg group-hover:underline decoration-2 underline-offset-4">AI Booking System</h3>
                  <span className="material-symbols-outlined text-gray-300 group-hover:text-black transition-colors">arrow_outward</span>
                </div>
                <div className="font-mono text-xs tracking-widest uppercase text-gray-500 group-hover:text-black transition-colors mt-auto">
                  DETAILS <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </div>
              </div>
            </motion.a>
          </div>
        </section>

        <div className="w-full h-16 md:h-24 border-t border-b border-gray-300 bg-gray-50"></div>

        {/* Contact Section */}
        <section 
          className="max-w-screen-2xl mx-auto border-l border-r border-gray-300 bg-white scroll-mt-24" 
          id="contact"
        >
          <div className="flex flex-col md:flex-row relative">
            {/* Left Side */}
            <motion.div 
              className="w-full md:w-[50%] p-6 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-300"
              {...globalRevealProps}
            >
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-black">Let's Build Together</h2>
              <p className="font-mono text-sm text-gray-500 uppercase max-w-md mt-4">
                Initialize sequence. Send us your parameters and we will compute the optimal architecture.
              </p>
            </motion.div>
            {/* Right Side (Form) */}
            <motion.div 
              className="w-full md:w-[50%] p-6 md:p-16 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
              {...globalRevealProps}
            >
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-mono text-xs uppercase text-black mb-3" htmlFor="name">Name</label>
                    <input 
                      className="border border-gray-300 w-full p-3 bg-white outline-none focus:border-black transition-colors font-mono text-sm rounded-none" 
                      id="name" 
                      placeholder="JANE DOE" 
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase text-black mb-3" htmlFor="email">Email</label>
                    <input 
                      className="border border-gray-300 w-full p-3 bg-white outline-none focus:border-black transition-colors font-mono text-sm rounded-none" 
                      id="email" 
                      placeholder="JANE@EXAMPLE.COM" 
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase text-black mb-3" htmlFor="message">Message</label>
                  <textarea 
                    className="border border-gray-300 w-full p-3 bg-white outline-none focus:border-black transition-colors font-mono text-sm resize-none rounded-none" 
                    id="message" 
                    placeholder="TELL US ABOUT YOUR PROJECT..." 
                    rows="4"
                  />
                </div>
                <button 
                  className="w-full bg-black text-white px-6 py-4 font-mono uppercase text-sm border border-black hover:bg-white hover:text-black transition-colors mt-8" 
                  type="submit"
                >
                  Transmit Data
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="max-w-screen-2xl mx-auto w-full border-t border-l border-r border-gray-300 bg-white">
        <div className="p-6 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="font-bold text-xl tracking-tight uppercase">
            The Code Consortium
          </div>
          <div className="flex flex-wrap gap-8 font-mono text-xs uppercase">
            <a className="text-gray-500 hover:text-black transition-colors" href="#">Privacy Policy</a>
            <a className="text-gray-500 hover:text-black transition-colors" href="#">Terms of Service</a>
          </div>
          <div className="font-mono text-xs text-gray-500 uppercase">
            © 2026 The Code Consortium.<br className="md:hidden" /> Built with architectural precision.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
