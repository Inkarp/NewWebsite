import React from "react";
import DroppingText from "./DroppingText";

import GroupLogo3 from '/src/assets/Logos/GroupLogo.png'
import Spark from "/Spark.svg";
import InkarpTelecom from "/InkarpTelecom.svg";
import InkarpServices from "/InkarpServices.svg";
import Verder from "/Verder.svg";
import Advion from "/src/assets/PrincipalLogos/RowOne/advion.png";

function NewAbout() {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <button className="px-4 py-1 mt-5 text-center text-sm font-semibold uppercase border border-[#E63946] text-black rounded-full mb-4 font-[MaxOT]">
        Our Group Companies & Collaborations
      </button>
      </div>
    <div className="w-[98%] mx-auto flex flex-col md:flex-row gap-8 p-4 md:p-6">
      {/* Left Section - Company Info */}
      
      
      <div className="w-full md:w-3/5 flex flex-col items-center justify-center border-x-2 border-y-5 border-red-500 rounded-xl shadow-lg p-6 bg-white">
        <DroppingText />
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-full overflow-hidden rounded-[15px] ">

          <div className="absolute inset-0 flex flex-col items-center justify-center text-3xl sm:text-4xl font-bold bg-white bg-opacity-70 px-4 text-center">

            <img
              src={GroupLogo3}
              alt="Inkarp 40years Logo"
              className="w-full h-full rounded-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Right Section - Subsidiaries & Joint Ventures */}
      <div className="w-full md:w-2/3 flex flex-col gap-6">
        {/* Heading */}
        <div className="bg-white border-x-2 border-y-5 border-red-500 p-4 rounded-xl shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-[MaxOT]">
            Group Companies
          </h2>
        </div>

        {/* Subsidiaries */}
        <div className="bg-white p-4 rounded-xl shadow-xl ">
          <h3 className="text-xl font-bold text-gray-800 mb-3 text-center font-[MaxOT]">
            100% Owned Subsidiaries
          </h3>
          <div className="flex justify-center gap-6 md:gap-8 mb-4 flex-wrap">
            <img src={Spark} alt="Spark" className="w-32 h-24 object-contain" />
            <img src={InkarpTelecom} alt="Inkarp Telecom" className="w-32 h-24 object-contain" />
            <img src={InkarpServices} alt="Inkarp Services" className="w-32 h-24 object-contain" />
          </div>
          <p className="text-center text-gray-700 text-base md:text-lg leading-relaxed font-[Roboto]">
            Inkarp subsidiaries work across multiple verticals to strengthen our scientific footprint throughout India.
          </p>
        </div>

        {/* Joint Ventures */}
        <div className="bg-white p-4 rounded-xl shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-3 text-center font-[MaxOT]">
            Our Joint Ventures
          </h3>
          <div className="flex justify-center gap-6 md:gap-8 mb-4 flex-wrap">
            <img src={Verder} alt="Verder JV" className="w-32 h-24 object-contain" />
            <img src={Advion} alt="Advion JV" className="w-32 h-24 object-contain" />
          </div>
          <p className="text-center text-gray-700 text-base md:text-lg leading-relaxed font-[Roboto]">
            We collaborate through joint ventures to bring specialized scientific technologies and services to our clients.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default NewAbout;
