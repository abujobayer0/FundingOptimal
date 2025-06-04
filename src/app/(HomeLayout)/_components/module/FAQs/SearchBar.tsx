'use client';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="max-w-7xl mt-10  mx-auto px-4">
      <form onSubmit={handleSearch} className="relative max-w-md mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs..."
            className="block w-full pl-10 pr-4 py-3 border border-white/10 rounded-2xl bg-black focus:ring-primary text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:border-transparent shadow-sm transition-all duration-200 ease-in-out"
          />
        </div>
      </form>

      <p className="text-center text-sm text-gray-400 mt-4">
        Got a specific question?
        <Link
          href={'/contact-us'}
          className="text-primary hover:underline ml-1"
        >
          Contact us
        </Link>
      </p>
    </div>
  );
};

export default SearchBar;
