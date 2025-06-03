import React, { ReactNode } from 'react';

export const metadata = {
  title: 'Sign In to FundingOptimal Dashboard',
  description:
    'Access your trading dashboard by signing in with your credentials. Manage your trading accounts, track performance, and access exclusive trading features with FundingOptimal.',
  keywords: [
    'trading dashboard login',
    'sign in',
    'trading account access',
    'secure login',
    'trading platform',
    'account authentication',
    'trading dashboard',
    'FundingOptimal',
  ],
};

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
