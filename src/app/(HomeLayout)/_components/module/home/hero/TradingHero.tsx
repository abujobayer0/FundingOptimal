'use client';
import React from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'motion/react';
import TrustpilotRating from '../../../ui/TrustPilot';
import TitleWithIcon from '../../../ui/TitleWithIcon';
import GradientButton from '../../../../../../components/ui/button/GradientButton';
import OutlineButton from '../../../../../../components/ui/button/OutlineButton';
import { useScrollTo } from '@/hooks/useScrollTo';
import Sphere from '@/components/ui/animated/sphere/Sphere';

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
  const { scrollTo } = useScrollTo();
  const tradersCount = useCountAnimation(1000);
  const payoutsCount = useCountAnimation(100);
  const countriesCount = useCountAnimation(100);
  const supportCount = useCountAnimation(24);

  return (
    <>
      <div className="bg-transparent mt-24 md:mt-32 text-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Background animated sphere */}
        <div className="absolute inset-0 flex items-center -top-32 justify-center p-10 scale-75 -z-10 pointer-events-none">
          <Sphere />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center justify-center min-h-[600px]">
          <div className="mx-auto w-full flex flex-col items-center">
            {/* this is 1 */}
            <TitleWithIcon
              title="We Fund the Fearless"
              className="justify-center !pt-0 !pb-0 !md:py-0 mb-4"
            />

            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center mb-12 space-y-8 lg:space-y-0">
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
                  className="text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold md:mb-4 leading-tight"
                >
                  <span className="bg-gradient-to-l from-primary via-primary to-white bg-clip-text text-transparent">
                    Master yourself,achieve the optimal.
                  </span>
                </motion.h1>

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
                  <GradientButton
                    showIcon
                    onClick={() => scrollTo('get-funded')}
                  >
                    Get Funded Now
                  </GradientButton>

                  <OutlineButton showIcon>Learn More</OutlineButton>
                </motion.div>
              </motion.div>
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
    </>
  );
};

export default TradingHero;
