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

const clienteleAndPortfolio = [
  {
    name: 'Global Tech Solutions',
    category: 'IT Services',
    image: 'https://via.placeholder.com/400x250?text=Global+Tech+Solutions',
    projects: 125,
    description: 'Leading IT provider for innovative solutions.',
  },
  {
    name: 'Elegant Interiors',
    category: 'Interior Design',
    image: 'https://via.placeholder.com/400x250?text=Elegant+Interiors',
    projects: 98,
    description: 'Crafting luxury spaces with creativity.',
  },
  {
    name: 'Green Landscapes',
    category: 'Landscaping',
    image: 'https://via.placeholder.com/400x250?text=Green+Landscapes',
    projects: 72,
    description: 'Eco-friendly landscaping solutions.',
  },
  {
    name: 'Sky High Constructions',
    category: 'Construction',
    image: 'https://via.placeholder.com/400x250?text=Sky+High+Constructions',
    projects: 150,
    description: 'Building the future with precision.',
  },
];

export function Professionals() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Centered with fewer items
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true, // Enables centering
    centerPadding: '0px', // Adjust padding for full focus
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          nextArrow: null,
          prevArrow: null,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-montserrat">
          Clientele and Portfolio
        </h2>
        <p className="text-gray-600 mb-10 font-poppins">
          Showcasing our esteemed clients and diverse projects from across the globe.
        </p>

        {/* Carousel Section */}
        <Slider {...settings}>
          {clienteleAndPortfolio.map((item) => (
            <div key={item.name} className="p-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 font-montserrat">
                    {item.name}
                  </h3>
                  <p className="text-green-700 text-sm mb-2 font-poppins">{item.category}</p>
                  <p className="text-gray-600 text-sm mb-4 font-poppins">{item.description}</p>
                  <span className="text-gray-500 text-sm font-poppins">
                    {item.projects} Completed Projects
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
