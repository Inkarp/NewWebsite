import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Search } from "lucide-react";
import SearchDialog from "../../SearchDialog";

import HeroImg1 from "/src/assets/HeroSection/RadleysCollabration4.jpg";
import LabBottle from '/lab-bottel.webp'
import DNA from '/Dna.webp'
import DNA2 from '/Dna2.jpg'
import HeroImg2 from "/src/assets/HeroSection/RadleysCollabration3.jpg";

import BGVideo from "/bg-video.mov"
import { synthesisVertical } from "../Search.jsx/SynthesisVertical";



const slides = [
  // {
  //   id: 1,
  //   title: "Advances of Science",
  //   subtitle: "Make Easier Life",
  //   // image: ,
  //   isVideo: true,
  //   videoUrl: BGVideo, // Use the video file directly
  // },
  {
    id: 2,
    title: "25 years",
    subtitle: "Trust Growth Science",
    image: HeroImg1,
    isVideo: false,
  },
  {
    id: 3,
    title: "Where Science Meet Laboratories",
    subtitle: "Excel Laboratory Equipment",
    image: DNA,
    isVideo: false,
  },
  {
    id: 4,
    title: "Where Science Meet Laboratories",
    subtitle: "Advance Equipment",
    image: DNA2,
    isVideo: false,
  },
  // {
  //   id: 5,
  //   title: "Precision for Progress",
  //   subtitle: "Innovation in Every Lab",
  //   image: HeroImg1,
  //   isVideo: false,
  // },
];

