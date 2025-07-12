import { Link2, RefreshCw, Plus, Globe, User, CalendarDays, FileText, ArrowDownUp, MoreVertical, Briefcase } from "lucide-react";
import React from 'react';

// Helper component for the table column headers
function HeaderCell({ icon, label, customClass = "" }) {
  // Increased horizontal padding (px-4) for better spacing matching the image
  // Adjusted min-w to give consistent width to columns, though image shows varied widths
  return (
    <div className={`flex items-center px-4 py-2 gap-1 border-r border-gray-300 min-w-[150px] ${customClass}`}>
      {icon}
      <span className="text-sm text-[#2f3a46] font-semibold">{label}</span>
      {/* Added ArrowDownUp icon for sortable headers as observed in the image */}
      {(label === "Job Request" || label === "Submitted" || label === "Status" || label === "Submitter" || label === "URL") && (
        <ArrowDownUp size={14} className="text-gray-400 ml-1" />
      )}
    </div>
  );
}

// Placeholder components for the custom icons in the original code, needed for compilation
function DownloadIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M11.47 3.22a.75.75 0 0 1 1.06 0l2.75 2.75a.75.75 0 0 1-1.06 1.06L12.75 5.81V13a.75.75 0 0 1-1.5 0V5.81L9.78 7.03a.75.75 0 0 1-1.06-1.06l2.75-2.75zM4.75 13.5a.75.75 0 0 1 .75.75v2A2.75 2.75 0 0 0 8.25 19h7.5a2.75 2.75 0 0 0 2.75-2.75v-2a.75.75 0 0 1 1.5 0v2A4.25 4.25 0 0 1 15.75 20.5h-7.5A4.25 4.25 0 0 1 4 16.25v-2a.75.75 0 0 1 .75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function HandIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-700">
      <path d="M7.75 2.75a.75.75 0 011.5 0v5.69l.66-.65a.75.75 0 111.06 1.06L9.31 9.5l1.66 1.65a.75.75 0 11-1.06 1.06l-2.75-2.75a.75.75 0 010-1.06l2.75-2.75a.75.75 0 00-1.06-1.06l-.66.65V2.75z" />
    </svg>
  );
}


export default function Header() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Header Bar */}
      <div className="flex items-center h-10 w-full bg-gray-100 border-b border-gray-300">
        <div className="flex items-center gap-1 px-2 py-1 rounded bg-white ml-2 border border-gray-300">
          <Link2 size={14} className="text-blue-600" />
          <span className="text-sm text-gray-700 font-medium">Q3 Financial Overview</span>
        </div>
        {/* Refresh icon with spacing */}
        <RefreshCw size={14} className="text-red-500 ml-2 cursor-pointer" />

        <div className="flex ml-auto h-full text-xs">
          {/* Action Buttons (ABC, Answer a question, Extract) - Optimized padding and colors */}
          
          {/* ABC Button (Green/Lime) */}
          <div className="flex items-center px-4 py-1 gap-1 bg-[#dcfce7] border-r border-white cursor-pointer hover:bg-green-200">
            <Briefcase className="w-4 h-4 text-green-700" />
            <span className="text-sm text-gray-800 font-medium">ABC</span>
            <MoreVertical className="w-3 h-3 text-gray-400" />
          </div>

          {/* Answer a question Button (Purple) */}
          <div className="flex items-center px-4 py-1 gap-1 bg-[#ede9fe] border-r border-white cursor-pointer hover:bg-purple-200">
            <FileText className="w-4 h-4 text-purple-800" />
            <span className="text-sm text-purple-900 font-medium">
              Answer a question
            </span>
            <MoreVertical className="w-3 h-3 text-gray-400" />
          </div>

          {/* Extract Button (Orange/Reddish) */}
          <div className="flex items-center px-4 py-1 gap-1 bg-[#ffebe6] border-r border-white cursor-pointer hover:bg-orange-200">
            <CalendarDays className="w-4 h-4 text-orange-900" />
            <span className="text-sm text-orange-900 font-medium">Extract</span>
            <MoreVertical className="w-3 h-3 text-gray-400" />
          </div>

          {/* Plus icon */}
          <div className="flex items-center px-3 hover:bg-gray-300 cursor-pointer">
            <Plus className="w-4 h-4 text-gray-700" />
          </div>
        </div>
      </div>

      {/* Table Column Header */}
      {/* Used py-2 for vertical padding consistency */}
      <div className="flex items-center bg-white border-b border-gray-300 text-sm text-[#2f3a46] font-medium">
        {/* Hash icon/column */}
        <div className="w-[40px] flex items-center justify-center px-1 py-2 border-r border-gray-300">
          <span className="text-[#a7a7a7] text-sm">#</span>
        </div>

        {/* Dynamic Headers */}
        <HeaderCell icon={<Briefcase size={16} className="text-gray-500" />} label="Job Request" />
        <HeaderCell label="Submitted" />
        <HeaderCell label="Status" />
        <HeaderCell label="Submitter" />
        <HeaderCell icon={<Globe size={16} className="text-gray-500" />} label="URL" />

        {/* Colored Headers with adjusted background colors to match the image better */}
        <HeaderCell label="Assigned" customClass="bg-[#ebf8ee]" />
        <HeaderCell label="Priority" customClass="bg-[#f2e7f9]" />
        <HeaderCell label="Due Date" customClass="bg-[#f2e7f9]" />
        <HeaderCell label="Est. Value" customClass="bg-[#ffede6]" />
      </div>
    </div>
  );
}