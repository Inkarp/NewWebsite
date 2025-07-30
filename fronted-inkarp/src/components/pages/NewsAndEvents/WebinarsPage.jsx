import React, { useState } from "react";
import { X } from "lucide-react";
import Heidolph from "/src/assets/PrincipalLogos/RowOne/Heidolph.svg";
import Radleys from "/src/assets/PrincipalLogos/RowOne/radley.svg";
import RegisterForm from "./RegisterForm";
import { Helmet } from "react-helmet";
import WebinarBanner from "/src/assets/Events/WebinarBanner.jpg";
import Webinars from "./Webinars";


const webinars = [
  {
    id: 1,
    number: "01.",
    title: "Accelerate Process Development & Enhance Process Knowledge",
    description:
      "Join us as Procos, a leading Italian CDMO, shares case studies showcasing how the Chemspeed Autoplant Prores platform is transforming pharmaceutical R&D.",
    date1: "May 15 | 12:30 PM IST",
    date2: "May 15 | 08:30 PM IST",
    date:"2025-07-29",
    image: "https://www.inkarp.co.in/assets/images/Analytical-Validation.jpeg",
    img: Heidolph,
    host: "Dr. Andrea Rossi",
    platform: "Zoom",
    duration: "1 Hour",
    details: `
      <p>Discover how Procos has used Chemspeed's Autoplant system to achieve scalable R&D.</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Real-world implementation of hydrogenolysis process scaling</li>
        <li>Use of multivariate analysis to stabilize reactions</li>
        <li>Parallel experiments with automation improving throughput</li>
      </ul>
      <p class="mt-2">Bonus: Live Q&A session with Dr. Andrea Rossi</p>
    `
  },
  {
    id: 2,
     number: "02.",
    title: "Innovations in Laboratory Automation",
    description:
      "Explore advancements in lab automation and their applications in modern research environments.",
    date1: "June 10 | 10:00 AM IST",
    date2: "June 10 | 04:00 PM IST",
    date:"2025-07-29",
    image: "https://www.inkarp.co.in/assets/images/Lab-Automation.jpeg",
    img: Radleys,
    host: "Dr. Emily Clark",
    platform: "Microsoft Teams",
    duration: "1.5 Hours",
    details: `
      <p>Explore the latest trends and technologies in lab automation:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>How to retrofit automation into existing lab environments</li>
        <li>Calculating ROI on automation hardware</li>
        <li>Case studies on successful lab automation from pharma leaders</li>
      </ul>
    `
  }
];

// Helper function to calculate days left until a date string in 'YYYY-MM-DD' format
function getDaysLeft(dateString) {
  const today = new Date();
  const target = new Date(dateString);
  // Zero out the time for accurate day difference
  today.setHours(0,0,0,0);
  target.setHours(0,0,0,0);
  const diff = target - today;
  if (diff < 0) return 0;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function WebinarsNew() {
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseModal = () => {
    setSelectedWebinar(null);
    setShowRegister(false);
  };

  return (
    <>
    
    <div className="w-full">
      {/* Banner */}
      <Helmet>
        <title>Webinars - Inkarp Instruments Private Ltd</title>
         <meta name="keywords" content='default' />
        <meta name="description" content="Join Inkarp's Expert-LED Webinars to stay informed on Industry Trends, Best Practices, and Innovative Solutions. Explore upcoming webinars and access on-demand recordings for professional growth." />
      </Helmet>
      <div className="relative w-full">
        <img src={WebinarBanner} alt="Webinar Banner" className="w-full h-auto object-cover" />
        {/* <div className="absolute inset-0  flex flex-col justify-center items-center text-white text-center px-6 py-10">
          <h1 className="text-3xl font-[MaxOT] md:text-4xl font-bold text-[#E63946]">Explore Upcoming Webinars</h1>
          <p className="mt-3 text-base md:text-lg max-w-xl text-black">
            Stay informed and inspired with expert-led discussions
          </p>
        </div> */}
      </div>
      {/* Webinar List */}
      <div className="space-y-6 max-w-7xl mx-auto px-4 py-10 ">
        {webinars.map((webinar) => (
          <div
            key={webinar.id}
            className="p-4 rounded-xl shadow flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border border-gray-300 bg-[#F5F5F5]"
          >
            <div className="flex gap-3">
               <span
                    className="text-4xl sm:text-5xl font-bold text-transparent font-[MaxOT] leading-none select-none flex-shrink-0"
                    style={{ WebkitTextStroke: "2px #0f1b33" }}
                  >
                    {webinar.number}
                  </span>
              
              <div className="flex flex-col items-center">
                <img src={webinar.img} alt="Logo" className="w-24 h-16 object-contain bg-white rounded-xl" />
              
              </div>
            </div>
          <div className="flex flex-col gap-2">
            <div className="text-md lg:w-[180px] w-full">
              <p className="font-[Roboto]">{webinar.date1}</p>
              <p className="font-[Roboto]">{webinar.date2}</p>
              
            </div>
            
          </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold font-[MaxOT] text-[#E63946]">{webinar.title}</h3>
              <p className="text-md font-[Roboto]">{webinar.description}</p>
            </div>

            <div className="flex gap-3 flex-col">
              <button
                onClick={() => setSelectedWebinar(webinar)}
                className="text-sm px-4 py-2 bg-[#E63946] text-white rounded hover:bg-red-700 transition font-[MaxOT] hover:text-black"
              >
                Know More
              </button>
              <div className="flex items-center text-[#E63946]  px-3 py-1 rounded-xl text-md font-semibold font-[Roboto] ">
                {getDaysLeft(webinar.date)} days left
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Webinar Detail Modal */}
      {selectedWebinar && !showRegister && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative p-6">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={handleCloseModal}
            >
              <X className="w-5 h-5" />
            </button>
            {/* <h3 className="text-2xl font-bold text-[#E63946] font-[MaxOT] mb-2">{selectedWebinar.title}</h3> */}
            <img
              src={selectedWebinar.image}
              alt={selectedWebinar.title}
              className="w-full h-full object-cover mb-4 border rounded-lg"
            />
            <div className="font-[Roboto]  mb-3 text-md space-y-2">
              <div dangerouslySetInnerHTML={{ __html: selectedWebinar.details }} />
            </div>
            <div className="text-center mt-6">
              <button
                onClick={() => setShowRegister(true)}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 text-sm"
              >
                Register Now →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Register Form Modal */}
      {showRegister && (
        <RegisterForm isOpen={true} onClose={handleCloseModal} />
      )}
    </div>
    <Webinars />
    </>
  );
}
