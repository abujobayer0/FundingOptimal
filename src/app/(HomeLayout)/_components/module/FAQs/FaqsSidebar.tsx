"use client";

import React from "react";
import { categories } from "./data";
import SearchBar from "./SearchBar";
import { usePathname, useRouter } from "next/navigation";

interface FaqsSidebarProps {
  selectedCategory: string;
  onCategorySelect: (cat: string) => void;
  search: string;
  onSearchChange: (v: string) => void;
}

const FaqsSidebar = ({
  selectedCategory,
  onCategorySelect,
  search,
  onSearchChange,
}: FaqsSidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const isDetailsPage = /^\/faqs\/[\w-]+$/.test(pathname || "");

  const handleCategoryClick = (cat: string) => {
    if (isDetailsPage) {
      // Go to /faqs?category=cat
      const url = `/faqs${
        cat && cat !== "All FAQs" ? `?category=${encodeURIComponent(cat)}` : ""
      }`;
      router.push(url);
    } else {
      onCategorySelect(cat);
    }
  };

  return (
    <aside className="w-full md:max-w-xs p-5 flex flex-col gap-6 border-r border-gray-700/40  top-10">
      {/* Search Bar */}
      <SearchBar value={search} onChange={onSearchChange} />
      <div className="flex justify-start mt-3 items-center w-full">
        <h5 className="text-sm text-gray-500 font-bold bg-gray-800/60 px-7 py-1 rounded-full text-center border border-gray-700/30">
          {" "}
          FAQs / <span className="text-gray-400 pl-1">{selectedCategory}</span>
        </h5>
      </div>
      {/* Category Buttons */}
      <div className="flex flex-col gap-5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`text-left px-4 py-2 rounded-lg font-medium transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-primary/40 hover:bg-primary/10 hover:text-primary/90
              ${
                selectedCategory === cat
                  ? "border-primary/50 bg-primary/10 text-primary/80 font-bold shadow-lg"
                  : "border-transparent text-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Help Box */}
      <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-gray-900/30 border border-primary/20 text-center shadow-lg">
        <div className="text-gray-100 font-semibold mb-2">
          Do you still need help?
        </div>
        <div className="text-gray-400 text-sm mb-4">
          Everything you need to know about our platform, evaluations and how to
          set up your FundingOptimal account.
        </div>
        <a
          href="/contact-us"
          className="inline-block w-full px-4 py-2 rounded-lg bg-primary text-gray-900 font-bold transition-all duration-200 hover:bg-primary/80 shadow"
        >
          Speak to us
        </a>
      </div>
    </aside>
  );
};

export default FaqsSidebar;
