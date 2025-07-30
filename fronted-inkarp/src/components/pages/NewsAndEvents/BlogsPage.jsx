import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import BlogBanner from "../../../assets/Blogs/BlogBanner.jpg";
import Blog1 from "../../../assets/Blogs/BlogOne/revolutionizingSample1.jpeg";
import Blog2 from "../../../assets/Blogs/BlogTwo/AdvanceApplication.jpeg";
import Blog3 from "../../../assets/Blogs/BlogThree/Image1.jpeg";
import Blog4 from "../../../assets/Blogs/BlogFour/Image1.jpeg";
import Blog5 from "../../../assets/Blogs/BlogFive/Image1.jpeg";
import Blog6 from "../../../assets/Blogs/BlogSix/Image1.jpeg";
import Blog7 from "../../../assets/Blogs/BlogSeven/Image1.jpeg";
import Blog8 from "../../../assets/Blogs/BlogEight/Image1.jpeg";
import Blog9 from "../../../assets/Blogs/BlogNine/Image1.jpeg";
import Blog10 from "../../../assets/Blogs/BlogTen/Image1.jpeg";
import Blog11 from "../../../assets/Blogs/BlogEleven/Image1.jpeg";
import Blog12 from "../../../assets/Blogs/BlogTwelve/Image1.jpeg";
import Blog13 from "../../../assets/Blogs/BlogThirteen/Image1.jpg";
import Blog14 from "../../../assets/Blogs/BlogFourteen/Image1.jpg";
import { Calendar } from 'lucide-react';

export const cardData = [
  {
    id: 1,
    title: "Revolutionizing Sample Preparation in Analytical Laboratories",
    date: "2025-07-19",
    image: Blog1,
    description:
      ""
  },
  {
    id: 2,
    title: "Advanced Application of Differential Scanning Calorimetry (DSC) in the Lithium-ion Battery Manufacturing Industry",
    date: "2025-07-19",
    image: Blog2,
    description:
      ""
  },

  {
    id: 3,
    title: "Precision Hydrogen Content in Crude Oil Analysis with NMR Spectroscopy",
    date: "2025-07-19",
    image: Blog3,
    description:
      ""
  },

  {
    id: 4,
    title: "Advancing Cancer Diagnostics with Precision CTC Analysis",
    date: "2025-07-19",
    image: Blog4,
    description:
      ""
  },
  {
    id: 5,
    title: "Advancing Polymer Synthesis for a Sustainable Future",
    date: "2025-07-19",
    image: Blog5,
    description:
      ""
  },
  {
    id: 6,
    title: "Revolutionizing Semiconductor Failure Analysis with Nenovision’s LiteScope AFM-in-SEM",
    date: "2025-07-19",
    image: Blog6,
    description:
      ""
  },

  {
    id: 7,
    title: "Streamlining Bacterial Culture Standardization with McFarland Standards and Implen OD600",
    date: "2025-07-19",
    image: Blog7,
    description:
      ""
  },

  {
    id: 8,
    title: "Advancing Nanoscale Research with WaveMode NMA Technology",
    date: "2025-07-19",
    image: Blog8,
    description:
      ""
  },

   {
    id: 9,
    title: "Exploring the Thermal Properties and Crystallinity of Polylactic Acid (PLA) through Advanced Analysis",
    date: "2025-07-19",
    image: Blog9,
    description:
      ""
  },

   {
    id: 10,
    title: "Accurate Determination of Casein Content in Milk Using the Kjeldahl Method",
    date: "2025-07-19",
    image: Blog10,
    description:
      ""
  },

  {
    id: 11,
    title: "Dynamic Viscoelastic Analysis of Polypropylene Homopolymer and Block Copolymer",
    date: "2025-07-19",
    image: Blog11,
    description:
      ""
  },

  {
    id: 12,
    title: "Advancing Edible Oil Quality Control with FT-NIR Spectroscopy",
    date: "2025-07-19",
    image: Blog12,
  
  },

    {
    id: 13,
    title: "Analytical Validation of an Immunofluorescence Assay for ARv7 Protein Expression on Circulating Tumor Cells Using the RareCyte Platform",
    date: "2025-07-05",
    image: Blog13,
  },
  {
    id: 14,
    title: "Optimizing the Lyophilisation Process for Banana Slices Using BUCHI Lyovapor™ L-200",
    date: "2025-07-05",
    image: Blog14,
  },
];

