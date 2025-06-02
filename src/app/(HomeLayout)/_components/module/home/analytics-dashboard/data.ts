import {
  BarChart3,
  Activity,
  TrendingUp,
  Users,
  Award,
  Gift,
  FileText,
  DollarSign,
  Settings,
  Download,
  UserPlus,
  HeadphonesIcon,
  AlertTriangle,
  Shield,
  ChartNoAxesCombined,
  WalletMinimal,
  FolderCog,
} from 'lucide-react';
import { SidebarItemProps, ActionCardProps } from './types';

export const defaultChartData = [
  { month: 'Jan', equity: 1000, balance: 1500, label: 'Jan 2025' },
  { month: 'Feb', equity: 1550, balance: 1280, label: 'Feb 2025' },
  { month: 'Mar', equity: 1400, balance: 1450, label: 'Mar 2025' },
  { month: 'Apr', equity: 1300, balance: 2000, label: 'Apr 2025' },
  { month: 'May', equity: 1450, balance: 1520, label: 'May 2025' },
  { month: 'Jun', equity: 2200, balance: 1080, label: 'Jun 2025' },
  { month: 'Jul', equity: 1050, balance: 2050, label: 'Jul 2025' },
  { month: 'Aug', equity: 1800, balance: 1720, label: 'Aug 2025' },
  { month: 'Sep', equity: 1200, balance: 1680, label: 'Sep 2025' },
  { month: 'Oct', equity: 1580, balance: 1750, label: 'Oct 2025' },
  { month: 'Nov', equity: 1620, balance: 1850, label: 'Nov 2025' },
  { month: 'Dec', equity: 1700, balance: 1900, label: 'Dec 2025' },
];
export const ActionCards: ActionCardProps[] = [
  {
    title: 'Account Setup',
    description:
      'All technology and account setup done by us. No more documentation and painful account setup.',
    icon: FolderCog,
    color: 'primary',
  },
  {
    title: 'Capital',
    description:
      'Simply put, most traders are undercapitalized. Level the playing field by using our accounts.',
    icon: DollarSign,
    color: 'primary',
  },
  {
    title: 'Withdraw Profit',
    description:
      'Trading your own funds can lead to severe losses, however with Take Profit Trader your losses.',
    icon: WalletMinimal,
    color: 'primary',
  },
  {
    title: 'Risk of Loss',
    description:
      'Lack of discipline haunts traders. Our risk management system and rules. Select your account now.',
    icon: ChartNoAxesCombined,
    color: 'primary',
  },
];
export const defaultMenuItems: SidebarItemProps[] = [
  { icon: BarChart3, label: 'Dashboard', active: true },
  { icon: Activity, label: 'Trading Account' },
  { icon: TrendingUp, label: 'AXIS Trading' },
  { icon: Users, label: 'Leaderboard' },
  { icon: Award, label: 'Competitions' },
  { icon: Gift, label: 'Affiliate Portal' },
  { icon: FileText, label: 'Certificates' },
  { icon: DollarSign, label: 'Profit & Share' },
  { icon: Settings, label: 'Billing and Accounts' },
  { icon: Download, label: 'Downloads' },
  { icon: UserPlus, label: 'Accounts' },
  { icon: HeadphonesIcon, label: 'Customer Support' },
];

export const defaultActionCards: ActionCardProps[] = [
  {
    title: 'Account Setup',
    description:
      'All technology and account setup done by us. No more documentation and painful account setup.',
    icon: Settings,
    color: 'primary',
  },
  {
    title: 'Capital',
    description:
      'Simply put, most traders are undercapitalized. Level the playing field by using our accounts.',
    icon: DollarSign,
    color: 'primary',
  },
  {
    title: 'Withdraw Profit',
    description:
      'Trading your own funds can lead to severe losses, however with Take Profit Trader your losses.',
    icon: TrendingUp,
    color: 'primary',
  },
  {
    title: 'Risk of Loss',
    description:
      'Lack of discipline haunts traders. Our risk management system and rules. Select your account now.',
    icon: AlertTriangle,
    color: 'primary',
  },
];

export const defaultMetrics = [
  {
    title: 'Live Equity Monitor',
    value: '$104,500',
    icon: TrendingUp,
  },
  {
    title: 'Current Equity',
    value: '$107,300',
    icon: DollarSign,
  },
  {
    title: 'Max Equity Stop Out For The Day',
    value: '$100,000',
    icon: Shield,
  },
];
