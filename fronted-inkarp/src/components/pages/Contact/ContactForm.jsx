import React, { useState } from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import axios from 'axios';
import SalesforceForm from './SalesforceForm';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    city: '',
    state: '',
    inquiryType: '',
    isExistingCustomer: '',
    purchaseTimeline: '',
    application: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = [
    { value: "R&amp;D", label: 'R&D' },
    { value: 'Application Support', label: 'Application Support' },
    { value: 'Quality Control (QC)', label: 'Quality Control (QC)' },
    { value:"Quality Assurance (QA)", label: 'Quality Assurance (QA)' },
    { value:"Analytical Laboratory Services", label: 'Analytical Laboratory Services' },
    { value:"Regulatory Affairs", label: 'Regulatory Affairs' },
    { value:"Product Development", label: 'Product Development' },
    { value:"Validation &amp; Calibration", label: 'Validation & Calibration' },
    { value:"Technical Services", label: 'Technical Services' },
    { value:"Others", label: 'Others' },
  ];

  const customerStatus = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ];

  // const purchaseTimelines = [
  //   { value: 'immediate', label: 'Immediately (within a week)' },
  //   { value: 'soon', label: 'Soon (within 1-3 months)' },
  //   { value: 'future', label: 'Future (3-6 months)' },
  //   { value: 'long_term', label: 'Long Term (more than 6 months)' }
  // ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      console.log('Submitting form data:', formData);

      const response = await axios.post('http://localhost:5000/api/contact/submit', formData);

      console.log('Server response:', response.data);

      if (response.data.success) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          jobTitle: '',
          city: '',
          state: '',
          inquiryType: '',
          isExistingCustomer: '',
          purchaseTimeline: '',
          application: '',
          message: ''
        });
        e.target.reset();
      } else {
        setStatus({
          type: 'error',
          message: response.data.message || 'An error occurred while sending your message'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'An error occurred while sending your message'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full p-5 z-[-10] mx-auto border border-gray-200 bg-[#F5F5F5] rounded-xl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Left Content */}
        <div className="lg:w-1/3 space-y-8 ">
          <h2 className=" font-[MaxOT] text-3xl text-[#E63946]">
            Get in Touch with Us
          </h2>
          <p className="font-[Roboto] text-lg">
            We are here to help. Whether you have a question about our products, solutions, or services — our team is ready to assist you.
          </p>
          {/* 🔽 Contact Info Block */}
          <div className="p-5 space-y-6 border border-gray-300 rounded-xl">
            <h3 className="text-2xl font-[MaxOT] ">Head Office</h3>

            {/* Address Section */}
            <div className="flex gap-4 items-start">
              <FaMapMarkerAlt className="text-[#E63946] text-lg mt-1" />
              <p className=" text-base leading-relaxed font-medium">
                <span className="text-[#E63946] font-[Roboto]">Inkarp Instruments Pvt Ltd</span><br />
                Plot No – 5A/10-11, 3rd Floor,
                IDA Nacharam Road No. 1,<br />
                Nacharam – Chilka Nagar Road,
                Hyderabad – 500076
              </p>
            </div>

            {/* Email Section */}
            <div className="flex gap-4 items-center">
              <FaEnvelope className="text-[#E63946] text-lg" />
              <a href="mailto:info@inkarp.co.in" className="text-base text-[#E63946] font-semibold hover:underline">
                info@inkarp.co.in
              </a>
              {/* Phone Section */}
              <FaPhoneAlt className="text-[#E63946] text-lg" />
              <div className="font-medium text-[#E63946]">
              <a className='text-[#E63946] font-semibold hover:underline'>+91 4027172293<br /></a> 
              <a className='text-[#E63946] font-semibold hover:underline'>+91 9966634008</a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              {[
                { icon: <FaFacebookF color='blue' />, link: "#" },
                // { icon: <FaTwitter />, link: "#" },
                { icon: <FaLinkedinIn color='blue' />, link: "#" },
                { icon: <FaInstagram color='red' />, link: "#" },
                { icon: <FaYoutube color='red' />, link: "#" },
              ].map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 bg-[#F5F5F5] shawdow-lg rounded-full flex items-center justify-center hover:bg-gray-200 hover:scale-1.02 transition duration-200">
                    <div className="hover:scale-[1.02] text-lg">{item.icon}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Right Form */}
        <div className="lg:w-2/3 p-5 w-full">
          <h3 className="text-2xl text-[#E63946] font-[MaxOT] mb-2">Contact Our Team
          </h3>
          <p className="mb-6 text-sm font-[Roboto] ">
            Fill out the form and our team will get back to you shortly. Fields marked * are required.
          </p>

          {status.message && (
            <div className={`mb-6 p-4 rounded-lg ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 border p-5 border-gray-300 rounded-xl">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                required
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone *"
                required
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
              />
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Designation *"
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
              />
             
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
              />
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
               <select name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                required
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946] bg-white" placeholder="Department">
                
                <option value="">Department</option>
                {inquiryTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>

              {/* <select
                name="isExistingCustomer"
                value={formData.isExistingCustomer}
                onChange={handleChange}
                required
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946] bg-white"
              >
                <option value="">Are you an existing customer of Inkarp? *</option>
                {customerStatus.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select> */}
              <input
                type="text"
                name="application"
                value={formData.application}
                onChange={handleChange}
                placeholder="Application"
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please elaborate your requirement"
              className="w-full h-32 rounded-2xl border border-gray-200 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#E63946] resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-4 bg-white border-2 border-[3E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center gap-2 transition ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#E63946]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                <>Submit <span>→</span></>
              )}
            </button>
          </form>
          {/* <SalesforceForm /> */}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;