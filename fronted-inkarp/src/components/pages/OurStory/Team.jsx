import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import Balu from '/src/assets/Team/Balu2.png';
import Natesh from '/src/assets/Team/Natesh2.png';
import Sarvanan from '/src/assets/Team/Saravanan.jpeg';
import Madhu from '/src/assets/Team/Madhusudhan.jpeg';

const teamMembers = [
  {
    name: 'S. Balu',
    title: 'Chairman & Managing Director',
    email: 'balu@inkarp.com',
    location: 'Hyderabad',
    img: Balu,
    message:
      "When I first started Inkarp in 1985, I had one guiding principle: to provide unmatched after-sale service and unwavering support to our customers. This commitment has been the cornerstone of our journey, and it remains at the heart of everything we do today.\n\nOur success is built on the trust and dedication of everyone we work with, from the passionate scientists who use our products to the incredible team that strives to meet and exceed expectations every day. We are not just a company; we are a family that believes in fostering strong relationships and making a real difference in the scientific community.\n\nI am deeply grateful for your continued support and trust. It is your belief in our mission that drives us to push boundaries, explore new markets, and continually enhance our offerings. Together, we are building a future where science thrives, and innovation knows no bounds.\n\nThank you for being an integral part of Inkarp's journey. Let us continue to grow, innovate, and make a lasting impact together.",
    links: ['https://linkedin.com/in/s-balu'],
  },

  {
    name: 'K. Natesh',
    title: 'Executive Director',
    email: 'natesh@inkarp.com',
    location: 'Mumbai',
    img: Natesh,
    message: "Leads all aspects of Inkarp's operations, including Sales, Customer Service, Operations, Finance, Marketing and Back Office. His comprehensive oversight ensures that every department works cohesively to achieve the company’s mission of delivering exceptional value to customers. With a strategic vision and a detail-oriented approach",
    links: ['https://linkedin.com/in/k-natesh'],
  },
  {
    name: 'K. Sreedhar',
    title: 'Director (South & East)',
    email: 'sreedhar@inkarp.com',
    location: 'Bangalore',
    img: 'https://www.inkarp.co.in/assets/images/our_team/K.Sreedhar.jpeg',
    message: 'Directs Inkarp’s sales efforts across the South, East, and Northeast regions, covering Tamil Nadu, Kerala, Karnataka, Telangana, Andhra Pradesh, West Bengal, Odisha, Assam, Meghalaya, Manipur, Mizoram, Tripura, Nagaland, Arunachal Pradesh, and Sikkim. ',
    links: ['https://linkedin.com/in/k-sreedhar'],
  },
  {
    name: 'M. Madhusudhan',
    title: 'Director (North)',
    email: 'madhusudhan@inkarp.com',
    location: 'Delhi',
    img: Madhu,
    message: 'Heads Inkarp’s operations in the Northern, Central, and select Eastern regions, including Delhi, Uttar Pradesh, Punjab, Chandigarh, Haryana, Himachal Pradesh, Uttarakhand, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, Bihar, and Jammu & Kashmir.',
    links: ['https://linkedin.com/in/m-madhusudhan'],
  },
  {
    name: 'M. S. Reddy',
    title: 'Director (West)',
    email: 'msreddy@inkarp.com',
    location: 'Ahmedabad',
    img: 'https://www.inkarp.co.in/assets/images/our_team/M.S.Reddy.jpeg',
    message: 'Leads Inkarp’s sales operations across the Western region, encompassing Maharashtra, Gujarat, and Goa. Specializing in advanced homogenization and precision laboratory solutions, he focuses on delivering innovative tools that enhance research workflows in areas like sample preparation, mixing, and high-performance material analysis. ',
    links: ['https://linkedin.com/in/m-s-reddy'],
  },
  {
    name: 'N. Saravanan',
    title: 'Chief Operating Officer (All India)',
    email: 'saravanan@inkarp.com',
    location: 'Chennai',
    img: Sarvanan,
    message: 'N. Saravanan’s journey with Inkarp Instruments reflects dedication, leadership, and a focus on excellence. With extensive experience, he has driven operational success, fostered collaboration, and ensured customer satisfaction. Known for empowering teams and fostering innovation, Saravanan emphasizes trust, transparency, and continuous learning. ',
    links: ['https://linkedin.com/in/n-saravanan'],
  },
];

