import React from "react";
import { ArrowUpRight } from "lucide-react";
import Heidolph from "/src/assets/PrincipalLogos/RowOne/Heidolph.svg";
import Radleys from "/src/assets/PrincipalLogos/RowOne/radley.svg";

const webinars = [
  {
    id: 1,
    number: "01.",
    title: "Accelerate Process Development & Enhance Process Knowledge",
    description:
      "Join us as Procos, a leading Italian CDMO, shares case studies showcasing how the Chemspeed Autoplant Prores platform is transforming pharmaceutical R&D.",
    date: "2025-07-29",
    date1: "May 15 | 12:30 PM IST",
    date2: "May 15 | 08:30 PM IST",
    img: Heidolph,
    host: "Dr. Andrea Rossi",
    platform: "Zoom",
    duration: "1 Hour",
  },
  {
    id: 2,
    number: "02.",
    title: "Innovations in Laboratory Automation",
    description:
      "Explore advancements in lab automation and their applications in modern research environments.",
    date: "2025-08-10",
    date1: "June 10 | 10:00 AM IST",
    date2: "June 10 | 04:00 PM IST",
    img: Radleys,
    host: "Dr. Emily Clark",
    platform: "Microsoft Teams",
    duration: "1.5 Hours",
  },
  {
    id: 3,
    number: "03.",
    title: "Smart Labs: AI in Pharmaceutical Workflows",
    description:
      "Understand how AI tools are being integrated into lab operations to improve efficiency, data handling, and discovery in drug development.",
    date: "2025-08-18",
    date1: "June 18 | 11:00 AM IST",
    date2: "June 18 | 05:00 PM IST",
    img: Radleys,
    host: "Dr. Emily Clark",
    platform: "Google Meet",
    duration: "1 Hour",
  },
];

function getDaysLeft(dateString) {
  const today = new Date();
  const target = new Date(dateString);
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  const diff = target - today;
  return diff < 0 ? 0 : Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function Webinars() {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase border border-[#E63946] rounded-full px-4 sm:px-6 py-2 inline-block mb-4 sm:mb-6 font-[MaxOT] tracking-widest bg-white/80 shadow-sm">
            Webinars
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[MaxOT] leading-tight mb-2 px-2">
            Stay Ahead with Cutting-Edge Tech Webinars
          </h2>
        </div>

        {/* List */}
        <div className="divide-y divide-[#c4cad9]">
          {webinars.map((webinar, index) => (
            <div
              key={webinar.id}
              className={`py-2 px-2 sm:px-4 lg:px-6 group ${
                index % 2 === 1 ? "bg-[#F5F5F5]" : "bg-white"
              }`}
            >
              {/* Mobile Layout */}
              <div className="block lg:hidden">
                {/* Number and Title Row */}
                <div className="flex items-start gap-2">
                  <span
                    className="text-4xl sm:text-5xl font-bold text-transparent font-[MaxOT] leading-none select-none flex-shrink-0"
                    style={{ WebkitTextStroke: "2px #0f1b33" }}
                  >
                    {webinar.number}
                  </span>
                  <h3 className="text-lg sm:text-xl font-[MaxOT-light]  text-[#E63946] leading-tight">
                    {webinar.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base font-[Roboto] mb-4 text-gray-700">
                  {webinar.description}
                </p>

                {/* Details and Actions Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between ">
                  {/* Partner Logo and Dates */}
                  <div className="flex flex-col sm:flex-row sm:items-center ">
                    <img
                      src={webinar.img}
                      alt="Partner Logo"
                      className="w-20 h-12 sm:w-24 sm:h-16 object-contain"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="font-[Roboto] text-xs sm:text-sm">
                        <strong>Start:</strong> {webinar.date1}
                      </p>
                      <p className="font-[Roboto] text-xs sm:text-sm text-[#5c6880]">
                        <strong>End:</strong> {webinar.date2}
                      </p>
                    </div>
                  </div>

                  {/* Arrow and Days Left */}
                  <div className="flex items-center gap-3">
                    <div className="bg-[#E63946] text-white text-xs px-3 py-1 rounded-xl font-[Roboto]">
                      {getDaysLeft(webinar.date)} Days Left
                    </div>
                    <ArrowUpRight
                      size={28}
                      strokeWidth={2}
                      className="text-[#E63946] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 border rounded-full p-1.5 cursor-pointer hover:text-white hover:bg-[#E63946]"
                    />
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:flex items-center justify-between">
                {/* Left Number */}
                <div className="w-1/6 flex justify-center">
                  <span
                    className="text-6xl xl:text-7xl font-bold text-transparent font-[MaxOT] leading-none select-none"
                    style={{ WebkitTextStroke: "2px #0f1b33" }}
                  >
                    {webinar.number}
                  </span>
                </div>

                {/* Center Title + Description */}
                <div className="w-2/3 px-6 xl:px-8">
                  <h3 className="text-xl xl:text-2xl mb-3 font-[MaxOT] text-[#E63946] leading-tight">
                    {webinar.title}
                  </h3>
                  <p className="text-base xl:text-lg font-[Roboto] text-gray-700">
                    {webinar.description}
                  </p>
                </div>

                {/* Right Side Details */}
                <div className="w-1/4 flex flex-col gap-3">
                  <div className="flex items-center">
                    <img
                      src={webinar.img}
                      alt="Partner Logo"
                      className="w-24 h-16 xl:w-28 xl:h-18 object-contain bg-gray-200 rounded-xl"
                    />
                  </div>
                  <p className="font-[Roboto] text-sm xl:text-base">
                    <strong>Start:</strong> {webinar.date1}
                  </p>
                  <p className="font-[Roboto] text-sm xl:text-base text-[#5c6880]">
                    <strong>End:</strong> {webinar.date2}
                  </p>
                </div>

                {/* Arrow and Days Left */}
                <div className="flex flex-col gap-3 justify-center items-center">
                  <ArrowUpRight
                    size={35}
                    strokeWidth={2}
                    className="text-[#E63946] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 border rounded-full p-2 cursor-pointer hover:text-white hover:bg-[#E63946]"
                  />
                  <div className="bg-[#E63946] text-white text-xs px-3 py-1 rounded-xl font-[Roboto]">
                    {getDaysLeft(webinar.date)} Days Left
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
