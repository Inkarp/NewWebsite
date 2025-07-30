import React, { useState, useEffect } from 'react';

export default function VerticalProductExplorer() {
  const [verticals, setVerticals] = useState([]);
  const [selectedVertical, setSelectedVertical] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setVerticals(dummyData);
  }, []);

  if (selectedProduct) {
    return (
      <div className="min-h-screen p-8 bg-gray-50">
        <button
          className="mb-4 px-4 py-2 bg-orange-300 text-white rounded"
          onClick={() => setSelectedProduct(null)}
        >
          ← Back to Products
        </button>
        <h3 className="text-3xl font-bold mb-4">{selectedProduct.name}</h3>
        <img src={selectedProduct.image} alt={selectedProduct.name} className="w-64 mb-4" />
        <div dangerouslySetInnerHTML={{ __html: selectedProduct.description }} className="text-sm mb-2" />
        <p className="text-sm mb-2"><strong>Tags:</strong> {selectedProduct.tags?.join(', ')}</p>
        <div dangerouslySetInnerHTML={{ __html: selectedProduct.specifications }} className="text-sm" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar: Verticals */}
      <aside className="w-1/5 p-4 border-r overflow-y-auto bg-white">
        <h2 className="font-bold mb-4 text-lg">Verticals</h2>
        {verticals.map((v, i) => (
          <div key={i} className="mb-2">
            <button
              onClick={() => {
                setSelectedVertical(v);
                setSelectedCategory(null);
              }}
              className={`w-full text-left px-4 py-2 rounded ${selectedVertical?.name === v.name ? 'bg-orange-300 text-white' : 'bg-orange-100'}`}
            >
              {v.name}
            </button>
          </div>
        ))}

        {selectedVertical && (
          <div className="mt-4 border-t pt-4">
            <h3 className="font-semibold mb-2 text-md">Categories</h3>
            {selectedVertical.principals.flatMap(p => p.categories).map((cat, ci) => (
              <div
                key={ci}
                className={`cursor-pointer px-3 py-2 rounded mb-1 hover:bg-purple-100 ${selectedCategory?.name === cat.name ? 'bg-purple-300 text-white' : 'bg-white'}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.name}
              </div>
            ))}
          </div>
        )}
      </aside>

      {/* Products grouped by Principal */}
      <section className="flex-1 p-6 overflow-y-auto">
        {selectedCategory ? (
          <div>
            <h2 className="text-xl font-bold mb-4">{selectedCategory.name} Products by Principal</h2>
            {selectedVertical.principals.map((principal, pi) => {
              const matchingCategory = principal.categories.find(c => c.name === selectedCategory.name);
              if (!matchingCategory) return null;
              return (
                <div key={pi} className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <img src={principal.image} alt={principal.name} className="h-8" />
                    <h3 className="text-lg font-semibold">{principal.name}</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {matchingCategory.products.map((prod, pi) => (
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
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-gray-500 text-lg">Select a category to view products by principal.</div>
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
      },
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
              },
                {
                    name: "TENSOR II",
                    image: "https://example.com/images/tensor-ii.png",
                    description: "<p>High-performance FTIR for advanced applications.</p>",
                    tags: ["High Sensitivity", "Modular Design", "Wide Range"],
                    specifications: "<table><tr><th>Wavelength</th><th>400–7000 cm⁻¹</th></tr></table>"
                },
                
            ]
          },
          {
            name: "Assesories",
            products: [
              {
                name: "Alpha II",
                image: "https://example.com/images/alpha-ii.png",
                description: "<p>Compact FTIR for routine analysis.</p>",
                tags: ["Mid-IR", "Touch Interface", "Robust Design"],
                specifications: "<table><tr><th>Wavelength</th><th>400–4000 cm⁻¹</th></tr></table>"
              },
                {
                    name: "TENSOR II",
                    image: "https://example.com/images/tensor-ii.png",
                    description: "<p>High-performance FTIR for advanced applications.</p>",
                    tags: ["High Sensitivity", "Modular Design", "Wide Range"],
                    specifications: "<table><tr><th>Wavelength</th><th>400–7000 cm⁻¹</th></tr></table>"
                },
                
            ]
          }
        ]
      },
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
              },
                {
                    name: "TENSOR II",
                    image: "https://example.com/images/tensor-ii.png",
                    description: "<p>High-performance FTIR for advanced applications.</p>",
                    tags: ["High Sensitivity", "Modular Design", "Wide Range"],
                    specifications: "<table><tr><th>Wavelength</th><th>400–7000 cm⁻¹</th></tr></table>"
                },
                
            ]
          },
          {
            name: "Assesories",
            products: [
              {
                name: "Alpha II",
                image: "https://example.com/images/alpha-ii.png",
                description: "<p>Compact FTIR for routine analysis.</p>",
                tags: ["Mid-IR", "Touch Interface", "Robust Design"],
                specifications: "<table><tr><th>Wavelength</th><th>400–4000 cm⁻¹</th></tr></table>"
              },
                {
                    name: "TENSOR II",
                    image: "https://example.com/images/tensor-ii.png",
                    description: "<p>High-performance FTIR for advanced applications.</p>",
                    tags: ["High Sensitivity", "Modular Design", "Wide Range"],
                    specifications: "<table><tr><th>Wavelength</th><th>400–7000 cm⁻¹</th></tr></table>"
                },
                
            ]
          }
        ]
      },
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
              },
                {
                    name: "TENSOR II",
                    image: "https://example.com/images/tensor-ii.png",
                    description: "<p>High-performance FTIR for advanced applications.</p>",
                    tags: ["High Sensitivity", "Modular Design", "Wide Range"],
                    specifications: "<table><tr><th>Wavelength</th><th>400–7000 cm⁻¹</th></tr></table>"
                },
                
            ]
          },
          {
            name: "Assesories",
            products: [
              {
                name: "Alpha II",
                image: "https://example.com/images/alpha-ii.png",
                description: "<p>Compact FTIR for routine analysis.</p>",
                tags: ["Mid-IR", "Touch Interface", "Robust Design"],
                specifications: "<table><tr><th>Wavelength</th><th>400–4000 cm⁻¹</th></tr></table>"
              },
                {
                    name: "TENSOR II",
                    image: "https://example.com/images/tensor-ii.png",
                    description: "<p>High-performance FTIR for advanced applications.</p>",
                    tags: ["High Sensitivity", "Modular Design", "Wide Range"],
                    specifications: "<table><tr><th>Wavelength</th><th>400–7000 cm⁻¹</th></tr></table>"
                },
                
            ]
          }
        ]
      },

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
