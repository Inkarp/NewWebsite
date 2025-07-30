import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import RotaryFaqs from "./RotaryFaqs";
import { Share2, Download, HelpCircle, CheckCircle, Wrench, Phone, Settings, FlaskConical, ZoomIn, } from "lucide-react";
import { HiOutlineClipboardList } from "react-icons/hi";


// Logos & Images
import Heidolph from '/src/assets/PrincipalLogos/RowOne/Heidolph.svg';
import Polyscience from "/src/assets/PrincipalLogos/RowOne/Polyscience.png";
import Radleys from "/src/assets/PrincipalLogos/RowOne/radley.svg";
import Rotzmeier from "/src/assets/PrincipalLogos/RowOne/Rotzmeier.gif";
import ThalesNano from "/src/assets/PrincipalLogos/RowOne/ThalesNano.jpg";
import Bruker from "/src/assets/PrincipalLogos/RowSeven/Bruker.svg";

import HeiVapCore from "/images/products/heidolph/Hei-VAP-HL-G3.webp";
import HeiVapExpert from "/images/products/heidolph/Hei-VAP-Expert.webp";
import HeiVapUltimate from "/images/products/heidolph/Hei-VAP-Ultimate.webp";
import HeiVapUltimateControl from "/images/products/heidolph/Hei-VAP-Ultimate-Control.webp";
import HeiVapExpertControl from "/images/products/heidolph/Hei-VAP-Expert-Control.webp";

import HeiVapIndustrial from "/images/products/heidolph/Hei-VAP-Industrial.webp";
import HeiVapIndustrialBasic from "/images/products/heidolph/Hei-VAP-Industrial-Basic.webp"

import LabScaleHeiVapDismatic from "/images/products/heidolph/Lab-Scale-Hei-Vol-Distimatic.webp"
import LabScaleHeiVapDismaticPro from "/images/products/heidolph/Lab-Scale-Hei-Vol-Distimatic-Pro.webp";



import HeiFLowCore600 from "/images/products/heidolph/Hei-FLOW-Core-600.webp"
import HeiFLowExpert600 from "/images/products/heidolph/Hei-FLOW-Expert-600.webp"
import HeiFLowUltimate600 from "/images/products/heidolph/Hei-FLOW-Ultimate-600.webp"
import HeiFLowCore120 from "/images/products/heidolph/Hei-FLOW-Core-120.webp"
import HeiFLowExpert120 from "/images/products/heidolph/Hei-FLOW-Expert-120.webp"
import HeiFLowUltimate120 from "/images/products/heidolph/Hei-FLOW-Ultimate-120.webp"

import HeiProcessCore from "/images/products/heidolph/Hei-PROCESS-Core.webp"
import HeiProcessExpert from "/images/products/heidolph/Hei-PROCESS-Expert.webp"
import HeiProcessUltimate from "/images/products/heidolph/Hei-PROCESS-Ultimate.webp"
import HeiProcessCustomise from "/images/products/heidolph/Hei-PROCESS-Customized.webp"

import SphericalPlate from "/images/products/heidolph/Sphericalplate-5D.webp"

import ReaxTop from "/images/products/heidolph/Reax-top.webp"
import ReaxControl from "/images/products/heidolph/Reax-control.webp"
import MultiReax from "/images/products/heidolph/Multi-Reax2.webp"
import TitraMax101 from "/images/products/heidolph/Titramax-101.webp"
import TitraMax100 from "/images/products/heidolph/Titramax-100.webp"
import TitraMax1000 from "/images/products/heidolph/Titramax-1000.webp"
import Rotamax120 from "/images/products/heidolph/Rotamax-120.webp"
import Unimax1010 from "/images/products/heidolph/Unimax-1010.webp"
import Unimax2010 from "/images/products/heidolph/Unimax-2010.webp"
import DuoMax from "/images/products/heidolph/Duomax-1030.webp"
import ProMax1020 from "/images/products/heidolph/Promax-1020.webp"
import ProMax2020 from "/images/products/heidolph/Promax-2020.webp"
import PolyMax1040 from "/images/products/heidolph/Polymax-1040.webp"
import PolyMax2040 from "/images/products/heidolph/Polymax-2040.webp"
import Vibramax100 from "/images/products/heidolph/Vibramax-100.webp"
import Reax20 from "/images/products/heidolph/Reax-20.webp"
import Reax20New from "/images/products/heidolph/Reax-20-1-16.webp"
import Reax2 from "/images/products/heidolph/Reax2-with-Adapter.webp"
import TitramaxPackage from "/images/products/heidolph/titramax-package.webp"

