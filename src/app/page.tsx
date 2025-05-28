import { Evaluation, Steps } from "@/components";
import TradingHero from "@/components/features/Hero";
import React from "react";

const Page = () => {
  return (
    <div className="w-full">
      <TradingHero />
      <Steps />
      <Evaluation />
    </div>
  );
};

export default Page;
