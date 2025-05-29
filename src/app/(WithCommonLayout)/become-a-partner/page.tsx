import {
  AffiliateCommissionTiers,
  AffiliatePartnerFAQs,
  AffiliateProgramHero,
  JoinPartnerProgram,
  ReferAndEarn,
} from "@/app/(WithCommonLayout)/_components/module";

export default function BecomeAPartnerPage() {
  return (
    <div className="flex flex-col w-full space-y-10 md:space-y-48 h-auto mb-10">
      <AffiliateProgramHero />
      <AffiliateCommissionTiers />
      <JoinPartnerProgram />
      <ReferAndEarn />
      <AffiliatePartnerFAQs />
    </div>
  );
}
