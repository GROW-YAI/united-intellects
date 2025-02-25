import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";
import { io } from "socket.io-client";

// ✅ Replace with your actual backend URL
const socket = io("https://your-backend-url.com", {
  withCredentials: true
});

function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("previousMessages", (messages) => setChat(messages));
    socket.on("receiveMessage", (data) => setChat((prevChat) => [...prevChat, data]));

    return () => {
      socket.off("previousMessages");
      socket.off("receiveMessage");
    };
  }, []);

  const handleSendMessage = () => {
    if (!message) return;
    socket.emit("sendMessage", { sender: "User", content: message });
    setMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end">
      <motion.button 
        onClick={() => setIsOpen(!isOpen)} 
        className="bg-green-500 p-4 rounded-full shadow-xl flex items-center justify-center"
      >
        <FaComments className="text-2xl" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 20 }} 
            className="bg-white p-4 rounded-lg shadow-xl w-80 mt-2 border"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Chat Support</h3>
              <FaTimes className="cursor-pointer" onClick={() => setIsOpen(false)} />
            </div>
            <div className="max-h-48 overflow-y-auto mt-2 border p-2 rounded bg-gray-100 shadow-inner">
              {chat.map((msg, index) => (
                <motion.div 
                  key={index} 
                  className={`p-2 my-1 rounded-xl max-w-[75%] ${msg.sender === "User" ? "bg-green-500 text-white" : "bg-gray-300"}`}
                >
                  {msg.message}
                </motion.div>
              ))}
            </div>
            <textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              className="w-full p-2 border rounded mt-2"
            ></textarea>
            <motion.button 
              onClick={handleSendMessage} 
              className="bg-green-500 text-white p-2 rounded w-full mt-3 flex items-center justify-center"
            >
              <FaPaperPlane className="mr-2" /> Send
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ChatBox;
