import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
  });

  // Handle contact form submission
  const handleContactFormSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, message } = formData;

    if (!fullName || !email || !message) {
      toast.error("Full name, email, and message are required.");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send the message. Please try again.");
      }

      toast.success("Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        subject: "",
        message: "",
      });
      setShowContactForm(false);
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "Failed to send the message. Please try again.");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 p-4 rounded-full shadow-xl flex items-center justify-center"
      >
        <FaComments className="text-2xl text-white" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white p-4 rounded-lg shadow-xl w-80 mt-2 border border-gray-300"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Chat Support</h3>
              <FaTimes
                className="cursor-pointer text-gray-600"
                onClick={() => {
                  setIsOpen(false);
                  setShowContactForm(false);
                }}
              />
            </div>

            {!showContactForm ? (
              <>
                <div className="max-h-48 overflow-y-auto mt-2 border p-2 rounded bg-gray-100 shadow-inner">
                  <p className="text-gray-600">Contact support for assistance.</p>
                </div>
                <motion.button
                  onClick={() => setShowContactForm(true)}
                  className="bg-blue-500 text-white p-2 rounded w-full mt-2 flex items-center justify-center"
                >
                  Contact Support
                </motion.button>
              </>
            ) : (
              <form onSubmit={handleContactFormSubmit} className="space-y-2">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-2 border rounded resize-none"
                  required
                ></textarea>
                <motion.button
                  type="submit"
                  className="bg-green-500 text-white p-2 rounded w-full mt-2 flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" /> Submit
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="bg-gray-500 text-white p-2 rounded w-full mt-2 flex items-center justify-center"
                >
                  Back to Chat
                </motion.button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <ToastContainer />
    </div>
  );
}

export default ChatBox;