import { Settings, Copy, Maximize2, Grid, PanelLeft, Search, MessageCircleMore, Book, Icon, LayoutGrid, icons } from 'lucide-react';
import { useState } from 'react';

const sidebarItems = [
  { icon: "MessageCircleMore" , label: "Chats", count: 1 },
  { icon: "Book", label: "Library", count: 2 },
  { icon: "LayoutGrid", label: "Apps", count: 3 }
];

const pinnedChats = [
  "Create a blog outline",
  "Generate [] keywords for a mar...",
  "Could you please explain how ta...",
  "Create a JS function for..."
];

const chatHistory = [
  "Give me 10 ways to create an re...",
  "TypeScript Function for Z...",
  "Identify the instructions in this...",
  "Design a business plan for a co...",
  "Translate the following text to S...",
  "Generate a resume from this file...",
  "Design a business plan for a co...",
  "Translate the following text to S...",
  "Generate a resume from this file..."
];

const Sidebar = () => {
  const [selected, setSelected] = useState(2);

  return (
    <aside className="flex flex-col p-6 w-1/5">
      {/* User Profile */}
      <div className="pb-4 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        <span className="font-medium">Mauro Sicard</span>
        <div className="ml-auto flex gap-2">
          <Settings size={16} className="text-gray-500" />
          <PanelLeft size={16} className="text-gray-500" />
        </div>
      </div>

      {/* Search */}
      <div className="relative text-xs">
        <input
          type="text"
          placeholder="Search for chats..."
          className="w-full pl-[24px] pr-[12px] py-[9px] bg-white shadow-sm rounded-md placeholder-[#666F8D]"
        />
        <span className="absolute right-1 top-1 bg-gray-50 p-1 rounded shadow-sm">⌘K</span>
        <span className="absolute left-[9px] top-[11px]">
          <Search size={12} color='#666F8D' />
        </span>
      </div>

      {/* Main Menu */}
      <div className="py-4 mt-4">
        {sidebarItems.map((item, index) => {
          const LucideIcon = icons[item.icon];
          const itemSelected = selected === item.count;
          return(
            <div 
              onClick={() => setSelected(item.count)}
              key={index} 
              className={`flex items-center px-[5px] py-[6px] rounded ${itemSelected ? "bg-white shadow-sm" : "hover:bg-gray-100 "} cursor-pointer mb-1`}
            >
              <LucideIcon size={14} color={itemSelected ? "#19213D" : '#666F8D'} />
              <span className={`ml-2 text-[${itemSelected ? "#19213D" : "#666F8D"}] text-sm`}>{item.label}</span>
              <span className={`ml-auto text-xs shadow-sm p-1 ${ itemSelected ? "bg-background-2" : "bg-white"} rounded w-7 text-center`}>⌘{item.count}</span>
            </div>
          )
        })}
      </div>

      {/* Pinned Section */}
      <div className="mt-4">
        <div className="text-xs font-medium text-[#BAC0CC] mb-2">PINNED</div>
        {pinnedChats.map((chat, index) => (
          <div key={index} className="py-2 text-sm text-[#666F8D] hover:bg-gray-100 rounded">
            {chat}
          </div>
        ))}
      </div>

      {/* Chat History */}
      <div className="mt-4 flex-1 overflow-y-auto">
        <div className="text-xs font-medium text-[#BAC0CC] mb-2">CHAT HISTORY</div>
        {chatHistory.map((chat, index) => (
          <div key={index} className="py-2 text-sm text-[#666F8D] hover:bg-gray-100 rounded px-2">
            {chat}
          </div>
        ))}
      </div>

      {/* New Chat Button */}
      <div className="">
        <button className="w-full bg-blue-500 text-white rounded-lg py-2 px-4 flex items-center justify-center gap-2">
          <span>+</span> Start new chat
        </button>
      </div>
    </aside>
  )
};

export default Sidebar;