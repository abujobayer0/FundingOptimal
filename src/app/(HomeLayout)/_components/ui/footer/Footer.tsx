'use client';
import React from 'react';
import { motion } from 'motion/react';
import FooterBottom from './FooterBottom';
import Background from './Background';

const FooterBanner = () => {
  return (
    <div className="relative w-full">
      <Background />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-2 sm:gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-semibold text-center max-w-lg mx-auto text-xl sm:text-2xl md:text-[44px] leading-tight lg:leading-[60px]"
        >
          Get Funded with the <br />
          Most <span className="text-primary">Trusted & Reliable</span>
          <br className="hidden sm:block" />
          Prop Firm
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-lg mx-auto text-sm sm:text-base text-gray-400 leading-relaxed px-2"
        >
          Join thousands of successful traders getting funded - trusted,
          <br className="hidden sm:block" />
          transparent, and built to support your growth.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full py-2 max-w-[140px] justify-center flex mx-auto px-3 border border-primary/30 bg-primary/10 text-white rounded-lg text-xs sm:text-sm relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 hover:bg-primary/5"
        >
          <span className="relative z-10 transition-all duration-300 group-hover:text-green-300">
            Get Funded Now
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </motion.button>
      </div>
    </div>
  );
};
const Footer = ({ showBanner = true }: { showBanner?: boolean }) => {
  return (
    <>
      {showBanner && <FooterBanner />}
      <FooterBottom />
    </>
  );
};

export default Footer;
