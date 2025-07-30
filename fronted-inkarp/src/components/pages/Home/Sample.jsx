import React, { useRef, useEffect, useState } from "react";
import { ArrowBigRight, Award, Users, Building2, MapPin } from "lucide-react";
import Logo from "/inkarp.png";
const Cell = "/cell.mp4";

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
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

// Statistics data from About.jsx
const statisticsData = [
  {
    icon: <Users className="w-6 h-6" />,
    number: 5000,
    plus: "+",
    label: "Customers",
    info: "Serving pharma, biotech, diagnostics, academia, and more."
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    number: 50,
    plus: "+",
    label: "Brands",
    info: "Global leaders across instruments, automation, and workflows."
  },
  {
    icon: <Award className="w-6 h-6" />,
    number: 10,
    plus: "+",
    label: "Awards",
    info: "Recognized for excellence in performance and customer satisfaction."
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    number: 12,
    plus: "+",
    label: "Branches",
    info: "Pan-India reach ensuring fast, localized support."
  }
];

function StatCard({ icon, number, plus, label, info, index }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const value = useCountUp(number, 0, 1600, inView);

  return (
    <div
      className="relative flex items-center bg-white shadow-lg rounded-full p-1 pr-4 hover:scale-[1.015] transition-all duration-300 group border border-[#F5F5F5]"
    >
      {/* Icon Circle */}
      <div
        className="w-14 h-14 flex items-center justify-center rounded-full bg-[#E63946] text-white text-2xl ml-2 mr-4 shadow-md group-hover:bg-[#0f1b33] transition-colors duration-300"
      >
        {icon}
      </div>

      {/* Text Block */}
      <div className="flex-1">
        <h3 className="font-semibold uppercase text-sm md:text-base text-[#E63946] tracking-wider font-[MaxOT]">
          {label}
        </h3>
        <div className="flex items-center gap-1">
          <span
            ref={ref}
            className="text-2xl font-bold font-[MaxOT] text-[#0f1b33]"
          >
            {value}
          </span>
          <span className="text-[#0f1b33] font-bold">{plus}</span>
        </div>
        <p className="text-xs md:text-sm text-gray-600 font-light leading-tight mt-1">
          {info}
        </p>
      </div>
    </div>
  );
}

export default function Sample() {
    return (
        <>
         <div className="text-center py-3">
        <p className="text-xs font-semibold uppercase font-[MaxOT] border border-[#E63946] px-4 py-2 rounded-full inline-block text-[#E63946]">
          Who are we
        </p>
        <h2 className="text-3xl font-bold font-[MaxOT] text-[#E63946] mt-2">
          We'll Ensure You Always get the Best Results
        </h2>
      </div>
        <div className="flex flex-col md:flex-row items-center justify-center px-4 py-10 gap-8">
            {/* Left Circle */}
           
            <div className="relative flex flex-col items-center justify-center w-64 h-64 md:w-72 md:h-72 rounded-full text-center text-white z-10">
                <div className="relative w-full max-w-[500px] h-[300px] rounded-full overflow-hidden">
                    {/* Background Video */}
                    <video
                        src={Cell}
                        className="absolute inset-0 w-full h-full object-cover z-0 blur-[1px]"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />

                    {/* Centered Logo over video */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <img
                            src={Logo}
                            alt="Inkarp Logo"
                            className="w-[70%] h-auto object-contain"
                        />
                    </div>
                   
                </div>
                 <button className="mt-6 px-6 py-2 bg-[#0f1b33] text-white rounded-full font-semibold shadow hover:bg-[#E63946] transition-all duration-300 flex items-center gap-2 text-sm font-[MaxOT]">
                                Know More <ArrowBigRight className="w-5 h-5" />
                              </button>
            </div>

            {/* Connector Dots and Line */}
            <div className="hidden md:flex flex-col items-center justify-between h-[400px] mx-6 relative">
                <div className="absolute w-1 bg-[#E63946] h-full left-1/2 -translate-x-1/2 rounded-full z-0"></div>
                {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className="w-4 h-4 rounded-full border-4 border-white z-10 shadow-md bg-[#E63946]"
                    />
                ))}
            </div>

            {/* Right Info Steps */}
            <div className="flex flex-col gap-6 w-full md:w-[600px]">
                {statisticsData.map((stat, i) => (
                    <StatCard
                        key={i}
                        icon={stat.icon}
                        number={stat.number}
                        plus={stat.plus}
                        label={stat.label}
                        info={stat.info}
                        index={i}
                    />
                ))}
            </div>
        </div>
        </>
    );
}
