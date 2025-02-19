import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  {
    src: "public/carousel1.webp",
    caption: "Restoring Ghana's Rivers for a Sustainable Future",
  },
  {
    src: "public/carousel2.webp",
    caption: "Harnessing Clean Energy for a Greener Tomorrow",
  },
  {
    src: "public/carousel3.webp",
    caption: "Empowering Communities Through Conservation",
  },
];

function Home() {
  return (
    <div className="w-full h-screen">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={4000}
        stopOnHover={false}
        showStatus={false}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-screen">
            <img
              src={image.src}
              alt={image.caption}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error("Failed to load image:", image.src);
                e.target.src = "/assets/fallback.jpg"; // Optional fallback image
              }}
            />
            <p className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-5xl font-extrabold bg-black bg-opacity-50 p-6 text-center">
              {image.caption}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;
