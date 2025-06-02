import {
  Calendar,
  TrendingUp,
  Shield,
  RefreshCw,
  Newspaper,
  Clock,
  Zap,
  Bot,
  Briefcase,
  Monitor,
  Target,
  AlertTriangle,
  BarChart3,
  CheckCircle,
} from 'lucide-react';

const getFeatureIcon = (label: string, value?: string) => {
  const normalizedLabel = label.toLowerCase();

  if (
    normalizedLabel.includes('trading days') ||
    normalizedLabel.includes('minimum trading')
  ) {
    return <Calendar className="w-4 h-4 text-primary/80" />;
  }
  if (
    normalizedLabel.includes('profit target') ||
    (normalizedLabel.includes('stage') && normalizedLabel.includes('target'))
  ) {
    return <Target className="w-4 h-4 text-primary/80" />;
  }
  if (
    normalizedLabel.includes('profit split') ||
    normalizedLabel.includes('performance split')
  ) {
    return <TrendingUp className="w-4 h-4 text-primary/80" />;
  }
  if (
    normalizedLabel.includes('daily loss') ||
    normalizedLabel.includes('maximum loss') ||
    normalizedLabel.includes('total loss')
  ) {
    return <AlertTriangle className="w-4 h-4 text-red-400/80" />;
  }
  if (normalizedLabel.includes('drawdown')) {
    return <Shield className="w-4 h-4 text-primary/80" />;
  }
  if (
    normalizedLabel.includes('leverage') ||
    normalizedLabel.includes('trading leverage')
  ) {
    return <Zap className="w-4 h-4 text-primary/80" />;
  }
  if (normalizedLabel.includes('consistency')) {
    return <BarChart3 className="w-4 h-4 text-primary/80" />;
  }
  if (normalizedLabel.includes('challenge type')) {
    return <CheckCircle className="w-4 h-4 text-primary/80" />;
  }
  if (normalizedLabel.includes('refund')) {
    return <RefreshCw className="w-4 h-4 text-primary/80" />;
  }
  if (normalizedLabel.includes('news')) {
    return <Newspaper className="w-4 h-4 text-primary/80" />;
  }
  if (normalizedLabel.includes('eas') || normalizedLabel.includes('ea')) {
    return <Bot className="w-4 h-4 text-primary/80" />;
  }
  if (normalizedLabel.includes('weekend')) {
    return <Briefcase className="w-4 h-4 text-primary/80" />;
  }
  if (normalizedLabel.includes('platform')) {
    return <Monitor className="w-4 h-4 text-primary/80" />;
  }
  if (normalizedLabel.includes('payout') || value === '✓') {
    return <CheckCircle className="w-4 h-4 text-green-400/80" />;
  }

  // Default icon
  return <Clock className="w-4 h-4 text-primary/80" />;
};

export default function FeatureRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-2 justify-between text-gray-100">
        <div className="w-5">{getFeatureIcon(label, value)}</div>
        <span className="text-sm text-gray-400/80">{label}</span>
      </div>
      <span className="text-gray-300 text-sm font-medium">{value}</span>
    </div>
  );
}
