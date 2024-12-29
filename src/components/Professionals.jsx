import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 text-white hover:text-gray-300 cursor-pointer z-10"
    onClick={onClick}
    style={{ zIndex: 10 }}
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
    className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 text-white hover:text-gray-300 cursor-pointer z-10"
    onClick={onClick}
    style={{ zIndex: 10 }}
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
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 items on large screens
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // 3 items on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // 2 items on smaller screens
          centerMode: false,
          nextArrow: null,
          prevArrow: null,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-black relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-montserrat">
          Clientele and Portfolio
        </h2>
        <p className="text-white mb-10 font-poppins">
          Showcasing our esteemed clients and diverse projects from across the globe.
        </p>

        {/* Carousel Section */}
        <Slider {...settings}>
          {clienteleAndPortfolio.map((item) => (
            <div
              key={item.name}
              className="p-4"
              data-aos="fade-up" // AOS Animation
            >
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
