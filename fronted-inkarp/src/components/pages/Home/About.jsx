import React, { useRef, useEffect, useState } from "react";
import { ArrowBigRight } from "lucide-react";
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
      const observer = new window.IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { threshold: 0.5 }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [ref]);
    return inView;
  }

  function Stat({ number, plus, label, info }) {
    const ref = useRef(null);
    const inView = useInView(ref);
    const value = useCountUp(number, 0, 1600, inView);

    return (
      <div className="text-center">
        <h3
          ref={ref}
          className="text-4xl font-bold font-[MaxOT] text-[#E63946] stroke-[#0f1b33] stroke-[1.5px] relative inline-block"
        >
          {value}
          <span className="text-[#0f1b33]">{plus}</span>
          <div className="text-lg text-black">{label}</div>
        </h3>
        <p className="mt-1 text-sm text-[#5c6880]">{info}</p>
      </div>
    );
  }

  return (
    <section className="w-full py-10 font-[Roboto] px-4 md:px-10">
  {/* Header */}
  <div className="text-center mb-10">
    <p className="text-xs font-semibold uppercase font-[MaxOT] border border-[#E63946] px-4 py-2 rounded-full inline-block text-[#E63946]">
      Who are we
    </p>
    <h2 className="text-3xl font-bold font-[MaxOT] text-[#E63946] mt-2">
      We'll Ensure You Always get the Best Results
    </h2>
  </div>

  {/* Main layout */}
  <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
    {/* Left section: Logo + Video */}
    {/* Left section: Overlapping logo on video */}
<div className="w-full lg:w-1/3 flex flex-col items-center justify-center text-center relative">
  {/* Container with background video and overlaid logo */}
  <div className="relative w-full max-w-[500px] h-[300px] rounded-full overflow-hidden ">
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

  {/* CTA Button */}
  <button className="mt-6 px-6 py-2 bg-[#0f1b33] text-white rounded-full font-semibold shadow hover:bg-[#E63946] transition-all duration-300 flex items-center gap-2 text-sm font-[MaxOT]">
    Know More <ArrowBigRight className="w-5 h-5" />
  </button>
</div>



    {/* Right section: Stats */}
    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <Stat
        number={5000}
        plus="+"
        label="Customers"
        info="Serving pharma, biotech, diagnostics, academia, and more."
      />
      <Stat
        number={50}
        plus="+"
        label="Brands"
        info="Global leaders across instruments, automation, and workflows."
      />
      <Stat
        number={10}
        plus="+"
        label="Awards"
        info="Recognized for excellence in performance and customer satisfaction."
      />
      <Stat
        number={12}
        plus="+"
        label="Branches"
        info="Pan-India reach ensuring fast, localized support."
      />
    </div>
  </div>
</section>

  );
}
