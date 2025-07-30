import { Mail, Phone, MapPin } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import IndiaMap from "/IndiaMap.svg";

function Contact() {
  const [screenSize, setScreenSize] = useState("lg");
  const [hoveredBranch, setHoveredBranch] = useState(null);
  const [cardHovered, setCardHovered] = useState(false);
  const hideTimeout = React.useRef();

  // Detect screen size to apply different top/left positions
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

  // Hide card only if mouse leaves both marker and card
  useEffect(() => {
    if (hoveredBranch === null && !cardHovered) {
      hideTimeout.current = setTimeout(() => {
        setHoveredBranch(null);
      }, 150);
    } else {
      clearTimeout(hideTimeout.current);
    }
    return () => clearTimeout(hideTimeout.current);
  }, [hoveredBranch, cardHovered]);

  const branches = [
    {
      name: "Bengaluru",
      address: " Site No: D-71, 1st Floor, Above Axis Bank Ltd, Nandini Dollars Layout, Dollar Schemes, Nandini Layout, Bengaluru -560096. Karnataka.",
      phone: "Sales: 7338186776, Service: 7338186774",
      email: "salesbglr@inkarp.co.in, servicebglr@inkarp.co.in",
      position: { sm: ["80%", "35%"], md: ["79%", "35%"], lg: ["82%", "36%"] },
    },
    {
      name: "Thiruvananthapuram",
      address: "T.C.46/2025, SNRA 110, Shastha Nagar, Karamana, Thiruvananthapuram – 695002. Kerala.",
      phone: "Sales: 7338186776, Service: 7338825314",
      email: "saleskerala@inkarp.co.in, servicekerala@inkarp.co.in",
      position: { sm: ["72%", "47%"], md: ["90%", "34%"], lg: ["96%", "39%"] },
    },
    {
      name: "Chennai",
      address: "6A & 6B Jhaver Plaza, 1 A Nungambakkam High Road, Chennai – 600034.Tamil Nadu.",
      phone: "Sales: 7338825318, Service: 7338825314",
      email: "saleschennai@inkarp.co.in,servicechennai@inkarp.co.in",
      position: { sm: ["64%", "50%"], md: ["84%", "45%"], lg: ["85%", "47%"] },
    },
    {
      name: "Kolkata",
      address: "P-40A, Gariahat Road (South), Cit Scheme - LXII, (1st Floor), Near Dhakuria Bridge - 700031. Kolkata.",
      phone: "Sales: 8712600762, Service: 97331146991",
      email: "saleskolkata@inkarp.co.in, servicekolkata@inkarp.co.in",
      position: { sm: ["38%", "75%"], md: ["50%", "68%"], lg: ["50%", "72%"] },
    },
    {
      name: "Ahmedabad",
      address: "408, 4th Floor, Kataria Arcade, Near Adani Vidya Mandir, Behind Sarkhej Roza, Makarba, Ahmedabad – 380051. Gujarat.",
      phone: "Sales: 7780411299, Service: 9281014848",
      email: "salesahm@inkarp.co.in, serviceahm@inkarp.co.in",
      position: { sm: ["40%", "25%"], md: ["50%", "15%"], lg: ["51%", "22%"] },
    },
    {
      name: "Mumbai",
      address: "310/311, B-Wing, Dhamji Shamji Corporate Square, Next to Kanara Business Centre, Laxmi Nagar, Ghatkopar East, Mumbai – 400075. Maharashtra.",
      phone: "Sales: 7815901818, Service: 9281014851",
      email: "salesmumbai@inkarp.co.in, supportmumbai@inkarp.co.in",
      position: { sm: ["50%", "25%"], md: ["63%", "20%"], lg: ["65%", "22%"] },
    },
    {
      name: "Delhi",
      address: "4FCS-52 TO 55, Corporate Suites, Ansal Plaza, Sector-1, Vaishali, Ghaziabad – 201010. Uttar Pradesh.",
      phone: "Sales: 7042194732 / 7042066011, Service: 7042194720",
      email: "salesdelhi@inkarp.co.in, servicedelhi@inkarp.co.in",
      position: { sm: ["25%", "38%"], md: ["33%", "36%"], lg: ["33%", "36%"] },
    },
    {
      name: "Visakhapatnam",
      address: "Flat No: 501, 4th Floor, Ayyappa Nilayam, Sheelanagar, Visakhapatnam – 530012. Andhra Pradesh.",
      phone: "Sales: 7331146992, Service: 7331146991",
      email: "salesvizag@inkarp.co.in, servicevizag@inkarp.co.in",
      position: { sm: ["50%", "69%"], md: ["68%", "55%"], lg: ["68%", "60%"] },
    },
    {
      name: "Pune",
      address: "Office No. 511, Fifth Floor, West Avenue, Bremen Chowk, Opposite PMRDA, Aundh, Pune – 411007. Maharashtra.",
      phone: "Sales: 7780412649, Service: 9281014852",
      email: "salespune@inkarp.co.in, servicepune@inkarp.co.in",
      position: { sm: ["50%", "30%"], md: ["70%", "30%"], lg: ["68%", "28%"] },
    },
    {
      name: "Chandigarh",
      address: "House No. 8, 1st Floor, Phase XI, SAS Nagar, Mohali – 160062. Chandigarh.",
      phone: "Sales: 7042191973, Service: 7042194720",
      email: "saleschd@inkarp.co.in, servicedelhi@inkarp.co.in",
      position: { sm: ["20%", "42%"], md: ["25%", "38%"], lg: ["25%", "37%"] },
    },
    {
      name: "Vadodara",
      address: "F-31 Yogeshwar Apartments - 1, Opp. Reliance Petrol Pump, Above Ajanta Faras Khana, High Tension Road, Subhanpura, Vadodara – 390023. Gujarat",
      phone: "Sales: 7780411299, Service: 9281014848",
      email: "salesbaroda@inkarp.co.in, serviceahm@inkarp.co.in",
      position: { sm: ["45%", "32%"], md: ["60%", "18%"], lg: ["57%", "23%"] },
    },
    {
      name: "Hyderabad",
      address: "Inkarp Instruments Pvt Ltd, Plot No - 5A/10-11, 3rd Floor, IDA Nacharam Road No. 1,Nacharam - Chilka Nagar Road, Hyderabad – 500076",
      phone: "Sales: +91 99666 34008, Service: +91 40 2717 2293",
      email: "saleshyd@inkarp.co.in, servicehyd@inkarp.co.in",
      position: { sm: ["50%", "48%"], md: ["65%", "40%"], lg: ["68%", "42%"] },
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Inkarp Instruments</title>
        <meta name="keywords" content='Contact Us - Inkarp Instruments Private Ltd' />
        <meta name="description" content="Get in touch with Inkarp Instruments for sales, service, and support across India. Find our branches and contact details here." />
      </Helmet>

      <style >{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.75; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .location-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>

      <section className="px-2 md:px-12 mx-auto font-['Roboto']">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Left Side */}
          <div className="w-full lg:w-1/4 text-center sm:text-right md:text-right lg:text-left space-y-4 z-0">
            <h2 className="text-3xl font-bold text-[#E63946] font-[MaxOT]">13+ Branches Across India</h2>
            <p className="text-lg">Wherever you are, we're nearby—ready to support and serve your scientific journey.</p>
          </div>

          {/* India Map */}
          <div className="relative w-full mx-auto rounded-xl ">
            <img src={IndiaMap} alt="Location Map" className="object-contain w-full h-full" 
            style={{ filter: "brightness(1)" }} 
            />

            {branches.map((branch, index) => {
              const [top, left] = branch.position[screenSize];
              return (
                <div
                  key={index}
                  className="absolute"
                  style={{ top, left, transform: "translate(-50%, -50%)" }}
                  onMouseEnter={() => setHoveredBranch(index)}
                  onMouseLeave={() => {
                    hideTimeout.current = setTimeout(() => {
                      if (!cardHovered) setHoveredBranch(null);
                    }, 150);
                  }}
                >
                  <div className="relative z-[10000] w-6 h-6">
                    <div className="w-5 h-5 bg-red-500 rounded-full location-ping absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
                    <div className="w-3 h-3 bg-red-700 border border-white rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md z-10" />
                  </div>
                  <span className="mt-1 text-sm font-medium text-black bg-white px-2 py-0.5 rounded-md shadow border border-gray-200">
                    {branch.name}
                  </span>
                  {/* Show details to the right of marker if hovered */}
                  {hoveredBranch === index && (
                    <div
                      className="absolute top-1/2 left-[110%] z-[9999] w-[320px] max-w-xs bg-white p-4 rounded-2xl shadow-2xl border-2 border-[#E63946] font-['Roboto']"
                      style={{ transform: "translateY(-50%)" }}
                      onMouseEnter={() => setCardHovered(true)}
                      onMouseLeave={() => {
                        setCardHovered(false);
                        hideTimeout.current = setTimeout(() => {
                          setHoveredBranch(null);
                        }, 150);
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-[#E63946] p-2 rounded-full flex items-center justify-center">
                          <MapPin size={20} color="#fff" />
                        </span>
                        <h2 className="text-xl font-bold text-[#E63946] font-['MaxOT'] tracking-wide">
                          {branch.name}
                        </h2>
                      </div>
                      <div className="flex items-start gap-3 bg-[#fef2f2] rounded-lg p-3 mb-2">
                        <MapPin size={18} color="#E63946" />
                        <p className="text-sm leading-snug">{branch.address}</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#f5f5f5] rounded-lg p-3 mb-2">
                        <Phone size={18} color="#E63946" />
                        <div className="flex flex-col gap-1">
                          {branch.phone.split(',').map((ph, idx) => {
                            const phoneNum = ph.replace(/[^0-9+]/g, '');
                            return (
                              <a key={idx} href={`tel:${phoneNum}`} className="hover:text-[#E63946] underline font-medium">
                                {ph.trim()}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex items-start gap-3 bg-[#f5f5f5] rounded-lg p-3">
                        <Mail size={18} color="#E63946" />
                        <div className="flex flex-col gap-1">
                          {branch.email.split(',').map((em, idx) => (
                            <a key={idx} href={`mailto:${em.trim()}`} className="hover:text-[#E63946] underline font-medium">
                              {em.trim()}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/4 text-center lg:text-left space-y-4 z-0">
            <h2 className="text-3xl font-bold text-[#E63946] font-[MaxOT]">Inkarp Is Closer Than You Think</h2>
            <p className="text-lg">Tap into our local teams for expert consultation and service tailored to your region.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
