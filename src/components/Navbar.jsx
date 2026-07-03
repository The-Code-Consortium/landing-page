import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const chars = '!<>-_\\/[]{}—=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function ScrambleLink({ to, onClick, children, isDarkTheme }) {
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
    <Link
      to={to}
      onClick={onClick}
      onMouseEnter={startScramble}
      onMouseLeave={stopScramble}
      className={`font-mono uppercase text-sm transition-colors duration-200 cursor-pointer select-none tracking-widest ${
        isDarkTheme ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-black'
      }`}
    >
      {displayText.split('').map((char, index) => {
        const isScrambled = scrambledIndices.has(index);
        return (
          <span
            key={index}
            className={isScrambled ? 'text-blue-500 font-bold' : 'text-inherit'}
          >
            {char}
          </span>
        );
      })}
    </Link>
  );
}

export default function Navbar({ isDarkTheme = false, hideOnScroll = false }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!hideOnScroll) {
      setIsVisible(true);
      return;
    }
    const diff = latest - lastScrollY.current;
    if (latest < 50) {
      setIsVisible(true);
    } else if (diff > 10) {
      setIsVisible(false); // scroll down
    } else if (diff < -10) {
      setIsVisible(true); // scroll up
    }
    lastScrollY.current = latest;
  });

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Automatically scroll to hash element on homepage load/change
  useEffect(() => {
    if (isHomePage && location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location, isHomePage]);

  const handleLinkClick = (e, sectionId) => {
    if (isHomePage) {
      e.preventDefault();
      handleScrollTo(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      animate={{ y: isVisible ? 0 : -80 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 h-20 transition-colors duration-300 ${
        isDarkTheme 
          ? 'bg-[#0b0f19]/90 border-b border-white/10 backdrop-blur-md' 
          : 'bg-white border-b border-gray-300'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto h-full flex justify-between items-center px-6 md:px-12">
        <Link to="/" className="flex items-center gap-4">
          <img
            alt="Logo"
            className="h-12 w-auto object-contain"
            src="/logo.png"
          />
          <div className={`font-mono text-base md:text-lg font-semibold tracking-widest uppercase transition-colors duration-300 ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>The Code Consortium</div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <ScrambleLink
            to={isHomePage ? "#about" : "/#about"}
            onClick={(e) => handleLinkClick(e, 'about')}
            isDarkTheme={isDarkTheme}
          >
            About
          </ScrambleLink>
          <ScrambleLink
            to={isHomePage ? "#services" : "/#services"}
            onClick={(e) => handleLinkClick(e, 'services')}
            isDarkTheme={isDarkTheme}
          >
            Services
          </ScrambleLink>
          <ScrambleLink
            to={isHomePage ? "#showcase" : "/#showcase"}
            onClick={(e) => handleLinkClick(e, 'showcase')}
            isDarkTheme={isDarkTheme}
          >
            Showcase
          </ScrambleLink>
          <ScrambleLink
            to={isHomePage ? "#contact" : "/#contact"}
            onClick={(e) => handleLinkClick(e, 'contact')}
            isDarkTheme={isDarkTheme}
          >
            Contact
          </ScrambleLink>
          <Link
            className={`px-6 py-2 font-mono uppercase text-sm transition-all duration-200 border ${
              isDarkTheme 
                ? 'bg-blue-600 border-blue-600 text-white hover:bg-transparent hover:text-blue-400' 
                : 'bg-black text-white border-black hover:bg-white hover:text-black'
            }`}
            to={isHomePage ? "#contact" : "/#contact"}
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            Inquire
          </Link>
        </div>

        <button
          className={`md:hidden focus:outline-none transition-colors duration-300 ${isDarkTheme ? 'text-white' : 'text-black'}`}
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
        <div className={`md:hidden absolute top-20 left-0 w-full z-50 flex flex-col p-6 space-y-4 shadow-lg border-b transition-colors duration-300 ${
          isDarkTheme ? 'bg-[#0b0f19] border-white/10 text-white' : 'bg-white border-gray-300'
        }`}>
          <Link
            className={`font-mono uppercase text-sm transition-colors duration-200 ${
              isDarkTheme ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-black'
            }`}
            to={isHomePage ? "#about" : "/#about"}
            onClick={(e) => handleLinkClick(e, 'about')}
          >
            About
          </Link>
          <Link
            className={`font-mono uppercase text-sm transition-colors duration-200 ${
              isDarkTheme ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-black'
            }`}
            to={isHomePage ? "#services" : "/#services"}
            onClick={(e) => handleLinkClick(e, 'services')}
          >
            Services
          </Link>
          <Link
            className={`font-mono uppercase text-sm transition-colors duration-200 ${
              isDarkTheme ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-black'
            }`}
            to={isHomePage ? "#showcase" : "/#showcase"}
            onClick={(e) => handleLinkClick(e, 'showcase')}
          >
            Showcase
          </Link>
          <Link
            className={`font-mono uppercase text-sm transition-colors duration-200 ${
              isDarkTheme ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-black'
            }`}
            to={isHomePage ? "#contact" : "/#contact"}
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            Contact
          </Link>
          <Link
            className={`px-6 py-3 font-mono uppercase text-sm text-center border transition-all duration-200 ${
              isDarkTheme 
                ? 'bg-blue-600 border-blue-600 text-white hover:bg-transparent hover:text-blue-400' 
                : 'bg-black text-white border-black hover:bg-white hover:text-black'
            }`}
            to={isHomePage ? "#contact" : "/#contact"}
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            Inquire
          </Link>
        </div>
      )}
    </motion.nav>
  );
}
