import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Benefits from "../components/Benefits";

const images = [
  { src: "/carousel1.webp", caption: "Restoring Ghana's Rivers for a Sustainable Future" },
  { src: "/carousel2.webp", caption: "Harnessing Clean Energy for a Greener Tomorrow" },
  { src: "/carousel3.webp", caption: "Empowering Communities Through Conservation" },
];

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={4000}
          stopOnHover={false}
          showStatus={false}
        >
          {images.map((image, index) => (
            <div key={index} className="relative w-full">
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-[80vh] object-cover"
                onError={(e) => {
                  console.error("Failed to load image:", image.src);
                  e.target.src = "/fallback.jpg"; // Make sure fallback.jpg exists in public folder
                }}
              />
              <p className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-5xl font-extrabold bg-black bg-opacity-50 p-6 text-center">
                {image.caption}
              </p>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Benefits Section */}
      <div className="flex-grow">
        <Benefits />
      </div>
    </div>
  );
}

export default Home;
