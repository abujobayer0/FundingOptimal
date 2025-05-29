"use client";

import {
  CommissionTierCard,
  SectionHeader,
} from "@/app/(WithCommonLayout)/_components/ui";

const AffiliateCommissionTiers: React.FC = () => {
  const tiers = [
    {
      tier: "Tier One",
      commission: "10%",
      description: "You will get 10% commission for each referral.",
      size: "lg:mt-64" as const,
    },
    {
      tier: "Tier Two",
      signUpThreshold: "After 100 Sign Ups",
      commission: "15%",
      description: "You will get 15% commission for each referral.",
      size: "lg:mt-20" as const,
    },
    {
      tier: "Tier Three",
      signUpThreshold: "After 500 Sign Ups",
      commission: "20%",
      description: "You will get 20% commission for each referral.",
      size: "lg:-mt-20" as const,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
      {/* Section Header */}
      <SectionHeader
        badge="How it works"
        title="How Funding optimal Affiliate Model Works"
        className="lg:mt-0 mt-10 mb-5 items-start"
        titleClassName="text-start"
        maxWidth="max-w-2xl"
      />

      {/* Commission Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center lg:justify-between gap-5 md:gap-6 md:-mt-28 w-full">
        {tiers.map((tier, index) => (
          <div key={index}>
            <CommissionTierCard {...tier} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffiliateCommissionTiers;
