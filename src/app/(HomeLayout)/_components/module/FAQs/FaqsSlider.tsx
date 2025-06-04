'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SliderItem from './Slider.Item';

const faqs = [
  {
    badge: '35+ Questions',
    title: 'General FAQs',
  },
  {
    badge: '28+ Questions',
    title: 'Pricing Plans',
  },
  {
    badge: '42+ Questions',
    title: 'Getting Started',
  },
  {
    badge: '31+ Questions',
    title: 'Trading Basics',
  },
  {
    badge: '19+ Questions',
    title: 'Technical Support',
  },
];

const FaqsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % faqs.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + faqs.length) % faqs.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getTransformValue = () => {
    return `translateX(calc(-${currentIndex * 25}% + 50% - 12.5%))`;
  };

  return (
    <div className="w-full py-8 overflow-hidden">
      {/* Navigation Header */}

      {/* Slider Container - Full Width */}
      <div className="w-full relative">
        <div className="w-full">
          <motion.div
            className="flex gap-6 px-4"
            animate={{
              transform: getTransformValue(),
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              duration: 0.5,
            }}
            style={{
              width: `${faqs.length * 25}%`, // Dynamic width based on number of items
            }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0"
                style={{
                  width: `calc(${100 / faqs.length}% - 1.5rem)`, // Responsive width
                  minWidth: '280px', // Minimum width for readability
                  maxWidth: '400px', // Maximum width for desktop
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                    transition: { duration: 0.2 },
                  }}
                  className="h-full"
                  animate={{
                    opacity: Math.abs(index - currentIndex) <= 1 ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <SliderItem {...faq} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mt-8 mx-auto px-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 mt-8">
          <div className="flex items-center justify-between">
            <div className="flex justify-center items-center gap-1">
              {faqs.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => goToSlide(index)}
                  disabled={isAnimating}
                  className={`w-6 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary w-[60px] shadow-lg shadow-primary/50'
                      : 'bg-white/20 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                disabled={isAnimating}
                className="p-3 rounded-full bg-primary hover:bg-primary/80 transition-colors backdrop-blur-sm border border-white/20 disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5 text-black" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                disabled={isAnimating}
                className="p-3 rounded-full bg-primary hover:bg-primary/80 transition-colors backdrop-blur-sm border border-white/20 disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5 text-black" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqsSlider;
