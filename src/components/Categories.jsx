import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 text-black hover:text-gray-900 cursor-pointer z-10"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 text-black hover:text-gray-900 cursor-pointer z-10"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </div>
);

const categories = [
  {
    image: 'https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b',
    name: 'E-Commerce Websites',
    description: 'Modern, user-friendly designs for online stores.',
  },
  {
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/77b5b783911401.5d4b03c198716.png',
    name: 'Portfolio Websites',
    description: 'Showcase your work with stunning portfolio templates.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo36oot-PAY0BS_vLDVk08_XEV9wyZJZKSWg&s',
    name: 'Blog Websites',
    description: 'Engaging layouts for personal and professional blogs.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYtzXZ8i6JatfEW7qwpln5K5j-cpErzT3FoA&s',
    name: 'Landing Pages',
    description: 'High-converting designs for product or service promotion.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScj1El6KT4UG97fQAP8rgj3A_XlGE5cf-dwg&s',
    name: 'Business Websites',
    description: 'Professional designs for corporate and small businesses.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0od6a2IbmGtRwtb4MlmtY3x7Z_CtBwXIEyw&s',
    name: 'Creative Websites',
    description: 'Unique, visually stunning designs for creatives.',
  },
];


export function Categories() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 items for large screens
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4, // Show 4 items for medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Show 3 items for small screens
          nextArrow: null,
          prevArrow: null,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2, // Show 2 items for extra small screens
          nextArrow: null,
          prevArrow: null,
        },
      },
    ],
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Explore Web Designs</h2>
          <button
            onClick={() => (window.location.href = '/categories')} // Replace with your actual navigation logic
            className="text-green-700 text-sm font-semibold hover:underline"
          >
            See All
          </button>
        </div>

        {/* Carousel Section */}
        <Slider {...settings}>
  {categories.map((category) => (
    <div key={category.name} className="p-4">
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
        <div className="overflow-hidden rounded-lg mb-4">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-40 object-cover transition-transform transform hover:scale-110"
          />
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-lg text-gray-900">{category.name}</h3>
         
        </div>
      </div>
    </div>
  ))}
</Slider>

      </div>
    </section>
  );
}
