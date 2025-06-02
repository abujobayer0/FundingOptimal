'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../../_components/ui';
import { ActionCards } from '../../_components/module/home/analytics-dashboard/data';
import { ActionCard } from '../../_components/module/home/analytics-dashboard/components';

export const FeaturesSection = () => {
  return (
    <div>
      <motion.div className="bg-gradient-to-b from-primary/30 to-transparent">
        <div className="bg-gradient-to-r from-primary/40 via-primary to-primary/40 h-[3px]" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6 md:pt-0 bg-transparent text-white">
          <SectionHeader
            title="FundingOptimal {Features}"
            description="Learn and grow together in a community of experienced and aspiring traders alike."
            badge="Features"
            className="items-center mt-0"
          />
        </div>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 max-w-7xl mx-auto px-4 md:px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        {ActionCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <ActionCard
              title={card.title}
              description={card.description}
              icon={card.icon}
              color={card.color}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
