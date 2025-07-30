import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Implen from '/src/assets/PrincipalLogos/RowFour/Implen.jpg';
import Nanosurf from '/src/assets/PrincipalLogos/RowFour/NanoSurf.svg';
import Avanjo from '/src/assets/PrincipalLogos/RowFour/Anvajo.svg';
import Bwb from '/src/assets/PrincipalLogos/RowFour/BWB.png';
import Photon from '/src/assets/PrincipalLogos/RowFive/Photon.jpeg';
import Nenovision from '/src/assets/PrincipalLogos/RowFive/Nenovision.svg';
import Reichert from '/src/assets/PrincipalLogos/RowFive/reichert.png';

const slugify = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const synthesisData = [
  {
    principal: "Implen",
    logo: Implen,
    products: [
      "NanoPhotometer",
      "OD600",
    ],
  },
  {
    principal: "Nanosurf",
    logo: Nanosurf,
    products: [
      "Research",
      "Integration",
      "Industry",
      "Compact",
    ],
  },
  {
    principal: "Avanjo",
    logo: Avanjo,
    products: [
      "Fluidlab R-300",
    ],
  },
  {
    principal: "BWB",
    logo: Bwb,
    products: [
      "BWB XP Flame Photometer",
      "BWB XP Flash Flame Photometer",
      "BWB XP Plus Flame Photometer",
      "BWB BIO Flame Photometer",
      "BWB BIO AV Flame Photometer",
      "BWB BIO LI Flame Photometer",
      "BWB SOIL Flame Photometer",
      "BWB SUGAR Flame Photometer",
    ],
  },
   {
    principal: "Nenovision",
    logo: Nenovision,
    products: [
      "LiteScope",
    ],
  },
  {
    principal: "Reichert",
    logo: Reichert,
    products: [
      "Reichert SPR Systems",
    ],
  },
  {
    principal: "Photon",
    logo: Photon,
    products: [
      "IR VIVO",
      "CIaIR",
      "L-EOS",
      "IMA",
      "GRAND-EOS",
      "ZephIR 1.7",
      "ZephIR 2.5",     
      "ZephIR 2.9",
      "RIMA",
      "LIMA",
    ],
  },
];

export default function ExtrusionAndHomogenization() {
  const [selectedPrincipal, setSelectedPrincipal] = useState(synthesisData[0]);

  return (
    <div className="flex flex-col md:flex-row gap-6 px-5 max-w-screen-xl mx-auto">
      {/* Sidebar */}
      <aside className="md:w-1/4 bg-white p-6  h-fit sticky ">
        <h2 className="text-xl font-bold text-[#E63946] mb-4 font-[MaxOT]">Principals</h2>
        <ul className="space-y-3">
          {synthesisData.map((group, index) => (
            <li
              key={index}
              onClick={() => setSelectedPrincipal(group)}
              className={`block p-4 rounded-lg  text-[#0a2540] font-[Roboto] font-medium text-sm md:text-base transition-all duration-300
                      ${selectedPrincipal.principal === group.principal
                  ? " scale-[1.01]  text-[#E63946] bg-red-100"
                  : "  hover:scale-[1.01] hover:text-[#E63946] hover:bg-gray-200 "
                }`}
            >
              <img
                src={group.logo}
                alt={group.principal}
                className="w-full h-10 object-contain"
              />
            </li>

          ))}
        </ul>
      </aside>
      <section className="md:w-3/4 flex flex-col gap-6">
        <div className=" rounded-md  p-4">
          <h3 className="text-lg font-semibold mb-4 font-[MaxOT] text-[#E63946]">
            Products
          </h3>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              {selectedPrincipal.products.map((item, idx) => (
                <Link
                  key={idx}
                  to={`/verticals/lifesciences/${slugify(item)}`}
                  className="block bg-[#F5F5F5] hover:bg-gray-200 transition-all duration-300 rounded-lg p-4 hover:scale-[1.01] text-[#0a2540] hover:text-[#E63946] font-[Roboto] font-medium text-sm md:text-base"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
