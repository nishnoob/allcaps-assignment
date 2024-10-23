import React from 'react';
import Sidebar from './Sidebar';
import MainChat from './MainChat';
import GptSheet from './Sheet';

const ChatInterface = () => {
  return (
    <div className="p-2 flex h-screen bg-background-2">
      <Sidebar />
      <MainChat />
    </div>
  );
};

export default ChatInterface;