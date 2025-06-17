'use client';

import React from 'react';
import { motion } from 'motion/react';

interface AffiliateStep {
  number: string;
  title: string;
  description: string;
}

interface StepCardProps {
  step: AffiliateStep;
  index: number;
  showDivider?: boolean;
  left?: boolean;
  animationDelay?: number;
}

const ANIMATION_CONFIG = {
  duration: 0.6,
  viewport: { once: true },
} as const;

const AFFILIATE_STEPS: AffiliateStep[] = [
  {
    number: '01',
    title: 'Generate Your Affiliate Link',
    description:
      'Purchase any challenge on our app and you will automatically be eligible for a unique link to start promoting on your favourite platform.',
  },
  {
    number: '02',
    title: 'Promote Fundingoptimal',
    description:
      'Promote Fundingoptimal online using any social media platform, a unique cookie will be set on the users side so even if they buys later, you will be eligible for a commission.',
  },
  {
    number: '03',
    title: 'Monitor Results',
    description:
      'You can track all the purchases that have happened through your link by visiting the affiliate dashboard.',
  },
  {
    number: '04',
    title: 'Reward Time',
    description:
      'Your Commission is being paid on exact dates. On the 15th and 30th of the month.',
  },
];

const SectionHeader: React.FC = () => (
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={ANIMATION_CONFIG.viewport}
    transition={{ duration: ANIMATION_CONFIG.duration }}
  >
    <h2 className="text-[44px] font-bold mb-4 leading-tight">
      How Fundingoptimal Affiliate Program Works?
    </h2>
    <p className="text-gray-400 text-[16px] max-w-2xl mx-auto">
      Earn up to 20% commission on each sale and bonuses when promoting
      Fundingoptimal
    </p>
  </motion.div>
);

const BlurBackground: React.FC = () => (
  <div className="w-[200px] md:w-[600px] h-[200px] bg-primary/20 blur-[150px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
);

const StepCard: React.FC<StepCardProps> = ({
  step,
  left = false,
  showDivider = false,
}) => {
  const dividerClasses = showDivider
    ? `sm:after:absolute w-full sm:after:right-0 sm:after:top-0 sm:after:h-full sm:after:w-[1px] sm:after:bg-gradient-to-b ${
        left
          ? 'sm:after:from-transparent sm:after:via-primary sm:after:to-primary sm:px-8'
          : 'sm:after:from-primary sm:after:via-primary sm:after:to-transparent sm:px-8'
      }`
    : '';

  return (
    <motion.div className={`relative text-center ${dividerClasses}`}>
      <div className="text-[64px] font-bold text-primary mb-4 leading-none">
        {step.number}
      </div>
      <div className="space-y-4">
        <h3 className="text-[24px] font-semibold leading-tight">
          {step.title}
        </h3>
        <p className="text-gray-400 text-[14px] leading-relaxed  mx-auto">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

const StepsGrid: React.FC<{
  steps: AffiliateStep[];
  className?: string;
  showDividers?: boolean;
  baseDelay?: number;
  left?: boolean;
}> = ({
  steps,
  className = '',
  showDividers = false,
  baseDelay = 0,
  left = true,
}) => (
  <div
    className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ${className}`}
  >
    {steps.map((step, index) => (
      <StepCard
        key={step.number}
        step={step}
        index={index}
        showDivider={showDividers && index === 0}
        animationDelay={baseDelay + index * 0.2}
        left={left}
      />
    ))}
  </div>
);

export const AffiliateProgramSection: React.FC = () => {
  const firstRowSteps = AFFILIATE_STEPS.slice(0, 2);
  const secondRowSteps = AFFILIATE_STEPS.slice(2, 4);

  return (
    <div className="bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 relative md:px-6">
        <SectionHeader />
        <StepsGrid
          steps={firstRowSteps}
          left={true}
          showDividers={true}
          baseDelay={0}
        />
        <BlurBackground />
        <StepsGrid
          steps={secondRowSteps}
          className="md:pt-10 md:mt-10 relative md:before:absolute md:before:inset-x-0 md:before:top-0 md:before:h-[1px] md:before:bg-gradient-to-r md:before:from-transparent md:before:via-primary md:before:to-transparent"
          showDividers={true}
          left={false}
          baseDelay={0.4}
        />
      </div>
    </div>
  );
};
