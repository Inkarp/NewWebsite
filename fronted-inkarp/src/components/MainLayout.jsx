import { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FiBell } from "react-icons/fi";

import NavbarNew from "../Main/NavbarNew";
import Breadcrumbs from "./pages/Breadcrumb";
import LoadingScreen from "../LoadingScreen";
import Footer from "../Main/Footer";

import Webinar1 from '/src/assets/Webinars/WebinarImg1.jpg';
import Webinar2 from '/src/assets/Webinars/WebinarImg2.jpg';
import Webinar3 from '/src/assets/Webinars/WebinarImg3.jpg';

const ScrollToTopIcon = () => (
  <svg className="w-3 fill-black delay-50 duration-200 group-hover/button:-translate-y-12" viewBox="0 0 384 512">
    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
  </svg>
);

export default function MainLayout() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [autoShown, setAutoShown] = useState(false);
  const [iconAnimate, setIconAnimate] = useState(false);
  const [closingAnimation, setClosingAnimation] = useState(false);
  const autoCloseTimerRef = useRef(null);

  const images = [Webinar1, Webinar2, Webinar3];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowWhatsApp(true);
      const timeout = setTimeout(() => setShowWhatsApp(false), 4000);
      return () => clearTimeout(timeout);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const timer = setTimeout(() => {
      if (!autoShown) {
        setShowPopup(true);
        setAutoShown(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [autoShown, location.pathname]);

  useEffect(() => {
    if (showPopup && !closingAnimation) {
      const visibleTimer = setTimeout(() => setPopupVisible(true), 500);
      return () => clearTimeout(visibleTimer);
    } else {
      setPopupVisible(false);
    }
  }, [showPopup, closingAnimation]);

  useEffect(() => {
    if (showPopup && !autoCloseTimerRef.current && autoShown) {
      autoCloseTimerRef.current = setTimeout(() => {
        triggerAnimatedClose();
      }, 8000);
    }
    return () => clearTimeout(autoCloseTimerRef.current);
  }, [showPopup, autoShown]);

  useEffect(() => {
    if (!popupVisible) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [popupVisible]);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const interval = setInterval(() => {
      setIconAnimate(true);
      setTimeout(() => setIconAnimate(false), 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, [location.pathname]);

  const triggerAnimatedClose = () => {
    setPopupVisible(false);
    setClosingAnimation(true);
    setTimeout(() => {
      setShowPopup(false);
      setClosingAnimation(false);
      autoCloseTimerRef.current = null;
    }, 500);
  };

  const handleManualOpen = () => {
    clearTimeout(autoCloseTimerRef.current);
    autoCloseTimerRef.current = null;
    setShowPopup(true);
    setClosingAnimation(false);
  };

  const handleClosePopup = () => {
    clearTimeout(autoCloseTimerRef.current);
    autoCloseTimerRef.current = null;
    triggerAnimatedClose();
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <div className="w-full  min-h-screen overflow-hidden">
        {/* Top Navbar */}
        <div className="">
        <NavbarNew />
        </div>

        {/* Page Content */}
        <main className="relative min-h-screen flex flex-col mt-20">
          <Breadcrumbs />
          <Outlet />

          {/* Bell + Webinar Popup */}
          {location.pathname === "/" && (
            <>
              {!showPopup && (
                <div
                  className={`fixed bottom-20 left-4 z-[10001] bg-[#E63946] text-white p-3.5 rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110 ${iconAnimate ? 'animate-bounce' : ''}`}
                  onClick={handleManualOpen}
                >
                  <FiBell className="text-xl" />
                </div>
              )}

              {showPopup && (
                <div
                  className="fixed left-0 right-0 bottom-0 z-[10002] flex items-end justify-center px-6 pb-6"
                  onClick={handleClosePopup}
                >
                  <div
                    className={`relative w-[320px] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 ${closingAnimation ? 'animate-slide-out' : 'animate-slide-in'}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={handleClosePopup}
                      className="absolute top-2 right-2 text-white bg-black/60 hover:bg-black p-1 rounded-md text-xl z-10"
                      aria-label="Close"
                    >
                      ×
                    </button>
                    <div className="relative p-2 bg-gray-100">
                      <img
                        key={currentImage}
                        src={images[currentImage]}
                        alt={`Webinar ${currentImage + 1}`}
                        className={`w-full h-auto object-contain transition-transform duration-700 ease-in-out transform ${popupVisible ? 'animate-image-slide' : ''}`}
                      />
                      <a
                        href="/insights-and-updates/webinars"
                        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-medium text-xs shadow-md"
                      >
                        Register Now
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* WhatsApp Icon */}
          <div
            className="fixed bottom-6 left-4 z-[9999] group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="relative w-14 h-14 flex items-center justify-center">
              <div className="absolute bottom-0 left-0 w-5 h-5 bg-green-500 rounded-tr-full animate-ping-fast"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 bg-green-400 rounded-tr-full animate-pulse-fast"></div>
            </div>
            <div className={`absolute bottom-0 left-6 ${showWhatsApp || hovered ? "animate-slideIn" : "animate-slideOut"}`}>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp size={28} />
              </a>
            </div>
          </div>

          {/* Scroll To Top */}
          {showScrollTop && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer fixed right-2 bottom-2 z-[99999] group/button after:content-['Go_to_top'] after:text-black after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 after:duration-200 w-12 h-12 rounded-full border border-[#E63946] bg-white pointer flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-36 overflow-hidden active:scale-90"
            >
              <ScrollToTopIcon />
            </button>
          )}

          <Footer />
        </main>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideIn {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideOut {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        @keyframes ping-fast {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes pulse-fast {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }
        @keyframes slideInUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideOutToBottomRight {
          from { transform: translateY(0) scale(1); opacity: 1; }
          to { transform: translate(120px, 100px) scale(0.1); opacity: 0; }
        }
        @keyframes slideImageLeft {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slideIn { animation: slideIn 0.5s ease forwards; }
        .animate-slideOut { animation: slideOut 0.5s ease forwards; }
        .animate-ping-fast { animation: ping-fast 1.5s infinite; }
        .animate-pulse-fast { animation: pulse-fast 2s infinite; }
        .animate-slide-in { animation: slideInUp 0.5s ease-out forwards; }
        .animate-slide-out { animation: slideOutToBottomRight 0.5s ease-in forwards; }
        .animate-image-slide { animation: slideImageLeft 0.3s ease-out; }
      `}</style>
    </>
  );
}
