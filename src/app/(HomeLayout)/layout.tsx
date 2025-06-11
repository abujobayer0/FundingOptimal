'use client';
import React, { ReactNode, Suspense } from 'react';
import { Navbar } from './_components';
import ScrollHandler from './_components/module/home/ScrollHandler';

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>
      <Navbar />
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      {children}
    </div>
  );
}
