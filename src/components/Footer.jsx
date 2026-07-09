import { Link } from 'react-router-dom';

export default function Footer({ isDarkTheme = false, theme = "" }) {
  const isLightFintech = theme === 'light-fintech';
  const isSalon = theme === 'salon';

  return (
    <footer className={`max-w-screen-2xl mx-auto w-full border-t border-l border-r transition-colors duration-300 ${isLightFintech
      ? 'border-orange-200/40 bg-[#FFF7ED]'
      : isSalon
        ? 'border-indigo-500/20 bg-slate-900'
        : isDarkTheme
          ? 'border-white/10 bg-[#0b0f19]'
          : 'border-gray-300 bg-white'
      }`}>
      <div className="p-6 md:p-12 flex flex-col md:flex-row justify-between items-center md:items-center gap-4 md:gap-8 text-center md:text-left">
        <div className={`font-bold text-xl tracking-tight uppercase transition-colors duration-300 w-full md:w-auto text-center md:text-left ${isLightFintech
          ? 'text-slate-800'
          : isDarkTheme || isSalon ? 'text-white' : 'text-gray-900'
          }`}>
          The Code Consortium
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 font-mono text-xs uppercase">
          <Link className={`transition-colors duration-300 ${isLightFintech
            ? 'text-slate-600 hover:text-orange-600 font-semibold'
            : isSalon
              ? 'text-slate-350 hover:text-indigo-400 font-semibold'
              : isDarkTheme ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-black'
            }`} to="/privacy">Privacy Policy</Link>
          <Link className={`transition-colors duration-300 ${isLightFintech
            ? 'text-slate-600 hover:text-orange-600 font-semibold'
            : isSalon
              ? 'text-slate-350 hover:text-indigo-400 font-semibold'
              : isDarkTheme ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-black'
            }`} to="/terms">Terms of Service</Link>
        </div>
        <div className={`font-mono text-xs uppercase transition-colors duration-300 ${isLightFintech ? 'text-slate-500' : isDarkTheme || isSalon ? 'text-slate-500' : 'text-gray-500'
          }`}>
          © 2026 The Code Consortium.<br className="md:hidden" /> Built with architectural precision.
        </div>
      </div>
    </footer>
  );
}
