import React, { useState, useEffect } from 'react';
import VerticalsPage from './VerticalsPage';

export default function VerticalsNew() {
  const [verticals, setVerticals] = useState([]);
  const [selectedVertical, setSelectedVertical] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setVerticals(dummyData);
  }, []);

  return (
    <>
    <div className="flex flex-col p-6 min-h-screen gap-6 bg-gray-50">
      {/* Step 1: Choose Vertical */}
      <div>
        <h2 className="font-bold mb-2 text-lg">Select a Vertical</h2>
        <div className="flex gap-4 flex-wrap">
          {verticals.map((v, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded border ${selectedVertical?.name === v.name ? 'bg-orange-300 text-white' : 'bg-white'}`}
              onClick={() => {
                setSelectedVertical(v);
                setSelectedCategory(null);
                setSelectedProduct(null);
              }}
            >
              {v.name}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Choose Category */}
      {selectedVertical && (
        <div>
          <h3 className="font-semibold mb-2 text-md">Select a Category</h3>
          <select
            className="px-4 py-2 rounded border w-1/2"
            onChange={(e) => {
              const selectedCat = selectedVertical.principals.flatMap(p => p.categories).find(cat => cat.name === e.target.value);
              setSelectedCategory(selectedCat);
              setSelectedProduct(null);
            }}
          >
            <option value="">-- Select --</option>
            {selectedVertical.principals.flatMap(p => p.categories).map((cat, ci) => (
              <option key={ci} value={cat.name}>{cat.name}</option>
            ))}
          </select>
        </div>
      )}

      {/* Step 3: Product Cards */}
      {selectedCategory && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {selectedCategory.products.map((prod, pi) => (
            <div
              key={pi}
              className="cursor-pointer border rounded-lg p-4 bg-white shadow hover:bg-green-50"
              onClick={() => setSelectedProduct(prod)}
            >
              <img src={prod.image} alt={prod.name} className="h-40 w-full object-contain mb-2" />
              <p className="text-center font-medium">{prod.name}</p>
            </div>
          ))}
        </div>
      )}

      {/* Step 4: Product Detail */}
      {selectedProduct && (
        <div className="mt-6 border-t pt-4">
          <h3 className="text-2xl font-bold mb-4">{selectedProduct.name}</h3>
          <img src={selectedProduct.image} alt={selectedProduct.name} className="w-64 mb-4" />
          <div dangerouslySetInnerHTML={{ __html: selectedProduct.description }} className="text-sm mb-2" />
          <p className="text-sm mb-2"><strong>Tags:</strong> {selectedProduct.tags?.join(', ')}</p>
          <div dangerouslySetInnerHTML={{ __html: selectedProduct.specifications }} className="text-sm" />
        </div>
      )}
    </div>
    <VerticalsPage />
    </>
  );
}

const dummyData = [
  {
    name: "Synthesis and Flow Chemistry",
    principals: [
      {
        name: "Heidolph",
        image: "https://www.inkarp.co.in/assets/images/principals/heidolph.png",
        categories: [
          {
            name: "Rotary Evaporators",
            products: [
              {
                name: "Rotavap Alpha 5000",
                image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
                description: "<p>A high-capacity rotary evaporator for large-scale synthesis labs.</p>",
                tags: ["5000 mL Flask", "Digital Display", "Automatic Lift"],
                specifications: "<table><tr><th>Parameter</th><th>Value</th></tr><tr><td>Capacity</td><td>5 L</td></tr><tr><td>Speed</td><td>20–280 RPM</td></tr></table>"
              },
              {
                name: "Rotavap 5003",
                image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
                description: "<p>A high-capacity rotary evaporator for large-scale synthesis labs.</p>",
                tags: ["5000 mL Flask", "Digital Display", "Automatic Lift"],
                specifications: "<table><tr><th>Parameter</th><th>Value</th></tr><tr><td>Capacity</td><td>5 L</td></tr><tr><td>Speed</td><td>20–280 RPM</td></tr></table>"
              },
              
            ]
          },
           {
            name: "Overhead Stirrers",
            products: [
              {
                name: "Rotavap Alpha 5000",
                image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
                description: "<p>A high-capacity rotary evaporator for large-scale synthesis labs.</p>",
                tags: ["5000 mL Flask", "Digital Display", "Automatic Lift"],
                specifications: "<table><tr><th>Parameter</th><th>Value</th></tr><tr><td>Capacity</td><td>5 L</td></tr><tr><td>Speed</td><td>20–280 RPM</td></tr></table>"
              },
              {
                name: "Rotavap Alpha 5000",
                image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
                description: "<p>A high-capacity rotary evaporator for large-scale synthesis labs.</p>",
                tags: ["5000 mL Flask", "Digital Display", "Automatic Lift"],
                specifications: "<table><tr><th>Parameter</th><th>Value</th></tr><tr><td>Capacity</td><td>5 L</td></tr><tr><td>Speed</td><td>20–280 RPM</td></tr></table>"
              },
              {
                name: "Rotavap Alpha 5000",
                image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
                description: "<p>A high-capacity rotary evaporator for large-scale synthesis labs.</p>",
                tags: ["5000 mL Flask", "Digital Display", "Automatic Lift"],
                specifications: "<table><tr><th>Parameter</th><th>Value</th></tr><tr><td>Capacity</td><td>5 L</td></tr><tr><td>Speed</td><td>20–280 RPM</td></tr></table>"
              },
              {
                name: "Rotavap Alpha 5000",
                image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
                description: "<p>A high-capacity rotary evaporator for large-scale synthesis labs.</p>",
                tags: ["5000 mL Flask", "Digital Display", "Automatic Lift"],
                specifications: "<table><tr><th>Parameter</th><th>Value</th></tr><tr><td>Capacity</td><td>5 L</td></tr><tr><td>Speed</td><td>20–280 RPM</td></tr></table>"
              },
            ]
          },
           {
            name: "Large sclae Rotary Evaporators",
            products: [
              {
                name: "Rotavap Alpha 5000",
                image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
                description: "<p>A high-capacity rotary evaporator for large-scale synthesis labs.</p>",
                tags: ["5000 mL Flask", "Digital Display", "Automatic Lift"],
                specifications: "<table><tr><th>Parameter</th><th>Value</th></tr><tr><td>Capacity</td><td>5 L</td></tr><tr><td>Speed</td><td>20–280 RPM</td></tr></table>"
              },
              {
                name: "Rotavap Alpha 5000",
                image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
                description: "<p>A high-capacity rotary evaporator for large-scale synthesis labs.</p>",
                tags: ["5000 mL Flask", "Digital Display", "Automatic Lift"],
                specifications: "<table><tr><th>Parameter</th><th>Value</th></tr><tr><td>Capacity</td><td>5 L</td></tr><tr><td>Speed</td><td>20–280 RPM</td></tr></table>"
              },
              {
                name: "Rotavap Alpha 5000",
                image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
                description: "<p>A high-capacity rotary evaporator for large-scale synthesis labs.</p>",
                tags: ["5000 mL Flask", "Digital Display", "Automatic Lift"],
                specifications: "<table><tr><th>Parameter</th><th>Value</th></tr><tr><td>Capacity</td><td>5 L</td></tr><tr><td>Speed</td><td>20–280 RPM</td></tr></table>"
              },
            ]
          },
           {
            name: "Magnetic Stirrers",
            products: [
              {
                name: "Rotavap Alpha 5000",
                image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
                description: "<p>A high-capacity rotary evaporator for large-scale synthesis labs.</p>",
                tags: ["5000 mL Flask", "Digital Display", "Automatic Lift"],
                specifications: "<table><tr><th>Parameter</th><th>Value</th></tr><tr><td>Capacity</td><td>5 L</td></tr><tr><td>Speed</td><td>20–280 RPM</td></tr></table>"
              },
              {
                name: "Rotavap Alpha 5000",
                image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
                description: "<p>A high-capacity rotary evaporator for large-scale synthesis labs.</p>",
                tags: ["5000 mL Flask", "Digital Display", "Automatic Lift"],
                specifications: "<table><tr><th>Parameter</th><th>Value</th></tr><tr><td>Capacity</td><td>5 L</td></tr><tr><td>Speed</td><td>20–280 RPM</td></tr></table>"
              },
              {
                name: "Rotavap Alpha 5000",
                image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
                description: "<p>A high-capacity rotary evaporator for large-scale synthesis labs.</p>",
                tags: ["5000 mL Flask", "Digital Display", "Automatic Lift"],
                specifications: "<table><tr><th>Parameter</th><th>Value</th></tr><tr><td>Capacity</td><td>5 L</td></tr><tr><td>Speed</td><td>20–280 RPM</td></tr></table>"
              },
              {
                name: "Rotavap Alpha 5000",
                image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
                description: "<p>A high-capacity rotary evaporator for large-scale synthesis labs.</p>",
                tags: ["5000 mL Flask", "Digital Display", "Automatic Lift"],
                specifications: "<table><tr><th>Parameter</th><th>Value</th></tr><tr><td>Capacity</td><td>5 L</td></tr><tr><td>Speed</td><td>20–280 RPM</td></tr></table>"
              },
            ]
          },
        ]
      }
    ]
  },
  {
    name: "Analytical Instruments",
    principals: [
      {
        name: "Bruker",
        image: "https://www.inkarp.co.in/assets/images/principals/Bruker.png",
        categories: [
          {
            name: "FTIR Spectrometer",
            products: [
              {
                name: "Alpha II",
                image: "https://example.com/images/alpha-ii.png",
                description: "<p>Compact FTIR for routine analysis.</p>",
                tags: ["Mid-IR", "Touch Interface", "Robust Design"],
                specifications: "<table><tr><th>Wavelength</th><th>400–4000 cm⁻¹</th></tr></table>"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Life Sciences",
    principals: [
      {
        name: "Eppendorf",
        image: "https://www.inkarp.co.in/assets/images/principals/Eppendorf.png",
        categories: [
          {
            name: "Centrifuges",
            products: [
              {
                name: "MiniSpin Plus",
                image: "https://example.com/images/minispin.png",
                description: "<p>Compact centrifuge for quick spins.</p>",
                tags: ["14,000 RPM", "12x1.5ml", "Whisper Quiet"],
                specifications: "<table><tr><th>Speed</th><th>14,000 RPM</th></tr></table>"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Material Testing",
    principals: [
      {
        name: "Anton Paar",
        image: "https://www.inkarp.co.in/assets/images/principals/AntonPaar.png",
        categories: [
          {
            name: "Rheometers",
            products: [
              {
                name: "MCR 302",
                image: "https://example.com/images/mcr302.png",
                description: "<p>Modular rheometer for high precision applications.</p>",
                tags: ["Air Bearing", "Normal Force", "PTD Control"],
                specifications: "<table><tr><th>Torque</th><th>0.5 nNm</th></tr></table>"
              }
            ]
          }
        ]
      }
    ]
  }
];
