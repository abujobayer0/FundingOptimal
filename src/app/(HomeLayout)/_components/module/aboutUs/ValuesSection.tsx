'use client';

import React from 'react';
import { TwoColumnSection } from '@/components';
import { ShieldCheckIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const ValuesSection = () => {
  const router = useRouter();
  return (
    <TwoColumnSection
      icon={ShieldCheckIcon}
      title="What We Stand For"
      description="At FundingOptimal, our guiding principles shape every decision we make and every experience we deliver. These values reflect who we are, what we believe in, and how we serve the trading community.

Efficiency with Integrity
We prioritize quick, clear, and trustworthy execution. From account setup to profit payouts, we believe in moving fast — but never at the expense of honesty. Every process is handled with precision and full transparency, because your confidence in us is non-negotiable.

Uncompromising Standards
We don't aim to be average — we aim to be exceptional. Whether it's our technology, our support, or our funding models, we constantly push for the highest quality. We challenge ourselves daily to outperform expectations, so that traders can rely on a platform that leads the industry.

Dedication to Growth
Your progress is our purpose. We're not just here to fund trades — we're here to help you develop, scale, and thrive. That means investing in better tools, smarter systems, and more opportunities for advancement. Our commitment is to grow with you, every step of the way."
      buttonText="View Programs"
      imageSrc="/westandfor.jpeg"
      imageAlt="What We Stand For"
      showStats={false}
      showButton={false}
      onButtonClick={() => router.push('/programs')}
    />
  );
};
