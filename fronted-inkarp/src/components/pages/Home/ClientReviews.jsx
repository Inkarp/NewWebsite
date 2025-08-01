import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import 'swiper/css';

const reviews = [
  {
    name: 'Anil Pasunuti',
    message:
      'Best service provided by Inkarp. Service engineer response towards the equipment is very good and our Heidolph rotary evaporator smoothly functioning without any interruptions, fully satisfied.',
  },
  {
    name: 'Omprakash Kushwaha',
    message:
      'Inkarp supplied and installed their brand of a four port glovebox “Labstationi” to our lab. Their service is on time, professional and top notch. So far so smooth.',
  },
  {
    name: 'Renitta Benny',
    message:
      "Mr. Jerbin is the service person coming to our lab.. He is very helpful and always ready for the service. His service is very appreciable. We are very satisfied and happy with his service.",
  },
  {
    name: 'Snehashish Senapati',
    message:
      "Inkarp is really helpful, and their service people are guiding us how to use the instruments for longer time without damage and service is helpful.",
  },
  {
    name: 'Shwetha M',
    message:
      "Our university had bought a lyophilizer a year back and the performance of it was phenomenal. There were regular services for the maintenance of the equipment. Thank you.",
  },
  {
    name: 'Prasad Joshi',
    message:
      "Excellent Service provided by Inkarp Instrument Pvt Ltd from last many years. They are prompt in their service and attending call anytime and help us for resolved problem on priority.",
  },
];

export default function ClientReviews() {
  return (
    <section className="py-5 px-2 md:px-6 lg:px-20 font-[Roboto]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center mb-8 gap-6">
          <div className="text-center flex flex-col items-center justify-center gap-3">
            <button className="px-4 py-1 uppercase font-semibold border border-[#E63946] text-black rounded-full text-xs md:text-sm shadow-none">
              Reviews
            </button>
            <h2 className="text-3xl text-[#E63946] leading-tight font-[MaxOT]">
              What Our Customers Say About Us
            </h2>
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <figure className="relative bg-white text-center rounded-md border-t-[4px] border-[#E63946] shadow-sm m-4 p-6 flex flex-col items-center justify-start min-h-[280px]">
                <div className="absolute -top-6 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                  <Quote className="text-[#E63946]" size={22} />
                </div>
                <blockquote className="mt-8 text-sm md:text-base italic text-black leading-relaxed font-normal">
                  {review.message}
                </blockquote>
                <div className="mt-4">
                  <p className="font-[MaxOT] text-[#0f1b33] text-base md:text-lg not-italic">
                    {review.name}
                  </p>
                </div>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
