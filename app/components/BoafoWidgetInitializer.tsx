"use client";

import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() { 
  useEffect(() => {
    const BOAFO_API_KEY = "YOUR_API_KEY";
    initializeBoafoWidget(BOAFO_API_KEY);
  }, []);

  return null; // nothing to render
}