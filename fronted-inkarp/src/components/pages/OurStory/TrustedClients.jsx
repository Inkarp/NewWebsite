import React, { useState, useEffect } from "react";
import Alembic from "/src/assets/ClientLogo/Alembic.png";
import Aragen from "/src/assets/ClientLogo/Aragen.png";
import Aurobindo from "/src/assets/ClientLogo/Aurobindo.png";
import Basf from "/src/assets/ClientLogo/Basf.png";
import Biocon from "/src/assets/ClientLogo/Biocon.png";
import Divis from "/src/assets/ClientLogo/Divis.png";
import Eisai from "/src/assets/ClientLogo/Eisai.png";
import Gland from "/src/assets/ClientLogo/Gland.png";
import Granuals from "/src/assets/ClientLogo/Granuals.png";
import GVK from "/src/assets/ClientLogo/GVK.png";
import Hikal from "/src/assets/ClientLogo/Hikal.png";
import Macleods from "/src/assets/ClientLogo/Macleods.png";
import Mylan from "/src/assets/ClientLogo/Mylan.png";
import Natco from "/src/assets/ClientLogo/Natco.png";
import Pi from "/src/assets/ClientLogo/Pi.png";
import Reddy from "/src/assets/ClientLogo/Reddy.png";
import Sai from "/src/assets/ClientLogo/Sai.png";
import Srigene from "/src/assets/ClientLogo/Srigene.png";
import Syngene from "/src/assets/ClientLogo/Syngene.png";
import Syngenta from "/src/assets/ClientLogo/Syngenta.png";
import Tcg from "/src/assets/ClientLogo/Tcg.png";

const logos = [
  { src: Alembic, alt: "Alembic" },
  { src: Aragen, alt: "Aragen" },
  { src: Aurobindo, alt: "Aurobindo" },
  { src: Basf, alt: "Basf" },
  { src: Biocon, alt: "Biocon" },
  { src: Divis, alt: "Divis" },
  { src: Eisai, alt: "Eisai" },
  { src: Gland, alt: "Gland" },
  { src: Granuals, alt: "Granuals" },
  { src: GVK, alt: "GVK" },
  { src: Hikal, alt: "Hikal" },
  { src: Macleods, alt: "Macleods" },
  { src: Mylan, alt: "Mylan" },
  { src: Natco, alt: "Natco" },
  { src: Pi, alt: "Pi" },
  { src: Reddy, alt: "Reddy" },
  { src: Sai, alt: "Sai" },
  { src: Srigene, alt: "Srigene" },
  { src: Syngene, alt: "Syngene" },
  { src: Syngenta, alt: "Syngenta" },
  { src: Tcg, alt: "Tcg" }
];

function TrustedClients() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const visibleLogos = logos.slice(index, index + 5).concat(
    logos.slice(0, Math.max(0, 5 - (logos.length - index)))
  );

  return (
    <section className="mx-auto px-4 py-5 sm:px-8 max-w-screen-xl">
      <h2 className="text-3xl font-bold text-center mb-16 uppercase ">
        Trusted by Global Brands
      </h2>
      <div className="relative flex justify-center items-center gap-6">
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-200 via-white to-transparent z-10 pointer-events-none" />

        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-200 via-white to-transparent z-10 pointer-events-none" />

        {visibleLogos.map((logo, idx) => {
          const scale = idx === 2 ? 1 : 0.9;
          const zIndex = idx === 2 ? 30 : 20 - Math.abs(2 - idx);
          return (
            <div
              key={idx}
              className="transition-transform duration-[3000ms] ease-in-out relative group"
              style={{
                transform: `scale(${scale}) translateY(${idx === 2 ? "0" : "10px"})`,
                zIndex,
              }}
            >
              <div className="w-36 h-36 bg-neutral-100 p-4 flex items-center justify-center overflow-hidden relative">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-auto object-contain grayscale scale-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out group-hover:animate-slideInFromTop"
                />
              </div>
            </div>
          );
        })}
      </div>
      <style>
        {`
          @keyframes slideInFromTop {
            0% {
              transform: translateY(-100%) scale(1);
              opacity: 0;
            }
            100% {
              transform: translateY(0) scale(1.1);
              opacity: 1;
            }
          }

          .animate-slideInFromTop {
            animation: slideInFromTop 0.6s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}

export default TrustedClients;
