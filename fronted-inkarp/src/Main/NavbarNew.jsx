import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ArrowDownToLine } from "lucide-react";
import InkarpLogo from "/inkarp old.svg";
import CatalystLogo from "/Catalyst.svg";
import SearchDialog from "../components/SearchDialog";

export default function NavbarNew() {
  const ProductProfile = "/ProductProfile/Inkarp_product_profile_2025.pdf";
  const location = useLocation();
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/about" },
    { name: "Verticals", path: "/verticals" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contactUs" },
  ];

  const isActive = (path) => location.pathname === path;

  // Close dropdown on route change
  useEffect(() => {
    setInsightsOpen(false);
  }, [location.pathname]);

  // Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setInsightsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll behavior for navbar animation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = async (query, callback) => {
    try {
      const mockResults = [];
      setTimeout(() => callback(mockResults), 500);
    } catch (error) {
      console.error("Search error:", error);
      callback([]);
    }
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed w-[95%] mx-auto top-2 rounded-3xl left-0 right-0 z-[9999] px-6 lg:px-12 py-2 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md backdrop-blur-md scale-[0.97]"
            : "bg-black/10"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between font-[TTNormsPro] transition-all duration-300">
          {/* Left Side: Logo + Nav */}
          <div className="flex items-center gap-8">
            <Link to="/">
              <img
                src={InkarpLogo}
                alt="Inkarp Logo"
                className={`h-10 lg:h-12 transition-all duration-300 ${
                  scrolled ? "scale-95" : "scale-100"
                }`}
              />
            </Link>

            <nav className="hidden lg:flex gap-6 text-lg font-semibold text-black tracking-wide items-center">
              {navLinks.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  className={`hover:text-[#E63946] transition ${
                    isActive(path) ? "text-[#E63946]" : ""
                  }`}
                >
                  {name}
                </Link>
              ))}

              {/* Insights Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setInsightsOpen(!insightsOpen)}
                  className="flex items-center gap-1 hover:text-[#E63946] transition"
                >
                  <span>Insights & Updates</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      insightsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {insightsOpen && (
                  <div className="absolute left-0 mt-2 w-52 bg-white border rounded shadow-lg z-50 text-sm font-normal">
                    <Link
                      to="/insights-and-updates/blogs"
                      className="block px-4 py-2 hover:bg-[#E63946] hover:text-white"
                    >
                      Blogs
                    </Link>
                    <Link
                      to="/insights-and-updates/news-and-events"
                      className="block px-4 py-2 hover:bg-[#E63946] hover:text-white"
                    >
                      News & Events
                    </Link>
                    <Link
                      to="/insights-and-updates/webinars"
                      className="block px-4 py-2 hover:bg-[#E63946] hover:text-white"
                    >
                      Webinars
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Right Side: Catalyst + Download Button */}
          <div className="flex items-center gap-4">
            <Link to="/catalystcue" title="CatalystCue">
              <img
                src={CatalystLogo}
                alt="CatalystCue"
                className="w-24 h-16 object-contain"
              />
            </Link>
            <a href={ProductProfile} download>
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-white bg-[#E63946] hover:bg-red-600 rounded-md">
                Product Profile
                <ArrowDownToLine className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </header>

      {/* Optional SearchDialog */}
      <SearchDialog
        isOpen={showSearchModal}
        onClose={() => setShowSearchModal(false)}
        onSearch={handleSearch}
      />
    </>
  );
}
