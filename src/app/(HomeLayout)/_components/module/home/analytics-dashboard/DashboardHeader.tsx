import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { DashboardHeaderProps } from '@/types';

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  subtitle,
  showAccountSelector = true,
  showAccountStatus = true,
}) => (
  <motion.div
    className="flex items-center justify-between mb-6"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-gray-400 text-sm">{subtitle}</p>
    </motion.div>
    <motion.div
      className="flex items-center space-x-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {showAccountSelector && (
        <motion.div
          className="flex bg-white/5 border border-white/10 rounded-lg py-2 px-4 justify-between items-center space-x-4"
          whileHover={{
            scale: 1.02,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-[12px] text-gray-400">Select account</span>
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </motion.div>
        </motion.div>
      )}
      {showAccountStatus && (
        <motion.div
          className="flex bg-white/5 border border-white/10 rounded-lg py-2 px-4 justify-between items-center space-x-4"
          whileHover={{
            scale: 1.02,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-[12px] text-gray-400">Account Status</span>
        </motion.div>
      )}
    </motion.div>
  </motion.div>
);

export default DashboardHeader;
