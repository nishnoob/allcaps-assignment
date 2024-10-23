import React from 'react';
import { Settings, Copy, Maximize2, Grid } from 'lucide-react';

const ChatInterface = () => {
  const sidebarItems = [
    { icon: "💬", label: "Chats", count: 1 },
    { icon: "📚", label: "Library", count: 2 },
    { icon: "📱", label: "Apps", count: 3 }
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
    "Generate a resume from this file..."
  ];

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 border-r flex flex-col">
        {/* User Profile */}
        <div className="p-4 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
          <span className="font-medium">Mauro Sicard</span>
          <div className="ml-auto flex gap-2">
            <Settings size={16} className="text-gray-500" />
            <Copy size={16} className="text-gray-500" />
          </div>
        </div>

        {/* Search */}
        <div className="px-4 py-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for chats..."
              className="w-full px-4 py-2 bg-gray-50 rounded-lg"
            />
            <span className="absolute right-3 top-2 text-gray-400">⌘K</span>
          </div>
        </div>

        {/* Main Menu */}
        <div className="px-2 py-4">
          {sidebarItems.map((item, index) => (
            <div key={index} className="flex items-center px-2 py-2 rounded hover:bg-gray-100">
              <span>{item.icon}</span>
              <span className="ml-2">{item.label}</span>
              <span className="ml-auto text-gray-500">⌘{item.count}</span>
            </div>
          ))}
        </div>

        {/* Pinned Section */}
        <div className="px-4 mt-4">
          <div className="text-xs font-medium text-gray-500 mb-2">PINNED</div>
          {pinnedChats.map((chat, index) => (
            <div key={index} className="py-2 text-sm hover:bg-gray-100 rounded px-2">
              {chat}
            </div>
          ))}
        </div>

        {/* Chat History */}
        <div className="px-4 mt-4 flex-1 overflow-y-auto">
          <div className="text-xs font-medium text-gray-500 mb-2">CHAT HISTORY</div>
          {chatHistory.map((chat, index) => (
            <div key={index} className="py-2 text-sm hover:bg-gray-100 rounded px-2">
              {chat}
            </div>
          ))}
        </div>

        {/* New Chat Button */}
        <div className="p-4">
          <button className="w-full bg-blue-500 text-white rounded-lg py-2 px-4 flex items-center justify-center gap-2">
            <span>+</span> Start new chat
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>Lorem ipsum dolor sit amet conectur</span>
            <span className="px-2 py-1 rounded bg-gray-100 text-sm">GPT-4</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-1 rounded-lg bg-blue-500 text-white">+ New Chat</button>
            <Settings size={16} className="text-gray-500" />
            <Copy size={16} className="text-gray-500" />
            <Maximize2 size={16} className="text-gray-500" />
            <Grid size={16} className="text-gray-500" />
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* User Message */}
          <div className="flex gap-4 mb-6">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium">Mauro Sicard</span>
                <span className="text-sm text-gray-500">2:45 PM</span>
              </div>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur tincidunt bibendum gravida phasellus sed dignissim id tempus ridiculus
              </p>
            </div>
          </div>

          {/* Assistant Message */}
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium">LanguageGUI</span>
                <span className="text-sm text-gray-500">2:46 PM</span>
              </div>
              <p className="text-gray-700 mb-2">
                Lorem ipsum dolor sit amet ele senectus do eiusmod tincidunt bibendum gravida phasellus sed dignissim id tempus ridiculus
              </p>
              <div className="flex items-center gap-4">
                <button className="text-blue-500 text-sm flex items-center gap-1">
                  🔍 Fact check
                </button>
                <button className="text-gray-500 text-sm">Share</button>
                <span className="ml-auto text-sm text-gray-500">32 tokens</span>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="How can I help you?"
              className="w-full p-4 pr-32 rounded-lg border focus:outline-none focus:border-blue-500"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded">
                <Copy size={16} className="text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <Grid size={16} className="text-gray-500" />
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;