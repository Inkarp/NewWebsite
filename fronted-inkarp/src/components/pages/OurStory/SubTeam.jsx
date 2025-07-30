import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import Pavan from '/src/assets/SubTeam/Pavan-M.jpg';
import Arun from '/src/assets/SubTeam/Arun.png';
import Pavan2 from '/src/assets/SubTeam/Pavan2.png';
import Pavan3 from '/src/assets/SubTeam/PavanAi.png';
// All team members categorized
const allTeamMembers = {
  Director: [
    {
      name: "Arun",
      role: "Director",
      image: Arun,
      linkedin: "https://linkedin.com/in/Arun",
    },

  ],
  Marketing: [
    {
      name: "Venkata Pavan",
      role: "Assistant Manager, \nDigital Marketing",
      image: Pavan,
      linkedin: "https://www.linkedin.com/in/pavan-kumar-nukala-303829b9/",
    },
    
    {
      name: "Pavan",
      role: "UX Researcher",
      image:
        Pavan2,
      linkedin: "https://www.linkedin.com/in/pavan-kumar-nukala-303829b9/",
    },
    {
      name: "PAvan",
      role: "UX Researcher",
      image:
        Pavan3,
      linkedin: "https://linkedin.com/in/sara-ali",
    },
    {
      name: "Sara Ali",
      role: "UX Researcher",
      image:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=880&q=80",
      linkedin: "https://linkedin.com/in/sara-ali",
    },
    {
      name: "Meera Patel",
      role: "Marketing Head",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=880&q=80",
      linkedin: "https://linkedin.com/in/meera-patel",
    },
    
    {
      name: "Sara Ali",
      role: "UX Researcher",
      image:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=880&q=80",
      linkedin: "https://linkedin.com/in/sara-ali",
    },
  ],
  Sales: [
    {
      name: "David Kim",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=880&q=80",
      linkedin: "https://linkedin.com/in/david-kim",
    },
    {
      name: "John Doe",
      role: "Sales Executive",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=880&q=80",
      linkedin: "https://linkedin.com/in/john-doe",
    },
    {
      name: "Meera Patel",
      role: "Marketing Head",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=880&q=80",
      linkedin: "https://linkedin.com/in/meera-patel",
    },
    {
      name: "Sara Ali",
      role: "UX Researcher",
      image:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=880&q=80",
      linkedin: "https://linkedin.com/in/sara-ali",
    },
    {
      name: "Meera Patel",
      role: "Marketing Head",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=880&q=80",
      linkedin: "https://linkedin.com/in/meera-patel",
    },
    {
      name: "Sara Ali",
      role: "UX Researcher",
      image:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=880&q=80",
      linkedin: "https://linkedin.com/in/sara-ali",
    },
  ],
  Service: [
    {
      name: "Arthur Melo",
      role: "Service Director",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=880&q=80",
      linkedin: "https://linkedin.com/in/arthur-melo",
    },
    {
      name: "Meera Patel",
      role: "Marketing Head",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=880&q=80",
      linkedin: "https://linkedin.com/in/meera-patel",
    },
    {
      name: "Sara Ali",
      role: "UX Researcher",
      image:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=880&q=80",
      linkedin: "https://linkedin.com/in/sara-ali",
    },
    
    
    {
      name: "Meera Patel",
      role: "Marketing Head",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=880&q=80",
      linkedin: "https://linkedin.com/in/meera-patel",
    },
    {
      name: "Sara Ali",
      role: "UX Researcher",
      image:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=880&q=80",
      linkedin: "https://linkedin.com/in/sara-ali",
    },
  ],
};

export default function SubTeam() {
  const [activeTab, setActiveTab] = useState("Marketing");
  const categories = Object.keys(allTeamMembers).filter(key => key !== "Director");
  const teamMembers = allTeamMembers[activeTab];

  return (
    <section className=" dark:bg-gray-900 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* <div className="bg-white p-2 w-[50%] mx-auto mb-5 rounded-xl">
        <h2 className="text-3xl font-[MaxOT] font-semibold text-center text-[#E63946] capitalize lg:text-3xl dark:text-white">
          Our Team
        </h2>

        <p className="max-w-3xl mx-auto  text-lg text-center font-[Roboto]">
          Meet our team of experts across departments.
        </p>
        </div> */}

        {/* Fixed Directors Section */}
        {/* <h3 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4 text-center">
          Director Board
        </h3> */}

        <div className="grid place-items-center mb-10">
          {allTeamMembers.Director.map((member, index) => (
            <div
              key={`director-${index}`}
              className="flex flex-col items-center bg-white p-2 rounded-xl"
            >
              <img
                className="object-cover bg-gray-200 w-full max-w-xs rounded-xl aspect-square"
                src={member.image}
                alt={member.name}
              />
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white text-center">
                {member.name}
              </h1>
              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 text-center">
                {member.role}
              </p>
              {member.linkedin && (
                <div className="flex mt-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-2 shadow-inner border border-gray-300 dark:border-gray-600 space-x-1">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 transform ${activeTab === tab
                  ? "bg-red-500 text-white shadow-lg scale-105"
                  : "text-gray-700 hover:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-700"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6 justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center bg-white rounded-xl shadow p-4 dark:bg-gray-800">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src={member.image}
                alt={member.name}
              />
              <h3 className="mt-3 text-sm font-semibold text-gray-700 dark:text-white text-center">
                {member.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
                {member.role}
              </p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-blue-600 hover:text-blue-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
