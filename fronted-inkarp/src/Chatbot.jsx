import { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";

const questions = [
  { id: 1, question: "What are you looking for?", options: ["Product Enquiry", "Service"] },
  { id: 2, question: "Which product or service are you interested in?" },
  { id: 3, question: "What is your preferred time for a callback?" },
  { id: 4, question: "Would you like a demo or more info?" },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState({});
  const [phone, setPhone] = useState("");
  const timerRef = useRef(null);

  useEffect(() => {
    // Auto open chat after 10s if not manually opened
    timerRef.current = setTimeout(() => {
      if (!open) setOpen(true);
    }, 10000);
    return () => clearTimeout(timerRef.current);
  }, [open]);

  const handleResponse = (response) => {
    const current = questions[step];
    setResponses({ ...responses, [current.id]: response });
    setStep((prev) => prev + 1);
  };

  const handlePhoneSubmit = () => {
    alert("Thank you! We’ll contact you at " + phone);
    setOpen(false);
    setStep(0);
    setResponses({});
    setPhone("");
  };

  return (
    <>
      {/* Vertical Floating Tab */}
      {!open && (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[9999]">
          <button
            onClick={() => setOpen(true)}
            className="bg-[#E63946] text-white text-sm font-semibold px-3 py-2 rounded-l-lg shadow-lg hover:bg-red-700 transition-all duration-300 -rotate-90 origin-bottom-right"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              height: "100px",
              minWidth: "48px",
            }}
          >
            Chat with Us
          </button>
        </div>
      )}

      {/* Sliding Chat Widget */}
      <div
        className={`fixed bottom-20 right-6 w-80 max-w-[95vw] rounded-xl bg-white border shadow-xl z-[9999] transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-2">
            <MessageCircle className="text-red-600" />
            <h2 className="font-bold text-sm text-gray-800">Chat with Us</h2>
          </div>
          <button onClick={() => setOpen(false)} className="text-gray-600 hover:bg-gray-100 rounded-full p-1">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Chat Body */}
        <div className="p-3 max-h-72 overflow-y-auto space-y-2">
          {Object.entries(responses).map(([id, message], i) => (
            <div key={i} className="flex flex-col items-end">
              <div className="text-xs text-right text-gray-400">Step {id}</div>
              <div className="bg-blue-600 text-white rounded-lg px-3 py-2 text-sm max-w-[80%]">
                {message}
              </div>
            </div>
          ))}
          {step < questions.length && (
            <div className="flex flex-col items-start">
              <div className="text-xs text-gray-400">Step {questions[step].id}</div>
              <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm max-w-[80%]">
                {questions[step].question}
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t px-4 py-3">
          {step < questions.length ? (
            questions[step].options ? (
              <div className="flex flex-col gap-2">
                {questions[step].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleResponse(option)}
                    className="border border-red-600 text-red-600 rounded-full py-1 text-sm hover:bg-red-600 hover:text-white transition"
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <input
                type="text"
                onKeyDown={(e) => e.key === "Enter" && handleResponse(e.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm bg-gray-100 focus:outline-blue-500"
                placeholder="Type your answer and press Enter"
              />
            )
          ) : (
            <div className="flex flex-col gap-2">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm bg-gray-100 focus:outline-blue-500"
                placeholder="Enter your phone number"
              />
              <button
                onClick={handlePhoneSubmit}
                className="bg-red-600 text-white rounded-md py-2 text-sm hover:bg-red-700"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
