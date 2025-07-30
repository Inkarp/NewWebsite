import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import BlogsDetails from '../../../data/Blogs/BlogsDetails.jsx'; 
import BlogDetailsOne from '../../../data/Blogs/BlogDetailsOne.jsx';
import BlogDetailsTwo from '../../../data/Blogs/BlogDetailsTwo.jsx';
 // Import blog details data

const CardData = [
  ...BlogsDetails, 
  ...BlogDetailsOne ,
  ...BlogDetailsTwo
];


const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = CardData.find(e => e.id === parseInt(id));

  if (!event) {
    return <div className="text-center p-10 text-red-600 font-[MaxOT]">Event not found.</div>;
  }

  return (
    <div className="min-h-screen py-6 px-2 md:px-8 w-full ">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-30 bg-white shadow border border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white transition rounded-full w-10 h-10 flex items-center justify-center text-lg focus:outline-none"
        aria-label="Back"
      >
        <FaArrowLeft />
      </button>

      {/* Main Blog Image and Title */}
      <div className="flex flex-col items-center mb-8 w-full">
        <img
          src={event.image}
          alt={event.title}
          className="w-full object-cover rounded-xl shadow mb-4 border-2 border-[#fbeaec]"
        />
        <h1 className="text-3xl  mb-1 text-center font-[MaxOT] tracking-tight drop-shadow-sm">
          {event.title}
        </h1>
        {/* <div className="text-gray-500 text-sm mb-2 font-[Roboto]">{new Date(event.date).toDateString()}</div> */}
      </div>

      {/* Blog Sections */}
      <div className="flex flex-col gap-8 w-full">
        {event.sections && event.sections.map((sec, idx) => {
          if (sec.type === "image") {
            return (
              <div key={idx} className="flex flex-col items-center my-4">
                <img
                  src={sec.imageUrl}
                  alt={sec.caption || `Blog illustration ${idx + 1}`}
                  className="rounded-lg max-w-full max-h-80 object-contain border border-gray-200 shadow"
                />
                {sec.caption && (
                  <p className="mt-2 text-gray-500 text-center italic text-base font-[Roboto] max-w-lg">{sec.caption}</p>
                )}
              </div>
            );
          } else if (sec.type === "table") {
            return (
              <div key={idx} className="overflow-x-auto my-4">
                <table className="min-w-max border-collapse border border-gray-300 mx-auto bg-white shadow rounded-lg">
                 
                  <thead>
                    <tr>
                      {sec.columns && sec.columns.map((col, i) => (
                        <th key={i} className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold text-center">{col}</th>
                      ))}
                    </tr>
                    {sec.subcolumns && (
                      <tr>
                        {sec.subcolumns.map((subcol, i) => (
                          <th key={i} className="border border-gray-300 px-4 py-2 bg-gray-50 font-semibold text-center">{subcol}</th>
                        ))}
                      </tr>
                    )}
                  </thead>
                  <tbody>
                    {sec.rows && sec.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j} className="border border-gray-300 px-4 py-2 text-center">{cell}</td>
                        ))}
                      </tr>
                    ))}
                    
                  </tbody>
                  
                </table>
                {sec.caption && (
                  <div className="text-gray-600 text-sm italic mt-2 mb-2 font-[Roboto] w-full text-center">
                    {sec.caption}
                  </div>
                )}
                 
              </div>
            );
          } else {
            // Standalone subheading (no heading/content)
            if (sec.subheading && !sec.heading && !sec.content) {
              return (
                <div key={idx} className="mb-2">
                  <h3 className="text-xl font-semibold  mb-2 font-[MaxOT] tracking-tight">
                    {sec.subheading}
                  </h3>
                </div>
              );
            }
            // Heading and/or subheading with content
            return (
              (sec.heading || sec.content || sec.subheading) && (
                <div key={idx} className="mb-4 bg-white border-l-4 border-[#E63946] rounded-xl p-6 shadow-sm">
                  {sec.heading && (
                    <h2 className="text-2xl font-bold text-[#E63946] mb-1 font-[MaxOT] tracking-tight">
                      {sec.heading}
                    </h2>
                  )}
                  {Array.isArray(sec.subheading)
                    ? sec.subheading.map((sub, i) => (
                        <h3 key={i} className="text-lg font-semibold text-[#457b9d] mb-2 font-[MaxOT] tracking-tight">
                          {sub}
                        </h3>
                      ))
                    : sec.subheading && (
                        <h3 className="text-lg font-semibold text-[#457b9d] mb-2 font-[MaxOT] tracking-tight">
                          {sec.subheading}
                        </h3>
                      )
                  }
                  {Array.isArray(sec.content)
                    ? sec.content.map((para, i) => (
                        <p key={i} className="text-gray-800 whitespace-pre-line leading-relaxed text-base font-[Roboto] mb-2">
                          {para}
                        </p>
                      ))
                    : sec.content && (
                        <p className="text-gray-800 whitespace-pre-line leading-relaxed text-base font-[Roboto]">
                          {sec.content}
                        </p>
                      )
                  }
                </div>
              )
            );
          }
        })}
      </div>
    </div>
  );
};

export default BlogDetails;
