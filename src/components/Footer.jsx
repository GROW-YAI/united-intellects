import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-yellow-500 text-white py-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">About Us</h2>
          <p className="text-sm">
            United Intellects is dedicated to fostering knowledge, innovation, and
            community growth. Join us in making a difference!
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Features", path: "/features" },
              { name: "Testimonials", path: "/testimonials" },
              { name: "Contact", path: "/contact" }
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="relative block py-1 transition duration-300 hover:text-gray-200"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-bold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100091933808235"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-amber-400 transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-amber-400 transition duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-amber-400 transition duration-300">
              <FaInstagram size={24} />
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