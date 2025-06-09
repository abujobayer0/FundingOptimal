'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import {
  useParams,
  useRouter,
  useSearchParams,
  usePathname,
} from 'next/navigation';
import { faqs } from '../../_components/module/FAQs/faqData';
import Link from 'next/link';

// Utility function to highlight search terms
const highlightText = (text: string, searchTerm: string) => {
  if (!searchTerm) return text;

  const regex = new RegExp(
    `(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`,
    'gi'
  );
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (regex.test(part)) {
      return (
        <mark
          key={index}
          className="bg-primary/30 text-primary-foreground px-1 rounded"
        >
          {part}
        </mark>
      );
    }
    return part;
  });
};

// Search function - same as SearchBar
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

// FAQ Question Component
const FAQQuestionComponent = ({
  question,
  answer,
  isOpen,
  onToggle,
  searchTerm = '',
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  searchTerm?: string;
}) => {
  return (
    <div className="border border-white/10 rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden mb-4">
      <button
        onClick={onToggle}
        className="w-full p-4 sm:p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
      >
        <h3 className="text-base sm:text-lg font-semibold text-white pr-4">
          {highlightText(question, searchTerm)}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-300 leading-relaxed text-sm sm:text-base">
              {highlightText(answer, searchTerm)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// FAQ Card Component for main display
const FAQCard = ({
  title,
  description,
  badge,
  onExpand,
  searchTerm = '',
}: {
  title: string;
  description: string;
  badge: string;
  onExpand: () => void;
  searchTerm?: string;
}) => {
  return (
    <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 group">
      <div className="mb-4">
        <span className="inline-block bg-primary text-black px-3 py-1 rounded-lg text-sm font-medium mb-4">
          {badge}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-primary/90 transition-colors">
          {highlightText(title, searchTerm)}
        </h2>
        <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
          {highlightText(description, searchTerm)}
        </p>
      </div>

      <button
        onClick={onExpand}
        className="bg-primary hover:bg-primary/80 text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 text-sm sm:text-base"
      >
        Read More
      </button>
    </div>
  );
};

const Page = () => {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(
    null
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentSlug = params.slug as string;
  const currentFAQ = faqs.find(
    (faq) => faq.slug === currentSlug || faq.id === currentSlug
  );

  // Handle URL search parameters
  const urlSearchTerm = searchParams.get('q') || '';
  const shouldHighlight = searchParams.get('highlight') === 'true';
  const questionIndex = searchParams.get('questionIndex');

  // Reset state when pathname changes (navigating between FAQ sections)
  useEffect(() => {
    // Always reset these when pathname changes
    setOpenQuestionIndex(null);
    setIsMobileMenuOpen(false);

    // Only reset search query if there are no URL search parameters
    if (!urlSearchTerm) {
      setSearchQuery('');
    }
  }, [pathname]);

  // Handle URL search parameters - separate effect
  useEffect(() => {
    if (urlSearchTerm && shouldHighlight && currentFAQ) {
      setSearchQuery(urlSearchTerm);

      // Auto-expand the matching question if questionIndex is provided
      if (questionIndex !== null && questionIndex !== undefined) {
        const originalIndex = parseInt(questionIndex, 10);
        if (
          !isNaN(originalIndex) &&
          originalIndex >= 0 &&
          originalIndex < currentFAQ.questions.length
        ) {
          // Get the original question from the FAQ
          const originalQuestion = currentFAQ.questions[originalIndex];

          // Find this question's position in the current filtered results
          // We need to use the same filtering logic as the main component
          const currentFilteredQuestions = currentFAQ.questions.filter(
            (q) =>
              q.question.toLowerCase().includes(urlSearchTerm.toLowerCase()) ||
              q.answer.toLowerCase().includes(urlSearchTerm.toLowerCase())
          );

          const filteredIndex = currentFilteredQuestions.findIndex(
            (q) =>
              q.question === originalQuestion.question &&
              q.answer === originalQuestion.answer
          );

          if (filteredIndex >= 0) {
            setOpenQuestionIndex(filteredIndex);

            // Scroll to the question after a brief delay
            setTimeout(() => {
              const questionElements = document.querySelectorAll(
                '[data-question-index]'
              );
              const targetElement = questionElements[filteredIndex];
              if (targetElement) {
                targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              }
            }, 500);
          }
        }
      }
    } else if (!urlSearchTerm) {
      // If there's no URL search term, reset the search query
      setSearchQuery('');
    }
  }, [urlSearchTerm, shouldHighlight, questionIndex, currentFAQ]);

  // Handle search functionality - same as SearchBar
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      // If empty search, reset everything
      setSearchQuery('');
      setOpenQuestionIndex(null);
      // Clear URL parameters
      router.push(pathname);
      return;
    }

    const searchResult = searchFAQs(query);

    if (searchResult) {
      // Navigate to the FAQ page with search parameters
      const searchParams = new URLSearchParams({
        q: query,
        highlight: 'true',
      });

      if (searchResult.questionIndex !== undefined) {
        searchParams.set(
          'questionIndex',
          searchResult.questionIndex.toString()
        );
      }

      const targetPath = `/faqs/${
        searchResult.faq.slug
      }?${searchParams.toString()}`;

      // Always navigate to ensure URL is updated
      router.push(targetPath);
    } else {
      // If no match found in global search, filter current FAQ
      setSearchQuery(query);
      setOpenQuestionIndex(null); // Reset expansion when doing local search
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(searchQuery);
    }
  };

  const filteredQuestions = React.useMemo(() => {
    if (!currentFAQ) return [];

    return currentFAQ.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [currentFAQ, searchQuery]);

  const handleCategoryChange = (categoryId: string) => {
    const selectedFAQ = faqs.find((faq) => faq.id === categoryId);
    const slug = selectedFAQ?.slug || categoryId;

    // Force complete reset by explicitly clearing all state
    setSearchQuery('');
    setOpenQuestionIndex(null);
    setIsMobileMenuOpen(false);

    // Navigate without any search parameters
    router.push(`/faqs/${slug}`);
  };

  const handleExpandFAQ = (faqId: string) => {
    const selectedFAQ = faqs.find((faq) => faq.id === faqId);
    const slug = selectedFAQ?.slug || faqId;

    // Force complete reset
    setSearchQuery('');
    setOpenQuestionIndex(null);
    setIsMobileMenuOpen(false);

    // Navigate without any search parameters
    router.push(`/faqs/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br mt-20 from-primary/10 via-black to-primary/10 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Mobile Header */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-gray-400 mb-1">
                FAQs / {currentFAQ?.title || 'General'}
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                {shouldHighlight
                  ? highlightText(currentFAQ?.title || 'General', urlSearchTerm)
                  : currentFAQ?.title || 'General'}
              </h1>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-800/50 border border-white/10 hover:bg-gray-700/50 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {shouldHighlight
              ? highlightText(
                  currentFAQ?.description ||
                    'Everything you need to know about our platform, evaluations and how to set up your FundingOptimal account.',
                  urlSearchTerm
                )
              : currentFAQ?.description ||
                'Everything you need to know about our platform, evaluations and how to set up your FundingOptimal account.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Desktop Sidebar - Always visible on desktop */}
            <div className="hidden lg:block sticky top-8">
              {/* Header */}
              <div className="mb-6">
                <Link href="/faqs">
                  <div className="text-sm text-gray-400 mb-2">
                    FAQs / {currentFAQ?.title || 'General'}
                  </div>
                </Link>
                <h3 className="font-semibold text-white mb-4">
                  FAQ Categories
                </h3>
              </div>

              {/* Search Box */}
              <form onSubmit={handleSearchSubmit} className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search all FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleSearchKeyPress}
                  className="w-full bg-gray-800/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                />
              </form>

              {/* Navigation Menu */}
              <nav className="space-y-2">
                <button
                  onClick={() => handleCategoryChange('all-faqs')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    currentSlug === 'all-faqs'
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <span className="text-sm font-medium">All FAQs</span>
                </button>

                {faqs.map((faq) => (
                  <button
                    key={faq.id}
                    onClick={() => handleCategoryChange(faq.id)}
                    className={`flex flex-col items-start w-full text-left p-3 rounded-lg transition-all duration-200 ${
                      currentSlug === (faq.slug || faq.id)
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <span className="text-sm font-medium">{faq.title}</span>
                    <span
                      className={`text-xs ${
                        currentSlug === (faq.slug || faq.id)
                          ? 'text-primary/80'
                          : 'text-gray-500'
                      }`}
                    >
                      {faq.questions.length}+ questions
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Mobile Sidebar - Collapsible */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="lg:hidden mb-6 overflow-hidden bg-gray-900/50 border border-white/10 rounded-xl p-4"
                >
                  {/* Search Box */}
                  <form onSubmit={handleSearchSubmit} className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search all FAQs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleSearchKeyPress}
                      className="w-full bg-gray-800/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                    />
                  </form>

                  {/* Navigation Menu */}
                  <div className="space-y-2">
                    <button
                      onClick={() => handleCategoryChange('all-faqs')}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors text-sm ${
                        currentSlug === 'all-faqs'
                          ? 'bg-primary/20 text-primary border border-primary/30'
                          : 'hover:bg-white/5 text-gray-300'
                      }`}
                    >
                      All FAQs
                    </button>

                    {faqs.map((faq) => (
                      <button
                        key={faq.id}
                        onClick={() => handleCategoryChange(faq.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors text-sm ${
                          currentSlug === (faq.slug || faq.id)
                            ? 'bg-primary/20 text-primary border border-primary/30'
                            : 'hover:bg-white/5 text-gray-300'
                        }`}
                      >
                        {faq.title}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {currentSlug === 'all-faqs' ? (
              // Show all FAQ categories as cards
              <div className="grid gap-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <FAQCard
                      {...faq}
                      searchTerm={shouldHighlight ? urlSearchTerm : ''}
                      onExpand={() => handleExpandFAQ(faq.id)}
                    />
                  </motion.div>
                ))}
              </div>
            ) : currentFAQ ? (
              // Show detailed questions for selected category
              <div>
                <div className="mb-6 sm:mb-8 hidden md:block">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">
                    {currentFAQ.title} Questions
                  </h2>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {searchQuery
                      ? `${filteredQuestions.length} questions found`
                      : `${currentFAQ.questions.length} questions in this category`}
                  </p>
                </div>

                <div className="space-y-4">
                  {filteredQuestions.map((qa, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      data-question-index={index}
                    >
                      <FAQQuestionComponent
                        question={qa.question}
                        answer={qa.answer}
                        searchTerm={
                          shouldHighlight ? urlSearchTerm : searchQuery
                        }
                        isOpen={openQuestionIndex === index}
                        onToggle={() =>
                          setOpenQuestionIndex(
                            openQuestionIndex === index ? null : index
                          )
                        }
                      />
                    </motion.div>
                  ))}
                </div>

                {filteredQuestions.length === 0 && searchQuery && (
                  <div className="text-center py-12">
                    <p className="text-gray-400">
                      No questions found matching &ldquo;{searchQuery}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            ) : (
              // 404 state
              <div className="text-center py-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  FAQ Category Not Found
                </h2>
                <p className="text-gray-400 mb-6">
                  The requested FAQ category doesn&apos;t exist.
                </p>
                <button
                  onClick={() => router.push('/faqs/all-faqs')}
                  className="bg-primary hover:bg-primary/80 text-black px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  View All FAQs
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
