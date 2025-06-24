'use client';

import React, { useState } from 'react';
import { AccountSizeSlider } from '../../ui';

const challengePricing = {
  'Two Step Challenge': {
    5000: { price: 35.99, id: 66 },
    10000: { price: 71.99, id: 67 },
    25000: { price: 167.99, id: 68 },
    50000: { price: 299.99, id: 69 },
    100000: { price: 599.99, id: 70 },
    200000: { price: 1079.99, id: 71 },
  },
  'One Step Challenge': {
    5000: { price: 59.99, id: 73 },
    10000: { price: 107.99, id: 74 },
    25000: { price: 215.99, id: 75 },
    50000: { price: 323.99, id: 78 },
    100000: { price: 575.99, id: 76 },
    200000: { price: 1139.99, id: 77 },
  },
  'Instant Funding': {
    5000: { price: 78.0, id: 80 },
    10000: { price: 114.0, id: 81 },
    25000: { price: 226.8, id: 82 },
    50000: { price: 334.8, id: 83 },
    100000: { price: 586.8, id: 84 },
    200000: { price: 1173.6, id: 85 },
  },
  'Three Steps Challenge': {
    25000: { price: 180.0, id: 133 },
    50000: { price: 288.0, id: 134 },
    100000: { price: 468.0, id: 135 },
    200000: { price: 816.0, id: 136 },
  },
  'Africa Starter Challenge': {
    2500: { price: 23.99, id: 139 },
    5000: { price: 41.99, id: 140 },
    10000: { price: 71.99, id: 141 },
    25000: { price: 131.99, id: 142 },
    50000: { price: 227.99, id: 143 },
  },
};

const ProfitCalculator = () => {
  const [accountSize, setAccountSize] = useState(100000);
  const [profitMode, setProfitMode] = useState(10);
  const [calculatedProfit, setCalculatedProfit] = useState(10000);
  const [challengeType, setChallengeType] = useState('Two Step Challenge');

  const getAvailableAccountSizes = (type: string) => {
    const pricing = challengePricing[type as keyof typeof challengePricing];
    return Object.keys(pricing)
      .map(Number)
      .sort((a, b) => a - b);
  };

  const getChallengeCost = (size: number, type: string) => {
    const pricing = challengePricing[type as keyof typeof challengePricing];
    if (!pricing) return { price: 0, id: 0 };

    const availableSizes = Object.keys(pricing)
      .map(Number)
      .sort((a, b) => a - b);
    const exactMatch = pricing[size as keyof typeof pricing];

    if (exactMatch) return exactMatch;

    const closestSize = availableSizes.reduce((prev, curr) =>
      Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev
    );

    return pricing[closestSize as keyof typeof pricing] || { price: 0, id: 0 };
  };

  const getProductUrl = (id: number) => {
    return `https://checkout.fundingoptimal.com/?add-to-cart=${id}&quantity=1`;
  };

  const handleBuyNowClick = () => {
    const challengeData = getChallengeCost(accountSize, challengeType);
    const productUrl = getProductUrl(challengeData.id);
    window.open(productUrl, '_blank');
  };

  const handleAccountSizeChange = (newAccountSize: number) => {
    setAccountSize(newAccountSize);
    setCalculatedProfit(newAccountSize * (profitMode / 100));
  };

  const handleProfitModeChange = (newProfitMode: number) => {
    setProfitMode(newProfitMode);
    setCalculatedProfit(accountSize * (newProfitMode / 100));
  };

  const handleChallengeTypeChange = (newChallengeType: string) => {
    setChallengeType(newChallengeType);

    const availableSizes = getAvailableAccountSizes(newChallengeType);
    if (availableSizes.length > 0) {
      const newAccountSize = availableSizes.includes(accountSize)
        ? accountSize
        : availableSizes[0];
      setAccountSize(newAccountSize);
      setCalculatedProfit(newAccountSize * (profitMode / 100));
    }
  };

  const challengeCost = getChallengeCost(accountSize, challengeType);
  const availableAccountSizes = getAvailableAccountSizes(challengeType);

  return (
    <div className=" bg-gradient-to-bl from-primary/5 to-transparent">
      <div className="text-white p-4 sm:p-6 md:p-8 max-w-7xl mx-auto my-0 mb-20 md:my-24">
        <div className="space-y-3 mb-8 md:mb-12">
          <span className="inline-block bg-primary/10 border border-primary/50 rounded-md px-3 sm:px-5 py-1.5 sm:py-2.5 text-primary/90 text-xs sm:text-sm">
            Calculator
          </span>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-white pt-4">
            How Much Can You Earn As{' '}
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
              {/* Challenge Type Selector */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-white">
                  Challenge Type
                </label>
                <select
                  value={challengeType}
                  onChange={(e) => handleChallengeTypeChange(e.target.value)}
                  className="w-full p-3 bg-black/20 border border-primary/30 rounded-lg text-white focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60"
                >
                  <option value="Two Step Challenge">Two Step Challenge</option>
                  <option value="One Step Challenge">One Step Challenge</option>
                  <option value="Instant Funding">Instant Funding</option>
                  <option value="Three Steps Challenge">
                    Three Steps Challenge
                  </option>
                  <option value="Africa Starter Challenge">
                    Africa Starter Challenge
                  </option>
                </select>
              </div>

              <AccountSizeSlider
                minValue={Math.min(...availableAccountSizes)}
                maxValue={Math.max(...availableAccountSizes)}
                initialValue={accountSize}
                step={1}
                onChange={handleAccountSizeChange}
                formatValue={(value) => `$${value.toLocaleString()}`}
                label="Account Size"
                discreteValues={availableAccountSizes}
              />

              <AccountSizeSlider
                minValue={5}
                maxValue={10}
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

            <button
              onClick={handleBuyNowClick}
              className="group relative w-full bg-primary text-black py-2 sm:py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 text-sm sm:text-base overflow-hidden before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-all before:duration-700 hover:before:left-full before:skew-x-12"
            >
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
                <span className="text-xl sm:text-4xl font-bold">
                  ${challengeCost.price.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitCalculator;
