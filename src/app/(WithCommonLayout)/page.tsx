import {
  Evaluation,
  Steps,
  TradingHero,
  AnalyticsDashboard,
} from '@/app/(WithCommonLayout)/_components/module';
import React from 'react';
import { ProfitCalculator } from './_components/module/home';

const Page = () => {
  return (
    <div className="w-full">
      <TradingHero />
      <Steps />
      <Evaluation />
      <AnalyticsDashboard />
      <ProfitCalculator />
    </div>
  );
};

export default Page;
