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
  { src: Tcg, alt: "Tcg" },
];

const ARC_RADIUS = 250;
const LOGO_SIZE = 64;
const CENTER_LOGO_SIZE = 88;
const VISIBLE_COUNT = 9;

export default function ClientsNew() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const visibleLogos = Array.from({ length: VISIBLE_COUNT }, (_, i) => {
    const logoIndex = (index + i) % logos.length;
    return logos[logoIndex];
  });

  const arcAngle = Math.PI;
  const angleStep = arcAngle / (VISIBLE_COUNT - 1);
  const centerX = 50; // % of container
  const centerY = 90; // vertical offset for centering arc

  return (
    <section className="relative flex flex-col items-center justify-center py-14 overflow-hidden">
      <h2 className="text-3xl sm:text-3xl font-bold font-[MaxOT] text-[#E63946]  text-center">
        Trusted by Global Brands
      </h2>

      <div className="relative w-full max-w-5xl h-[360px] sm:h-[400px] mx-auto">
        {visibleLogos.map((logo, i) => {
          const angle = Math.PI - i * angleStep;
          const isCenter = i === Math.floor(VISIBLE_COUNT / 2);
          const radius = ARC_RADIUS;
          const x = `calc(${centerX}% + ${radius * Math.cos(angle)}px - ${(isCenter ? CENTER_LOGO_SIZE : LOGO_SIZE) / 2}px)`;
          const y = `calc(${centerY}% - ${radius * Math.sin(angle)}px - ${(isCenter ? CENTER_LOGO_SIZE : LOGO_SIZE) / 2}px)`;

          return (
            <div
              key={`${logo.alt}-${i}`}
              className={`absolute flex flex-col items-center justify-center ${isCenter ? "z-30" : "z-10"}`}
              style={{
                left: x,
                top: y,
                width: isCenter ? CENTER_LOGO_SIZE : LOGO_SIZE,
                height: isCenter ? CENTER_LOGO_SIZE : LOGO_SIZE,
                transform: isCenter ? "scale(1.15)" : "scale(1)",
                filter: isCenter ? "drop-shadow(0 0 20px #E63946aa)" : "grayscale(100%)",
                transition: "all 0.7s ease-in-out",
              }}
            >
              <div
                className={`rounded-full bg-white shadow-md flex items-center justify-center border ${isCenter ? "border-[#E63946]" : "border-gray-300"}`}
                style={{ width: "100%", height: "100%" }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`object-contain w-[70%] h-[70%] ${isCenter ? "" : "hover:grayscale-0"} transition-all duration-500`}
                />
              </div>
              {/* {isCenter && (
                <span className="mt-2 text-xs font-semibold text-[#E63946] text-center w-full truncate animate-pulse">
                  {logo.alt}
                </span>
              )} */}
            </div>
          );
        })}
      </div>
    </section>
  );
}
