'use client';

import React from 'react';
import { TwoColumnSection } from '@/components';
import { UsersIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const StorySection = () => {
  const router = useRouter();
  return (
    <TwoColumnSection
      icon={UsersIcon}
      title="Be Part of Our Story"
      description="What started as a modest vision has grown into a global force in the world of trading. FundingOptimal has empowered a vast community of traders around the world, helping them strive for financial independence and professional development.

Driven by our passion to unlock potential, we've evolved continuously — enhancing our platform, introducing powerful trading tools, and offering valuable educational content. We're committed to providing every trader, no matter their experience level, with a fair and supportive environment to grow and succeed.

This isn't just a trading firm — it's a thriving community built on opportunity, innovation, and shared success.

Join us as we shape the future of funded trading — together."
      buttonText="Join Our Community"
      imageSrc="/beAPartOfUs.png"
      imageAlt="Be Part of Our Story"
      reverse={true}
      showButton={false}
      showStats={false}
      stats={[
        {
          label: 'Active Traders',
          value: 5000,
        },
        {
          label: 'Success Rate',
          value: 85,
        },
        {
          label: 'Years Experience',
          value: 5,
        },
      ]}
      onButtonClick={() => router.push('/community')}
    />
  );
};
