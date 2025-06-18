'use client';

import React, { useState } from 'react';
import TradingStepsCard from './TradingStepsCard';
import { amounts, steps } from './data';
import { motion } from 'motion/react';
import { useScrollTo } from '@/hooks/useScrollTo';

const stepToChallengeMap: { [key: string]: string } = {
  'One Step': 'one-step',
  'Two Step': 'two-step',
  'Three Step': 'three-steps',
  'Instant Funding': 'instant-funding',
  'Africa Starter': 'africa-starter',
};

const amountToCapitalMap: { [key: string]: number } = {
  $5k: 5000,
  $10k: 10000,
  $25k: 25000,
  $50k: 50000,
  $100k: 100000,
  $200k: 200000,
};

export default function TradingStepsUI() {
  const [selectedStep, setSelectedStep] = useState('One Step');
  const [selectedAmount, setSelectedAmount] = useState('$5k');
  const getProductUrl = (id: number) => {
    // const baseUrl = 'https://fundingoptimal.com/checkout/index.php/product';
    const baseUrl = `https://fundingoptimal.com/checkout/?add-to-cart=${id}&quantity=1`;
    // let url;
    // switch (id) {
    //   case 'one-step':
    //     url = `${baseUrl}/one-step-evaluation/`;
    //     break;
    //   case 'two-step':
    //     url = `${baseUrl}/two-step-evaluation/`;
    //     break;
    //   case 'instant-funding':
    //     url = `${baseUrl}/instant-funding/`;
    //     break;
    //   default:
    //     url = '#get-funded';
    // }

    return baseUrl;
  };

  const { scrollTo } = useScrollTo();

  const handleBuyNowClick = (id: number) => {
    const productUrl = getProductUrl(id);
    if (productUrl.startsWith('http')) {
      window.open(productUrl, '_blank');
    } else {
      scrollTo('get-funded');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      id="get-funded"
      className="flex flex-col items-center pt-0 md:pt-16 pb-16 md:pb-0 max-w-7xl px-4 md:px-6 mx-auto"
    >
      <motion.div
        className="flex flex-col md:flex-row gap-8 mb-8 w-full md:w-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {steps.map((step, idx) => (
          <motion.div
            key={step.label}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            style={{
              boxShadow:
                selectedStep === step.label
                  ? `
    rgba(18, 255, 142, 0.15) 0px 0px 25px 0px inset,
    rgba(18, 255, 142, 0.12) 0px 0px 35px 0px inset,
    rgba(18, 255, 142, 0.1) 0px 0px 35px 0px inset,
    rgba(18, 255, 142, 0.08) 0px 0px 45px 0px inset
  `
                  : `
    rgba(18, 255, 142, 0.05) 0px 0px 15px 0px inset,
    rgba(18, 255, 142, 0.03) 0px 0px 20px 0px inset,
    rgba(18, 255, 142, 0.02) 0px 0px 20px 0px inset,
    rgba(18, 255, 142, 0.01) 0px 0px 25px 0px inset
  `,
            }}
            className={`flex flex-row px-8 py-2 gap-4 rounded-lg items-center cursor-pointer w-full md:w-auto transition-all ${
              selectedStep === step.label
                ? 'border-primary/30 bg-primary/5'
                : 'hover:bg-primary/5'
            }`}
            onClick={() => setSelectedStep(step.label)}
          >
            <div
              className={`size-10 flex items-center justify-center rounded-lg font-semibold text-lg border-2 transition-all ${
                selectedStep === step.label
                  ? 'bg-primary/20 border-primary text-primary'
                  : 'bg-primary/5 border-primary/10 text-gray-300'
              }`}
            >
              <span>{idx + 1}</span>
            </div>
            <span
              className={`text-lg font-normal transition-all ${
                selectedStep === step.label ? 'text-primary' : 'text-white'
              }`}
            >
              {step.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="flex flex-row overflow-x-auto items-center w-full max-w-3xl mb-12 px-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {amounts.map((amt, idx) => (
          <React.Fragment key={amt.label}>
            <div
              className="flex flex-col items-center min-w-fit cursor-pointer transition-all"
              onClick={() => setSelectedAmount(amt.label)}
            >
              <div
                className={`size-4 md:size-5 rounded-full flex items-center justify-center border mb-1 p-[2px] transition-all ${
                  selectedAmount === amt.label
                    ? 'border-primary'
                    : 'border-gray-600/50 hover:border-primary/50'
                }
               `}
              >
                <span
                  className={`size-2 md:size-3 rounded-full transition-all ${
                    selectedAmount === amt.label
                      ? 'bg-primary'
                      : 'hover:bg-primary/50'
                  }`}
                ></span>
              </div>
              <span
                className={`text-xs md:text-sm mt-0.5 text-center whitespace-nowrap transition-all ${
                  selectedAmount === amt.label
                    ? 'text-primary'
                    : 'text-[#a7a7a7] hover:text-primary/70'
                }`}
              >
                {amt.label}
              </span>
            </div>
            {idx < amounts.length - 1 && (
              <div className="flex-1 h-[2px] bg-gray-100/30 mx-3 md:mx-7 min-w-[20px]" />
            )}
          </React.Fragment>
        ))}
      </motion.div>
      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 mb-16 gap-4 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <TradingStepsCard
          getProductUrl={handleBuyNowClick}
          className="bg-gradient-to-br from-primary/20 via-primary/5 to-transparent"
          challengeId={stepToChallengeMap[selectedStep] || 'one-step'}
          selectedCapital={amountToCapitalMap[selectedAmount] || 5000}
        />
      </motion.div>
    </motion.section>
  );
}
