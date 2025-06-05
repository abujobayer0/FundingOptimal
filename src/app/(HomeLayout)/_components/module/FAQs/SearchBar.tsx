"use client";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const SearchBar = ({
  value = "",
  onChange,
}: {
  value?: string;
  onChange?: (v: string) => void;
}) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your search logic here
    console.log("Searching for:", value);
  };

  return (
    <div className="w-full mx-auto">
      <form onSubmit={handleSearch} className="relative max-w-md mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={value}
            onChange={handleInput}
            placeholder="Search FAQs..."
            className="block w-full pl-10 pr-4 py-2 ring-1 ring-white/10 rounded-full bg-black focus:ring-primary/50 text-white placeholder-gray-500 focus:outline-none focus:ring-1shadow-sm transition-all duration-200 ease-in-out"
          />
        </div>
      </form>

      <p className="text-center text-xs text-gray-400 mt-3">
        Got a specific question?
        <Link
          href={"/contact-us"}
          className="text-primary hover:underline ml-1"
        >
          Contact us
        </Link>
      </p>
    </div>
  );
};

export default SearchBar;
