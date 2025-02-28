import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cartoonImage from "../../public/cartoon-image.webp"; // Replace with actual image path

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
  });

  const BACKEND_URL = "https://united-intellects-backend-5pgx.vercel.app";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { fullName, email, message } = formData;
    if (!fullName || !email || !message) {
      setError("Full name, email, and message are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (!validateForm()) {
      setLoading(false);
      return;
    }
    try {
      const response = await fetch(`${BACKEND_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to send the message. Try again.");
      toast.success("Message sent successfully!");
      setFormData({ fullName: "", email: "", phone: "", address: "", subject: "", message: "" });
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div className="min-h-screen flex items-center justify-center bg-gray-50 p-10">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-6xl w-full flex flex-col md:flex-row">
        {/* Form Section */}
        <motion.div
          className="md:w-1/2 pr-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-green-800 mb-6">Get in Touch</h2>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            animate={loading ? { rotate: [0, 5, -5, 0] } : { rotate: 0 }}
            transition={{ duration: 0.6, repeat: loading ? Infinity : 0 }}
          >
            {Object.keys(formData).map((field) => (
              <input
                key={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                className="block w-full p-3 border rounded-md focus:border-green-500"
                required
              />
            ))}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-yellow-500 transition-all disabled:bg-gray-400"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </motion.div>
        
        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={cartoonImage} alt="Cartoon Contact" className="w-full max-w-md" />
        </motion.div>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default Contact;
