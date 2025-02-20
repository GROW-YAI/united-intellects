import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Message sent successfully!");
    }, 2000); // Simulate request delay
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gray-50 p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-6xl w-full flex flex-col md:flex-row">
        {/* Contact Form */}
        <motion.div 
          className="md:w-1/2 pr-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-green-800 mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Full Name" className="block w-full p-3 border rounded-md focus:border-green-500" required />
            <input type="email" placeholder="Email" className="block w-full p-3 border rounded-md focus:border-green-500" required />
            <input type="tel" placeholder="Phone Number" className="block w-full p-3 border rounded-md focus:border-green-500" required />
            <input type="text" placeholder="Address" className="block w-full p-3 border rounded-md focus:border-green-500" required />
            <input type="text" placeholder="Subject" className="block w-full p-3 border rounded-md focus:border-green-500" required />
            <textarea placeholder="Your Message" className="block w-full p-3 border rounded-md focus:border-green-500 h-32" required></textarea>

            {/* Submit Button with Spinner */}
            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
              disabled={loading}
            >
              {loading ? (
                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>

        {/* Contact Image */}
        <motion.div 
          className="md:w-1/2 flex items-center justify-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/contact.webp" alt="Contact" className="w-full rounded-lg shadow-md" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
