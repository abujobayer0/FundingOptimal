import {
  Evaluation,
  Steps,
  TradingHero,
  AnalyticsDashboard,
} from '@/app/(WithCommonLayout)/_components/module';
import React from 'react';

const Page = () => {
  return (
    <div className="w-full">
      <TradingHero />
      <Steps />
      <Evaluation />
      <AnalyticsDashboard />
    </div>
  );
};

export default Page;