// Typing animation component
const TypingText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Speed of typing

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
  }, [text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {displayText}
    </motion.span>
  );
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [showSearchDialog, setShowSearchDialog] = useState(false);
  const videoRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Handle video playback
  useEffect(() => {
    const currentSlide = slides[current];
    if (currentSlide.isVideo && videoRef.current) {
      const video = videoRef.current;

      video.currentTime = 0; // Reset to start
      video.play().catch(error => {
        console.log("Video autoplay failed:", error);
        nextSlide();
      });

      const timer = setTimeout(() => {
        video.pause();
        nextSlide();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [current]);


  // Auto slide for non-video slides
  useEffect(() => {
    if (!slides[current].isVideo) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [current]);

  const handleSearch = (query, callback) => {
    // Convert query to lowercase for case-insensitive search
    const q = query.toLowerCase();
    const results = [];

    const vertical = synthesisVertical.vertical;
    const principal = synthesisVertical.principal;
    const products = synthesisVertical.products;

    // 1. Vertical search: if query matches the vertical name, return all products and models
    if (vertical.toLowerCase().includes(q)) {
      const allProducts = [];
      products.forEach((product) => {
        if (typeof product === 'string') {
          allProducts.push({
            name: product,
            image: null,
            principal: principal,
            productSlug: product.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
          });
        } else if (typeof product === 'object' && product.name) {
          // Add the product itself
          allProducts.push({
            name: product.name,
            image: null,
            principal: principal,
            productSlug: product.slug || product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
          });
          // Add all models
          if (Array.isArray(product.models)) {
            product.models.forEach((model) => {
              if (model.name) {
                allProducts.push({
                  name: model.name,
                  image: model.image ? model.image : null,
                  principal: principal,
                  productSlug: product.slug || product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
                  modelSlug: model.slug || model.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                });
              }
            });
          }
        }
      });
      results.push({
        title: vertical,
        products: allProducts,
        vertical: vertical
      });
      callback(results);
      return;
    }

    // 2. Product search: if query matches a product name, return that product and all its models
    let foundProduct = null;
    products.forEach((product) => {
      if (typeof product === 'object' && product.name && product.name.toLowerCase().includes(q)) {
        foundProduct = product;
      }
    });
    if (foundProduct) {
      const productResults = [];
      // Add the product itself
      productResults.push({
        name: foundProduct.name,
        image: null,
        principal: principal,
        productSlug: foundProduct.slug || foundProduct.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      });
      // Add all models
      if (Array.isArray(foundProduct.models)) {
        foundProduct.models.forEach((model) => {
          if (model.name) {
            productResults.push({
              name: model.name,
              image: model.image ? model.image : null,
              principal: principal,
              productSlug: foundProduct.slug || foundProduct.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
              modelSlug: model.slug || model.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
            });
          }
        });
      }
      results.push({
        title: foundProduct.name,
        products: productResults,
        vertical: vertical
      });
      callback(results);
      return;
    }

    // 3. Model and generic search (as before)
    const matchedProducts = [];
    products.forEach((product) => {
      if (typeof product === 'string') {
        if (product.toLowerCase().includes(q)) {
          matchedProducts.push({
            name: product,
            image: null,
            principal: principal,
            productSlug: product.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
          });
        }
      } else if (typeof product === 'object' && product.name) {
        // Check main product name
        if (product.name.toLowerCase().includes(q)) {
          matchedProducts.push({
            name: product.name,
            image: null,
            principal: principal,
            productSlug: product.slug || product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
          });
        }
        // Check models if present
        if (Array.isArray(product.models)) {
          product.models.forEach((model) => {
            if (model.name && model.name.toLowerCase().includes(q)) {
              matchedProducts.push({
                name: model.name,
                image: model.image ? model.image : null,
                principal: principal,
                productSlug: product.slug || product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
                modelSlug: model.slug || model.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
              });
            }
          });
        }
      }
    });
    if (matchedProducts.length > 0) {
      results.push({
        title: synthesisVertical.principal,
        products: matchedProducts,
        vertical: vertical
      });
    }
    callback(results);
  };

  return (
    <div className="relative w-full max-w-[98vw] mx-auto h-[320px] xs:h-[400px] sm:h-[450px] md:h-[520px] lg:h-[600px]  overflow-hidden">
      {/* Background image or video with direct transition */}
      <AnimatePresence mode="sync">
        {slides[current].isVideo ? (
          // No animation for video
          <div className="absolute inset-0 z-0">
            {slides.map((slide, index) =>
              slide.isVideo ? (
                <video
                  key={slide.id}
                  ref={index === current ? videoRef : null}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  muted
                  playsInline
                  loop={false}
                  preload="auto"
                >
                  <source src={slide.videoUrl} type="video/mp4" />
                </video>
              ) : null
            )}
          </div>

        ) : (
          <motion.div
            key={slides[current].id}
            className="absolute inset-0 z-0"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[current].image})` }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Search Bar */}
      <div className="absolute top-3 right-2 xs:top-4 xs:right-4 sm:top-6 sm:right-6 z-20">
        <button
          onClick={() => setShowSearchDialog(true)}
          className="relative h-10 xs:h-12 px-4 xs:px-8 pr-8 xs:pr-10 min-w-[140px] xs:min-w-[200px] rounded-full text-xs xs:text-sm bg-white/20 backdrop-blur-md border-2 border-[#E63946] shadow-md text-gray-800 flex items-center gap-2 transition-all duration-300 hover:ring-2 hover:ring-[#E63946] hover:bg-white/30 group"
        >
          <span className="absolute -top-2 -right-2 bg-[#E63946] text-white text-xs px-2 py-0.5 rounded-full animate-pulse shadow-lg">
            NEW
          </span>
          <Search className="h-4 w-4 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-gray-700 font-medium group-hover:text-[#E63946] group-hover:scale-105 transform transition-all duration-300">
            Search for Products
          </span>
        </button>
      </div>

      {/* Text Content with Typing Animation */}
      <motion.div
        key={`text-${slides[current].id}`}
        className="absolute bottom-0 z-10 w-full text-white text-center px-2 xs:px-4 pb-6 xs:pb-10 sm:pb-12 flex justify-center"
      >
        <div className="bg-black/30 backdrop-blur-[1px] rounded-t-2xl p-3 xs:p-6 max-w-xs xs:max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-widest border border-white/50 font-[MaxOT] px-2 xs:px-4 py-1 rounded-full text-base xs:text-lg mb-2 xs:mb-4 inline-block bg-white text-[#E63946] backdrop-blur-sm"
          >
            <TypingText text={slides[current].title} />
          </motion.span>
          <h1 className="text-base xs:text-xl md:text-2xl  leading-tight font-[Roboto] drop-shadow-lg">
            <TypingText text={slides[current].subtitle} delay={0.5} />
          </h1>
        </div>
      </motion.div>


      {/* Right-Side Controls */}
      <div className="bg-white p-2 xs:p-4 absolute rounded-l-xl right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2 xs:gap-4 z-20">
        <motion.button
          onClick={prevSlide}
          className="bg-gray-200/70 text-black p-1 xs:p-2 rounded-full hover:bg-red-200 shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5" />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="bg-gray-200/70 text-black p-1 xs:p-2 rounded-full hover:bg-red-200 shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5" />
        </motion.button>
      </div>

      {/* Watch Video Button - Only show on first slide */}
      {current === 0 && (
        <div className="relative z-10">
          <a
            href="https://www.youtube.com/@InkarpInstrument/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 xs:bottom-4 right-2 xs:right-4 flex items-center gap-2 px-3 xs:px-5 py-2 xs:py-4 rounded-full shadow hover:bg-red-500 hover:text-white transition-all duration-300 bg-red-100 group"
          >
            <div className="bg-red-600 border-2 border-red-300 rounded-full p-1 xs:p-2 group-hover:bg-white group-hover:border-white">
              <Play className="w-4 h-4 text-white group-hover:text-red-600" />
            </div>
            <span className="text-xs xs:text-sm font-medium text-black group-hover:text-white">Watch More</span>
          </a>
        </div>
      )}

      {/* Search Dialog */}
      <SearchDialog
        isOpen={showSearchDialog}
        onClose={() => setShowSearchDialog(false)}
        onSearch={handleSearch}
      />
    </div>
  );
}
