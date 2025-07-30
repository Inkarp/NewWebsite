import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Inkarp from '/inkarp old.svg';
import Bandelin from '/src/assets/PrincipalLogos/RowThree/bandelin.jpg';
import Jeiotech from '/src/assets/PrincipalLogos/RowThree/Jeiotch.png';
import Being from '/src/assets/PrincipalLogos/RowThree/Being.svg';
import Kubota from '/src/assets/PrincipalLogos/RowThree/Kubota.png';
import Luzchem from '/src/assets/PrincipalLogos/RowThree/Luzchem.png';
import RobotCoupe from '/src/assets/PrincipalLogos/RowThree/robot.png';
import Sonics from '/src/assets/PrincipalLogos/RowThree/sonics-logo.svg';
import Airtech from '/src/assets/PrincipalLogos/RowFour/Airtech.png';
import Innova from '/src/assets/PrincipalLogos/RowFour/Innova.png';
import Sarotius from '/src/assets/PrincipalLogos/RowFour/sartorius.svg';
import Hermle from '/src/assets/PrincipalLogos/RowSeven/hermle.jpg';
import Buchi from '/src/assets/PrincipalLogos/RowSeven/BUCHI.svg';

const slugify = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const synthesisData = [
  {
    principal: "Kubota",
    logo: Kubota,
    name:"",
    products: [
      { heading: "General Purpose Centrifuges" },
      "Benchtop Centrifuge (Model S300T)",
      "Benchtop Centrifuge (Model S500T)",
      "Benchtop Centrifuge (Model S700T)",
      "Benchtop Refrigerated Centrifuge (Model S300TR)",
      "Benchtop Refrigerated Centrifuge (Model S700TR)",
      "Tabletop Refrigerated Centrifuge (Model 5500)",
      "Floor Standing Refrigerated Centrifuge (M S300FR)",
      "Floor Standing Refrigerated Centrifuge (M S700FR)",

      { heading: "Laboratory Centrifuges" },
      "Tabletop Micro Centrifuge (Model M3300)",
      "Tabletop Micro Refigerated Centrifuge (Model M3520)",
      "Micro Refigerated Centrifuge (Model M3700)",
      "Micro Refigerated Centrifuge (Model M3740)",
      "High Speed Refigerated Centrifuge (Model M6000)",
      "High Speed Refigerated Centrifuge (Model M7000)",
      "Benchtop Centrifuge (Plate Spin 3)",
      "Hybrid High Speed Refigerated Centrifuge (Model M6200)",
     
      { heading: "Large Laboratory Centrifuge" },
      "High Capacity Refrigerated Centrifuge (Model 8730)",
      "Large Capacity Refrigerated Centrifuge (Model 9940)",
      "Large Capacity Refrigerated Centrifuge (Model 9920)",
    ],
  },
  {
    principal: "Being",
    logo: Being,
    products: [
      { heading: "Sample Preparation & Processing" },
      "Vaccum Oven",
      "Vaccum Pump(Oil)",
      "Vaccum Pump(Dry)",
      "Drying Oven",
      "Muffle Furnance",
      "Rotary Evaporator",
      "Diaphragm Pump",
      "Smart Vaccum Chamber",
      { heading: "Temperature Control Storage Chambers" },
      "Ultra Low Temperature Freezer",
      "Low Temperature Freezer",
      "Laboratory Refrigrator (2-8' C)",
      "Combined Freezer and Refrigrator (-20 C) & (2 C to 8 C)",
      "Recirculating Chiller",
      "Heating Incubator",
      "Natural Convection/Air forced Heating Incubator",
      "Cooling Incubator",
      "Water Bath",
      { heading: "Mixing & Stirring" },
      "Orbital Shakers",
      "Magnetic Stirrer",
      "Plant Growth Chamber",
      "Humidity Chamber",
      { heading: "Cell Culture & Microbiology" },
      "CO2 Incubator",
      "Trigas Incubator",
      "Shaking Incubator",
      "Stackable Shaking Incubator",
      "Large Vertical Shaking Incubator",
      "Biosaftey Cabinet",
      "Laminar Air Flow",
      "Stackable Incubated & Refrigerated Shaker",
      "Stackable CO2 Incubated & Refrigerated Shaker",
    ],
  },
  {
    principal: "Bandelin",
    logo: Bandelin,
    products: [
      "Ultrasonic Baths",
    ],
  },
  
  {
    principal: "Sonics",
    logo: Sonics,
    products: [
      { heading: "Ultrasonic Processors" },
      "Laboratory Scale Modals (Volumn 0.2ml-1L)",
      "Laboratory Scale Modals (Volumn 0.2ml-0.5ml)",
      "Production Scale Modals (Volumn 10L-50L)",
      "Chillers",
      "Atomizer",
      { heading: "Accessories" },
      "VCX 750-500 W SYSTEMS",
      "VCX 130-50 W SYSTEMS",
      "VCX 1500",
      "VCX 2500",
      "OEM",
    ],
  },
  {
    principal: "Inkarp",
    logo: Inkarp,
    products: [
      "Ultrasonic Cleaner",
      "Ultrasonic Bath",
    ],
  },
  {
    principal: "Sarotius",
    logo: Sarotius,
    products: [
      "Arium mini",
      "Arium pro",
      "Arium comfort",
      "Arium advance",
    ],
  },
  {
    principal: "Buchi",
    logo: Buchi,
    products: [
      "Freeze Dryers",
      "KjelMaster",
    ],
  },
  {
    principal: "Innova",
    logo: Innova,
    products: [
      "Ice Flaker",
      "Glassware Washer",
    ],
  },
  {
    principal: "Airtech",
    logo: Airtech,
    products: [
      "Bio saftey cabinet",
    ],
  },
  {
    principal: "Robotcoupe",
    logo: RobotCoupe,
    products: [
      "Blixer",
    ],
  },
  {
    principal: "Luzchem",
    logo: Luzchem,
    products: [
      "LED Illuminator",
      "Well Plate Illuminator",
      "Laser Flash Photolysis",
      "Photo reactors and exposure tools",
      "Extra Large Photoreactor with heating capabilities",
      "Solar Simulators (300-800nm)",
      "Xenon Illuminator",
    ],
  },
  {
    principal: "Jeiotech",
    logo: Jeiotech,
    products: [
      "General Lab Instruments",
    ],
  },
  {
    principal: "Hermle",
    logo: Hermle,
    products: [
      "Compact Centrifuge",
      "High Speed Centrifuge",
      "Microliter Centrifuge",
      "Universal Centrifuge",
      "Oil Test Centrifuge",
      "Large Volume Centrifuges",
      "Filtration Centrifuge",
    ],
  },
];

