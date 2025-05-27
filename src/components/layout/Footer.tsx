'use client';
import React from 'react';
import Background from '../features/Footer/Background';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="text-white relative w-full">
      <Background />
      <div className="max-w-7xl mx-auto px-4 md:px-0 flex flex-col gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-semibold text-center max-w-lg mx-auto text-4xl"
        >
          Get Funded with the <br />
          Most <span className="text-primary">Trusted & Reliable</span> <br />
          Prop Firm
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-xl mx-auto text-lg text-gray-400"
        >
          Join thousands of successful traders getting funded - trusted, <br />
          transparent, and built to support your growth.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full py-2 max-w-[147px] justify-center flex mx-auto px-4 border border-green-500/30 bg-primary/10 text-white rounded-lg text-[14px] relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20 hover:border-green-400/50 hover:bg-green-500/5"
        >
          <span className="relative z-10 transition-all duration-300 group-hover:text-green-300">
            Get Funded Now
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-green-500/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </motion.button>
      </div>
    </div>
  );
};

export default Footer;
