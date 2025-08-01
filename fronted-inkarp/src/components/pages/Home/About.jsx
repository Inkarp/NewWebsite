import React, { useRef, useEffect, useState } from "react";
import { ArrowBigRight, Users, Award, Building2, MapPin } from "lucide-react";
import Logo from "/inkarp.png";
const Cell = "/cell.mp4";

export default function About() {
  // CountUp hook logic
  function useCountUp(end, start = 0, duration = 1500, inView) {
    const [value, setValue] = useState(start);

    useEffect(() => {
      if (!inView) {
        setValue(start);
        return;
      }
      let frame;
      let startTime;
      function animateCount(ts) {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        setValue(Math.floor(start + (end - start) * progress));
        if (progress < 1) {
          frame = requestAnimationFrame(animateCount);
        } else {
          setValue(end);
        }
      }
      frame = requestAnimationFrame(animateCount);
      return () => cancelAnimationFrame(frame);
    }, [end, start, duration, inView]);
    return value;
  }

  // Intersection observer logic
  function useInView(ref) {
    const [inView, setInView] = useState(false);
    useEffect(() => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { threshold: 0.5 }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [ref]);
    return inView;
  }

  function StatCard({ icon, number, plus, label, info }) {
    const ref = useRef(null);
    const inView = useInView(ref);
    const value = useCountUp(number, 0, 1600, inView);

    return (
      <div
        className="flex items-center bg-white shadow-md rounded-xl p-4 gap-8 border border-[#F5F5F5] hover:scale-[1.015] transition-transform duration-300"
      >
        {/* Icon Circle */}
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#E63946] text-white shadow-md">
          {icon}
        </div>

        {/* Text Block */}
        <div className="flex flex-col">
          <h3 ref={ref} className="text-2xl font-bold text-[#0f1b33] font-[MaxOT] flex items-baseline gap-1">
            {value}
            <span className="text-[#0f1b33] font-bold">{plus}</span>
          </h3>
          <h4 className="uppercase text-sm font-semibold text-[#E63946] font-[MaxOT] tracking-wide">
            {label}
          </h4>
          <p className="text-sm text-[#5c6880] mt-1">{info}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="text-center py-3 flex flex-col items-center justify-center gap-3">
        <h4 className="px-4 py-1 text-center text-sm font-[MaxOT] font-semibold uppercase border border-[#E63946] text-black rounded-full">
          Who are we
        </h4>
        <h1 className="text-3xl text-[#E63946] font-[MaxOT] leading-tight text-center max-w-xl">
          We'll Ensure You Always Get the Best Results
        </h1>
      </div>
      <section className="w-[95%] mx-auto py-5 font-[Roboto] px-4 ">

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left: Logo on video */}
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center text-center relative">
            <div className="relative w-full max-w-[500px] h-[300px] rounded-full overflow-hidden">
              <video
                src={Cell}
                className="absolute inset-0 w-full h-full object-contain z-0 blur-[1px]"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <img
                  src={Logo}
                  alt="Inkarp Logo"
                  className="w-[50%] h-auto object-contain"
                />
              </div>
            </div>

            <button className="mt-6 px-6 py-2 bg-[#0f1b33] text-white rounded-full font-semibold shadow hover:bg-[#E63946] transition-all duration-300 flex items-center gap-2 text-sm font-[MaxOT]">
              Know More <ArrowBigRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right: Statistics Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatCard
              icon={<Users className="w-6 h-6" />}
              number={5000}
              plus="+"
              label="Customers"
              info="Serving pharma, biotech, diagnostics, academia, and more."
            />
            <StatCard
              icon={<Building2 className="w-6 h-6" />}
              number={50}
              plus="+"
              label="Brands"
              info="Global leaders across instruments, automation, and workflows."
            />
            <StatCard
              icon={<Award className="w-6 h-6" />}
              number={10}
              plus="+"
              label="Awards"
              info="Recognized for excellence in performance and customer satisfaction."
            />
            <StatCard
              icon={<MapPin className="w-6 h-6" />}
              number={12}
              plus="+"
              label="Branches"
              info="Pan-India reach ensuring fast, localized support."
            />
          </div>
        </div>
      </section>
    </>
  );
}