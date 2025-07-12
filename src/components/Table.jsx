import React, { useState } from 'react';
import { Link2, RefreshCw, Plus, Globe, User, CalendarDays, FileText, ArrowDownUp, MoreVertical, Briefcase } from "lucide-react";

// --- Data and Constants ---

// Placeholder data for the table rows
const tableData = [
  {
    id: 1,
    'Job Request': 'Launch social media campaign for pro...',
    'Submitted Date': '15-11-2024',
    Status: 'In-process',
    Submitter: 'Aisha Patel',
    URL: 'www.aishapatel...',
    Assigned: 'Sophie Choudhury',
    Priority: 'Medium',
    'Due Date': '20-11-2024',
    'Est. Value': '6,200,000',
  },
  {
    id: 2,
    'Job Request': 'Update press kit for company redesign',
    'Submitted Date': '28-10-2024',
    Status: 'Need to start',
    Submitter: 'Irfan Khan',
    URL: 'www.irfankhanp...',
    Assigned: 'Tejas Pandey',
    Priority: 'High',
    'Due Date': '30-10-2024',
    'Est. Value': '3,500,000',
  },
  {
    id: 3,
    'Job Request': 'Finalize user testing feedback for app...',
    'Submitted Date': '05-12-2024',
    Status: 'In-process',
    Submitter: 'Mark Johnson',
    URL: 'www.markjohns...',
    Assigned: 'Rachel Lee',
    Priority: 'Medium',
    'Due Date': '10-12-2024',
    'Est. Value': '4,750,000',
  },
  {
    id: 4,
    'Job Request': 'Design new features for the website',
    'Submitted Date': '10-01-2025',
    Status: 'Complete',
    Submitter: 'Emily Green',
    URL: 'www.emilygreen...',
    Assigned: 'Tom Wright',
    Priority: 'Low',
    'Due Date': '18-01-2025',
    'Est. Value': '5,900,000',
  },
  {
    id: 5,
    'Job Request': 'Prepare financial report for Q4',
    'Submitted Date': '25-01-2025',
    Status: 'Blocked',
    Submitter: 'Jessica Brown',
    URL: 'www.jessicabro...',
    Assigned: 'Kevin Smith',
    Priority: 'Low',
    'Due Date': '30-01-2025',
    'Est. Value': '2,800,000',
  },
];

// Define precise column widths. Using 'flex-1' for columns that should stretch
const COLUMN_WIDTHS = {
  '#': 'w-[40px]',
  'Job Request': 'flex-1 min-w-[280px]', 
  'Submitted Date': 'w-[120px]',
  Status: 'w-[120px]',
  Submitter: 'w-[160px]',
  'URL': 'flex-1 min-w-[180px]', 
  Assigned: 'w-[160px]',
  Priority: 'w-[120px]',
  'Due Date': 'w-[120px]',
  'Est. Value': 'w-[140px]',
};

// --- Component Definitions ---

// Helper component for the colored status and priority pills
const Pill = ({ text }) => {
  let bgColor = '';
  let textColor = '';

  switch (text) {
    case 'In-process':
      bgColor = 'bg-yellow-100';
      textColor = 'text-yellow-700';
      break;
    case 'Need to start':
      bgColor = 'bg-gray-200';
      textColor = 'text-gray-800';
      break;
    case 'Complete':
      bgColor = 'bg-green-100';
      textColor = 'text-green-700';
      break;
    case 'Blocked':
      bgColor = 'bg-red-100';
      textColor = 'text-red-700';
      break;
    case 'Medium':
      bgColor = 'bg-orange-100';
      textColor = 'text-orange-700';
      break;
    case 'High':
      bgColor = 'bg-red-100';
      textColor = 'text-red-700';
      break;
    case 'Low':
      bgColor = 'bg-blue-100';
      textColor = 'text-blue-700';
      break;
    default:
      bgColor = 'bg-gray-100';
      textColor = 'text-gray-800';
  }

  return (
    <div className={`text-xs font-semibold px-2 py-0.5 rounded-full ${bgColor} ${textColor} text-center inline-flex items-center justify-center`}>
      {text}
    </div>
  );
};

