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
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chart-no-axes-combined-icon lucide-chart-no-axes-combined"
              >
                <path d="M12 16v5" />
                <path d="M16 14v7" />
                <path d="M20 10v11" />
                <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
                <path d="M4 18v3" />
                <path d="M8 14v7" />
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
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bitcoin-icon lucide-bitcoin"
              >
                <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
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
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-align-horizontal-distribute-center-icon lucide-align-horizontal-distribute-center"
              >
                <rect width="6" height="14" x="4" y="5" rx="2" />
                <rect width="6" height="10" x="14" y="7" rx="2" />
                <path d="M17 22v-5" />
                <path d="M17 7V2" />
                <path d="M7 22v-3" />
                <path d="M7 5V2" />
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