const BlogsPage = () => {
  const today = new Date();
  const navigate = useNavigate();

  const [filterMonth, setFilterMonth] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [upcomingOnly, setUpcomingOnly] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState(cardData[0]); // Default banner

  const filteredCards = cardData.filter((card) => {
    const eventDate = new Date(card.date);
    const matchesMonth = filterMonth ? eventDate.getMonth() + 1 === parseInt(filterMonth) : true;
    const matchesYear = filterYear ? eventDate.getFullYear() === parseInt(filterYear) : true;
    const isUpcoming = upcomingOnly ? eventDate >= today : true;
    return matchesMonth && matchesYear && isUpcoming;
  });

  const handleReadMore = (card) => {
    navigate(`/insights-and-updates/blogs/${card.id}`, { state: { card } });
  };

  return (
    <div className=" max-w-screen-xl mx-auto">
      <Helmet>
        <title>Blogs - Inkarp Instruments Private Ltd</title>
         <meta name="keywords" content='default' />
        <meta name="description" content="Get the latest updates on laboratory instruments, equipment, and services from Inkarp Instruments Pvt Ltd. Explore our blog for expert advice, industry trends, and more." />
      </Helmet>

      {/* Dynamic Banner */}
      <div className="relative w-full h-auto py-3 rounded-xl overflow-hidden">
        <img
          // src={selectedBanner?.image}
          src={BlogBanner}
          alt={selectedBanner?.title}
          className="w-full h-full object-cover rounded-xl"
        />
        {/* <div className="z-10 h-full flex flex-col items-start justify-center px-6">
          <h1 className="text-2xl md:text-3xl font-bold text-rose-700">{selectedBanner?.title}</h1>
          <p className="text-gray-800 text-sm">{selectedBanner?.location} | {new Date(selectedBanner.date).toDateString()}</p>
        </div> */}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap bg-[#F5F5F5] justify-center gap-12 p-5  mb-4">
        {/* Month Filter */}
        <select
          onChange={(e) => setFilterMonth(e.target.value)}
          value={filterMonth}
          className="px-5 py-2 rounded-full border-2 border-transparent bg-gradient-to-r from-red-200 to-pink-200 hover:from-red-300 hover:to-pink-300 text-red-900 font-semibold shadow-md transition"
        >
          <option value="">All Months</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option value={i + 1} key={i}>
              {new Date(0, i).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>

        {/* Year Filter */}
        <select
          onChange={(e) => setFilterYear(e.target.value)}
          value={filterYear}
          className="px-5 py-2 rounded-full border-2 border-transparent bg-gradient-to-r from-red-200 to-pink-200 hover:from-red-300 hover:to-pink-300 text-red-900 font-semibold shadow-md transition"
        >
          <option value="">All Years</option>
          {[2025, 2026].map((year) => (
            <option value={year} key={year}>{year}</option>
          ))}
        </select>

        {/* Upcoming Only Toggle */}
        <label className="flex items-center gap-3 px-5 py-2 rounded-full border-2 bg-gradient-to-r from-red-200 to-pink-200 text-red-900 font-semibold shadow-md hover:from-red-300 hover:to-pink-300 transition">
          <input
            type="checkbox"
            checked={upcomingOnly}
            onChange={() => setUpcomingOnly(!upcomingOnly)}
            className="accent-red-600 w-4 h-4"
          />
          Upcoming Only
        </label>

        {/* Reset Button */}
        <button
          onClick={() => {
            setFilterMonth('');
            setFilterYear('');
            setUpcomingOnly(false);
          }}
          className=" px-5 py-2 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-800 font-semibold shadow-md transition"
        >
          Reset Filters
        </button>
      </div>


      {/* Card Grid */}
      <div className="grid gap-8 p-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCards.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">No events match your filters.</p>
        ) : (
          filteredCards.map((card) => (
            <div
              key={card.id}
              onClick={() => setSelectedBanner(card)}
              className="group bg-white border border-gray-500 rounded-2xl shadow-xl overflow-hidden transition transform hover:scale-[1.01] duration-300 flex flex-col cursor-pointer"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-fit group-hover:scale-103 transition duration-300"
              />

              <div className="p-5 flex flex-col flex-grow font-[MaxOT]">
                <div className="text-sm flex justify-between items-start font-[MaxOT]">
                  <div className="flex gap-2  px-3 py-2">
                    <Calendar />
                    <span> {new Date(card.date).toDateString()}</span>
                    {/* <span> {card.location}</span> */}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent banner change
                      handleReadMore(card);
                    }}
                    className="bg-black/80 hover:text-[#E63946] text-white px-4 py-2 rounded-md text-[15px] transition"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
