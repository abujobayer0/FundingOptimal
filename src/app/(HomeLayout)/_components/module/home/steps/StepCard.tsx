'use client';
import React from 'react';
import { motion } from 'motion/react';
import { StepCardProps } from './types';

const StepCard: React.FC<StepCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  gradientIntensity,
  index,
}) => {
  const gradientClasses = {
    light:
      'bg-gradient-to-br from-green-900/30 via-green-800/10 to-transparent',
    medium:
      'bg-gradient-to-br from-green-900/40 via-green-800/15 to-transparent',
    strong:
      'bg-gradient-to-br from-green-900/50 via-green-800/20 to-transparent',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
      }}
      className={`${gradientClasses[gradientIntensity]} rounded-lg p-6 backdrop-blur-sm`}
    >
      <div className="w-12 h-12 mb-4 bg-[#FF5C120F] p-2 justify-center items-center flex rounded-xl text-primary">
        {icon}
      </div>
      <h3 className="text-[20px] font-semibold mb-3 text-white">{title}</h3>
      <p className="text-[#A7A7A7] text-[16px] leading-6 mb-6">{description}</p>
      <button className="w-full py-3 px-4 border border-green-500/30 text-white rounded-lg relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20 hover:border-green-400/50 hover:bg-green-500/5">
        <span className="relative z-10 transition-all duration-300 group-hover:text-green-300">
          {buttonText}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 bg-green-500/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </button>
    </motion.div>
  );
};

export default StepCard;
