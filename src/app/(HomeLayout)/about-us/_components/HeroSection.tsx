'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../../_components/ui';
import { OutlineButton } from '@/components';
import { GradientButton } from '@/components';

export const HeroSection = () => {
  return (
    <div className="text-center space-y-8">
      <SectionHeader
        title="About {FundingOptimal}"
        description="It is a long established fact that a reader will be distracted by the readable content of a page."
        className="items-center mt-0 mb-0"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="flex flex-col sm:flex-row items-center justify-center sm:space-y-0 sm:space-x-6"
      >
        <GradientButton showIcon>Get Funded Now</GradientButton>
        <OutlineButton showIcon>Learn More</OutlineButton>
      </motion.div>
    </div>
  );
};
