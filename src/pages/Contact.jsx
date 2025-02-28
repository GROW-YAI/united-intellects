import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
  });

  // Get Backend URL from .env
  const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://united-intellects-backend-5pgx.vercel.app/";

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form inputs
  const validateForm = () => {
    const { fullName, email, message } = formData;

    if (!fullName || !email || !message) {
      setError("Full name, email, and message are required.");
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    // Validate phone number (if provided)
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send the message. Please try again.");
      }

      toast.success("Message sent successfully!");
      setIsSubmitted(true);
      setFormData({ fullName: "", email: "", phone: "", address: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      if (error.message.includes("Failed to fetch")) {
        setError("Network error. Please check your internet connection.");
      } else {
        setError(error.message || "Failed to send the message. Please try again.");
      }
      toast.error(error.message || "Failed to send the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Render a success message if the form is submitted
  if (isSubmitted) {
    return (
      <motion.div className="min-h-screen flex items-center justify-center bg-gray-50 p-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <div className="bg-white shadow-lg rounded-lg p-10 max-w-6xl w-full text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-6">Thank You!</h2>
          <p className="text-lg text-gray-700">Your message has been sent successfully. We'll get back to you shortly.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div className="min-h-screen flex items-center justify-center bg-gray-50 p-10"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>

      <div className="bg-white shadow-lg rounded-lg p-10 max-w-6xl w-full flex flex-col md:flex-row">
        {/* Contact Form */}
        <motion.div className="md:w-1/2 pr-8" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl font-bold text-green-800 mb-6">Get in Touch</h2>
          {error && <p className="text-red-600 mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {["fullName", "email", "phone", "address", "subject"].map((field) => (
              <input
                key={field}
                name={field}
                type="text"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                className="block w-full p-3 border rounded-md focus:border-green-500"
                required
                aria-required="true"
                aria-label={field.charAt(0).toUpperCase() + field.slice(1)}
              />
            ))}

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="block w-full p-3 border rounded-md focus:border-green-500 h-32"
              required
              aria-required="true"
              aria-label="Your Message"
            ></textarea>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all disabled:bg-gray-400 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            <button
              type="button"
              onClick={() => setFormData({ fullName: "", email: "", phone: "", address: "", subject: "", message: "" })}
              className="w-full px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all mt-4"
            >
              Reset Form
            </button>
          </form>
        </motion.div>

        {/* Contact Image */}
        <motion.div className="md:w-1/2 flex items-center justify-center" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <img src="/contact.webp" alt="Contact" className="w-full rounded-lg shadow-md" />
        </motion.div>
      </div>

      <ToastContainer />
    </motion.div>
  );
};

export default Contact;