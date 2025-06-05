'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import NavLink from './NavLink';
import logo from '@/assets/fundingoptimal-logo.png';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-auto bg-black">
      <header className="text-foreground shadow-sm max-w-7xl mx-auto py-6 relative overflow-hidden">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-lg font-bold text-foreground"
              onClick={closeMenu}
            >
              <div className="flex-shrink-0 flex flex-col items-center gap-1">
                <Image src={logo} alt="FundingOptimal" width={30} height={30} />
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[16px]">FUNDINGOPTIMAL</p>
                  <p className="text-[10px] -mt-3 text-gray-400">
                    We Fund the Fearless
                  </p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/become-a-partner">Become A Partner</NavLink>
              <NavLink href="/about-us">About Us</NavLink>
              <NavLink href="/contact-us">Contact Us</NavLink>
              <NavLink href="/faqs">FAQs</NavLink>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex space-x-4">
              <Link
                href="https://dashboard.fundingoptimal.com/"
                target="_blank"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2, ease: 'easeOut' },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative rounded-md bg-primary px-4 py-2 text-sm text-black shadow-sm transition-all duration-500 ease-in-out overflow-hidden"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-primary to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-md bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />

                  {/* Enhanced glow */}
                  <div className="absolute inset-0 rounded-md shadow-[0_0_0_1px_rgba(18,255,142,0.5)] group-hover:shadow-[0_0_0_1px_rgba(18,255,142,0.8),0_0_20px_rgba(18,255,142,0.4),0_0_40px_rgba(18,255,142,0.2)] transition-shadow duration-500" />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />

                  <span className="relative z-10 font-medium group-hover:text-black transition-colors duration-300">
                    Login
                  </span>
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden mobile-menu-container">
              <button
                onClick={toggleMenu}
                className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-200"
                aria-expanded="false"
                aria-label="Toggle menu"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger Icon with Animation */}
                <div className="w-6 h-6 relative">
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                      isMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out translate-y-2 ${
                      isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                      isMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          {/* Background Overlay */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeMenu}
          />

          {/* Mobile Menu Panel */}
          <div
            className={`mobile-menu-container absolute top-0 right-0 h-screen w-80 max-w-[85vw] bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border-l border-gray-700/50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700/50 flex-shrink-0">
              <div className="flex items-center space-x-3">
                <Image src={logo} alt="FundingOptimal" width={24} height={24} />
                <span className="text-white font-semibold text-lg">Menu</span>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col min-h-0">
              <nav className="flex-1 px-6 py-4 space-y-2 overflow-y-auto min-h-0">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/become-a-partner', label: 'Become A Partner' },
                  { href: '/about', label: 'About Us' },
                  { href: '/contact', label: 'Contact Us' },
                  { href: '/faqs', label: 'FAQs' },
                ].map((item, index) => (
                  <div
                    key={item.href}
                    className={`transform transition-all duration-300 ease-out ${
                      isMenuOpen
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/10 transition-all duration-200 group"
                    >
                      <span className="flex items-center justify-between">
                        {item.label}
                        <svg
                          className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                ))}
              </nav>

              <div className="px-6 py-3 pb-8 border-t border-gray-700/50 space-y-3 flex-shrink-0">
                <div
                  className={`transform transition-all duration-300 ease-out ${
                    isMenuOpen
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: '250ms' }}
                >
                  <motion.button
                    onClick={closeMenu}
                    whileHover={{
                      scale: 1.02,
                      y: -1,
                      transition: { duration: 0.2, ease: 'easeOut' },
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full rounded-lg border border-gray-600 px-4 py-3 text-sm font-medium text-white transition-all duration-500 ease-in-out overflow-hidden"
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Border glow effect */}
                    <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/50 transition-colors duration-300" />

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />

                    <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                      Login
                    </span>
                  </motion.button>
                </div>
                <div
                  className={`transform transition-all duration-300 ease-out ${
                    isMenuOpen
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: '300ms' }}
                >
                  <motion.button
                    onClick={closeMenu}
                    whileHover={{
                      scale: 1.02,
                      y: -1,
                      transition: { duration: 0.2, ease: 'easeOut' },
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full rounded-lg bg-primary px-4 py-3 text-sm font-medium text-black shadow-sm transition-all duration-500 ease-in-out overflow-hidden"
                  >
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-primary to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-lg bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />

                    <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                      Dashboard
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
