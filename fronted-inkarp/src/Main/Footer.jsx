import React, { useRef, useState } from 'react';
import InkarpLogo from '/inkarp old.svg';
import CatalystLogo from "/Catalyst.svg";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaInstagramSquare, FaLinkedin, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  PhoneCall,
} from 'lucide-react';
import Map from './Map';


const Footer = () => {
  const formRef = useRef(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://inkarp.onrender.com/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email }),
        // credentials: 'include'
      });

      let data;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        throw new Error('Server response was not JSON');
      }

      if (response.ok) {
        setStatus({ type: 'success', message: data.message || 'Thank you for subscribing!' });
        setEmail('');
        formRef.current.classList.add('done');
        setTimeout(() => {
          formRef.current.classList.remove('done');
        }, 4000);
      } else {
        throw new Error(data.message || 'Subscription failed');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus({
        type: 'error',
        message: error.message || 'Failed to subscribe. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className=" z-50 text-white bg-white w-[99%] rounded-2xl shadow-xl mx-auto mt-2 border border-gray-200">
      {/* Subscribe Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 px-4 py-5 rounded-t-xl">
        <img
          className="h-16 sm:h-20 lg:h-24 w-auto rounded-md p-2"
          src={InkarpLogo}
          alt="Inkarp Logo"
          title="Inkarp"
        />

        <div className="w-full lg:w-3/4 text-center">
          <h3 className="text-lg text-[#E63946] font-bold mb-4" style={{ fontFamily: 'MaxOT' }}>
            Subscribe for Scientific Updates That Matter
          </h3>
          <div className="relative max-w-xl mx-auto">
            <form
              ref={formRef}
              className="subscription relative w-full h-10 rounded-[200px] overflow-hidden shadow-md"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="add-email absolute rounded-[200px] top-0 left-0 w-full h-full px-5 text-sm bg-white text-black border-2 border-gray-500 placeholder:font-semibold placeholder-black/60"
                placeholder="Enter Your Email Address"
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                className={`submit-email absolute top-0 right-0 h-[calc(100%-2px)] w-24 bg-gray-800 text-white font-semibold rounded-full m-[1px] px-5 transition-all duration-300 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              >
                <span className="before-submit absolute inset-0 flex items-center justify-center transition-all duration-300 rounded-2xl">
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </span>
                <span className="after-submit absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 delay-300">
                  Thank you for subscribing!
                </span>
              </button>
            </form>

            {status.message && (
              <div className={`mt-2 text-sm ${status.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                {status.message}
              </div>
            )}

            <p className="text-sm sm:text-base lg:text-sm text-black font-[Roboto] mt-3 font-medium">
              We respect your time. One email a month. Zero spam.
            </p>

            <style>{`
              .subscription.done .submit-email {
                width: calc(100% - 2px);
                background: #E63946;
              }
              .subscription .submit-email .before-submit,
              .subscription .submit-email .after-submit {
                visibility: visible;
                opacity: 1;
              }
              .subscription.done .submit-email .before-submit,
              .subscription:not(.done) .submit-email .after-submit {
                visibility: hidden;
                opacity: 0;
              }
              .subscription.done .submit-email .after-submit {
                opacity: 1;
              }
              .subscription:not(.done) .submit-email .after-submit {
                opacity: 0;
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="p-5 text-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
          {/* About Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black" style={{ fontFamily: 'MaxOT' }}>
              About Inkarp
            </h2>
            <p className="text-sm sm:text-base font-[Roboto] leading-relaxed mb-6" style={{ fontFamily: 'roboto' }}>
              Established in 1985, Inkarp is a trusted name in the scientific instrument industry,
              offering comprehensive research solutions and exceptional after-sales support.
              With a robust presence in India, we're a go-to choice for a diverse range of sectors.
              Our enduring partnerships with major manufacturers globally ensure sustained customer support.
              Our dedicated team is at the heart of our success, reflecting our commitment to excellence.
            </p>

            {/* Social Media Section */}
            <div className='flex flex-col items-center justify-center'>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center" style={{ fontFamily: 'MaxOT' }}>
                Follow Us
              </h3>
              <div className="flex flex-row gap-4 items-center justify-center">
                <a
                  href="https://www.instagram.com/inkarpinstruments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[#cc39a4] group"
                >
                  <FaInstagram className="text-[#cc39a4] group-hover:text-white" size={28} />
                </a>
                <a
                  href="https://www.facebook.com/inkarpinstruments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[#1877f3] group"
                >
                  <FaFacebookF className="text-[#1877f3] group-hover:text-white" size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/company/inkarp-instruments-pvt-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[#0a66c2] group"
                >
                  <FaLinkedinIn className="text-[#0a66c2] group-hover:text-white" size={28} />
                </a>
                <a
                  href="https://www.youtube.com/@inkarpinstruments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[#E63946] group"
                >
                  <FaYoutube className="text-[#E63946] group-hover:text-white" size={28} />
                </a>
                <a
                  href="https://wa.me/919966634008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[#25D366] group"
                >
                  <FaWhatsapp className="text-[#25D366] group-hover:text-white" size={28} />
                </a>
              </div>
            </div>
          </div>


          {/* Quick Links and Contact Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ fontFamily: 'MaxOT' }}>
                Quick Links
              </h3>
              <div className="space-y-2 text-sm sm:text-base ">
                <div style={{ fontFamily: 'roboto' }}>
                  <Link to="/" className="hover:text-red-600 transition-colors duration-200">Home</Link>
                </div>
                <div style={{ fontFamily: 'roboto' }}>
                  <Link to="/our-story" className="hover:text-red-600 transition-colors duration-200">Our Story</Link>
                </div>
                <div style={{ fontFamily: 'roboto' }}>
                  <Link to="/verticals" className="hover:text-red-600 transition-colors duration-200">Verticals</Link>
                </div>
                <div style={{ fontFamily: 'roboto' }}>
                  <Link to="/contact" className="hover:text-red-600 transition-colors duration-200">Contact Us</Link>
                </div>
                <div style={{ fontFamily: 'roboto' }}>
                  <Link to="/blog" className="hover:text-red-600 transition-colors duration-200">Blog</Link>
                </div>
                <div style={{ fontFamily: 'roboto' }}>
                  <Link to="/news-events" className="hover:text-red-600 transition-colors duration-200">News & Events</Link>
                </div>
                <div style={{ fontFamily: 'roboto' }}>
                  <Link to="/careers" className="hover:text-red-600 transition-colors duration-200">Careers</Link>
                </div>
              </div>
              <div className="">
                <Link to="/catalystcue">
                  <img src={CatalystLogo} className="w-20 h-8 sm:w-24 sm:h-10 object-contain hover:opacity-80 transition-opacity duration-200" alt="Catalyst" />
                </Link>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ fontFamily: 'MaxOT' }}>
                Contact Us
              </h3>
              <ul className="space-y-3 text-sm sm:text-base font-[Roboto]">
                <li className="flex items-start justify-center sm:justify-start gap-2">
                  <MapPin size={16} className="min-w-[16px] mt-1 text-red-600" />
                  <span className=" leading-relaxed">
                    Inkarp Instruments Pvt Ltd, Plot No - 5A/10-11, 3rd Floor, IDA Nacharam Road No. 1,
                    Nacharam - Chilka Nagar Road, Hyderabad – 500076
                  </span>
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <Phone size={16} className="min-w-[16px] text-red-600" />
                  <a href="tel:+919966634008" className=" hover:text-red-600 transition-colors duration-200">
                    +91 99666 34008
                  </a>
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <PhoneCall size={16} className="min-w-[16px] text-red-600" />
                  <a href="tel:+914027172293" className=" hover:text-red-600 transition-colors duration-200">
                    +91 40 2717 2293
                  </a>
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <Mail size={16} className="min-w-[16px] text-red-600" />
                  <a href="mailto:info@inkarp.co.in" className=" hover:text-[#E63946] transition-colors duration-200">
                    info@inkarp.co.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-52 p-3 rounded-lg overflow-hidden shadow-md">
        <Map style={{ width: '100%', height: '100%' }} />
      </div> */}
      {/* Copyright Section */}
      <div className="bg-black/90 text-white border-t-3 border-t-[#E63946] py-4 text-sm w-[96%] mx-auto rounded-t-full shadow-inner" style={{ fontFamily: 'roboto' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-gray-300">
              © {new Date().getFullYear()} <a href="#" className="hover:text-white transition-colors duration-200">Inkarp</a>. All Rights Reserved.
            </p>
            <ul className="flex flex-wrap justify-center sm:justify-end gap-4 text-xs sm:text-sm">
              <li>
                <Link to="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Sales Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
