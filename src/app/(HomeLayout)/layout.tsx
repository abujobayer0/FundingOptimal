'use client';
import React, { ReactNode } from 'react';
import { Navbar } from './_components';
import ScrollHandler from './_components/module/home/ScrollHandler';

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>
      <Navbar />
      <ScrollHandler />
      {children}
    </div>
  );
}
