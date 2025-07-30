// EventDetailsModal.jsx

export default function EventDetailsModal({ isOpen, onClose, event }) {
  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-xl">
        <h2 className="text-2xl font-bold mb-2">{event.name}</h2>
        <p className="text-gray-700 whitespace-pre-line">{event.details}</p>
        <div className="mt-4 text-right">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
