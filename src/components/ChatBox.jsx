import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane, FaSpinner } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
  
    setIsLoading(true); // Set loading to true when the form is being submitted
  
    try {
      const response = await fetch(`https://united-intellects-backend-5pgx.vercel.app/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      // Ensure response is OK before parsing
      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }
  
      // Handle empty or invalid JSON response
      const responseData = await response.text();
      const jsonResponse = responseData ? JSON.parse(responseData) : {};
  
      toast.success(jsonResponse.message || "Message sent successfully!");
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
    } finally {
      setIsLoading(false); // Set loading to false when the submission is complete
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
                {["fullName", "email", "phone", "address", "subject", "message"].map((field) => (
                  <input
                    key={field}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                    required={field === "fullName" || field === "email" || field === "message"}
                  />
                ))}

                <motion.button
                  type="submit"
                  className="bg-green-500 text-white p-2 rounded w-full mt-2 flex items-center justify-center"
                  disabled={isLoading} // Disable the button when loading
                >
                  {isLoading ? (
                    <FaSpinner className="animate-spin mr-2" />
                  ) : (
                    <FaPaperPlane className="mr-2" />
                  )}
                  {isLoading ? "Submitting..." : "Submit"}
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