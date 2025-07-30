import React, { useState } from "react";
import { X } from "lucide-react";
import axios from 'axios';

const RegisterForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    companyName: '',
    department: '',
    country: '',
    state: '',
    city: '',
    howDidYouHear: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  if (!isOpen) return null;

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
      console.log('Submitting webinar registration data:', formData);
      const response = await axios.post('http://localhost:5000/api/webinar/register', formData);
      console.log('Webinar registration response:', response.data);

      if (response.data.success) {
        setStatus({ type: 'success', message: 'Registration successful! We will send you webinar details shortly.' });
        // Optionally reset form after successful submission
        setFormData({
          name: '',
          email: '',
          contact: '',
          companyName: '',
          department: '',
          country: '',
          state: '',
          city: '',
          howDidYouHear: '',
        });
      } else {
        setStatus({ type: 'error', message: response.data.message || 'An error occurred during registration.' });
      }
    } catch (error) {
      console.error('Webinar registration error:', error);
      setStatus({ type: 'error', message: error.response?.data?.message || 'An error occurred during registration. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-3xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Register Now</h2>
          <button onClick={onClose} className="text-xl font-bold">×</button>
        </div>

        {status.message && (
          <div className={`mb-4 p-3 rounded text-center ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 text-lg">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Id *"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border rounded"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact *"
            value={formData.contact}
            onChange={handleChange}
            required
            className="p-3 border rounded"
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="p-3 border rounded"
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="p-3 border rounded"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="p-3 border rounded"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="p-3 border rounded"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="p-3 border rounded"
          />
          <select
            name="howDidYouHear"
            value={formData.howDidYouHear}
            onChange={handleChange}
            className="col-span-2 p-3 border rounded"
          >
            <option value="">How did you hear about us?</option>
            <option value="Social Media">Social Media</option>
            <option value="Email">Email</option>
            <option value="Word of Mouth">Word of Mouth</option>
            <option value="Search Engine">Search Engine</option>
            <option value="Other">Other</option>
          </select>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`col-span-2 bg-red-500 text-white py-3 rounded ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-600'}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message →'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
