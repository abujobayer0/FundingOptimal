export interface EvaluationFeature {
  text: string;
}

export interface EvaluationCard {
  id: string;
  title: string;
  description: string;
  features: EvaluationFeature[];
  isHighlighted?: boolean;
  badge?: string;
}
