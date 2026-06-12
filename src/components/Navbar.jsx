import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const chars = '!<>-_\\/[]{}—=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function ScrambleLink({ to, onClick, children }) {
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
    </Link>
  );
}

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-300 h-20">
      <div className="max-w-screen-2xl mx-auto h-full flex justify-between items-center px-6 md:px-12">
        <Link to="/" className="flex items-center gap-4">
          <img
            alt="Logo"
            className="h-12 w-auto object-contain"
            src="/logo.png"
          />
          <div className="font-mono text-base md:text-lg font-semibold tracking-widest text-gray-800 uppercase">The Code Consortium</div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <ScrambleLink
            to={isHomePage ? "#about" : "/#about"}
            onClick={(e) => handleLinkClick(e, 'about')}
          >
            About
          </ScrambleLink>
          <ScrambleLink
            to={isHomePage ? "#services" : "/#services"}
            onClick={(e) => handleLinkClick(e, 'services')}
          >
            Services
          </ScrambleLink>
          <ScrambleLink
            to={isHomePage ? "#showcase" : "/#showcase"}
            onClick={(e) => handleLinkClick(e, 'showcase')}
          >
            Showcase
          </ScrambleLink>
          <ScrambleLink
            to={isHomePage ? "#contact" : "/#contact"}
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            Contact
          </ScrambleLink>
          <Link
            className="px-6 py-2 font-mono uppercase text-sm hover:bg-black hover:text-white transition-colors bg-black text-white"
            to={isHomePage ? "#contact" : "/#contact"}
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            Inquire
          </Link>
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
          <Link
            className="font-mono uppercase text-sm text-gray-500 hover:text-black transition-colors"
            to={isHomePage ? "#about" : "/#about"}
            onClick={(e) => handleLinkClick(e, 'about')}
          >
            About
          </Link>
          <Link
            className="font-mono uppercase text-sm text-gray-500 hover:text-black transition-colors"
            to={isHomePage ? "#services" : "/#services"}
            onClick={(e) => handleLinkClick(e, 'services')}
          >
            Services
          </Link>
          <Link
            className="font-mono uppercase text-sm text-gray-500 hover:text-black transition-colors"
            to={isHomePage ? "#showcase" : "/#showcase"}
            onClick={(e) => handleLinkClick(e, 'showcase')}
          >
            Showcase
          </Link>
          <Link
            className="font-mono uppercase text-sm text-gray-500 hover:text-black transition-colors"
            to={isHomePage ? "#contact" : "/#contact"}
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            Contact
          </Link>
          <Link
            className="px-6 py-3 font-mono uppercase text-sm text-center bg-black text-white hover:bg-white hover:text-black border border-black transition-colors"
            to={isHomePage ? "#contact" : "/#contact"}
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            Inquire
          </Link>
        </div>
      )}
    </nav>
  );
}
