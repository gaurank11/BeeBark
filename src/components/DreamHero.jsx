import React from 'react';

const Hero1 = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with White Overlay */}
      <div className="absolute inset-0 bg-[url('/image.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white opacity-65"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center w-full max-w-7xl px-8 py-16">
        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight">
            Make Your Dream Home a Reality
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-md mx-auto lg:mx-0">
            Find inspiration, products, and the pros to make it happen — all in one place.
          </p>
        </div>

        {/* Forms Section */}
        <div className="flex flex-col gap-8 items-center justify-center">
          {/* Pro Member Section */}
          <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-md sm:text-lg md:text-xl font-bold mb-6 text-center hidden sm:block">
          Join as a Pro Member
          </h2>

            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Business Email"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="submit"
                className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-all text-sm sm:text-md"
              >
                Join Us as a Pro
              </button>
            </form>
          </div>

          {/* OR Separator */}
          <div className="text-gray-500 font-semibold">OR</div>

          {/* Sign Up Section */}
          <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-md sm:text-lg md:text-xl font-bold mb-6 text-center hidden sm:block">
              Sign Up
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="submit"
                className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-all text-sm sm:text-md"
              >
                Sign Up with Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
