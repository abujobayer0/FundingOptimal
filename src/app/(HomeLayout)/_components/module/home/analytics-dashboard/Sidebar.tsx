import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Settings } from 'lucide-react';
import { SidebarProps } from '@/types';
import SidebarItem from './SidebarItem';

const Sidebar: React.FC<SidebarProps> = ({
  logoSrc,
  companyName = 'FUNDINGOPTIMAL',
  tagline = 'We Fund the Fearless',
  menuItems,
  onMenuItemClick,
}) => (
  <motion.div
    className="w-64 bg-black border border-white/10 rounded-xl"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="p-6 flex flex-col justify-start items-start">
      <motion.div
        className="flex-shrink-0 flex flex-col items-center gap-1"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={logoSrc} alt={companyName} width={30} height={30} />
        </motion.div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[8.7px] font-semibold">{companyName}</p>
          <p className="text-[5px] text-gray-400">{tagline}</p>
        </div>
      </motion.div>

      <motion.nav
        className="space-y-1 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
          >
            <SidebarItem {...item} onClick={() => onMenuItemClick?.(item)} />
          </motion.div>
        ))}
      </motion.nav>

      <motion.div
        className="mt-4 pt-2 border-t w-full border-white/10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <SidebarItem
          icon={Settings}
          label="Settings"
          onClick={() =>
            onMenuItemClick?.({ icon: Settings, label: 'Settings' })
          }
        />
      </motion.div>
    </div>
  </motion.div>
);

export default Sidebar;
