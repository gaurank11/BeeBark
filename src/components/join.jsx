import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle, Phone, Briefcase, MapPin, FileText } from "lucide-react";

const JoinUs = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [agree, setAgree] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-6 sm:px-8 font-poppins mt-24">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 sm:p-10 flex flex-col sm:flex-row space-y-6 sm:space-y-0">
        {/* Left side: Form */}
        <div className="w-full sm:w-1/2 space-y-6">
          <span className="text-3xl font-semibold text-gray-800 text-left">
            Join TheBeeBark
          </span>
          <span className="text-3xl font-semibold text-green-600"> PRO</span>
          <p className="text-left text-gray-600 text-lg">
            Unlock TheBeeBark PRO! Complete your profile to start using TheBeeBark PRO today.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Business Name */}
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-600">
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Professional Category Dropdown */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-600">
                Professional Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              >
                <option value="">Select Category</option>
                <option value="architect">Architect</option>
                <option value="web_developer">Web Developer</option>
                <option value="real_estate">Real Estate</option>
                <option value="designer">Designer</option>
              </select>
            </div>

            {/* Business Phone Number with Country Code */}
            <div className="flex items-center space-x-4">
              <div className="w-1/4">
                <label htmlFor="countryCode" className="block text-sm font-medium text-gray-600">
                  Country Code
                </label>
                <select
                  id="countryCode"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                >
                  <option value="+91">+91 (India)</option>
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+61">+61 (Australia)</option>
                </select>
              </div>
              <div className="w-3/4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                  Business Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Agree Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
                required
              />
              <label htmlFor="agree" className="ml-2 text-sm text-gray-600">
                I agree to the{" "}
                <a href="/terms" className="text-green-600 hover:text-green-800">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-green-600 hover:text-green-800">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right side: Benefits with Icons */}
        <div className="w-full sm:w-1/2 space-y-8 pt-8 sm:pt-0 sm:pl-8">
          <div className="space-y-6">
            {[
              { Icon: CheckCircle, text: "Your Pro directory profile is how potential clients find you on TheBeeBark." },
              { Icon: Briefcase, text: "Include your business name, and it will appear in TheBeeBark PRO directory search results." },
              { Icon: MapPin, text: "Choose the business type that best fits your business to target the right clients." },
              { Icon: Phone, text: "Provide your phone number for clients to contact you directly from your Pro directory profile." },
              { Icon: FileText, text: "Complete your profile to start showcasing your services and get more clients." },
            ].map(({ Icon, text }, index) => (
              <div key={index} className="flex items-start space-x-6">
                <Icon className="h-7 w-7 text-green-600" />
                <p className="text-base text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
