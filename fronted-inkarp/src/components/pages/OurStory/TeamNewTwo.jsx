import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import Sarvanan from '/src/assets/Team/Saravanan.jpeg';
import Madhu from '/src/assets/Team/Madhusudhan.jpeg';

const directors = [
  {
    name: 'K. Sreedhar',
    title: 'Director (South & East)',
    email: 'sreedhar@inkarp.com',
    location: 'Bangalore',
    img: 'https://www.inkarp.co.in/assets/images/our_team/K.Sreedhar.jpeg',
    message: `Directs Inkarp's sales efforts across the South, East, and Northeast regions. With expertise in applications such as chemical synthesis, catalysis, and battery testing, he ensures researchers receive solutions that advance their experimental needs.`,
    links: ['https://linkedin.com/in/k-sreedhar'],
  },
  {
    name: 'M. Madhusudhan',
    title: 'Director (North)',
    email: 'madhusudhan@inkarp.com',
    location: 'Delhi',
    img: Madhu,
    message: `Heads Inkarp's operations in the Northern, Central, and select Eastern regions. With deep expertise in chromatography and precision instrumentation, he specializes in solutions that streamline separation and analysis.`,
    links: ['https://linkedin.com/in/m-madhusudhan'],
  },
  {
    name: 'M. S. Reddy',
    title: 'Director (West)',
    email: 'msreddy@inkarp.com',
    location: 'Ahmedabad',
    img: 'https://www.inkarp.co.in/assets/images/our_team/M.S.Reddy.jpeg',
    message: `Leads Inkarp's sales operations across the Western region. Specializing in advanced homogenization and precision laboratory solutions, he focuses on delivering innovative tools that enhance research workflows.`,
    links: ['https://linkedin.com/in/m-s-reddy'],
  },
  {
    name: 'N. Saravanan',
    title: 'Chief Operating Officer (All India)',
    email: 'saravanan@inkarp.com',
    location: 'Chennai',
    img: Sarvanan,
    message: `Known for empowering teams and fostering innovation, Saravanan emphasizes trust, transparency, and continuous learning to drive operational excellence across Inkarp.`,
    links: ['https://linkedin.com/in/n-saravanan'],
  },
];

const DirectorCard = ({ director }) => {
  return (
    <div className="flex flex-col items-center bg-white p-2 rounded-xl shadow border border-gray-200">
      <img
        className="object-cover bg-gray-200 w-full max-w-xs rounded-xl aspect-[3/4]"
        src={director.img}
        alt={director.name}
      />
      <h3 className="mt-4 text-xl font-semibold text-[#E63946] text-center">{director.name}</h3>
      <p className="mt-1 text-base text-gray-800 font-semibold text-center">{director.title}</p>
      <p className="text-sm text-gray-500 text-center">{director.location}</p>
      <p className="mt-2 text-xs text-gray-600 text-center whitespace-pre-line">{director.message}</p>
      {director.links?.[0] && (
        <a
          href={director.links[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
      )}
    </div>
  );
};

export default function TeamNewTwo() {
  return (
    <section className="py-5 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        {/* <div className='bg-white p-5 w-[50%] mx-auto mb-5 rounded-xl'>
        <h2 className="text-3xl font-bold font-[MaxOT] text-[#E63946] mb-4 tracking-tight">Our Regional Directors</h2>
        <p className="text-lg max-w-3xl mx-auto font-[Roboto]">
          Our regional directors bring specialized expertise and deep market knowledge to serve our customers across India.
        </p>
        </div> */}

        <Fade direction="up" triggerOnce delay={300}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-4 w-full max-w-7xl">
            {directors.map((director) => (
              <DirectorCard key={director.name} director={director} />
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}
