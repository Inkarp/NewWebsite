import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function ProductDetailPage({ detailsSource, verticalTitle }) {
  const { productSlug } = useParams();
  const location = useLocation();

  // Optimization: get passed product or fallback to static source
  const product = location.state?.product || detailsSource[productSlug];
  console.log("ProductDetailPage: product", product);
  if (!product) {
    return <div className="p-6 text-red-600">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold">{product.name}</h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-contain border rounded shadow"
          />
        </div>
        <div className="flex-1">
          <img
            src={product.logo}
            alt="Product Logo"
            className="w-40 mb-4"
          />
          <h2 className="text-2xl font-semibold text-[#0a2540] mb-4">
            {product.name} – {verticalTitle}
          </h2>
          <p className="text-gray-700 whitespace-pre-line text-justify leading-7">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
