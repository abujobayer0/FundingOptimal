import React from 'react';
import { StepCardProps } from './types';

export const stepsData: Omit<StepCardProps, 'index'>[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chart-no-axes-combined-icon lucide-chart-no-axes-combined"
      >
        <path d="M12 16v5" />
        <path d="M16 14v7" />
        <path d="M20 10v11" />
        <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
        <path d="M4 18v3" />
        <path d="M8 14v7" />
      </svg>
    ),
    title: 'Funding challenges',
    description:
      'Fast-track your success with a single-phase evaluation — start trading sooner.',
    buttonText: 'Get Funded Now',
    gradientIntensity: 'light',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-bitcoin-icon lucide-bitcoin"
      >
        <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
      </svg>
    ),
    title: 'Trade Forex, Indices & Crypto',
    description:
      'Access top markets with raw spreads and high leverage & Keep up to 90% of your profits',
    buttonText: 'Get Funded Now',
    gradientIntensity: 'strong',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-align-horizontal-distribute-center-icon lucide-align-horizontal-distribute-center"
      >
        <rect width="6" height="14" x="4" y="5" rx="2" />
        <rect width="6" height="10" x="14" y="7" rx="2" />
        <path d="M17 22v-5" />
        <path d="M17 7V2" />
        <path d="M7 22v-3" />
        <path d="M7 5V2" />
      </svg>
    ),
    title: 'Get Funded',
    description:
      'Pass the challenge, get funded, and start earning. Withdraw up to 80% of your profits with ease.',
    buttonText: 'Get Funded Now',
    gradientIntensity: 'light',
  },
];
