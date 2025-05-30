import React from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from 'recharts';
import { ChevronDown } from 'lucide-react';
import { ChartDataPoint } from '../types';

interface OverviewChartProps {
  data: ChartDataPoint[];
  title?: string;
  className?: string;
}

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 shadow-lg">
        <p className="text-gray-300 text-sm font-medium mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-white text-sm">
              {entry.dataKey === 'equity' ? 'Equity' : 'Balance'} • $
              {entry.value?.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const OverviewChart: React.FC<OverviewChartProps> = ({
  data,
  title = 'Overview',
  className = '',
}) => {
  return (
    <div className={`lg:col-span-2 ${className} relative overflow-hidden`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[50px] bg-primary rounded-full blur-[100px]"></div>
      <div className="bg-white/5 border border-white/10 rounded-lg p-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xs font-semibold text-white">{title}</h3>
          <div className="flex items-center space-x-2">
            <div className="flex rounded-lg gap-3 p-1">
              {['Equity', 'Balance'].map((mode) => (
                <button
                  key={mode}
                  className={`px-3 py-1 flex items-center gap-2 rounded bg-white/10 text-[12px] transition-colors border border-white/20`}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  {mode}
                </button>
              ))}
            </div>
            <div className="relative">
              <button
                className={`px-3 py-1 rounded bg-white/10 text-[12px] transition-colors border border-white/20 flex items-center gap-2`}
              >
                <span className="text-sm">Monthly</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="h-44 pb-4 items-center flex justify-center">
          <div className="flex border-r h-full flex-col justify-between w-14 border-white/10 items-start">
            {[1600, 1200, 1100, 1000, 900].map((i, index) => (
              <p className="text-[10px] gap-2" key={`${i}-${index}`}>
                ${i.toLocaleString()}
              </p>
            ))}
          </div>
          <div className="flex-1 w-full h-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="equity"
                  stroke="#12FF8E"
                  strokeWidth={2}
                  dot={false}
                  style={{
                    filter:
                      'drop-shadow(0 0 8px #FF5C1240) drop-shadow(0 0 16px #FF5C1240)',
                  }}
                  activeDot={{
                    r: 6,
                    fill: '#FFFFFF',
                    stroke: '#12FF8E',
                    strokeWidth: 2,
                    style: {
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                    },
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="balance"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={false}
                  style={{
                    filter:
                      'drop-shadow(0 0 8px #FF5C1210) drop-shadow(0 0 16px #FF5C1210)',
                  }}
                  activeDot={{
                    r: 6,
                    fill: '#FFFFFF',
                    stroke: '#10B981',
                    strokeWidth: 2,
                    style: {
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                    },
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex border-t w-full justify-between border-white/10  items-start">
              {[
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ].map((i, index) => (
                <div className="py-2" key={`${i}-${index}`}>
                  <p
                    className={`text-[10px] px-2 ${
                      i === 'Aug' ? 'bg-primary text-black rounded' : ''
                    }`}
                  >
                    {i}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewChart;
