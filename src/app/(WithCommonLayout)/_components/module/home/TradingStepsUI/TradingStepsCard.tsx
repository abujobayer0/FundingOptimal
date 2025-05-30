import FeatureRow from "./FeatureRow";
import { features } from "./data";

export default function TradingStepsCard({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={`${className} rounded-xl p-[14px] border border-primary/10 shadow-lg flex flex-col`}
    >
      <div className="mb-2 text-xl text-white">One-Step</div>
      <div className="mb-6 text-gray-400/80">
        Designed for confident traders seeking the fastest track to funding.
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 mb-6">
        {features.map((col, i) => (
          <div
            key={i}
            className="bg-transparent backdrop-blur-lg rounded-lg p-2.5 flex flex-col gap-1 border border-primary/10"
          >
            {col.map((f, j) => (
              <FeatureRow key={j} label={f.label} value={f.value} />
            ))}
          </div>
        ))}
      </div>
      <button className="w-full py-2 rounded-lg border border-gray-400/50 text-gray-400/90 bg-transparent hover:bg-primary/10 transition font-normal text-sm">
        Buy Now
      </button>
    </div>
  );
}
