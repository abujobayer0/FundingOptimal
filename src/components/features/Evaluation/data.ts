import { EvaluationCard } from './types';

export const evaluationData: EvaluationCard[] = [
  {
    id: 'one-step',
    title: 'One-Step',
    description:
      'Designed for confident traders seeking the fastest track to funding.',
    features: [
      { text: 'No trading evaluation' },
      { text: 'No targets' },
      { text: 'Instant payouts' },
      { text: 'Up to 90% Performance Split' },
      { text: 'Up to $50K Starting Capital' },
    ],
  },
  {
    id: 'two-step',
    title: 'Two-Step',
    description:
      'For those seeking affordability and the fastest way to prove their skills and get funded.',
    features: [
      { text: '2-step evaluation' },
      { text: '5% Target' },
      { text: 'Program fees from as low as $59' },
      { text: 'Up to 90% Performance Split' },
      { text: 'Up to $100,000 starting capital' },
    ],
  },
  {
    id: 'instant-funding',
    title: 'Instant Funding',
    description:
      'For traders looking to trade futures markets with institutional-grade conditions.',
    features: [
      { text: 'No trading evaluation' },
      { text: 'No targets' },
      { text: 'Instant payouts' },
      { text: 'Up to 90% Performance Split' },
      { text: 'Up to $50K Starting Capital' },
      { text: 'Up to $400,000 starting capital' },
    ],
    isHighlighted: true,
  },
  {
    id: 'three-step',
    title: 'Three-Step',
    description: 'For traders who prefer the conventional funded trader route.',
    features: [
      { text: 'First Payout On Demand' },
      { text: '1, 2 & 3 Phase programs available' },
      { text: 'Static & Trailing Drawdown available' },
      { text: 'Unlimited Trading Days' },
      { text: 'Up to $400,000 starting capital' },
    ],
  },
];
