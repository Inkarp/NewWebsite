import React, { useEffect, useRef, useState } from "react";
import Logo from "/40-years-logo.png";
import { Link } from "react-router-dom";
import inkarp from '/inkarp.png'

export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "With 40+ Years of Scientific Excellence";
  const typingSpeed = 40;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (visible && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [visible, typedText]);

  return (
    <section
      ref={sectionRef}
      className={`relative bg-center text-white px-4 sm:px-6 md:px-10 transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-50"
        }`}
    >
      {/* Blinking cursor */}
      <style>{`
        .cursor {
          animation: blink 0.7s infinite;
          vertical-align: bottom;
        }
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-black p-6 rounded-2xl">
        {/* Left Column */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <div className="w-full flex justify-center lg:justify-start">
            <img
              src={Logo}
              alt="Inkarp 40 years Logo"
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] h-auto object-contain p-2 rounded-lg"
            />
          </div>
          <Link to="/about">
            <button
              className={`ml-5 bg-white hover:bg-[#E63946] text-black hover:text-white px-6 py-2 rounded-full font-semibold shadow transition ${visible ? "bounce-right" : "opacity-0"
                }`}
            >
              Know More
            </button>
          </Link>
        </div>

        {/* Right Column - Stats Grid */}
        <div
          className={`w-full lg:w-3/5 grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-6 ${visible ? "text-focus-in" : "opacity-0"
            }`}
        >
          <StatCard
            icon="👥"
            title="5000 +"
            subtitle="Customers"
            description="Serving pharma, biotech, diagnostics, academia, and more."
            image={inkarp}
          />
          <StatCard
            icon="🤝"
            title="50 +"
            subtitle="Brands"
            description="Global leaders across instruments, automation, and workflows."
            image={inkarp}
          />
          <StatCard
            icon="🏆"
            title="10 +"
            subtitle="Awards"
            description="Recognized for excellence in performance and customer satisfaction."
            image={inkarp}
          />
          <StatCard
            icon="🌐"
            title="12 +"
            subtitle="Branches"
            description="Pan-India reach ensuring fast, localized support."
            image={inkarp}
          />
        </div>
      </div>
    </section>
  );
}

// Reusable Stat Card
function StatCard({ icon, title, subtitle, description, image }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 border border-white">
      <div className="w-24 h-16 mb-3 flex items-center justify-center ">
        {/* <img
          src={image}
          alt={subtitle}
          className="w-full h-full object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        /> */}
        <div className="mb-2">
          <h3 className="text-3xl font-bold text-[#E63946] to-white bg-clip-text font-[MaxOT] ">
            {title}
          </h3>
          <p className="text-lg sm:text-xl font-semibold text-white mt-1 font-[MaxOT]">
            {subtitle}
          </p>
        </div>
      </div>
      <p className="text-sm sm:text-base text-white leading-relaxed font-medium font-[Roboto]">
        {description}
      </p>
    </div>
  );
}
