import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

function Nav() {
  return (
    <div className="relative w-[96%] mx-auto mt-2 min-h-screen overflow-hidden rounded-[40px] bg-cover bg-center" style={{ backgroundImage: `url('https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png')` }}>
      {/* Top Nav */}
      <div className="flex justify-between items-center px-10 py-6">
        <div className="flex items-center space-x-10 text-red-800 text-sm font-semibold">
          <a href="#" className="text-blue-400">HOME</a>
          <a href="#">PAGES</a>
          <a href="#">SERVICES</a>
          <a href="#">PORTFOLIO</a>
          <a href="#">BLOG</a>
          <a href="#">CONTACT US</a>
        </div>

        <div className="flex items-center space-x-4">
          <img src="inkarp.svg" alt="Logo" className="h-20 w-40 mr-80" />
          
          <FiSearch className="text-white text-xl cursor-pointer" />
          
          <button className="ml-2 px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all">
            Product Profile
          </button>
        </div>
      </div>

      {/* Arrow Nav */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-r-md py-6 px-4 flex flex-col justify-between h-32 text-black">
        <button className="text-2xl rounded-[50%] bg-red-100 p-3">←</button>
        <button className="text-2xl">→</button>
      </div>

      {/* Center Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center space-y-4">
        <div className="inline-block px-4 py-1 border border-white rounded-full text-sm font-semibold">
          BEST SOLUTIONS FOR LABORATORY
        </div>
        <h1 className="text-5xl font-bold leading-tight">
          Science is Nothing <br /> but Perception
        </h1>
      </div>
    </div>
  );
}

export default Nav;
