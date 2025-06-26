'use client';

import React from 'react';
import { motion } from 'motion/react';
import { OutlineButton } from '@/components';
import { GradientButton } from '@/components';
import { SectionHeader } from '../../ui';
import { useScrollTo } from '@/hooks/useScrollTo';
import { useRouter } from 'next/navigation';

export const HeroSection = () => {
  const { scrollTo } = useScrollTo();
  const router = useRouter();
  return (
    <div className="text-center mt-10 space-y-8">
      <SectionHeader
        animation={false}
        title="About {FundingOptimal}"
        description="It is a long established fact that a reader will be distracted by the readable content of a page."
        className="items-center mt-0 mb-0"
      />
      <motion.div className="flex flex-col sm:flex-row items-center justify-center sm:space-y-0 sm:space-x-6">
        <GradientButton
          onClick={() => {
            scrollTo('get-funded');
          }}
          animation={false}
          showIcon
        >
          Get Funded Now
        </GradientButton>
        <OutlineButton
          animation={false}
          showIcon
          onClick={() => router.push('/faqs')}
        >
          Learn More
        </OutlineButton>
      </motion.div>
    </div>
  );
};
