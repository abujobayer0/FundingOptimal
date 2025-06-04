'use client';
import React, { ReactNode } from 'react';
import { Navbar } from './_components';

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
