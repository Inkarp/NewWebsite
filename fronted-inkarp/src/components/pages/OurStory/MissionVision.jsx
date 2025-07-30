import React from "react";
import { Target, Eye, Gem } from "lucide-react";
import { Fade } from "react-awesome-reveal";

export default function MissionVision() {
  return (
    <section className="w-full px-6 md:px-16 py-5 ">
      {/* Section Header */}
      <Fade direction="down" triggerOnce>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <button className="px-4 py-1 text-sm font-semibold uppercase border border-[#be0010] text-black rounded-full mb-4 bg-white/40">
            Who Are We
          </button>
          <h1 className="text-4xl md:text-5xl font-bold font-[MaxOT] text-[#E63946] leading-tight mb-4">
            Our Purpose & Principles
          </h1>
          <p className="text-lg text-black ">
            With over four decades of experience, we partner with global leaders to empower research,
            diagnostics, and industry through reliable, precise instrumentation and personalized
            technical support.
          </p>
        </div>
      </Fade>

      {/* Card Grid */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        {/* Mission */}
        <Fade direction="left" triggerOnce delay={200}>
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/30 flex flex-col items-center text-center h-full">
            <div className="bg-[#E63946] p-4 rounded-full mb-6">
              <Target className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#1b254b] mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To empower scientific progress across India by delivering cutting-edge instruments,
              responsive support, and trusted expertise in every partnership.
            </p>
          </div>
        </Fade>

        {/* Vision (Center Card) */}
        <Fade direction="up" triggerOnce>
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/40 flex flex-col items-center text-center h-full lg:scale-105 z-10">
            <div className="bg-[#E63946] p-4 rounded-full mb-6">
              <Eye className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#1b254b] mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be India's most trusted and innovative scientific solutions partner, enabling
              discovery, development, and diagnostics with excellence and integrity.
            </p>
          </div>
        </Fade>

        {/* Core Values */}
        <Fade direction="right" triggerOnce delay={200}>
          <div className="bg-white/60 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-white/30 flex flex-col items-center text-center h-full">
            <div className="bg-[#E63946] p-4 rounded-full mb-6">
              <Gem className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#1b254b] mb-4">Our Core Values</h3>
            <p className="text-gray-700 leading-relaxed">
              Integrity, innovation, and customer-first thinking guide everything we do, ensuring
              trust and long-term impact across the scientific community.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}
