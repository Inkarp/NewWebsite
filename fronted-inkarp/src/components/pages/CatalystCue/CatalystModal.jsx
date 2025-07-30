// CatalystModal.jsx
import React, { useState } from 'react';
import { MdClose, MdEmail, MdPhone } from 'react-icons/md';
import BgImg from '/CatalystBgImg.jpg';
import axios from 'axios';

const CatalystModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    email: '',
    department: '',
    institutionName: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' }); // Reset status message

    try {
      const response = await axios.post(`https://inkarp.onrender.com/api/catalyst/register`, formData);
      console.log('Catalyst registration response:', response.data);

      if (response.data.success) {
        setStatus({ type: 'success', message: 'Registration successful! We will send you a physical copy soon.' });
        setFormData({
          name: '',
          designation: '',
          email: '',
          department: '',
          institutionName: '',
          mobileNumber: '',
        });
      } else {
        setStatus({ type: 'error', message: response.data.message || 'An error occurred during registration.' });
      }
    } catch (error) {
      console.error('Catalyst registration error:', error);
      setStatus({ type: 'error', message: error.response?.data?.message || 'An error occurred during registration. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start p-10 bg-black/60">
      <div
        className="w-[90%] md:w-[900px] rounded-lg p-6 relative shadow-lg bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <button
          className="absolute top-4 p-2 z-10 bg-white/30 right-4 text-white hover:text-red-300 text-2xl"
          onClick={onClose}
        >
          <MdClose />
        </button>

        <div className="grid md:grid-cols-2 text-white gap-6 p-4 rounded-md">
          {/* Left Side - Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Register For A Physical Copy</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-white p-2 rounded text-white placeholder-white bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="designation"
                placeholder="Designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full border border-white bg-transparent p-2 rounded text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex gap-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-1/2 border border-white bg-transparent p-2 rounded text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="department"
                  placeholder="Department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-1/2 border border-white bg-transparent p-2 rounded text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                name="institutionName"
                placeholder="Institution Name *"
                value={formData.institutionName}
                onChange={handleChange}
                required
                className="w-full border border-white bg-transparent p-2 rounded text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                className="w-full border border-white bg-transparent p-2 rounded text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-white text-black py-2 rounded mt-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
              >
                {isSubmitting ? 'Registering...' : 'Submit'}
              </button>
              {status.message && (
                <p className={`text-center mt-2 ${status.type === 'success' ? 'text-green-300' : 'text-red-300'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>

          {/* Right Side - Feedback */}
          <div className="flex flex-col justify-center items-center p-4 rounded shadow-lg backdrop-blur-sm">
            <h3 className="text-xl font-bold">Feedback</h3>
            <p className="text-white mb-4 text-center">Your Feedback Is Valuable For Us</p>
            <a
              href="https://forms.gle/MQLuTgv1vqqu1EY79"
              target="_blank"
              rel="noreferrer"
            >
              <button className="text-white bg-transparent py-2 px-6 rounded-full mb-4 border-2 border-white hover:bg-white/10">
                Click Here
              </button>
            </a>
            <div className="flex items-center gap-2 mb-2 text-white">
              <MdPhone className="text-white text-xl" />
              <span>+91 8885107222</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <MdEmail className="text-white text-xl" />
              <span>info@inkarp.co.in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalystModal;
