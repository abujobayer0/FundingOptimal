import FeatureRow from './FeatureRow';
import { features } from './data';

export default function TradingStepsCard({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={`${className} rounded-xl p-[14px] border border-white/10 shadow-lg flex flex-col`}
    >
      <div className="mb-2 text-xl text-white">One-Step</div>
      <div className="mb-6 text-gray-400/80">
        Designed for confident traders seeking the fastest track to funding.
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 mb-6">
        {features.map((col, i) => (
          <div
            key={i}
            className="backdrop-blur-lg rounded-lg p-2.5 flex flex-col bg-gradient-to-br from-white/5 to-black/5 gap-1 border border-white/10"
          >
            {col.map((f, j) => (
              <FeatureRow key={j} label={f.label} value={f.value} />
            ))}
          </div>
        ))}
      </div>
      <button className="w-full py-2 rounded-lg border-[0.5px] border-white/50 text-white bg-transparent hover:bg-primary/10 transition font-normal text-sm">
        Buy Now
      </button>
    </div>
  );
}
