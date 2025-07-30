import React, { useEffect, useState } from "react";

// Row One Imports
import Heidolph from '/src/assets/PrincipalLogos/RowOne/Heidolph.svg';
import Polyscience from '/src/assets/PrincipalLogos/RowOne/Polyscience.png';
import Radley from '/src/assets/PrincipalLogos/RowOne/radley.svg';
import Rotzmeier from '/src/assets/PrincipalLogos/RowOne/Rotzmeier.gif';
import ThalesNano from '/src/assets/PrincipalLogos/RowOne/ThalesNano.jpg';
import Nanalysis from '/src/assets/PrincipalLogos/RowOne/nanalysis.png';
import Advion from '/src/assets/PrincipalLogos/RowOne/advion.png';

// Row Two Imports
import ECom from '/src/assets/PrincipalLogos/RowTwo/ECom.png';
import Labomatic from '/src/assets/PrincipalLogos/RowTwo/Labomatic.svg';
import Waters from '/src/assets/PrincipalLogos/RowTwo/waters.svg';
import Metller from '/src/assets/PrincipalLogos/RowTwo/Metller.png';
import Header from '/src/assets/PrincipalLogos/RowTwo/header.png';
import Maccor from '/src/assets/PrincipalLogos/RowTwo/Maccor.jpg';
import Labstation from '/src/assets/PrincipalLogos/RowTwo/labstation.svg';

// Row Three Imports
import Bandelin from '/src/assets/PrincipalLogos/RowThree/bandelin.jpg';
import Kubota from '/src/assets/PrincipalLogos/RowThree/Kubota.png';
import Jeiotch from '/src/assets/PrincipalLogos/RowThree/Jeiotch.png';
import Luzchem from '/src/assets/PrincipalLogos/RowThree/Luzchem.png';
import Robot from '/src/assets/PrincipalLogos/RowThree/robot.png';
import Sonics from '/src/assets/PrincipalLogos/RowThree/sonics-logo.svg';
import Being from '/src/assets/PrincipalLogos/RowThree/Being.svg';

// Row Four Imports
import Airtech from '/src/assets/PrincipalLogos/RowFour/Airtech.png';
import Innova from '/src/assets/PrincipalLogos/RowFour/Innova.png';
import Rhotochrome from '/src/assets/PrincipalLogos/RowFour/Rotochrome.png';
import Sartorius from '/src/assets/PrincipalLogos/RowFour/sartorius.svg';
import Implen from '/src/assets/PrincipalLogos/RowFour/Implen.jpg';
import NanoSurf from '/src/assets/PrincipalLogos/RowFour/NanoSurf.svg';
import Anvajo from '/src/assets/PrincipalLogos/RowFour/Anvajo.svg';
import BWB from '/src/assets/PrincipalLogos/RowFour/BWB.png';

// Row Five Imports
import Nenovision from '/src/assets/PrincipalLogos/RowFive/Nenovision.svg';
import Reichert from '/src/assets/PrincipalLogos/RowFive/reichert.png';
import Photon from '/src/assets/PrincipalLogos/RowFive/Photon.jpeg';
import GEA from '/src/assets/PrincipalLogos/RowFive/GEA.png';
import Proscientific from '/src/assets/PrincipalLogos/RowFive/Proscientific.png';
import Evonik from '/src/assets/PrincipalLogos/RowFive/Evonik.png';
import Thermofisher from '/src/assets/PrincipalLogos/RowFive/thermofisher.png';

// Row Six Imports
import Hitachi from '/src/assets/PrincipalLogos/RowSix/hitachi.png';
import AP from '/src/assets/PrincipalLogos/RowSix/AP.png';
import Chemspeed from '/src/assets/PrincipalLogos/RowSix/Chemspeed.jpg';
import Zeiss from '/src/assets/PrincipalLogos/RowSix/zeiss.png';
import LUMICKS from '/src/assets/PrincipalLogos/RowSix/LUMICKS.png';
import Azenta from '/src/assets/PrincipalLogos/RowSix/Azenta.jpg';
import Imina from '/src/assets/PrincipalLogos/RowSix/Imina.svg';

// Row Seven Imports
import RareCyte from '/src/assets/PrincipalLogos/RowSeven/RareCyte.png';
import Hawk from '/src/assets/PrincipalLogos/RowSeven/hawk.png';
import Affinite from '/src/assets/PrincipalLogos/RowSeven/Affinite.webp';
import Bruker from '/src/assets/PrincipalLogos/RowSeven/Bruker.svg';
import KhiMod from '/src/assets/PrincipalLogos/RowSeven/KhiMod.svg';
import Hermle from '/src/assets/PrincipalLogos/RowSeven/hermle.jpg';
import BUCHI from '/src/assets/PrincipalLogos/RowSeven/BUCHI.svg';

