export const faqs = [
  {
    id: 'general',
    badge: '12+ Questions',
    title: 'General',
    slug: 'general',
    description:
      'Everything you need to know about our platform, evaluations, and how to set up your FundingOptimal account.',
    questions: [
      {
        question: 'Are you a broker?',
        answer:
          "We are a proprietary trading firm, which means our business model is fundamentally different from that of a traditional broker. We do not take deposits from traders to manage or trade their own funds. You're not depositing capital to open a trading account like you would with a brokerage. Traders pay a fee to participate in our evaluation process, where we assess their trading strategy in a realistic, simulated trading environment that mirrors institutional execution standards. Once you demonstrate consistency and risk management in the evaluation, you'll be given access to a simulated funded account. This gives you the opportunity to trade using our firm's capital under strict risk controls. This structure allows traders to prove their skills without putting their own money at risk, while we provide the infrastructure, capital, and support needed to succeed in the markets.",
      },
      {
        question: 'What trading platform do we offer?',
        answer:
          'Our platform currently offers exclusive access to MetaTrader 5.',
      },
      {
        question: 'Do we use real funds in our trades?',
        answer:
          'At FundingOptimal, we provide you with simulated evaluation accounts, which do not involve the use of real money. These accounts allow our proprietary trading firm to observe and assess trading strategies in a controlled, risk-free environment. After completing the evaluation phase successfully, traders retain access to the simulated trading platform. As a Funded Trader, you become eligible to earn payout fees based on the results and consistency of your trading approach within this simulation framework.',
      },
      {
        question: 'How do I pay taxes when I trade with you?',
        answer:
          'FundingOptimal is not authorized to offer tax advice. If you have any questions regarding your tax obligations or reporting, we recommend reaching out to a licensed tax professional or financial advisor. They will be best positioned to help you navigate local tax laws and ensure you meet all necessary compliance requirements in your area.',
      },
      {
        question: 'What is the Account Inactivity Policy?',
        answer:
          "All FundingOptimal accounts are subject to a 30-day inactivity rule. If an account remains inactive for 30 consecutive days (i.e., no trading activity, no balance changes, or no proper platform connection), it will be automatically closed and permanently deactivated. Once closed, the account cannot be reinstated under any circumstances. The 30 days are counted as calendar days, not trading days. Logging in alone is not considered activity — a trade must be placed to reset the inactivity timer. If you know you'll be away or unable to trade for 30 days or more, please contact our team at support@fundingoptimal.com ahead of time so we can assist.",
      },
      {
        question: 'Which countries are restricted?',
        answer:
          'Restricted countries include: UAE, USA, Russia, Israel, North Korea, Vietnam, Belarus, Holy See (Vatican), Saint Barthelemy, Samoa, Syria, and Vanuatu.',
      },
      {
        question: 'What are my responsibilities as a trader?',
        answer:
          "At FundingOptimal, your trading journey is entirely in your hands. We provide the platform and tools, but the outcomes—whether success or failure—depend on your decisions. You are fully responsible for managing your account activities, login details, and all trading decisions. Only you have permission to trade on your account. Sharing your login credentials with others is strictly forbidden. If your email or dashboard gets compromised due to issues on your end, FundingOptimal cannot be held responsible. Keeping your information secure is your responsibility. Even though you're trading with simulated funds, the responsibility for your actions remains real. You are fully accountable for every trade and decision you make.",
      },
      {
        question: "What's the IP rule?",
        answer:
          "To maintain account security and ensure fair usage, the location associated with your IP address must remain the same throughout your time with FundingOptimal. This applies to when you purchase your evaluation, when you log into the FundingOptimal website, and while trading during both the Evaluation Phase and on your Funded Account. If there is a noticeable change in the region of your IP address, our Risk Team may reach out to request location verification as a security measure. You're permitted to trade using different internet service providers (ISPs) and access your account from various devices, provided they are used within the same city or region.",
      },
      {
        question: 'Is copy trading allowed?',
        answer:
          'Copy trading is not allowed in any of the types of evaluations we offer.',
      },
      {
        question: 'What is the minimum trade duration policy?',
        answer:
          'Your trades must have an average duration longer than 3 minutes. While it’s understood that some trades may be shorter than 3 minutes, the majority of your trades—as well as the average length of all trades combined—need to be above this threshold. Furthermore, at least half (50%) of your total requested profits (for funded accounts) should come from trades that last more than 3 minutes. If profits generated from trades under 3 minutes surpass 50% of your gross requested profits, this rule will be violated. In the funded stage, any breach will result in removal of all profits and resetting your account balance to the starting amount. This measure helps prevent practices like tick scalping and rapid-fire trading strategies that could exploit our price data, which we offer in good faith. Note: This rule applies to every account without exception.',
      },
      {
        question: 'Are Stop Loss and Take Profit mandatory?',
        answer:
          'Setting Stop Loss and Take Profit in your orders is not mandatory; however, we strongly recommend using them to protect your accounts.',
      },
      {
        question: 'How to log in to MetaTrader 5?',
        answer:
          'Login credentials and server details will be provided in your dashboard after purchase. Use these credentials to access the MetaTrader 5 platform for trading. You can download MetaTrader 5 from the official website: https://www.metatrader5.com/.',
      },
    ],
  },
  {
    id: 'challenge-types-rules',
    badge: '14+ Questions',
    title: 'Challenge Types & Rules',
    slug: 'challenge-types-rules',
    description:
      'Learn about our different challenge types, trading rules, and evaluation requirements.',
    questions: [
      {
        question: 'What are the different challenge types?',
        answer:
          'We offer five challenge types: 1) Two Step Challenge: Daily drawdown limit 5% based on balance, Total drawdown limit 10% based on balance, Minimum trading days 4, Leverage 1:100, Profit split 90%. 2) One Step Challenge: Daily drawdown limit 4% based on balance, Total drawdown limit 7% based on balance, Minimum trading days 4, Leverage 1:50, Profit split 80%. 3) Instant Funding: Daily drawdown limit 3% based on balance, Total drawdown limit 6% based on balance, Minimum trading days 4, Leverage 1:50, Profit split 80%. 4) Three Step Challenge: Daily drawdown limit 4% based on balance, Total drawdown limit 7% based on balance, Phase 1 target 8%, Phase 2 target 4%, Phase 3 target 4%, Profit Split 85%, Leverage 1:50, Minimum trading days 4. 5) Africa Starter Challenge: One-Step challenge type, Daily drawdown limit 3% based on balance, Total drawdown limit 6% based on balance, Minimum Trading Days 4, Profit Target 6%, Profit Split 85%, Leverage 1:100.',
      },
      {
        question: 'How is daily drawdown calculated?',
        answer:
          'The daily drawdown limit is calculated based on the starting balance of the day, not on equity. This means that the maximum allowable loss for the day is measured from the initial account balance at the start of each trading day, not the current equity or floating balance. The daily balance reset occurs at 00:00 (midnight) GMT+2, which marks the beginning of a new trading day. From that point forward, your drawdown limit will be recalculated using the updated starting balance. Example: If your account balance at 00:00 GMT+2 is $10,000, and the daily drawdown limit is 5%, your maximum loss for that day cannot exceed $500, regardless of unrealized profits or losses during the trading day. Maintaining compliance with this rule is essential to avoid breaching trading conditions or risking disqualification.',
      },
      {
        question: 'What leverage do you offer?',
        answer:
          'Leverage allows traders to open larger positions with a smaller amount of capital. The following leverage applies across both account types, including Evaluation and Funded phase: Forex: 1:100 or 1:50, Stock Indices: 1:20, Precious Metals: 1:30, Crude Oil: 1:10. While leverage can increase your chances of earning higher profits, it also raises the risk of greater losses. We strongly advise trading with care and understanding how leverage can affect your overall strategy and results. Although your own capital isn’t at risk during the Evaluation phase or when using a Funded account, leverage still plays a crucial role in shaping your trading performance.',
      },
      {
        question: 'Are there minimum trading days requirements?',
        answer:
          'To complete the Evaluation Phase, you must trade on at least 4 individual days—this applies to every challenge type offered. There’s no upper limit to the number of trading days during this phase. You’re free to take as long as you need, as long as you meet the challenge objectives. If your account remains inactive for 30 consecutive days (i.e., no trades are placed), it may be subject to suspension or disqualification. Once you’ve reached the Funded Phase, the same rule applies: you’ll need to trade on a minimum of 4 separate days, regardless of the challenge you completed. This requirement ensures continued engagement and responsible trading behavior.',
      },
      {
        question:
          'Are there any lot size restrictions during the evaluation phase?',
        answer:
          'No, there are no limits on the lot sizes you can use during the evaluation period. You can trade with any lot size that suits your strategy.',
      },
      {
        question:
          'Are there any lot size restrictions during the funded phase?',
        answer:
          'Lot size restrictions vary by account size and challenge type. Two Step Challenge: $5k = Max 2.5 lots, $10k = Max 5 lots, $25k = Max 10 lots, $50k = Max 20 lots, $100k = Max 40 lots, $200k = Max 80 lots. One Step Challenge: $5k = Max 1.25 lots, $10k = Max 2.5 lots, $25k = Max 5 lots, $50k = Max 10 lots, $100k = Max 20 lots, $200k = Max 40 lots. Instant Funding: $5k = Max 1.25 lots, $10k = Max 2.5 lots, $25k = Max 5 lots, $50k = Max 10 lots, $100k = Max 20 lots, $200k = Max 40 lots. Three Step Challenge: $5k = Max 2.5 lots, $10k = Max 5 lots, $25k = Max 10 lots, $50k = Max 20 lots, $100k = Max 40 lots, $200k = Max 80 lots. Africa One Step Challenge: $5k = Max 2.5 lots, $10k = Max 5 lots, $25k = Max 10 lots, $50k = Max 20 lots. This limit applies to open active positions, not as a daily trading limit. You are not allowed to exceed this lot size across all open trades at any given time, but once a trade is closed, the lot allocation becomes available again. Breaking this limit will constitute a violation of trading rules.',
      },
      {
        question: 'What happens if I violate rules of trading?',
        answer:
          'The outcome of breaking a rule depends on the severity of the violation. Some rules are considered minor (soft breaches) and may not result in the loss of your account. However, more serious violations—classified as hard breaches—can lead to immediate account termination. In the most severe cases, breaching certain rules may result in a permanent suspension from our platform and make you ineligible for future funding opportunities.',
      },
      {
        question: 'Are hedging and stacking allowed?',
        answer:
          'Hedging is not permitted and involves opening trades in opposite directions (buy and sell) on the same asset within the same trading account. For instance, you cannot hold both a long and a short position simultaneously on the same instrument. Hedging purely to exploit price differences or for spread arbitrage purposes is not allowed and may lead to the termination of your account. Engaging in hedging activity between two different FundingOptimal accounts is also strictly prohibited. Stacking is allowed and refers to placing three or more trades in the same direction on a single asset. This means you can open multiple buy or sell positions on the same instrument at the same time. Please note: These rules apply only to Funded Accounts.',
      },
      {
        question: 'What are the allocation limits per trader?',
        answer:
          'Each individual trader is allowed to hold a maximum combined allocation of up to $400,000 across all funded active accounts. This includes all funded accounts under your name or associated with your personal details. Hedging across multiple accounts is strictly prohibited. If you open a buy position on one account, you cannot open a sell position on the same instrument using another account. Engaging in such practices is considered a violation of our trading policies and may result in disqualification or termination of accounts.',
      },
      {
        question: 'Are there profit targets for funded trader accounts?',
        answer:
          'No, once you have achieved Funded Account status with FundingOptimal, you will not be required to achieve any specific profit or monthly revenue targets, except for Instant Funding accounts where you must reach a target of 13% to be eligible to request a payout. It is important that you continue to trade within the risk limits set by your chosen valuation plan. When you wish to withdraw payout fees, simply submit your request via the profile area in your dashboard.',
      },
      {
        question: 'Can I merge accounts?',
        answer:
          'Yes, merging is allowed under specific conditions. Only accounts that have successfully passed the review and are marked as qualified are eligible to merge. For funded accounts, merging is allowed provided that the total value of the merged account does not exceed $200,000. Both accounts must be at their opening balances and merging is not allowed if one account is currently in a withdrawal. Only accounts of the same type are eligible to merge. For example, only two "one-step challenge" accounts are allowed to merge. If your accounts meet all the criteria, you can request a merge by sending an email to payments@fundingoptimal.com. Please allow 24 to 48 business hours for your merge request to be processed.',
      },
      {
        question: 'Can I get a refund for evaluation fees?',
        answer:
          'Please be aware that fees paid for evaluation plans are final and non-refundable. Once you’ve purchased an evaluation, no refunds will be provided under any circumstances.',
      },
      {
        question: 'Can I trade during news events?',
        answer:
          "While in the Evaluation Phase: You’re free to trade during any news release, including high-impact ones. There are no restrictions—you can open or close trades as usual. After You Become a Funded Trader: Trading around news events becomes more restricted. You are not allowed to open or close any trades within 5 minutes before and after a high-impact news event (a total of 10 minutes). This includes opening/closing market orders, activating pending orders, hitting a Stop Loss, Take Profit, or Trailing Stop. Any modification that triggers a trade (like adjusting a Stop Gain) is also prohibited. You can still keep trades open if they were entered more than 5 minutes before the news event begins. If a TP or SL is hit during the restricted window, it will be treated as a Soft Breach: profits won’t count toward payout eligibility, but your account won’t be suspended or disqualified. Any losses during this time are your responsibility—they won’t be reimbursed or reversed. You must avoid trading during high-impact events marked in RED on Myfxbook Economic Calendar or Forex Factory Economic Calendar, including major economic news (e.g., NFP, CPI, interest rate decisions), high-impact speeches (from 5 minutes before until 5 minutes after the speech ends), and high-impact PMIs. If a trade is executed under conditions considered 'unrealistic' (e.g., excessive slippage during high volatility), it may be disqualified, but this won’t affect your account status.",
      },
      {
        question: 'What are prohibited trading strategies?',
        answer:
          'Banned trading methods include: 1) Exploiting Unrealistic Market Conditions: Arbitrage (taking advantage of price differences across platforms or feeds), Latency Exploits (using delays in data to gain an unfair advantage), Front-Running Feeds (executing trades before prices update for others), Mispricing Abuse (trading based on price inaccuracies that wouldn’t exist in real markets). 2) Manipulating the Order Book: Order Spamming (placing many small orders to falsely represent demand or supply, e.g., submitting ten 0.1-lot trades instead of one 1-lot trade to clutter the book and potentially influence price movement). 3) High-Frequency Trading (HFT): Rapid, repetitive trades designed to exploit tiny market movements or system inefficiencies. 4) Reverse Trades / Coordinated Hedging: Working with others or placing opposing trades to manipulate results or lower risk in ways that defeat the purpose of the evaluation. 5) No Third-Party Trading: Only the person whose name is on the account can trade. Using trade managers, bots, or copying others’ trades is strictly forbidden. Using these strategies will result in immediate termination of your account, cancellation of all profits from rule-breaking trades, and disqualification from reaching Funded Trader Status. To stay compliant, read and fully understand all rules, avoid manipulative or unrealistic approaches, and trade fairly, responsibly, and transparently as if in a real, live market environment.',
      },
    ],
  },
  {
    id: 'getting-started',
    badge: '7+ Questions',
    title: 'Getting Started',
    slug: 'getting-started',
    description:
      'Quick start guide and frequently asked questions about getting started with FundingOptimal.',
    questions: [
      {
        question: 'When does my evaluation start?',
        answer:
          'Your evaluation officially begins on the date you complete your purchase. In your dashboard, under the account metrics section, you’ll find both the start and end dates of your evaluation period. While the system initially sets the start date based on when the account is created, it may adjust to the date of your first trade if there’s a delay in getting started. Keep in mind, though, for the purposes of inactivity rules, the purchase date is always considered the official beginning of your evaluation.',
      },
      {
        question: 'How do I log in to MetaTrader 5?',
        answer:
          'Login credentials and server details will be provided in your dashboard after purchase. Use these credentials to access the MetaTrader 5 platform for trading. You can download MetaTrader 5 from the official website: https://www.metatrader5.com/.',
      },
      {
        question: 'How do I get my certificate?',
        answer:
          'You’ll receive a certificate after successfully completing both phases of the evaluation and claiming your reward. Once these requirements are fulfilled, your certificate will be available for viewing and download in your dashboard.',
      },
      {
        question: 'Problems with discount codes?',
        answer:
          "If your discount or promotional code is not being applied properly: 1) Confirm that the code is still active and has not expired. 2) Review the entered code to make sure you entered it exactly as it appears - without extra spaces, missing characters, or spelling errors. 3) If a payment attempt has not gone through, wait 20 minutes before trying the code again. You can use a promotional code up to 3 times. Combining multiple codes is not supported. Expired or unused codes cannot be extended or reissued. If you're still having problems, contact our support team for assistance.",
      },
      {
        question: 'What is the minimum trade duration policy?',
        answer:
          'Your trades must have an average duration longer than 3 minutes. While it’s understood that some trades may be shorter than 3 minutes, the majority of your trades—as well as the average length of all trades combined—need to be above this threshold. Furthermore, at least half (50%) of your total requested profits (for funded accounts) should come from trades that last more than 3 minutes. If profits generated from trades under 3 minutes surpass 50% of your gross requested profits, this rule will be violated. In the funded stage, any breach will result in removal of all profits and resetting your account balance to the starting amount. This measure helps prevent practices like tick scalping and rapid-fire trading strategies that could exploit our price data, which we offer in good faith. Note: This rule applies to every account without exception.',
      },
      {
        question: 'Are Stop Loss and Take Profit mandatory?',
        answer:
          'Setting Stop Loss and Take Profit in your orders is not mandatory; however, we strongly recommend using them to protect your accounts.',
      },
      {
        question: 'Can I use someone else’s signals?',
        answer:
          'Using external signals is not allowed. Participating in trading activities by relying on signals from others is considered a form of group trading, which goes against our platform’s rules. We are committed to working with traders who can demonstrate independent decision-making, a solid understanding of market dynamics, and strong risk management skills. If it’s discovered that a trader is not following these guidelines—such as by using third-party signals or mirroring trades—their account will be permanently closed.',
      },
    ],
  },
  {
    id: 'affiliate',
    badge: '11+ Questions',
    title: 'Affiliate Program',
    slug: 'affiliate',
    description:
      'Frequently asked questions about the FundingOptimal Affiliate Program.',
    questions: [
      {
        question: 'What is the FundingOptimal Affiliate Program?',
        answer:
          'The FundingOptimal Affiliate Program lets you earn commissions by referring traders. When someone signs up and purchases a challenge using your link, you earn a cut of the sale.',
      },
      {
        question: 'How much can I earn as an affiliate?',
        answer:
          'Affiliates earn a commission on each successful referral. The percentage may increase based on your performance. High-performing affiliates can unlock better deals.',
      },
      {
        question: 'How do I sign up as an affiliate?',
        answer:
          'Go to our Affiliate Page, complete the signup form, and once approved, you’ll get access to your dashboard and referral tools.',
      },
      {
        question: 'When and how do I get paid?',
        answer:
          'All payouts are made via cryptocurrency. Once you reach the $100 minimum threshold, you can request a withdrawal. Payments are processed on a regular schedule.',
      },
      {
        question: 'What is the minimum payout amount?',
        answer:
          'The minimum payout amount is $100. You can request a withdrawal once your earnings reach this threshold.',
      },
      {
        question: 'Can I refer myself or use my own link?',
        answer:
          'No, self-referrals are not allowed. Doing so can lead to account termination and forfeiture of commissions.',
      },
      {
        question: 'How do I track referrals and commissions?',
        answer:
          'After logging into your dashboard, you can track clicks, signups, earnings, and payment history in real time.',
      },
      {
        question: 'Do I need to be a trader to join?',
        answer:
          'No! Anyone can join the affiliate program — you don’t need to be a FundingOptimal trader or customer.',
      },
      {
        question: 'Can I promote FundingOptimal on social media or ads?',
        answer:
          "Yes, social media and paid ads are allowed — as long as you're honest and don't impersonate the brand or mislead potential users.",
      },
      {
        question: 'What kind of content works best?',
        answer:
          'Our top affiliates succeed with:\n\n• YouTube reviews and tutorials\n\n• Blog posts and newsletters\n\n• TikTok & Instagram Reels\n\n• Trading-related Discord and Telegram communities\n\nWe also provide ready-to-use promotional assets to help you succeed.',
      },
      {
        question: 'Who do I contact for affiliate support?',
        answer:
          'You can reach us anytime at affiliate@fundingoptimal.com for help with your account, links, or payments.',
      },
    ],
  },
  {
    id: 'trading-rules-policies',
    badge: '12+ Questions',
    title: 'Trading Rules & Policies',
    slug: 'trading-rules-policies',
    description:
      'Everything about our trading policies, rules, and account management guidelines.',
    questions: [
      {
        question: 'Is copy trading allowed?',
        answer:
          'Copy trading is not allowed in any of the types of evaluations we offer.',
      },
      {
        question: 'Can I use someone else’s signals?',
        answer:
          'Using external signals is not allowed. Participating in trading activities by relying on signals from others is considered a form of group trading, which goes against our platform’s rules. We are committed to working with traders who can demonstrate independent decision-making, a solid understanding of market dynamics, and strong risk management skills. If it’s discovered that a trader is not following these guidelines—such as by using third-party signals or mirroring trades—their account will be permanently closed.',
      },
      {
        question: 'What trading strategies are prohibited?',
        answer:
          'Banned trading methods include: 1) Exploiting Unrealistic Market Conditions: Arbitrage (taking advantage of price differences across platforms or feeds), Latency Exploits (using delays in data to gain an unfair advantage), Front-Running Feeds (executing trades before prices update for others), Mispricing Abuse (trading based on price inaccuracies that wouldn’t exist in real markets). 2) Manipulating the Order Book: Order Spamming (placing many small orders to falsely represent demand or supply, e.g., submitting ten 0.1-lot trades instead of one 1-lot trade to clutter the book and potentially influence price movement). 3) High-Frequency Trading (HFT): Rapid, repetitive trades designed to exploit tiny market movements or system inefficiencies. 4) Reverse Trades / Coordinated Hedging: Working with others or placing opposing trades to manipulate results or lower risk in ways that defeat the purpose of the evaluation. 5) No Third-Party Trading: Only the person whose name is on the account can trade. Using trade managers, bots, or copying others’ trades is strictly forbidden. Using these strategies will result in immediate termination of your account, cancellation of all profits from rule-breaking trades, and disqualification from reaching Funded Trader Status. To stay compliant, read and fully understand all rules, avoid manipulative or unrealistic approaches, and trade fairly, responsibly, and transparently as if in a real, live market environment.',
      },
      {
        question: 'Can I use Expert Advisors (EAs)?',
        answer:
          'The use of automated trading tools, including high-frequency trading systems, latency-based bots, and Expert Advisors (EAs), is not allowed under any circumstances. Traders who use these systems risk having their accounts immediately closed. Third-party EAs can create serious risks for both the trader and our platform. If we detect that multiple accounts are running the same EA or placing identical trades, it will be considered a breach of our "No Group Trading" rule. This kind of coordinated activity may lead to account suspension or failure of the evaluation.',
      },
      {
        question: 'Can I trade during news events?',
        answer:
          "While in the Evaluation Phase: You’re free to trade during any news release, including high-impact ones. There are no restrictions—you can open or close trades as usual. After You Become a Funded Trader: Trading around news events becomes more restricted. You are not allowed to open or close any trades within 5 minutes before and after a high-impact news event (a total of 10 minutes). This includes opening/closing market orders, activating pending orders, hitting a Stop Loss, Take Profit, or Trailing Stop. Any modification that triggers a trade (like adjusting a Stop Gain) is also prohibited. You can still keep trades open if they were entered more than 5 minutes before the news event begins. If a TP or SL is hit during the restricted window, it will be treated as a Soft Breach: profits won’t count toward payout eligibility, but your account won’t be suspended or disqualified. Any losses during this time are your responsibility—they won’t be reimbursed or reversed. You must avoid trading during high-impact events marked in RED on Myfxbook Economic Calendar or Forex Factory Economic Calendar, including major economic news (e.g., NFP, CPI, interest rate decisions), high-impact speeches (from 5 minutes before until 5 minutes after the speech ends), and high-impact PMIs. If a trade is executed under conditions considered 'unrealistic' (e.g., excessive slippage during high volatility), it may be disqualified, but this won’t affect your account status.",
      },
      {
        question: 'Can I hold trades over weekends?',
        answer:
          'You are allowed to hold trades over the weekend during the evaluation phases. However, once you reach the funded phase, all positions must be closed before the weekend. Holding trades over the weekend in a funded account is not permitted.',
      },
      {
        question: 'What is the payout policy?',
        answer:
          'You’re eligible to request a performance fee every 14 days. The 14-day countdown begins from the date you place your first trade on your funded account. You can locate this start date in the Account Metrics section of your trader dashboard. To qualify for a payout: Your account must have earned a minimum profit of $20, and the payout amount must also be at least $20 to be processed. For your first payout, you need: Minimum of 4 Active Trading Days (trades opened and closed on the same day), consistent trading style or strategy, and no single trade can account for more than 50% of your total profit during the payout period. For example, if you made $1,000 profit and one trade made $510, that’s 51%, which disqualifies the payout. Lot sizes must reflect your usual trading behavior; using very small positions (e.g., 0.01 or 0.02 lots if your usual trade size is 10 lots) just to meet the 4-day rule isn’t acceptable, though reducing to a reasonable size like 4 lots is fine if consistent with your strategy.',
      },
      {
        question: 'What happens if I violate rules on a funded account?',
        answer:
          "If you break a rule on a Funded Account, the outcome depends on which specific rule was violated. Using a prohibited trading strategy may result in your Funded Account being terminated, and you could be banned from accessing FundingOptimal's services in the future. Exceeding maximum daily or overall loss limits will result in your account being closed and trading privileges removed. If any rule is broken, you're required to email support at support@fundingoptimal.com. They will review the situation and advise you on the consequences or any possible actions you can take.",
      },
      {
        question: 'What are prohibited trading methods?',
        answer:
          'Banned trading methods include: 1) Exploiting Unrealistic Market Conditions: Arbitrage (taking advantage of price differences across platforms or feeds), Latency Exploits (using delays in data to gain an unfair advantage), Front-Running Feeds (executing trades before prices update for others), Mispricing Abuse (trading based on price inaccuracies that wouldn’t exist in real markets). 2) Manipulating the Order Book: Order Spamming (placing many small orders to falsely represent demand or supply, e.g., submitting ten 0.1-lot trades instead of one 1-lot trade to clutter the book and potentially influence price movement). 3) High-Frequency Trading (HFT): Rapid, repetitive trades designed to exploit tiny market movements or system inefficiencies. 4) Reverse Trades / Coordinated Hedging: Working with others or placing opposing trades to manipulate results or lower risk in ways that defeat the purpose of the evaluation. 5) No Third-Party Trading: Only the person whose name is on the account can trade. Using trade managers, bots, or copying others’ trades is strictly forbidden. Using these strategies will result in immediate termination of your account, cancellation of all profits from rule-breaking trades, and disqualification from reaching Funded Trader Status. To stay compliant, read and fully understand all rules, avoid manipulative or unrealistic approaches, and trade fairly, responsibly, and transparently as if in a real, live market environment.',
      },
      {
        question:
          'Can I use Expert Advisors (EAs) and High-Frequency Trading (HFT)?',
        answer:
          'The use of automated trading tools, including high-frequency trading systems, latency-based bots, and Expert Advisors (EAs), is not allowed under any circumstances. Traders who use these systems risk having their accounts immediately closed. Third-party EAs can create serious risks for both the trader and our platform. If we detect that multiple accounts are running the same EA or placing identical trades, it will be considered a breach of our "No Group Trading" rule. This kind of coordinated activity may lead to account suspension or failure of the evaluation.',
      },
      {
        question: 'What should I do to stay compliant?',
        answer:
          "To stay compliant: Read and fully understand all rules and requirements before trading. Avoid any approach that could be considered manipulative or unrealistic. Trade as if you're in a real, live market environment—fairly, responsibly, and transparently. Maintain consistent trading behavior and strategy. Use appropriate lot sizes that reflect your usual trading approach. Ensure all trading decisions are made independently without external signals or automated systems.",
      },
      {
        question: 'Can I merge accounts?',
        answer:
          'Yes, merging is allowed under specific conditions. Only accounts that have successfully passed the review and are marked as qualified are eligible to merge. For funded accounts, merging is allowed provided that the total value of the merged account does not exceed $200,000. Both accounts must be at their opening balances and merging is not allowed if one account is currently in a withdrawal. Only accounts of the same type are eligible to merge. For example, only two "one-step challenge" accounts are allowed to merge. If your accounts meet all the criteria, you can request a merge by sending an email to payments@fundingoptimal.com. Please allow 24 to 48 business hours for your merge request to be processed.',
      },
    ],
  },
  {
    id: 'account-management',
    badge: '7+ Questions',
    title: 'Account Management',
    slug: 'account-management',
    description:
      'Learn about account responsibilities, allocation limits, payout policies, and account management.',
    questions: [
      {
        question: 'What are my responsibilities as a trader?',
        answer:
          "At FundingOptimal, your trading journey is entirely in your hands. We provide the platform and tools, but the outcomes—whether success or failure—depend on your decisions. You are fully responsible for managing your account activities, login details, and all trading decisions. Only you have permission to trade on your account. Sharing your login credentials with others is strictly forbidden. If your email or dashboard gets compromised due to issues on your end, FundingOptimal cannot be held responsible. Keeping your information secure is your responsibility. Even though you're trading with simulated funds, the responsibility for your actions remains real. You are fully accountable for every trade and decision you make.",
      },
      {
        question: 'Can I use someone else’s signals?',
        answer:
          'No, using external signals is considered group trading and is not allowed. We work with traders who demonstrate independent decision-making, a solid understanding of market dynamics, and strong risk management skills. If it’s discovered that a trader is using third-party signals or mirroring trades, their account will be permanently closed.',
      },
      {
        question: 'What are the allocation limits?',
        answer:
          'Each trader can hold a maximum combined allocation of $400,000 across all funded accounts. Hedging across multiple accounts is strictly prohibited. This includes all funded accounts under your name or associated with your personal details.',
      },
      {
        question: 'What is the payout policy?',
        answer:
          'You’re eligible to request a performance fee every 14 days. The 14-day countdown begins from the date you place your first trade on your funded account. You can locate this start date in the Account Metrics section of your trader dashboard. To qualify for a payout: Your account must have earned a minimum profit of $20, and the payout amount must also be at least $20 to be processed. For your first payout, you need: Minimum of 4 Active Trading Days (trades opened and closed on the same day), consistent trading style or strategy, and no single trade can account for more than 50% of your total profit during the payout period. For example, if you made $1,000 profit and one trade made $510, that’s 51%, which disqualifies the payout. Lot sizes must reflect your usual trading behavior; using very small positions (e.g., 0.01 or 0.02 lots if your usual trade size is 10 lots) just to meet the 4-day rule isn’t acceptable, though reducing to a reasonable size like 4 lots is fine if consistent with your strategy.',
      },
      {
        question: 'What happens if I violate rules on a funded account?',
        answer:
          "If you break a rule on a Funded Account, the outcome depends on which specific rule was violated. Using a prohibited trading strategy may result in your Funded Account being terminated, and you could be banned from accessing FundingOptimal's services in the future. Exceeding maximum daily or overall loss limits will result in your account being closed and trading privileges removed. If any rule is broken, you're required to email support at support@fundingoptimal.com. They will review the situation and advise you on the consequences or any possible actions you can take.",
      },
      {
        question: 'Can I merge accounts?',
        answer:
          'Yes, merging is allowed under specific conditions. Only accounts that have successfully passed the review and are marked as qualified are eligible to merge. For funded accounts, merging is allowed provided that the total value of the merged account does not exceed $200,000. Both accounts must be at their opening balances and merging is not allowed if one account is currently in a withdrawal. Only accounts of the same type are eligible to merge. For example, only two "one-step challenge" accounts are allowed to merge. If your accounts meet all the criteria, you can request a merge by sending an email to payments@fundingoptimal.com. Please allow 24 to 48 business hours for your merge request to be processed.',
      },
      {
        question: 'Can I get a refund for evaluation fees?',
        answer:
          'Please be aware that fees paid for evaluation plans are final and non-refundable. Once you’ve purchased an evaluation, no refunds will be provided under any circumstances.',
      },
    ],
  },
  {
    id: 'important-trading-terms',
    badge: '5+ Questions',
    title: 'Important Trading Terms',
    slug: 'important-trading-terms',
    description:
      'Essential trading terms and concepts every trader should understand.',
    questions: [
      {
        question: 'What are Bid and Ask Prices in Forex?',
        answer:
          'In forex trading, currency pairs are always quoted with two prices: the bid and the ask. These prices reflect what buyers are willing to pay and what sellers are asking for. The ask price is the rate at which a broker or liquidity provider is willing to sell a currency, shown on the right-hand side of a quote. For example, if EUR/USD is quoted at 1.1400/1.1402, the ask price is 1.1402, which is what you’d pay when buying euros. The bid price is the rate a broker or buyer is offering to purchase a currency, shown on the left-hand side of the quote. In the same example, the bid price is 1.1400, which is what you’d receive when selling euros. The spread is the difference between the bid and ask prices (Ask - Bid). A narrow spread typically indicates high liquidity and active trading. Even though your trades take place in a simulated trading environment, the platform mimics live market price action, so the bid and ask behave just as they would in real-time trading.',
      },
      {
        question: 'What is Slippage in Trading?',
        answer:
          "Slippage happens when a trade is executed at a different price than you intended, usually due to rapid market movements or execution delays. It is most likely to occur during times of high market volatility, like during major economic announcements, or periods of low liquidity, such as right after markets open or during off-hours. For example, if you’re trading EUR/USD and set a Take Profit at 1.1000, but it’s filled at 1.0995 due to sudden price movement, that 5-pip difference is slippage. Similarly, if your Stop Loss is set at 1.1050 but closes at 1.1055, the loss is slightly larger than intended. Slippage can be positive (better price) or negative (worse price). Although you're trading in a demo or simulated environment, it’s built to reflect live market behavior, including realistic slippage.",
      },
      {
        question: 'What are Swap, Triple Swap, and Rollover Period?',
        answer:
          "A swap, sometimes referred to as overnight interest or a rollover fee, is a charge or credit applied when a trade remains open past the trading day’s end, based on the interest rate difference between the two currencies in a pair. If you're holding a position in a currency with a higher interest rate, you may receive a payment; if it’s a lower-yielding currency, you may be charged a fee. A triple swap is a larger rollover fee or credit applied on Wednesdays to cover the weekend period when the forex market is closed but interest continues to accrue, effectively covering Friday, Saturday, and Sunday. The rollover period is the daily moment, typically around midnight server time, when the trading platform shifts open trades into the next trading day and applies swap charges. During this time, spreads may widen due to reduced liquidity and uncertainty. Although you're trading in a demo environment, the platform is designed to replicate real-world market behavior, including swap charges, triple swaps, and spread fluctuations during the rollover period.",
      },
      {
        question: 'What are Margin, Leverage, and Equity?',
        answer:
          'Margin is the amount of funds required in your account to open and hold a trade, acting as collateral that your broker locks in to cover potential losses. It’s not a fee but a portion of your account set aside while the trade is active, depending on the trade size and leverage used. Leverage allows you to trade with more money than you have, shown as a ratio like 50:1 or 100:1. For instance, with 100:1 leverage, you can control a $100,000 trade using just $1,000, but it increases both profit potential and risk. Equity represents the current value of your trading account, including any profits or losses from open trades: Equity = Account Balance + Unrealized (Floating) P/L. If open trades are profitable, equity exceeds the balance; if losing, it drops below. Although you’re in a simulated trading environment, margin use, leveraged positions, and equity updates function as they do in real markets.',
      },
      {
        question: 'What is Spread in Forex?',
        answer:
          'In forex trading, the spread is the difference between the buying price (ask) and the selling price (bid) of a currency pair, measured in pips, which are the smallest standard unit of price movement. For example, if EUR/USD is quoted as Bid: 1.1400, Ask: 1.1405, the spread is 5 pips, meaning the market must move at least 5 pips in your favor before your position turns profitable. A tighter spread means lower trading costs, while a wider spread increases costs. Spreads adjust based on market conditions: volatile markets, like during news releases, often see wider spreads; low liquidity periods, such as holidays or off-hours, can also increase spreads; and during the rollover period, spreads often widen due to reduced activity. Even in a practice or demo environment, our trading system mirrors real market behavior, including how spreads expand and contract based on current conditions.',
      },
    ],
  },
  {
    id: 'trading-platform',
    badge: '1+ Question',
    title: 'Trading Platform',
    slug: 'trading-platform',
    description:
      'Information about the trading platform offered by FundingOptimal.',
    questions: [
      {
        question: 'What trading platform does FundingOptimal offer?',
        answer:
          'FundingOptimal exclusively offers MetaTrader 5 (MT5) as its trading platform for all trading activities.',
      },
    ],
  },
  {
    id: 'third-party-payments',
    badge: '1+ Question',
    title: 'Third Party Payments',
    slug: 'third-party-payments',
    description:
      'Details on FundingOptimal’s payment policies regarding third-party transactions.',
    questions: [
      {
        question: 'Does FundingOptimal accept third-party payments?',
        answer:
          'FundingOptimal does not accept payments via third-party cards or accounts. All transactions must be conducted in the name of the cardholder, with cross-verification against the KYC profile to prevent fraud and ensure platform integrity.',
      },
    ],
  },
  {
    id: 'tradable-assets',
    badge: '1+ Question',
    title: 'Tradable Assets',
    slug: 'tradable-assets',
    description:
      'List of assets available for trading on FundingOptimal’s platform.',
    questions: [
      {
        question: 'Which assets are tradable on FundingOptimal?',
        answer:
          'FundingOptimal offers trading in Forex pairs (e.g., AUDCAD, AUDCHF, EURUSD, USDJPY, etc.), CFDs (e.g., EUSTX50, GER30, NAS100, USOIL, etc.), and Metals (XAGUSD - Silver, XAUUSD - Gold).',
      },
    ],
  },
  {
    id: 'daily-drawdown-limit',
    badge: '1+ Question',
    title: 'Daily Drawdown Limit',
    slug: 'daily-drawdown-limit',
    description:
      'Explanation of how the daily drawdown limit is calculated and applied.',
    questions: [
      {
        question:
          'How is the daily drawdown limit calculated at FundingOptimal?',
        answer:
          'The daily drawdown limit is calculated based on the account’s starting balance at 00:00 GMT+2, not on equity. For example, with a $10,000 starting balance and a 5% drawdown limit, the maximum daily loss is $500, regardless of unrealized profits or losses. The balance resets daily at midnight GMT+2.',
      },
    ],
  },
  {
    id: 'account-credentials-delivery',
    badge: '2+ Questions',
    title: 'Account Credentials Delivery and Payment Methods',
    slug: 'account-credentials-delivery',
    description:
      'Details on how and when account credentials are delivered based on payment methods.',
    questions: [
      {
        question: 'When will I receive my account credentials after payment?',
        answer:
          'For credit/debit card payments, credentials are sent immediately after successful payment. For cryptocurrency payments, credentials are typically delivered within 24 hours, often sooner, provided the correct network and sufficient funds (including gas fees) are used.',
      },
      {
        question:
          'What cryptocurrencies does FundingOptimal accept for purchasing a challenge?',
        answer:
          'FundingOptimal accepts payments via cryptocurrency, but specific cryptocurrencies are not listed in the provided information. Ensure payments cover both the challenge cost and any transaction (gas) fees to avoid delays or declines.',
      },
    ],
  },
  {
    id: 'post-evaluation-process',
    badge: '1+ Question',
    title: 'Post-Evaluation Process',
    slug: 'post-evaluation-process',
    description:
      'Steps to follow after passing the evaluation for a funded account.',
    questions: [
      {
        question:
          'What happens after passing the evaluation at FundingOptimal?',
        answer:
          'After passing the evaluation, you’ll receive an email with a link to complete KYC verification. Submit withdrawal details, sign the provided contract, and receive funded account credentials within 3-5 business days after compliance checks.',
      },
    ],
  },
  {
    id: 'payouts',
    badge: '2+ Questions',
    title: 'Payouts',
    slug: 'payouts',
    description:
      'Information on payout schedules, eligibility, and processing for funded accounts.',
    questions: [
      {
        question: 'How do payouts work at FundingOptimal?',
        answer:
          'Payouts are processed biweekly, starting 14 days after your first trade on a funded account. A minimum profit of $20 and 4 trading days using consistent strategies are required. Payouts are made via cryptocurrency within 3-5 business days, provided all trades are closed and no rule breaches are found.',
      },
      {
        question:
          'What are the requirements for a valid trading day for payouts?',
        answer:
          'A trading day counts when a trade is opened and closed on the same day. Trades spanning multiple days count as one trading day. For example, a trade opened on Day 1 and closed on Day 2 counts as one trading day. Minimal lot sizes (e.g., 0.02 lots for a typical 10-lot trader) are not allowed to pass trading days.',
      },
    ],
  },
  {
    id: 'kyc-verification',
    badge: '2+ Questions',
    title: 'KYC Verification for Funded Accounts',
    slug: 'kyc-verification',
    description:
      'Requirements and guidelines for completing the KYC process for funded accounts.',
    questions: [
      {
        question:
          'What documentation is required for KYC verification at FundingOptimal?',
        answer:
          'KYC requires a valid government-issued ID (passport, driver’s license, or national ID card) and a live selfie for facial recognition. Paper IDs or temporary permits are not accepted. VPNs/VPS tools are prohibited during verification.',
      },
      {
        question: 'What happens if KYC verification fails?',
        answer:
          'If KYC fails due to unacceptable documents (e.g., blurry, expired, or invalid) or duplicate accounts, you won’t receive a funded account, and your agreement may be terminated. Resubmit clear, valid documents or contact support@fundingoptimal.com for assistance.',
      },
    ],
  },
  {
    id: 'payout-request-process',
    badge: '1+ Question',
    title: 'Payout Request Process',
    slug: 'payout-request-process',
    description:
      'Steps to request a payout from a funded account at FundingOptimal.',
    questions: [
      {
        question: 'How do I request a payout at FundingOptimal?',
        answer:
          'Log in to your trader dashboard, ensure eligibility (minimum profit, trading period, and rule compliance), click “Request Payout,” provide payment details (e.g., cryptocurrency wallet address), and submit. Payouts are processed within 2-5 business days after verification.',
      },
    ],
  },
  {
    id: 'certificate-access',
    badge: '1+ Question',
    title: 'Accessing Your Certificate',
    slug: 'certificate-access',
    description:
      'How to access and download your certificate after completing the evaluation or program.',
    questions: [
      {
        question: 'How can I access my certificate at FundingOptimal?',
        answer:
          'After passing the evaluation or program and meeting all requirements, log in to your trader dashboard at www.fundingoptimal.com, navigate to the “Certificate” section, and download your certificate as a PDF displaying your name, program status, and completion date.',
      },
    ],
  },
];

export type FAQ = (typeof faqs)[0];
export type FAQQuestion = FAQ['questions'][0];
