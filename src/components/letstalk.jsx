import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function LetsTalk() {
  const location = useLocation();
  const [helpType, setHelpType] = useState("");

  useEffect(() => {
    if (location.state && location.state.helpType) {
      setHelpType(location.state.helpType);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="bg-white pt-28 pb-16 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form Section */}
        <div className="min-h-[300px]">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Let's Talk</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full p-4 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full p-4 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full p-4 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="regarding">
                Regarding
              </label>
              <input
                type="text"
                id="regarding"
                value={helpType}
                readOnly
                className="w-full p-4 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                Tell Us More
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-4 border border-gray-300 rounded-md"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center">
          <img
            src="/c5.jpeg"
            alt="Let's talk"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
