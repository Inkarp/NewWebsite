import { Mail, Phone, Wifi } from "lucide-react";
import React, { useState, useEffect } from "react";
import IndiaMap from "/IndiaMap.png";

function ContactNew() {
  const [screenSize, setScreenSize] = useState("lg");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize("sm");
      else if (width < 1024) setScreenSize("md");
      else setScreenSize("lg");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const branches = [
    {
      name: "Hyderabad",
      address: "Hyderabad, Telangana (Head Office)",
      phone: "+91 9000000010",
      email: "hyderabad@inkarp.co.in",
      type: "head",
      position: { sm: ["67%", "42%"], md: ["65%", "40%"], lg: ["65%", "40%"] },
    },
    {
      name: "Bengaluru",
      address: "Bengaluru, Karnataka",
      phone: "+91 9000000000",
      email: "bengaluru@inkarp.co.in",
      type: "satellite",
      position: { sm: ["78%", "30%"], md: ["79%", "30%"], lg: ["79%", "30%"] },
    },
    {
      name: "Chennai",
      address: "Chennai, Tamil Nadu",
      phone: "+91 9000000001",
      email: "chennai@inkarp.co.in",
      type: "satellite",
      position: { sm: ["84%", "45%"], md: ["84%", "45%"], lg: ["84%", "45%"] },
    },
    {
      name: "Delhi",
      address: "Delhi, New Delhi",
      phone: "+91 9000000006",
      email: "delhi@inkarp.co.in",
      type: "satellite",
      position: { sm: ["35%", "36%"], md: ["33%", "36%"], lg: ["33%", "36%"] },
    },
    // Add more as needed
  ];

  return (
    <>
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .head-office-icon {
          animation: pulse 2s infinite;
          color: red;
        }
        .satellite-icon {
          animation: pulse 3s ease-in-out infinite;
          color: #555;
        }
        .location-card {
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(10px);
          transition: all 0.3s ease;
          left: 50%;
          top: -120px;
        }
        .location-wrapper:hover .location-card {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
      `}</style>

      <section className="px-4 md:px-12 mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-1/4 text-center lg:text-left space-y-4">
            <h2 className="text-3xl font-bold text-red-600">Head & Remote Branches</h2>
            <p className="text-gray-700 text-lg">
              Hyderabad leads the way, while our satellite locations ensure every region is served with speed and care.
            </p>
          </div>

          {/* Map */}
          <div className="relative w-full mt-2 max-w-4xl min-h-[600px] rounded-xl overflow-hidden">
            <img
              src={IndiaMap}
              alt="India Map"
              className="object-contain w-full h-full"
              loading="lazy"
              style={{ filter: "brightness(1.0)" }}
            />

            {branches.map((branch, index) => {
              const [top, left] = branch.position[screenSize];
              const iconClass = branch.type === "head" ? "head-office-icon" : "satellite-icon";

              return (
                <div
                  key={index}
                  className="absolute flex flex-col items-center location-wrapper"
                  style={{
                    top,
                    left,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Icon */}
                  <div className={`z-50 ${iconClass}`}>
                    <Wifi size={20} />
                  </div>
                  <span className="mt-1 text-xs font-semibold text-black bg-white px-2 py-0.5 rounded-md shadow">
                    {branch.name}
                  </span>

                  {/* Hover Card */}
                  <div className="location-card absolute w-64 bg-white text-black p-4 rounded-lg shadow-2xl z-100">
                    <h2 className="text-lg font-bold">{branch.name}</h2>
                    <p className="text-sm mt-2">{branch.address}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Phone size={16} />
                      <span className="text-sm">{branch.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Mail size={16} />
                      <span className="text-sm">{branch.email}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/4 text-center lg:text-left space-y-4">
            <h2 className="text-3xl font-bold text-red-600">Nationwide Connectivity</h2>
            <p className="text-gray-700 text-lg">
              From metros to regional centers, Inkarp ensures local expertise with national reach.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactNew;
