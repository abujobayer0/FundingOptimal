'use client';
import { motion } from 'motion/react';
import React from 'react';
import FeatureItem from './FeatureItem';
import { EvaluationCard } from '@/types';
import { useScrollTo } from '@/hooks/useScrollTo';

interface EvaluationCardProps {
  card: EvaluationCard;
  index: number;
}

const EvaluationCardComponent: React.FC<EvaluationCardProps> = ({
  card,
  index,
}) => {
  const { scrollTo } = useScrollTo();

  const baseClasses =
    'transition-all duration-300 flex flex-col justify-center relative border';

  const paddingClasses = card.isHighlighted ? 'py-4 px-3' : 'px-3 py-4';

  let borderClasses = 'border-gray-600/70';
  if (index === 0) {
    borderClasses = 'border-gray-600/70 md:border-r-0';
  } else if (index === 4) {
    borderClasses = 'border-gray-600/70 md:border-l-0';
  }

  let gradientClasses;
  if (index === 1) {
    gradientClasses =
      'bg-gradient-to-b from-primary/5 via-primary/0 to-primary/5';
  } else if (card.isHighlighted) {
    gradientClasses =
      'bg-gradient-to-b from-primary/5 via-primary/0 to-primary/5 border-primary border';
  } else {
    gradientClasses =
      'bg-gradient-to-b from-primary/5 via-primary/0 to-primary/5';
  }

  const shadowClasses = card.isHighlighted
    ? 'shadow-2xl rounded-md shadow-primary/10'
    : 'shadow-sm shadow-black/10 hover:shadow-lg hover:shadow-primary/10';

  const cardClasses = `${baseClasses} ${paddingClasses} ${borderClasses} ${gradientClasses} ${shadowClasses} min-h-[500px] ${
    card.isHighlighted ? 'md:min-h-[500px]' : 'md:min-h-[470px]'
  }`;

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
        className={`text-[18px] font-bold mb-2 ${card.badge ? 'mt-4' : ''}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
      >
        {card.title}
      </motion.h3>
      <motion.p
        className="text-gray-400 text-[13px] mb-3 flex-grow"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
      >
        {card.description}
      </motion.p>
      <motion.div
        className="flex pt-3 items-center space-x-2 px-2 py-1 rounded-lg relative before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparent"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
      >
        <div className="space-y-2 mb-3">
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
        onClick={() => scrollTo('get-funded')}
        className="w-full py-2 px-3 border border-primary/30 text-white rounded-lg relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 hover:bg-primary/5 text-sm"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
      >
        <span className="relative z-10 transition-all duration-300 group-hover:text-primary">
          Buy Now
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </motion.button>
    </motion.div>
  );
};

export default EvaluationCardComponent;
