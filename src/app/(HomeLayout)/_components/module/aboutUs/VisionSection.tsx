'use client';

import React from 'react';
import { TwoColumnSection } from '@/components';
import { TargetIcon } from 'lucide-react';

export const VisionSection = () => {
  return (
    <TwoColumnSection
      icon={TargetIcon}
      title="Our Vision"
      description="At FundingOptimal, our vision is to revolutionize the trading world by creating a gateway where ambition, discipline, and talent are rewarded — regardless of background, experience, or financial limitations. We envision a future where every committed trader has access to the tools, capital, and support needed to reach their highest potential. We strive to level the playing field in the Forex and financial markets by offering a fair, transparent, and scalable trading environment — one where skill and strategy speak louder than personal wealth or status."
      buttonText="Learn More"
      imageSrc="/vision.png"
      imageAlt="Our Vision"
      reverse={true}
      showStats={true}
      stats={[
        {
          label: 'Traders',
          value: 1000,
        },
        {
          label: 'Payouts',
          value: 100,
          prefix: '$',
        },
        {
          label: 'Countries',
          value: 100,
        },
      ]}
      onButtonClick={() => console.log('Learn More clicked')}
    />
  );
};
