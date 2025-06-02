import React from "react";
import CheckIcon from "../../../ui/CheckIcon";
import { EvaluationFeature } from "../../../../../../types/evaluation.types";

interface FeatureItemProps {
  feature: EvaluationFeature;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => (
  <div className="flex items-center gap-4">
    <CheckIcon />
    <span className="text-[13px]">{feature.text}</span>
  </div>
);

export default FeatureItem;