import ProductDistributorSection from "../ProductDistributorSection";

import { RotaryEvaporators } from '../../../../data/RotaryEvaporators';
import { OverHeadStirrers } from '../../../../data/OverHeadStirrers';
import { LargeScale } from '../../../../data/LargeScale';
import { MagneticStirrers } from '../../../../data/MagneticStirrers';
import { ProcessingSolutions } from '../../../../data/ProcessingSolutions';
import { PeristalicPumps } from '../../../../data/PeristalicPumps';
import { SynthesisProductDetails } from '../../../../data/synthesisProductDetails';
import { SynthesisProductDetailsOne } from '../../../../data/synthesisProductDetailsOne';
import { SynthesisProductDetailsTwo } from '../../../../data/synthesisProductDetailsTwo';

// Merge all product objects into one
const AllSynthesisProductDetails = {
  ...RotaryEvaporators,
  ...LargeScale,
  ...OverHeadStirrers,
  ...ProcessingSolutions,
  ...MagneticStirrers,
  ...PeristalicPumps,
  ...SynthesisProductDetails,
  ...SynthesisProductDetailsOne,
  ...SynthesisProductDetailsTwo
};

export default function RotarProductDetails() {
  const { productSlug } = useParams();
  const product = AllSynthesisProductDetails[productSlug];
  const allRotarySlugs = Object.keys(AllSynthesisProductDetails).filter(
    slug => slug !== productSlug && AllSynthesisProductDetails[slug]
  );
  const meta = product?.meta;
  const [tab, setTab] = useState("overview");
  const [showModal, setShowModal] = useState(false)

  if (!product) {
    return (
      <div className="p-10 text-center bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-red-600 font-[MaxOT]">Product Not Found</h2>
        <p className="text-gray-600 mt-2 font-[Roboto]">The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <>
      {meta && (
        <Helmet>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta name="keywords" content={meta.keywords?.join(", ")} />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {meta.structuredData && (
            <script type="application/ld+json">
              {JSON.stringify(meta.structuredData)}
            </script>
          )}
        </Helmet>
      )}

      <div className="bg-white px-2 sm:px-5 py-4">
        {/* --- Header --- */}

        {/* Mobile Header */}
        <div className="block md:hidden bg-gray-50 p-4 rounded-xl border">
          <div className="flex items-center gap-4">
            <div className="w-1/3 flex-shrink-0">
              <img
                src={product.image}
                alt={product.altText}
                className="w-full h-auto object-contain rounded-lg bg-white p-1 shadow"
              />
            </div>
            <div className="w-2/3 space-y-2">
              <img
                src={product.logo}
                alt="Logo"
                className="w-24 h-auto"
              />
              <h1 className="text-md font-bold font-[MaxOT] text-gray-900 leading-tight">
                {product.name}
              </h1>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block relative w-full">
          <img
            src={product.bannerImg}
            alt="Banner"
            className="w-full h-auto object-cover rounded-md"
          />
          <div className="absolute inset-0 flex flex-row items-center justify-around p-4">
            <div className="w-1/2 flex justify-start">
              <img
                src={product.image}
                alt={product.altText}
                className="w-[60%] h-auto object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 text-center">
              <img
                src={product.logo}
                alt="Logo"
                className="w-48 h-auto mb-4 bg-white p-4 rounded-lg shadow-lg inline-block"
              />
              <h1 className="text-4xl font-extrabold tracking-tight font-[MaxOT] text-black drop-shadow-md">
                {product.name}
              </h1>
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-12">
          {/* Overview */}
          <div className="flex flex-col items-center w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 font-[MaxOT] border-b-2 border-[#E63946] pb-2 w-full">Overview</h2>
            <p className="text-base sm:text-lg whitespace-pre-line text-gray-700">
              {product.description}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href={`https://wa.me/?text=${encodeURIComponent(`Check out this product: https://www.inkarp.co.in/verticals/synthesis-and-flow-chemistry/rotary-evaporators/${productSlug}`)}`} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center justify-center gap-2 bg-[#E63946] text-white px-5 py-2.5 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg font-semibold font-[MaxOT] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 w-48 sm:w-auto">
                  <Share2 size={18} /> Share
                </button>
              </a>
              <button className="flex items-center justify-center gap-2 bg-gray-700 text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-transform transform hover:scale-105 shadow-lg font-semibold font-[MaxOT] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 w-48 sm:w-auto" onClick={() => setShowModal(true)}>
                <ZoomIn size={20} /> Show Image
              </button>
            </div>

            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4" onClick={() => setShowModal(false)}>
                <div className="relative flex flex-col items-center bg-white p-4 rounded-lg shadow-xl w-full max-w-2xl" onClick={e => e.stopPropagation()}>
                  <img
                    src={product.image}
                    alt={product.altText}
                    className="w-full h-auto object-contain max-h-[80vh]"
                  />
                  <button
                    className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full font-semibold shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                    onClick={() => setShowModal(false)}
                    aria-label="Close image viewer"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mx-auto px-0 sm:px-4 lg:px-8 space-y-8">
            {/* Key Features Section */}
            <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#E63946] font-[MaxOT] mb-6">
                Key Features of {product.name}
              </h2>

              {product?.features?.[0]?.overview && (
                <p className="text-base sm:text-lg py-3 text-center font-[Roboto] text-gray-700">
                  {product.features[0].overview}
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {product.features.slice(1).map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition hover:scale-105 hover:bg-red-50"
                  >
                    <div className="flex-shrink-0 p-3 rounded-full bg-gradient-to-tr from-red-400 to-red-600 flex items-center justify-center mr-4">
                      <CheckCircle color="white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg font-[MaxOT] text-gray-800">{feature.name}</h3>
                      <p className="text-sm sm:text-base font-[Roboto] text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Advantages Section */}
            <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#E63946] font-[MaxOT] mb-6">
                Key Advantages of {product.name}
              </h3>

              {product?.advantages?.[0]?.overview && (
                <p className="text-base sm:text-lg py-3 text-center font-[Roboto] text-gray-700">
                  {product.advantages[0].overview}
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {product.advantages.slice(1).map((advantage, i) => (
                  <div
                    key={i}
                    className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition hover:scale-105 hover:bg-red-50"
                  >
                    <div className="flex-shrink-0 w-10 h-10 p-3 rounded-full bg-gradient-to-tr from-red-400 to-red-600 text-white flex items-center justify-center mr-4 shadow-md">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg font-[MaxOT] text-gray-800">{advantage.name}</h3>
                      <p className="text-sm sm:text-base font-[Roboto] text-gray-600">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="py-8 sm:px-4 lg:px-8 w-full max-w-7xl mx-auto">
          <div className="bg-gray-50 shadow-xl overflow-hidden rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#E63946] text-center font-[MaxOT] mb-6">
              Technical Specifications of {product.name}
            </h3>

            {product?.techSpecs?.overview && (
              <p className="py-3 px-2 sm:px-5 text-base sm:text-lg text-center font-[Roboto] text-gray-700">
                {product.techSpecs.overview}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {Object.entries(product?.techSpecs?.specs || {}).map(([key, value], index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl shadow-md p-4 bg-white hover:scale-105 transition hover:bg-red-50"
                >
                  <HiOutlineClipboardList className="text-[#E63946] w-6 h-6 mt-1 flex-shrink-0" />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-1">
                    <p className="text-base font-bold font-[MaxOT] text-gray-800">{key}</p>
                    <p className="text-sm sm:text-base whitespace-pre-line font-[Roboto] text-gray-600 sm:text-right">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Distributor Info */}
        <ProductDistributorSection name={product.name} />

        {product?.videoId && (
          <div className="max-w-4xl mx-auto my-12 px-4">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${product.videoId}?rel=0`}
                title={`${product.name} Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* FAQs */}
        <div className="bg-white">
          <RotaryFaqs faqs={product.faqs} />
        </div>
      </div>
    </>
  );
}

