import React, { useState } from 'react';

const FeedbackModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Trigger Button */}
      <button
        className="bg-[#E63946] text-white px-4 py-2 rounded hover:bg-gray-500 transition"
        onClick={toggleModal}
      >
        {/* Give Quick  */}
        Feedback
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-2xl mx-auto rounded-lg shadow-lg p-6 relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-4 text-gray-600 text-2xl font-bold hover:text-red-600"
            >
              &times;
            </button>

            <h2 className="text-xl font-bold text-blue-800 mb-1">Inkarp Customer Quick Feedback</h2>
            <p className="text-sm text-gray-500 mb-4 italic">Takes less than 30 seconds</p>

            <form action="https://your-form-handler-url.com" method="POST" className="space-y-4 text-sm">

              {/* Question 1 */}
              <div>
                <label className="font-semibold">1. What best describes you?</label>
                <div className="space-y-1 mt-2">
                  {['Researcher / Scientist', 'Pharma or Biotech Professional', 'Academic / Student', 'Procurement / Purchase Team'].map((label, idx) => (
                    <div key={idx}>
                      <input type="radio" name="user_type" value={label.split(' ')[0]} className="mr-2" />
                      {label}
                    </div>
                  ))}
                  <div className="flex items-center">
                    <input type="radio" name="user_type" value="Others" className="mr-2" />
                    <span className="mr-2">Others:</span>
                    <input type="text" name="user_type_other" className="border px-2 py-1 rounded w-full" />
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div>
                <label className="font-semibold">2. Which product category are you most interested in?</label>
                <div className="space-y-1 mt-2">
                  {[
                    'Analytical Instruments', 'Sample Preparation',
                    'General Lab Equipment', 'Life Sciences',
                    'Water Purification'
                  ].map((item, idx) => (
                    <div key={idx}>
                      <input type="checkbox" name="category" value={item} className="mr-2" />
                      {item}
                    </div>
                  ))}
                  <div className="flex items-center">
                    <input type="checkbox" name="category" value="Others" className="mr-2" />
                    <span className="mr-2">Others:</span>
                    <input type="text" name="category_other" className="border px-2 py-1 rounded w-full" />
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div>
                <label className="font-semibold">3. How was your experience with Inkarp so far?</label>
                <div className="space-y-1 mt-2">
                  {['Excellent', 'Good', 'Could be better'].map((label, idx) => (
                    <div key={idx}>
                      <input type="radio" name="experience" value={label} className="mr-2" />
                      {label}
                    </div>
                  ))}
                  <div className="mt-1">
                    <label>If "Could be better", please tell us why:</label>
                    <textarea name="experience_feedback" rows="3" className="w-full border rounded px-2 py-1 mt-1" />
                  </div>
                </div>
              </div>

              {/* Contact Request */}
              <div>
                <label className="font-semibold">Would you like our expert to contact you?</label>
                <div className="mt-2">
                  <input type="checkbox" name="contact_requested" value="Yes" className="mr-2" />
                  Yes, please contact me
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="font-semibold">Name:</label>
                <input type="text" name="name" className="w-full border px-2 py-1 rounded" />
              </div>

              {/* Email */}
              <div>
                <label className="font-semibold">Email:</label>
                <input type="email" name="email" className="w-full border px-2 py-1 rounded" />
              </div>

              {/* Phone */}
              <div>
                <label className="font-semibold">Phone (optional):</label>
                <input type="text" name="phone" className="w-full border px-2 py-1 rounded" />
              </div>

              {/* Submit */}
              <div className="text-center mt-4">
                <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition">
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackModal;
