import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUp, ShoppingCart, Quote } from "lucide-react";
import Logo from '/inkarp.png';

const reviews = [
    {
        id: 1,
        text: "Best service provided by Inkarp. Service engineer response towards the equipment is very good and our Heidolph rotary evaporator smoothly functioning without any interruptions, fully satisfied.",
        name: "Anil Pasunuti",
    },
    {
        id: 2,
        text: "Inkarp supplied and installed their brand of a four port glovebox “Labstationi” to our lab. Their service is on time, professional and top notch. So far so smooth.",
        name: "Omprakash Kushwaha",
    },
    {
        id: 3,
        text: "Mr. Jerbin is the service person coming to our lab.. He is very helpful and always ready for the service. His service is very appreciable. We are very satisfied and happy with his service.",
        name: "Renitta Benny",
    },
    {
        id: 4,
        text: "Inkarp is really helpful, and their service people are guiding us how to use the instruments for longer time without damage and service is helpful.",
        name: "Snehashish Senapati",
    },
    {
        id: 5,
        text: "Our university had bought a lyophilizer a year back and the performance of it was phenomenal. There were regular services for the maintenance of the equipment. Thank you.",
        name: "Shwetha M",
    },
    {
        id: 6,
        text: "Excellent Service provided by Inkarp Instrument Pvt Ltd from last many years. They are prompt in their service and attending call anytime and help us for resolved problem on priority.",
        name: "Prasad Joshi",
    },
];

export default function Reviews() {
    const [currentReview, setCurrentReview] = useState(0);
    const Cell="/cell.mp4"

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className=" w-[99%] mx-auto py-2 ">
             <div className="flex items-center flex-col justify-center gap-3">
                        <span className="inline-block font-[MaxOT] border border-[#E63946] rounded-full text-xs font-bold uppercase px-4 py-2 tracking-wider w-fit">
                            Reviews
                        </span>
                        <h2 className="text-3xl text-[#E63946] font-[MaxOT] font-bold mb-8 leading-tight">
                            What Our Customers Say About Us
                        </h2>
                    </div>
            <div className="flex flex-col lg:flex-row border border-gray-300 rounded-xl">
                {/* Left Section - Client Reviews */}
                <div className="lg:w-1/2 bg-[#F5F5F5] px-10 py-3 flex flex-col justify-center rounded-l-xl">
                    {/* Testimonial Section */}
                    <div className="relative mb-8 bg-white py-5 px-5">
                        {/* Large Quote Marks */}
                        <div className="absolute -top-4 -left-2">
                            <span className="text-8xl text-[#E63946] font-bold opacity-80"><Quote /></span>
                        </div>
                        {/* Review Text */}
                        <div className="relative z-10 pl-8 ">
                            <p className="text-lg lg:text-xl leading-relaxed font-italic font-[Roboto]">
                                {reviews[currentReview].text}
                            </p>
                        </div>
                    </div>
                    {/* Reviewer Info and Navigation */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            {/* Avatar */}
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
                                <img
                                    src={reviews[currentReview].name.charAt(0).toUpperCase()}
                                    alt={reviews[currentReview].name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white text-sm font-semibold" style={{ display: 'none' }}>
                                    {reviews[currentReview].name.split(' ').map(n => n[0]).join('')}
                                </div>
                            </div>

                            {/* Name and Role */}
                            <div>
                                <h4 className=" font-bold text-lg font-[Roboto]">
                                    {reviews[currentReview].name}
                                </h4>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex items-center">
                            <button
                                onClick={prevReview}
                                className="bg-[#E63946] rounded-l-full p-2  transition-colors "
                            >
                                <ChevronLeft size={20} className="text-white hover:text-black " />
                            </button>
                            <button
                                onClick={nextReview}
                                className="bg-[#E63946] rounded-r-full p-2 hover:bg-gray-300 transition-colors"
                            >
                                <ChevronRight size={20} className="text-white hover:text-black" />
                            </button>
                        </div>
                    </div>
                    {/* Stats Overlay */}
                    {/* <div className="relative mt-8">
                        <div className="flex gap-1">
                            <span className="text-6xl font-bold">50</span>
                            <span className="text-4xl font-bold text-[#E63946]">+</span>
                            <p className="text-lg font-medium max-w-xs px-5">
                            Professional and Experienced staff ready to help you
                        </p>
                        </div>
                        
                    </div> */}
                </div>
                {/* Right Section - Scientist Image with Stats */}
                <div className="lg:w-1/2 rounded-r-xl relative">
                    <div className="h-full relative overflow-hidden">
                        {/* <video
                            src={Cell}
                            className="w-full h-auto object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            // controls
                        /> */}
                        <img src={Logo} alt="Logo" className="w-2/3 h-full"/>
                    </div>
                </div>

            </div>
        </section>
    );
}
