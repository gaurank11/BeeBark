import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const images = [
    "heroimage0.jpg",
    "heroimage1.jpg",
    "heroimage2.jpg",
    "heroimage.jpg",
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider */}
      <Slider {...settings} className="w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen bg-black flex items-center justify-center"
          >
            {/* Image with fallback background */}
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-contain md:object-cover bg-black"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