// Component for the cells in the table header row (Top 2nd Row)
function HeaderCell({ icon, label, customClass = "" }) {
  const widthClass = COLUMN_WIDTHS[label] || 'min-w-[120px]';

  // Apply flexbox settings based on the width definition to ensure stretching
  const isFlex = widthClass.includes('flex-1');
  const cellClasses = `flex items-center px-4 py-2 gap-1 border-r border-gray-300 text-sm font-medium text-[#2f3a46] ${widthClass} ${isFlex ? 'flex-grow' : 'flex-shrink-0'}`;

  return (
    <div className={`${cellClasses} ${customClass}`}>
      {icon}
      <span className="text-sm font-semibold">{label}</span>
      {/* ArrowDownUp icon for sortable headers */}
      {(label === "Job Request" || label === "Submitted" || label === "Status" || label === "Submitter" || label === "URL") && (
        <ArrowDownUp size={14} className="text-gray-400 ml-1" />
      )}
    </div>
  );
}

// Component for a single Table Row
const TableRow = ({ rowData }) => {
  const isDataRow = rowData.type === 'data';

  const cells = Object.keys(rowData).map((key, colIndex) => {
    if (key === 'id' || key === 'type') return null;

    let content = rowData[key];
    const isStatusOrPriority = key === 'Status' || key === 'Priority';
    const isURL = key === 'URL';

    // Apply specific rendering for pills and URLs in data rows
    if (isDataRow) {
      if (isStatusOrPriority) {
        content = <Pill text={content} />;
      } else if (isURL) {
        content = (
          <a href={`http://${content}`} className="text-blue-600 underline truncate hover:text-blue-800">
            {content}
          </a>
        );
      }
    }

    const widthClass = COLUMN_WIDTHS[key];
    
    // Check if the current cell is the one highlighted in the image (Row 6, 'Assigned' column)
    const isHighlightedCell = rowData.id === 6 && key === 'Assigned' && !isDataRow;
    const cellBorderClass = isHighlightedCell 
      ? 'border-2 border-green-500 z-10 relative' // Thicker border for the highlighted cell
      : 'border-r border-gray-200';
    
    const isFlex = widthClass.includes('flex-1');

    return (
      <div 
        key={colIndex} 
        // Consistent padding and row height, apply flex settings for stretching columns
        className={`p-3 text-sm overflow-hidden whitespace-nowrap ${widthClass} ${cellBorderClass} ${isFlex ? 'flex-grow' : 'flex-shrink-0'}`}
      >
        {isDataRow ? (
          <div className="text-gray-800">
            {content}
          </div>
        ) : (
          // Empty cell: contentEditable allows typing in blank cells and makes the UI responsive to user input.
          <div 
            contentEditable={true} 
            className="w-full h-full outline-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            // Log interaction to console for the strict instruction
            onInput={(e) => console.log(`Cell (Row: ${rowData.id}, Column: ${key}) input:`, e.target.innerText)}
          >
            {/* Empty cells remain blank visually, matching the image */}
          </div>
        )}
      </div>
    );
  });

  // Render the # column (Serial Number) and the rest of the row
  return (
    <div className="flex bg-white border-b border-gray-200 min-h-[44px]">
      <div className={`flex items-center justify-center p-3 border-r border-gray-200 text-xs text-gray-500 ${COLUMN_WIDTHS['#']}`}>
        {rowData.id}
      </div>
      {cells}
    </div>
  );
};

