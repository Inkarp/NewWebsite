import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, MapPin, Clock } from 'lucide-react';
import { eventsData } from './EventsData';

const EventDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get event data from location state or find by ID
  const event = location.state?.event || eventsData.find(event => event.id === parseInt(id));

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Event Not Found</h1>
          <button
            onClick={() => navigate('/insights-and-updates')}
            className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{event.title} - Inkarp Instruments Private Ltd</title>
        <meta name="description" content={event.description} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(event.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        <button
          onClick={() => navigate('/insights-and-updates')}
          className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Events
        </button>
      </div>

      {/* Event Content */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Event Category */}
          <div className="mb-6">
            <span className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
              {event.category}
            </span>
          </div>

          {/* Event Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Date</p>
                    <p className="text-gray-600">{new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Duration</p>
                    <p className="text-gray-600">Multi-day event</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Event Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Event</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {event.fullDescription}
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Ready to Join Us?</h3>
            <p className="text-gray-600 mb-6">
              Don't miss this opportunity to connect with industry leaders and discover the latest laboratory innovations.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E639
            46] transition">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails; 