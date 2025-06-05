'use client';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { faqs } from './faqData';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNoResults, setShowNoResults] = useState(false);
  const router = useRouter();

  const searchFAQs = (query: string) => {
    if (!query.trim()) return null;

    const searchTerm = query.toLowerCase().trim();

    // Search through all FAQ sections
    for (const faq of faqs) {
      // Check if title matches
      if (faq.title.toLowerCase().includes(searchTerm)) {
        return {
          faq: faq,
          matchType: 'title',
          matchText: faq.title,
        };
      }

      // Check if description matches
      if (faq.description.toLowerCase().includes(searchTerm)) {
        return {
          faq: faq,
          matchType: 'description',
          matchText: faq.description,
        };
      }

      // Check if any question matches
      for (const question of faq.questions) {
        if (question.question.toLowerCase().includes(searchTerm)) {
          return {
            faq: faq,
            matchType: 'question',
            matchText: question.question,
            questionIndex: faq.questions.indexOf(question),
          };
        }

        // Check if any answer matches
        if (question.answer.toLowerCase().includes(searchTerm)) {
          return {
            faq: faq,
            matchType: 'answer',
            matchText: question.answer,
            questionIndex: faq.questions.indexOf(question),
          };
        }
      }
    }

    return null;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    const searchResult = searchFAQs(searchQuery);

    if (searchResult) {
      setShowNoResults(false);
      // Navigate to the FAQ page with search parameters
      const searchParams = new URLSearchParams({
        q: searchQuery,
        highlight: 'true',
      });

      if (searchResult.questionIndex !== undefined) {
        searchParams.set(
          'questionIndex',
          searchResult.questionIndex.toString()
        );
      }

      router.push(`/faqs/${searchResult.faq.slug}?${searchParams.toString()}`);
    } else {
      // Show no results message briefly, then redirect
      setShowNoResults(true);
      setTimeout(() => {
        setShowNoResults(false);
        // Redirect to general FAQs page with search term
        router.push(
          `/faqs/general?q=${encodeURIComponent(searchQuery)}&highlight=true`
        );
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e as any);
    }
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
            onKeyPress={handleKeyPress}
            placeholder="Search FAQs..."
            className="block w-full pl-10 pr-4 py-3 border border-white/10 rounded-2xl bg-black focus:ring-primary text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:border-transparent shadow-sm transition-all duration-200 ease-in-out"
          />
        </div>
      </form>

      {showNoResults && (
        <div className="text-center mt-4 p-4 bg-gray-900/50 border border-white/10 rounded-lg">
          <p className="text-yellow-400 text-sm">
            No exact match found for "{searchQuery}". Redirecting to general
            FAQs where you can use the search feature...
          </p>
        </div>
      )}

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
