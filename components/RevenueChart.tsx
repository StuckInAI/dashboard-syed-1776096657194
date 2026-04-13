'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 42000, expenses: 28000 },
  { month: 'Feb', revenue: 38000, expenses: 24000 },
  { month: 'Mar', revenue: 55000, expenses: 31000 },
  { month: 'Apr', revenue: 47000, expenses: 27000 },
  { month: 'May', revenue: 63000, expenses: 35000 },
  { month: 'Jun', revenue: 58000, expenses: 33000 },
  { month: 'Jul', revenue: 72000, expenses: 40000 },
  { month: 'Aug', revenue: 68000, expenses: 38000 },
  { month: 'Sep', revenue: 79000, expenses: 42000 },
  { month: 'Oct', revenue: 84000, expenses: 45000 },
  { month: 'Nov', revenue: 76000, expenses: 41000 },
  { month: 'Dec', revenue: 91000, expenses: 48000 },
];

const formatCurrency = (value: number) => `$${(value / 1000).toFixed(0)}k`;

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-yellow-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-base font-bold text-black">Revenue Overview</h2>
          <p className="text-sm text-yellow-600 mt-0.5">Monthly revenue vs expenses</p>
        </div>
        <select className="text-sm border border-yellow-300 rounded-lg px-3 py-1.5 text-black bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-400">
          <option>This Year</option>
          <option>Last Year</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#eab308" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#eab308" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000000" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#000000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#fef9c3" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: '#a16207' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={formatCurrency}
            tick={{ fontSize: 12, fill: '#a16207' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
            contentStyle={{
              backgroundColor: '#000000',
              border: '1px solid #eab308',
              borderRadius: '10px',
              color: '#facc15',
              fontSize: '12px',
            }}
            labelStyle={{ color: '#eab308', marginBottom: '4px' }}
          />
          <Legend
            wrapperStyle={{ fontSize: '12px', paddingTop: '16px' }}
            iconType="circle"
            iconSize={8}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            name="Revenue"
            stroke="#eab308"
            strokeWidth={2.5}
            fill="url(#colorRevenue)"
            dot={false}
            activeDot={{ r: 5, fill: '#eab308' }}
          />
          <Area
            type="monotone"
            dataKey="expenses"
            name="Expenses"
            stroke="#111111"
            strokeWidth={2.5}
            fill="url(#colorExpenses)"
            dot={false}
            activeDot={{ r: 5, fill: '#111111' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
