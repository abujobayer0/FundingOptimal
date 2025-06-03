'use client';

import React from 'react';
import { TwoColumnSection } from '@/components';
import { TargetIcon } from 'lucide-react';

export const VisionSection = () => {
  return (
    <TwoColumnSection
      icon={TargetIcon}
      title="Our Vision"
      description="At Fundingoptimal, our mission is to empower traders of all levels to achieve financial freedom and professional growth in the Forex markets. We're dedicated to creating a fair and flexible trading environment where skilled traders."
      buttonText="Learn More"
      imageSrc="/chartwithhand.png"
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
