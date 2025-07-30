import React from "react";

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
import Metller from '/src/assets/PrincipalLogos/RowTwo/Metller.svg';
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
    { name: "ECom", src: ECom },
    { name: "Labomatic", src: Labomatic },
    { name: "Waters", src: Waters },
    { name: "Metller", src: Metller },
    { name: "Header", src: Header },
    { name: "Maccor", src: Maccor },
    { name: "Labstation", src: Labstation },
  ],
  // Row Three
  [
    { name: "Bandelin", src: Bandelin },
    { name: "Kubota", src: Kubota },
    { name: "Jeiotch", src: Jeiotch },
    { name: "Luzchem", src: Luzchem },
    { name: "Robot", src: Robot },
    { name: "Sonics", src: Sonics },
    { name: "Being", src: Being },
  ],
  // Row Four
  [
    { name: "Airtech", src: Airtech },
    {name:"Rhotochrome",src:Rhotochrome},
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
  ],
];

export default function PrincipalsTab() { 
  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      <div className="flex justify-center items-center flex-col mb-8">
      <button className="px-4 py-1 mt-5 text-center text-sm font-semibold uppercase border border-[#E63946] text-black rounded-full mb-4 font-[MaxOT]">
        Our Global Principles
      </button>
       <h2 className="text-3xl text-center font-[MaxOT] text-[#E63946]">
          Strategic Alliances with Global Scientific Leaders
        </h2>
      </div>

      <div className="space-y-8">
        {logoRings.map((row, rowIndex) => (
          <div
            key={`logo-row-${rowIndex}`}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-10"
          >
            {row.map((logo, idx) => (
              <div
                key={`logo-${idx}`}
                className="w-24 h-16 md:w-28 md:h-20 flex items-center justify-center bg-white rounded shadow hover:scale-105 transition-transform"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
