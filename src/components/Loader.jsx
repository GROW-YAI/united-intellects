import { useEffect, useState } from "react";
import logo from "../../public/logo.jpg"; // Ensure the correct path

function Loader() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        zIndex: 50,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ position: "relative", width: "6rem", height: "6rem" }}>
          <img
            src={logo}
            alt="United Intellectuals Logo"
            style={{
              width: "100%",
              height: "100%",
              animation: "spin-slow 3s linear infinite", // Slow spinning effect
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "4rem",
                height: "4rem",
                backgroundColor: "rgba(37, 99, 235, 0.7)", // Blue with opacity
                borderRadius: "50%",
                animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite", // Ping effect
              }}
            ></div>
          </div>
        </div>
        <p
          style={{
            fontSize: "1.125rem",
            fontWeight: 700, // Increased from 600 to 700 for bolder text
            color: "#2563eb", // Blue-600
            marginTop: "1rem",
            animation: "fade-in 1s ease-in-out", // Fade-in effect
          }}
        >
          Welcome to United Intellects
        </p>
        <p
          style={{
            color: "#6b7280", // Gray-500
            textAlign: "center",
            fontSize: "0.875rem",
            fontWeight: 500, // Increased from 400 to 500 for bolder text
            maxWidth: "24rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            marginTop: "0.5rem",
            animation: "fade-in 1s ease-in-out", // Fade-in effect
          }}
        >
          <span style={{ fontWeight: 600, color: "#16a34a" }}>River Revive System (RRS)</span> – Restoring rivers, purifying water, and generating clean energy for a sustainable future{dots}
        </p>
      </div>

      {/* Define animations inline using a <style> tag */}
      <style>
        {`
          @keyframes spin-slow {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes ping {
            0% {
              transform: scale(0.8);
              opacity: 0.7;
            }
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }

          @keyframes fade-in {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Loader;