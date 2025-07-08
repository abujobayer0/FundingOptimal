'use client';

import React from 'react';
import { TitleWithIcon } from '@/app/(HomeLayout)/_components/ui';
import { GradientButton, OutlineButton } from '@/components';
import HeroIcon from '../../ui/icons/HeroIcon';
import { useRouter } from 'next/navigation';

const AffiliateProgramHero = () => {
  const router = useRouter();
  return (
    <div className="bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-[80px] md:mt-[170px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 md:space-y-8">
            <TitleWithIcon
              className="justify-start"
              title="Affiliate Program"
            />

            <div className="space-y-0 md:space-y-7 lg:space-y-10">
              <h1 className="text-2xl md:text-3xl lg:text-[38px] xl:text-[44px] font-bold leading-[70px]">
                Join The FundingOptimal™
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-[70px] font-bold text-primary">
                Affiliate Program
              </h2>
            </div>

            <p className="text-gray-400 text-sm md:text-[16px] leading-[24px] md:leading-[38px] max-w-lg">
              FundingOptimal has the most competitive Affiliate Sales program in
              the prop-trading industry, offering a great opportunity for those
              who want to help their network gain access to trading capital and
              earn a healthy commission.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 space-y-2 pt-2 md:space-y-0">
              <GradientButton
                onClick={() =>
                  window.open(
                    'https://checkout.fundingoptimal.com/index.php/affiliate-area/',
                    '_blank'
                  )
                }
                showIcon
              >
                Become A Partner
              </GradientButton>
              <OutlineButton
                onClick={() => router.push('/#get-funded')}
                showIcon
              >
                Get Funded
              </OutlineButton>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div
              className="animate-pulse w-full"
              style={{
                animation: 'float 3s ease-in-out infinite',
              }}
            >
              <HeroIcon />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default AffiliateProgramHero;
