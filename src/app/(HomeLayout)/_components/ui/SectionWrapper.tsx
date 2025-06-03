"use client";

import React from "react";
import { motion } from "motion/react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  containerized?: boolean;
  fullWidth?: boolean;
  id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = "",
  containerized = true,
  fullWidth = false,
  id,
}) => {
  const containerClasses =
    containerized && !fullWidth ? "max-w-7xl mx-auto px-4 md:px-6" : "";

  return (
    <motion.section id={id} className={`py-16 md:py-20 ${className}`}>
      <div className={containerClasses}>{children}</div>
    </motion.section>
  );
};
