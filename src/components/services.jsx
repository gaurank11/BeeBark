import React, { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [currentService, setCurrentService] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false); // To handle scroll throttling
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

  const sectionRef = useRef(null);
  const nextSectionRef = useRef(null); // To reference the next section below the services

  // Handle wheel event with throttling
  const handleWheel = (e) => {
    if (isScrolling) return; // Prevent too many triggers during fast scroll
    setIsScrolling(true);

    setTimeout(() => setIsScrolling(false), 800); // Reset throttling after 800ms

    if (currentService === 0 && e.deltaY < 0) {
      return;
    }

    if (currentService === servicesData.length - 1 && e.deltaY > 0) {
      return;
    }

    if (e.deltaY > 0 && currentService < servicesData.length - 1) {
      // Scroll Down
      setCurrentService((prev) => Math.min(prev + 1, servicesData.length - 1));
    } else if (e.deltaY < 0 && currentService > 0) {
      // Scroll Up
      setCurrentService((prev) => Math.max(prev - 1, 0));
    }
  };

  // Smooth scroll after service section is completed
  useEffect(() => {
    if (currentService === servicesData.length - 1) {
      // Allow smooth scrolling to the next section
      window.scrollTo({ top: nextSectionRef.current.offsetTop, behavior: 'smooth' });
    }
  }, [currentService]);

  // Prevent scroll when at the last service or at the first service
  useEffect(() => {
    if (currentService === servicesData.length - 1) {
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling again
      document.body.style.overflow = 'auto';
    }
  }, [currentService]);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen bg-gray-50 flex flex-col justify-center items-center overflow-hidden"
      onWheel={handleWheel} // Scroll event to change services
    >
      <h1 className="absolute top-16 text-5xl font-bold text-gray-700">Services</h1>

      <div className="flex flex-col justify-center items-center h-full w-full mt-32 transition-all duration-1000 ease-in-out">
        <h2 className="text-7xl font-bold text-gray-800 transition-all duration-500">
          {servicesData[currentService]?.title}{' '}
          <span className="text-gray-400">{servicesData[currentService]?.id}</span>
        </h2>

        <div className="flex items-center justify-center mt-12 w-full">
          <div className="w-1/3 flex justify-center">
            <img
              src={servicesData[currentService]?.image}
              alt={servicesData[currentService]?.title}
              className="w-64 h-64 object-contain"
            />
          </div>

          <div className="w-2/3 px-8">
            <p className="text-xl text-gray-600">{servicesData[currentService]?.description}</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Services;