export default function Team() {
  const [hovered, setHovered] = useState(null);

  const renderCard = (member, index) => {
    const isBalu = member.name.includes('S. Balu');
    const isMobile = window.innerWidth < 768;
    const hoveredHeight = hovered === index ? (isBalu ? '380px' : '350px') : '250px';
    const hoveredWidth = hovered === index ? (isMobile ? '90vw' : isBalu ? '800px' : '400px') : '200px';

    return (
      <div
        key={index}
        className="relative transition-all duration-500 flex"
        style={{ minHeight: '260px', zIndex: hovered === index ? 50 : 1 }}
      >
        <div
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          style={{
            display: 'flex',
            height: hoveredHeight,
            width: hoveredWidth,
            borderRadius: '40px',
            border: hovered === index ? '5px solid #E63946' : '0px solid #ccc',
            transition: 'all 0.6s ease',
            overflow: 'hidden',
            backgroundColor: '#E63946',
            boxShadow: hovered === index ? '0 0 20px rgba(30, 32, 28, 0.2)' : '0 0 5px rgba(184, 18, 18, 0.1)',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            
          }}
        >
          <div style={{ width: '200px', position: 'relative' }}>
            <div style={{ width: '100%', height: '220px', maxHeight: '200px', overflow: 'hidden', perspective: '1000px', margin: 'auto' }}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.8s',
                  transform: hovered === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    // borderRadius: '40px',
                    backfaceVisibility: 'hidden',
                  }}
                />
                <img
                  src={member.img}
                  alt="Back"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '40px',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    padding: '10px',
                  }}
                />
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <h3 className="font-[Max-OT] font-bold text-white mt-2 text-xl ">{member.name}</h3>
            </div>
            {hovered === index && member.links[0] && (
              <div className="flex justify-center mt-1">
                <a
                  href={member.links[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-1 rounded-full"
                >
                  <FaLinkedin className="text-[#0A66C2]" />
                </a>
              </div>
            )}
          </div>

          {hovered === index && member.message && (
            <div
              style={{
                padding: '20px',
                width: '100%',
                color: 'black',
                backgroundColor: '#DCDCDC',
                fontSize: '16px',
                fontStyle: 'italic',
                fontFamily: 'Roboto',
                textAlign: 'left',
              }}
            >
              <p className="text-red-500 font-bold">{member.title}</p>
              “{member.message}”
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full py-16 ">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-"
      // style={{ backgroundImage: `url(${BuildingInkarp})`, backgroundRepeat: 'no-repeat' }}
      ></div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/* <h2 className="text-4xl md:text-5xl font-bold text-[#1a1846] mb-2">Meet Our Leadership</h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mb-10">
          Inkarp is powered by passionate individuals who lead with purpose, drive growth, and ensure excellence in every division across India.
        </p> */}

        <div className="flex flex-col items-center justify-center mb-1">
          <div className="">{renderCard(teamMembers[0], 0)}</div>
          <div className="h-16 w-1 border-l-6 border-[#E63946] border-dotted" />
          <div className="mb-0 pb-0">{renderCard(teamMembers[1], 1)}</div>
          <div className="h-16 w-1 border-l-5 border-[#E63946] border-dotted" />
        </div>

        <div className="flex justify-center mb-4 relative w-full">
          <div className="w-[70%] h-1 border-t-4 border-dotted border-[#E63946]"></div>
        </div>

        <div className="w-full flex flex-wrap justify-center gap-6 min-h-[320px]">
          {teamMembers.slice(2).map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="h-8 w-1 border-dotted border-l-3 border-[#E63946] mb-2" />
              {renderCard(member, idx + 2)}
            </div>
          ))}
          {/* <div className="h-12 w-1 border-l-2 border-[#E63946] border-dotted" /> */}
        </div>
      </div>
    </div>
  );
}
