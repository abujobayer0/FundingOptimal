'use client';

import React, { useState } from 'react';
import { SectionWrapper, SectionHeader } from '../_components';
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Users,
  Mail,
  Database,
  AlertTriangle,
  Trash2,
  Baby,
  Settings,
  Send,
  Server,
  RefreshCw,
} from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      id: 'collection',
      title: 'Collection of Personal Information',
      icon: <FileText className="w-5 h-5" />,
      content: `To provide you with our products and services, FundingOptimal may collect certain personally identifiable information, such as:

• Your full name
• Home and mailing address  
• Email address
• Phone number
• Financial details (e.g., payment information)

If you make a purchase or request a payout, we will collect billing and credit card details as needed to process your transaction securely.

We do not collect personal information unless you choose to provide it. However, certain services may require you to voluntarily submit your information. Examples include:

• Creating an account
• Entering a contest or promotion
• Subscribing to special offers or third-party promotions
• Sending us a message or inquiry
• Providing payment information for orders or services

Your information may be used to contact you regarding services or products you have engaged with. Additionally, we may collect further personal or non-personal data in the future to support and improve your experience.`,
    },
    {
      id: 'use',
      title: 'Use of Your Personal Information',
      icon: <Users className="w-5 h-5" />,
      content: `FundingOptimal collects and utilizes your personal data to provide and manage the services you have requested. Additionally, FundingOptimal may use your information to keep you informed about other products, services, or promotions available from FundingOptimal and its affiliated partners.`,
    },
    {
      id: 'disclosure',
      title: 'Disclosure of Information to Third Parties',
      icon: <Eye className="w-5 h-5" />,
      content: `FundingOptimal may provide, lease, or sell customer information to third parties under certain conditions. We share this data when it is essential for setting up or managing your account, enhancing the ease of use, dependability, or features of our services, or when it serves a shared business interest.

From time to time, FundingOptimal may contact you on behalf of third-party partners with special offers or promotions that may be relevant to you. In such cases, your identifiable information—like your name, email, phone number, and address—may be shared with those partners.

Additionally, FundingOptimal may disclose information to trusted partners who assist with tasks such as performing data analysis, sending marketing communications via email or postal mail, providing customer service, or facilitating product delivery. These partners are only permitted to use your personal data for the purposes of supporting FundingOptimal's operations and must maintain strict confidentiality.

FundingOptimal may also release your personal information without prior consent if required by law or when we reasonably believe it is necessary to: (a) comply with legal requirements or respond to official legal requests; (b) protect FundingOptimal's rights, property, or safety; or (c) act promptly in emergency situations to ensure the safety of our users or the public.`,
    },
    {
      id: 'tracking',
      title: 'User Activity Tracking',
      icon: <Eye className="w-5 h-5" />,
      content: `FundingOptimal may monitor which pages and sections users visit on our platform to identify the most popular services. This helps us provide personalized content and targeted advertising based on your interests and behavior while using FundingOptimal.`,
    },
    {
      id: 'data-collection',
      title: 'Automatically Gathered Data',
      icon: <Database className="w-5 h-5" />,
      content: `When you access FundingOptimal, certain technical information about your device and browser may be collected automatically. This can include your IP address, browser type, domain names, access times, and referring URLs. We use this data to ensure our services run smoothly, maintain quality, and generate overall statistics about site usage.`,
    },
    {
      id: 'cookies',
      title: 'Cookies Usage',
      icon: <Settings className="w-5 h-5" />,
      content: `FundingOptimal uses cookies to improve and customize your online experience. Cookies are small files placed on your device by our servers. They cannot run software or carry viruses and are specific to your browser and device.

Cookies help by remembering your preferences and information. For example, if you personalize settings or register on FundingOptimal, cookies store your data like billing and shipping details so you don't have to enter them again on future visits. This makes using our site quicker and easier.

You can choose to accept or block cookies via your browser settings. Most browsers accept cookies by default, but you can disable them if you prefer. Keep in mind that disabling cookies might prevent you from using some features or services on the FundingOptimal website effectively.`,
    },
    {
      id: 'external-links',
      title: 'External Links',
      icon: <AlertTriangle className="w-5 h-5" />,
      content: `This website may include links to external websites. Please note that FundingOptimal is not responsible for the content, privacy policies, or practices of these third-party sites. We encourage you to be cautious when navigating away from our site and to carefully review the privacy policies of any other websites that collect your personal information.`,
    },
    {
      id: 'protection',
      title: 'Protection of Your Personal Data',
      icon: <Shield className="w-5 h-5" />,
      content: `FundingOptimal is committed to safeguarding your personal data from unauthorized access, misuse, or disclosure. To achieve this, we implement various security measures, including:

SSL Encryption: When sensitive information, like credit card details, is transmitted to other sites, it is secured through encryption methods such as Secure Sockets Layer (SSL) technology. 

While we strive to protect your information, please understand that no online data transmission or wireless network is completely secure. Consequently, you acknowledge that: (a) there are inherent privacy and security risks associated with the Internet beyond our control, and (b) we cannot guarantee the absolute security, privacy, or integrity of any data exchanged between you and FundingOptimal through this website.`,
    },
    {
      id: 'deletion',
      title: 'Your Right to Data Deletion',
      icon: <Trash2 className="w-5 h-5" />,
      content: `In compliance with applicable laws and subject to certain exceptions, if you submit a valid and verifiable request, we will:

• Remove your personal data from our systems; and
• Instruct any third-party service providers to delete your personal data from their records.`,
    },
    {
      id: 'children',
      title: 'Children Under 13',
      icon: <Baby className="w-5 h-5" />,
      content: `FundingOptimal does not intentionally collect personally identifiable information from children under the age of 13. If you are under 13 years old, you must obtain consent from a parent or legal guardian before using this website.`,
    },
    {
      id: 'opt-out',
      title: 'Opt-Out & Unsubscribe',
      icon: <Mail className="w-5 h-5" />,
      content: `We value your privacy and provide you the option to opt out of receiving certain messages. You can choose not to receive any or all communications from FundingOptimal's third-party partners by contacting us at: support@fundingoptimal.com`,
    },
    {
      id: 'email',
      title: 'Email Communications',
      icon: <Send className="w-5 h-5" />,
      content: `Occasionally, FundingOptimal may send you emails to share updates, special promotions, alerts, confirmations, surveys, or other general information. To help improve our services, we may track when you open these emails or click on any links within them.

If you prefer not to receive marketing or promotional emails from FundingOptimal, you can unsubscribe at any time by clicking the "unsubscribe" link located at the bottom of each email.`,
    },
    {
      id: 'storage',
      title: 'External Data Storage',
      icon: <Server className="w-5 h-5" />,
      content: `Your information may be stored on servers managed by third-party hosting providers with whom FundingOptimal has established agreements.`,
    },
    {
      id: 'updates',
      title: 'Updates to This Privacy Policy',
      icon: <RefreshCw className="w-5 h-5" />,
      content: `FundingOptimal reserves the right to update or modify this Privacy Policy as needed. When significant changes occur, we will inform you by sending a notification to the primary email address linked to your account, posting a clear notice on our website, and/or updating the privacy policy page. By continuing to use our website and services after these updates, you acknowledge and accept the revised Privacy Policy and agree to comply with its terms.`,
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
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            At FundingOptimal, safeguarding your personal information is a top
            priority. This Privacy Policy outlines how we collect, use, and
            protect your data when you visit or interact with our website.
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
                <nav className="space-y-2">
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
            Need Help or Have Questions?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 text-lg">
            FundingOptimal values your feedback and questions regarding this
            Privacy Policy. If you believe we have not complied with this
            statement, please reach out to us.
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

export default PrivacyPolicyPage;
