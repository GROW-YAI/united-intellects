import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";
import axios from "axios";

function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = async () => {
    if (!message) return alert("Please enter a message.");

    // Add user message to chat
    setChat((prevChat) => [...prevChat, { role: "user", content: message }]);

    try {
      const res = await axios.post("http://localhost:5000/chat", { message });
      const botMessage = res.data.reply;

      // Add AI response to chat
      setChat((prevChat) => [...prevChat, { role: "bot", content: botMessage }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setChat((prevChat) => [...prevChat, { role: "bot", content: "Error fetching response" }]);
    }

    setMessage(""); // Clear input field
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end">
      {/* Floating Chat Button */}
      <motion.button
        onClick={toggleChat}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [-5, 0, -5] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FaComments className="text-2xl" />
      </motion.button>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-4 rounded-lg shadow-xl w-80 mt-2 border border-gray-300"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-700">Chat Support</h3>
              <FaTimes className="text-gray-500 cursor-pointer hover:text-gray-700 transition" onClick={toggleChat} />
            </div>

            {/* Chat Messages */}
            <div className="max-h-48 overflow-y-auto mt-2 border p-2 rounded bg-gray-100 shadow-inner space-y-2">
              {chat.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`p-2 my-1 rounded-xl text-sm max-w-[75%] ${
                    msg.role === "user"
                      ? "bg-green-500 text-white self-end ml-auto"
                      : "bg-gray-300 text-gray-900 self-start mr-auto"
                  }`}
                >
                  {msg.content}
                </motion.div>
              ))}
            </div>

            {/* Input Field */}
            <motion.textarea
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border rounded mt-2 h-12 focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow"
              whileFocus={{ scale: 1.02 }}
            />

            {/* Send Button */}
            <motion.button
              onClick={handleSendMessage}
              className="bg-green-500 text-white p-2 rounded w-full mt-3 flex items-center justify-center hover:bg-green-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
