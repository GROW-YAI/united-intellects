import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../public/logo.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [loading, setLoading] = useState(false); // State for loading spinner
  const navigate = useNavigate(); // React Router navigation

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    setLoading(true); // Show spinner
    setTimeout(() => {
      navigate(path === "/home" ? "/" : path); // Fix home navigation
      setLoading(false); // Hide spinner after navigation
    }, 1000); // Simulate loading delay
  };

  return (
    <>
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative">
            <img src={logo} alt="Loading Logo" className="h-20 w-20 animate-pulse rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      )}

      <nav className="bg-yellow-500 text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="United Intellects Logo" className="h-12 w-12 rounded-full" />
          </Link>

          {/* Hamburger Menu Icon (Mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-end space-x-16">
            {["Home", "About", "Features", "Testimonials", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleLinkClick(`/${item.toLowerCase()}`)}
                className="relative hover:text-gray-400 transition-colors duration-300 group text-lg"
                disabled={loading} // Disable clicks while loading
              >
                {item}
                <span className="absolute left-0 bottom-0 h-1.5 bg-gray-400 w-0 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="md:hidden mt-4">
            {["Home", "About", "Features", "Testimonials", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  toggleMenu();
                  handleLinkClick(`/${item.toLowerCase()}`);
                }}
                className="block py-3 px-4 hover:bg-gray-800 hover:text-gray-400 transition-colors duration-300 text-lg w-full text-left"
                disabled={loading}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
