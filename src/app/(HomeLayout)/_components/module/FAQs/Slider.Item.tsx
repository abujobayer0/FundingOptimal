import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { FAQ } from './faqData';

const SliderItem = ({ badge, title, slug, id }: FAQ) => {
  return (
    <Link href={`/faqs/${slug || id}`}>
      <motion.div
        className="bg-black rounded-2xl p-4 overflow-hidden border relative border-white/10 hover:border-primary transition-all duration-500 group cursor-pointer h-80"
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      >
        {/* Enhanced background glow effect */}
        <div className="absolute top-1/3 right-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-80">
          <div className="w-44 h-44 bg-primary/20 group-hover:bg-primary/40 blur-3xl rounded-full transition-all duration-500"></div>
        </div>

        {/* Additional glow overlay for hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="w-full h-full flex flex-col justify-between items-start relative z-10">
          <motion.div
            className="flex items-start w-full"
            initial={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-md rounded-lg bg-primary px-4 py-2 text-black transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/25 group-hover:scale-105 whitespace-nowrap">
              {badge}
            </div>
          </motion.div>

          <motion.div
            className="text-[32px] leading-tight font-bold transition-all duration-300 group-hover:text-primary/90 flex-1 flex items-center"
            transition={{ duration: 0.3 }}
          >
            <span className="line-clamp-3">{title}</span>
          </motion.div>

          <div className="self-end">
            <motion.button
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/10 text-white group-hover:bg-primary hover:bg-primary/80 transition-all duration-300 backdrop-blur-sm disabled:opacity-50 group-hover:shadow-lg group-hover:shadow-primary/30"
            >
              <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                <ChevronRight className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Subtle border glow effect */}
        <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/20 transition-all duration-500 pointer-events-none"></div>
      </motion.div>
    </Link>
  );
};

export default SliderItem;
