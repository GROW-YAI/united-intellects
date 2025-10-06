import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop/>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer className="mt-auto" />
    </div>
  );
}

export default RootLayout;
