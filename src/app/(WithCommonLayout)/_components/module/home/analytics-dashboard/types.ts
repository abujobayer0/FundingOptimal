import { LucideIcon } from 'lucide-react';
import { StaticImageData } from 'next/image';

export interface MetricCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  className?: string;
  length: number;
  index: number;
}

export interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface ActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
}

export interface WinRateGaugeProps {
  percentage?: number;
  title?: string;
}

export interface ChartDataPoint {
  month: string;
  equity: number;
  balance: number;
}

export interface DashboardProps {
  title?: string;
  badge?: string;
  description?: string;
  chartData?: ChartDataPoint[];
  showActionCards?: boolean;
  showGetFundedButton?: boolean;
}

export interface SidebarProps {
  logoSrc: string | StaticImageData;
  companyName?: string;
  tagline?: string;
  menuItems: SidebarItemProps[];
  onMenuItemClick?: (item: SidebarItemProps) => void;
}

export interface DashboardHeaderProps {
  title: string;
  subtitle: string;
  showAccountSelector?: boolean;
  showAccountStatus?: boolean;
}
