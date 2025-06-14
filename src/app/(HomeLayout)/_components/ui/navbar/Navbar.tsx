'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { User, LogOut, LogIn, UserPlus, Users } from 'lucide-react';
import NavLink from './NavLink';
import logo from '@/assets/fundingoptimal-logo.png';
import { useClientAuth } from '@/hooks/useClientAuth';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const { isAuthenticated, logout, user } = useClientAuth();

  // Handle scroll behavior for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setShowNavbar(true);
      }
      // Hide navbar when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        showProfileDropdown &&
        !target.closest('.profile-dropdown-container')
      ) {
        setShowProfileDropdown(false);
      }
    };

    if (showProfileDropdown) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showProfileDropdown]);

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

  const handleLogout = async () => {
    await logout();
    setShowProfileDropdown(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-auto bg-black transition-transform duration-300 ease-in-out ${
        showNavbar ? 'translate-y-0' : 'md:-translate-y-full'
      }`}
    >
      <header className="text-foreground shadow-sm max-w-7xl mx-auto py-6 relative">
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

            <div className="hidden md:flex space-x-4">
              {isAuthenticated ? (
                /* Profile Dropdown */
                <div className="relative profile-dropdown-container">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2, ease: 'easeOut' },
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                    className="group relative rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-black shadow-sm transition-all duration-300 ease-in-out overflow-hidden hover:shadow-[0_0_20px_rgba(18,255,142,0.4)] flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    <span className="relative z-10 transition-colors duration-300">
                      Profile
                    </span>
                  </motion.button>

                  {/* Dropdown Menu */}
                  {showProfileDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl py-2 z-[60]">
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-primary/20 transition-colors"
                        onClick={() => setShowProfileDropdown(false)}
                      >
                        <User className="w-4 h-4" />
                        My Profile
                      </Link>
                      {/* Show admin link only for admin users */}
                      {user?.role === 'admin' && (
                        <Link
                          href="/admin"
                          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-primary/20 transition-colors"
                          onClick={() => setShowProfileDropdown(false)}
                        >
                          <Users className="w-4 h-4" />
                          All Users
                        </Link>
                      )}
                      <Link
                        href="https://dashboard.fundingoptimal.com"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-primary/20 transition-colors"
                        onClick={() => setShowProfileDropdown(false)}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                        Dashboard
                      </Link>
                      <hr className="my-2 border-white/10" />
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/20 transition-colors w-full text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* Login/Signup Buttons */
                <>
                  <Link href="/auth/login">
                    <motion.button
                      whileHover={{
                        transition: { duration: 0.2, ease: 'easeOut' },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative rounded-lg bg-transparent border border-white px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 ease-in-out overflow-hidden hover:bg-white/10 hover:text-white flex items-center gap-2"
                    >
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left" />

                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(18,255,142,0.3)]" />

                      <LogIn className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="relative z-10 transition-colors duration-300">
                        Login
                      </span>
                    </motion.button>
                  </Link>
                  <Link href="/auth/register">
                    <motion.button
                      whileHover={{
                        transition: { duration: 0.2, ease: 'easeOut' },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-black shadow-sm transition-all duration-300 ease-in-out overflow-hidden hover:shadow-[0_0_20px_rgba(18,255,142,0.4)] flex items-center gap-2"
                    >
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-primary to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />

                      <UserPlus className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="relative z-10 transition-colors duration-300">
                        Sign Up
                      </span>
                    </motion.button>
                  </Link>
                </>
              )}
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
                {isAuthenticated ? (
                  /* Mobile Profile Section */
                  <>
                    <div
                      className={`transform transition-all duration-300 ease-out ${
                        isMenuOpen
                          ? 'translate-x-0 opacity-100'
                          : 'translate-x-8 opacity-0'
                      }`}
                      style={{ transitionDelay: '250ms' }}
                    >
                      <Link href="/profile" onClick={closeMenu}>
                        <motion.button
                          whileHover={{
                            scale: 1.02,
                            y: -1,
                            transition: { duration: 0.2, ease: 'easeOut' },
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative w-full rounded-lg bg-primary px-4 py-3 text-sm font-medium text-black shadow-sm transition-all duration-300 ease-in-out overflow-hidden hover:shadow-[0_0_20px_rgba(18,255,142,0.4)] flex items-center justify-center gap-2"
                        >
                          <User className="w-4 h-4" />
                          <span className="relative z-10 transition-colors duration-300">
                            My Profile
                          </span>
                        </motion.button>
                      </Link>
                    </div>
                    <div
                      className={`transform transition-all duration-300 ease-out ${
                        isMenuOpen
                          ? 'translate-x-0 opacity-100'
                          : 'translate-x-8 opacity-0'
                      }`}
                      style={{ transitionDelay: '300ms' }}
                    >
                      <Link
                        href="https://dashboard.fundingoptimal.com"
                        onClick={closeMenu}
                      >
                        <motion.button
                          whileHover={{
                            scale: 1.02,
                            y: -1,
                            transition: { duration: 0.2, ease: 'easeOut' },
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative w-full rounded-lg bg-transparent border-2 border-primary px-4 py-3 text-sm font-medium text-primary shadow-sm transition-all duration-300 ease-in-out overflow-hidden hover:bg-primary hover:text-black flex items-center justify-center gap-2"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                          <span className="relative z-10 transition-colors duration-300">
                            Dashboard
                          </span>
                        </motion.button>
                      </Link>
                    </div>
                    <div
                      className={`transform transition-all duration-300 ease-out ${
                        isMenuOpen
                          ? 'translate-x-0 opacity-100'
                          : 'translate-x-8 opacity-0'
                      }`}
                      style={{ transitionDelay: '350ms' }}
                    >
                      <motion.button
                        whileHover={{
                          scale: 1.02,
                          y: -1,
                          transition: { duration: 0.2, ease: 'easeOut' },
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          handleLogout();
                          closeMenu();
                        }}
                        className="group relative w-full rounded-lg bg-transparent border-2 border-red-500/50 px-4 py-3 text-sm font-medium text-red-400 shadow-sm transition-all duration-300 ease-in-out overflow-hidden hover:bg-red-500/10 hover:border-red-500 flex items-center justify-center gap-2"
                      >
                        <LogOut className="w-4 h-4" />
                        <span className="relative z-10 transition-colors duration-300">
                          Logout
                        </span>
                      </motion.button>
                    </div>
                  </>
                ) : (
                  /* Mobile Login/Signup Section */
                  <>
                    <div
                      className={`transform transition-all duration-300 ease-out ${
                        isMenuOpen
                          ? 'translate-x-0 opacity-100'
                          : 'translate-x-8 opacity-0'
                      }`}
                      style={{ transitionDelay: '250ms' }}
                    >
                      <Link href="/auth/login" onClick={closeMenu}>
                        <motion.button
                          whileHover={{
                            scale: 1.02,
                            y: -1,
                            transition: { duration: 0.2, ease: 'easeOut' },
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative w-full rounded-lg bg-transparent border border-white px-4 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 ease-in-out overflow-hidden hover:bg-white/10 hover:text-white flex items-center justify-center gap-2"
                        >
                          {/* Animated background */}
                          <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left" />

                          {/* Glow effect */}
                          <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(18,255,142,0.3)]" />

                          <LogIn className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          <span className="relative z-10 transition-colors duration-300">
                            Login
                          </span>
                        </motion.button>
                      </Link>
                    </div>
                    <div
                      className={`transform transition-all duration-300 ease-out ${
                        isMenuOpen
                          ? 'translate-x-0 opacity-100'
                          : 'translate-x-8 opacity-0'
                      }`}
                      style={{ transitionDelay: '300ms' }}
                    >
                      <Link href="/auth/register" onClick={closeMenu}>
                        <motion.button
                          whileHover={{
                            scale: 1.02,
                            y: -1,
                            transition: { duration: 0.2, ease: 'easeOut' },
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative w-full rounded-lg bg-primary px-4 py-3 text-sm font-medium text-black shadow-sm transition-all duration-300 ease-in-out overflow-hidden hover:shadow-[0_0_20px_rgba(18,255,142,0.4)] flex items-center justify-center gap-2"
                        >
                          {/* Animated background gradient */}
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-primary to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Shimmer effect */}
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />

                          <UserPlus className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          <span className="relative z-10 transition-colors duration-300">
                            Sign Up
                          </span>
                        </motion.button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
