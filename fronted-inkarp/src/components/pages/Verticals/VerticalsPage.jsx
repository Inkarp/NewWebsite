import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";
import FallingAnimation from "../UI/FallingAnimation";

const verticalsList = [
  { name: "Synthesis and Flow Chemistry", key: "synthesis-and-flow-chemistry", },
  { name: "Analytical and Chromatography Solutions", key: "analytical-and-chromatography-solutions", },
  { name: "Analytical Chemistry and Weighing", key: "analytical-chemistry-and-weighing", },
  { name: "Material Science and Battery", key: "material-science-and-battery", },
  { name: "General Laboratory Instrument", key: "general-laboratory-instrument", },
  { name: "Lifesciences", key: "lifesciences", },
  { name: "Extrusion and Homogenization", key: "extrusion-and-homogenization", },
  { name: "Rheology and Thermal Analysis", key: "rheology-and-thermal-analysis", },
  { name: "Pilot Plants and Automation", key: "pilot-plants-and-automation", },
];

const VerticalsPage = () => {
  const { subpage } = useParams();
  const selectedKey = subpage || "synthesis-and-flow-chemistry";

  return (
    <>
      <div className="flex w-full h-auto overflow-hidden ">
        <Helmet>
          <title>Verticals - Inkarp Instruments Private Ltd</title>
        </Helmet>
      </div>
      <main className="flex-1 min-h-screen">
        <div className="mx-auto px-6 sm:px-10 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-5xl font-bold font-[MaxOT] mb-4">Explore Our Scientific Focus Areas</h1>
            <p className="text-lg font-[Roboto]">
              From research to production, explore how our technologies support every lab need.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {verticalsList.map((vertical, index) => (
              <Link
                key={index}
                to={`/verticals/${vertical.key}`}
                className="group relative bg-gray-100 border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl ring-1 ring-white/10 hover:ring-[#E63946]/50 "
                
              >
                <div className="p-5 relative z-10 rounded-full">
                  <h3 className="text-xl font-semibold mb-2 font-[MaxOT]">{vertical.name}</h3>
                  {/* <p className="text-sm font-[Roboto] ">
                    Discover our range of instruments and solutions for {vertical.name.toLowerCase()}.
                  </p> */}

                  <div className="mt-5 inline-flex items-center gap-2  font-semibold">
                    <span>Explore</span>
                    <ArrowRight className="transition-transform group-hover:translate-x-2" />
                  </div>
                </div>

                {/* Gradient Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#E63946]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Link>
            ))}
          </div>
          {/* <FallingAnimation /> */}
        </div>
      </main>
    </>

  );
};

export default VerticalsPage;