export default function GeneralLaboratoryInstruments() {
  const [selectedPrincipal, setSelectedPrincipal] = useState(synthesisData[0]);

  return (
    <div className="flex flex-col md:flex-row gap-6 px-5 max-w-screen-xl mx-auto">
      {/* Sidebar */}
      <aside className="md:w-1/4 bg-white shadow-inner border-2 rounded-xl p-6 h-fit sticky top-20">
        <h2 className="text-xl font-bold text-[#E63946] mb-4 font-[MaxOT]">Principals</h2>
        <ul className="space-y-3 bg-[]">
          {synthesisData.map((group, index) => (
            <li
              key={index}
              onClick={() => setSelectedPrincipal(group)}
              className={`block p-4 rounded-lg cursor-pointer text-[#0a2540] font-[Roboto] font-medium text-sm md:text-base transition-all duration-300
                ${selectedPrincipal.principal === group.principal
                  ? "scale-[1.01] text-[#E63946] bg-red-100 "
                  : "hover:scale-[1.01] hover:text-[#E63946] hover:bg-gray-200 bg-[#F5F5F5]"
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

      {/* Products */}
      <section className="md:w-3/4 flex flex-col gap-6">
        <div className="rounded-md p-4">
          <h3 className="text-lg font-semibold mb-4 font-[MaxOT] text-[#E63946]">
            Products
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {selectedPrincipal.products.map((item, idx) =>
              typeof item === 'string' ? (
                <Link
                  key={idx}
                  to={`/verticals/general-laboratory-instrument/${slugify(item)}`}
                  className="block bg-[#F5F5F5] hover:bg-gray-200 transition-all duration-300 rounded-lg p-4 hover:scale-[1.01] text-[#0a2540] hover:text-[#E63946] font-[Roboto] font-medium text-sm md:text-base"
                >
                  {item}
                </Link>
              ) : item.heading ? (
                <div
                  key={`heading-${idx}`}
                  className="col-span-2 font-[MaxOT] font-bold text-xl text-[#E63946] bg-[#fff0f0] px-4 py-2 rounded"
                >
                  {item.heading}
                </div>
              ) : null
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
