'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  SectionHeader,
  ReferTierCard,
} from '@/app/(HomeLayout)/_components/ui';

const REFER_TIERS = [
  {
    refer: 25,
    points: '25k',
    description:
      'Refer 25 people and receive a FREE 25k challenge account as a reward.',
  },
  {
    refer: 100,
    points: '100k',
    description:
      'Refer 100 people and receive a FREE 100k challenge account as a reward.',
  },
  {
    refer: 200,
    points: '200k',
    description:
      'Refer 200 people and receive a FREE 200k challenge account as a reward.',
  },
];

export default function ReferAndEarn() {
  return (
    <div>
      <div className="bg-gradient-to-r from-primary/40 via-primary to-primary/40 h-[3px]" />

      <div className="bg-gradient-to-b from-primary/30 to-transparent h-48"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 bg-transparent text-white -mt-24 md:-mt-36">
        <SectionHeader
          title="Refer And Earn Rewards"
          description="Learn and grow together in a community of experienced and aspiring traders alike."
          badge="Rewards"
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
