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
    details: {
      // Capacity: "100 ml",
      // Voltage: "220V",
      // Weight: "1.5 kg",
    },
    link: "/verticals/synthesis-and-flow-chemistry/rotary-evaporators/hei-vap-core"
  },
  {
    name: "Hei-VAP Expert",
    image: HeiVapExpert,
    heading: "Hei-VAP Expert Rotary Evaporator",
    description: `Best Water Distillation for your Lab`,
    details: {
      // Capacity: "200 ml",
      // Voltage: "110V",
      // Weight: "2.0 kg",
    },
    link: "/verticals/synthesis-and-flow-chemistry/rotary-evaporators/hei-vap-expert"
  },
  {
    name: "Hei-VAP Expert",
    image: HeiVapExpert,
    heading: "Hei-VAP Expert Rotary Evaporator",
    description: `Best Water Distillation for your Lab`,
    details: {
      // Capacity: "200 ml",
      // Voltage: "110V",
      // Weight: "2.0 kg",
    },
    link: "/verticals/synthesis-and-flow-chemistry/rotary-evaporators/hei-vap-expert"
  },
  {
    name: "Hei-VAP Expert",
    image: HeiVapExpert,
    heading: "Hei-VAP Expert Rotary Evaporator",
    description: `Best Water Distillation for your Lab`,
    details: {
      Capacity: "200 ml",
      Voltage: "110V",
      Weight: "2.0 kg",
    },
    link: "/verticals/synthesis-and-flow-chemistry/rotary-evaporators/hei-vap-expert"
  },
   {
    name: "Hei-VAP Expert",
    image: HeiVapExpert,
    heading: "Hei-VAP Expert Rotary Evaporator",
    description: `Best Water Distillation for your Lab`,
    details: {
      Capacity: "200 ml",
      Voltage: "110V",
      Weight: "2.0 kg",
    },
    link: "/verticals/synthesis-and-flow-chemistry/rotary-evaporators/hei-vap-expert"
  },

];

export default function PickNew() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const selectedProduct = productData[selectedIndex];

  return (
    <>
      {/* Heading Section */}
      <div className="text-center mt-5 py-3 w-[98%] mx-auto ">
        <button className="px-4 py-1 text-center text-sm font-[MaxOT] font-semibold uppercase border border-[#E63946] text-black rounded-full mb-4">
          Precision Picks
        </button>
        <h1 className="text-3xl text-[#E63946] font-[MaxOT] animate-fade-in">
          {/* Precision Picks:  */}
          Explore Our Top Lab Solutions
        </h1>
        <p className="font-[Roboto] mt-2 text-base sm:text-lg animate-fade-in">
          Explore our expert-curated selection of lab equipment built for precision and reliability
        </p>
      </div>

      {/* Main Layout */}
      <motion.div
        className="w-[98%] mx-auto border border-gray-200 rounded-2xl px-4 py-6 flex flex-col md:flex-row items-start gap-8"
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
        <div className="hidden md:block w-full md:w-1/4 bg-[#F5F5F5] rounded-xl p-5 overflow-y-auto min-h-[420px] max-h-[420px] shadow-inner border border-gray-300">
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
          className="w-full md:w-3/4 flex flex-col bg-[#F5F5F5] md:flex-row rounded-xl px-6 space-y-6 md:space-y-0 md:space-x-6 items-center shadow-inner border border-gray-300 min-h-[420px] max-h-[420px] overflow-y-auto"
          key={selectedProduct.image}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >

          {/* Image Section */}
          <motion.div className="w-full h-[400px] md:w-1/2 flex justify-center items-center">
            <div className="relative aspect-square w-[300px] h-[300px] flex items-center justify-center overflow-hidden">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div className="w-full bg-white md:w-1/2 space-y-4 p-6 rounded-xl bg-gray-100">
            <h2 className="text-2xl font-bold text-[#E63946] font-[MaxOT]">
              {selectedProduct.heading}
            </h2>
            <p className="font-[Roboto] text-md text-gray-700 leading-relaxed">
              {selectedProduct.description}
            </p>
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