import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronLeft } from "lucide-react";
import { Helmet } from "react-helmet";
import NewCareers from "../components/pages/Careers/NewCareers";
import CareersForm from "../components/pages/Careers/CareersForm";

const team = [
  {
    name: "Raj Kumar",
    quote: "Inkarp isn’t just a workplace — it’s where passion meets purpose.",
    img: "https://source.unsplash.com/featured/?portrait,business",
  },
  {
    name: "Sneha Iyer",
    quote: "You’re encouraged to grow — not just in role, but in vision.",
    img: "https://source.unsplash.com/featured/?woman,leader",
  },
  {
    name: "Sneha Iyer",
    quote: "You’re encouraged to grow — not just in role, but in vision.",
    img: "https://source.unsplash.com/featured/?woman,leader",
  },
  {
    name: "Sneha Iyer",
    quote: "You’re encouraged to grow — not just in role, but in vision.",
    img: "https://source.unsplash.com/featured/?woman,leader",
  },
  {
    name: "Sneha Iyer",
    quote: "You’re encouraged to grow — not just in role, but in vision.",
    img: "https://source.unsplash.com/featured/?woman,leader",
  },
  {
    name: "Sneha Iyer",
    quote: "You’re encouraged to grow — not just in role, but in vision.",
    img: "https://source.unsplash.com/featured/?woman,leader",
  },
];

const steps = [
  { title: "Discover", desc: "Explore roles that match your passion." },
  { title: "Apply", desc: "Send in your resume or drop a message." },
  { title: "Connect", desc: "Have a conversation with our team." },
  { title: "Grow", desc: "Start your journey with Inkarp." },
];

export default function Careers() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" w-full  mx-auto">
      {/* Hero Section */}
      <Helmet>
        <title>Careers - Inkarp Instruments Private Ltd</title>
        <meta name="keywords" content='Careers - Inkarp Instruments Private Ltd' />
        <meta name="description" content="Join Inkarp Instruments and be part of a team that values innovation, trust, and long-term impact. Explore our career opportunities." />
      </Helmet>
      <section className="py-5 px-3 text-center">
        <div className="flex justify-center items-center">
         <h1 className="px-4 py-1 text-center text-sm font-[MaxOT] font-semibold uppercase border border-[#E63946] text-black rounded-full mb-4 w-fit">
          Careers
        </h1>
        </div>
        <div className=" mx-auto px-3  py-20 bg-[#F5F5F5] rounded-xl">
          <h1 className="text-3xl font-bold leading-tight font-[MaxOT]">
            We hire for potential, not just positions.
            Be part of a team that values learning, problem-solving, and long-term impact.
          </h1>
        </div>
      </section>
      {/* Timeline Section */}
      <section className="px-4">
        <div className="flex justify-center items-center py-5">
         {/* <h1 className="px-4 py-1 text-center text-sm font-[MaxOT] font-semibold uppercase border border-[#E63946] text-black rounded-full mb-4 w-fit">
          Join a team that thrives on innovation, trust, and impact.
        </h1> */}
        <h2 className="text-center text-3xl text-[#E63946] font-[MaxOT]">
          Join a team that thrives on innovation, trust, and impact.
        </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative p-6 border-l-4 border-[#E63946] bg-[#F5F5F5] rounded-lg w-72 shadow-lg">
              <h3 className="text-xl font-semibold text-[#E63946] font-[Roboto]">{step.title}</h3>
              <p className=" mt-2">{step.desc}</p>
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 right-[-35px] hidden md:block">
                  <div className="w-6 h-6 bg-[#E63946] rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Team Voices Section */}
      <NewCareers />
      <section className="py-8 px-4 mt-25">
         <div className="flex justify-center items-center">
         <h1 className="px-4 py-1 text-center text-sm font-[MaxOT] font-semibold uppercase border border-[#E63946] text-black rounded-full mb-4 w-fit">
          What Our Team Says 🎧
        </h1>
        </div>
        {/* <h2 className="text-3xl font-bold text-[#E63946] text-center py-3 font-[MaxOT]">
          What Our Team Says 🎧
        </h2> */}
        <div className="relative max-w-4xl mx-auto mt-6">
          {/* Navigation Buttons */}
          <button
            onClick={() => setActiveIndex((prev) => Math.max(prev - 2, 0))}
            className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-[#E63946] text-white p-2 rounded-full shadow hover:bg-red-600 disabled:opacity-30"
            disabled={activeIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex justify-center gap-8">
            {team.slice(activeIndex, activeIndex + 2).map((member, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg w-[300px] text-center">
                <p className="italic font-[Roboto]">"{member.quote}"</p>
                <h3 className="py-3 text-lg text-[#E63946] font-[MaxOT]">{member.name}</h3>
              </div>
            ))}
          </div>

          <button
            onClick={() => setActiveIndex((prev) => Math.min(prev + 2, team.length - 2))}
            className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-[#E63946] text-white p-2 rounded-full shadow hover:bg-red-600 disabled:opacity-30"
            disabled={activeIndex >= team.length - 2}
          >
            <ChevronLeft className="h-5 w-5 transform rotate-180" />
          </button>
        </div>
      </section>
      <div className=" p-5">
      <CareersForm />
      </div>
    </div>
  );
}
