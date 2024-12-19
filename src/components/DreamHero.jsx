import React from 'react';

const Hero1 = () => {
  return (
    <div className="relative min-h-screen flex flex-col lg:grid lg:grid-cols-2 font-montserrat">
      {/* Sign-Up Section */}
      <div className="bg-[url('/image.png')] bg-cover bg-center text-black flex flex-col justify-center items-center px-8 py-16">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  mb-4 font-poppins text-left ">
            The Best Place to Find Professionals
          </h1>
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
          <p className="text-sm text-gray-600 mt-4 text-justify">
            By signing up, signing in or continuing, I agree to the TheBeeBark Terms of Use and
            acknowledge the TheBeeBark Privacy Policy. I agree that TheBeeBark may use my email address
            for marketing purposes. I can opt out at any time through my settings.
          </p>
        </div>
      </div>

      {/* TheBeeBark PRO Section */}
      <div className="bg-[rgb(51,51,51)] text-white flex flex-col justify-center items-center px-8 py-20">
        <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-4xl font-bold text-center mb-6 text-green-500 font-poppins">
            TheBeeBark PRO
          </h2>
          <p className="text-left text-gray-300 mb-8 text-lg">
            Join as a professional to connect with clients and grow your business.
          </p>
          <form className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Business Email"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="bg-white text-black py-4 px-8 rounded-md hover:bg-gray-300 transition-all text-md"
            >
              Join for Free
            </button>
          </form>
          <p className="text-sm text-gray-300 mt-6 text-justify">
            By signing up, you agree to the TheBeeBark Terms of Use and Privacy Policy. You can opt
            out at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
