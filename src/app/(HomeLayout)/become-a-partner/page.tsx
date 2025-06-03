import {
  AffiliateCommissionTiers,
  AffiliatePartnerFAQs,
  AffiliateProgramHero,
  JoinPartnerProgram,
  ReferAndEarn,
} from "@/app/(HomeLayout)/_components/module";

export default function BecomeAPartnerPage() {
  return (
    <div className="flex flex-col w-full space-y-10 md:space-y-48 h-auto mb-10">
      <AffiliateProgramHero />
      <AffiliateCommissionTiers />
      <JoinPartnerProgram />
      <ReferAndEarn />
      <div className="px-4 md:px-6">
        <AffiliatePartnerFAQs />
      </div>
    </div>
  );
}
