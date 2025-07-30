import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import Balu from '/src/assets/Team/Balu.png';
import Natesh2 from '/src/assets/Team/Natesh2.png';

const members = [
  {
    name: 'S. Balu',
    title: 'Chairman & Managing Director',
    email: 'balu@inkarp.com',
    location: 'Hyderabad',
    img: Balu,
    message: `When I first started Inkarp in 1985, I had one guiding principle: to provide unmatched after-sale service and unwavering support to our customers. This commitment has been the cornerstone of our journey, and it remains at the heart of everything we do today.\n\nOur success is built on the trust and dedication of everyone we work with, from the passionate scientists who use our products to the incredible team that strives to meet and exceed expectations every day. We are not just a company; we are a family that believes in fostering strong relationships and making a real difference in the scientific community.\n\nI am deeply grateful for your continued support and trust. It is your belief in our mission that drives us to push boundaries, explore new markets, and continually enhance our offerings. Together, we are building a future where science thrives, and innovation knows no bounds.\n\nThank you for being an integral part of Inkarp's journey. Let us continue to grow, innovate, and make a lasting impact together.`,
    links: ['https://linkedin.com/in/s-balu'],
  },
  {
    name: 'K. Natesh',
    title: 'Executive Director',
    email: 'natesh@inkarp.com',
    location: 'Mumbai',
    img: Natesh2,
    message: `Leads all aspects of Inkarp's operations, including Sales, Customer Service, Operations, Finance, Marketing and Back Office. His comprehensive oversight ensures that every department works cohesively to achieve the company’s mission of delivering exceptional value to customers. With a strategic vision and a detail-oriented approach, he has streamlined processes, optimized resources, and fostered a culture of excellence across the organization. Under his leadership, Inkarp has expanded its reach, enhanced its service capabilities, and consistently raised the bar in quality and customer satisfaction, making it a preferred partner in the scientific community.`,
    links: ['https://linkedin.com/in/k-natesh'],
  },
];

const MemberCard = ({ member }) => {
  return (
    <div className="relative flex items-start gap-8 text-left p-6 bg-white backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-[#E63946] transition-all duration-300 w-full max-w-4xl">
      <div className="flex-shrink-0">
        <div className=" rounded-lg flex items-center justify-center bg-white shadow-md overflow-hidden w-64 h-80">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow min-w-0">
        <div className="flex justify-between items-start w-full mb-2">
          <div>
            <h3 className="text-xl font-bold text-[#E63946] font-[MaxOT]">{member.name}</h3>
            <p className="text-lg text-gray-800 font-semibold font-[MaxOT]">{member.title}</p>
          </div>
          {member.links?.[0] && (
            <a
              href={member.links[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 ml-4 flex-shrink-0"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          )}
        </div>
        <p className="text-md font-[Roboto] font-italic whitespace-pre-line text-black">{member.message}</p>
      </div>
    </div>
  );
};

export default function TeamNew() {
  return (
    <section className=" min-h-screen">
      <div className="mx-auto text-center">
        <div className='bg-white w-full mx-auto' >
        <h2 className="text-3xl font-bold font-[MaxOT] text-[#E63946] tracking-tight">Meet Our Leadership</h2>
        <p className="text-lg  max-w-3xl mx-auto font-[Roboto]">
          At Inkarp, our leadership team isn't just made up of titles — it's built on decades of
          expertise, a passion for scientific innovation, and a commitment to excellence. Together,
          they guide our journey, empower our people, and elevate our customer experience.
        </p>
        </div>
        <div className="flex flex-col items-center gap-8 py-5">
          {/* Chairman */}
          <Fade direction="down" triggerOnce>
            <div className="flex justify-center w-full">
              <MemberCard member={members[0]} />
            </div>
          </Fade>
          <div className="w-px h-12" />
          {/* Executive Director */}
          <Fade direction="up" triggerOnce delay={300}>
            <div className="flex justify-center w-full">
              <MemberCard member={members[1]} />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
