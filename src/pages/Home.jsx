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
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Background Image Transition */}
      <div style={{ position: "relative", width: "100%", height: "80vh", overflow: "hidden" }}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              inset: "0",
              transition: "opacity 1s ease-in-out",
              opacity: index === currentImage ? 1 : 0,
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              zIndex: index === currentImage ? 10 : 0,
            }}
          ></div>
        ))}

        {/* Overlay Caption */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "1.5rem",
            textAlign: "center",
          }}
        >
          <p style={{ color: "white", fontSize: "2rem", fontWeight: "bold" }}>
            {[
              "Restoring Ghana's Rivers for a Sustainable Future",
              "Harnessing Clean Energy for a Greener Tomorrow",
              "Empowering Communities Through Conservation",
            ][currentImage]}
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div style={{ flexGrow: 1 }}>
        <Benefits />
      </div>
      <Investment />
    </div>
  );
}

export default Home;
