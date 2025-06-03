import React from 'react';

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
      {children}
    </div>
  );
};

export default Layout;
