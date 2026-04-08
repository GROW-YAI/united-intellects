 "use client";

import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const BOAFO_API_KEY = import.meta.env.VITE_BOAFO_API_KEY || "YOUR_API_KEY";
    if (BOAFO_API_KEY === "YOUR_API_KEY") {
      console.warn("Boafo API key not set in .env. Using placeholder. Please add VITE_BOAFO_API_KEY=your_real_key_here to .env");
    }
    initializeBoafoWidget(BOAFO_API_KEY);
  }, []);

  return null; // nothing to render
}

