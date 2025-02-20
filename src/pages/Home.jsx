import { useState, useEffect } from "react";
import Benefits from "../components/Benefits";
import Investment from "../components/Investments";

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
      {/* Background Image Transition */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full min-h-[80vh] transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}

        {/* Debugging Fallback */}
        <img
          src={images[currentImage]}
          alt="Fallback"
          className="absolute inset-0 w-full h-full object-cover hidden"
          onError={(e) => console.error("Image failed to load:", e.target.src)}
        />

        {/* Overlay Caption */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6 text-center">
          <p className="text-white text-3xl md:text-5xl font-extrabold">
            {[
              "Restoring Ghana's Rivers for a Sustainable Future",
              "Harnessing Clean Energy for a Greener Tomorrow",
              "Empowering Communities Through Conservation",
            ][currentImage]}
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="flex-grow">
        <Benefits />
      </div>
      <Investment />
    </div>
  );
}

export default Home;
