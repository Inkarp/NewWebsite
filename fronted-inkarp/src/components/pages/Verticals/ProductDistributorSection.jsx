import React from 'react';
import { FaTools, FaTruck, FaShieldAlt } from 'react-icons/fa';

export default function ProductDistributorSection({ name }) {
  const distributorInfo = {
    title: `Inkarp: Authorized Distributor and Service Provider for ${name} in India`,
    summary: `
      Inkarp is proud to be the authorized distributor and service provider for the ${name} in India, offering nationwide coverage and unmatched technical expertise. Our extensive support network ensures prompt service, tailored installations, and reliable product delivery—helping laboratories achieve consistent and high-performance evaporation results.
      
      With over 40 years of industry experience, Inkarp has earned the trust of top-tier pharmaceutical companies, research institutions, and academic laboratories across the country. Our mission is to empower scientific discovery by offering advanced rotary evaporator systems backed by responsive support and application guidance.
    `,
    closingLine:
      `Partner with Inkarp — Elevating Scientific Research Through Reliable ${name} Solutions.`,
  };

  const highlights = [
    { icon: <FaTools />, text: "Expert Installation & Application Training" },
    { icon: <FaTruck />, text: "Pan India Delivery & Logistic Support" },
    { icon: <FaShieldAlt />, text: "Authorized Warranty & OEM Spare Parts" },
    { icon: <FaTools />, text: "Annual Maintenance Contracts Available" },
  ];

  return (
    <div className="bg-[#F5F5F5] rounded-3xl">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-10 px-6 md:px-16">
        {/* Title & Summary */}
        <div className="text-center mb-5">
          <h3 className="text-3xl text-[#E63946] font-extrabold font-[MaxOT]  tracking-tight">
            {distributorInfo.title}
          </h3>
          <p className="mt-4 mx-auto text-lg font-[Roboto] leading-relaxed whitespace-pre-line">
            {distributorInfo.summary}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group flex items-start p-6 bg-white/60 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-red-400 to-red-600 text-white shadow-md group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
              </div>
              <div className="ml-5 text-center flex items-center justify-center">
                <p className="text-lg font-semibold font-[Roboto] ">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <p className="text-center text-xl font-semibold font-[Roboto] py-8">
          {distributorInfo.closingLine}
        </p>
      </div>
    </div>
  );
}
