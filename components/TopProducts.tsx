'use client';

const products = [
  {
    name: 'MacBook Pro 14"',
    category: 'Laptops',
    sales: 1284,
    revenue: '$2.4M',
    growth: 14.5,
    emoji: '💻',
  },
  {
    name: 'iPhone 15 Pro',
    category: 'Phones',
    sales: 3821,
    revenue: '$1.9M',
    growth: 22.1,
    emoji: '📱',
  },
  {
    name: 'AirPods Pro',
    category: 'Audio',
    sales: 5412,
    revenue: '$1.2M',
    growth: 8.3,
    emoji: '🎧',
  },
  {
    name: 'Apple Watch S9',
    category: 'Wearables',
    sales: 2103,
    revenue: '$0.8M',
    growth: -2.7,
    emoji: '⌚',
  },
  {
    name: 'iPad Air',
    category: 'Tablets',
    sales: 987,
    revenue: '$0.7M',
    growth: 5.9,
    emoji: '📟',
  },
];

const BAR_COLORS = ['#eab308', '#000000', '#ca8a04', '#fde047', '#a16207'];

export default function TopProducts() {
  const maxSales = Math.max(...products.map((p) => p.sales));

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-yellow-200 h-full">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-base font-bold text-black">Top Products</h2>
          <p className="text-sm text-yellow-600 mt-0.5">Best performers this month</p>
        </div>
        <button className="text-sm text-yellow-600 hover:text-black font-medium transition">
          View all
        </button>
      </div>
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={product.name} className="flex items-center gap-3">
            <span className="text-xl flex-shrink-0">{product.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-black truncate">{product.name}</span>
                <span className="text-xs font-semibold text-black ml-2 flex-shrink-0">{product.revenue}</span>
              </div>
              <div className="w-full bg-yellow-100 rounded-full h-1.5">
                <div
                  className="h-1.5 rounded-full"
                  style={{
                    width: `${(product.sales / maxSales) * 100}%`,
                    backgroundColor: BAR_COLORS[index % BAR_COLORS.length],
                  }}
                />
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-yellow-600">{product.sales.toLocaleString()} sales</span>
                <span
                  className={`text-xs font-medium ${
                    product.growth >= 0 ? 'text-emerald-600' : 'text-red-500'
                  }`}
                >
                  {product.growth >= 0 ? '+' : ''}{product.growth}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
