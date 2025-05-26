'use client';
import React from 'react';
import { ArrowLeftRight, ArrowRight, DollarSign } from 'lucide-react';
import Image from 'next/image';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import StatCard from './StatCard';
import TrustpilotRating from './TrustPilot';
import logo from '@/assets/fundingoptimal-logo.png';

const useCountAnimation = (targetValue: number) => {
  const count = useMotionValue(0);
  const spring = useSpring(count, {
    duration: 2,
    stiffness: 50,
    damping: 20,
  });

  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = spring.onChange((latest) => {
      setDisplayValue(Math.round(latest));
    });

    count.set(targetValue);
    return () => unsubscribe();
  }, [count, spring, targetValue]);

  return displayValue;
};

const TradingHero = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const tradersCount = useCountAnimation(350);
  const payoutsCount = useCountAnimation(10);
  const countriesCount = useCountAnimation(44);
  const supportCount = useCountAnimation(24);

  return (
    <div className="bg-[#050505] mt-24 md:mt-32 text-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex justify-center pt-6 md:pt-0 md:py-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center space-x-2 px-3 py-2 rounded-lg relative before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparent after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-gradient-to-r after:from-transparent after:via-primary after:to-transparent"
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
            We Fund the Fearless
          </motion.span>
        </motion.div>
      </motion.div>

      <div className="relative z-10 px-6">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12 space-y-8 lg:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <StatCard
                title="Withdrawal Amount"
                value={30}
                suffix="k+"
                icon={ArrowLeftRight}
                gradientDirection="bl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-center flex-1 lg:px-12"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold md:mb-4 leading-tight"
              >
                <span className="bg-gradient-to-l from-primary via-primary to-white bg-clip-text text-transparent">
                  You&apos;re Not Here To Beat The Market.
                </span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold mb-4 leading-tight"
              >
                <span className="bg-gradient-to-l from-primary via-[#12FF8E] to-white bg-clip-text text-transparent">
                  You&apos;re Here To Master Yourself Within It.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-sm sm:text-base lg:text-[16px] text-gray-300 mb-4 mx-auto leading-relaxed max-w-2xl"
              >
                Join traders worldwide and become a funded trader with the
                world&apos;s most trusted prop firm.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="mb-6"
              >
                <TrustpilotRating />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white rounded-lg flex items-center justify-center transition-all duration-300 text-base sm:text-lg"
                  style={{
                    boxShadow:
                      'rgba(18, 255, 142, 0.5) 0px 0px 20px 0px inset, rgba(18, 255, 142, 0.5) 0px 0px 30px 0px inset, rgba(18, 255, 142, 0.1) 0px 0px 40px 0px inset',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      'rgba(18, 255, 142, 0.7) 0px 0px 25px 0px inset, rgba(18, 255, 142, 0.6) 0px 0px 35px 0px inset, rgba(18, 255, 142, 0.3) 0px 0px 45px 0px inset';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      'rgba(18, 255, 142, 0.5) 0px 0px 20px 0px inset, rgba(18, 255, 142, 0.5) 0px 0px 30px 0px inset, rgba(18, 255, 142, 0.1) 0px 0px 40px 0px inset';
                  }}
                >
                  Get Funded Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.7 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto text-gray-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-emerald-500/10"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <StatCard
                title="Total Amount Earned"
                value={44}
                suffix="k+"
                icon={DollarSign}
                gradientDirection="br"
              />
            </motion.div>
          </div>

          <div className="flex flex-row lg:hidden gap-4 mb-12 max-w-md mx-auto">
            <StatCard
              title="Withdrawal Amount"
              value={44}
              suffix="k+"
              icon={ArrowLeftRight}
              gradientDirection="bl"
            />
            <StatCard
              title="Total Amount Earned"
              value={44}
              icon={DollarSign}
              suffix="k+"
              gradientDirection="br"
            />
          </div>

          <div
            ref={ref}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 max-w-7xl mx-auto relative before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparent py-6 sm:py-8"
          >
            <div className="text-center relative sm:after:absolute sm:after:right-0 sm:after:top-0 sm:after:h-full sm:after:w-[1px] sm:after:bg-gradient-to-b sm:after:from-transparent sm:after:via-primary sm:after:to-transparent sm:pr-8">
              <motion.div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5 }}
              >
                {tradersCount}+
              </motion.div>
              <div className="text-gray-400 text-xs sm:text-sm">
                Traders worldwide
              </div>
            </div>
            <div className="text-center relative sm:after:absolute sm:after:right-0 sm:after:top-0 sm:after:h-full sm:after:w-[1px] sm:after:bg-gradient-to-b sm:after:from-transparent sm:after:via-primary sm:after:to-transparent sm:px-8">
              <motion.div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                ${payoutsCount}k+
              </motion.div>
              <div className="text-gray-400 text-xs sm:text-sm">
                Total Payouts
              </div>
            </div>
            <div className="text-center relative sm:after:absolute sm:after:right-0 sm:after:top-0 sm:after:h-full sm:after:w-[1px] sm:after:bg-gradient-to-b sm:after:from-transparent sm:after:via-primary sm:after:to-transparent sm:px-8">
              <motion.div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {countriesCount}+
              </motion.div>
              <div className="text-gray-400 text-xs sm:text-sm">
                Countries Covered
              </div>
            </div>
            <div className="text-center sm:pl-8">
              <motion.div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {supportCount}/7
              </motion.div>
              <div className="text-gray-400 text-xs sm:text-sm">
                Staff Support
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-16 w-1 h-1 bg-emerald-400 rounded-full opacity-40"></div>
      <div className="absolute top-1/3 right-24 w-1.5 h-1.5 bg-emerald-300 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-emerald-500 rounded-full opacity-50"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-emerald-400 rounded-full opacity-25"></div>
    </div>
  );
};

export default TradingHero;
