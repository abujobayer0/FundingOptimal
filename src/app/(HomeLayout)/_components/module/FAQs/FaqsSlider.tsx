'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SliderItem from './Slider.Item';
import { faqs } from './faqData';

const FaqsSlider = () => {
  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{
                transition: { duration: 0.2 },
              }}
              className="h-full"
            >
              <SliderItem {...faq} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqsSlider;
