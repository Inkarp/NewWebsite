import React from "react";
import { ArrowDownToLine } from "lucide-react";


export default function ProductProfile  ()  {
  return (
    <div className="relative bg-white text-gray-800 font-sans leading-relaxed">
      {/* Sticky Download Button */}
      {/* <Profile /> */}
      <div className="fixed top-5 left-[80] z-50 flex justify-end p-4">
        <a
          href="https://www.inkarp.co.in/assets/images/Inkarp%20_%20Product%20_%20Profile_%202025.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-full flex items-center gap-2 shadow-lg transition duration-300"
        >
          <ArrowDownToLine size={20} />
          Download PDF
        </a>
      </div>

      {/* Page Content */}
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-extrabold text-red-700">INKARP PRODUCT PROFILE 2025</h1>

        {/* Analytical Instruments */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Analytical Instruments</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>UV-Vis Spectrophotometers</li>
            <li>FTIR Spectrometers</li>
            <li>Atomic Absorption Spectrometers</li>
            <li>Gas Chromatographs</li>
            <li>High-Performance Liquid Chromatographs (HPLC)</li>
            <li>Mass Spectrometers</li>
          </ul>
        </section>

        {/* Life Sciences Instruments */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Life Sciences Instruments</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-Time PCR Systems</li>
            <li>Gel Documentation Systems</li>
            <li>Microplate Readers</li>
            <li>Electrophoresis Systems</li>
            <li>Cell Counters</li>
            <li>Flow Cytometers</li>
          </ul>
        </section>

        {/* General Laboratory Equipment */}
        <section>
          <h2 className="text-2xl font-bold mb-2">General Laboratory Equipment</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Laboratory Ovens</li>
            <li>Incubators</li>
            <li>Centrifuges</li>
            <li>Shakers and Stirrers</li>
            <li>Water Baths</li>
            <li>pH Meters</li>
          </ul>
        </section>

        {/* Diagnostics */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Diagnostics</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>ELISA Readers</li>
            <li>Clinical Chemistry Analyzers</li>
            <li>Hematology Analyzers</li>
            <li>Immunoassay Systems</li>
            <li>Blood Gas Analyzers</li>
          </ul>
        </section>

        {/* Material Science Instruments */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Material Science Instruments</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Thermal Analyzers (TGA/DSC)</li>
            <li>Rheometers</li>
            <li>Particle Size Analyzers</li>
            <li>Surface Area Analyzers</li>
            <li>Hardness Testers</li>
          </ul>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p>
            📧 Email: <a href="mailto:info@inkarp.com" className="text-blue-600 underline">info@inkarp.com</a> <br />
            📍 Website: <a href="https://www.inkarp.co.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.inkarp.co.in</a>
          </p>
        </section>
      </div>
    </div>
  );
};


