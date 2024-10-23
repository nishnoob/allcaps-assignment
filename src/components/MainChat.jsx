import { Settings, Copy, Maximize2, Grid, RotateCcw, Share2, Bookmark, MoreVertical, PanelRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import GptSheet from './Sheet';

const MainChat = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showSheet, setShowSheet] = useState(false);
  const aMsgRef = useRef(null);

  const handleMouseDown = () => {
    console.log("MD")
  }

  const handleMouseUp = (event) => {
    const selectedText = window.getSelection().toString();
    
    if (selectedText) {
      const x = event.pageX;
      const y = event.pageY;
      setPosition({ x,y})
      setShowTooltip(true);
      console.log('Selected text:', selectedText);
    } else {
      setPosition({ x:0, y:0 });
      setShowTooltip(false);
      console.log('No text selected');
    }
  }

  return (
    <div className='flex flex-1 shadow-sm rounded-2xl border border-border'>
      <div className="flex-1 flex flex-col bg-white relative" style={{ backgroundImage: "url(./bg-chat.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} onMouseUp={handleMouseUp}>
        {/* Header */}
        <header className="border-b p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>Lorem ipsum dolor sit amet conectur</span>
            <span className="px-2 py-1 rounded bg-gray-100 text-sm">GPT-4</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-1 rounded-lg bg-blue-500 text-white">+ New Chat</button>
            <Settings size={16} className="text-gray-500" />
            <Copy size={16} className="text-gray-500" />
            <Maximize2 size={16} className="text-gray-500" />
            <PanelRight onClick={() => setShowSheet(!showSheet)} size={16} className="text-gray-500 cursor-pointer" />
          </div>
        </header>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* User Message */}
          <div className="flex gap-4 mb-6">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div>
              <div className="flex items-center gap-4 mb-1">
                <span className="font-medium text-xm">Mauro Sicard</span>
                <span className="text-gray-500 text-xs border-l border-[#F0F2F5] pl-3">2:45 PM</span>
              </div>
              <p className="text-[#666F8D] text-sm">
                Lorem ipsum dolor sit amet consectetur tincidunt bibendum gravida phasellus sed dignissim id tempus ridiculus
              </p>
            </div>
          </div>

          {/* Assistant Message */}
          <div className="flex gap-4 shadow-sm rounded-2xl border border-border p-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-1">
                <span className="font-medium">LanguageGUI</span>
                <span className="text-gray-500 text-xs border-l border-[#F0F2F5] pl-3">2:45 PM</span>
              </div>
              <p ref={aMsgRef} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="text-[#666F8D] mb-2 text-sm">
                Lorem ipsum dolor sit amet ele senectus do eiusmod tincidunt bibendum gravida phasellus sed dignissim id tempus ridiculus
              </p>
              <div>
                <div className="flex items-center gap-3">
                  <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                    <RotateCcw size={18} />
                  </button>
                  
                  <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                    <Copy size={18} />
                  </button>
                  
                  <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                    <Share2 size={18} />
                  </button>
                  
                  <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                    <Bookmark size={18} />
                  </button>
                  
                  <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>
              {showTooltip && (
                <div
                  style={{
                    position: 'fixed',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                  }}
                  className="flex items-center gap-4 bg-white rounded shadow px-2"
                >
                  <button className="text-blue-500 text-sm flex items-center gap-1">
                    🔍 Fact check
                  </button>
                  <button className="text-gray-500 text-sm">Share</button>
                  {/* <span className="ml-auto text-sm text-gray-500">32 tokens</span> */}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="border rounded bg-white p-4 m-4">
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
      {showSheet && <GptSheet />}
    </div>
  );
};

export default MainChat;