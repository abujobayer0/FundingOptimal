import React from 'react';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="fixed inset-0 w-screen h-screen flex flex-col justify-between overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 60% 60% at 50% 0%, #0a2f1e 10%, #000 100%)',
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,255,142,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(18,255,142,0.07)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none z-0"></div>

      {/* Back to Home Link */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-10 flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200 group"
      >
        <svg
          className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span className="text-sm font-medium">Back to Home</span>
      </Link>

      {children}
    </div>
  );
};

export default Layout;
