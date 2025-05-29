"use client";

import React from "react";
import { motion } from "framer-motion";

interface ReferTierCardProps {
  refer: number;
  points: string;
  description: string;
  index: number;
}

export const ReferTierCard: React.FC<ReferTierCardProps> = ({
  points,
  description,
  index,
  refer,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
      className={`h-fit border ${
        index === 1 ? "border-primary" : "border-primary/0"
      } rounded-md p-8 relative overflow-hidden group hover:border-primary/60 transition-all duration-300 bg-gradient-to-br from-primary/20 via-primary/0 to-transparent group`}
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Green badge at top */}
        <div className="mb-8">
          <span className="bg-primary text-black text-sm font-medium px-4 py-2 rounded-full">
            Refer {refer} people
          </span>
        </div>

        {/* Large points display */}
        <div className="text-start mb-6">
          <div className="text-3xl lg:text-[54px] font-bold text-white mb-2">
            {points}
          </div>
          <div className="text-gray-300 text-[16px] font-medium pt-2">
            Challenge Account
          </div>
        </div>

        <div className="bg-gradient-to-r from-transparent via-primary to-transparent h-[2px] my-5">
          {/* Content here */}
        </div>

        {/* Description */}
        <div className="text-gray-400 text-sm leading-relaxed">
          {description}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/5 rounded-full blur-lg"></div>
    </motion.div>
  );
};

const DefaultReferTierCard = ReferTierCard;
export default DefaultReferTierCard;
