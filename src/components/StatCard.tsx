import React from 'react';
import { ArrowUp, LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  gradientDirection?: 'bl' | 'br';
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  gradientDirection = 'bl',
}) => {
  const gradientClass =
    gradientDirection === 'bl'
      ? 'bg-gradient-to-br from-primary/25 via-primary/10 to-primary/0'
      : 'bg-gradient-to-bl from-primary/25 via-primary/10 to-primary/0';

  return (
    <div
      className={`${gradientClass} backdrop-blur-md border justify-center p-4 border-gray-800 rounded-3xl w-[221px] h-[240px] shadow-2xl`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 bg-white/10 rounded-full">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="text-sm text-white">{title}</div>
      <div className="text-[48px] font-bold text-white">{value}</div>
      <div className="flex items-center">
        <div>
          <ArrowUp className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
