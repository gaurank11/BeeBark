import React from "react";
import { ArrowUp, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-12">
      {/* Footer Container */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between lg:space-x-12">

          {/* Left Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            {/* Scroll to Top Arrow */}
            <div className="mb-6">
              <button
                onClick={scrollToTop}
                className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full hover:bg-gray-600 transition"
                title="Scroll to Top"
              >
                <ArrowUp className="text-white" size={24} />
              </button>
            </div>

            {/* About Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 md:text-4xl">About Us</h3>
              <p className="text-md text-gray-300 leading-relaxed md:text-xl font-semibold">
                Beebark is committed to delivering excellence and providing
                high-quality services to meet your needs. We strive for innovation
                and customer satisfaction.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-400 transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            {/* Get in Touch */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 md:text-3xl">Get in Touch</h3>
              <p className="text-md text-green-600 font-semibold md:text-xl">
                <span className="block mb-2"><a href="tel:+917701858312" className="hover:text-green-700">+91 7701858312</a></span>
                <span className="block"><a href="mailto:info@thebeebark.com" className="hover:text-green-700">info@thebeebark.com</a></span>
              </p>
            </div>

            {/* Explore Links */}
            <div>
              <h3 className="text-2xl font-bold mb-4 md:text-3xl">Explore</h3>
              <div className="flex flex-col md:flex-row flex-wrap gap-4 md:text-xl font-semibold">
                <a href="#work" className="text-md hover:text-gray-400 transition">
                  Work
                </a>
                <a href="#services" className="text-md hover:text-gray-400 transition">
                  Services
                </a>
                <a 
                href="#aboutus" className="text-md hover:text-gray-400 transition">
                  About
                </a>
                <a href="#contact" className="text-md hover:text-gray-400 transition">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

     
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm lg:text-md">
            © 2024 Beebark. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
