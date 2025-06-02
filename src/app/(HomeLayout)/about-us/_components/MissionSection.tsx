'use client';

import React from 'react';
import { TwoColumnSection } from '@/components';
import { TargetIcon } from 'lucide-react';

export const MissionSection = () => {
  return (
    <TwoColumnSection
      icon={TargetIcon}
      title="Our Mission"
      description="At Fundingoptimal, our mission is to empower traders of all levels to achieve financial freedom and professional growth in the Forex markets.where skilled traders can thrive—whether through high-frequency trading, advanced strategies, or unique approaches. By offering accessible funding, swift payouts, and an open path for traders to scale,"
      buttonText="Get Funded"
      imageSrc="/chart.png"
      imageAlt="About Us"
      onButtonClick={() => console.log('Get Funded clicked')}
    />
  );
};
