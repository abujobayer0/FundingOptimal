'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  gradientIntensity: 'light' | 'medium' | 'strong';
}

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  gradientIntensity: 'light' | 'medium' | 'strong';
  index: number;
}

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
      <div className="w-12 h-12 mb-4 text-primary">{icon}</div>
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

const Steps = () => {
  return (
    <div className="w-full h-full bg-black">
      <svg
        viewBox="0 0 800 180"
        className="w-full h-full object-cover -mt-8 md:-mt-28"
      >
        <defs>
          <linearGradient
            id="verticalGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" style={{ stopColor: '#000', stopOpacity: 1 }} />
            <stop
              offset="30%"
              style={{ stopColor: '#000', stopOpacity: 0.4 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#12FF8E75', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="horizontalFade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#000', stopOpacity: 1 }} />
            <stop
              offset="20%"
              style={{ stopColor: '#12FF8E15', stopOpacity: 0.5 }}
            />
            <stop
              offset="80%"
              style={{ stopColor: '#12FF8E15', stopOpacity: 0.5 }}
            />
            <stop offset="100%" style={{ stopColor: '#000', stopOpacity: 1 }} />
          </linearGradient>
          <radialGradient id="roundedVignette" cx="50%" cy="50%" r="80%">
            <stop offset="0%" style={{ stopColor: '#000', stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: '#000', stopOpacity: 0 }} />
            <stop
              offset="75%"
              style={{ stopColor: '#000', stopOpacity: 0.2 }}
            />
            <stop offset="100%" style={{ stopColor: '#000', stopOpacity: 1 }} />
          </radialGradient>
          <radialGradient id="topLeftCorner" cx="0%" cy="0%" r="60%">
            <stop offset="0%" style={{ stopColor: '#000', stopOpacity: 0.5 }} />
            <stop
              offset="70%"
              style={{ stopColor: '#000', stopOpacity: 0.3 }}
            />
            <stop offset="100%" style={{ stopColor: '#000', stopOpacity: 0 }} />
          </radialGradient>
          <radialGradient id="topRightCorner" cx="100%" cy="0%" r="60%">
            <stop offset="0%" style={{ stopColor: '#000', stopOpacity: 0.5 }} />
            <stop
              offset="70%"
              style={{ stopColor: '#000', stopOpacity: 0.3 }}
            />
            <stop offset="100%" style={{ stopColor: '#000', stopOpacity: 0 }} />
          </radialGradient>
          <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: '#000000', stopOpacity: 0.4 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: '#000000', stopOpacity: 0.1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#000000', stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>

        {/* Background - vertical fade */}
        <rect width="100%" height="100%" fill="url(#verticalGradient)" />
        {/* Background - horizontal corner fade */}
        <rect
          width="100%"
          height="100%"
          fill="url(#horizontalFade)"
          style={{ mixBlendMode: 'multiply' }}
        />
        {/* Rounded vignette effect */}
        <rect width="100%" height="100%" fill="url(#roundedVignette)" />
        {/* Top left corner fade */}
        <rect width="100%" height="100%" fill="url(#topLeftCorner)" />
        {/* Top right corner fade */}
        <rect width="100%" height="100%" fill="url(#topRightCorner)" />

        {/* Curved lens shape - only top half visible */}
        <ellipse cx="400" cy="200" rx="400" ry="80" fill="#000000" />

        {/* Shadow overlay on top part of shape */}
        <ellipse
          cx="400"
          cy="200"
          rx="400"
          ry="80"
          fill="url(#shadowGradient)"
        />
      </svg>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center gap-2 md:gap-4 items-center px-4 md:px-8 lg:px-16"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-3 py-1.5 md:px-4 md:py-2 rounded bg-primary/10 text-primary text-center text-sm md:text-base"
        >
          How it works
        </motion.span>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-center leading-tight"
        >
          Your Funding starts here
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-sm md:text-base lg:text-[16px] font-light max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl"
        >
          Our traders don&apos;t wait for payouts. Receive your first payout as
          early as your first funded trading day upon request—no maximum or
          minimum amount.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-12 w-full max-w-7xl">
          <StepCard
            index={0}
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full"
              >
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
              </svg>
            }
            title="Funding challenges"
            description="Fast-track your success with a single-phase evaluation — start trading sooner."
            buttonText="Get Funded Now"
            gradientIntensity="light"
          />

          <StepCard
            index={1}
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            }
            title="Trade Forex, Indices & Crypto"
            description="Access top markets with raw spreads and high leverage & Keep up to 90% of your profits"
            buttonText="Get Funded Now"
            gradientIntensity="strong"
          />

          <StepCard
            index={2}
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full"
              >
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
              </svg>
            }
            title="Get Funded"
            description="Pass the challenge, get funded, and start earning. Withdraw up to 80% of your profits with ease."
            buttonText="Get Get Funded Now"
            gradientIntensity="light"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Steps;
