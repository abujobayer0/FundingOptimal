'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.01,
          },
        },
      }}
      className="space-y-3 md:space-y-4"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="bg-transparent border border-gray-500/30 rounded-lg overflow-hidden hover:border-primary/60 transition-all duration-200"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between text-white hover:bg-primary/5 transition-colors duration-150"
          >
            <span className="text-sm md:text-base font-medium pr-4 text-gray-400">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="flex-shrink-0"
            >
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { height: 'auto', opacity: 1 },
                  collapsed: { height: 0, opacity: 0 },
                }}
                transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
                className="overflow-hidden"
              >
                <motion.div
                  className="px-6 pb-4 text-gray-400 text-sm leading-relaxed border-t border-primary/20 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15, delay: 0.05 }}
                >
                  {item.answer}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FAQAccordion;