const logoRings = [
  // Row One
  [
    { name: "Heidolph", src: Heidolph },
    { name: "Polyscience", src: Polyscience },
    { name: "Radley", src: Radley },
    { name: "Rotzmeier", src: Rotzmeier },
    { name: "ThalesNano", src: ThalesNano },
    { name: "Nanalysis", src: Nanalysis },
    { name: "Advion", src: Advion },
  ],
  // Row Two
  [
    { name: "Maccor", src: Maccor },
    { name: "ECom", src: ECom },
    { name: "Labomatic", src: Labomatic },

    { name: "Kubota", src: Kubota },
    { name: "Waters", src: Waters },
    { name: "Header", src: Header },
    { name: "Labstation", src: Labstation },
  ],
  // Row Three
  [
    { name: "Metller", src: Metller },
    { name: "Bandelin", src: Bandelin },
    { name: "Jeiotch", src: Jeiotch },
    { name: "Luzchem", src: Luzchem },
    { name: "Robot", src: Robot },
    { name: "Sonics", src: Sonics },
    { name: "Being", src: Being },
  ],
  // Row Four
  [
    { name: "Airtech", src: Airtech },
    { name: "Rhotochrome", src: Rhotochrome },
    { name: "Sartorius", src: Sartorius },
    { name: "Implen", src: Implen },
    { name: "NanoSurf", src: NanoSurf },
    { name: "Anvajo", src: Anvajo },
    { name: "BWB", src: BWB },
  ],
  // Row Five
  [
    { name: "Nenovision", src: Nenovision },
    { name: "Reichert", src: Reichert },
    { name: "Photon", src: Photon },
    { name: "GEA", src: GEA },
    { name: "Proscientific", src: Proscientific },
    { name: "Evonik", src: Evonik },
    { name: "Thermofisher", src: Thermofisher },
  ],
  // Row Six
  [
    { name: "Hitachi", src: Hitachi },
    { name: "AP", src: AP },
    { name: "Chemspeed", src: Chemspeed },
    { name: "Zeiss", src: Zeiss },
    { name: "LUMICKS", src: LUMICKS },
    { name: "Azenta", src: Azenta },
    { name: "Imina", src: Imina },
  ],
  // Row Seven
  [
    { name: "RareCyte", src: RareCyte },
    { name: "Hawk", src: Hawk },
    { name: "Affinite", src: Affinite },
    { name: "Bruker", src: Bruker },
    { name: "KhiMod", src: KhiMod },
    { name: "Hermle", src: Hermle },
    { name: "BUCHI", src: BUCHI },
  ]
];


export default function Principles() {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mergedLogoRings = [
    [...logoRings[0]],
    [...logoRings[1], ...logoRings[2]],
    [...logoRings[3], ...logoRings[4]],
    [...logoRings[5], ...logoRings[6]],
  ];

  const logoWidth = 80;
  const logoHeight = 60;
  const ringSpacing = 90;
  const baseRadius = 120;
  const totalRadius = baseRadius + ringSpacing * (mergedLogoRings.length - 1);
  const center = {
    x: viewport.width / 2.5,
    y: totalRadius + 30,
  };
  const containerHeight = totalRadius * 2 + 120;

  return (
    <>
      <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto px-4 py-6 text-center">
        <button className="px-4 py-1 text-center text-sm font-semibold uppercase border border-[#E63946] text-black rounded-full mb-4 font-[maxot]">
          Our Principles
        </button>
        <h2 className="text-3xl font-[MaxOT] text-white leading-tight">
          Strategic Alliances with Global Scientific Leaders
        </h2>
      </div>

      <div
        className="relative w-full min-h-[50vh] flex flex-col md:flex-row px-4 py-8 md:py-12 overflow-hidden"
        style={{ height: `${containerHeight}px` }}
      >

        {/* Right Section: Orbit Rings */}
        <div className="relative w-full md:w-2/3 flex justify-center items-center">
          {/* Orbit Rings */}
          {mergedLogoRings.map((_, ringIndex) => {
            const radius = baseRadius + ringIndex * ringSpacing;
            const diameter = radius * 2;
            return (
              <div
                key={`orbit-ring-${ringIndex}`}
                style={{
                  position: "absolute",
                  top: center.y - radius,
                  left: center.x - radius,
                  width: `${diameter}px`,
                  height: `${diameter}px`,
                  borderRadius: "50%",
                  border: "3px solid #E63946",
                  zIndex: 1,
                }}
              />
            );
          })}

          {/* Center Logo */}
          <div
            style={{
              position: "absolute",
              top: center.y - 60,
              left: center.x - 55,
              width: "100px",
              height: "100px",
              zIndex: 50,
              borderRadius: "50%",
              boxShadow: "0 0 25px rgba(255, 0, 0, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#fff",
            }}
          >
            <img
              src="inkarp old.svg"
              alt="Inkarp"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>

          {/* Logos on Rings */}
          {mergedLogoRings.map((ring, ringIndex) => {
            const radius = baseRadius + ringIndex * ringSpacing;
            const angleStep = (2 * Math.PI) / ring.length;
            const phaseShift = ringIndex % 2 === 1 ? angleStep / 2 : 0;

            return ring.map((logo, idx) => {
              const angle = angleStep * idx + phaseShift;
              const x = center.x + radius * Math.cos(angle);
              const y = center.y + radius * Math.sin(angle);

              return (
                <div
                  key={`ring-${ringIndex}-logo-${idx}`}
                  className="logo-container"
                  style={{
                    position: "absolute",
                    top: y - logoHeight / 2,
                    left: x - logoWidth / 2,
                    width: `${logoWidth}px`,
                    height: `${logoHeight}px`,
                    // backgroundColor: "white",
                    borderRadius: "8px",
                    transition: "transform 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 10,
                  }}
                >
                  {/* <a
                  href={logo.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", width: "100%", height: "100%" }}
                > */}
                  <img
                    src={logo.src}
                    alt={logo.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                  {/* </a> */}
                </div>
              );
            });
          })}
        </div>

        {/* Animation & Hover Styles */}
        <style>{`
      .logo-container:hover {
        transform: scale(1.2);
        z-index: 100;
      }

      @media (max-width: 768px) {
        .logo-container {
          width: 60px !important;
          height: 45px !important;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
      </div>
    </>
  );

}



