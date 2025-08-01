import React, { useState } from "react";
import { CalendarDays, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cardData } from "../NewsAndEvents/BlogsPage";

const articles = cardData;

export default function HomeBlogs() {
  const [featured, setFeatured] = useState(articles[0]);
  const [activeId, setActiveId] = useState(articles[0].id);
  const navigate = useNavigate();

  const handleSelect = (item) => {
    setActiveId(item.id);
    setFeatured(item);
  };

  const handleReadMore = (item) => {
    navigate(`/insights-and-updates/blogs/${item.id}`, {
      state: { card: item },
    });
  };

  return (
    <section className="w-[95%] mx-auto p-3">
      {/* <div className="text-center mb-6 w-full"> */}
        <div className="mx-auto w-full flex  items-center justify-center text-center ">
          <div>
            <p className="text-xs font-semibold uppercase font-[MaxOT] border px-4 py-1 rounded-full inline-block mb-3 border-[#E63946]">
              Blogs
            </p>
            <h2 className="text-3xl font-[MaxOT] text-[#E63946] pb-5 ">
              Expert Perspectives | Real-World Lab Applications
            </h2>
            </div>
            {/* <div className="border rounded-full px-3 py-2" >
              <button>View All Blogs</button>
            </div> */}
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-6 p-3 mx-auto border border-gray-200 rounded-xl">
          {/* Left Featured Blog */}
            <div
              className="p-5 cursor-pointer w-full"
              onClick={() => handleReadMore(featured)}
            >
              <div className="flex flex-col gap-6 h-full">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="rounded-3xl w-full object-fit max-h-[320px] min-h-[250px] border border-gray-500"
                />

                {/* Fix content box height to prevent layout shift */}
                <div className="flex flex-col items-center gap-3 w-full min-h-[180px]">
                  <p className="text-sm text-[#E63946] uppercase tracking-wider text-center">
                    {new Date(featured.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    {" "}
                    <span className="text-[#E63946] font-medium">
                      {featured.location}
                    </span>
                  </p>
                  <p className="text-md text-center font-[Roboto] w-full flex-wrap">
                    {featured.description}
                  </p>
                  <button
                    className="px-6 py-3 bg-[#E63946] text-white font-[Roboto] text-sm font-bold rounded-full w-fit flex items-center gap-2 hover:bg-[#F5F5F5] hover:text-[#E63946] transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReadMore(featured);
                    }}
                  >
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

          {/* Right Blog List */}
            <div className="flex flex-col bg-[#F5F5F5] rounded-xl p-5 gap-4 overflow-y-auto custom-scroll w-full ">
              {articles.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={`rounded-xl border p-3 cursor-pointer transition w-full
                    ${
                      activeId === item.id
                        ? "bg-[#F5F5F5] border-2 border-[#E63946] shadow-md text-[#E63946] "
                        : "hover:bg-[#E63946] hover:text-white border-gray-200"
                    }`}
                >
                  <h4 className="text-md font-semibold font-[Roboto] text-center ">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-center gap-2 text-sm mt-1">
                    <span className="flex items-center justify-center gap-1">
                      <CalendarDays size={14} />
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    {/* <span className="flex items-center gap-1 text-[#be0010] font-medium">
                      {item.location}
                    </span> */}
                  </div>
                </div>
              ))}
            </div>
        </div>
      {/* </div> */}
    </section>
  );
}
