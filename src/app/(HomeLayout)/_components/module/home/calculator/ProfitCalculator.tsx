"use client";

import React, { useState } from "react";
import { AccountSizeSlider } from "../../../ui";

const ProfitCalculator = () => {
  const [accountSize, setAccountSize] = useState(100000);
  const [profitMode, setProfitMode] = useState(10);
  const [calculatedProfit, setCalculatedProfit] = useState(10000);

  const handleAccountSizeChange = (newAccountSize: number) => {
    setAccountSize(newAccountSize);
    // Recalculate profit when account size changes
    setCalculatedProfit(newAccountSize * (profitMode / 100));
  };

  const handleProfitModeChange = (newProfitMode: number) => {
    setProfitMode(newProfitMode);

    setCalculatedProfit(accountSize * (newProfitMode / 100));
  };

  return (
    <div className=" bg-gradient-to-bl from-primary/5 to-transparent">
      <div className="text-white p-4 sm:p-6 md:p-8 max-w-7xl mx-auto my-0 mb-20 md:my-24">
        <div className="space-y-3 mb-8 md:mb-12">
          <span className="inline-block bg-primary/10 border border-primary/50 rounded-md px-3 sm:px-5 py-1.5 sm:py-2.5 text-primary/90 text-xs sm:text-sm">
            Calculator
          </span>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-white pt-4">
            How Much Can You Earn As{" "}
            <span className="text-primary">Funded Trader?</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white">
            On average our full-time traders have a monthly profit rate of 8.1%.
            You receive up to 90% of those profits.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 border border-primary/20 p-3 sm:p-4 rounded-lg bg-black/10">
          <div className="space-y-6 sm:space-y-8 border border-white/10 p-4 sm:p-8 rounded-xl bg-gradient-to-bl from-primary/5 via-primary/0 to-transparent">
            <h2 className="text-xl sm:text-2xl font-bold">
              How Much Can You Get?
            </h2>

            <div className="space-y-6">
              <AccountSizeSlider
                minValue={100000}
                maxValue={500000}
                initialValue={200000}
                step={10000}
                onChange={handleAccountSizeChange}
                formatValue={(value) => `$${value.toLocaleString()}`}
                label="Account Size"
              />

              <AccountSizeSlider
                minValue={5}
                maxValue={20}
                initialValue={10}
                step={1}
                onChange={handleProfitModeChange}
                formatValue={(value) => `${value}%`}
                label="Profit mode"
              />
              <p className="text-[10px] text-gray-300">
                Calculate your profit with our auraPips profit calculator
              </p>
            </div>

            <button className="group relative w-full bg-primary text-black py-2 sm:py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 text-sm sm:text-base overflow-hidden before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-all before:duration-700 hover:before:left-full before:skew-x-12">
              Get Funded Now
            </button>
          </div>

          <div className="border border-white/10 p-4 sm:p-8 rounded-xl space-y-4 bg-gradient-to-bl from-primary/5 via-primary/0 to-transparent">
            <div className="border rounded-xl border-primary/20 p-6 sm:p-10 bg-gradient-to-bl from-primary/5 via-primary/5 to-transparent w-full">
              <div className="text-center outline outline-primary/40 bg-primary p-4 sm:p-6 rounded-xl flex flex-col items-center justify-center max-w-sm mx-auto">
                <h3 className="text-[10px] sm:text-xs text-black">
                  Your Calculated Profit
                </h3>
                <p className="text-2xl sm:text-4xl font-bold text-black mt-2">
                  ${calculatedProfit.toLocaleString()}.00
                </p>
              </div>

              <div className="p-2 sm:p-4 rounded-lg text-center mt-2 sm:mt-4">
                <p className="text-xs sm:text-sm mt-1 text-gray-300">
                  Challenge Cost
                </p>
                <span className="text-xl sm:text-4xl font-bold">$38.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitCalculator;
