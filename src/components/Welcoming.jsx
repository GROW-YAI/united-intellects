import { useState, useEffect } from "react";
import { FaUserTie } from "react-icons/fa";

const Welcoming = ({ 
  title = "Sustaining Ghana with clean energy, conservation, and river restoration.",
  showHeadmaster = true 
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/test.webp",
    "/carousel2.webp", 
    "/carousel3.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
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
        />
      ))}

      {/* Static Text */}
      <div className="relative z-10 mb-8">
        <p className="text-white text-3xl md:text-4xl font-bold max-w-3xl">
          {title}
        </p>
      </div>

    </div>
  );
};

export default Welcoming;