import { useEffect, useState } from 'react';
import { FiSearch, FiArrowRight } from 'react-icons/fi';

const navItems = ['Home', 'Our Story', 'Verticals', 'Careers', 'Contact Us', 'Insights & Blogs'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between relative">
        {/* Left Nav */}
        <nav className="flex items-center space-x-4 font-[serif] text-[10px]">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`uppercase text-sm font-semibold transition-colors ${
                item === 'Home' ? 'text-blue-500' : 'text-black hover:text-blue-500'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Centered Logo + CatalystCue */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center space-x-4">
          <img src="inkarp.svg" alt="Logo" className="w-36 h-auto" />
         
        </div>

        {/* Right Panel */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
           <img src="inkarp.svg" alt="CatalystCue" className="h-6 w-auto " />
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <FiSearch className="text-xl text-blue-600" />
          </div>

          {/* CTA Button */}
          <button className="bg-[#001837] text-white px-6 py-2 rounded-full flex items-center space-x-2 text-sm">
            <span>Product Profile</span>
            <FiArrowRight />
          </button>
        </div>
      </div>
    </header>
  );
}
