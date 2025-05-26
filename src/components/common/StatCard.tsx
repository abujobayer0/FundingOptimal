import React from 'react';
import { ArrowUp, LucideIcon } from 'lucide-react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  gradientDirection?: 'bl' | 'br';
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  gradientDirection = 'bl',
  suffix = '',
  prefix = '',
  duration = 2,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const count = useSpring(0, {
    duration,
    stiffness: 50,
    damping: 20,
  });

  React.useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value, count]);

  const rounded = useTransform(count, (latest) => Math.round(latest));

  const gradientClass =
    gradientDirection === 'bl'
      ? 'bg-gradient-to-br from-primary/25 via-primary/10 to-primary/0'
      : 'bg-gradient-to-bl from-primary/25 via-primary/10 to-primary/0';

  return (
    <div
      ref={ref}
      className={`${gradientClass} backdrop-blur-md border justify-center p-4 border-gray-800 rounded-2xl w-full md:w-[221px] h-[240px] shadow-2xl`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 bg-white/10 rounded-full">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="text-sm text-white">{title}</div>
      <div className="text-[38px] md:text-[48px] font-bold text-white">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <div className="flex items-center">
        <div>
          <ArrowUp className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
