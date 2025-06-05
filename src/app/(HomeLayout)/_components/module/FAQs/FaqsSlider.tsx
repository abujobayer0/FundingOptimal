'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SliderItem from './Slider.Item';

const faqs = [
  {
    badge: '35+ Questions',
    title: 'General FAQs',
    questions: [
      {
        question: 'Are you a broker?',
        answer:
          "We are a proprietary trading firm, not a broker. We don't take deposits from traders to manage their own funds. Instead, traders pay a fee to participate in our evaluation process, and upon success, gain access to trade with our firm's capital under strict risk controls.",
      },
      {
        question: 'What trading platform do we offer?',
        answer:
          'Our platform currently offers exclusive access to MetaTrader 5.',
      },
      {
        question: 'Do we use real funds in our trades?',
        answer:
          'FundingOptimal provides simulated evaluation accounts that do not involve real money. After completing the evaluation successfully, you retain access to the simulated trading platform and become eligible to earn payout fees based on your trading results.',
      },
      {
        question: 'How do I pay taxes when I trade with you?',
        answer:
          'FundingOptimal is not authorized to offer tax advice. We recommend reaching out to a licensed tax professional or financial advisor for guidance on your tax obligations and local compliance requirements.',
      },
      {
        question: 'What is the Account Inactivity Policy?',
        answer:
          'All accounts are subject to a 30-day inactivity rule. If an account remains inactive for 30 consecutive calendar days (no trading activity), it will be automatically closed and permanently deactivated. Logging in alone is not considered activity - a trade must be placed to reset the timer.',
      },
      {
        question: 'Which countries are restricted?',
        answer:
          'Restricted countries include: UAE, USA, Russia, Israel, North Korea, Vietnam, Belarus, Holy See (Vatican), Saint Barthelemy, Samoa, Syria, and Vanuatu.',
      },
    ],
  },
  {
    badge: '28+ Questions',
    title: 'Challenge Types & Rules',
    questions: [
      {
        question: 'What are the different challenge types?',
        answer:
          'We offer: Two Step Challenge (5% daily, 10% total drawdown, 90% profit split), One Step Challenge (4% daily, 7% total drawdown, 80% profit split), Instant Funding (3% daily, 6% total drawdown, 80% profit split), Three Step Challenge (4% daily, 7% total drawdown, 85% profit split), and Africa Starter Challenge (3% daily, 6% total drawdown, 85% profit split).',
      },
      {
        question: 'How is daily drawdown calculated?',
        answer:
          'Daily drawdown limit is calculated based on the starting balance of the day, not on equity. The daily balance resets at 00:00 GMT+2. For example, if your account balance is $10,000 and daily limit is 5%, your maximum loss cannot exceed $500 for that day.',
      },
      {
        question: 'What leverage do you offer?',
        answer:
          'Forex: 1:100 or 1:50, Stock Indices: 1:20, Precious Metals: 1:30, Crude Oil: 1:10. Leverage settings apply to both evaluation and funded phases.',
      },
      {
        question: 'Are there minimum trading days requirements?',
        answer:
          "Yes, you must trade on at least 4 individual days for both evaluation and funded phases. There's no upper limit during evaluation, but accounts inactive for 30 consecutive days may be suspended.",
      },
      {
        question: 'What are the lot size restrictions?',
        answer:
          'No restrictions during evaluation. For funded accounts, lot limits vary by account size and challenge type. For example, $100k Two Step Challenge allows max 40 lots, while One Step/Instant Funding allows max 20 lots for the same size.',
      },
    ],
  },
  {
    badge: '42+ Questions',
    title: 'Getting Started',
    questions: [
      {
        question: 'When does my evaluation start?',
        answer:
          'Your evaluation officially begins on the date you complete your purchase. You can find both start and end dates in your dashboard under account metrics. For inactivity rules, the purchase date is always considered the official beginning.',
      },
      {
        question: 'How do I log in to MetaTrader 5?',
        answer:
          'Login credentials and server details will be provided in your dashboard after purchase. Use these credentials to access MT5 platform for trading.',
      },
      {
        question: 'What is the IP rule?',
        answer:
          'Your IP address location must remain consistent throughout your time with FundingOptimal - from purchase to trading. You can use different ISPs and devices within the same city/region, but geographic region changes may require verification.',
      },
      {
        question: 'How do I get my certificate?',
        answer:
          "You'll receive a certificate after successfully completing both phases of the evaluation and claiming your reward. The certificate will be available for viewing and download in your dashboard.",
      },
      {
        question: 'Problems with discount codes?',
        answer:
          'Ensure the code is active and entered correctly without extra spaces. Wait 20 minutes between attempts if payment fails. You can use a promotional code up to 3 times, but cannot combine multiple codes.',
      },
    ],
  },
  {
    badge: '31+ Questions',
    title: 'Trading Rules & Policies',
    questions: [
      {
        question: 'Is copy trading allowed?',
        answer:
          'No, copy trading is not allowed in any of our evaluation types.',
      },
      {
        question: 'What is the minimum trade duration policy?',
        answer:
          'Trades must have an average duration longer than 3 minutes. At least 50% of your total profits should come from trades lasting more than 3 minutes. Violation in funded stage results in profit removal and account reset.',
      },
      {
        question: 'Are Stop Loss and Take Profit mandatory?',
        answer:
          'Setting SL and TP is not mandatory, but we strongly recommend using them to protect your accounts.',
      },
      {
        question: 'Are hedging and stacking allowed?',
        answer:
          'Hedging (opposite positions on same asset) is NOT permitted. Stacking (multiple positions in same direction) IS allowed. These rules apply only to funded accounts.',
      },
      {
        question: 'Can I trade during news events?',
        answer:
          'During evaluation: Yes, no restrictions. During funded phase: You cannot open/close trades within 5 minutes before and after high-impact news events (10-minute total restriction).',
      },
      {
        question: 'Can I hold trades over weekends?',
        answer:
          'Yes, during evaluation phases. However, in funded phase, all positions must be closed before the weekend.',
      },
      {
        question: 'What trading strategies are prohibited?',
        answer:
          'Banned strategies include: arbitrage, latency exploits, front-running feeds, order spamming, high-frequency trading, reverse trades/coordinated hedging, and any use of EAs or automated systems.',
      },
      {
        question: 'Can I use Expert Advisors (EAs)?',
        answer:
          'No, automated trading tools including EAs, HFT systems, and latency-based bots are strictly forbidden and will result in immediate account closure.',
      },
    ],
  },
  {
    badge: '19+ Questions',
    title: 'Account Management',
    questions: [
      {
        question: 'What are my responsibilities as a trader?',
        answer:
          "You are fully responsible for account management, login security, and all trading decisions. Only you can trade on your account - sharing credentials is forbidden. You're accountable for every trade, even with simulated funds.",
      },
      {
        question: "Can I use someone else's signals?",
        answer:
          'No, using external signals is considered group trading and is not allowed. We work with traders who demonstrate independent decision-making and risk management skills.',
      },
      {
        question: 'What are the allocation limits?',
        answer:
          'Each trader can hold a maximum combined allocation of $400,000 across all funded accounts. Hedging across multiple accounts is strictly prohibited.',
      },
      {
        question: 'Are there profit targets for funded accounts?',
        answer:
          'No specific profit targets for funded accounts, except Instant Funding accounts must reach 13% target to be eligible for payout. Continue trading within risk limits of your chosen plan.',
      },
      {
        question: 'What is the payout policy?',
        answer:
          'Bi-weekly payouts available every 14 days from your first funded trade. Minimum $20 profit required. First payout requires 4 active trading days, consistent strategy, and no single trade exceeding 50% of total profit.',
      },
      {
        question: 'What happens if I violate rules on funded account?',
        answer:
          'Consequences depend on violation severity. Prohibited strategies may result in termination and platform ban. Exceeding loss limits closes the account. Contact support@fundingoptimal.com for specific situations.',
      },
      {
        question: 'Can I get a refund for evaluation fees?',
        answer:
          'No, fees paid for evaluation plans are final and non-refundable under any circumstances.',
      },
      {
        question: 'Can I merge accounts?',
        answer:
          'Yes, under conditions: accounts must be same type, at opening balances, successfully passed review, and combined value ≤$200,000. Contact payments@fundingoptimal.com for merger requests.',
      },
    ],
  },
  {
    badge: '5+ Questions',
    title: 'Important Trading Terms',
    questions: [
      {
        question: 'What are Bid and Ask Prices in Forex?',
        answer:
          'In forex trading, currency pairs are quoted with two prices: the bid and ask. The ask price is the rate at which a broker is willing to sell a currency (shown on the right side of quotes). The bid price is the rate a broker offers to purchase a currency (shown on the left side). For example, if EUR/USD is quoted at 1.1400/1.1402, the bid is 1.1400 (what you receive when selling euros) and ask is 1.1402 (what you pay when buying euros). The spread is the difference between these prices.',
      },
      {
        question: 'What is Slippage in Trading?',
        answer:
          'Slippage occurs when a trade is executed at a different price than intended, usually due to rapid market movements or execution delays. This happens most often during high volatility (major economic announcements) or low liquidity periods (market openings, off-hours). For example, if you set a Take Profit at 1.1000 but it fills at 1.0995 due to sudden price movement, that 5-pip difference is slippage. It can be positive (better price) or negative (worse price).',
      },
      {
        question: 'What are Swap, Triple Swap, and Rollover Period?',
        answer:
          'A swap is an overnight interest charge or credit applied when trades remain open past the trading day end, based on interest rate differences between currencies. Triple swap is a larger rollover fee applied on Wednesdays to cover the weekend period when markets are closed. The rollover period is the daily moment (usually around midnight server time) when the platform shifts trades into the next trading day and applies swap charges. During this time, spreads may widen due to reduced liquidity.',
      },
      {
        question: 'What are Margin, Leverage, and Equity?',
        answer:
          "Margin is the collateral required to open and hold a trade - funds locked by your broker to cover potential losses. Leverage amplifies your trading power (e.g., 100:1 lets you control $100,000 with $1,000), increasing both profit potential and risk. Equity is your account's real-time value including unrealized profits/losses: Equity = Account Balance + Unrealized P/L. If open trades are profitable, equity exceeds balance; if losing, equity drops below balance.",
      },
      {
        question: 'What is Spread in Forex?',
        answer:
          'Spread is the difference between the buying price (ask) and selling price (bid) of a currency pair, measured in pips. It represents the cost of entering a trade. For example, if EUR/USD shows Bid: 1.1400, Ask: 1.1405, the spread is 5 pips. The market must move at least 5 pips in your favor before becoming profitable. Spreads widen during volatile markets, news releases, low liquidity periods, and rollover times, increasing trading costs.',
      },
    ],
  },
];

const FaqsSlider = () => {
  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{
                transition: { duration: 0.2 },
              }}
              className="h-full"
            >
              <SliderItem {...faq} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqsSlider;
