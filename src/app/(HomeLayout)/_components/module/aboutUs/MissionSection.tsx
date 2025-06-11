'use client';

import React from 'react';
import { TwoColumnSection } from '@/components';
import { TargetIcon } from 'lucide-react';
import { useScrollTo } from '@/hooks/useScrollTo';

export const MissionSection = () => {
  const { scrollTo } = useScrollTo();
  return (
    <TwoColumnSection
      icon={TargetIcon}
      title="Our Mission"
      description="At FundingOptimal, our mission is to enable and inspire traders from all backgrounds and experience levels to pursue financial freedom, personal growth, and professional excellence through trading in the Forex markets.

We believe that true trading talent should never be limited by access to capital. That's why we've built a platform that removes traditional barriers and offers fair, transparent, and accessible funding opportunities. Whether you are an aspiring trader taking your first steps or a seasoned professional aiming to scale, FundingOptimal is here to support your journey.

Our goal is not just to provide capital — it's to cultivate a community of disciplined, responsible, and ambitious traders. We do this by delivering:

Straightforward funding programs that reward skill and consistency
Fast, reliable payouts to ensure you are compensated quickly for your performance
A clear and scalable growth path that allows traders to increase their account size as they demonstrate success
Educational and strategic guidance to promote responsible, long-term trading behavior

At the core of our mission is a deep respect for the craft of trading. We are here to elevate the standard of prop trading by giving dedicated individuals the tools, capital, and support they need to thrive in today's markets — and build a career they can be proud of.

Join us in shaping the future of trading, one smart decision at a time."
      buttonText="Get Funded"
      imageSrc="/mission.png"
      imageAlt="About Us"
      onButtonClick={() => {
        scrollTo('get-funded');
      }}
    />
  );
};
