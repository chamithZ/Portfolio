import React, { useState, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';

function ChatBotIcon({ onClick }) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    // Show the tooltip for a brief interval when the page initially loads
    const timer = setTimeout(() => setIsTooltipVisible(true), 1000); // Show after 1 second
    const hideTimer = setTimeout(() => setIsTooltipVisible(false), 5000); // Hide after 5 seconds
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div
      className="fixed bottom-5 right-5 flex items-center justify-center group cursor-pointer z-10"
      onClick={onClick}
    >
      {/* Tooltip */}
      <div
        className={`absolute bottom-5 right-[calc(100%+10px)] px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg flex items-center transition-opacity ${
          isTooltipVisible ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        Chat with Assistant Bot
        <div className="absolute top-1/2 right-[-6px] transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-800"></div>
      </div>
      <div className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 via-blue-400 to-blue-500 animate-blue-glow"></div>
      <div className="relative bg-[#0a192f] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-10">
        <FaRobot size={24} />
      </div>
    </div>
  );
}

export default ChatBotIcon;
