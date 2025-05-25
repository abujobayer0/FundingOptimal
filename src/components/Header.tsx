'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import logo from '@/assets/fundingoptimal-logo.png';
const Header = () => {
  return (
    <div
      className="absolute top-0 z-10 inset-0"
      style={{
        background:
          'radial-gradient(ellipse 30% 30% at 50% -10%, rgba(18, 255, 142, 0.25) 5%,#050505 80%)',
      }}
    >
      <header className="text-foreground shadow-sm py-6 relative overflow-hidden">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-lg font-bold text-foreground">
              <div className="flex-shrink-0 flex  flex-col items-center gap-1">
                <Image src={logo} alt="FundingOptimal" width={30} height={30} />
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[16px]">FUNDINGOPTIMAL</p>
                  <p className="text-[10px] -mt-3 text-gray-400">
                    We Fund the Fearless
                  </p>
                </div>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/become-a-partner">Become A Partner</NavLink>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
              <NavLink href="/faqs">FAQs</NavLink>
            </nav>
            <div className="hidden md:flex space-x-4">
              <button className="rounded-md border border-white px-4 py-2 text-sm font-medium text-white hover:text-primary hover:border-primary transition-all duration-300 ease-in-out  hover:shadow-lg hover:shadow-primary/20">
                Login
              </button>
              <button className="rounded-md bg-primary px-4 py-2 text-sm text-black shadow-sm hover:bg-opacity-80 transition-all duration-300 ease-in-out  hover:shadow-lg hover:shadow-primary/20">
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
