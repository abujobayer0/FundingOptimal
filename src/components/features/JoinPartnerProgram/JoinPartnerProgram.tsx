import { SectionHeader } from "@/components/common";
import React from "react";

export default function JoinPartnerProgram() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full">
      <div className="w-full flex items-center justify-center">
        <div className="absolute top-48 w-1/2 h-[300px] bg-emerald-500/30 rounded-full blur-[200px] z-[-1]" />
      </div>
      <div className="z-0 py-12 overflow-hidden backdrop-blur-3xl">
        {/* Blurred Green Background Glow */}

        {/* Section Header */}
        <SectionHeader
          badge="How to Join"
          title="How to Join our Partner Program"
          description="Joining our affiliate program is quick and easy. Fill out the registration form and agree to our terms and conditions."
          className="md:mt-0 mb-5 md:mb-16 items-center"
          noMargin={true}
        />

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-center ">
          {/* Left Content */}
          <div className="flex flex-col items-start space-y-5 md:space-y-8 w-full lg:w-1/2">
            <h2 className="text-green-500 text-2xl md:text-[64px] font-semibold">
              01.
            </h2>
            <h4 className="text-white text-lg md:text-[34px] max-w-sm leading-[44px]">
              Sign up to becomean Affiliate
            </h4>
            <p className="text-gray-400 text-sm md:text-[16px] leading-[24px] md:leading-[38px] max-w-lg">
              Create an account within our trader dashboard here and then submit
              your application by filling out the form within the affiliate
              section. Our team will evaluate your application and ensure you
              meet our affiliate criteria.
            </p>
          </div>

          {/* Right Content (Visual Box with border or image) */}
          <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
            <div className="h-[360px] w-full border border-emerald-400"></div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-center mt-12 md:mt-24">
          {/* Left Content (Visual Box with border or image) */}
          <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
            <div className="h-[360px] w-full border border-emerald-400"></div>
          </div>
          {/* Right Content */}
          <div className="flex flex-col items-start space-y-5 md:space-y-8 w-full lg:w-1/2">
            <h2 className="text-green-500 text-2xl md:text-[64px] font-semibold">
              02.
            </h2>
            <h4 className="text-white text-lg md:text-[34px] max-w-sm leading-[44px]">
              Create and shareyour Affiliate link
            </h4>
            <p className="text-gray-400 text-sm md:text-[16px] leading-[24px] md:leading-[38px] max-w-lg">
              Create, manage and track the performance of your affiliate
              linksright from your Fundingoptimal™ account.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-center mt-12 md:mt-24">
          {/* Left Content */}
          <div className="flex flex-col items-start space-y-5 md:space-y-8 w-full lg:w-1/2">
            <h2 className="text-green-500 text-2xl md:text-[64px] font-semibold">
              03.
            </h2>
            <h4 className="text-white text-lg md:text-[34px] max-w-sm leading-[44px]">
              Earn up to 20%Commissions
            </h4>
            <p className="text-gray-400 text-sm md:text-[16px] leading-[24px] md:leading-[38px] max-w-lg">
              When users create an account with your affiliate link, you’ll
              receive commission.
            </p>
          </div>

          {/* Right Content (Visual Box with border or image) */}
          <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
            <div className="h-[360px] w-full border border-emerald-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
