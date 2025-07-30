import React, { useState } from 'react';
import axios from 'axios';

const CareersForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
        location: '',
        department: '',
        message: ''
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCustomRole, setIsCustomRole] = useState(false);

    // Available positions
    const availablePositions = [
        { value: 'Sales Manager', label: 'Sales Manager' },
        { value: 'Sales Executive', label: 'Sales Executive' },
        { value: 'Service Engineer', label: 'Service Engineer' },
        { value: 'Technical Support', label: 'Technical Support' },
        { value: 'Marketing Executive', label: 'Marketing Executive' },
        { value: 'Product Manager', label: 'Product Manager' },
        { value: 'Operations Manager', label: 'Operations Manager' },
        { value: 'Customer Support', label: 'Customer Support' },
        { value: 'Business Development', label: 'Business Development' },
        { value: 'General Manager', label: 'General Manager' }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRoleChange = (e) => {
        const { value } = e.target;
        if (value === 'custom') {
            setIsCustomRole(true);
            setFormData(prev => ({ ...prev, role: '' }));
        } else {
            setIsCustomRole(false);
            setFormData(prev => ({ ...prev, role: value }));
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Check file type
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!allowedTypes.includes(file.type)) {
                setStatus({
                    type: 'error',
                    message: 'Please upload a PDF or Word document'
                });
                e.target.value = null;
                return;
            }

            // Check file size (5MB)
            if (file.size > 5 * 1024 * 1024) {
                setStatus({
                    type: 'error',
                    message: 'File size should be less than 5MB'
                });
                e.target.value = null;
                return;
            }

            setSelectedFile(file);
            setStatus({ type: '', message: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach(key => {
                formDataToSend.append(key, formData[key]);
            });
            if (selectedFile) {
                formDataToSend.append('resume', selectedFile);
            }

            console.log('Submitting form data:', {
                ...formData,
                resume: selectedFile ? selectedFile.name : 'No file selected'
            });

            const response = await axios.post('https://inkarp.onrender.com/api/careers/submit', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Server response:', response.data);

            if (response.data.success) {
                setStatus({
                    type: 'success',
                    message: 'Application submitted successfully! We will contact you soon.'
                });
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    role: '',
                    location: '',
                    department: '',
                    message: ''
                });
                setSelectedFile(null);
                e.target.reset();
            } else {
                setStatus({
                    type: 'error',
                    message: response.data.message || 'An error occurred while submitting your application'
                });
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus({
                type: 'error',
                message: error.response?.data?.message || 'An error occurred while submitting your application'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className=" mx-auto ">
            {/* <h2 className="text-3xl font-bold text-[#E63946] mb-8 text-center font-[MaxOT]">Apply to Join Our Team</h2> */}
            <div className="flex p-5 justify-center items-center">
                <h1 className="px-4 py-1 text-center text-sm font-[MaxOT] font-semibold uppercase border border-[#E63946] text-black rounded-full mb-4 w-fit">
                    Apply to Join Our Team
                </h1>
            </div>

            {status.message && (
                <div className={`mb-6 p-4 rounded-lg ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                    {status.message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 border p-5 border-gray-300 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium  mb-1">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946] focus:border placeholder-[]"
                            placeholder="Enter your full name"

                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946]  focus:border-blue-500"
                            placeholder="Enter your email address"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946]  focus:border-blue-500"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                            Position Applied For *
                        </label>
                        {!isCustomRole ? (
                            <select
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleRoleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946]  focus:#E63946 bg-white"
                            >
                                <option value="">Select a position</option>
                                {availablePositions.map((position) => (
                                    <option key={position.value} value={position.value} className='text-black hover:bg-[#E63946]'>
                                        {position.label}
                                    </option>
                                ))}
                                <option value="custom">Other (Specify)</option>
                            </select>
                        ) : (
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946]  focus:border-blue-500"
                                    placeholder="Enter your position"
                                />
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsCustomRole(false);
                                        setFormData(prev => ({ ...prev, role: '' }));
                                    }}
                                    className="text-sm text-blue-600 hover:text-blue-500"
                                >
                                    ← Back to position list
                                </button>
                            </div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                            Preferred Location *
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946]  focus:border-blue-500"
                            placeholder="Enter your preferred location"
                        />
                    </div>

                    <div>
                        <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                            Department *
                        </label>
                        <input
                            type="text"
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946]  focus:border-blue-500"
                            placeholder="Enter the department"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                        Resume/CV *
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                        <div className="space-y-1 text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="flex text-sm ">
                                <label htmlFor="resume" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-#E63946">
                                    <span className='text-[#E63946]'>Upload a file</span>
                                    <input
                                        id="resume"
                                        name="resume"
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        required
                                        className="sr-only"
                                    />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PDF or Word document up to 5MB</p>
                        </div>
                    </div>
                    {selectedFile && (
                        <div className="mt-2 text-sm text-gray-600">
                            Selected file: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                        </div>
                    )}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946]  focus:border-blue-500"
                        placeholder="Any additional information you'd like to share"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-8 py-3 bg-[#E63946] text-white rounded-lg font-medium hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                            }`}
                    >
                        {isSubmitting ? (
                            <div className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                            </div>
                        ) : (
                            'Submit Application'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CareersForm; 