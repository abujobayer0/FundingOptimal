"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import logo from "@/assets/fundingoptimal-logo.png";

interface TTitleWithLogoProps {
  title: string;
  className?: string;
}

export default function TitleWithLogo({
  title = "We Fund the Fearless",
  className = "justify-center",
}: TTitleWithLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`relative z-10 flex  pt-6 md:pt-0 md:py-6 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg relative before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparent after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-gradient-to-r after:from-transparent after:via-primary after:to-transparent"
      >
        <motion.div
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-[rgba(18, 255, 142, 0.05)] w-8 h-8 border-2 border-white/25 flex items-center p-2 justify-center rounded-lg"
        >
          <Image src={logo} width={30} height={30} alt="logo" />
        </motion.div>
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[14px] text-gray-300"
        >
          {title}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
