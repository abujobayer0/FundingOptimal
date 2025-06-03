import FeatureRow from './FeatureRow';
import { challengePrograms } from './data';
import { useState, useEffect } from 'react';

export default function TradingStepsCard({
  className,
  challengeId = 'one-step',
  selectedCapital: externalSelectedCapital,
}: {
  className?: string;
  challengeId?: string;
  selectedCapital?: number;
}) {
  const [selectedCapital, setSelectedCapital] = useState(
    externalSelectedCapital || 5000
  );

  useEffect(() => {
    if (externalSelectedCapital) {
      setSelectedCapital(externalSelectedCapital);
    }
  }, [externalSelectedCapital]);

  const challenge =
    challengePrograms.find((c) => c.id === challengeId) || challengePrograms[1];
  const selectedPricing =
    challenge.pricing.find((p) => p.capital === selectedCapital) ||
    challenge.pricing[0];

  const midPoint = Math.ceil(challenge.features.length / 2);
  const leftFeatures = challenge.features.slice(0, midPoint);
  const rightFeatures = challenge.features.slice(midPoint);

  return (
    <div
      className={`${className} rounded-xl p-[14px] border border-white/10 shadow-lg flex flex-col`}
    >
      <div className="mb-2 text-xl text-white">{challenge.title}</div>
      <div className="mb-6 text-gray-400/80">{challenge.description}</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 mb-6">
        <div className="backdrop-blur-lg rounded-lg p-2.5 flex flex-col bg-gradient-to-br from-white/5 to-black/5 gap-1 border border-white/10">
          {leftFeatures.map((f, j) => (
            <FeatureRow key={j} label={f.label} value={f.value} />
          ))}
        </div>
        <div className="backdrop-blur-lg rounded-lg p-2.5 flex flex-col bg-gradient-to-br from-white/5 to-black/5 gap-1 border border-white/10">
          {rightFeatures.map((f, j) => (
            <FeatureRow key={j} label={f.label} value={f.value} />
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex w-full flex-col md:flex-row md:items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-white text-lg">Pricing:</span>
            <span className="text-2xl font-bold text-white">
              ${selectedPricing.price}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:flex-wrap justify-between w-full px-4 text-md text-white/80">
            <label className="flex items-center  gap-1">
              <input
                type="radio"
                name={`pricing-${challengeId}`}
                defaultChecked
                className="w-3 h-3"
              />
              Max Drawdown 20%
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name={`pricing-${challengeId}`}
                className="w-3 h-3"
              />
              Daily Drawdown 8%
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name={`pricing-${challengeId}`}
                className="w-3 h-3"
              />
              100% Profit Split
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name={`pricing-${challengeId}`}
                className="w-3 h-3"
              />
              10 Day Payouts
            </label>
          </div>
        </div>

        <button className="w-full mt-4  md:mt-0 max-w-xs py-2 rounded-lg border-[0.5px] border-white/50 text-white bg-transparent hover:bg-primary/10 transition font-normal text-sm">
          Buy Now
        </button>
      </div>
    </div>
  );
}
