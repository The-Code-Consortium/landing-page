import React from 'react';

export default function Footer() {
  return (
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
  );
}
