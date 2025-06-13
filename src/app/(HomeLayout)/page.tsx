import {
  Evaluation,
  Steps,
  TradingHero,
  AnalyticsDashboard,
} from '@/app/(HomeLayout)/_components/module';
import React from 'react';
import { ProfitCalculator, TradingStepsUI } from './_components/module/home';
import Features from './_components/module/home/features';
import { DemoAccountNotice, Footer } from './_components/ui';
import SponsorLogoSlider from '@/components/ui/animated/sponsor-logo-slider/SponsorLogoSlider';

const Page = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DemoAccountNotice variant="floating" showCloseButton={true} />
      </div>
      <TradingHero />
      <Steps />
      <Evaluation />
      <TradingStepsUI />
      <SponsorLogoSlider />
      <Features />
      <AnalyticsDashboard />
      <ProfitCalculator />
      <Footer />
    </div>
  );
};

export default Page;
