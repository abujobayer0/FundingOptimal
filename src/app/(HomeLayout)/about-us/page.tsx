'use client';

import React from 'react';
import {
  HeroSection,
  MissionSection,
  VisionSection,
  FeaturesSection,
  AffiliateProgramSection,
  SectionWrapper,
} from './_components';

const AboutUsPage = () => {
  return (
    <div className="mx-auto">
      <SectionWrapper className="mt-[80px] md:mt-[100px]">
        <HeroSection />
      </SectionWrapper>

      <SectionWrapper>
        <MissionSection />
      </SectionWrapper>

      <SectionWrapper>
        <VisionSection />
      </SectionWrapper>

      <SectionWrapper fullWidth containerized={false}>
        <FeaturesSection />
      </SectionWrapper>

      <SectionWrapper fullWidth containerized={false}>
        <AffiliateProgramSection />
      </SectionWrapper>
    </div>
  );
};

export default AboutUsPage;
