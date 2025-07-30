// VerticalExplorer.jsx (Auto-shows first vertical, and product details on click)
import React, { useState, useEffect } from 'react';

export default function VerticalExplorer() {
  const [verticals, setVerticals] = useState([]);
  const [selectedVertical, setSelectedVertical] = useState(null);
  const [selectedPrincipal, setSelectedPrincipal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setVerticals(dummyData);
    setSelectedVertical(dummyData[0]);
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Left: Verticals */}
      <aside className="w-1/5 border-r p-4 bg-gray-50">
        <h2 className="font-bold mb-2">Verticals</h2>
        {verticals.map((v, i) => (
          <div
            key={i}
            className={`cursor-pointer p-2 rounded hover:bg-orange-100 ${selectedVertical?.name === v.name ? 'bg-orange-200' : ''}`}
            onClick={() => {
              setSelectedVertical(v);
              setSelectedPrincipal(null);
              setSelectedCategory(null);
              setSelectedProduct(null);
            }}
          >
            {v.name}
          </div>
        ))}
      </aside>

      {/* Center: Principals + Categories */}
      <main className="w-1/5 p-4 overflow-y-auto">
        {selectedVertical?.principals?.map((p, pi) => (
          <div key={pi} className="mb-6">
            <h3
              className={`text-lg font-semibold flex items-center gap-2 cursor-pointer ${selectedPrincipal?.name === p.name ? 'text-indigo-600' : ''}`}
              onClick={() => {
                setSelectedPrincipal(p);
                setSelectedCategory(null);
                setSelectedProduct(null);
              }}
            >
              <img src={p.image} alt={p.name} className="h-6" /> {p.name}
            </h3>

            {(selectedPrincipal?.name === p.name || !selectedPrincipal) && p.categories?.map((cat, ci) => (
              <div
                key={ci}
                className={`ml-6 mt-2 cursor-pointer p-2 rounded hover:bg-purple-100 ${selectedCategory?.name === cat.name ? 'bg-purple-200' : ''}`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedProduct(null);
                }}
              >
                {cat.name}
              </div>
            ))}
          </div>
        ))}
      </main>

      {/* Right: Products */}
      <section className="w-3/5 p-4 bg-gray-50 overflow-y-auto">
        {selectedCategory && selectedCategory.products?.map((prod, pi) => (
          <div
            key={pi}
            className={`cursor-pointer p-2 rounded hover:bg-green-100 ${selectedProduct?.name === prod.name ? 'bg-green-200' : ''}`}
            onClick={() => setSelectedProduct(prod)}
          >
            <div className="flex flex-col  gap-4 items-center justify-center">
              <div className='flex items-center'>
              <img src={prod.image} alt={prod.name} className="h-80 w-80 object-contain" />
              <span>{prod.name}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Product Detail */}
        {selectedProduct && (
          <div className="mt-6 border-t pt-4">
            <h3 className="text-xl font-bold mb-2">{selectedProduct.name}</h3>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-48 mb-2" />
            <div dangerouslySetInnerHTML={{ __html: selectedProduct.description }} className="text-sm mb-2" />
            <p className="text-sm mb-2"><strong>Tags:</strong> {selectedProduct.tags?.join(', ')}</p>
            <div dangerouslySetInnerHTML={{ __html: selectedProduct.specifications }} className="text-sm" />
          </div>
        )}
      </section>
    </div>
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