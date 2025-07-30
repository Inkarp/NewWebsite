import React, { useEffect, useState } from 'react';
import EventsImg from "/src/assets/Events/EventsImage.jpg";
import EventsBanner1 from "/src/assets/Events/EventBanner1.jpg";
import EventsBanner from "/src/assets/Events/EventBanner.jpg";
import EventsBanner3 from "/src/assets/Events/EventBanner3.jpg";
import PahrmaBanner from "/src/assets/Events/PhamaBanner.jpg";

import Event1 from "/src/assets/Events/Event1.jpeg";
import Event2 from "/src/assets/Events/Event2.jpeg";
import Event3 from "/src/assets/Events/Event3.jpeg";
import Event4 from "/src/assets/Events/Event4.jpeg";
import Event5 from "/src/assets/Events/Event5.jpeg";
import Event6 from "/src/assets/Events/Event6.jpeg";
import Event7 from "/src/assets/Events/Event7.jpeg";
import Event8 from "/src/assets/Events/Event8.jpeg";
import Event9 from "/src/assets/Events/Event9.jpeg";
import Event10 from "/src/assets/Events/Event10.jpeg";
import Event11 from "/src/assets/Events/Event11.jpeg";
import Event12 from "/src/assets/Events/Event12.jpeg";
import Event13 from "/src/assets/Events/Event13.jpeg";
import Event14 from "/src/assets/Events/Event14.jpeg";
import Event15 from "/src/assets/Events/Event15.jpeg";
import Event16 from "/src/assets/Events/Event16.jpeg";

import { eventsData } from '../NewsAndEvents/EventsData';

import { Helmet } from 'react-helmet';

const bannerSlides = [
    {
        id: 1,
        img: PahrmaBanner,
        title: "Next-Gen Lab Technologies",
        subtitle: "Automation and Innovation",
        date: "2025-08-10",
    },
    {
        id: 2,
        img: EventsBanner,
        title: "Asia Labex & Labotica Conclave",
        subtitle: "Empowering Labs Through Knowledge",
        date: "2025-09-18",
    },

    // {
    //     id: 3,
    //     img: EventsBanner3,
    //     title: "Future of Research Labs",
    //     subtitle: "Discover Cutting Edge Equipment",
    //     date: "2026-01-15",
    // },
];


const labCards = [
    ...eventsData,
];

const LabCard = ({ category, title, description, image }) => (
    <div className="rounded-3xl shadow-md overflow-hidden relative p-2 group transition duration-300 ease-in-out transform hover:scale-1.01 bg-[#F5F5F5]">
        <img
            src={image}
            alt={title}
            className="rounded-2xl w-full h-auto object-cover min-h-[200px] sm:min-h-[250px] md:min-h-[300px]"
        />
        <div className="group rounded-full p-1 m-2 flex justify-center items-center">
            <button
                className="relative flex items-center px-4 sm:px-6 py-2 sm:py-3 overflow-hidden font-medium transition-all bg-[#E63946] rounded-md group text-sm sm:text-base"
            >
                <span
                    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#333333] rounded group-hover:-mr-4 group-hover:-mt-4"
                >
                    <span
                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                    ></span>
                </span>
                <span
                    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#333333] rounded group-hover:-ml-4 group-hover:-mb-4"
                >
                    <span
                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                    ></span>
                </span>
                <span
                    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-black text-white rounded-md group-hover:translate-x-0"
                ></span>
                <span
                    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                >Join Us</span
                >
            </button>
        </div>
    </div>
);


