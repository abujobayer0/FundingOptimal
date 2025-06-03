"use client";
import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
      >
        <span className="sr-only">Open main menu</span>
        {!isOpen ? (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background shadow-lg z-10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-foreground hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/become-a-partner"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-foreground hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Become A Partner
            </Link>
            <Link
              href="/about-us"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-foreground hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-foreground hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/faqs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-foreground hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </Link>
            <div className="pt-4 pb-2 border-t border-gray-700 space-y-1">
              <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-foreground hover:bg-gray-800">
                Login
              </button>
              <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-primary text-white shadow-sm hover:bg-primary/80">
                Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
