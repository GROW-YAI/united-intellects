import { useTranslation } from "react-i18next"; // ✅ Import useTranslation
import { Link } from "react-router-dom";
import Welcoming from "../components/Welcoming";
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Centralized Welcoming Component */}
      <Welcoming 
        title="Sustaining Ghana with clean energy, conservation, and river restoration."
        showHeadmaster={true}
      />

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