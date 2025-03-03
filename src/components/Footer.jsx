import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // Success/Error message
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state

  const API_BASE_URL = "https://united-intellects-backend-5pgx.vercel.app"; // Backend URL

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/subscribe`, {
        method: "POST", // Ensure this is POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail(""); // Clear input
      } else {
        setMessage(data.message || "Subscription failed. Try again.");
      }
    } catch (error) {
      setMessage("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-yellow-500 text-white py-6 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Us Section */}
        <div>
          <h2 className="text-base font-bold mb-2">About Us</h2>
          <p className="text-xs">
            United Intellects is dedicated to fostering knowledge, innovation, and
            community growth. Join us in making a difference!
          </p>
        </div>

        {/* Subscription Section */}
        <div>
          <h2 className="text-base font-bold mb-2">Subscribe to Our Newsletter</h2>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 flex-1"
              required
            />
            <button
              type="submit"
              className="bg-white text-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-white transition disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {message && (
            <p className={`text-xs mt-2 ${message.includes("Thank you") ? "text-green-400" : "text-red-400"}`}>
              {message}
            </p>
          )}
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-base font-bold mb-2">Follow Us</h2>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/profile.php?id=61573820306227"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition duration-300"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://x.com/unitedintellec"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/unitedintellect/?next=%2F&hl=en-"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@united_intellect?lang=en-"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition duration-300"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 text-center text-xs border-t border-yellow-400 pt-2">
        &copy; {new Date().getFullYear()} United Intellects. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;