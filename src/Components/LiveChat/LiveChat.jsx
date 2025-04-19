import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to Rentify Tech?", isUser: false, time: new Date() }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    // Add user message
    const newUserMessage = { text: message, isUser: true, time: new Date() };
    setMessages([...messages, newUserMessage]);
    setMessage('');
    
    // Simulate agent typing
    setIsTyping(true);
    
    // Simulate agent response after delay
    setTimeout(() => {
      const responseMessages = [
        "Thanks for your message! Our team will get back to you soon.",
        "Hi there! How can I assist you today?",
        "I understand your concern. Let me help you with that.",
        "Can u give your email address so we can contact you?ß",
        "That's a great question! Here's what you need to know..."
      ];
      
      const randomResponse = responseMessages[Math.floor(Math.random() * responseMessages.length)];
      const newAgentMessage = { text: randomResponse, isUser: false, time: new Date() };
      
      setMessages(prev => [...prev, newAgentMessage]);
      setIsTyping(false);
    }, 1000);
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Button */}
      {!isOpen && (
        <button 
          onClick={toggleChat}
          className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl flex flex-col w-80 md:w-96 h-96 border border-gray-200">
          {/* Header */}
          <div className="bg-green-500 text-white px-4 py-3 flex justify-between items-center rounded-t-lg">
            <div className="flex items-center space-x-2">
              <User size={20} />
              <h3 className="font-medium">Live Support</h3>
            </div>
            <button onClick={toggleChat} className="text-white hover:bg-green-600 rounded-full p-1">
              <X size={20} />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-4 flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-3/4 px-4 py-2 rounded-lg ${
                    msg.isUser 
                      ? 'bg-green-500 text-white rounded-tr-none' 
                      : 'bg-gray-200 text-gray-800 rounded-tl-none'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.isUser ? 'text-green-100' : 'text-gray-500'}`}>
                    {formatTime(msg.time)}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg rounded-tl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <div className="px-4 py-3 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 py-2 px-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button 
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className={`bg-green-500 text-white p-2 rounded-full ${
                  message.trim() ? 'hover:bg-green-600' : 'opacity-50 cursor-not-allowed'
                }`}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}