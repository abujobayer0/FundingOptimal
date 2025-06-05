export const mockFAQs = [
  {
    id: "faq-1",
    category: "General",
    title: "Introduction to FundingOptimal",
    description: "Learn the basics about FundingOptimal and how it works.",
    image: "https://example.com/images/general1.png",
    questions: [
      {
        ques: "What is FundingOptimal?",
        userIds: ["u1", "u2"],
        status: true,
      },
      {
        ques: "Is FundingOptimal a prop firm?",
        userIds: ["u5"],
        status: false,
      },
      {
        ques: "How long has FundingOptimal been operating?",
        userIds: [],
        status: false,
      },
      {
        ques: "Can I trust FundingOptimal?",
        userIds: ["u3"],
        status: true,
      },
      {
        ques: "What are the benefits of using FundingOptimal?",
        userIds: ["u1", "u4"],
        status: true,
      },
    ],
  },
  {
    id: "faq-2",
    category: "Trading",
    title: "Supported Platforms",
    description: "Find out which platforms you can use for trading.",
    image: "https://example.com/images/trading1.png",
    questions: [
      {
        ques: "What platforms do you support?",
        userIds: ["u2"],
        status: true,
      },
      {
        ques: "Can I use MetaTrader 5?",
        userIds: ["u3", "u6"],
        status: true,
      },
      {
        ques: "Is TradingView integration available?",
        userIds: ["u5"],
        status: false,
      },
      {
        ques: "Do I need to install any software?",
        userIds: [],
        status: false,
      },
      {
        ques: "Are there any platform fees?",
        userIds: ["u1"],
        status: true,
      },
    ],
  },
  {
    id: "faq-3",
    category: "Getting Started",
    title: "Start Your Trading Journey",
    description: "Step-by-step guidance for new users.",
    questions: [
      {
        ques: "How do I sign up?",
        userIds: ["u7"],
        status: true,
      },
      {
        ques: "What are the requirements to join?",
        userIds: ["u3", "u5"],
        status: true,
      },
      {
        ques: "How long does the evaluation take?",
        userIds: [],
        status: false,
      },
      {
        ques: "Can I start with a demo?",
        userIds: ["u6"],
        status: true,
      },
      {
        ques: "Do I need trading experience?",
        userIds: ["u2"],
        status: false,
      },
    ],
  },
  {
    id: "faq-4",
    category: "CFDs/Stocks",
    title: "Trading CFDs and Stocks",
    description: "Details on trading CFDs and stocks via our platform.",
    questions: [
      {
        ques: "Do you offer CFD trading?",
        userIds: ["u1", "u4"],
        status: true,
      },
      {
        ques: "What stocks are available?",
        userIds: ["u7"],
        status: true,
      },
      {
        ques: "Are there leverage options?",
        userIds: [],
        status: false,
      },
      {
        ques: "What markets can I trade?",
        userIds: ["u6", "u9"],
        status: true,
      },
      {
        ques: "Do I own the underlying stock?",
        userIds: [],
        status: false,
      },
    ],
  },
  {
    id: "faq-5",
    category: "Payouts",
    title: "Understanding Payouts",
    description: "Learn how and when you'll get paid.",
    image: "https://example.com/images/payouts1.png",
    questions: [
      {
        ques: "When do I receive my payout?",
        userIds: ["u2"],
        status: true,
      },
      {
        ques: "What methods are available?",
        userIds: ["u3"],
        status: false,
      },
      {
        ques: "Are there payout fees?",
        userIds: ["u5"],
        status: true,
      },
      {
        ques: "Is there a payout threshold?",
        userIds: [],
        status: false,
      },
      {
        ques: "Can I track my payouts?",
        userIds: ["u1", "u4"],
        status: true,
      },
    ],
  },
  {
    id: "faq-6",
    category: "Lightning Plan",
    title: "The Lightning Plan Explained",
    description: "Overview of our fastest track funding model.",
    questions: [
      {
        ques: "What is the Lightning Plan?",
        userIds: ["u6"],
        status: true,
      },
      {
        ques: "How fast is the Lightning Plan?",
        userIds: ["u2", "u3"],
        status: true,
      },
      {
        ques: "Are there any special conditions?",
        userIds: [],
        status: false,
      },
      {
        ques: "Is this plan suitable for beginners?",
        userIds: ["u5"],
        status: false,
      },
      {
        ques: "Can I switch plans later?",
        userIds: ["u1"],
        status: true,
      },
    ],
  },
  {
    id: "faq-7",
    category: "Orders & Billing",
    title: "Managing Orders and Billing",
    description: "Learn how to manage subscriptions and orders.",
    questions: [
      {
        ques: "How do I view my order history?",
        userIds: ["u2"],
        status: true,
      },
      {
        ques: "Can I update billing info?",
        userIds: ["u6"],
        status: true,
      },
      {
        ques: "Are payments recurring?",
        userIds: [],
        status: false,
      },
      {
        ques: "Do you offer refunds?",
        userIds: ["u1"],
        status: false,
      },
      {
        ques: "Where do I download my invoice?",
        userIds: ["u5"],
        status: true,
      },
    ],
  },
  {
    id: "faq-8",
    category: "TradingView",
    title: "Using TradingView with Us",
    description: "Integrate and trade directly from TradingView.",
    questions: [
      {
        ques: "How to connect to TradingView?",
        userIds: ["u3"],
        status: true,
      },
      {
        ques: "Is TradingView included in the plan?",
        userIds: [],
        status: false,
      },
      {
        ques: "What features are available?",
        userIds: ["u7"],
        status: true,
      },
      {
        ques: "Is live trading supported?",
        userIds: [],
        status: false,
      },
      {
        ques: "Do I need a TradingView Pro account?",
        userIds: ["u4"],
        status: true,
      },
    ],
  },
  {
    id: "faq-9",
    category: "Rules",
    title: "Trading Rules & Regulations",
    description: "Stay compliant by following our rules.",
    questions: [
      {
        ques: "What are the daily drawdown limits?",
        userIds: ["u5"],
        status: true,
      },
      {
        ques: "Can I hold trades overnight?",
        userIds: ["u1", "u6"],
        status: true,
      },
      {
        ques: "Are there news trading restrictions?",
        userIds: [],
        status: false,
      },
      {
        ques: "How are rule violations handled?",
        userIds: ["u2"],
        status: true,
      },
      {
        ques: "Can I appeal a rule breach?",
        userIds: [],
        status: false,
      },
    ],
  },
  {
    id: "faq-10",
    category: "Instant Funded FAQ",
    title: "Instant Funding Details",
    description: "Get instant capital and start trading right away.",
    questions: [
      {
        ques: "What is instant funding?",
        userIds: ["u7"],
        status: true,
      },
      {
        ques: "Are there any eligibility checks?",
        userIds: ["u3", "u5"],
        status: true,
      },
      {
        ques: "How soon can I start?",
        userIds: ["u2"],
        status: false,
      },
      {
        ques: "Is instant funding guaranteed?",
        userIds: [],
        status: false,
      },
      {
        ques: "Can I reapply if denied?",
        userIds: ["u6"],
        status: true,
      },
    ],
  },
];

export const categories = [
  "All FAQs",
  "CFDs/Stocks",
  "General",
  "Getting Started",
  "Instant Funded FAQ",
  "Lightning Plan",
  "Orders & Billing",
  "Payouts",
  "Platforms",
  "Rules",
  "Trading",
  "TradingView",
];
