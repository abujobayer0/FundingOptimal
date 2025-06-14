import React from 'react';
import { motion } from 'motion/react';
import { MetricCardProps } from '@/types';

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon: Icon,
  className = '',
  length,
  index,
}) => {
  const isLastItem = index === length - 1;

  if (isLastItem) {
    return (
      <motion.div
        className={`relative bg-white/5 rounded-lg p-[2px]  ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute top-0 rounded-lg right-0 w-full h-full   bg-gradient-to-bl from-primary/70 via-transparent to-transparent rounded-tr-lg pointer-events-none"></div>
        <div className="absolute bottom-0 rounded-lg left-0 w-full h-full bg-gradient-to-tr from-primary/70 via-transparent to-transparent rounded-bl-lg pointer-events-none"></div>
        <div className="bg-[#050505] rounded-md relative z-10 w-full h-full">
          <div className="relative z-10 bg-primary/5 rounded-md p-3 h-full">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-[12px] font-medium">{title}</h3>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className="w-5 h-5 text-gray-400" />
              </motion.div>
            </div>
            <motion.p
              className="text-white text-xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {value}
            </motion.p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`bg-white/5 border border-white/10 rounded-lg p-4 ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-gray-400 text-[12px] font-medium">{title}</h3>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="w-5 h-5 text-gray-400" />
        </motion.div>
      </div>
      <motion.p
        className="text-white text-xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {value}
      </motion.p>
    </motion.div>
  );
};

export default MetricCard;
