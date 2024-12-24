import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Professionals",
      image: "https://img.etimg.com/photo/msid-64916939,imgsize-228828/images(5).jpg",
    },
    {
      title: "Account & Privacy",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCh4TUUlkMB0Y7UWZTAt-rEtWm8AcIeZ05zQ&s",
    },
    {
      title: "Website Help",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9vQ8ww4Q8wOinMwwtlRu6O4cSlTHqwgjvg&s",
    },
    {
      title: "Technical Support",
      image: "https://static.vecteezy.com/system/resources/previews/002/756/259/non_2x/technical-support-customer-help-tech-support-customer-service-business-and-technology-concept-wireframe-hand-touching-digital-interface-vector.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 pt-20 px-6">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-lg text-gray-600">
            Need help? Click on a section below to learn more or reach out to us directly.
          </p>
        </div>

        {/* Help Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => navigate("/LetsTalk", { state: { helpType: section.title } })}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h2 className="text-white text-2xl font-bold">{section.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
