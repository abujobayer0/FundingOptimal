'use client';
import { motion } from 'motion/react';
import React from 'react';

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

export default CheckIcon;
