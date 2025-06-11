import { EvaluationCard } from '../../../../../../types/evaluation.types';

export const evaluationData: EvaluationCard[] = [
  {
    id: 'one-step',
    title: 'One-Step Challenge',
    description:
      'A fast-track solution for confident traders who want to get funded without lengthy evaluations. This one-phase challenge requires a 10% profit target, with tight but fair risk limits.',
    features: [
      { text: 'Profit Target: 10%' },
      { text: 'Daily Drawdown: 4%' },
      { text: 'Total Drawdown: 7%' },
      { text: 'Minimum Trading Days: 4' },
      { text: 'Profit Split: 80%' },
      { text: 'Leverage: 1:50' },
      { text: 'Capital: $5K–$200K' },
      { text: 'Starting Fee: From $59.99' },
    ],
  },
  {
    id: 'two-step',
    title: 'Two-Step Challenge',
    description:
      'An affordable and structured way to earn a funded account. This challenge involves two phases with realistic profit targets and generous conditions.',
    features: [
      { text: 'Phase 1 Target: 8%' },
      { text: 'Phase 2 Target: 5%' },
      { text: 'Daily Drawdown: 5%' },
      { text: 'Total Drawdown: 10%' },
      { text: 'Minimum Trading Days: 4' },
      { text: 'Profit Split: 90%' },
      { text: 'Leverage: 1:100' },
      { text: 'Capital: $5K–$200K' },
      { text: 'Starting Fee: From $35.99' },
    ],
  },
  {
    id: 'three-step',
    title: 'Three-Step Challenge',
    isHighlighted: true,
    description:
      'A comprehensive evaluation journey designed for traders who want to prove their consistency through multiple phases. With three profit milestones and reliable drawdown rules.',
    features: [
      { text: 'Phase 1 Target: 8%' },
      { text: 'Phase 2 Target: 4%' },
      { text: 'Phase 3 Target: 4%' },
      { text: 'Daily Drawdown: 4%' },
      { text: 'Total Drawdown: 7%' },
      { text: 'Minimum Trading Days: 4' },
      { text: 'Profit Split: 80%' },
      { text: 'Leverage: 1:50' },
      { text: 'Capital: $25K–$200K' },
      { text: 'Starting Fee: From $180.00' },
    ],
  },
  {
    id: 'instant-funding',
    title: 'Instant Funding',
    description:
      'Skip the challenge and start trading real capital immediately. This model offers instant funding with institutional-style rules focused on consistency and risk control.',
    features: [
      { text: 'No Evaluation / No Profit Target' },
      { text: 'Consistency Requirement: 13%' },
      { text: 'Daily Drawdown: 3%' },
      { text: 'Total Drawdown: 6%' },
      { text: 'Minimum Trading Days: 4' },
      { text: 'Profit Split: 80%' },
      { text: 'Leverage: 1:50' },
      { text: 'Capital: $5K–$200K' },
      { text: 'Starting Fee: From $78.00' },
    ],
  },
  {
    id: 'africa-starter',
    title: 'Africa Starter Challenge',
    description:
      'Tailored for the African market, this entry-level challenge offers favorable conditions and affordable pricing. With a low 6% profit target and relaxed risk rules.',
    features: [
      { text: 'Challenge Type: One-Step' },
      { text: 'Profit Target: 6%' },
      { text: 'Daily Drawdown: 3%' },
      { text: 'Total Drawdown: 6%' },
      { text: 'Minimum Trading Days: 4' },
      { text: 'Profit Split: 85%' },
      { text: 'Leverage: 1:100' },
      { text: 'Capital: $2.5K–$50K' },
      { text: 'Starting Fee: From $23.99' },
    ],
  },
];
