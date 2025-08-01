import React, { useState, useRef } from 'react';
import {
  Dna,
  FlaskConical,
  Microscope,
  GraduationCap,
  CheckCircle,
  PillBottle
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Pharma1 from '/src/assets/Industries/Pharma1.jpg'
import Bio from '/src/assets/Industries/Bio.jpg'
import Petro from '/src/assets/Industries/Petro.jpg'
import Diagno from '/src/assets/Industries/Diagno.jpg'
import Academic from '/src/assets/Industries/Academic.jpg'



const options = [
  {
    label: 'Pharmaceuticals',
    tagline: 'Tailored Solutions for You',
    description: 'We provide trusted consultation and precision instruments designed for:',
    icon: <PillBottle className="w-5 h-5 text-white" />,
    image: Pharma1,
    content: [
      'Streamlining R&D and manufacturing processes',
      'Regulatory compliance support',
      'Enhanced quality control solutions',
      'Scalable lab instrumentation'
    ]
  },
  {
    label: 'Biotechnology',
    tagline: 'Enabling Breakthrough Discoveries',
    description: 'Our solutions are designed to support biotech innovations from bench to scale-up:',
    icon: <Dna className="w-5 h-5 text-white" />,
    image: Bio,
    content: [
      'Advanced tools for molecular and cellular research',
      'Automated workflows to improve reproducibility',
      'Sterile and contamination-free processing systems',
      'Flexible instrumentation for genomics, proteomics, and bioengineering'
    ]
  },
  {
    label: 'Chemical and Petrochemical',
    tagline: 'Precision for Complex Chemistry',
    description: 'We provide reliable instruments engineered for challenging chemical environments:',
    icon: <FlaskConical className="w-5 h-5 text-white" />,
    image: Petro,
    content: [
      'Process optimization in synthesis and scale-up',
      'Real-time monitoring for hazardous and reactive compounds',
      'High-accuracy analytical instrumentation for QC/QA',
      'Durable solutions built for harsh lab conditions'
    ]
  },
  {
    label: 'Diagnostics',
    tagline: 'Reliable Tools for Accurate Detection',
    description: 'From sample prep to final analysis, our tools help improve diagnostics workflows:',
    icon: <Microscope className="w-5 h-5 text-white" />,
    image: Diagno,
    content: [
      'Precision instruments for clinical and molecular diagnostics',
      'High-sensitivity detection systems for critical testing',
      'Optimized sample handling for speed and consistency',
      'Compliance-ready systems for accredited labs'
    ]
  },
  {
    label: 'Academic and Research',
    tagline: 'Fueling Scientific Discovery',
    description: 'Empowering researchers and students with dependable, easy-to-use systems:',
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    image: Academic,
    content: [
      'Modular and scalable lab equipment for teaching and discovery',
      'Safe and intuitive instrumentation for student labs',
      'Support for multidisciplinary research applications',
      'Cost-effective solutions for government and university labs'
    ]
  }
];



export default function WhyChooseUsSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const activeOption = options[active];

  return (
    <>
      <div className="text-center flex flex-col py-3 justify-center items-center gap-3">
        <h4 className="px-4 py-1 text-sm font-semibold font-[MaxOT] uppercase border border-[#E63946] text-black rounded-full">
          Industries We Serve
        </h4>
        <h1 className="text-3xl font-[MaxOT] text-[#E63946] leading-tight">
          Solutions Tailored to Your Industry
        </h1>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-[95%] mx-auto p-5"
      >

        <div className="p-5 rounded-3xl bg-[#F5F5F5]">
          {/* Section Header */}

          <div className="flex flex-col lg:flex-row items-start gap-10 px-4 py-3 sm:px-8 lg:px-0">
            {/* LEFT - Industries */}
            <div className="w-full lg:w-1/3">
              <div className="flex flex-col gap-3">
                {options.map((opt, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`flex items-center justify-between w-full px-4 py-2 rounded-full border text-left text-lg   transition-all duration-300 font-[MaxOT]  ${active === index
                      ? "bg-white text-[#E63946] shadow-md border-[#E63946] "
                      : "bg-[#F5F5F5] text-black border-gray-300"
                      }`}
                  >
                    {opt.label}
                    <span
                      className={`w-8 h-8 flex items-center justify-center rounded-full ${active === index ? "bg-[#be0010]" : "bg-[#1b254b]"
                        }`}
                    >
                      {opt.icon}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* MIDDLE - Image */}
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-[45%] flex justify-center items-center mt-6 lg:mt-0"
            >
              <div className="w-full overflow-hidden rounded-2xl shadow-md">
                <img
                  src={activeOption.image}
                  alt={activeOption.label}
                  className="w-full h-72 sm:h-80 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>


            {/* RIGHT - Description */}
            <motion.div
              key={active + "-desc"}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/3 mt-6 lg:mt-0"
            >
              <h3 className="text-xl font-[MaxOT] font-semibold leading-snug mb-1">
                {activeOption.tagline}
              </h3>

              <p className="mb-2 text-sm text-[#E63946] sm:text-base font-[Roboto]">
                {activeOption.description}
              </p>
              <div className="space-y-1">
                {activeOption.content.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="text-[#E63946] w-5 h-5 mt-1" />
                    <span className="text-[16px] text-black font-[Roboto]">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </>
  );
}