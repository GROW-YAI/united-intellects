import { useTranslation } from "react-i18next"; // ✅ Import useTranslation
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
  const { t } = useTranslation(); // ✅ Initialize t

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
        <div className="relative z-10 mb-8">
          <p className="text-white text-3xl md:text-4xl font-bold max-w-3xl">
            Sustaining Ghana with clean energy, <br /> conservation, and river restoration.
          </p>
        </div>

        {/* Headmaster Section */}
        <article className="relative z-10 bg-white bg-opacity-90 rounded-lg p-6 max-w-2xl mx-auto shadow-lg">
          <img
            src="/images/headmaster.jpg" // Ensure this path is correct
            alt="Headmaster of Ecole St. Pierre Claver"
            className="w-30 h-10 rounded-full mx-auto mb-4"
            loading="lazy"
          />
          <div className="divider w-16 h-1 bg-gray-300 mx-auto mb-4"></div>
          <div className="content text-center">
            <h2 id="headmaster-title" className="title text-xl font-semibold flex items-center justify-center gap-2">
              <FaUserTie className="icon" />
              {t("mot_du_proviseur")}
            </h2>
            <blockquote className="quote text-gray-700 italic mt-4">
              {t("headmaster_quote")}
            </blockquote>
            <Link
              to="mot-du-proviseur"
              className="link mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
              aria-label="Read more about the headmaster"
            >
              {t("read_more")} <span className="arrow">&rarr;</span>
            </Link>
          </div>
        </article>
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