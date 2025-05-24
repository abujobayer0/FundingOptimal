'use client';
import React from 'react';
import { ArrowLeftRight, ArrowRight, DollarSign } from 'lucide-react';
import Image from 'next/image';
import StatCard from './StatCard';
import TrustpilotRating from './TrustPilot';

const TradingHero = () => {
  return (
    <div className="min-h-screen bg-[#050505] mt-32 text-white relative overflow-hidden">
      <div className="relative z-10 flex justify-center py-6">
        <div className="flex items-center space-x-2 px-3 py-2 rounded-lg relative before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparent after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-gradient-to-r after:from-transparent after:via-primary after:to-transparent">
          <div className="bg-[rgba(18, 255, 142, 0.05)] w-8 h-8 border-2 border-white/25 flex items-center p-2 justify-center rounded-lg">
            <Image
              src={require('@/assets/fundingoptimal-logo.png')}
              width={30}
              height={30}
              alt="logo"
            />
          </div>
          <span className="text-[14px] text-gray-300">
            We Fund the Fearless
          </span>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 px-6">
        <div className=" mx-auto">
          {/* Top section with cards and main text */}
          <div className="flex justify-between items-start mb-20">
            {/* Left Withdrawal Card */}
            <StatCard
              title="Withdrawal Amount"
              value="30k+"
              icon={ArrowLeftRight}
              gradientDirection="bl"
            />

            {/* Center main text */}
            <div className="text-center flex-1 px-12">
              <h1 className="lg:text-[44px] font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-l from-primary via-primary to-white bg-clip-text text-transparent">
                  You're Not Here To Beat The Market.
                </span>
              </h1>
              <h2 className="text-[44px] font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-l from-primary via-[#12FF8E] to-white bg-clip-text text-transparent">
                  You're Here To Master Yourself Within It.
                </span>
              </h2>

              <p className="text-[16px] text-gray-300 mb-4 mx-auto leading-relaxed">
                Join traders worldwide and become a funded trader with the
                world's most trusted prop firm.
              </p>

              <TrustpilotRating />

              {/* CTA buttons */}
              <div className="flex items-center justify-center space-x-6">
                <button
                  className="px-8 py-4 bg-transparent text-white rounded-lg flex items-center transition-all duration-300 text-lg"
                  style={{
                    boxShadow:
                      'rgba(18, 255, 142, 0.5) 0px 0px 20px 0px inset, rgba(18, 255, 142, 0.5) 0px 0px 30px 0px inset, rgba(18, 255, 142, 0.1) 0px 0px 40px 0px inset',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      'rgba(18, 255, 142, 0.7) 0px 0px 25px 0px inset, rgba(18, 255, 142, 0.6) 0px 0px 35px 0px inset, rgba(18, 255, 142, 0.3) 0px 0px 45px 0px inset';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      'rgba(18, 255, 142, 0.5) 0px 0px 20px 0px inset, rgba(18, 255, 142, 0.5) 0px 0px 30px 0px inset, rgba(18, 255, 142, 0.1) 0px 0px 40px 0px inset';
                  }}
                >
                  Get Funded Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>

                <button className="text-gray-400 px-8 py-4 rounded-xl flex items-center transition-all duration-300 hover:bg-emerald-500/10">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>

            {/* Right Total Earned Card */}
            <StatCard
              title="Total Amount Earned"
              value="44k+"
              icon={DollarSign}
              gradientDirection="br"
            />
          </div>

          <div className="grid grid-cols-4 gap-0 max-w-4xl mx-auto relative before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparent  py-8">
            <div className="text-center relative after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-gradient-to-b after:from-transparent after:via-primary after:to-transparent pr-8">
              <div className="text-5xl font-bold text-white mb-3">350+</div>
              <div className="text-gray-400 text-sm">Traders worldwide</div>
            </div>
            <div className="text-center relative after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-gradient-to-b after:from-transparent after:via-primary after:to-transparent px-8">
              <div className="text-5xl font-bold text-white mb-3">$10k+</div>
              <div className="text-gray-400 text-sm">Total Payouts</div>
            </div>
            <div className="text-center relative after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-gradient-to-b after:from-transparent after:via-primary after:to-transparent px-8">
              <div className="text-5xl font-bold text-white mb-3">44+</div>
              <div className="text-gray-400 text-sm">Countries Covered</div>
            </div>
            <div className="text-center pl-8">
              <div className="text-5xl font-bold text-white mb-3">24/7</div>
              <div className="text-gray-400 text-sm">Staff Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle decorative dots */}
      <div className="absolute top-1/4 left-16 w-1 h-1 bg-emerald-400 rounded-full opacity-40"></div>
      <div className="absolute top-1/3 right-24 w-1.5 h-1.5 bg-emerald-300 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-emerald-500 rounded-full opacity-50"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-emerald-400 rounded-full opacity-25"></div>
    </div>
  );
};

export default TradingHero;
