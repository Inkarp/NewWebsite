import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

import HeiVapCore from "/images/products/heidolph/Hei-VAP-HL-G3.webp";
import HeiVapExpert from "/images/products/heidolph/Hei-VAP-Expert.webp";
import HeiVapUltimate from "/images/products/heidolph/Hei-VAP-Ultimate.webp";
import HeiVapUltimateControl from "/images/products/heidolph/Hei-VAP-Ultimate-Control.webp";
import HeiVapExpertControl from "/images/products/heidolph/Hei-VAP-Expert-Control.webp";

const productData = [
  {
    name: "Hei-VAP Core",
    image: HeiVapCore,
    heading: "Hei-VAP Core Rotary Evaporator",
    description: `Best Water Distillation for your Lab`,
    details: {},
    link: "/verticals/synthesis-and-flow-chemistry/rotary-evaporators/hei-vap-core",
  },
  {
    name: "Hei-VAP Expert",
    image: HeiVapExpert,
    heading: "Hei-VAP Expert Rotary Evaporator",
    description: `Best Water Distillation for your Lab`,
    details: {},
    link: "/verticals/synthesis-and-flow-chemistry/rotary-evaporators/hei-vap-expert",
  },
  {
    name: "Hei-VAP Ultimate",
    image: HeiVapUltimate,
    heading: "Hei-VAP Ultimate Rotary Evaporator",
    description: `High-Performance Distillation with Automation`,
    details: {
      Capacity: "200 ml",
      Voltage: "110V",
      Weight: "2.0 kg",
    },
    link: "/verticals/synthesis-and-flow-chemistry/rotary-evaporators/hei-vap-ultimate",
  },
  {
    name: "Hei-VAP Expert Control",
    image: HeiVapExpertControl,
    heading: "Hei-VAP Expert Control Rotary Evaporator",
    description: `Advanced Control with Safety Features`,
    details: {
      Capacity: "250 ml",
      Voltage: "220V",
    },
    link: "/verticals/synthesis-and-flow-chemistry/rotary-evaporators/hei-vap-expert-control",
  },
  {
    name: "Hei-VAP Ultimate Control",
    image: HeiVapUltimateControl,
    heading: "Hei-VAP Ultimate Control Rotary Evaporator",
    description: `Fully Automated Rotary Evaporator for Complex Workflows`,
    details: {
      Capacity: "300 ml",
      Voltage: "220V",
    },
    link: "/verticals/synthesis-and-flow-chemistry/rotary-evaporators/hei-vap-ultimate-control",
  },
];

export default function PickNew() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const selectedProduct = productData[selectedIndex];

  return (
    <>
      {/* Heading Section */}
      <div className="text-center py-3 flex flex-col items-center justify-center gap-3">
        <h4 className="px-4 py-1 text-center text-sm font-[MaxOT] font-semibold uppercase border border-[#E63946] text-black rounded-full ">
          Precision Picks
        </h4>
        <h1 className="text-3xl text-[#E63946] font-[MaxOT] leading-tight">
          Explore Our Top Lab Solutions
        </h1>
        <p className="font-[Roboto] text-base sm:text-lg ">
          Explore our expert-curated selection of lab equipment built for precision and reliability
        </p>
      </div>

      {/* Main Layout */}
      <motion.div
        className="w-[95%] bg-[#F5F5F5] mx-auto border border-gray-200 rounded-2xl px-10 md:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-start gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Mobile Dropdown */}
        <div className="w-full md:hidden">
          <div className="bg-gray-50 rounded-xl p-4 shadow-inner border border-gray-300">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:bg-red-50 transition-colors"
            >
              <span className="font-bold font-[MaxOT] text-[#E63946]">Pick A Product</span>
              {isMobileMenuOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>

            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 space-y-2"
              >
                {productData.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedIndex(idx);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`cursor-pointer p-3 rounded-lg text-sm font-[Roboto] border transition duration-200 hover:scale-[1.02] hover:bg-red-100
                      ${idx === selectedIndex
                        ? 'bg-red-200 text-red-800 font-bold border-red-400'
                        : 'bg-white text-black border-gray-200'}`}
                  >
                    {item.name}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden md:block w-full md:w-1/3 lg:w-1/4 bg-[#F5F5F5] rounded-xl p-5 overflow-y-auto max-h-[450px] shadow-inner border border-gray-300">
          <div className="flex items-center justify-center">
            <button className="px-4 py-1 bg-white text-center text-sm font-[MaxOT] font-semibold uppercase border border-[#E63946] text-black rounded-full mb-4">
              Pick A Product
            </button>
          </div>
          <ul className="space-y-2">
            {productData.map((item, idx) => (
              <li
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`cursor-pointer p-3 rounded-lg text-sm font-[Roboto] border transition duration-200 hover:scale-[1.01] hover:bg-[#E63946] hover:text-white
              ${idx === selectedIndex
                  ? 'bg-white text-[#E63946] font-bold border-[#E63946]'
                  : 'bg-white text-black border-[#F5F5F5]'}`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Detail */}
        <motion.div
          className="w-full md:w-2/3 lg:w-3/4 flex flex-col md:flex-row bg-[#F5F5F5] rounded-xl px-4 sm:px-6 space-y-6 md:space-y-0 md:space-x-6 items-center shadow-inner border border-gray-300 min-h-[420px] md:max-h-[460px] overflow-y-auto"
          key={selectedProduct.image}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Image Section */}
          <motion.div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-[260px] sm:w-[300px] h-[260px] sm:h-[300px] flex items-center justify-center overflow-hidden">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div className="w-full md:w-1/2 space-y-4 px-2 sm:px-6 py-4 rounded-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-[#E63946] font-[MaxOT]">
              {selectedProduct.heading}
            </h2>
            <p className="font-[Roboto] text-sm sm:text-base text-gray-700 leading-relaxed">
              {selectedProduct.description}
            </p>
            {Object.keys(selectedProduct.details).length > 0 && (
              <table className="table-auto w-full text-sm text-left border border-red-800 rounded-lg overflow-hidden">
                <tbody>
                  {Object.entries(selectedProduct.details).map(([key, value]) => (
                    <tr key={key} className="border border-red-800">
                      <td className="px-4 py-2 font-medium font-[Roboto] bg-red-100">{key}</td>
                      <td className="px-4 py-2 font-[Roboto]">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            <motion.a
              href={selectedProduct.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                type="button"
                className="bg-[#E63946] text-white font-semibold text-lg px-6 py-2.5 rounded-full shadow hover:bg-red-700 transition"
              >
                Explore
              </button>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}