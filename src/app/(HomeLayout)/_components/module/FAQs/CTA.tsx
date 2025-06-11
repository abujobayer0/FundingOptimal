'use client';
import { motion } from 'motion/react';
import React from 'react';
import { useScrollTo } from '@/hooks/useScrollTo';

const CTA = () => {
  const { scrollTo } = useScrollTo();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="my-10 mb-32"
    >
      <motion.div
        className="bg-gradient-to-b from-primary/30 h-[150px] to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="bg-gradient-to-r from-primary/40 via-primary to-primary/40 w-full h-[3px]" />
      </motion.div>
      <div className="flex flex-col -mt-8 items-center justify-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`px-3 py-1.5 md:px-4 md:py-2 mx-auto rounded bg-primary/10  text-primary text-center text-sm md:text-base`}
        >
          Get Started
        </motion.span>
        <div className="space-y-4 mt-4 text-center px-4">
          <div className="space-y-0 md:space-y-0">
            <h1 className="text-3xl md:text-5xl lg:text-[70px] font-bold">
              Join FundingOptimal
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-[70px] font-bold">
              And <span className="text-primary">Get Funded</span>
              Today
            </h2>
          </div>

          <p className="text-[16px]">
            Traders can take their trading to the next level and embark on their
            journey to become funded prop traders.
          </p>
          <button
            className="group relative text-xl bg-primary/10 text-white px-8 py-2 border border-primary/20 rounded-md overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 hover:bg-primary/5"
            style={{ fontWeight: 500 }}
            onClick={() => {
              scrollTo('get-funded');
            }}
          >
            <span className="relative z-10 transition-all duration-300 group-hover:text-primary">
              Get Funded
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CTA;
