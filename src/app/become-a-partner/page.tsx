import { SecondaryHero } from "@/components";
import AffiliateCommissionTiers from "@/components/features/AffiliateCommission/AffiliateCommissionTiers";
import AffiliatePartnerFAQs from "@/components/features/AffiliatePartnerFAQs/AffiliatePartnerFAQs";
import JoinPartnerProgram from "@/components/features/JoinPartnerProgram/JoinPartnerProgram";
import ReferAndEarn from "@/components/features/ReferAndEarn/ReferAndEarn";
import React from "react";

export default function BecomeAPartnerPage() {
  return (
    <div className="flex flex-col w-full space-y-10 md:space-y-48 h-auto mb-10">
      <SecondaryHero />
      <AffiliateCommissionTiers />
      <JoinPartnerProgram />
      <ReferAndEarn />
      <AffiliatePartnerFAQs />
    </div>
  );
}
