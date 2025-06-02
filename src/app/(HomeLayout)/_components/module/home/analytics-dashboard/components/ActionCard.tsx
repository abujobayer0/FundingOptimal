import React from 'react';
import { motion } from 'motion/react';
import { ActionCardProps } from '../types';

const ActionCard: React.FC<ActionCardProps> = ({
  title,
  description,
  icon: Icon,
  color = 'primary',
}) => (
  <motion.div
    className="relative bg-gradient-to-t from-primary/30 via-primary/10 to-transparent border border-primary rounded-lg p-6 hover:border-primary/50 transition-all duration-500 cursor-pointer group overflow-hidden hover:shadow-lg hover:shadow-primary/20"
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.3 }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>

    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

    <div className="relative z-10">
      <div className="flex items-center space-x-3 mb-3">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          <Icon
            className={`w-5 h-5 text-${color} group-hover:scale-110 transition-transform duration-300`}
          />
        </motion.div>
        <motion.h3
          className="text-white font-semibold"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </motion.h3>
      </div>
      <motion.p
        className="text-[#a7a7a7] text-sm leading-[30px]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </div>
  </motion.div>
);

export default ActionCard;
