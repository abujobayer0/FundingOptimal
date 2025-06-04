import React from 'react';
import { Footer } from '../_components/ui';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Footer showBanner={false} />
    </div>
  );
};

export default Layout;
