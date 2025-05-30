"use client";

import React, { useState } from "react";
import { AccountSizeSlider } from "../../ui";

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
    // Recalculate profit when profit mode changes
    setCalculatedProfit(accountSize * (newProfitMode / 100));
  };

  return (
    <div className="text-white p-4 sm:p-6 md:p-8 max-w-7xl mx-auto my-0 mb-20 md:my-24">
      <div className="space-y-3 mb-8 md:mb-12">
        <span className="inline-block bg-primary/10 border border-primary/50 rounded-md px-3 sm:px-5 py-1.5 sm:py-2.5 text-primary/50 text-xs sm:text-sm">
          Calculator
        </span>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-white pt-4">
          How Much Can You Earn As Funded Trader?
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-500">
          On average our full-time traders have a monthly profit rate of 8.1%.
          You receive up to 90% of those profits.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 border border-primary/50 p-3 sm:p-4 rounded-md">
        <div className="space-y-6 sm:space-y-8 border-[3px] border-primary/5 p-4 sm:p-8 rounded-xl">
          <h2 className="text-xl sm:text-2xl font-bold">
            How Much Can You Get?
          </h2>

          {/* slider */}
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
          </div>

          <button className="w-full bg-primary text-black py-2 sm:py-3 rounded-lg font-medium hover:bg-primary/90 transition text-sm sm:text-base">
            Get Funded Now
          </button>
        </div>

        <div className="border-[3px] border-primary/5 p-4 sm:p-8 rounded-xl space-y-4 bg-gradient-to-bl from-primary/10 via-primary/0 to-transparent">
          <div className="border rounded-xl border-primary/20 p-6 sm:p-10 bg-gradient-to-bl from-primary/20 via-primary/0 to-transparent w-full">
            <div className="text-center bg-primary p-4 sm:p-6 rounded-xl border-[4px] border-primary/30 flex flex-col items-center justify-center max-w-sm mx-auto">
              <h3 className="text-[10px] sm:text-xs text-black">
                Your Calculated Profit
              </h3>
              <p className="text-2xl sm:text-4xl font-bold text-black mt-2">
                ${calculatedProfit.toLocaleString()}.00
              </p>
            </div>

            <div className="p-2 sm:p-4 rounded-lg text-center mt-2 sm:mt-4">
              <p className="text-xs sm:text-sm mt-1">Challenge Cost</p>
              <span className="text-xl sm:text-4xl font-bold">$38.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitCalculator;
