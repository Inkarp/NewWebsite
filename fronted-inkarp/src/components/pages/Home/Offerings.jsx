import { useState } from "react";
import Synthesis from '/src/assets/Offerings/Synthesis.jpg'
import Chromato from '/src/assets/Offerings/Chromatography.jpg'
import Weighing from '/src/assets/Offerings/Weighing.jpg'
import Material from '/src/assets/Offerings/Material.jpg'
import PilotPlants from '/src/assets/Offerings/PilotPlants.jpg'
import Lifescience from '/src/assets/Offerings/Lifescience.jpg'
import Hemo from '/src/assets/Offerings/Hemo.jpg'
import Thermal from '/src/assets/Offerings/Thermal.jpg'
import General from '/src/assets/Offerings/General.jpg'

import SynthesisIcon from '/src/assets/Icons/Synthesis.png'
import ChromatographyIcon from '/src/assets/Icons/Chromatography.png'
import ChemistryIcon from '/src/assets/Icons/Chemistry.png'
import BatteryIcon from '/src/assets/Icons/Battery.png'
import ExtrusionIcon from '/src/assets/Icons/Extrusion.png'
import ThermalIcon from '/src/assets/Icons/Thermal.png'
import GeneralIcon from '/src/assets/Icons/General.png'
import PilotIcon from '/src/assets/Icons/Pilot.png'
import LifeIcon from '/src/assets/Icons/Life.png'





const profiles = [
  {
    name: "Synthesis and Flow Chemistry",
    description: "Innovating scalable synthesis pathways and continuous flow technologies for precise, efficient chemical development.",
    link: "/verticals/synthesis-and-flow-chemistry",
    image: Synthesis,
    icon: SynthesisIcon,
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },

  {
    name: "Analytical and Chromatography Solutions",
    link: "/verticals/analytical-and-chromatography-solutions",
    description: "Delivering precise analytical instrumentation to ensure peak resolution and unmatched data reproducibility.",
    image: Chromato,
    icon: ChromatographyIcon,
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "Analytical Chemistry and Weighing",
    link: "/verticals/analytical-chemistry-and-weighing",
    description: "Delivering precise analytical instrumentation to ensure peak resolution and unmatched data reproducibility.",
    image: Weighing,
    icon: ChemistryIcon,
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "Material Science and Battery Research",
    link: "/verticals/material-science-and-battery",
    description: "Advanced material characterization and thermal analysis tools for energy storage, semiconductors, and polymers.",
    image: Material,
    icon: BatteryIcon,
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "Pilot Plants and Automation",
    link: "/verticals/pilot-plants-and-automation",
    description: "Designing and implementing pilot-scale automation for chemical and pharmaceutical scale-ups.",
    image: PilotPlants,
    icon: PilotIcon,
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "Life Sciences",
    link: "/verticals/lifesciences",
    description: "Empowering biological breakthroughs with cutting-edge cell analysis, imaging, and molecular biology platforms.",
    image: Lifescience,
    icon: LifeIcon,
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "Extrusion and Homogenization",
    link: "/verticals/extrusion-and-homogenization",
    description: "Delivering high-pressure homogenization and extrusion equipment for nanoemulsions, dispersions, and formulations.",
    image: Hemo,
    icon: ExtrusionIcon,
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "Rheology and Thermal Analysis",
    link: "/verticals/rheology-and-thermal-analysis",
    description: "Measuring material behavior and thermal properties with precision rheometers and calorimeters.",
    image: Thermal,
    icon: ThermalIcon,
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "General Laboratory Instruments",
    link: "/verticals/general-laboratory-instrument",
    description: "From pH meters to water purification – your everyday research essentials under one roof.",
    image: General,
    icon: GeneralIcon,
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/?text=https://www.inkarp.co.in/verticals/synthesis-and-flow-chemistry/rotary-evaporators/hei-vap-core",
    },
  },

];

import { Share2, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function ProfileCard({ profile, isOpen, index, setOpenIndex }) {
  const { linkedin, facebook, instagram, mail, whatsapp } = profile.socials || {};
  const socialLinks = [
    { Icon: FaWhatsapp, url: whatsapp, colour: "green", title: "WhatsApp" },
  ].filter(link => link.url);
  const colorMap = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    pink: "bg-pink-500",
    gray: "bg-gray-500",
    green: "bg-green-500",
  };

  return (
    <div className="w-full max-w-xs rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 group border border-gray-200 bg-white shadow-md hover:shadow-2xl hover:border-[#E63946] relative">
      <Link to={profile.link} className="block">
        <div className="bg-[#F5F5F5] text-black h-[200px] p-5 flex flex-col justify-center items-start relative">
          <div className="flex items-center mb-3">
            <div className="w-16 h-16 rounded-full flex items-center justify-center">
              <img src={profile.icon} alt="icon" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-bold font-[MaxOT] pl-3">{profile.name}</h3>
          </div>
          <hr className="w-full border-t-[1.5px] border-gray-300 group-hover:border-red-500 transition-all duration-300 mb-2" />
          <p className="text-sm leading-relaxed font-[Roboto]">{profile.description}</p>
        </div>
        <div className="relative w-full h-[250px]">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      {socialLinks.length > 0 && (
        <div className="absolute bottom-3 right-3 flex items-center">
          <div
            className="relative flex items-center"
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <button
              className="w-10 h-10 rounded-full bg-white hover:bg-red-100 flex items-center justify-center shadow-md z-20 border border-gray-300"
            >
              <Share2 size={18} color="black" />
            </button>
            <div
              className={`flex items-center gap-2 absolute right-12 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out z-10
                ${isOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-8 pointer-events-none'}`}
              style={{ minWidth: isOpen ? `${socialLinks.length * 44}px` : '0' }}
            >
              {socialLinks.map(({ Icon, url, colour, title }, i) => (
                <a
                  key={`social-${i}`}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={title}
                  className={`rounded-full p-2 transition-all hover:bg-[#E63946] ${colorMap[colour]} shadow`}
                  style={{ transitionDelay: isOpen ? `${i * 60}ms` : '0ms' }}
                >
                  <Icon size={18} className="text-white transition-colors duration-200 hover:text-green-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Offerings() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full flex flex-col items-center justify-center py-5 mt-8">
      <div className="text-center py-3 flex flex-col items-center justify-center gap-3">
        <h4 className="px-4 py-1 text-sm font-semibold uppercase border border-[#E63946] font-[MaxOT] text-black rounded-full ">
          Our Offerings
        </h4>
        <h2 className="text-3xl font-[MaxOT] text-[#E63946] leading-tight">
          Explore Our Scientific Focus Areas
        </h2>
      </div>
      <div className="w-full py-5 flex justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 ">
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              profile={profile}
              isOpen={openIndex === index}
              index={index}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}