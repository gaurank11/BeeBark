import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const M_Services = () => {
  const servicesData = [
    { 
      id: '01', 
      title: 'Digital Presence Development', 
      description: 'Custom websites, SEO, and compelling content tailored to your needs.', 
      image: '/web.png' 
    },
    { 
      id: '02', 
      title: 'Digital Marketing Solutions', 
      description: 'Engage your audience with SMM, SEM, and paid ad management.', 
      image: '/app.png' 
    },
    { 
      id: '03', 
      title: 'Client Acquisition Services', 
      description: 'Generate leads and integrate CRM tools to grow your client base.', 
      image: '/client.png' 
    },
    { 
      id: '04', 
      title: 'Marketplace Creation & Management', 
      description: 'Build platforms for real estate listings and direct connections.', 
      image: '/market.png' 
    },
    { 
      id: '05', 
      title: 'Real Estate Consultancy', 
      description: 'Data-driven insights and tools to empower consumers and developers.', 
      image: '/real_estate.png' 
    },
    { 
      id: '06', 
      title: 'Fraud Prevention & Risk Mitigation', 
      description: 'Verify projects and monitor progress to minimize risks.', 
      image: '/fraud.png' 
    },
    { 
      id: '07', 
      title: 'Collaborative Networking', 
      description: 'Connect professionals and government entities for smoother projects.', 
      image: '/networking.png' 
    },
    { 
      id: '08', 
      title: 'Long-Term Marketing Support', 
      description: 'Build lasting brand strategies and engage with clients consistently.', 
      image: '/marketing.png' 
    },
    { 
      id: '09', 
      title: 'Training & Educational Services', 
      description: 'Workshops and programs for professionals and consumers.', 
      image: '/training.png' 
    },
    { 
      id: '10', 
      title: 'AI-Powered Analytics & Insights', 
      description: 'Leverage AI to track performance and understand consumer behavior.', 
      image: '/ai_analytics.png' 
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="w-screen h-screen bg-gray-50 flex items-center justify-center md:hidden">
      {/* Hidden on medium and larger screens */}
      <Slider {...settings} className="w-full h-full">
        {servicesData.map((service) => (
          <div key={service.id} className="flex flex-col items-center justify-center text-center bg-gray-100 h-screen p-4">
            {/* Service Title */}
            <h1 className="text-4xl font-semibold text-gray-800 mb-6">{service.title}</h1>

            {/* Service Image */}
            <div className="flex items-center justify-center w-full mb-6">
              <img src={service.image} alt={service.title} className="w-2/3 h-2/3 object-contain rounded-lg shadow-lg" />
            </div>

            {/* Service Description */}
            <p className="text-lg text-gray-600 mb-4 px-6">{service.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default M_Services;
