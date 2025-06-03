import React from 'react';
import {
  AffiliatePartnerFAQs,
  ContactInfo,
  ContactUsHero,
  WorldwideSection,
} from '../_components/module';
import { SectionWrapper } from '../_components';

export default function ContactUsPage() {
  return (
    <div className="mx-auto">
      <SectionWrapper>
        <ContactUsHero />
      </SectionWrapper>

      <SectionWrapper fullWidth containerized={false}>
        <ContactInfo />
      </SectionWrapper>

      <SectionWrapper>
        <WorldwideSection />
      </SectionWrapper>

      <SectionWrapper>
        <AffiliatePartnerFAQs />
      </SectionWrapper>
    </div>
  );
}
