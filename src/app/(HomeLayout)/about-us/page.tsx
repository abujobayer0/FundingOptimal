"use client";

import React from "react";
import {
  HeroSection,
  MissionSection,
  VisionSection,
  FeaturesSection,
  AffiliateProgramSection,
} from "../_components/module/aboutUs";
import { SectionWrapper } from "../_components";

const AboutUsPage = () => {
  return (
    <div className="mx-auto">
      <SectionWrapper>
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
