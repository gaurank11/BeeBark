import React, { useState } from 'react';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover md:scale-150" // Adjust zoom for larger screens
        style={{ objectPosition: 'center center' }} // Center the video
        muted={isMuted}
        autoPlay
        loop
        playsInline
      >
        <source src="video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

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
