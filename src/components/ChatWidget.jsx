import { useState, useEffect, useRef } from "react";
import axios from "axios";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const typingIndicator = { sender: "bot", text: "Typing..." };
    setMessages((prev) => [...prev, typingIndicator]);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/chatbot`, {
        message: input,
      });

      const botReply = res.data.reply;

      setTimeout(() => {
        setMessages((prev) =>
          prev
            .filter((msg) => msg.text !== "Typing...")
            .concat({ sender: "bot", text: botReply })
        );
      }, 1500);
    } catch (err) {
      console.error("Chatbot Error:", err);
      setTimeout(() => {
        setMessages((prev) =>
          prev
            .filter((msg) => msg.text !== "Typing...")
            .concat({ sender: "bot", text: "Something went wrong." })
        );
      }, 1500);
    }
  };

  return (
    <>
      {/* Floating Toggle Button (UNCHANGED) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-[60px] bg-[#F7B53D] text-white p-4 rounded-full shadow-lg hover:bg-accent-dark cursor-pointer transition z-50"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="8" y="16" width="48" height="36" rx="8" fill="black" />
          <circle cx="22" cy="34" r="4" fill="white" />
          <circle cx="32" cy="34" r="4" fill="white" />
          <circle cx="42" cy="34" r="4" fill="white" />
          <path d="M32 4L36 12H28L32 4Z" fill="black" />
          <rect x="18" y="52" width="28" height="6" rx="3" fill="black" />
        </svg>
      </button>

      {/* Chat Widget Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-[100px] w-80 h-96 flex flex-col bg-white border border-gray-300 rounded-xl shadow-xl overflow-hidden z-50">
          {/* Header with Title + Close Button */}
          <div className="bg-[#F7B53D] text-white px-4 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-base">
              <span>🤖</span>
              <span className="text-black">Chat with AI Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-semibold hover:scale-110 transition cursor-pointer"
              title="Close"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 px-3 py-2 overflow-y-auto space-y-2 bg-gray-50 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-[#F7B53D] text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex items-center border-t border-gray-300 p-2 bg-white">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F7B53D]"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="ml-2 bg-[#F7B53D] hover:bg-yellow-500 text-white px-3 py-2 rounded-lg transition"
              onClick={sendMessage}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
