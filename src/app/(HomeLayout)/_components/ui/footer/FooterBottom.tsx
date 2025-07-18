'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/fundingoptimal-logo.png';
import logo2 from '@/assets/propfirm.png';

const FooterBottom = () => {
  const year = new Date(Date.now()).getFullYear();
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  const toggleDisclaimer = () => {
    setIsDisclaimerOpen(!isDisclaimerOpen);
  };

  return (
    <footer className="bg-gradient-to-t  from-primary/25 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-8 lg:gap-12 mb-8">
          <div className="flex-shrink-0">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex-shrink-0 flex flex-col items-center gap-1">
                <Image src={logo} alt="FundingOptimal" width={30} height={30} />
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[16px] font-bold">FUNDINGOPTIMAL</p>
                  <p className="text-[10px] -mt-1 font-semibold text-gray-400">
                    We Fund the Fearless
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-6">
                <Link
                  href="#"
                  className="relative w-8 h-8 bg-white/5 backdrop-blur-sm  hover:border-primary/50 rounded-lg flex items-center justify-center transition-all duration-500 group hover:scale-110 hover:rotate-3 hover:shadow-lg hover:shadow-primary/25"
                  aria-label="Discord"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-500 relative z-10 group-hover:drop-shadow-lg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
                  </svg>
                </Link>

                <Link
                  href="https://www.instagram.com/fundingoptimal/"
                  target="_blank"
                  className="relative w-8 h-8 bg-white/5 backdrop-blur-sm hover:border-primary/50 rounded-lg flex items-center justify-center transition-all duration-500 group hover:scale-110 hover:-rotate-3 hover:shadow-lg hover:shadow-primary/25"
                  aria-label="Instagram"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-500 relative z-10 group-hover:drop-shadow-lg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>

                <Link
                  href="#"
                  className="relative w-8 h-8 bg-white/5 backdrop-blur-sm hover:border-primary/50 rounded-lg flex items-center justify-center transition-all duration-500 group hover:scale-110 hover:rotate-3 hover:shadow-lg hover:shadow-primary/25"
                  aria-label="YouTube"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-red-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-500 relative z-10 group-hover:drop-shadow-lg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>

                <Link
                  href="#"
                  className="relative w-8 h-8 bg-white/5 backdrop-blur-sm hover:border-primary/50 rounded-lg flex items-center justify-center transition-all duration-500 group hover:scale-110 hover:-rotate-3 hover:shadow-lg hover:shadow-primary/25"
                  aria-label="Twitter"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-blue-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-500 relative z-10 group-hover:drop-shadow-lg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              <div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/become-a-partner"
                      className="text-[#a7a7a7] hover:text-primary transition-colors duration-300 text-sm relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                      Partners Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-conditions"
                      className="text-[#a7a7a7] hover:text-primary transition-colors duration-300 text-sm  relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-[#a7a7a7] hover:text-primary transition-colors duration-300 text-sm  relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/refund-policy"
                      className="text-[#a7a7a7] hover:text-primary transition-colors duration-300 text-sm  relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className="text-[#a7a7a7] hover:text-primary transition-colors duration-300 text-sm  relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-of-use"
                      className="text-[#a7a7a7] hover:text-primary transition-colors duration-300 text-sm  relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                      Terms of use
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/contact-us"
                      className="text-[#a7a7a7] hover:text-primary transition-colors duration-300 text-sm relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className=" sm:gap-0 max-w-7xl mx-auto relative before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <p className="text-white text-[16px] font-semibold">
                  © FundingOptimal, {year} All Rights Reserved
                </p>
                <Link href="https://propfirmstech.com/" target="_blank">
                  <div className="flex items-center gap-3 bg-primary/10 px-4 py-2 border border-primary/40 rounded-lg flex-shrink-0">
                    <span className="text-white text-[16px] whitespace-nowrap">
                      Proudly Powered By
                    </span>
                    <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        <Image
                          src={logo2}
                          alt="Propfirm"
                          width={40}
                          height={40}
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="mt-8">
                <button
                  onClick={toggleDisclaimer}
                  className="flex items-center justify-between w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-white font-semibold text-[16px]">
                      Legal Disclaimers & Risk Warnings
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${
                      isDisclaimerOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`grid grid-cols-1 gap-4 transition-all duration-500 ease-in-out overflow-hidden ${
                    isDisclaimerOpen
                      ? 'mt-4 opacity-100 max-h-[2000px]'
                      : 'mt-0 opacity-0 max-h-0'
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                    <h4 className="font-semibold text-[15px] mb-3 text-primary">
                      Simulation & Demo Environment
                    </h4>
                    <p className="text-gray-300 text-[13px] leading-relaxed">
                      All trading accounts provided by FundingOptimal are demo
                      accounts operating in a simulated trading environment.
                      These accounts do not involve the use of real capital and
                      are intended solely for evaluation and educational
                      purposes. The trading services are powered and managed by
                      FundingOptimal and are not connected to any live market
                      trading infrastructure or brokerage execution.
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                    <h4 className="font-semibold text-[15px] mb-3 text-primary">
                      General Information Notice
                    </h4>
                    <p className="text-gray-300 text-[13px] leading-relaxed">
                      All content published or distributed by FundingOptimal and
                      its affiliates (collectively, &quot;the Company&quot;) is
                      provided for general informational purposes only. None of
                      the information on this website or within any of our
                      services constitutes investment advice, a recommendation,
                      a solicitation, or an offer to buy or sell any financial
                      instrument or participate in any investment strategy.
                      <br />
                      <br />
                      FundingOptimal does not act as a broker, custodian, or
                      financial advisor, nor do we manage client funds. Any
                      decisions made based on the information we provide are at
                      the sole discretion of the participant.
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                    <h4 className="font-semibold text-[15px] mb-3 text-primary">
                      Challenge Structure and Fee Use
                    </h4>
                    <p className="text-gray-300 text-[13px] leading-relaxed">
                      Enrollment in any challenge or program is voluntary. Fees
                      paid to participate in our programs are not deposits and
                      are non-refundable, as they are used to cover operational
                      costs such as technology, platform development,
                      infrastructure, etc. Participation in a program does not
                      represent an investment and should not be treated as such.
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                    <h4 className="font-semibold text-[15px] mb-3 text-primary">
                      Educational Purpose
                    </h4>
                    <p className="text-gray-300 text-[13px] leading-relaxed">
                      All programs offered by FundingOptimal are intended for
                      training, skill evaluation, and educational purposes only.
                      Our services are not a financial product offering and
                      should not be construed as a means of generating
                      investment returns. Traders are evaluated based on
                      simulated performance and risk management adherence.
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                    <h4 className="font-semibold text-[15px] mb-3 text-primary">
                      Risk Disclosure
                    </h4>
                    <p className="text-gray-300 text-[13px] leading-relaxed">
                      Trading foreign exchange (forex), contracts for difference
                      (CFDs), and other derivatives involves a high degree of
                      risk. The use of leverage can magnify gains, but also
                      significantly increases the potential for loss. You should
                      not engage in trading unless you fully understand the
                      risks involved and can afford to lose the capital used.
                      Past performance is not indicative of future results.
                      <br />
                      <br />
                      FundingOptimal strongly recommends consulting with a
                      licensed financial advisor to assess your financial
                      situation and risk tolerance before engaging in any
                      trading activity, whether simulated or real.
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                    <h4 className="font-semibold text-[15px] mb-3 text-primary">
                      Applicable Law
                    </h4>
                    <p className="text-gray-300 text-[13px] leading-relaxed">
                      All legal matters and contractual relationships are
                      governed by and construed in accordance with the laws of
                      the United Arab Emirates (UAE).
                      <br />
                      <br />
                      ©2025 FundingOptimal.com. All Rights Reserved. Registered
                      in the United Arab Emirates (UAE).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
