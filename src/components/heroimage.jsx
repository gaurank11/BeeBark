import React from 'react';
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
    "heroimage.jpg"
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Slider */}
      <Slider {...settings} className="w-full h-full">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-full">
            {/* Background Image */}
            <div
              className="w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url('${image}')` }}
            >
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
