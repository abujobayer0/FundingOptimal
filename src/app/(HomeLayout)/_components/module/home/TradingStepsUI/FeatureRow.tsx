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
} from 'lucide-react';

const getFeatureIcon = (label: string) => {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes('trading days')) {
    return <Calendar className="w-4 h-4 text-primary/80" />;
  }
  if (normalizedLabel.includes('performance split')) {
    return <TrendingUp className="w-4 h-4 text-primary/80" />;
  }
  if (normalizedLabel.includes('drawdown')) {
    return <Shield className="w-4 h-4 text-primary/80" />;
  }
  if (normalizedLabel.includes('refund')) {
    return <RefreshCw className="w-4 h-4 text-primary/80" />;
  }
  if (normalizedLabel.includes('news')) {
    return <Newspaper className="w-4 h-4 text-primary/80" />;
  }
  if (normalizedLabel.includes('leverage')) {
    return <Zap className="w-4 h-4 text-primary/80" />;
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
        <div className="w-5">{getFeatureIcon(label)}</div>
        <span className="text-sm text-gray-400/80">{label}</span>
      </div>
      <span className="text-gray-300 text-sm font-medium">{value}</span>
    </div>
  );
}
