import {
  Evaluation,
  Steps,
  TradingHero,
  AnalyticsDashboard,
} from '@/app/(WithCommonLayout)/_components/module';
import React from 'react';
import { ProfitCalculator, TradingStepsUI } from './_components/module/home';
import Features from './_components/module/home/features';

const Page = () => {
  return (
    <div className="w-full">
      <TradingHero />
      <Steps />
      <Evaluation />
      <TradingStepsUI />
      <Features />
      <AnalyticsDashboard />
      <ProfitCalculator />
    </div>
  );
};

export default Page;
