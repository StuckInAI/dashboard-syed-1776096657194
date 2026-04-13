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
    avatarColor: 'bg-yellow-400',
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
    avatarColor: 'bg-yellow-600',
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
    avatarColor: 'bg-yellow-300',
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
    avatarColor: 'bg-yellow-500',
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
    avatarColor: 'bg-yellow-200',
  },
];

const statusStyles: Record<string, string> = {
  Completed: 'bg-emerald-100 text-emerald-700',
  Processing: 'bg-yellow-100 text-yellow-800',
  Cancelled: 'bg-red-100 text-red-600',
  Pending: 'bg-black text-yellow-400',
};

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-yellow-200 overflow-hidden">
      <div className="px-5 py-4 flex items-center justify-between border-b border-yellow-100">
        <div>
          <h2 className="text-base font-bold text-black">Recent Orders</h2>
          <p className="text-sm text-yellow-600 mt-0.5">Latest customer purchases</p>
        </div>
        <button className="text-sm text-yellow-600 hover:text-black font-medium transition">
          View all
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-yellow-50">
              <th className="text-left text-xs font-semibold text-yellow-700 uppercase tracking-wider px-5 py-3">Order</th>
              <th className="text-left text-xs font-semibold text-yellow-700 uppercase tracking-wider px-5 py-3">Customer</th>
              <th className="text-left text-xs font-semibold text-yellow-700 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Product</th>
              <th className="text-left text-xs font-semibold text-yellow-700 uppercase tracking-wider px-5 py-3">Amount</th>
              <th className="text-left text-xs font-semibold text-yellow-700 uppercase tracking-wider px-5 py-3">Status</th>
              <th className="text-left text-xs font-semibold text-yellow-700 uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-yellow-50">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-yellow-50 transition-colors">
                <td className="px-5 py-3.5">
                  <span className="text-sm font-medium text-yellow-600">{order.id}</span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-full ${order.avatarColor} flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-xs font-bold text-black">{order.avatar}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-black">{order.customer}</p>
                      <p className="text-xs text-yellow-600 hidden sm:block">{order.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 hidden md:table-cell">
                  <span className="text-sm text-yellow-800">{order.product}</span>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-sm font-semibold text-black">{order.amount}</span>
                </td>
                <td className="px-5 py-3.5">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      statusStyles[order.status] || 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 hidden lg:table-cell">
                  <span className="text-sm text-yellow-500">{order.date}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
