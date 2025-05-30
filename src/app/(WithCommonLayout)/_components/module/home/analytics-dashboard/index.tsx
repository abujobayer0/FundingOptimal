'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../../../ui';
import logo from '@/assets/fundingoptimal-logo.png';
import { DashboardProps, SidebarItemProps } from './types';
import {
  ActionCards,
  defaultChartData,
  defaultMenuItems,
  defaultMetrics,
} from './data';

import {
  MetricCard,
  Sidebar,
  DashboardHeader,
  OverviewChart,
  WinRateGauge,
  ActionCard,
} from './components';
import { Menu, X, ArrowRight } from 'lucide-react';
import { OutlineButton } from '@/components/ui/button';

const AnalyticsDashboard: React.FC<DashboardProps> = ({
  title = 'Fundingoptimal {Analytics Dashboard}',
  badge = 'Our Dashboard',
  description = 'Learn and grow together in a community of experienced and aspiring traders alike.',
  chartData = defaultChartData,
}) => {
  const [activeTab, setActiveTab] = useState('Current Equity');
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleMenuItemClick = (item: SidebarItemProps) => {
    setActiveMenuItem(item.label);
    setIsMobileSidebarOpen(false);
  };

  const menuItems = defaultMenuItems.map((item) => ({
    ...item,
    active: item.label === activeMenuItem,
  }));

  return (
    <motion.div
      className="max-w-7xl h-full mx-auto bg-[#000] text-white px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1/2 h-[100px] bg-primary/30 rounded-full blur-[100px]"></div>
        <SectionHeader
          badge={badge}
          title={title}
          description={description}
          className="items-center text-center sm:text-left"
        />
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row gap-4 bg-black rounded-xl border-2 border-primary p-2 sm:p-4 relative"
        style={{
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="lg:hidden flex justify-between items-center p-4 border border-white/10 rounded-xl bg-black mb-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="flex items-center space-x-3">
            <img src={logo.src} alt="Logo" className="w-8 h-8" />
            <span className="text-white font-semibold">Dashboard</span>
          </div>
          <motion.button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileSidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </motion.button>
        </motion.div>

        {/* Mobile Sidebar Overlay */}
        {isMobileSidebarOpen && (
          <motion.div
            className="lg:hidden absolute top-0 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm z-50 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileSidebarOpen(false)}
          >
            <motion.div
              className="absolute left-0 top-0 h-full w-80 max-w-[80%] bg-black border-r border-white/10 p-4 rounded-l-xl"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Sidebar
                logoSrc={logo}
                menuItems={menuItems}
                onMenuItemClick={handleMenuItemClick}
              />
            </motion.div>
          </motion.div>
        )}

        {/* Desktop Sidebar */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Sidebar
            logoSrc={logo}
            menuItems={menuItems}
            onMenuItemClick={handleMenuItemClick}
          />
        </motion.div>

        <motion.div
          className="flex-1 p-3 sm:p-6 border border-white/10 rounded-xl bg-black"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <DashboardHeader
            title="Dashboard"
            subtitle="You can see your dashboard information from here."
          />

          <motion.div
            className="flex flex-col sm:flex-row mb-4 items-start sm:items-center justify-between gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-2">
              {['Current Equity', 'Check Limits', 'Profit Summary'].map(
                (tab, index) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 overflow-hidden group ${
                      activeTab === tab
                        ? 'bg-primary text-black shadow-lg shadow-primary/25'
                        : 'text-gray-400 bg-white/5 backdrop-blur-sm border border-white/10 hover:text-white hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/10'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                    <span className="relative text-[10px] sm:text-[12px] z-10 whitespace-nowrap">
                      {tab}
                    </span>
                  </motion.button>
                )
              )}
            </div>
            <motion.div
              className="w-full sm:w-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <div className="flex items-center justify-center sm:justify-start space-x-2 bg-primary px-3 py-2 rounded-lg">
                <span className="text-black text-sm font-medium">Live</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {defaultMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <MetricCard
                  index={index}
                  length={defaultMetrics.length}
                  title={metric.title}
                  value={metric.value}
                  icon={metric.icon}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 xl:grid-cols-3 gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="xl:col-span-2"
            >
              <OverviewChart data={chartData} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <WinRateGauge percentage={74} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        {ActionCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <ActionCard
              title={card.title}
              description={card.description}
              icon={card.icon}
              color={card.color}
            />
          </motion.div>
        ))}
      </motion.div>
      <OutlineButton className="my-8 mx-auto border border-primary">
        Get Funded Now
      </OutlineButton>
    </motion.div>
  );
};

export default AnalyticsDashboard;
