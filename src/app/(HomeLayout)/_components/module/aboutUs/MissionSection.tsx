'use client';

import React from 'react';
import { TwoColumnSection } from '@/components';
import { TargetIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const MissionSection = () => {
  const router = useRouter();
  return (
    <TwoColumnSection
      icon={TargetIcon}
      title="Our Mission"
      description="At FundingOptimal, our mission is to enable and inspire traders from all backgrounds and experience levels to pursue financial freedom, personal growth, and professional excellence through trading in the Forex markets. We believe that true trading talent should never be limited by access to capital. That's why we've built a platform that removes traditional barriers and offers fair, transparent, and accessible funding opportunities."
      buttonText="Get Funded"
      imageSrc="/mission.png"
      imageAlt="About Us"
      onButtonClick={() => router.push('/#get-funded')}
    />
  );
};