// Component for the footer navigation tabs
const TableFooter = ({ activeTab, onTabClick }) => {
  const tabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

  return (
    <div className="w-full bg-white border-t border-gray-300">
      <div className="flex px-4 py-3 text-sm">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`px-3 py-1 cursor-pointer font-semibold relative ${
              activeTab === tab
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => onTabClick(tab)}
          >
            {tab}
          </div>
        ))}
        {/* Plus button for adding tabs */}
        <div 
          className="px-3 py-1 text-gray-400 cursor-pointer font-semibold"
          onClick={() => console.log("Footer: Add tab button clicked.")}
        >
          +
        </div>
      </div>
    </div>
  );
};


// Main Table Layout Component
export default function TableLayout() {
  const headers = Object.keys(tableData[0]).filter(key => key !== 'id');
  const [activeTab, setActiveTab] = useState('All Orders');

  // Generate empty rows (up to row 24 total)
  const emptyRows = Array.from({ length: 19 }, (_, i) => ({
    id: i + 6,
    type: 'empty',
    ...Object.fromEntries(headers.map(header => [header, ''])),
  }));

  // Combine data rows and empty rows
  const allRows = [
    ...tableData.map(row => ({ ...row, type: 'data' })),
    ...emptyRows,
  ];

  // Handlers for the top bar buttons
  const handleTopBarButtonClick = (buttonName) => {
    console.log(`Top Bar Button: "${buttonName}" clicked.`);
  };

  const handleTabClick = (tabName) => {
    console.log(`Footer Tab: "${tabName}" activated.`);
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50 p-0">
      <div className="w-full mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-300">
        
        {/* --- Top Header Bar --- */}
        <div className="flex items-center h-12 w-full bg-white border-b border-gray-300 px-4">
          <div className="flex items-center gap-1 px-3 py-1 rounded bg-white border border-gray-300">
            <Link2 size={16} className="text-blue-600" />
            <span className="text-sm text-gray-700 font-medium">Q3 Financial Overview</span>
            <RefreshCw 
              size={16} 
              className="text-red-500 ml-1 cursor-pointer" 
              onClick={() => handleTopBarButtonClick('Refresh')}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex ml-auto h-full items-center gap-2">
            
            {/* ABC Button (Green) */}
            <div 
              className="flex flex-shrink-0 items-center px-4 py-1 gap-1 bg-[#dcfce7] rounded-md cursor-pointer hover:bg-green-200"
              onClick={() => handleTopBarButtonClick('ABC')}
            >
              <Briefcase className="w-4 h-4 text-green-700" />
              <span className="text-sm text-gray-800 font-medium">ABC</span>
              <MoreVertical className="w-3 h-3 text-gray-400" />
            </div>

            {/* Answer a question Button (Purple) */}
            <div 
              className="flex flex-shrink-0 items-center px-4 py-1 gap-1 bg-[#ede9fe] rounded-md cursor-pointer hover:bg-purple-200"
              onClick={() => handleTopBarButtonClick('Answer a question')}
            >
              <FileText className="w-4 h-4 text-purple-800" />
              <span className="text-sm text-purple-900 font-medium">Answer a question</span>
              <MoreVertical className="w-3 h-3 text-gray-400" />
            </div>

            {/* Extract Button (Orange/Reddish) */}
            <div 
              className="flex flex-shrink-0 items-center px-4 py-1 gap-1 bg-[#ffebe6] rounded-md cursor-pointer hover:bg-orange-200"
              onClick={() => handleTopBarButtonClick('Extract')}
            >
              <CalendarDays className="w-4 h-4 text-orange-900" />
              <span className="text-sm text-orange-900 font-medium">Extract</span>
              <MoreVertical className="w-3 h-3 text-gray-400" />
            </div>

            {/* Plus icon */}
            <div 
              className="flex items-center px-3 hover:bg-gray-300 cursor-pointer rounded-full"
              onClick={() => handleTopBarButtonClick('Add')}
            >
              <Plus className="w-4 h-4 text-gray-700" />
            </div>
          </div>
        </div>

        {/* --- Table Column Header Row --- */}
        <div className="flex bg-gray-100 border-b border-gray-300 text-sm text-[#2f3a46] font-medium">
          {/* # column header */}
          <div className={`flex items-center justify-center py-2 border-r border-gray-300 text-sm text-[#a7a7a7] ${COLUMN_WIDTHS['#']}`}>
            #
          </div>

          {/* Headers from Data */}
          {headers.map((label, index) => {
            // Apply background color classes based on the image shades
            let customClass = "";
            if (label === "Assigned") {
              customClass = "bg-[#ebf8ee]"; 
            } else if (label === "Priority" || label === "Due Date") {
              customClass = "bg-[#f2e7f9]";
            } else if (label === "Est. Value") {
              customClass = "bg-[#ffede6]";
            }

            // Icons based on the image (using lucide-react)
            let icon = null;
            if (label === 'Job Request') icon = <Briefcase size={16} className="text-gray-500" />;
            if (label === 'URL') icon = <Globe size={16} className="text-gray-500" />;
            
            return (
              <HeaderCell key={index} label={label} icon={icon} customClass={customClass} />
            );
          })}
        </div>

        {/* --- Table Body Rows --- */}
        <div className="table-body flex flex-col">
          {allRows.map((row) => (
            <TableRow key={row.id} rowData={row} />
          ))}
        </div>

        {/* --- Table Footer (Tabs) --- */}
        <TableFooter activeTab={activeTab} onTabClick={handleTabClick} />
      </div>
    </div>
  );
}