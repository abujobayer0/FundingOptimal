import React from "react";
import ReactSpeedometer, { Transition } from "react-d3-speedometer";
import { WinRateGaugeProps } from "@/types";

const WinRateGauge: React.FC<WinRateGaugeProps> = ({
  percentage = 54,
  title = "Current Win Rate",
}) => {
  return (
    <div className="bg-white/5  overflow-hidden relative border border-white/10 rounded-lg p-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[100px] bg-gradient-to-b from-primary to-transparent rounded-full blur-[40px] z-0"></div>

      <h3 className="text-xs font-semibold text-white mb-2 relative z-10">
        {title}
      </h3>
      <div className="text-center relative z-10 mb-2">
        <div className="text-2xl font-bold text-white">{percentage}%</div>
        <p className="text-xs font-semibold text-white/50">
          Current Percentage
        </p>
      </div>

      <div className="flex justify-center items-center relative z-10 h-[160px]">
        <div className="flex justify-center items-end relative">
          <ReactSpeedometer
            width={240}
            height={160}
            minValue={0}
            maxValue={100}
            value={percentage}
            needleColor="white"
            startColor="#FFFFFF0A"
            endColor="#12FF8E"
            segments={2}
            segmentColors={["#12FF8E", "#FFFFFF0A"]}
            currentValueText=""
            customSegmentStops={[0, percentage, 100]}
            ringWidth={35}
            needleHeightRatio={0.5}
            needleTransition={Transition.easeElasticOut}
            needleTransitionDuration={1000}
            textColor="transparent"
            valueTextFontSize="0px"
            labelFontSize="0px"
          />

          <div
            className="absolute w-4 h-4 bg-white rounded-full border-2 border-white z-20"
            style={{
              bottom: "30px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WinRateGauge;
