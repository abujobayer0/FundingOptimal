'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface EvaluationFeature {
  text: string;
}

interface EvaluationCard {
  id: string;
  title: string;
  description: string;
  features: EvaluationFeature[];
  isHighlighted?: boolean;
  badge?: string;
}

const evaluationData: EvaluationCard[] = [
  {
    id: 'one-step',
    title: 'One-Step',
    description:
      'Designed for confident traders seeking the fastest track to funding.',
    features: [
      { text: 'No trading evaluation' },
      { text: 'No targets' },
      { text: 'Instant payouts' },
      { text: 'Up to 90% Performance Split' },
      { text: 'Up to $50K Starting Capital' },
    ],
  },
  {
    id: 'two-step',
    title: 'Two-Step',
    description:
      'For those seeking affordability and the fastest way to prove their skills and get funded.',
    features: [
      { text: '2-step evaluation' },
      { text: '5% Target' },
      { text: 'Program fees from as low as $59' },
      { text: 'Up to 90% Performance Split' },
      { text: 'Up to $100,000 starting capital' },
    ],
  },
  {
    id: 'instant-funding',
    title: 'Instant Funding',
    description:
      'For traders looking to trade futures markets with institutional-grade conditions.',
    features: [
      { text: 'No trading evaluation' },
      { text: 'No targets' },
      { text: 'Instant payouts' },
      { text: 'Up to 90% Performance Split' },
      { text: 'Up to $50K Starting Capital' },
      { text: 'Up to $400,000 starting capital' },
    ],
    isHighlighted: true,
  },
  {
    id: 'three-step',
    title: 'Three-Step',
    description: 'For traders who prefer the conventional funded trader route.',
    features: [
      { text: 'First Payout On Demand' },
      { text: '1, 2 & 3 Phase programs available' },
      { text: 'Static & Trailing Drawdown available' },
      { text: 'Unlimited Trading Days' },
      { text: 'Up to $400,000 starting capital' },
    ],
  },
];

// Reusable Components
const CheckIcon: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.3,
      ease: 'easeOut',
    }}
  >
    <svg
      className="w-6 h-6 p-1 text-white border rounded-full"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </motion.div>
);

const FeatureItem: React.FC<{ feature: EvaluationFeature }> = ({ feature }) => (
  <div className="flex items-center gap-4">
    <CheckIcon />
    <span className="text-[13px]">{feature.text}</span>
  </div>
);

const EvaluationCardComponent: React.FC<{
  card: EvaluationCard;
  index: number;
}> = ({ card, index }) => {
  const baseClasses =
    'transition-all duration-300 flex flex-col justify-center relative border';

  const heightClasses = card.isHighlighted ? 'h-[550px]' : 'h-[470px]';

  const paddingClasses = card.isHighlighted ? 'py-6 px-4' : 'px-4 py-6';

  let borderClasses = 'border-primary';
  if (index === 1 || index === 0) {
    borderClasses = 'border-gray-600/70 md:border-r-0';
  } else if (index === 3) {
    borderClasses = 'border-gray-600/70 md:border-l-0';
  }

  let gradientClasses;
  if (index === 1) {
    gradientClasses =
      'bg-gradient-to-b from-primary/10 via-primary/0 to-primary/5';
  } else if (card.isHighlighted) {
    gradientClasses =
      'bg-gradient-to-b from-primary/10 via-primary/0 to-primary/5 border-primary border';
  } else {
    gradientClasses =
      'bg-gradient-to-b from-primary/10 via-primary/0 to-primary/5';
  }

  const shadowClasses = card.isHighlighted
    ? 'shadow-2xl rounded-md shadow-primary/30'
    : 'shadow-sm shadow-black/20 hover:shadow-lg hover:shadow-primary/20';

  const cardClasses = `${baseClasses} ${heightClasses} ${paddingClasses} ${borderClasses} ${gradientClasses} ${shadowClasses} `;

  return (
    <motion.div
      className={cardClasses}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut',
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
    >
      <motion.h3
        className={`text-[20px] font-bold mb-4 ${card.badge ? 'mt-6' : ''}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
      >
        {card.title}
      </motion.h3>
      <motion.p
        className="text-gray-400 text-[14px] mb-4 flex-grow"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
      >
        {card.description}
      </motion.p>
      <motion.div
        className="flex pt-5 items-center space-x-2 px-3 py-2 rounded-lg relative before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparentt"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
      >
        <div className="space-y-4 mb-5">
          {card.features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.1 + 0.5 + featureIndex * 0.05,
              }}
            >
              <FeatureItem feature={feature} />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.button
        className="w-full py-3 px-4 border border-primary/30 text-white rounded-xl relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 hover:bg-primary/5"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
      >
        <span className="relative z-10 transition-all duration-300 group-hover:text-primary">
          Learn more
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </motion.button>
    </motion.div>
  );
};

const SectionHeader: React.FC = () => (
  <div className="text-center flex justify-center md:mt-24 items-center flex-col gap-4 mb-16">
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="px-3 py-1.5 md:px-4 md:py-2 rounded bg-primary/10 text-primary text-center text-sm md:text-base"
    >
      Evaluations
    </motion.span>
    <motion.h1
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-center max-w-3xl leading-relaxed"
    >
      Fundingoptimal offers evaluations for every trader
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-center text-sm md:text-base lg:text-[16px] font-light max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl"
    >
      Whether you&apos;re looking for speed, accessibility, structure, or
      flexibility —we have everything you need in a prop firm.
    </motion.p>
  </div>
);

const Evaluation: React.FC = () => {
  return (
    <section className="bg-black text-white py-20">
      <motion.div
        className="bg-gradient-to-t from-primary/10 pb-24 via-primary/5 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl px-4 md:px-0 mx-auto">
          <SectionHeader />

          <motion.div
            className="grid grid-cols-1 items-center md:grid-cols-2 w-full lg:grid-cols-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {evaluationData.map((card, index) => (
              <EvaluationCardComponent
                key={card.id}
                card={card}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Evaluation;
