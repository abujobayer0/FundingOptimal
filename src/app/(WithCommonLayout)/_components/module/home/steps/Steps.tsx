"use client";
import React from "react";
import BackgroundSVG from "./BackgroundSVG";
import { SectionHeader } from "@/app/(WithCommonLayout)/_components/ui";
import { stepsData } from "./data";
import StepCard from "./StepCard";

const Steps: React.FC = () => {
  return (
    <div className="w-full h-full bg-black">
      <BackgroundSVG />
      <div className="px-4 md:px-8 lg:px-16">
        <SectionHeader
          badge="How it works"
          title="Your Funding starts here"
          description="Our traders don't wait for payouts. Receive your first payout as early as your first funded trading day upon request—no maximum or minimum amount."
          className="md:mt-0 items-center"
          noMargin={true}
        />
        <div className="grid grid-cols-1 items-center justify-center  mx-auto md:grid-cols-3 gap-6 mt-8 md:mt-12 w-full max-w-7xl">
          {stepsData.map((step, index) => (
            <StepCard key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
