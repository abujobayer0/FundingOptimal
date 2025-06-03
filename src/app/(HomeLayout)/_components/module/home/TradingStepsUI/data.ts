export const steps = [
  { label: 'One Step' },
  { label: 'Two Step' },
  { label: 'Three Step' },
  { label: 'Instant Funding' },
];

export const amounts = [
  { label: '$5k', active: true },
  { label: '$10k' },
  { label: '$25k' },
  { label: '$50k' },
  { label: '$100k' },
  { label: '$200k' },
];

export interface ChallengeProgram {
  id: string;
  title: string;
  description: string;
  features: Array<{
    label: string;
    value: string;
  }>;
  pricing: Array<{
    capital: number;
    price: number;
  }>;
}

export const challengePrograms: ChallengeProgram[] = [
  {
    id: 'two-step',
    title: 'Two Step Challenge',
    description:
      'Perfect for traders who prefer a structured approach with two phases.',
    features: [
      { label: 'Daily Loss', value: '5%' },
      { label: 'Total Loss', value: '10%' },
      { label: 'Minimum Trading Days', value: '4 Days' },
      { label: 'Profit Split', value: 'Up to 90%' },
      { label: 'Leverage', value: '1:100' },
      { label: 'Stage 1 Profit Target', value: '8%' },
      { label: 'Stage 2 Profit Target', value: '5%' },
    ],
    pricing: [
      { capital: 5000, price: 35.99 },
      { capital: 10000, price: 71.99 },
      { capital: 25000, price: 167.99 },
      { capital: 50000, price: 299.99 },
      { capital: 100000, price: 599.99 },
      { capital: 200000, price: 1079.99 },
    ],
  },
  {
    id: 'one-step',
    title: 'One-Step',
    description:
      'Designed for confident traders seeking the fastest track to funding.',
    features: [
      { label: 'Profit Target', value: '10%' },
      { label: 'Daily Loss', value: '4%' },
      { label: 'Maximum Loss', value: '7%' },
      { label: 'Minimum Trading Days', value: '4 Days' },
      { label: 'Profit Split', value: 'Up to 80%' },
      { label: 'Trading Leverage', value: '1:50' },
    ],
    pricing: [
      { capital: 5000, price: 59.99 },
      { capital: 10000, price: 107.99 },
      { capital: 25000, price: 215.99 },
      { capital: 50000, price: 323.99 },
      { capital: 100000, price: 575.99 },
      { capital: 200000, price: 1139.99 },
    ],
  },
  {
    id: 'instant-funding',
    title: 'Instant Funding',
    description:
      'Get funded instantly with our most premium challenge program.',
    features: [
      { label: 'Daily Loss', value: '3%' },
      { label: 'Total Loss', value: '6%' },
      { label: 'Minimum Trading Days', value: '4 Days' },
      { label: 'Profit Split', value: 'Up to 80%' },
      { label: 'Leverage', value: '1:50' },
      { label: 'Consistency to Rewards', value: '13%' },
    ],
    pricing: [
      { capital: 5000, price: 78.0 },
      { capital: 10000, price: 114.0 },
      { capital: 25000, price: 226.8 },
      { capital: 50000, price: 334.8 },
      { capital: 100000, price: 586.8 },
      { capital: 200000, price: 1173.6 },
    ],
  },
  {
    id: 'three-steps',
    title: 'Three Steps Challenge',
    description: 'A comprehensive three-phase challenge for dedicated traders.',
    features: [
      { label: 'Daily Loss', value: '4%' },
      { label: 'Total Loss', value: '7%' },
      { label: 'Stage 1 Profit Target', value: '8%' },
      { label: 'Stage 2 Profit Target', value: '4%' },
      { label: 'Stage 3 Profit Target', value: '4%' },
      { label: 'Minimum Trading Days', value: '4 Days' },
      { label: 'Profit Split', value: 'Up to 80%' },
      { label: 'Leverage', value: '1:50' },
    ],
    pricing: [
      { capital: 25000, price: 180.0 },
      { capital: 50000, price: 288.0 },
      { capital: 100000, price: 468.0 },
      { capital: 200000, price: 816.0 },
    ],
  },
  {
    id: 'africa-starter',
    title: 'Africa Starter Challenge',
    description:
      'Special challenge designed for African traders with competitive rates.',
    features: [
      { label: 'Challenge Type', value: 'One-Step' },
      { label: 'Profit Target', value: '6%' },
      { label: 'Daily Loss', value: '3%' },
      { label: 'Total Loss', value: '6%' },
      { label: 'Minimum Trading Days', value: '4 Days' },
      { label: 'Profit Split', value: '85%' },
      { label: 'Leverage', value: '1:100' },
    ],
    pricing: [
      { capital: 2500, price: 23.99 },
      { capital: 5000, price: 41.99 },
      { capital: 10000, price: 71.99 },
      { capital: 25000, price: 131.99 },
      { capital: 50000, price: 227.99 },
    ],
  },
];

// Default features for backward compatibility
export const features = [
  [
    { label: 'Profit Target', value: '10%' },
    { label: 'Daily Loss', value: '4%' },
    { label: 'Maximum Loss', value: '7%' },
    { label: 'Minimum Trading Days', value: '4 Days' },
    { label: 'Profit Split', value: 'Up to 80%' },
    { label: 'Trading Leverage', value: '1:50' },
  ],
  [
    { label: 'Max Drawdown', value: '20%' },
    { label: 'Daily Drawdown', value: '8%' },
    { label: '100% Profit Split', value: '✓' },
    { label: '10 Day Payouts', value: '✓' },
  ],
];
