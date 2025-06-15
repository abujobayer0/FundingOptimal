import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { FAQ } from './faqData';

const SliderItem = ({ title, slug, id, questions }: FAQ) => {
  return (
    <Link href={`/faqs/${slug || id}`}>
      <motion.div
        className="bg-[#050505] rounded-2xl p-4 overflow-hidden border relative border-white/10 hover:border-primary transition-all duration-500 group cursor-pointer h-60"
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="absolute top-1/3 right-0 w-44 h-44 bg-primary/20 group-hover:bg-primary/40 blur-3xl rounded-full transition-all duration-500 group-hover:scale-125"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

        <div className="w-full h-full flex flex-col justify-between items-start relative z-10">
          <div className="text-md rounded-lg bg-primary px-4 py-2 text-black transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/25 group-hover:scale-105 whitespace-nowrap">
            {questions.length}+ Questions
          </div>

          <div className="text-[32px] leading-tight font-bold transition-all duration-300 group-hover:text-primary/90 flex-1 flex items-center">
            <span className="line-clamp-3">{title}</span>
          </div>

          <div className="self-end">
            <motion.button
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/10 text-white group-hover:bg-primary transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-primary/30"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default SliderItem;
