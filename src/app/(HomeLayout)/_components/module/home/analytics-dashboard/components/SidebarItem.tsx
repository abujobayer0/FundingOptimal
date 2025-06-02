import React from 'react';
import { motion } from 'motion/react';
import { SidebarItemProps } from '../types';

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active = false,
  onClick,
}) => (
  <motion.div
    style={{
      boxShadow: active
        ? 'rgba(18, 255, 142, 0.9) 0px 0px 20px 0px inset, rgba(18, 255, 142, 0.1) 0px 0px 30px 0px inset, rgba(18, 255, 142, 0.1) 0px 0px 40px 0px inset'
        : 'none',
    }}
    className={`flex items-center space-x-3 px-4 py-1 rounded-lg cursor-pointer transition-colors ${
      active
        ? 'bg-primary/20 text-primary'
        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.02, x: 4 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.2 }}
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: active ? 0 : 5 }}
      transition={{ duration: 0.2 }}
    >
      <Icon className="w-3 h-3" />
    </motion.div>
    <span className="text-sm font-medium">{label}</span>
  </motion.div>
);

export default SidebarItem;
