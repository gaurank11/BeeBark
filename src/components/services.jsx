import React, { useState, useEffect } from 'react';
import '../services.css'; // Make sure to create and import the CSS file for styling

// Array of logos, each corresponding to a service
const logos = [
  'https://amplifieddigitalagency.com/wp-content/uploads/Develop-Strong-Digital-Presence-Blog.png',  // Logo for Digital Presence Development
  'https://digitalnotebook.in/up/2023/07/digital-marketing-service.jpg',  // Logo for Digital Marketing Solutions
  'https://go4customer.com/images/blog/ch%202%20BODY%20CONTENT%20IMAGE.png',  // Logo for Client Acquisition Services
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpj_XW8CCV1woL0mpmyyx9mTcj-tAxngyPiw&s',  // Logo for Marketplace Creation & Management
  'https://www.savills.in/_images/commercial-buildings-size1.jpg',  // Logo for Real Estate Consultancy
  'https://media.licdn.com/dms/image/D4D12AQFdUZmKZLH8yQ/article-cover_image-shrink_720_1280/0/1698851269979?e=2147483647&v=beta&t=_WYG-GKEp-yYTdrSPjN19aOfZszngdhstgwwXBfkOQw',  // Logo for Fraud Prevention & Risk Mitigation
  'https://media.licdn.com/dms/image/v2/D5612AQHnS9FF5BLpMg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1675814617028?e=2147483647&v=beta&t=9z_l2znN5jTQZBFAhko8qRB__vtnoRRwTAYq8tj889A',  // Logo for Collaborative Networking
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSmrCVTEyOSXyka5XIawtnaGMZ4BewCCSKaA&s',  // Logo for Long-Term Marketing Support
  'https://www.tpsdi.com/images/consulting_full_image.jpg',  // Logo for Training & Educational Services
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxbeouYubWO-5micSZOW11S-K8VPlYRWLiQ&s', // Logo for AI-Powered Analytics & Insights
];

const servicesData = [
  {
    title: 'Digital Presence Development',
    content: [
      'Custom Website Design & Development: User-friendly, responsive websites tailored for architects, builders, and developers.',
      'Search Engine Optimization (SEO): Optimized content and website structures to improve search rankings and visibility.',
      'Content Creation: Blog writing, video content, and case studies showcasing expertise and completed projects.',
    ],
  },
  {
    title: 'Digital Marketing Solutions',
    content: [
      'Social Media Marketing (SMM): Managing social media platforms to engage audiences and showcase expertise.',
      'Search Engine Marketing (SEM): Running Google Ads campaigns to drive traffic and generate leads.',
      'Paid Advertising Management (Meta Ads): Managing ads on platforms like Facebook, Instagram, and LinkedIn.',
    ],
  },
  {
    title: 'Client Acquisition Services',
    content: [
      'Lead Generation: Building campaigns that attract potential clients to architects and builders.',
      'CRM Integration & Automation: Implementing tools to track, nurture, and manage client relationships effectively.',
    ],
  },
  {
    title: 'Marketplace Creation & Management',
    content: [
      'Real Estate Listings Platform Development: A marketplace where developers can showcase properties, architects can present portfolios, and consumers can explore or connect directly.',
      'Direct Connection Services: Allowing consumers to connect with industry professionals without intermediaries.',
      'Transparent Buying Process Tools: Solutions to help buyers make informed decisions with access to verified property information and legal checks.',
    ],
  },
  {
    title: 'Real Estate Consultancy',
    content: [
      'Consumer Empowerment Tools: Offering resources and tools to educate buyers about property purchases, legalities, and market conditions.',
      'Market Analysis & Insights: Providing data-driven insights for architects and developers to understand market demands and trends.',
    ],
  },
  {
    title: 'Fraud Prevention & Risk Mitigation',
    content: [
      'Verification Services: Ensuring projects listed or presented are verified to prevent fraud.',
      'Project Monitoring Tools: Platforms or services to track the progress of real estate projects and flag issues like delays or mismanagement.',
    ],
  },
  {
    title: 'Collaborative Networking',
    content: [
      'Professional Ecosystem Tools: Creating platforms to connect architects, builders, designers, and real estate professionals for partnerships and collaboration.',
      'Government Collaboration Frameworks: Bridging gaps between private stakeholders and government entities for smoother project approval and implementation.',
    ],
  },
  {
    title: 'Long-Term Marketing Support',
    content: [
      'Brand Positioning & Strategy Development: Helping industry professionals build a lasting reputation through storytelling and targeted campaigns.',
      'Email Marketing Campaigns: Reaching out to previous and potential clients with updates, offers, and valuable content.',
    ],
  },
  {
    title: 'Training & Educational Services',
    content: [
      'Workshops for Real Estate Professionals: Educating builders and architects on how to use technology and platforms to grow their business.',
      'Customer Education Programs: Guides and workshops to help consumers navigate the real estate landscape.',
    ],
  },
  {
    title: 'AI-Powered Analytics & Insights',
    content: [
      'Consumer Behavior Analytics: Using AI tools to study consumer preferences and enhance service delivery.',
      'Project Performance Tracking: Tracking project success metrics for architects and developers.',
    ],
  },
];

const Services = () => {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % servicesData.length);
    }, 5000); // Change service every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="services">
      <h1 className="services-heading">Our Services</h1>

      {/* Logo and service grid */}
      <div className="services-content">
        <div className="logo">
          <img
            src={logos[currentService]}  // Dynamically load the logo based on the current service
            alt={`${servicesData[currentService].title} Logo`}
            className="logo-img"
          />
        </div>

        <div className="service-details">
          <div className="service-title">{servicesData[currentService].title}</div>
          <ul className="service-list">
            {servicesData[currentService].content.map((item, index) => (
              <li key={index} className="service-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Service names with underline animation */}
      <div className="service-names">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`service-name ${currentService === index ? 'active' : ''}`}
          >
            {service.title}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
