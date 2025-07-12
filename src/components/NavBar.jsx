import React from 'react';
import { Bell, Search } from 'lucide-react';

const NavBar = () => {
  return (
    <div className="flex items-center justify-between h-14 px-4 bg-white shadow-sm border-b border-gray-200">
      {/* Left: Breadcrumb Trail */}
      <div className="flex items-center text-sm text-gray-500">
        {/* Green square */}
        <div className="w-4 h-4 rounded-sm border border-green-800 bg-green-100 mr-2" />

        {/* Breadcrumb path */}
        <span className="text-gray-400">WorkSpace</span>
        <span className="text-gray-400 mx-1">{'>'}</span>
        <span className="text-gray-400">Folder 2</span>
        <span className="text-gray-400 mx-1">{'>'}</span>
        <span className="text-black font-semibold">Spreadsheet 3</span>
        <span className="text-gray-400 ml-1">…</span>
      </div>

      {/* Right: Search, Notification, Profile */}
      <div className="flex items-center space-x-4">
        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder=""
            className="pl-8 pr-2 py-1.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Notification icon with badge */}
        <div className="relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#4B6A4F] text-white text-xs rounded-full flex items-center justify-center">1</span>
        </div>

        {/* User profile */}
        <div className="flex items-center space-x-2">
          <img
            src="https://i.pravatar.cc/40?img=3" // Replace with actual user image if needed
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm text-right leading-tight">
            <div className="font-medium text-black">John Doe</div>
            <div className="text-gray-400 text-xs">john.doe...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
