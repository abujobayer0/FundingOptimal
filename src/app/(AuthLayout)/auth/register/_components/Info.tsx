'use client';
import { DollarSign, LifeBuoy, User } from 'lucide-react';
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import logo from '@/assets/fundingoptimal-logo.png';

const features = [
  {
    icon: <User className="w-5 h-5 text-primary" />,
    title: 'Invite unlimited colleagues',
    desc: 'Collaborate with your team and manage funding opportunities together seamlessly.',
  },
  {
    icon: <LifeBuoy className="w-5 h-5 text-primary" />,
    title: 'Expert support',
    desc: 'Get dedicated support from our funding experts to maximize your success rate.',
  },
  {
    icon: <DollarSign className="w-5 h-5 text-primary" />,
    title: 'Secure platform',
    desc: 'Your sensitive business data is protected with enterprise-grade security measures.',
  },
];

const Info = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex-1 hidden md:flex flex-col max-h-[614.473px] items-start justify-between px-8 py-12 md:py-0 md:pl-16 md:pr-8"
    >
      <motion.div
        variants={itemVariants}
        className="flex items-center h-[58px] gap-2 overflow-hidden w-full"
      >
        <div className="flex items-center gap-2">
          <Image src={logo} alt="FundingOptimal" width={40} height={40} />
          <div className="flex flex-col">
            <span className="text-white font-semibold text-lg">
              FUNDINGOPTIMAL
            </span>
            <span className="text-gray-400 text-xs -mt-1">
              We Fund the Fearless
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-4"
      >
        <motion.h1
          variants={itemVariants}
          className="text-[34px] font-semibold text-white"
        >
          Join FundingOptimal Today
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-2 text-white flex items-center gap-2 text-[16px]"
        >
          Secure registration
        </motion.p>
        <motion.ul variants={containerVariants} className="mt-6 space-y-6">
          {features.map((f, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              className="flex flex-col items-start gap-4"
            >
              <span className="mt-1">{f.icon}</span>
              <div>
                <div className="text-white font-medium text-base">
                  {f.title}
                </div>
                {f.desc && (
                  <div className="text-[#A2A2A2] text-sm mt-1">{f.desc}</div>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Info;
