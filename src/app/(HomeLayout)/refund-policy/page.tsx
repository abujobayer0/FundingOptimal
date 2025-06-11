'use client';

import React, { useState } from 'react';
import { SectionWrapper } from '../_components';
import {
  CreditCard,
  XCircle,
  AlertTriangle,
  RefreshCw,
  FileText,
  Mail,
  Clock,
} from 'lucide-react';

const RefundPolicyPage = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      id: 'overview',
      title: 'Refund Policy Overview',
      icon: <FileText className="w-5 h-5" />,
      content: `At FundingOptimal, we are committed to providing a fair and transparent evaluation process for all our users. Before purchasing any of our Challenges, we encourage all traders to carefully review the program details, rules, and eligibility requirements provided on our platform.

We believe in maintaining clear expectations and transparency in all our transactions. This Refund Policy outlines our position on refunds and the limited circumstances under which they may be considered.

Please read this policy carefully before making any purchases on our platform, as it forms part of your agreement with us when you purchase any of our services or challenges.`,
    },
    {
      id: 'no-refunds',
      title: 'No Refunds Policy',
      icon: <XCircle className="w-5 h-5" />,
      content: `All fees paid for Challenges on the FundingOptimal platform are non-refundable. This includes, but is not limited to, cases where:

• The User does not complete the Challenge
• The User is disqualified due to a rule violation
• The User voluntarily discontinues participation
• The User fails to complete the Know Your Customer (KYC) process
• The User does not meet the profit targets within the evaluation period
• The User violates any of the trading rules or restrictions
• Technical issues on the user&apos;s end (internet connectivity, hardware problems, etc.)
• Change of mind after purchase

Once a Challenge is purchased and the evaluation begins, the fee is considered fully earned and will not be refunded under any circumstance.

This policy ensures that our evaluation process remains fair and consistent for all participants. It also reflects the immediate delivery of digital services upon purchase, including access to trading platforms, educational materials, and evaluation tools.`,
    },
    {
      id: 'exceptions',
      title: 'Refund Exceptions',
      icon: <AlertTriangle className="w-5 h-5" />,
      content: `In rare and limited cases, such as a confirmed technical error on our side (e.g., double payment, system malfunction preventing access to purchased services), we may review the case and offer a refund at the sole discretion of FundingOptimal.

Examples of potential exceptions include:

• Duplicate charges due to payment processing errors
• Technical failures that prevent access to purchased challenges for extended periods
• Billing errors where incorrect amounts were charged

Any such request must be submitted in writing within 7 days of the transaction date and must include:

• Transaction details and proof of payment
• Description of the technical issue or error
• Screenshots or documentation supporting the claim

Please note that refund exceptions are rare and are evaluated case-by-case. Approval is not guaranteed, and our decision is final.

All refund exception requests should be submitted to: support@fundingoptimal.com`,
    },
    {
      id: 'dispute-prevention',
      title: 'Payment Disputes and Chargebacks',
      icon: <CreditCard className="w-5 h-5" />,
      content: `We strongly encourage users to contact us directly before initiating any payment disputes or chargebacks with their financial institutions. Most issues can be resolved quickly through direct communication.

Important Notice: Initiating unauthorized payment disputes or chargebacks may result in:

• Permanent suspension of your account
• Denial of future services
• Legal action to recover costs and fees

If you have concerns about a transaction, please reach out to our support team first. We are committed to addressing legitimate concerns promptly and fairly.

Before initiating any dispute, please ensure you have:

• Reviewed this Refund Policy in its entirety
• Contacted our support team with your concerns
• Allowed reasonable time for resolution (typically 5-7 business days)`,
    },
    {
      id: 'process',
      title: 'Refund Request Process',
      icon: <Clock className="w-5 h-5" />,
      content: `If you believe you qualify for a refund exception based on the criteria outlined in this policy, please follow these steps:

1. Contact Support: Email support@fundingoptimal.com within 7 days of the transaction
2. Provide Details: Include your transaction ID, account information, and detailed description of the issue
3. Submit Evidence: Provide any relevant screenshots, documentation, or proof supporting your claim
4. Await Review: Our team will review your request within 5-7 business days
5. Receive Decision: You will be notified of our decision via email

Processing Times:
• Initial review: 5-7 business days
• Investigation (if required): Up to 14 business days  
• Refund processing (if approved): 3-10 business days depending on payment method

Please note that incomplete requests or those lacking sufficient documentation may be delayed or denied.`,
    },
    {
      id: 'policy-changes',
      title: 'Changes to the Refund Policy',
      icon: <RefreshCw className="w-5 h-5" />,
      content: `FundingOptimal reserves the right to update or modify this Refund Policy at any time without prior notice. Continued use of our platform after such changes constitutes your acceptance of the revised policy.

When we make changes to this policy, we will:

• Update the &quot;Last Modified&quot; date at the top of this page
• Post a notice on our website highlighting the changes
• Send email notifications to active users when significant changes are made

It is your responsibility to review this policy periodically to stay informed of any updates. Changes to this policy will not affect transactions completed before the effective date of the changes.

For questions about policy changes or clarification on any terms, please contact our support team.`,
    },
  ];

  const scrollToSection = (index: number) => {
    setActiveSection(index);
    const element = document.getElementById(sections[index].id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <SectionWrapper>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Refund <span className="text-primary">Policy</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Understanding our refund policy is important before making any
            purchases on the FundingOptimal platform. This policy outlines when
            refunds may or may not be available and the process for requesting
            them.
          </p>
        </div>
      </SectionWrapper>

      {/* Main Content */}
      <SectionWrapper className="!py-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h3 className="font-semibold text-white mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-2 max-h-[80vh] overflow-y-auto">
                  {sections.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(index)}
                      className={`flex items-center space-x-3 w-full text-left p-3 rounded-lg transition-all duration-200 ${
                        activeSection === index
                          ? 'bg-primary/20 text-primary border border-primary/30'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      <span
                        className={
                          activeSection === index
                            ? 'text-primary'
                            : 'text-gray-500'
                        }
                      >
                        {section.icon}
                      </span>
                      <span className="text-sm font-medium">
                        {section.title}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3 space-y-12">
              {sections.map((section, index) => (
                <div
                  key={index}
                  id={section.id}
                  className="bg-gray-900/30 rounded-xl border border-gray-800 p-8 hover:border-gray-700 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <span className="text-primary">{section.icon}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="mb-4 text-gray-300 leading-relaxed"
                      >
                        {paragraph.split('\n').map((line, lIndex) => (
                          <span key={lIndex}>
                            {line}
                            {lIndex < paragraph.split('\n').length - 1 && (
                              <br />
                            )}
                          </span>
                        ))}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl p-12 border border-primary/20">
          <div className="inline-flex items-center justify-center p-4 bg-primary/20 rounded-full mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-white">
            Questions About Our Refund Policy?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 text-lg">
            If you have any questions about our refund policy or need to submit
            a refund request, please don&apos;t hesitate to contact our support
            team. We&apos;re here to help clarify any aspect of our policy.
          </p>
          <a
            href="mailto:support@fundingoptimal.com"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-primary text-black rounded-lg hover:bg-primary/80 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            <span>support@fundingoptimal.com</span>
          </a>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default RefundPolicyPage;
