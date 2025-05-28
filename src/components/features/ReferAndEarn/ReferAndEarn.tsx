'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ReferTierCard } from '@/components/common/card/ReferTierCard';
import { SectionHeader } from '@/components/common';

const REFER_TIERS = [
  {
    tier: 'Tier 1',
    points: '25k',
    description:
      'Refer 25 people and receive a FREE 25k challenge account as a reward.',
  },
  {
    tier: 'Tier 2',
    points: '100k',
    description:
      'Refer 100 people and receive a FREE 100k challenge account as a reward.',
  },
  {
    tier: 'Tier 3',
    points: '200k',
    description:
      'Refer 200 people and receive a FREE 200k challenge account as a reward.',
  },
];

export default function ReferAndEarn() {
  return (
    <div>
      <div className="bg-gradient-to-b from-green-500/30 to-transparent h-36 mx-auto relative before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparent py-6 sm:py-8"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 bg-transparent text-white -mt-24 md:-mt-36">
        <SectionHeader
          title="Refer And Earn Rewards"
          description="Learn and grow together in a community of experienced and aspiring traders."
          badge="Referral Program"
          className="items-center mt-0"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {REFER_TIERS.map((tier, index) => (
            <ReferTierCard key={tier.points} {...tier} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
