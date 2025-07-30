import React from "react";
import { ArrowDownToLine } from "lucide-react";

export default function Profile() {
  return (
    <div className="relative bg-white text-gray-800 font-sans leading-relaxed">
      {/* Sticky Download Button */}
      
      <div className="sticky top-5 z-50 flex justify-end p-4">
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

        <section>
          <h2 className="text-2xl font-bold mb-2">About Inkarp</h2>
          <p>
            Inkarp Instruments Pvt. Ltd., established in 1985, is one of India’s leading providers of scientific and analytical instruments. With 10+ branch offices, 50,000+ customers, and 50+ global principals, we provide reliable solutions across the fields of life sciences, diagnostics, pharmaceuticals, and research.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p>
            To offer advanced, high-quality instruments and unmatched after-sales support to empower scientists and researchers in India with the tools they need to innovate.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Core Offerings</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Life Sciences Instruments</li>
            <li>Analytical Solutions</li>
            <li>Diagnostics Equipment</li>
            <li>Pharmaceutical Testing Systems</li>
            <li>Educational and Research Lab Tools</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Our Strengths</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Pan-India service and support infrastructure</li>
            <li>Dedicated application and service teams</li>
            <li>Deep customer engagement and training programs</li>
            <li>Experience with regulatory and compliance standards</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Client Segments</h2>
          <p>
            We proudly serve clients in academic institutions, pharmaceutical companies, R&D labs, hospitals, CROs, biotech firms, and testing labs.
          </p>
        </section>

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
}
