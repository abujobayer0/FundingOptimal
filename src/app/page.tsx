import Evaluation from '@/components/Evaluation';
import TradingHero from '@/components/Hero';
import Steps from '@/components/Steps';
import React from 'react';

const Page = () => {
  return (
    <div className="w-full">
      <TradingHero />
      <Steps />
      <Evaluation />
    </div>
  );
};

export default Page;
