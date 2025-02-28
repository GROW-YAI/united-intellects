import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader"; // Import Loader Component

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "features", element: <Features /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Show loader for 2 seconds
    return () => clearTimeout(timer); // Cleanup timeout to prevent memory leaks
  }, []);

  return loading ? <Loader /> : <RouterProvider router={router} />;
}

export default App;
