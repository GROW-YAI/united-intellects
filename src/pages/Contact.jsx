import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      to_name: "United-Intellects Admin",
      from_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        templateParams,
        "your_public_key" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          alert("Message sent successfully!");
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            address: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setLoading(false);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gray-50 p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-6xl w-full flex flex-col md:flex-row">
        <motion.div 
          className="md:w-1/2 pr-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-green-800 mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="fullName" type="text" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="block w-full p-3 border rounded-md focus:border-green-500" required />
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="block w-full p-3 border rounded-md focus:border-green-500" required />
            <input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="block w-full p-3 border rounded-md focus:border-green-500" required />
            <input name="address" type="text" placeholder="Address" value={formData.address} onChange={handleChange} className="block w-full p-3 border rounded-md focus:border-green-500" required />
            <input name="subject" type="text" placeholder="Subject" value={formData.subject} onChange={handleChange} className="block w-full p-3 border rounded-md focus:border-green-500" required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="block w-full p-3 border rounded-md focus:border-green-500 h-32" required></textarea>

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
