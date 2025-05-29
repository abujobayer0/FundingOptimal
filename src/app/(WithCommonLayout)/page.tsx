import {
  Evaluation,
  Steps,
  TradingHero,
} from "@/app/(WithCommonLayout)/_components/module";
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
