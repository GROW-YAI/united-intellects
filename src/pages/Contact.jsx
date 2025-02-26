import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle form submission using Formspree
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/xpwqgeyb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send the message. Please try again.");
      }

      toast.success("Message sent successfully!");
      setFormData({ fullName: "", email: "", phone: "", address: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

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
              <input key={field} name={field} type="text" placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]} onChange={handleChange} className="block w-full p-3 border rounded-md focus:border-green-500" required />
            ))}

            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}
              className="block w-full p-3 border rounded-md focus:border-green-500 h-32" required></textarea>

            <button type="submit" className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all disabled:bg-gray-400"
              disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
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
