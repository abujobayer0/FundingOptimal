'use client';

import React from 'react';
import { TwoColumnSection } from '@/components';
import { TargetIcon } from 'lucide-react';

export const VisionSection = () => {
  return (
    <TwoColumnSection
      icon={TargetIcon}
      title="Our Vision"
      description="At FundingOptimal, our vision is to revolutionize the trading world by creating a gateway where ambition, discipline, and talent are rewarded — regardless of background, experience, or financial limitations.

We envision a future where every committed trader has access to the tools, capital, and support needed to reach their highest potential. We strive to level the playing field in the Forex and financial markets by offering a fair, transparent, and scalable trading environment — one where skill and strategy speak louder than personal wealth or status.

Our platform is designed to empower traders at all stages, from aspiring beginners to seasoned professionals, by providing the resources and flexibility to grow sustainably. We believe that financial freedom and professional development should be achievable goals, not distant dreams — and we work every day to make that a reality for our traders.

Beyond funding and profits, we are building a global community grounded in trust, integrity, and shared success. Our vision includes nurturing a culture of responsible trading, continuous learning, and long-term partnerships. We aim to be more than just a prop firm — we aim to be a career partner for traders who are serious about building a future through discipline and performance.

At FundingOptimal, we don't just invest in trades — we invest in traders."
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
