"use client";

import React from "react";
import GradientButton from "../common/button/GradientButton";
import OutlineButton from "../common/button/OutlineButton";
import TitleWithLogo from "../common/TitleWithLogo";

const SecondaryHero = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-[80px] md:mt-[170px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-8">
            {/* Header Badge */}
            <TitleWithLogo
              className="justify-start"
              title="Affiliate Program"
            />

            {/* Main Heading */}
            <div className="space-y-0 md:space-y-7 lg:space-y-10">
              <h1 className="text-2xl md:text-3xl lg:text-[38px] xl:text-[44px] font-bold leading-[70px]">
                Join The FundingOptimal™
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-[70px] font-bold text-green-400">
                Affiliate Program
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-[16px] leading-[24px] md:leading-[38px] max-w-lg">
              FundingOptimal has the most competitive Affiliate Sales program in
              the prop-trading industry, offering a great opportunity for those
              who want to help their network gain access to trading capital and
              earn a healthy commission.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 space-y-2 pt-2 md:space-y-0">
              <GradientButton showIcon>Become A Partner</GradientButton>
              <OutlineButton showIcon>Get Funded</OutlineButton>
            </div>
          </div>

          {/* Right Content - Video Player */}
          <div className="flex justify-center lg:justify-end border border-green-500 h-[360px]"></div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryHero;
