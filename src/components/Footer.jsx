import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-yellow-500 text-white p-6 mt-8 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Copyright Section */}
        <p className="text-sm">&copy; {new Date().getFullYear()} United Intellects. All Rights Reserved.</p>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-amber-400 transition duration-300">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-amber-400 transition duration-300">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-amber-400 transition duration-300">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="hover:text-amber-400 transition duration-300">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
