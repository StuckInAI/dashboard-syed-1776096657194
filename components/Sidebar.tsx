'use client';

import { useState } from 'react';
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  BarChart2,
  Settings,
  Bell,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Package,
  CreditCard,
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: ShoppingCart, label: 'Orders', badge: '12' },
  { icon: Package, label: 'Products' },
  { icon: Users, label: 'Customers' },
  { icon: CreditCard, label: 'Payments' },
  { icon: BarChart2, label: 'Analytics' },
  { icon: Bell, label: 'Notifications', badge: '3' },
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Help' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <aside
      className={`relative flex flex-col bg-black text-yellow-100 transition-all duration-300 ease-in-out ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-yellow-900">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
              <BarChart2 size={18} className="text-black" />
            </div>
            <span className="font-bold text-lg tracking-tight text-yellow-400">Analytix</span>
          </div>
        )}
        {collapsed && (
          <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto">
            <BarChart2 size={18} className="text-black" />
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-6 bg-yellow-400 hover:bg-yellow-300 rounded-full p-1 border border-yellow-500 transition-colors z-10 text-black"
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto scrollbar-thin">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;
          return (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 text-sm font-medium ${
                isActive
                  ? 'bg-yellow-400 text-black'
                  : 'text-yellow-200 hover:bg-yellow-900 hover:text-yellow-400'
              } ${collapsed ? 'justify-center' : ''}`}
            >
              <Icon size={18} className="flex-shrink-0" />
              {!collapsed && (
                <span className="flex-1 text-left">{item.label}</span>
              )}
              {!collapsed && item.badge && (
                <span className="bg-yellow-400 text-black text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center font-bold">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="border-t border-yellow-900 px-3 py-4">
        <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-black">JD</span>
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-yellow-100 truncate">John Doe</p>
              <p className="text-xs text-yellow-600 truncate">Admin</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
