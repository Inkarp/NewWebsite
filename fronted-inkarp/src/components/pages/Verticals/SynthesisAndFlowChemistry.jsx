import React, { useState } from "react";
import { Link } from "react-router-dom";

// Logos
import Heidolph from "/src/assets/PrincipalLogos/RowOne/Heidolph.svg";
import Polyscience from "/src/assets/PrincipalLogos/RowOne/Polyscience.png";
import Radleys from "/src/assets/PrincipalLogos/RowOne/radley.svg";
import Rotzmeier from "/src/assets/PrincipalLogos/RowOne/Rotzmeier.gif";
import ThalesNano from "/src/assets/PrincipalLogos/RowOne/ThalesNano.jpg";
import Bruker from "/src/assets/PrincipalLogos/RowSeven/Bruker.svg";

// Slug function
const slugify = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const synthesisData = [
  {
    principal: "Heidolph",
    logo: Heidolph,
    products: [
      "Rotary Evaporators",
      "Large-Scale Rotary Evaporators",
      "Continuous Automatic Distillation Module",
      "Magnetic Stirrers",
      "Overhead Stirrers",
      "Shakers & Mixers",
      "Peristaltic Pumps",
      "Processing Solutions",
      "Smart cell cultivation",
      "Accessories" 
    ],
  },
  {
    principal: "Bruker",
    logo: Bruker,
    products: [
      "FTIR Spectrometer",
      "FTIR Research Spectrometer",
      "FT-NIR Spectrometer",
      "Raman Spectrometer",
      "FTIR Microscopes",
      "Process Monitoring",
      "Raman Microscopes",
    ],
  },
  {
    principal: "Polyscience",
    logo: Polyscience,
    products: [
      "Circulating Baths",
      "Application Specific",
      "Chillers & Coolers",
    ],
  },
  {
    principal: "Radleys",
    logo: Radleys,
    products: [
      "Automated Reaction Stations",
      "Jacketed Lab Reactors",
      "AVA Lab Control Software",
      "Benchtop and Hotplate Tools",
      "Parallel Reaction Stations",
    ],
  },
  {
    principal: "Rotzmeier",
    logo: Rotzmeier,
    products: [
      "Saftey cans -for in-plant use",
      "Safety canisters -for in-plant use",
      "Safety barrels -for in-plant use",
      "Transportation containers and UN-approval",
      "Funnels",
      "Accessories",
    ],
  },
  {
    principal: "ThalesNano",
    logo: ThalesNano,
    products: [
      "H-Cube Systems",
      "Hydrogen Gas Generators",
      "Phoenix Flow Systems",
      "PhotoCube",
    ],
  },
];

export default function SynthesisAndFlowChemistry() {
  const [selectedPrincipal, setSelectedPrincipal] = useState(synthesisData[0]);

  // On mount, check localStorage for saved tab and update state if needed
  React.useEffect(() => {
    const saved = localStorage.getItem('synthesisSelectedPrincipal');
    if (saved) {
      const found = synthesisData.find(p => p.principal === saved);
      if (found && found.principal !== selectedPrincipal.principal) {
        setSelectedPrincipal(found);
      }
    }
    // eslint-disable-next-line
  }, []);

  // Save to localStorage on change
  const handleTabClick = (group) => {
    setSelectedPrincipal(group);
    localStorage.setItem('synthesisSelectedPrincipal', group.principal);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 px-5 max-w-screen-xl mx-auto">
      {/* Sidebar */}
      <aside className="md:w-1/4 bg-white p-3 shadow-xl rounded-xl h-fit sticky">
      {/* <div className="flex justify-center items-center"> */}
        <h2 className="px-4 py-1 text-center text-sm font-semibold uppercase border border-[#E63946] text-black rounded-full mb-4 font-[MaxOT] w-fit">
         Principles
        </h2>
        {/* </div> */}
        <ul className="space-y-3">
          {synthesisData.map((group, index) => (
            <li
              key={index}
              onClick={() => handleTabClick(group)}
              className={`block p-4 rounded-lg  text-[#0a2540] font-[Roboto] font-medium text-sm md:text-base transition-all duration-300
                      ${selectedPrincipal.principal === group.principal
                  ? " scale-[1.01]  text-[#E63946] bg-red-100"
                  : "  hover:scale-[1.01] hover:text-[#E63946] "
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
        <h2 className="px-4 py-1 text-center text-sm font-semibold uppercase border border-[#E63946] text-black rounded-full mb-4 font-[MaxOT] w-fit">
         Products
        </h2>  
          <div className="grid grid-cols-2 gap-4 ">
            {selectedPrincipal.products.map((item, idx) => (
              <Link
                key={idx}
                to={`/verticals/synthesis-and-flow-chemistry/${slugify(item)}`}
                className="block bg-[#F5F5F5] hover:bg-gray-200 transition-all duration-300 rounded-lg p-4  hover:scale-[1.01] text-[#0a2540] hover:text-[#E63946] font-[Roboto] font-medium text-sm md:text-base"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
