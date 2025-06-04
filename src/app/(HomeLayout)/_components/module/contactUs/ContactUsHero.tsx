'use client';

import React from 'react';
import { GradientButton, OutlineButton } from '@/components';
import { TitleWithIcon } from '../../ui';
import ContactForm from './ContactForm';

const ContactUsHero = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto mt-[80px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 md:space-y-8">
            <TitleWithIcon className="justify-start" title="Contact Us" />

            <div className="space-y-0 md:space-y-7 lg:space-y-10">
              <h1 className="text-2xl md:text-3xl lg:text-[38px] xl:text-[44px] font-bold leading-[70px]">
                Fill Out the form
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-[70px] font-bold text-primary">
                And Start Today
              </h2>
            </div>

            <p className="text-gray-400 text-sm md:text-[16px] leading-[24px] md:leading-[38px] max-w-lg">
              Before reaching out, please check our FAQ section for quick
              answers to common questions. If you can't find what you're looking
              for, we're here to help via email.
            </p>
          </div>

          <div className="flex lg:justify-end w-full">
            <ContactForm />
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

export default ContactUsHero;
