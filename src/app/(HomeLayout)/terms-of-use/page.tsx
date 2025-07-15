'use client';

import React, { useState } from 'react';
import { SectionWrapper } from '../_components';
import {
  FileText,
  UserCheck,
  Shield,
  TrendingUp,
  Ban,
  MapPin,
  Lock,
  Award,
  RefreshCw,
  AlertTriangle,
  Scale,
  XCircle,
  Cloud,
  Globe,
} from 'lucide-react';

const TermsOfUsePage = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      id: 'expectations',
      title: 'Expectations and Conduct',
      icon: <UserCheck className="w-5 h-5" />,
      content: `By using FundingOptimal’s services ("we", "us", or "our"), you agree to act with discipline, integrity, and full compliance with our rules and procedures.`,
    },
    {
      id: 'definition',
      title: 'Definition and Acceptance of Terms',
      icon: <FileText className="w-5 h-5" />,
      content: `These Terms of Use govern your access to and use of our website, trading platforms, and evaluation programs. By creating an account or engaging with our services, you confirm that you have read, understood, and agreed to these terms.`,
    },
    {
      id: 'account-security',
      title: 'Account Responsibility and Security',
      icon: <Shield className="w-5 h-5" />,
      content: `You are responsible for the accuracy of your registration information and for maintaining the confidentiality of your login credentials.\nFundingOptimal is not responsible for any loss or unauthorized access resulting from your failure to protect your account.`,
    },
    {
      id: 'evaluation',
      title: 'Evaluation Program and Funding Opportunities',
      icon: <TrendingUp className="w-5 h-5" />,
      content: `Our programs involve a performance-based evaluation using demo accounts. If you meet all objectives, you may qualify for a live funded account.\nAccess to funded accounts is not guaranteed and is granted solely at our discretion based on compliance with our trading guidelines.`,
    },
    {
      id: 'trading-rules',
      title: 'Trading Rules and Restrictions',
      icon: <Ban className="w-5 h-5" />,
      content: `The use of all automated trading systems, including Expert Advisors (EAs), bots, or any form of algorithmic trading, is strictly prohibited under all circumstances.\n\nAlso prohibited: hedging between accounts, arbitrage strategies, high-frequency trading, latency arbitrage, copy trading, or any strategy deemed manipulative or abusive.\n\nAll trading must be performed manually and must comply with the defined risk limits, profit targets, daily drawdown limits, and time restrictions as specified in each challenge or program agreement.`,
    },
    {
      id: 'ip-policy',
      title: 'IP Address Policy',
      icon: <MapPin className="w-5 h-5" />,
      content: `To maintain account security and ensure fair usage, the location associated with your IP address must remain consistent throughout your engagement with FundingOptimal. This includes the moment you purchase your evaluation, log into the FundingOptimal website, and while trading during both the Evaluation Phase and on your Funded Account.\nIf there is a noticeable change in the region of your IP address, our Risk Team may contact you to verify your location.\nYou are permitted to trade using different internet service providers (ISPs) and access your account from various devices, provided they are used within the same city or region.`,
    },
    {
      id: 'confidentiality',
      title: 'Confidentiality and Intellectual Property',
      icon: <Lock className="w-5 h-5" />,
      content: `All materials, strategies, tools, documents, and platform content provided by FundingOptimal are protected intellectual property.\nYou may not copy, distribute, share, or use these resources for any unauthorized purpose.`,
    },
    {
      id: 'rewards',
      title: 'Rewards',
      icon: <Award className="w-5 h-5" />,
      content: `Rewards are processed biweekly, starting 14 days after your first trade on a funded account.\nTo qualify for a reward, you must generate a minimum profit of $20 and trade for at least four days, using consistent strategies.\nRewards are paid via cryptocurrency within 3–5 business days, provided that all trades are closed and no rule violations are detected.`,
    },
    {
      id: 'modifications',
      title: 'Modifications to Terms',
      icon: <RefreshCw className="w-5 h-5" />,
      content: `FundingOptimal reserves the right to amend these Terms at any time. Updates will be posted on our website and may also be communicated directly. Continued use of the platform after such updates constitutes your acceptance of the revised Terms.`,
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer and Limitation of Liability',
      icon: <AlertTriangle className="w-5 h-5" />,
      content: `All services are provided “as-is” without guarantees regarding performance, uptime, or specific trading results.\nWe shall not be liable for any direct, indirect, incidental, or consequential loss resulting from your use of our platform, unless caused by gross negligence or intentional misconduct.`,
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      icon: <Scale className="w-5 h-5" />,
      content: `You agree to indemnify and hold FundingOptimal harmless from any claims, legal actions, losses, or damages arising from your breach of these Terms or misuse of our services.`,
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: <XCircle className="w-5 h-5" />,
      content: `Either party may terminate this agreement at any time.\nWe reserve the right to suspend or permanently revoke access to any user who violates our policies, terms, or trading rules.`,
    },
    {
      id: 'force-majeure',
      title: 'Force Majeure',
      icon: <Cloud className="w-5 h-5" />,
      content: `We are not liable for failures or delays resulting from events beyond our control, including but not limited to natural disasters, cyberattacks, technical outages, war, or government-imposed restrictions.`,
    },
    {
      id: 'governing-law',
      title: 'Governing Law and Jurisdiction',
      icon: <Globe className="w-5 h-5" />,
      content: `These Terms shall be governed by and interpreted in accordance with the laws of Dubai, United Arab Emirates. Any disputes arising from or related to these Terms shall be resolved exclusively in the courts of Dubai, UAE.`,
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
            Terms of <span className="text-primary">Use</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Please read these Terms of Use carefully before engaging with
            FundingOptimal. By accessing our platform, you agree to the
            following conditions.
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
    </div>
  );
};

export default TermsOfUsePage;
