import { useState, useEffect } from "react";
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import Benefits from "../components/Benefits";
import Investment from "../components/Investments";
import ChatBox from "../components/ChatBox";

const images = [
  "/test.webp",
  "/carousel2.webp",
  "/carousel3.webp",
];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image Transition */}
      <div className="relative w-full h-[90vh] overflow-hidden flex flex-col items-center justify-center text-center px-6">
        {/* Background Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${image})`,
              opacity: index === currentImage ? 1 : 0,
            }}
          ></div>
        ))}

        {/* Static Text */}
        <div className="relative z-10">
          <p className="text-white text-3xl md:text-4xl font-bold max-w-3xl">
            Sustaining Ghana with clean energy, <br /> conservation, and river restoration.
          </p>

          {/* Section Below Hero Text */}
       

        </div>
      </div>

      {/* Content Sections */}
      <div className="flex-grow">
        <Benefits />
      </div>
      <Investment />

      {/* Floating Chatbox */}
      <ChatBox />
    </div>
  );
}

export default Home;
