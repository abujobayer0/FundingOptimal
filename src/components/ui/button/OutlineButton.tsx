"use client";

import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface OutlineButtonProps extends HTMLMotionProps<"button"> {
  children?: ReactNode;
  showIcon?: boolean;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  children = "Learn More",
  className = "",
  showIcon = true,
  ...rest
}) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.7 }}
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.95 }}
      className={`group relative w-full sm:w-auto text-gray-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center justify-center overflow-hidden border border-gray-600/30 hover:border-emerald-400/50 transition-all duration-500 ${className}`}
      {...rest}
    >
      {/* Background hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-xl bg-emerald-400/5 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />

      {/* Glow border */}
      <div className="absolute inset-0 rounded-xl shadow-[0_0_0_1px_rgba(16,185,129,0)] group-hover:shadow-[0_0_0_1px_rgba(16,185,129,0.3),0_0_20px_rgba(16,185,129,0.1)] transition-shadow duration-500" />

      {/* Text */}
      <span className="relative z-10 group-hover:text-emerald-300 transition-colors duration-300">
        {children}
      </span>

      {/* Optional Arrow Icon */}
      {showIcon && (
        <motion.div
          className="relative z-10 ml-2"
          animate={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-emerald-300 transition-colors duration-300" />
        </motion.div>
      )}
    </motion.button>
  );
};

export default OutlineButton;
