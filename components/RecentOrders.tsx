'use client';

const orders = [
  {
    id: '#ORD-7291',
    customer: 'Alice Johnson',
    email: 'alice@example.com',
    product: 'MacBook Pro 14"',
    amount: '$2,399',
    status: 'Completed',
    date: 'Jul 12, 2024',
    avatar: 'AJ',
    avatarColor: 'from-pink-400 to-rose-500',
  },
  {
    id: '#ORD-7290',
    customer: 'Bob Martinez',
    email: 'bob@example.com',
    product: 'iPhone 15 Pro',
    amount: '$1,199',
    status: 'Processing',
    date: 'Jul 12, 2024',
    avatar: 'BM',
    avatarColor: 'from-blue-400 to-indigo-500',
  },
  {
    id: '#ORD-7289',
    customer: 'Carol White',
    email: 'carol@example.com',
    product: 'iPad Air',
    amount: '$749',
    status: 'Completed',
    date: 'Jul 11, 2024',
    avatar: 'CW',
    avatarColor: 'from-emerald-400 to-teal-500',
  },
  {
    id: '#ORD-7288',
    customer: 'David Brown',
    email: 'david@example.com',
    product: 'AirPods Pro',
    amount: '$249',
    status: 'Cancelled',
    date: 'Jul 11, 2024',
    avatar: 'DB',
    avatarColor: 'from-amber-400 to-orange-500',
  },
  {
    id: '#ORD-7287',
    customer: 'Eva Garcia',
    email: 'eva@example.com',
    product: 'Apple Watch S9',
    amount: '$399',
    status: 'Pending',
    date: 'Jul 10, 2024',
    avatar: 'EG',
    avatarColor: 'from-violet-400 to-purple-500',
  },
];

const statusStyles: Record<string, string> = {
  Completed: 'bg-emerald-100 text-emerald-700',
  Processing: 'bg-blue-100 text-blue-700',
  Cancelled: 'bg-red-100 text-red-600',
  Pending: 'bg-amber-100 text-amber-700',
};

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="px-5 py-4 flex items-center justify-between border-b border-slate-100">
        <div>
          <h2 className="text-base font-bold text-slate-800">Recent Orders</h2>
          <p className="text-sm text-slate-400 mt-0.5">Latest customer purchases</p>
        </div>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium transition">
          View all
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Order</th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Customer</th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Product</th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Amount</th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Status</th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-5 py-3.5">
                  <span className="text-sm font-medium text-blue-600">{order.id}</span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${order.avatarColor} flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-xs font-bold text-white">{order.avatar}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700">{order.customer}</p>
                      <p className="text-xs text-slate-400 hidden sm:block">{order.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 hidden md:table-cell">
                  <span className="text-sm text-slate-600">{order.product}</span>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-sm font-semibold text-slate-800">{order.amount}</span>
                </td>
                <td className="px-5 py-3.5">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      statusStyles[order.status] || 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 hidden lg:table-cell">
                  <span className="text-sm text-slate-400">{order.date}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
