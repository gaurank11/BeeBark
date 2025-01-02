import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // Import eye icons

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  // Scroll to top when the page is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="flex flex-col sm:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg mt-20 sm:mt-0">
        {/* Left side: Login Form */}
        <div className="w-full sm:w-1/2 p-8 space-y-6 flex flex-col justify-between">
          <h2 className="text-3xl font-semibold text-gray-800 text-center font-montserrat">
            TheBeeBark Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
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
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"} // Toggle password visibility
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
              {/* Eye icon for toggling password visibility */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 transform  text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Keep me signed in
              </label>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign In
            </button>

            {/* Forgot Password Link */}
            <div className="text-center mt-4 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600">
                Forgot Password?
              </a>
            </div>

            {/* Join Us Link */}
            <div className="text-center text-sm text-gray-600 mt-4">
              <span>Don't have an account? </span>
              <Link
                to="/signup" className="text-green-600 hover:text-green-800">
                Sign Up
              </Link>
            </div>
          </form>

          {/* Legal Terms */}
          <div className="text-xs text-center mt-6 text-gray-500">
            By signing up, signing in, or continuing, I agree to the{" "}
            <a href="/terms" className="text-green-600 hover:text-green-800">
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-green-600 hover:text-green-800">
              Privacy Policy
            </a>
            .
          </div>
        </div>

        {/* Right side: Image + Continue Buttons */}
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center bg-cover bg-center rounded-t-lg sm:rounded-r-lg relative">
          {/* Image */}
          <div
            className="w-full sm:h-2/3 bg-cover bg-center hidden sm:block"
            style={{
              backgroundImage: "url('/logo-chill.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Continue Buttons (for mobile and desktop) */}
          <div className="w-full p-6 bg-white flex flex-col items-center space-y-4">
            <button className="w-full py-2 text-black font-semibold rounded-md border-2 border-black hover:bg-gray-100 focus:outline-none flex items-center justify-center">
              <img src="/google_logo.png" alt="Google" className="mr-2 h-5 w-5" />
              Continue with Google
            </button>
            <button className="w-full py-2 text-black font-semibold rounded-md border-2 border-black hover:bg-gray-100 focus:outline-none flex items-center justify-center">
              <img src="/apple_logo.png" alt="Apple" className="mr-2 h-5 w-5" />
              Continue with Apple
            </button>
            <button className="w-full py-2 text-black font-semibold rounded-md border-2 border-black hover:bg-gray-100 focus:outline-none flex items-center justify-center">
              <img src="/facebook_logo.png" alt="Facebook" className="mr-2 h-5 w-5" />
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
