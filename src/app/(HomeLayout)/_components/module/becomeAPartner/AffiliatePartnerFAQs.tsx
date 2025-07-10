'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FAQAccordion from './FAQAccordion';
import { useRouter } from 'next/navigation';

interface FAQItem {
  question: string;
  answer: string;
}

const textFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const AffiliatePartnerFAQs: React.FC = () => {
  const router = useRouter();
  const faqItems: FAQItem[] = [
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
  ];

  return (
    <div className="bg-[#050505] text-white py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left Content */}
          <motion.div
            variants={textFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/5 border border-primary rounded-md px-4 py-2 text-sm">
              <span className="text-primary">FAQs</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl lg:text-[44px] font-bold leading-tight">
                FundingOptimal Affiliate Partner FAQs?
              </h1>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Check out our most frequently asked questions here or click the
              link below to see all of our frequently asked questions.
            </p>

            <div className="md:pt-4 pb-4 md:pb-0">
              <button
                onClick={() => router.push('/faqs/affiliate')}
                className="bg-primary hover:bg-primary text-black font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
              >
                See Affiliate FAQs
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={textFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <FAQAccordion items={faqItems} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AffiliatePartnerFAQs;
