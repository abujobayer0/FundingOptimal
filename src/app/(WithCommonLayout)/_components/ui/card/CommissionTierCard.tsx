"use client";

interface CommissionTierCardProps {
  tier: string;
  signUpThreshold?: string;
  commission: string;
  description: string;
  size?: string;
}

const CommissionTierCard: React.FC<CommissionTierCardProps> = ({
  tier,
  signUpThreshold,
  commission,
  description,
  size,
}) => {
  return (
    <div
      className={`h-fit border border-primary/30 rounded-md p-8 relative overflow-hidden group hover:border-primary/60 transition-all duration-300 bg-gradient-to-bl from-primary/50 via-primary/10 to-transparent flex flex-col justify-center gap-3 ${size}`}
      style={{ width: "100%" }}
    >
      {/* Threshold */}
      {signUpThreshold && (
        <div className="absolute z-10 mb-4 top-0 right-0 left-0">
          <div
            className={`group relative w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent text-white rounded-t-md flex items-center justify-center transition-all duration-500 text-[12px] overflow-hidden`}
            style={{
              boxShadow:
                "rgba(18, 255, 142, 0.5) 0px 0px 13px 0px inset, rgba(18, 255, 142, 0.5) 0px 0px 23px 0px inset, rgba(0, 255, 142, 0.01) 0px 0px 30px 0px inset",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-emerald-400/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            <div className="absolute inset-0 rounded-lg border border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />

            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              {signUpThreshold}
            </span>
          </div>
        </div>
      )}

      {/* Tier badge */}
      <div className="relative z-10 mb-6 mt-10">
        <div className="inline-block bg-primary/10 rounded-full px-3 py-1 text-sm text-primary">
          {tier}
        </div>
      </div>

      {/* Commission */}
      <div className="relative z-10 mb-6">
        <div className="text-4xl lg:text-[54px] font-bold text-white mb-2">
          {commission}
        </div>
        <div className="text-primary text-[16px] mt-5">Commission</div>
      </div>

      {/* Description */}
      <div className="relative z-10">
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/5 rounded-full blur-lg"></div>
    </div>
  );
};

export default CommissionTierCard;
