import React from "react";
import Logo from "/inkarp.png";
import LogoNew from "/inkarp old.svg";

function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="relative w-64 h-64 bg-[#f5f5f5] rounded-full shadow-xl flex items-center justify-center animate-zoomInOut ring-4 ring-[#E63946]">
        <img
          src={Logo}
          alt="Inkarp Logo"
          className="w-40 h-40 object-contain"
          loading="lazy"
          style={{ filter: "brightness(1.0)" }}
        />

        {/* Overlay 40 years badge */}
        <img
          src={LogoNew}
          alt="40 Years"
          className="absolute top-2 right-2 w-12 h-12 object-contain rounded-full border-2 border-white shadow"
        />
      </div>

      <style>{`
        @keyframes zoomInOut {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .animate-zoomInOut {
          animation: zoomInOut 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default LoadingScreen;
