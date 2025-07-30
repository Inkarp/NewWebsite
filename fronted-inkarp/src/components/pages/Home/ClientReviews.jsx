import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Anil Pasunuti',
    // title: 'Happy Customer',
    // company: 'Pharma Research Lab',
    message:
      'Best service provided by Inkarp. Service engineer response towards the equipment is very good and our Heidolph rotary evaporator smoothly functioning without any interruptions, fully satisfied.',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    name: 'Omprakash Kushwaha',
    // title: 'Satisfied Client',
    // company: 'Biotech Solutions',
    message:
      'Inkarp supplied and installed their brand of a four port glovebox “Labstationi” to our lab. Their service is on time, professional and top notch. So far so smooth.',
    // avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Renitta Benny',
    // title: 'Clinical Partner',
    // company: 'Medical Research Institute',
    message:
      "Mr. Jerbin is the service person coming to our lab.. He is very helpful and always ready for the service. His service is very appreciable. We are very satisfied and happy with his service.",
    // avatar: 'https://randomuser.me/api/portraits/men/66.jpg',
  },
  {
    name: 'Snehashish Senapati',
    // title: 'Research Director',
    // company: 'University Lab',
    message:
      "Inkarp is really helpful, and their service people are guiding us how to use the instruments for longer time without damage and service is helpful.",
    // avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    name: 'Shwetha M',
    // title: 'Lab Manager',
    // company: 'Diagnostic Center',
    message:
      "Our university had bought a lyophilizer a year back and the performance of it was phenomenal. There were regular services for the maintenance of the equipment. Thank you.",
    // avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Prasad Joshi',
    // title: 'Senior Scientist',
    // company: 'Research Foundation',
    message:
      "Excellent Service provided by Inkarp Instrument Pvt Ltd from last many years. They are prompt in their service and attending call anytime and help us for resolved problem on priority.",
    // avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
  },
];

export default function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const getVisibleReviews = () => {
    const visibleReviews = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      visibleReviews.push(reviews[index]);
    }
    return visibleReviews;
  };

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-5 px-4 md:px-10 lg:px-20 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <button className="px-4 py-1 uppercase font-[MaxOT] text-sm font-semibold uppercase border border-[#E63946] text-black rounded-full mb-4">
              Reviews
            </button>
            <h2 className="text-3xl  font-bold font-[MaxOT] text-[#E63946] leading-tight">
              What Our Customers Say About Us
            </h2>
          </div>

          <div className="flex gap-2 border border-gray-300 rounded-full px-3 py-2 bg-white shadow-sm">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-[#0b163f] text-white rounded-full flex items-center justify-center hover:bg-[#0b163f]/80 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-[#0b163f] text-white rounded-full flex items-center justify-center hover:bg-[#0b163f]/80 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-800 ease-in-out ${
              isAnimating ? 'opacity-70 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            {getVisibleReviews().map((review, i) => (
              <figure key={i} className="snip1533">
                <figcaption>
                  <blockquote>
                    <p className='text-black font-[Roboto]'>{review.message}</p>
                  </blockquote>
                  <h3 className='font-[MaxOT]'>{review.name}</h3>
                  <h4 className='absolute'>{review.company}</h4>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* More Button */}
        {/* <div className="text-center">
          <button className="px-3 py-4 bg-[#E63946] font-[Roboto] hover:text-[#E63946] hover:bg-[#F5F5F5] text-white font-semibold rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Give Your Feedback
          </button>
        </div> */}
      </div>

      <style>{`
      
        
        .snip1533 {
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
          color: #9e9e9e;
          display: inline-block;
          font-family: 'Roboto', Arial, sans-serif;
          font-size: 16px;
          margin: 35px 10px 10px;
          max-width: 310px;
          min-width: 250px;
          position: relative;
          text-align: center;
          width: 100%;
          background-color: #ffffff;
          border-radius: 5px;
          border-top: 5px solid #E63946;
          transition: all 0.3s ease;
        }

        .snip1533:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .snip1533 *,
        .snip1533 *:before {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          -webkit-transition: all 0.1s ease-out;
          transition: all 0.1s ease-out;
        }

        .snip1533 figcaption {
          padding: 13% 10% 12%;
        }

        .snip1533 figcaption:before {
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          background-color: #fff;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
          color: #E63946;
          content: "\\201C";
          font-family: 'Georgia', serif;
          font-size: 32px;
          font-style: normal;
          left: 50%;
          line-height: 60px;
          position: absolute;
          top: -30px;
          width: 60px;
          font-weight: bold;
        }

        .snip1533 h3 {
          color: #3c3c3c;
          font-size: 20px;
          font-weight: 300;
          line-height: 24px;
          margin: 10px 0 5px;
        }

        .snip1533 h4 {
          font-weight: 400;
          margin: 0;
          opacity: 0.5;
          color: #666;
        }

        .snip1533 blockquote {
          font-style: italic;
          font-weight: 300;
          margin: 0 0 20px;
          color: #555;
          line-height: 1.6;
        }

        .snip1533 blockquote p {
          margin: 0;
        }
      `}</style>
    </section>
  );
}
