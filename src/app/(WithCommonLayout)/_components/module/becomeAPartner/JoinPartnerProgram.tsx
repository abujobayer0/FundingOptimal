"use client";

import { SectionHeader } from "@/app/(WithCommonLayout)/_components/ui";
import React from "react";

interface StepData {
  stepNumber: string;
  title: string;
  description: string;
  imagePosition: "left" | "right";
}

interface StepCardProps extends StepData {
  index: number;
}

const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  description,
  imagePosition,
  index,
}) => {
  const isImageLeft = imagePosition === "left";

  const ContentSection = () => (
    <div className="flex flex-col items-start space-y-5 md:space-y-8 w-full lg:w-1/2">
      <h2 className="text-primary text-2xl md:text-[64px] font-semibold">
        {stepNumber}
      </h2>
      <h4 className="text-white text-lg md:text-[34px] max-w-sm leading-[44px]">
        {title}
      </h4>
      <p className="text-gray-400 text-sm md:text-[16px] leading-[24px] md:leading-[38px] max-w-lg">
        {description}
      </p>
    </div>
  );

  const ImageSection = () => (
    <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
      <div className="h-[360px] w-full border border-primary rounded-lg bg-gradient-to-br from-primary/5 to-transparent"></div>
    </div>
  );

  return (
    <div
      className={`flex flex-col lg:flex-row gap-10 items-center ${
        index > 0 ? "mt-12 md:mt-24" : ""
      }`}
    >
      {isImageLeft ? (
        <>
          <ImageSection />
          <ContentSection />
        </>
      ) : (
        <>
          <ContentSection />
          <ImageSection />
        </>
      )}
    </div>
  );
};

const BackgroundGlow: React.FC = () => (
  <div className="w-full flex items-center justify-center">
    <div className="absolute top-72 w-1/2 h-[300px] bg-primary/30 rounded-full blur-[200px] z-[-1]" />
  </div>
);

export default function JoinPartnerProgram() {
  const steps: StepData[] = [
    {
      stepNumber: "01.",
      title: "Sign up to become an Affiliate",
      description:
        "Create an account within our trader dashboard here and then submit your application by filling out the form within the affiliate section. Our team will evaluate your application and ensure you meet our affiliate criteria.",
      imagePosition: "right",
    },
    {
      stepNumber: "02.",
      title: "Create and share your Affiliate link",
      description:
        "Create, manage and track the performance of your affiliate links right from your Fundingoptimal™ account.",
      imagePosition: "left",
    },
    {
      stepNumber: "03.",
      title: "Earn up to 20% Commissions",
      description:
        "When users create an account with your affiliate link, you'll receive commission.",
      imagePosition: "right",
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full">
      <BackgroundGlow />

      <div className="z-0 py-12 overflow-hidden backdrop-blur-3xl">
        <SectionHeader
          badge="How to Join"
          title="How to Join our Partner Program"
          description="Joining our affiliate program is quick and easy. Fill out the registration form and agree to our terms and conditions."
          className="md:mt-0 mb-5 md:mb-16 items-center"
          noMargin={true}
        />

        <div className="space-y-0 flex flex-col w-full gap-10 md:gap-20">
          {steps.map((step, index) => (
            <StepCard key={step.stepNumber} {...step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