const SlidingDigit = ({ digit }) => {
    const [prevDigit, setPrevDigit] = useState(digit);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        if (digit !== prevDigit) {
            setAnimating(true);
            const timer = setTimeout(() => {
                setAnimating(false);
                setPrevDigit(digit);
            }, 400); // animation duration in ms
            return () => clearTimeout(timer);
        }
    }, [digit, prevDigit]);

    return (
        <div className="relative w-7 h-12 overflow-hidden">
            {/* Previous digit sliding up */}
            <span
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center text-3xl font-[MaxOT] transition-transform duration-400 text-[#E63946]  rounded-xl ${animating ? '-translate-y-full' : 'translate-y-0'
                    }`}
            >
                {prevDigit}
            </span>

            {/* New digit sliding in from below */}
            <span
                className={`absolute top-full left-0 w-full h-full flex items-center justify-center text-3xl font-bold  transition-transform duration-400 ${animating ? 'translate-y-0' : 'translate-y-full'
                    }`}
            >
                {digit}
            </span>
        </div>
    );
};

const TimeUnit = ({ label, value }) => (
    <div className="flex flex-col items-center">
        <div className="flex space-x-1 select-none">
            {/* Two digits sliding */}
            <SlidingDigit digit={value[0]} />
            <SlidingDigit digit={value[1]} />
        </div>
        <span className="text-xs sm:text-sm uppercase ">
            {label}
        </span>
    </div>
);

const Separator = () => (
    <span className="text-3xl font-bold text-black select-none mx-1">:</span>
);

const EventsNew = () => {
    const [filterMonth, setFilterMonth] = useState('');
    const [filterYear, setFilterYear] = useState('');
    const [upcomingOnly, setUpcomingOnly] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const updateCountdown = () => {
            const eventDate = new Date(bannerSlides[currentSlide].date);
            const now = new Date();
            const diff = eventDate - now;

            if (diff <= 0) {
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setCountdown({ days, hours, minutes, seconds });
        };

        updateCountdown();
        const timer = setInterval(updateCountdown, 1000); // Update every second

        return () => clearInterval(timer);
    }, [currentSlide]);

    const today = new Date();

    const resetFilters = () => {
        setFilterMonth('');
        setFilterYear('');
        setUpcomingOnly(false);
    };

    const filteredCards = labCards.filter((card) => {
        const eventDate = new Date(card.date);
        const matchesMonth = filterMonth ? eventDate.getMonth() + 1 === parseInt(filterMonth) : true;
        const matchesYear = filterYear ? eventDate.getFullYear() === parseInt(filterYear) : true;
        const isUpcoming = upcomingOnly ? eventDate >= today : true;
        return matchesMonth && matchesYear && isUpcoming;
    })
      .sort((a, b) => b.id - a.id);

    // Helper to pad numbers to two digits
    const pad = (num, size = 2) => String(num).padStart(size, '0');

    return (
        <div className="">
            <Helmet>
                <title>News & Events | Inkarp Instruments Pvt Ltd</title>
                <meta
                    name="keywords"
                    content="Scientific Expo, Scientific events, Scientific news, News and events, New Product Launch, Scientific Achievements, Scientific Product Launch, Scientific Industry Trends, Science Lab Events and Exhibitions, Latest Scientific Equipment News, Scientific Research Conferences, Scientific Equipment Exhibitions, Scientific Industry News and Updates, Upcoming Lab Equipment Events."
                />
                <meta
                    name="description"
                    content="Discover the latest from Inkarp Instruments. Visit our News & Events page for insights into industry trends, Scientific Expo, Scientific Equipment Exhibitions, New Product launches, Scientific Research Conferences and advancements in Scientific Technology."
                />
            </Helmet>

            {/* Banner Image Only */}
            <div className="w-full relative">
                <img
                    src={bannerSlides[currentSlide].img}
                    alt={bannerSlides[currentSlide].title}
                    className="w-full object-contain rounded-xl p-3"
                // style={{ borderRadius: '0 0 85% 85% / 30%' }}
                />
                {/* Overlay sliding countdown */}
                <div className="absolute inset-0 flex flex-col justify-end items-center p-4">
                    <div className="bg-white/90 rounded-lg shadow px-5 py-3 mb-4">
                        <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 text-black">
                            <TimeUnit label="Days" value={pad(countdown.days)} />
                            <Separator />
                            <TimeUnit label="Hours" value={pad(countdown.hours)} />
                            <Separator />
                            <TimeUnit label="Min" value={pad(countdown.minutes)} />
                            <Separator />
                            <TimeUnit label="Sec" value={pad(countdown.seconds)} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters Section */}
            <div className="w-[95%] mx-auto flex flex-col sm:flex-row flex-wrap items-center gap-6 justify-around py-8 bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-xl border border-gray-200">
                {/* Month Filter */}
                <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center">
                    <label className="text-lg font-semibold text-gray-700 min-w-[80px]">Month</label>
                    <select
                        className="w-full sm:w-44 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm shadow-sm transition focus:ring-2 focus:ring-red-400 focus:border-red-500 outline-none"
                        value={filterMonth}
                        onChange={(e) => setFilterMonth(e.target.value)}
                    >
                        <option value="">All Months</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i} value={i + 1}>
                                {new Date(0, i).toLocaleString('default', { month: 'long' })}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Year Filter */}
                <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center">
                    <label className="text-lg font-semibold text-gray-700 min-w-[80px]">Year</label>
                    <select
                        className="w-full sm:w-36 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm shadow-sm transition focus:ring-2 focus:ring-red-400 focus:border-red-500 outline-none"
                        value={filterYear}
                        onChange={(e) => setFilterYear(e.target.value)}
                    >
                        <option value="">All Years</option>
                        {[2024, 2025, 2026].map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Upcoming Filter */}
                <div className="w-full sm:w-auto flex items-center gap-3 cursor-pointer select-none">
                    <input
                        type="checkbox"
                        checked={upcomingOnly}
                        onChange={() => setUpcomingOnly(!upcomingOnly)}
                        id="upcoming"
                        className="w-5 h-5 rounded-md accent-red-600 border border-gray-300 shadow-inner transition focus:ring-2 focus:ring-red-400 outline-none"
                    />
                    <label htmlFor="upcoming" className="text-lg font-semibold text-gray-700 cursor-pointer">
                        Upcoming Only
                    </label>
                </div>

                {/* Reset Button */}
                <button
                    onClick={resetFilters}
                    className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-5 py-2 rounded-lg shadow-lg transition-transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-300"
                    type="button"
                >
                    Reset Filters
                </button>
            </div>

            {/* Event Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4 md:px-6 lg:px-10 py-2 sm:py-4">
                {filteredCards.length === 0 ? (
                    <div className="col-span-full text-center text-gray-500 py-8">
                        <p className="text-sm sm:text-base">No events found for selected filters.</p>
                    </div>
                ) : (
                    filteredCards.map((card) => <LabCard key={card.id} {...card} />)
                )}
            </div>
        </div>
    );
};

export default EventsNew;


