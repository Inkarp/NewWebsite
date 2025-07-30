// components/SearchModal.jsx
import React from "react";
import { X } from "lucide-react";

export default function SearchModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/90 flex flex-col items-center justify-center p-6">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-gray-600 hover:text-black"
      >
        <X size={28} />
      </button>
      <h2 className="text-3xl font-bold mb-4 text-black">Start Searching</h2>
      <input
        type="text"
        placeholder="Start Typing..."
        className="w-full max-w-xs sm:max-w-md lg:max-w-xl px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ring-red-400 placeholder:text-black placeholder:font-medium"
        autoFocus
      />
    </div>
  );
}
