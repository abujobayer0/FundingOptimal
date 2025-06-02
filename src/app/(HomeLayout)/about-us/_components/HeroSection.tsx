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
        animation={false}
        title="About {FundingOptimal}"
        description="It is a long established fact that a reader will be distracted by the readable content of a page."
        className="items-center mt-0 mb-0"
      />
      <motion.div className="flex flex-col sm:flex-row items-center justify-center sm:space-y-0 sm:space-x-6">
        <GradientButton animation={false} showIcon>
          Get Funded Now
        </GradientButton>
        <OutlineButton animation={false} showIcon>
          Learn More
        </OutlineButton>
      </motion.div>
    </div>
  );
};
