import React, { useState } from "react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const navigate = useNavigate(); // Initialize the navigate function

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleLearnMore = () => {
    navigate("/other-page"); // Example: Navigating to '/other-page'
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{ fontFamily: "Gotham SSm B, Gotham SSm A, Helvetica, Roboto, Arial, sans-serif" }}
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        muted={isMuted}
        autoPlay
        loop
        playsInline
      >
        <source src="video.mp4" type="video/mp4" />
        <source src="video.webm" type="video/webm" />
        {/* Fallback Message */}
        Your browser does not support the video tag.
      </video>

      {/* Bottom-Left Text and Button */}
      <div className="absolute bottom-16 left-8 p-6 rounded-xl max-w-md">
        <div className="text-lg md:text-[32px] text-white font-semibold mb-4 leading-relaxed">
          The future belongs to those who believe in the beauty of their dreams.
        </div>
        <button
          className="px-6 py-3 border-2 border-green-500 text-white text-sm md:text-xl font-semibold rounded-lg shadow-lg hover:bg-green-500 hover:text-white transition-all md:px-12 "
          onClick={handleLearnMore}
        >
          Learn More
        </button>
      </div>

      {/* Mute/Unmute Button */}
      <div className="absolute bottom-5 right-5 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer z-10">
        {isMuted ? (
          <SpeakerXMarkIcon
            className="w-6 h-6 md:w-8 md:h-8 text-white"
            onClick={toggleMute}
          />
        ) : (
          <SpeakerWaveIcon
            className="w-6 h-6 md:w-8 md:h-8 text-white"
            onClick={toggleMute}
          />
        )}
      </div>
    </div>
  );
}
