'use client';

import { useState } from 'react';
import { Search, Bell, Sun, Moon, ChevronDown } from 'lucide-react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between gap-4">
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search anything..."
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
          className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-slate-200"></div>

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 px-2 py-1.5 rounded-lg transition">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <span className="text-xs font-bold text-white">JD</span>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-slate-700">John Doe</p>
            <p className="text-xs text-slate-400">Administrator</p>
          </div>
          <ChevronDown size={14} className="text-slate-400" />
        </div>
      </div>
    </header>
  );
}
