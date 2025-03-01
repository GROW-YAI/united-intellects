import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-yellow-500 text-white py-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* About Us Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">About Us</h2>
          <p className="text-sm">
            United Intellects is dedicated to fostering knowledge, innovation, and
            community growth. Join us in making a difference!
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-bold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61573820306227"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://x.com/unitedintellec"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/unitedintellect/?next=%2F&hl=en-"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@united_intellect?lang=en-"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition duration-300"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 text-center text-sm border-t border-yellow-400 pt-4">
        &copy; {new Date().getFullYear()} United Intellects. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
