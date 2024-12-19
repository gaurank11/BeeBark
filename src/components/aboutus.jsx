import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Desktop and Laptop View */}
      <div className="hidden md:grid md:grid-cols-2 min-h-screen">
        {/* Left Grid - Content */}
        <div className="bg-white flex flex-col justify-center items-center p-8">
          <div className="max-w-md text-left">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 font-montserrat">
              Real Solutions for Real Estate
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-justify font-poppins">
              At <span className="font-bold text-green-600">TheBeeBark</span>,
              we craft digital solutions inspired by nature’s architects. With
              integrity and creativity, we empower builders, architects, and
              designers.
            </p>
            <button className="px-6 py-3 text-green-600 font-medium border-2 border-green-600 rounded hover:bg-green-700 hover:text-white font-poppins">
              Company
            </button>
          </div>
        </div>

        {/* Right Grid - Logo */}
        <div className="bg-green-600 flex items-center justify-center">
          <div className="bg-white p-6 rounded-full shadow-lg">
            <img
              src="/bbark_logo.png"
              alt="TheBeeBark Logo"
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden bg-green-600 flex flex-col justify-between min-h-screen p-6">
        {/* Logo Section */}
        <div className="flex flex-grow items-center justify-center">
          <div className="bg-white p-6 rounded-full shadow-lg">
            <img
              src="/bbark_logo.png"
              alt="TheBeeBark Logo"
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="text-left text-white max-w-sm mt-auto">
          <h2 className="text-2xl font-bold mb-4 font-montserrat">
            Real Solutions for Real Estate
          </h2>
          <p className="text-base mb-6 font-poppins">
            At <span className="font-bold">TheBeeBark</span>, we craft digital
            solutions inspired by nature’s architects. With integrity and
            creativity, we empower builders, architects, and designers.
          </p>
          <button className="px-6 py-3 text-green-600 font-medium bg-white rounded border-2 border-white hover:bg-green-600 hover:text-white font-poppins">
            Company
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
