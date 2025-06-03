'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import logo from '@/assets/fundingoptimal-logo.png';

interface TTitleWithIconProps {
  title: string;
  className?: string;
}

export default function TitleWithIcon({
  title = 'We Fund the Fearless',
  className = 'justify-center',
}: TTitleWithIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`relative z-10 flex  pt-6 md:pt-0 md:py-6 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center space-x-2 px-3 py-1 rounded-lg relative"
        style={
          {
            '--border-angle': '0deg',
            animation: 'border-angle-rotate 4s infinite linear',
            border: '2px solid transparent',

            background: `
            linear-gradient(#050505, #050505) padding-box,
            conic-gradient(
              from var(--border-angle),
              #12FF8E,
              rgba(18, 255, 142, 0.6) 90deg,
              rgba(18, 255, 142, 0.4) 180deg,
              rgba(18, 255, 142, 0.5) 270deg,
              #12FF8E 360deg
            ) border-box
          `,
          } as React.CSSProperties
        }
      >
        <motion.div
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-[rgba(18, 255, 142, 0.05)] w-8 h-8 border-2 border-white/25 flex items-center p-2 justify-center rounded-lg"
        >
          <Image src={logo} width={30} height={30} alt="logo" />
        </motion.div>
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[14px] text-gray-300"
        >
          {title}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
