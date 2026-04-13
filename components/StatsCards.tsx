import { TrendingUp, TrendingDown, DollarSign, ShoppingBag, Users, Eye } from 'lucide-react';

const stats = [
  {
    title: 'Total Revenue',
    value: '$84,254',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    description: 'vs last month',
  },
  {
    title: 'Total Orders',
    value: '3,842',
    change: '+8.2%',
    trend: 'up',
    icon: ShoppingBag,
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    description: 'vs last month',
  },
  {
    title: 'New Customers',
    value: '1,257',
    change: '-3.1%',
    trend: 'down',
    icon: Users,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    description: 'vs last month',
  },
  {
    title: 'Page Views',
    value: '94,512',
    change: '+18.7%',
    trend: 'up',
    icon: Eye,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    description: 'vs last month',
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const isUp = stat.trend === 'up';
        return (
          <div
            key={stat.title}
            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500 font-medium">{stat.title}</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</h3>
              </div>
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${stat.iconBg}`}>
                <Icon size={22} className={stat.iconColor} />
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-4">
              <span
                className={`flex items-center gap-0.5 text-sm font-semibold ${
                  isUp ? 'text-emerald-600' : 'text-red-500'
                }`}
              >
                {isUp ? <TrendingUp size={15} /> : <TrendingDown size={15} />}
                {stat.change}
              </span>
              <span className="text-xs text-slate-400">{stat.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
