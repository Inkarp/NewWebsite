// Catalyst.jsx
import React, { useState, useEffect } from 'react';
import CatalystModal from '../components/pages/CatalystCue/CatalystModal';
import { Helmet } from 'react-helmet';



const cards = [
  {
    id: 1,
    title: "Catalyst A",
    subTitle: "Issue 01",
    image: "https://www.inkarp.co.in/assets/images/CC%20Magazine%20issue%2005%20-SAMLL%20V2_final.jpeg",
  },
  {
    id: 2,
    title: "Catalyst B",
    subTitle: "Issue 02",
    image: "https://www.inkarp.co.in/assets/images/material-science-catalst.jpg",
  },
  {
    id: 3,
    title: "Catalyst C",
    subTitle: "Issue 03",
    image: "https://www.inkarp.co.in/assets/images/enhancing-laboratory-efficiency.jpg",
  },
  {
    id: 4,
    title: "Catalyst D",
    subTitle: "Issue 04",
    image: "https://www.inkarp.co.in/assets/images/Magazine%20new-01.jpg",
  },
  {
    id: 5,
    title: "Catalyst E",
    subTitle: "Issue 05",
    image: "https://www.inkarp.co.in/assets/images/Magazine%20new%20V10-1.jpg",
  },
  {
    id: 6,
    title: "Catalyst E",
    subTitle: "Issue 06",
    image: "https://www.inkarp.co.in/assets/images/Magazine%20new%20V10-1.jpg",
  },
];

const Catalyst = () => {
  const [showModal, setShowModal] = useState(false);
  const ProductProfile="/ProductProfile/Inkarp_product_profile_2025.pdf";

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Sort cards by id (ascending) to ensure increasing order
  const sortedCards = [...cards].sort((a, b) => b.id - a.id);

  return (
    <div className="relative">
      {/* Banner Image Only */}
      <Helmet>
        <title>CatalystCue - Inkarp Instruments Private Ltd</title>
      </Helmet>
      <img
        src="https://www.inkarp.co.in/assets/images/catalystcuebanner.jpeg"
        alt="CatalystCue Banner"
        className="w-full h-full object-cover object-center px-5"
        style={{ borderRadius: '0 0 85% 85% / 30%' }}
      />

      {/* Issue Cards */}
      <div className="flex flex-wrap justify-center items-center gap-8 p-5">
        {sortedCards.map((card) => (
          <a
            key={card.id}
            href="/CatalystCue/2025/june/transformative-tools-aiding-biotherapiess.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[280px] h-[420px] border border-gray-500 overflow-hidden hover:scale-105 transition bg-white block"
          >
            <img src={card.image} alt={card.subTitle} className="w-full h-[380px] object-cover" />
            <div className="text-center p-2">
              <h2 className="text-lg font-semibold text-black">{card.subTitle}</h2>
              <p className="text-sm text-gray-600">{card.title}</p>
            </div>
          </a>
        ))}

      </div>

      {showModal && <CatalystModal onClose={() => setShowModal(false)} />}
    </div>

  );
};

export default Catalyst;
