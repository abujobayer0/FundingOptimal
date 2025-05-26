'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import logo from '@/assets/fundingoptimal-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <header className="text-foreground shadow-sm py-6 relative overflow-hidden">
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
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
              <NavLink href="/faqs">FAQs</NavLink>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex space-x-4">
              <button className="rounded-md border border-white px-4 py-2 text-sm font-medium text-white hover:text-primary hover:border-primary transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20">
                Login
              </button>
              <button className="rounded-md bg-primary px-4 py-2 text-sm text-black shadow-sm hover:bg-opacity-80 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20">
                Dashboard
              </button>
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
            className={`mobile-menu-container absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border-l border-gray-700/50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
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

            {/* Menu Content */}
            <div className="flex flex-col h-full">
              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-8 space-y-2">
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

              {/* Action Buttons */}
              <div className="px-6 py-6 border-t border-gray-700/50 space-y-3">
                <div
                  className={`transform transition-all duration-300 ease-out ${
                    isMenuOpen
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: '250ms' }}
                >
                  <button
                    onClick={closeMenu}
                    className="w-full rounded-lg border border-gray-600 px-4 py-3 text-sm font-medium text-white hover:text-primary hover:border-primary transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20"
                  >
                    Login
                  </button>
                </div>
                <div
                  className={`transform transition-all duration-300 ease-out ${
                    isMenuOpen
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: '300ms' }}
                >
                  <button
                    onClick={closeMenu}
                    className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-medium text-black shadow-sm hover:bg-opacity-80 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20"
                  >
                    Dashboard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
