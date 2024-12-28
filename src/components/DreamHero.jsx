import React from 'react';

const Hero1 = () => {
  return (
    <div className="flex flex-col lg:flex-row font-montserrat min-h-screen">
      {/* About Us Section (78%) */}
      <div className="lg:w-[78vw] bg-[url('/image.png')] bg-cover bg-center text-black flex flex-col justify-center px-[5vw] py-[5vh]">

        <div className="bg-white bg-opacity-80 p-[3vw] rounded-lg shadow-lg max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-[1.5vw] font-poppins">
            The Best Place to Find Professionals
          </h1>
          <form className="flex flex-col gap-[1vw]">
            <input
              type="email"
              placeholder="Your Email"
              className="p-[1.2vw] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="bg-black text-white py-[1vw] px-[2vw] rounded-md hover:bg-gray-800 transition-all"
            >
              Sign Up with Email
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-[1vw] text-justify">
            By signing up, you agree to TheBeeBark Terms of Use and acknowledge our Privacy Policy.
            You can unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* TheBeeBark PRO Section (38%) */}
      <div className="lg:w-[38vw] bg-black text-white flex flex-col justify-center px-[4vw] py-[5vh]">
        <h2 className="text-3xl md:text-left mb-[2vw] font-poppins">
          <span className="text-white font-bold">TheBeeBark</span> <span className="text-green-500 font-semibold">PRO</span>
        </h2>

        <p className="text-gray-300 mb-[2vw] leading-relaxed">
          Join as a professional to connect with clients and grow your business today.
        </p>
        <form className="flex flex-col gap-[1.5vw]">
          <input
            type="email"
            placeholder="Business Email"
            className="p-[15px] border bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="bg-white text-black py-[15px] px-[2vw] rounded-md hover:bg-gray-300 transition-all"
          >
            Join for Free
          </button>
        </form>
        <p className="text-sm text-gray-300 mt-[1.5vw]">
          By joining, you agree to TheBeeBark Terms of Use and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Hero1;
