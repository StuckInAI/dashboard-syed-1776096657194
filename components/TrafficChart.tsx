'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Organic', value: 38 },
  { name: 'Direct', value: 24 },
  { name: 'Social', value: 20 },
  { name: 'Referral', value: 11 },
  { name: 'Email', value: 7 },
];

const COLORS = ['#eab308', '#000000', '#ca8a04', '#fde047', '#a16207'];

export default function TrafficChart() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-yellow-200 h-full">
      <div className="mb-4">
        <h2 className="text-base font-bold text-black">Traffic Sources</h2>
        <p className="text-sm text-yellow-600 mt-0.5">Where visitors come from</p>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={85}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => [`${value}%`, '']}
            contentStyle={{
              backgroundColor: '#000000',
              border: '1px solid #eab308',
              borderRadius: '10px',
              color: '#facc15',
              fontSize: '12px',
            }}
          />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '12px' }} />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-2 space-y-2">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-xs text-yellow-800">{item.name}</span>
            </div>
            <span className="text-xs font-semibold text-black">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
