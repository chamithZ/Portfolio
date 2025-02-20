import React, { useState, useEffect } from 'react';
import LLMService from '../services/LLMService';
import { FaTimes } from 'react-icons/fa';
import BotIcon from '../assets/Bot.png';
import LiveBot from '../assets/BotIcon.png';


const llmService = new LLMService(
  process.env.REACT_APP_LLM_API_URL,
  process.env.REACT_APP_LLM_API_KEY
);

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setMessages([{ sender: 'bot', text: 'Hi! I’m Chamith’s portfolio assistant. How can I help you today?' }]);
    }

    // Hide tooltip after 5 seconds
    const tooltipTimeout = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(tooltipTimeout);
  }, [isChatOpen]);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) {
      console.error('Invalid input: Must be a non-empty string.');
      return;
    }

    const userMessage = { sender: 'user', text: userInput };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setUserInput('');
    setIsLoading(true);

    try {
      const response = await llmService.generateRecommendations(` ${userInput.trim()}`);
      if (response.error) {
        console.error('LLM API Error:', response.error.message);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: 'An error occurred while getting a response.' },
        ]);
      } else {
        const botReply = response.choices?.[0]?.message?.content || 'No response.';
        const formattedReply = formatBoldText(botReply); // Apply formatting here
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: formattedReply },
        ]);
      }
    } catch (error) {
      console.error('Request failed:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: 'An error occurred. Please try again later.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatBoldText = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };
  
  const renderedMessage = (msg) => {
    return (
      <div className={`relative max-w-[70%] p-4 shadow-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white rounded-l-lg rounded-br-lg self-end' : 'bg-gray-700 text-[#ccd6f6] rounded-r-lg rounded-bl-lg self-start'}`}>
        {msg.text}
        {msg.sender === 'bot' && (
          <div
            className="absolute top-0 left-[-5px] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[5px] border-r-gray-700"
          ></div>
        )}
      </div>
    );
  };

  const renderMessage = (msg) => {
    return (
      <div
        className={`relative max-w-[70%] p-4 shadow-lg ${
          msg.sender === 'user'
            ? 'bg-blue-500 text-white rounded-l-lg rounded-br-lg self-end'
            : 'bg-gray-700 text-[#ccd6f6] rounded-r-lg rounded-bl-lg self-start'
        }`}
      >
        {/* Render bold text correctly */}
        <div
          dangerouslySetInnerHTML={{
            __html: formatBoldText(msg.text), // Apply bold formatting to the message text
          }}
        />
        
        {msg.sender === 'bot' && (
          <div
              className="absolute top-0 left-[-5px] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[5px] border-r-gray-700"
          ></div>
        )}
      </div>
    );
  };
  
  return (
    <div>
      {!isChatOpen && (
        <div
          className="fixed bottom-5 right-5 flex items-center justify-center group cursor-pointer z-10"
          onClick={() => setIsChatOpen(true)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`absolute bottom-5 right-[calc(100%+10px)] mr-4 mb-2 px-3 py-2 bg-gray-800 text-white text-lg rounded-lg shadow-lg max-w-xs whitespace-normal ${
              showTooltip ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transition-opacity'
            }`}
            style={{ width: 'auto', minWidth: '160px' }}
          >
            Hi!👋 Let's Chat
            <div className="absolute top-1/2 right-[-6px] transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-800"></div>
          </div>
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 via-blue-400 to-blue-500 animate-blue-glow"></div>
          <div className="relative bg-[#0a192f] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-10">
            <img src={BotIcon} alt="Bot Icon" className="w-7 h-7" />
          </div>
        </div>
      )}
      {isChatOpen && (
        <div className="fixed bottom-5 right-5 w-[95%] max-w-md md:max-w-lg lg:max-w-2xl h-[90%] max-h-[500px] bg-[#1a2b3c] rounded-2xl shadow-lg flex flex-col z-10">
          <div className="bg-[#4a90e2] p-4 text-white flex justify-between items-center rounded-t-2xl">
            <span className="font-bold">Chat with Me</span>
            <button
              className="text-white hover:bg-[#3b7dc9] p-2 rounded-full transition-colors"
              onClick={() => setIsChatOpen(false)}
            >
              <FaTimes size={18} />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4 text-[#ccd6f6]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`relative mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="flex items-start mr-3">
                    <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                      <img src={LiveBot} alt="Bot Icon" className="w-8 h-8 rounded-full" />
                    </div>
                  </div>
                )}
                {renderMessage(msg)}
                <div
                  className={`absolute top-0 ${
                    msg.sender === 'user'
                      ? 'right-0 transform translate-x-[-100%]'
                      : 'left-0 transform translate-x-[-100%]'
                  } w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent`}
                ></div>
              </div>
            ))}
            {isLoading && (
              <div className="relative mb-4 flex justify-start">
                <div className="flex items-start mr-3">
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                    <img src={LiveBot} alt="Bot Icon" className="w-8 h-8 rounded-full" />
                  </div>
                </div>
                <div className="relative max-w-[70%] p-4 shadow-lg bg-gray-700 text-[#ccd6f6] rounded-r-lg rounded-bl-lg">
                  Thinking...
                  <div className="absolute top-0 left-0 transform translate-x-[-100%] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[5px] border-r-gray-700"></div>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 bg-[#1e293b] flex items-center rounded-b-2xl">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-2 rounded-lg border-2 border-[#4a90e2] bg-[#0a192f] text-[#ccd6f6] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleSendMessage}
              className="ml-4 bg-[#4a90e2] text-white px-4 py-2 rounded-lg hover:bg-blue-400"
              disabled={isLoading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatInterface;
