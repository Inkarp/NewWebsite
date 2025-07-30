import React from 'react';

const BackButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className="bg-black/80 text-center w-48 rounded-2xl h-14 absolute top-0 right-0 text-white text-xl font-semibold group overflow-hidden"
    >
      {/* Expanding red background */}
      <div className="bg-red-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] z-10 transition-all duration-500 group-hover:w-[184px]">
        {/* Chevron Up Arrow */}
        <span className="text-black text-2xl font-bold  transition-opacity duration-300">
          ↑
        </span>
      </div>

      {/* Button Text */}
      <p className="relative z-0 translate-x-2">Go Back</p>
    </button>
  );
};

export default BackButton;
