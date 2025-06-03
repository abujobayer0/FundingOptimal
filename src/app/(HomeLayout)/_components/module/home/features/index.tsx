"use client";
import React from "react";
import { motion } from "motion/react";
import { SectionHeader } from "../../..";
import {
  OnDemandPayouts,
  StartingCapital,
  PerformanceSplit,
  TailoredProgram,
  MonthlyCompitition,
  AccessToTrading,
} from "../../../ui/icons";

const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="bg-gradient-to-b from-primary/30 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="bg-gradient-to-r from-primary/40 via-primary to-primary/40 h-[3px]" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6 md:pt-0 bg-transparent text-white">
          <SectionHeader
            title="Features of {FundingOptimal}"
            description="Experience the FundingOptimal Advantage - on-demand payouts, flexible funding, and
            tailored programs built to elevate your trading performance."
            badge="Features"
            className="items-center mt-0"
          />
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 md:px-6 pb-16 -mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          className="group relative w-full h-[309px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ transition: { duration: 0.2 } }}
        >
          <div className="absolute -top-3  h-[319px] left-0 w-full transition-opacity duration-300">
            <OnDemandPayouts />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#D4F7F10D] via-[#D4F7F100] to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end p-4">
            <motion.div
              className="space-y-3 transform group-hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                On-Demand Payouts
              </h3>
              <p className="text-[#a7a7a7] text-[14px] group-hover:text-white transition-colors duration-300">
                Get your first payout whenever you want. Close your first live
                trade, request your payout and receive it instantly.
              </p>
            </motion.div>
            <div className="absolute bottom-2 left-6 w-10 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
        </motion.div>

        {/* Starting Capital */}
        <motion.div
          className="group relative w-full h-[309px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ transition: { duration: 0.2 } }}
        >
          <div className="absolute top-0 left-0 w-full  transition-opacity duration-300 object-cover object-top-left">
            <StartingCapital />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#D4F7F10D] via-[#D4F7F100] to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-end p-4">
            <motion.div
              className="space-y-3 transform group-hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                Starting Capital
              </h3>
              <p className="text-[#a7a7a7] text-[14px] group-hover:text-white transition-colors duration-300">
                Begin your trading journey with substantial funding. We provide
                the capital you need to trade at professional scale.
              </p>
            </motion.div>
            <div className="absolute bottom-2 left-6 w-10 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
        </motion.div>

        <motion.div
          className="group relative w-full h-[309px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ transition: { duration: 0.2 } }}
        >
          <div className="absolute top-0 left-0 w-full transition-opacity duration-300 object-cover">
            <PerformanceSplit />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#D4F7F10D] via-[#D4F7F100] to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end p-4">
            <motion.div
              className="space-y-3 transform group-hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                Performance Split
              </h3>
              <p className="text-[#a7a7a7] text-[14px] group-hover:text-white transition-colors duration-300">
                Keep up to 90% of your profits. Our transparent profit-sharing
                model rewards your trading success generously.
              </p>
            </motion.div>
            <div className="absolute bottom-2 left-6 w-10 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
        </motion.div>

        <motion.div
          className="group relative w-full h-[309px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ transition: { duration: 0.2 } }}
        >
          <div className="absolute top-0 left-0 w-full transition-opacity duration-300 object-cover">
            <TailoredProgram />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#D4F7F10D] via-[#D4F7F100] to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end p-4">
            <motion.div
              className="space-y-3 transform group-hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                Tailored Program
              </h3>
              <p className="text-[#a7a7a7] text-[14px] group-hover:text-white transition-colors duration-300">
                Choose from multiple program options designed to match your
                trading style and experience level perfectly.
              </p>
            </motion.div>
            <div className="absolute bottom-2 left-6 w-10 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
        </motion.div>

        <motion.div
          className="group relative w-full h-[309px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ transition: { duration: 0.2 } }}
        >
          <div className="absolute top-0 left-0 w-full transition-opacity duration-300 object-cover">
            <MonthlyCompitition />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#D4F7F10D] via-[#D4F7F100] to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-end p-4">
            <motion.div
              className="space-y-3 transform group-hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                Monthly Competition
              </h3>
              <p className="text-[#a7a7a7] text-[14px] group-hover:text-white transition-colors duration-300">
                Compete with other traders in exciting monthly challenges and
                win additional rewards and recognition.
              </p>
            </motion.div>
            <div className="absolute bottom-2 left-6 w-10 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
        </motion.div>

        <motion.div
          className="group relative w-full h-[309px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ transition: { duration: 0.2 } }}
        >
          <div className="absolute top-0 left-0 w-full transition-opacity duration-300 object-cover">
            <AccessToTrading />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#D4F7F10D] via-[#D4F7F100] to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-end p-4">
            <motion.div
              className="space-y-3 transform group-hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                Access To Trading
              </h3>
              <p className="text-[#a7a7a7] text-[14px] group-hover:text-white transition-colors duration-300">
                Trade multiple asset classes including forex, indices,
                commodities, and cryptocurrencies on professional platforms.
              </p>
            </motion.div>
            <div className="absolute bottom-2 left-6 w-10 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Features;
