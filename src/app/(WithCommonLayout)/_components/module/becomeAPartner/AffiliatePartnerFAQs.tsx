"use client";

import React from "react";
import { motion } from "framer-motion";
import FAQAccordion from "./FAQAccordion";

interface FAQItem {
  question: string;
  answer: string;
}

const textFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AffiliatePartnerFAQs: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "Are There Any Fees Associated With The Withdrawal Request?",
      answer:
        "No, there are no fees associated with withdrawal requests. All commission payouts are processed without any deductions or hidden charges.",
    },
    {
      question: "How Do I Request A Commission Payout?",
      answer:
        "You can request a commission payout through your affiliate dashboard. Simply navigate to the payouts section and submit your withdrawal request with your preferred payment method.",
    },
    {
      question: "When Will My Payout Request Be Processed?",
      answer:
        "Payout requests are typically processed within 24-48 hours during business days. You will receive a confirmation email once your payout has been initiated.",
    },
    {
      question: "When Can I Request A Payout For My Commissions?",
      answer:
        "You can request a payout for your commissions once you have reached the minimum payout threshold of $100. Payouts can be requested at any time after reaching this threshold.",
    },
    {
      question: "When Can I Request A Payout For My Commissions?",
      answer:
        "You can request a payout for your commissions once you have reached the minimum payout threshold of $100. Payouts can be requested at any time after reaching this threshold.",
    },
    {
      question: "Are There Any Additional Resources For Affiliates?",
      answer:
        "Yes, we provide comprehensive marketing materials, tracking tools, dedicated affiliate support, and regular training sessions to help you maximize your earning potential.",
    },
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
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
                Funding optimal Affiliate Partner FAQs?
              </h1>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Check out our most frequently asked questions here or click the
              link below to see all of our frequently asked questions.
            </p>

            <div className="md:pt-4 pb-4 md:pb-0">
              <button className="bg-primary hover:bg-primary text-black font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105">
                See Affiliate FAQs
              </button>
            </div>
          </motion.div>

          {/* Right Content - FAQ Accordion */}
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
