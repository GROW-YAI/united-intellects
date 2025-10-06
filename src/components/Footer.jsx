import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { useState } from "react";

function Footer() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Ensure API URL is correctly set and remove any trailing slash
    const API_BASE_URL = (import.meta.env.VITE_BACKEND_URL || "http://localhost:5003")
        .replace(/\/$/, "");

    const handleSubscribe = async (e) => {
        e.preventDefault();

        if (!email.trim()) {
            setMessage("Please enter an email address.");
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage("Please enter a valid email address.");
            return;
        }

        setIsSubmitting(true);
        setMessage("");

        try {
            const response = await fetch(`${API_BASE_URL}/api/subscribe`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Thank you for subscribing!");
                setEmail("");
            } else {
                setMessage(data.error || "Subscription failed. Please try again.");
            }
        } catch (error) {
            console.error("Subscription Error:", error);
            setMessage("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer className="bg-yellow-500 text-white py-6 shadow-inner">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* About Section */}
                <div>
                    <h2 className="text-base font-bold mb-2">About Us</h2>
                    <p className="text-sm">
                        United Intellects is committed to delivering high-quality content and updates. Stay connected with us!
                    </p>
                </div>

                {/* Subscribe Section
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
                </div> */}

                {/* Social Media Links */}
                <div>
                    <h2 className="text-base font-bold mb-2">Follow Us</h2>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/UnitedIntellects" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook className="text-white hover:text-gray-200 text-2xl" />
                        </a>
                        <a href="https://twitter.com/UnitedIntellects" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter className="text-white hover:text-gray-200 text-2xl" />
                        </a>
                        <a href="https://www.instagram.com/UnitedIntellects" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="text-white hover:text-gray-200 text-2xl" />
                        </a>
                        <a href="https://www.tiktok.com/@UnitedIntellects" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <FaTiktok className="text-white hover:text-gray-200 text-2xl" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-6 text-center text-xs border-t border-yellow-400 pt-2">
                &copy; {new Date().getFullYear()} United Intellects. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
