'use client';

import React, { useState } from 'react';
import { SectionWrapper } from '../_components';
import {
  FileText,
  Scale,
  UserCheck,
  RefreshCw,
  AlertTriangle,
  CreditCard,
  User,
  Shield,
  Settings,
  Target,
  DollarSign,
  Calendar,
  TrendingUp,
  Ban,
  Link,
  Database,
  Phone,
  Globe,
  Gavel,
  BookOpen,
  Award,
  CheckCircle,
  XCircle,
  Mail,
} from 'lucide-react';

const TermsConditionsPage = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      id: 'overview',
      title: 'Terms & Conditions – Overview',
      icon: <FileText className="w-5 h-5" />,
      content: `Welcome to FundingOptimal (referred to as "the Company", "we", or "our"). This website, along with the tools, services, and content available through it, is offered to you as a user on the condition that you accept all of the terms, policies, and notices outlined here.

By using our website or making a purchase, you are participating in our services and agreeing to be legally bound by these Terms & Conditions ("Terms"), as well as any additional policies or references linked from this page.

These Terms apply to every visitor to the site—whether you're browsing, making a purchase, using services, or contributing content.

Please Read Carefully
By accessing any part of this website or using our services, you acknowledge that you have read, understood, and agreed to these Terms. If you do not agree to everything stated, you may not use the site or access any of our services.

If any part of this website or our offering is interpreted as an invitation to accept, your acceptance is limited exclusively to the conditions listed in these Terms.`,
    },
    {
      id: 'eligibility',
      title: 'Eligibility Requirements',
      icon: <UserCheck className="w-5 h-5" />,
      content: `To use our services, you must:

• Be at least 18 years old, and
• Be located in a country where our services are legally accessible.

By registering an account with us, you confirm that you meet these requirements. You also agree to use the services only in accordance with the laws of the country you're accessing them from. If our services are restricted or unlawful in your jurisdiction, you are not permitted to use them.`,
    },
    {
      id: 'updates',
      title: 'Updates and Changes',
      icon: <RefreshCw className="w-5 h-5" />,
      content: `We may modify or update these Terms at any time. Changes will be published on this page, and it is your responsibility to review them periodically. Continued use of the website after changes are posted means you agree to the updated Terms.

Any new tools, features, or updates introduced within your user account or elsewhere on the site will also be governed by these Terms.`,
    },
    {
      id: 'financial-advice',
      title: 'Important Notice: No Financial or Investment Advice',
      icon: <AlertTriangle className="w-5 h-5" />,
      content: `Our services do not qualify as investment services under applicable law. We do not provide:

• Trading signals or recommendations
• Advice on how or when to trade
• Any form of financial guidance

Additionally, no employee or representative of FundingOptimal is authorized to give investment advice. If you receive any information that appears to be investment-related, please note that it is not endorsed by us, and we do not take responsibility for it.`,
    },
    {
      id: 'website-payment',
      title: 'Website Access & Payment Policy',
      icon: <CreditCard className="w-5 h-5" />,
      content: `At times, FundingOptimal may grant limited access to authorized third-party providers to address technical, infrastructure, or database-related issues. These access permissions are carefully monitored and are revoked immediately after the necessary maintenance or troubleshooting tasks are completed.

All payments made to FundingOptimal are final and non-refundable.

The registration fee grants you access to the FundingOptimal platform, proprietary tools, and services. As these services are delivered immediately upon purchase, you are not entitled to any refunds once payment has been processed.`,
    },
    {
      id: 'registration',
      title: 'Registration Terms',
      icon: <User className="w-5 h-5" />,
      content: `By creating an account and accepting our Terms of Service, you confirm that:

(a) You are at least 18 years of age (or the legal age of majority in your region) and legally capable of entering into binding agreements.

(b) The personal information you provide is accurate, complete, and up to date. You agree to keep this information current to ensure uninterrupted access to our services.

(c) You will not use our services for any unlawful or unauthorized activities, including those that violate laws within your jurisdiction (such as copyright infringement or other intellectual property laws).

(d) Any violation of these Terms may result in the immediate suspension or termination of your access to the platform.

(e) You are responsible for keeping your account credentials (username and password) confidential. Any actions taken through your account are your responsibility. If you suspect unauthorized access, you must notify us immediately.`,
    },
    {
      id: 'kyc',
      title: 'Know-Your-Customer (KYC) Policy',
      icon: <Shield className="w-5 h-5" />,
      content: `FundingOptimal may request that you complete a verification process as part of our onboarding and compliance requirements. This process may include submitting identity documents and other personal information as required by applicable laws and regulations.

By using our platform, you acknowledge and agree that:

• Your access to the platform is conditional upon successful completion of our identity verification procedures, which may include checks performed by third-party AML/KYC service providers.

• These procedures are implemented in accordance with Anti-Money Laundering and Counter-Terrorist Financing (AML/CFT) regulations.

• You may be subject to periodic re-verification to ensure continued compliance.

• You are responsible for informing us immediately of any changes to the personal information or documents previously submitted.`,
    },
    {
      id: 'account-suspension',
      title: 'Account Suspension and Termination',
      icon: <XCircle className="w-5 h-5" />,
      content: `FundingOptimal may, at its sole discretion, restrict, suspend, or terminate your access to its services or close your account at any time—especially if it is determined that you have submitted false, misleading, incomplete, or inaccurate information.

You acknowledge that the Company's onboarding and monitoring procedures are part of its obligations under Anti-Money Laundering (AML) and Counter-Terrorism Financing (CFT) laws. As part of this compliance, FundingOptimal may also legally gather information about you from third-party sources without needing to notify you in advance.

Any breach of these Terms or applicable law may lead to the immediate termination of your access to our services and platform. FundingOptimal reserves full authority to deactivate your account or deny access to the platform, either partially or entirely, if deemed necessary.`,
    },
    {
      id: 'user-equipment',
      title: 'User Equipment and Resource Responsibility',
      icon: <Settings className="w-5 h-5" />,
      content: `You agree that it is your sole responsibility to secure and maintain all equipment, software, network access, and other tools required to use our services. This includes devices, internet connections, applications, licenses, or other infrastructure needed for proper platform functionality.

FundingOptimal is not liable for any expenses, losses, or disruptions you may experience as a result of issues with your devices, software, or connectivity.`,
    },
    {
      id: 'general-use',
      title: 'General Use Terms and Data Transmission',
      icon: <Database className="w-5 h-5" />,
      content: `We reserve the right to deny service to anyone, for any reason, at any time.

You understand and accept that content you transmit through our website (except payment information) may travel across different networks unencrypted, and may be modified to comply with the technical standards of various systems. However, credit card and payment information is always encrypted during transmission for your protection.`,
    },
    {
      id: 'use-limitations',
      title: 'Use Limitations and Intellectual Property',
      icon: <Shield className="w-5 h-5" />,
      content: `Without written authorization from FundingOptimal, you may not copy, sell, distribute, or reuse any part of the service, website, or communications channels connected to our platform. Unauthorized use is strictly prohibited and may result in legal action.`,
    },
    {
      id: 'information-accuracy',
      title: 'Information Accuracy and Timeliness',
      icon: <CheckCircle className="w-5 h-5" />,
      content: `At FundingOptimal, we make every reasonable effort to provide accurate and up-to-date content. However, some details presented on our website may be sourced from third parties, and we cannot guarantee that all information is entirely precise, complete, or current at all times.

The materials on this website are meant for general informational use only and should not be your only point of reference when making important decisions. You are responsible for verifying the information using more reliable or official sources. Relying solely on the content here is done at your own discretion and risk.

This site may contain historical data that is no longer current and is offered purely for reference. FundingOptimal reserves the right to edit or remove content on the site without notice but is not obligated to update any specific material. Monitoring changes to our site is your responsibility.`,
    },
    {
      id: 'service-updates',
      title: 'Service Updates and Price Adjustments',
      icon: <DollarSign className="w-5 h-5" />,
      content: `The prices of our services or products may be updated at any time without advance notice.

We reserve the right to change, pause, or permanently discontinue any aspect of the platform—including services and account features—at our own discretion and without prior warning. FundingOptimal is not liable for any consequences resulting from these changes, including service suspension, pricing modifications, or termination of operations.`,
    },
    {
      id: 'products-services',
      title: 'Products and Services Policy',
      icon: <Target className="w-5 h-5" />,
      content: `Each user is limited to one account only. FundingOptimal retains the right—but is not required—to restrict product or service access based on individual users, regions, or jurisdictions. These restrictions can be applied on a case-by-case basis.

We may limit the number of services or products offered to each user and may change product descriptions, pricing, or availability without notice. We also reserve the right to discontinue any offering at any time.

Any promotions or product offerings listed on this site are invalid where prohibited by law. While we aim to deliver quality services, we cannot promise that your experience will meet your expectations or that any issues with the platform will always be corrected.`,
    },
    {
      id: 'order-accuracy',
      title: 'Order and Account Information Accuracy',
      icon: <User className="w-5 h-5" />,
      content: `We may decline or cancel any order placed with us at our discretion. Additionally, we may limit purchases based on user, household, or order—such as limiting transactions made under the same account, payment method, or billing/shipping address.

If your order is altered or canceled, we may attempt to notify you via the email, phone number, or billing information provided at the time of purchase.

We also reserve the right to reject orders that appear to be placed by resellers, agents, or unauthorized distributors.

Account and Payment Information Accuracy
You agree to provide and maintain accurate and up-to-date information for all purchases made through our platform. This includes your billing details, email address, and credit card information (including expiration dates), to ensure smooth transaction processing and necessary communications.`,
    },
    {
      id: 'evaluation-funding',
      title: 'Evaluation and Funding Phase Guidelines',
      icon: <TrendingUp className="w-5 h-5" />,
      content: `(a) Overall Loss Threshold
During both the Evaluation Period and the Funded Account Stage, your total losses must remain within a defined percentage of your starting balance. It is your responsibility to ensure that this limit is not breached at any point.

Overall Loss Limits by Challenge Type:
• 2-Step Challenge: 10% maximum drawdown
• 1-Step Challenge: 7% maximum drawdown
• 3-Step Challenge: 7% maximum drawdown
• Instant Funding Challenge: 6% maximum drawdown
• 1-Step Africa Challenge: 6% maximum drawdown

(b) Daily Loss Cap
You are also required to stay within a daily loss limit, calculated based on your balance at midnight (00:00) server time / GMT+2 (CEST). This amount resets every 24 hours, and the limit remains active from the start of one trading day to the next.

Daily Drawdown Limits by Challenge Type:
• 2-Step Challenge: 5% of the daily opening balance
• 1-Step Challenge: 4%
• 3-Step Challenge: 4%
• Instant Funding Challenge: 3%
• 1-Step Africa Challenge: 3%

It's your responsibility to ensure that your daily losses do not exceed these thresholds based on your balance at the start of each trading day.

(c) Required Profit Targets
To successfully complete the Evaluation Phase, you must hit specific profit benchmarks without violating any rules or limits. These targets are based on your initial account balance and the type of challenge you're participating in.

Profit Goals Per Challenge:
2-Step Challenge:
• Phase 1: Achieve 8% profit
• Phase 2: Achieve 5% profit

1-Step Challenge:
• Achieve 10% profit

3-Step Challenge:
• Phase 1: Reach 8% profit
• Phase 2: Reach 4% profit
• Phase 3: Reach 4% profit

Instant Funding Challenge:
• Reach 13% profit

1-Step Africa Challenge:
• Reach 6% profit

All profit targets are open-ended with no time limits to complete.

(d) Minimum Required Trading Days
Each phase of your challenge also requires a minimum of 4 active trading days to qualify for progression.`,
    },
    {
      id: 'trading-restrictions',
      title: 'Trading Restrictions and Prohibited Activities',
      icon: <Ban className="w-5 h-5" />,
      content: `(e) Trading Restrictions in Simulated Environments
Clients are strictly required to avoid any trading activity that:
• Disrupts or contradicts the natural behavior of real financial markets;
• Conflicts with the current Terms and Conditions of FundingOptimal;
• Violates FundingOptimal's Trading Guidelines or its Responsible Trading Policy.

All trading must reflect ethical and compliant practices as outlined by the company.

(f) Failing the Evaluation Phase
If a Client does not meet the necessary conditions during the Evaluation Stage, the assessment will be classified as failed. In such situations:
• The trading account will be terminated,
• All related services will be discontinued,
• And no reimbursement of the fees paid will be granted.

(g) Breach During the Funded Phase
Failure to adhere to the required terms while in the Funded Phase will result in the account being marked as failed. As a result:
• Access to the Funded Account and all services will be revoked,
• The Client will not be eligible for any refund of fees previously paid.`,
    },
    {
      id: 'simulated-trading',
      title: 'Simulated Trading Policy',
      icon: <Calendar className="w-5 h-5" />,
      content: `(a) Account Activity Requirement
All trading accounts must remain active. If no trading activity occurs for more than 30 consecutive days, the account may be flagged for inactivity and subject to closure at the company's discretion.

(b) News and Weekend Trading Limitations
Weekend Rule:
Holding open positions over the weekend is not permitted under any challenge type. All trades must be closed before the market closes on Fridays.

News Event Rule:
Profits from trades executed during news-sensitive periods will be disqualified. Specifically:
• Trades opened within 5 minutes before a high-impact news release or speech, and trades closed within 5 minutes after such events, are not considered valid for profit assessment.
• This rule applies to all trade types, including manual entries, pending orders, stop losses, and take profits.
• During official speeches, the restriction window extends from 5 minutes before to 5 minutes after the speech.
• Profits generated during these restricted periods may be removed, and in some cases, the system may automatically close trades that breach these guidelines.

News Sources:
The economic calendars from Forex Factory and Myfxbook are used to define scheduled events and speeches.

Responsibility for Breach:
If any trade, especially around news times, causes the account to violate the daily loss or maximum loss thresholds, the Client assumes full responsibility for the infraction.`,
    },
    {
      id: 'forbidden-methods',
      title: 'Forbidden Trading Methods and High-Risk Behavior',
      icon: <XCircle className="w-5 h-5" />,
      content: `(c) Sustainability Score Requirement
To ensure steady and consistent trading performance, a sustainability score must be met before advancing. This metric is in place to prevent a large portion of total profits from being earned in a single day. Traders may continue placing trades until the necessary score is reached. The exact sustainability threshold depends on the specific challenge model chosen.

(d) Forbidden Trading Methods and High-Risk Behavior
Certain trading tactics and behaviors are strictly forbidden during simulated trading. Violating these rules can result in the termination of your account, cancellation of profits, and ineligibility for further participation.

(i) Banned Strategies
The following trading actions are considered prohibited under all circumstances:
• Trading based on price gaps,
• High-frequency trading (HFT),
• Use of toxic order flow,
• Spamming orders to the server,
• Exploiting latency or delay-based arbitrage,
• Engaging in hedging strategies across different accounts,
• Attempting long vs. short arbitrage,
• Performing reverse arbitrage or tick-based scalping,
• Manipulating execution through server-side tactics,
• Executing trades to mirror or offset trades in other accounts (reverse account trading).

Also prohibited:
• Using copy trading services,
• Allowing third-party account management,
• Utilizing any unapproved third-party Expert Advisors (EAs).

⚠️ Use of such tools will be treated as a direct violation and will result in account breach, loss of all profits, and immediate account termination.

Responsible Trading Standards
Clients are expected to use sound trading judgment and maintain risk discipline. Any of the following may be considered a violation:
• Opening trades that are significantly larger than your normal trade size,
• Executing abnormally high or low numbers of trades,
• Placing trades solely to exploit scheduled news events.

FundingOptimal reserves the right to determine, at its own discretion, what constitutes abusive or prohibited trading practices.`,
    },
    {
      id: 'optional-tools',
      title: 'Use of Optional Tools',
      icon: <Settings className="w-5 h-5" />,
      content: `At times, we may offer access to external tools provided by third parties. These tools are offered without any monitoring, control, or input from our side. You acknowledge that such tools are provided "as is" and "as available," with no guarantees, support, or endorsements from us. We assume no responsibility or liability arising from your use of these optional tools.

Any use of these tools is completely voluntary and at your own risk. It is your responsibility to review and agree to the terms of use established by the relevant third-party provider before engaging with them.

We may also introduce new features, resources, or services in the future as part of the platform. These new additions will also be governed by our Terms of Service.`,
    },
    {
      id: 'third-party',
      title: 'Third-Party Services',
      icon: <Link className="w-5 h-5" />,
      content: `(a) Links and External Content
Some content, services, or products accessible through our platform may originate from third parties. Our website may include links that redirect you to third-party websites which are not associated with or controlled by us. We do not review or guarantee the accuracy or reliability of such third-party content or services and are not liable for any damage or loss caused by engaging with them.

You are advised to carefully review the policies and terms of any third-party site before making any purchases or sharing your personal information. Any concerns or issues with third-party products or services must be directed to the respective provider.

(b) Adherence to Third-Party Terms
Our platform may depend on integrations with services offered by third parties. As a user, you are required to comply with their terms and conditions in addition to ours.

(c) Compliance-Based Restrictions
If any third-party provider restricts your access due to regulatory, legal, or compliance concerns, we reserve the right to enforce similar restrictions on our platform without providing a detailed explanation. This may result in loss of access to certain features or services.

(d) Limitation of Liability
We are not responsible for any technical issues, service interruptions, or malfunctions caused by third-party providers. If a third-party integration affects the availability or functionality of our platform, we cannot guarantee seamless performance. Any disruptions or errors stemming from such third-party systems are beyond our control, and we are not liable for their consequences.`,
    },
    {
      id: 'personal-info',
      title: 'Personal Information',
      icon: <Shield className="w-5 h-5" />,
      content: `Your submission of personal information through the store is governed by our Privacy Policy.`,
    },
    {
      id: 'unacceptable-uses',
      title: 'Unacceptable Uses',
      icon: <Ban className="w-5 h-5" />,
      content: `In addition to the restrictions outlined in our Terms of Service, the following actions are strictly prohibited when using this site or its content:

(a) General Restrictions
You may not use the service:
• For any illegal activities.
• To encourage or assist others in carrying out illegal acts.
• In violation of any applicable laws, rules, or regulations at the local, state, national, or international level.
• To infringe upon our intellectual property rights or those of any third party.
• To harass, threaten, demean, abuse, defame, or discriminate against anyone based on gender, sexual orientation, religion, ethnicity, race, age, nationality, or disability.
• To submit inaccurate, misleading, or false information.
• To upload or spread any viruses, malware, or other harmful code that could affect the functionality or operation of this site, related websites, or the wider internet.
• To collect, store, or track others' personal information without consent.
• To engage in spamming, phishing, deceptive practices, data scraping, or unauthorized data crawling.
• For any indecent, offensive, or immoral purposes.
• To attempt to bypass or disable any of the site's security features or protections.

(b) Restrictions for Proprietary Traders
Individuals affiliated with proprietary trading firms—including owners, staff, or representatives—are expressly prohibited from using FundingOptimal for trading.

(c) Multiple Account Registrations
Creating or registering more than one account using different email addresses is not allowed.

⚠️ Violation Consequences
We reserve the right to suspend or permanently disable your access to the site or any of its related services if you breach any of the above terms.`,
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer of Warranties & Limitation of Liability',
      icon: <AlertTriangle className="w-5 h-5" />,
      content: `We do not guarantee that your experience using our service will always be perfect—there may be interruptions, delays, security issues, or errors. We also do not promise that the results you get from using our service will always be correct or dependable.

You acknowledge and accept that we may suspend or stop offering the service at any time and for any reason, with or without notifying you. You use the service entirely at your own risk.

Unless we clearly state otherwise, everything offered through our service is provided "as is" and "as available." This means we offer no guarantees—express or implied—regarding the service or any products provided through it. This includes implied warranties related to:
• Being suitable for a specific purpose
• Merchantability or commercial value
• Ownership rights
• Lasting performance or quality
• Protection against infringement of third-party rights

FundingOptimal, along with its employees, directors, affiliates, agents, partners, suppliers, or anyone else connected to us, is not responsible for any harm, loss, or damage you may suffer. This includes, but is not limited to, direct or indirect damages, lost income or data, business interruptions, or any costs tied to replacing products or services. We are not liable for any claim that arises from your use of the service or products, whether based on contract law, negligence, or any other legal theory—even if we were previously informed such damage could happen.

In locations where the law does not allow certain exclusions or limitations, our responsibility will be limited only to what is legally permitted.

Additionally, any payments, commissions, or performance-related earnings connected to the use of our service are not the responsibility of Intellimeter. We are not obligated to handle or guarantee such payments, and any related claims are specifically excluded from our liability.`,
    },
    {
      id: 'compensation',
      title: 'Compensation for Claims',
      icon: <Scale className="w-5 h-5" />,
      content: `You agree to protect, defend, and reimburse FundingOptimal, branches, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns, and employees, from any claims or demands made by third parties. This includes covering reasonable legal fees and costs that arise because of your breach of these Terms of Service or related documents, or because you violated any laws or infringed on the rights of others.`,
    },
    {
      id: 'severability',
      title: 'Severability',
      icon: <Scale className="w-5 h-5" />,
      content: `If any part or provision of these Terms of Service is found to be unlawful, invalid, or unenforceable by a court or relevant authority, that specific part will be enforced to the greatest extent permitted by applicable law. If it cannot be enforced as written, it will be considered severed or removed from these Terms. This removal will not impact or affect the legality, validity, or enforceability of the remaining provisions, which will continue in full force and effect. The intent is that the Terms remain effective even if one or more provisions are partially or fully invalidated.`,
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: <XCircle className="w-5 h-5" />,
      content: `Any responsibilities or obligations that arose before the termination of this agreement will continue to apply even after the agreement ends. These Terms of Service will remain in effect unless they are ended either by you or by us.

You may terminate this agreement at any time by informing us that you no longer wish to use our services or by simply stopping your use of our website.

We reserve the right to terminate this agreement at any time, without prior notice, if we believe—or have reason to suspect—that you have violated any of the terms or conditions outlined here. In such cases, you will still be responsible for paying any outstanding amounts owed up to and including the date of termination. We may also restrict or completely block your access to our services, either partially or fully, as we see fit.`,
    },
    {
      id: 'dispute-policy',
      title: 'Dispute Policy',
      icon: <Gavel className="w-5 h-5" />,
      content: `Initiating a payment dispute causes financial harm to our business and negatively affects our standing with payment providers. To protect our operations and reputation, any account involved in a payment dispute—linked either directly or through the disputed transaction—will be permanently banned. This action is final, and we will not consider appeals or requests to reinstate the banned account(s).

If a user files a dispute in situations where our service was delivered properly and no fault lies with FundingOptimal, that user will be permanently barred from opening or maintaining any accounts with us in the future. In addition, any existing active accounts associated with that individual will be closed immediately.

This policy exists to defend FundingOptimal against unnecessary financial strain and to help preserve the trust and reliability of our brand over time.`,
    },
    {
      id: 'entire-understanding',
      title: 'Entire Understanding',
      icon: <BookOpen className="w-5 h-5" />,
      content: `Our decision not to enforce any part of these Terms at any time does not mean we give up our rights to enforce it in the future. These Terms of Service, along with any rules or policies published by us on our website or related to the use of our services, represent the full and complete understanding between you and FundingOptimal. They replace all previous or current discussions, agreements, or communications—whether written or spoken. If any wording in these Terms is unclear, it will not be interpreted unfairly against the party who wrote it.`,
    },
    {
      id: 'term-updates',
      title: 'Updates to These Terms',
      icon: <RefreshCw className="w-5 h-5" />,
      content: `You may view the latest version of these Terms of Service on this page at any time. We may, at our sole discretion, revise, modify, or replace any part of these Terms by posting the updated version on our website. It is your responsibility to check the Terms regularly. Your continued use of our website or services after any changes are made indicates that you accept and agree to those updates.`,
    },
    {
      id: 'private-communication',
      title: 'Private Communication',
      icon: <Phone className="w-5 h-5" />,
      content: `All interactions between you and FundingOptimal—including emails, messages through our platform, phone calls, or any other form of communication—are considered strictly private. By using our services, you agree not to share, post, publish, or disclose any part of these communications to anyone without our written permission.

This confidentiality requirement is critical to maintaining trust and professionalism. Any violation of this condition will be treated as a breach of these Terms and may lead to immediate suspension or termination of your account, along with any other legal steps we may take to protect our interests.`,
    },
    {
      id: 'contact',
      title: 'How to Contact Us',
      icon: <Mail className="w-5 h-5" />,
      content: `If you have any questions or concerns regarding these Terms of Service, please feel free to reach out to us at support@fundingoptimal.com.`,
    },
    {
      id: 'governing-jurisdiction',
      title: 'Governing Jurisdiction',
      icon: <Globe className="w-5 h-5" />,
      content: `All legal relationships arising from or connected to these Terms and Conditions—including any non-contractual matters—will be interpreted and enforced under the laws of Dubai, where applicable. In the event of a dispute that cannot be resolved through arbitration due to legal or situational limitations, the issue will be exclusively handled by the courts of Dubai.

Policy Updates
FundingOptimal holds the authority to modify, update, or revise these Terms and Conditions at its discretion. Such changes can be made at any time and without advance notice. You are encouraged to review this document regularly to remain informed about any revisions.

User Confirmation
By participating in trading activities through FundingOptimal, you confirm that you have carefully read, fully understood, and agreed to follow these Terms and Conditions.`,
    },
    {
      id: 'responsible-trading',
      title: 'Responsible Trading Guidelines',
      icon: <Award className="w-5 h-5" />,
      content: `At FundingOptimal, we are dedicated to maintaining a trustworthy and secure trading space where responsible behavior is the foundation of long-term success. To strengthen this commitment, we've introduced an improved rewards structure alongside a clear Responsible Trading Policy that defines how we expect users to conduct themselves while trading on our simulated platform.

All trading activity should reflect realistic, thoughtful decisions—similar to how you would trade in actual live-market conditions. Every action taken on your simulated account should be backed by logic and awareness, as if you were risking your own money.

We ask our traders to approach simulated trading with the same seriousness, discipline, and professionalism they would apply to their personal portfolios. This includes responsible risk management and avoiding reckless or manipulative behavior.

Our purpose is to support real traders in achieving both personal development and financial success. By embracing responsible trading practices, you position yourself for consistent growth, better decision-making, and the confidence that comes with being in control of your financial journey.

This policy is meant to inform and guide you on what responsible trading looks like. It equips you with the knowledge needed to manage your account wisely, and it helps prevent careless habits that could hurt your progress. At FundingOptimal, we expect all traders to demonstrate accountability, maturity, and respect in all trading activities.

Responsibilities
When using FundingOptimal accounts for trading, it's essential to follow honest and proper trading methods. Avoid any toxic trading styles, news-based trades, or unprofessional conduct that could harm your long-term success or contradict responsible trading principles. All traders accessing our firm's resources and accounts must uphold the highest ethical standards. Specifically, you must not misuse or exploit these resources, which are entrusted to you in good faith. It is also important to avoid any attempts to manipulate the FundingOptimal evaluation system, which is designed to fairly measure your trading skills.

As a trader with FundingOptimal, you are expected to:

Exercise Caution in Trading:
Responsible trading requires patience and careful decision-making. Avoid making hasty trades or relying on news events as the basis for your trades. News trading is strictly forbidden and considered abuse of our accounts, which may result in immediate termination. Instead, base your trades on thorough analysis and keep a broad perspective of market conditions beyond just immediate news.

Implement Strong Risk Controls:
Do not overtrade or take on excessive leverage. Use sound risk management techniques, set realistic profit and stop-loss levels, and size your positions appropriately. Consider taking partial profits to protect yourself from sudden market reversals or consolidations. Taking on large positions or multiple trades at once often stems from emotional decisions, which can lead to bigger losses. FundingOptimal encourages a conservative approach, as even seasoned traders focus on minimizing risk to sustain steady gains over time.

Focus on Capital Preservation and Profit Protection:
Treat your FundingOptimal account like it's your own money. Protect your capital, especially in uncertain or volatile markets. Avoid risking too much of your profits and limit your risk on any trade to a small percentage of your account, typically not exceeding 1%.

Regularly Review and Improve:
Continuously analyze your trading history to learn from both your successes and mistakes. This helps you refine your strategy and adjust to evolving market environments. Periodically reassess your risk appetite, exposure, and trading goals to stay aligned with your objectives. This ongoing review keeps your trading disciplined, informed, and more resilient to losses. Stay current with market news, regulations, and risk management best practices to maintain a competitive edge.

Follow FundingOptimal's Rules:
All traders must follow the Responsible Trading Policy and other relevant guidelines issued by FundingOptimal. Non-compliance may lead to suspension or permanent loss of trading privileges. By adhering to these policies, you help build a professional, trustworthy trading community and ensure a positive, long-lasting relationship with FundingOptimal.

Best Practices for Trading
Trading success isn't about quick wins; it's about building a strong, lasting foundation for sustainable growth. Achieving this requires discipline, patience, consistency, and careful management of risk.

To promote responsible and effective trading, we suggest following these essential practices:

Create a Clear Trading Strategy and Set Practical Objectives:
To confidently manage the complexities of the financial markets, you need a clear, detailed trading strategy. This strategy should be based on a solid grasp of current market trends and an understanding of global events that might affect the markets. Given the unpredictable nature of world affairs today, it's vital to stay alert and adaptable. Set achievable goals that fit your account size and the current market conditions. Keeping yourself updated on global developments will help you better manage risks and improve your chances of successful trades.

Steer Clear of Gambling and Rash Decisions:
Treat trading as a professional activity that requires a strategic approach rather than a game of chance. Consider your demo or simulated accounts as if they were your real money—never gamble recklessly. Trading is a calculated discipline, not a gamble. Avoid impulsive "all-in" strategies and prohibited actions such as trading based on breaking news, which is not allowed on FundingOptimal accounts. Losses are inevitable, but don't let frustration drive you into "revenge trading." Stay composed, review your methods regularly, and keep in mind that successful trading is a long-term commitment.

Focus on a Select Few Assets and Master Them:
Consistent traders usually limit themselves to a few assets rather than attempting to trade everything. Deep familiarity with your chosen markets helps you understand their unique behavior and better anticipate price movements. While diversification is a risk management tool, over-diversification across correlated instruments can actually increase your exposure. Avoid jumping erratically between assets; instead, build expertise in a handful of markets to make smarter, more confident trades.

Keep Yourself Updated on Global Events:
Market movements are influenced by far more than just charts and technical indicators. Staying informed about economic developments, geopolitical events, technological innovations, and other global factors is crucial. This broader awareness helps you put market trends into context and adjust your strategy to evolving conditions. Being well-informed about the bigger picture is key to making sound decisions and staying competitive in the ever-changing financial landscape.

Take Regular Breaks   
The importance of taking breaks while trading cannot be emphasized enough. When you're constantly exposed to market information and your emotions are running high, it becomes easy to make hasty decisions that could negatively impact your results. Overtrading and obsessively watching charts often lead to a destructive cycle of impulsive moves that undermine your success.

To prevent this, it&apos;s crucial to step away periodically to clear your mind and regain focus. Taking breaks isn&apos;t a sign of laziness or lack of interest—it's a smart, strategic choice. By pausing and distancing yourself from the screen, you give yourself time to review your trades thoughtfully, assess whether your plan is still effective, and realign with your objectives.

Successful trading demands strong mental resilience, self-control, and patience. Scheduling deliberate breaks will sharpen your concentration and decision-making when you return. If you feel fatigued or mentally unfocused, taking time off will help you come back refreshed and ready to trade more effectively.

Consequences for Not Following the Rules
Please take note of the possible outcomes if you fail to comply with our trading standards:

Account Suspension or Closure: If your trading is found to be irresponsible, your account could be temporarily suspended or permanently closed.

Account Restrictions: We may impose limits or restrictions on your account to ensure adherence to our policies.

Denial of Payouts or Fees: To discourage harmful or unsustainable trading habits, payout requests or fees may be denied. However, FundingOptimal's main aim remains to avoid leaving any traders unpaid.

Policy Updates and Changes
FundingOptimal retains the right to update or change this Responsible Trading Policy at any time without prior notice.

Acceptance
By trading with FundingOptimal, you confirm that you have carefully read, fully understood, and agree to comply with the Responsible Trading Policy.`,
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
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Welcome to FundingOptimal. By using our website and services, you
            agree to be bound by these comprehensive Terms & Conditions. Please
            read them carefully to understand your rights and responsibilities.
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
            Questions About These Terms?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 text-lg">
            If you have any questions or concerns regarding these Terms &
            Conditions, please feel free to reach out to us. We're here to help
            clarify any aspect of our agreement.
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

export default TermsConditionsPage;
