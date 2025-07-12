import React from 'react';
import {
  EyeOff,
  ArrowDownUp,
  Filter,
  Layout,
  Download,
  Upload,
  Share2,
  Merge
} from 'lucide-react';

const ToolBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white border-b border-gray-200 shadow-sm">
      {/* Left Section: Tools */}
      <div className="flex items-center space-x-4 text-sm text-gray-700">
        <button className="flex items-center space-x-1">
          <span>Tool bar</span>
          <span className="ml-1">{'»'}</span>
        </button>

        <button className="flex items-center space-x-1">
          <EyeOff className="w-4 h-4" />
          <span>Hide fields</span>
        </button>

        <button className="flex items-center space-x-1">
          <ArrowDownUp className="w-4 h-4" />
          <span>Sort</span>
        </button>

        <button className="flex items-center space-x-1">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>

        <button className="flex items-center space-x-1">
          <Layout className="w-4 h-4" />
          <span>Cell view</span>
        </button>
      </div>

      {/* Right Section: Buttons */}
      <div className="flex items-center space-x-2">
        <button className="flex items-center space-x-1 border px-2 py-1 rounded text-sm text-gray-700 hover:bg-[#4B6A4F] hover:text-white transition-colors">
          <Download className="w-4 h-4" />
          <span>Import</span>
        </button>

        <button className="flex items-center space-x-1 border px-2 py-1 rounded text-sm text-gray-700 hover:bg-[#4B6A4F] hover:text-white transition-colors">
          <Upload className="w-4 h-4 rotate-180" />
          <span>Export</span>
        </button>

        <button className="flex items-center space-x-1 border px-2 py-1 rounded text-sm text-gray-700 hover:bg-[#4B6A4F] hover:text-white transition-colors">
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </button>

        <button className="flex items-center space-x-1 px-3 py-1.5 bg-[#4B6A4F] text-white rounded text-sm font-medium hover:bg-[#4B6A4F] transition-colors">
          <Merge className="w-4 h-4" />
          <span>New Action</span>
        </button>
      </div>
    </div>
  );
};

export default ToolBar;
