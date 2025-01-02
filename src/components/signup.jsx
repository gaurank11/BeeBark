import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // Import the Eye and EyeOff icons

const SignUpPage = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState(location.state?.email || ""); // Prefill email if passed from the previous page
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle signup logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="flex flex-col sm:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg mt-44 sm:mt-12">
        {/* Left side: Sign Up Form */}
        <div className="w-full sm:w-1/2 p-8 space-y-6 flex flex-col justify-between">
          <h2 className="text-3xl font-semibold text-gray-800 text-center font-montserrat">
            TheBeeBark Sign Up
          </h2>

          <form onSubmit={handleSignUp} className="space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
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
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"} // Toggle password visibility
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center justify-center px-3"
                  onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />} {/* Use Eye or EyeOff icon */}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"} // Toggle confirm password visibility
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center justify-center px-3"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle showConfirmPassword state
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />} {/* Use Eye or EyeOff icon */}
                </button>
              </div>
            </div>

            {/* Agree to Terms Checkbox */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                checked={agreeToTerms}
                onChange={() => setAgreeToTerms(!agreeToTerms)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the <a href="/terms" className="text-green-600 hover:text-green-800">Terms and Conditions</a>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>

            {/* Already have an account? */}
            <div className="text-center text-sm text-gray-600 mt-4">
              <span>Already have an account? </span>
              <a href="/login" className="text-green-600 hover:text-green-800">
                Log In
              </a>
            </div>
          </form>

          {/* Legal Terms */}
          <div className="text-xs text-center mt-6 text-gray-500">
            By signing up, I agree to the <a href="/privacy" className="text-green-600 hover:text-green-800">Privacy Policy</a>.
          </div>
        </div>

        {/* Right side: Image + Continue Buttons */}
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center bg-cover bg-center rounded-t-lg sm:rounded-r-lg relative">
          {/* Image */}
          <div
            className="w-full sm:h-2/3 bg-cover bg-center hidden sm:block"
            style={{
              backgroundImage: "url('/logo-chill1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Continue Buttons (for mobile and desktop) */}
          <div className="w-full p-6 bg-white flex flex-col items-center space-y-4">
            <button className="w-full py-2 text-black font-semibold rounded-md border-2 border-black hover:bg-gray-100 focus:outline-none flex items-center justify-center">
              <img src="/google_logo.png" alt="Google" className="mr-2 h-5 w-5" />
              Sign Up with Google
            </button>
            <button className="w-full py-2 text-black font-semibold rounded-md border-2 border-black hover:bg-gray-100 focus:outline-none flex items-center justify-center">
              <img src="/apple_logo.png" alt="Apple" className="mr-2 h-5 w-5" />
              Sign Up with Apple
            </button>
            <button className="w-full py-2 text-black font-semibold rounded-md border-2 border-black hover:bg-gray-100 focus:outline-none flex items-center justify-center">
              <img src="/facebook_logo.png" alt="Facebook" className="mr-2 h-5 w-5" />
              Sign Up with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
