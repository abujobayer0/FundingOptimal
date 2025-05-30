"use client";

import React from "react";
import TradingStepsCard from "./TradingStepsCard";
import { amounts, steps } from "./data";
import { motion } from "motion/react";

// Removed unused types Step and StepDetailsMap

export default function TradingStepsUI() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex flex-col items-center pt-0 md:pt-16 pb-16 md:pb-0 max-w-7xl px-4 md:px-6 mx-auto"
    >
      {/* Step Navigation */}
      <motion.div
        className="flex flex-col md:flex-row gap-8 mb-8 w-full md:w-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {steps.map((step, idx) => (
          <motion.div
            key={step.label}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            style={{
              boxShadow: `
    rgba(18, 255, 142, 0.1) 0px 0px 20px 0px inset,
    rgba(18, 255, 142, 0.08) 0px 0px 30px 0px inset,
    rgba(18, 255, 142, 0.06) 0px 0px 30px 0px inset,
    rgba(18, 255, 142, 0.04) 0px 0px 40px 0px inset
  `,
            }}
            className={`flex flex-row px-8 py-2.5 gap-4 rounded-xl items-center cursor-pointer w-full md:w-auto`}
          >
            <div
              className={`size-10 flex items-center justify-center rounded-xl font-semibold text-lg border-2 transition-all
              bg-primary/5 border-primary/10`}
            >
              <span>{idx + 1}</span>
            </div>
            <span className={`text-lg text-white font-normal`}>
              {step.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
      {/* Progress Bar */}
      <motion.div
        className="flex flex-row overflow-x-auto items-center w-full max-w-3xl mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {amounts.map((amt, idx) => (
          <React.Fragment key={amt.label}>
            <div className="flex flex-col items-center">
              <div
                className={`size-5 rounded-full flex items-center justify-center border mb-1 p-[2px]  ${
                  amt.active ? "border-primary" : "border-gray-600/50"
                }
               `}
              >
                <span
                  className={`size-3 rounded-full ${
                    amt.active ? "bg-primary" : ""
                  }`}
                ></span>
              </div>
              <span
                className={`text-sm mt-0.5 ${
                  amt.active ? "text-primary" : "text-gray-400"
                }`}
              >
                {amt.label}
              </span>
            </div>
            {idx < amounts.length - 1 && (
              <div className="flex-1 h-[2px] bg-gray-100/30 mx-7" />
            )}
          </React.Fragment>
        ))}
      </motion.div>
      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <TradingStepsCard className="bg-gradient-to-br from-primary/15 via-primary/1 to-primary/1" />
        <TradingStepsCard className="bg-gradient-to-bl from-primary/15 via-primary/1 to-primary/1" />
      </motion.div>
    </motion.div>
  );
}
