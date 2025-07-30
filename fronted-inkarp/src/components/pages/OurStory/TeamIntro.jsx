import React from 'react';

const TeamIntro = () => {
  return (
    <section className=" mx-auto sm:mt-0 mt-10 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#be0010] font-[MaxOT] mb-4">
          House of Inkarp
        </h2>
        <p className="text-black text-lg md:text-xl font-[Roboto] mb-6">
          At Inkarp, our leadership team isn’t just made up of titles — it’s built on decades of
          expertise, a passion for scientific innovation, and a commitment to excellence. Together,
          they guide our journey, empower our people, and elevate our customer experience.
        </p>
        <p className="text-black text-base md:text-lg font-[Roboto]">
          Spanning every region in India, their collective vision drives our mission: to deliver
          precision, reliability, and progress across laboratories and research facilities
          nationwide.
        </p>
      </div>
    </section>
  );
};

export default TeamIntro;
