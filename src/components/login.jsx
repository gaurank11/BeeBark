import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("https://beebark-backend.vercel.app/api/user/login", {
        email,
        password,
        rememberMe,
      });

      localStorage.setItem("userToken", data.token);
      if (rememberMe) {
        localStorage.setItem("userDetails", JSON.stringify(data.user));
      }

      alert(data.message);
      navigate("/"); // Redirect after login
    } catch (error) {
      console.error("Error logging in:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Error logging in");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="flex flex-col sm:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg">
        {/* Left Side: Login Form */}
        <div className="w-full sm:w-1/2 p-8 space-y-6 flex flex-col justify-between">
          <h2 className="text-3xl font-semibold text-gray-800 text-center font-montserrat">
            Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
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

            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 transform text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex items-center">
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

            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Sign In
            </button>

            <div className="text-center text-sm text-gray-600 mt-4">
              <Link to="/forgot-password" className="hover:text-blue-600">
                Forgot Password?
              </Link>
            </div>

            <div className="text-center text-sm text-gray-600 mt-4">
              <span>Don't have an account? </span>
              <Link to="/signup" className="text-green-600 hover:text-green-800">
                Sign Up
              </Link>
            </div>
          </form>

          <div className="text-xs text-center text-gray-500">
            By signing in, you agree to our{" "}
            <Link to="/terms" className="text-green-600 hover:text-green-800">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-green-600 hover:text-green-800">
              Privacy Policy
            </Link>
            .
          </div>
        </div>

        {/* Right Side: Image + Social Login */}
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center bg-cover bg-center rounded-t-lg sm:rounded-r-lg">
          <div
            className="w-full sm:h-2/3 bg-cover bg-center hidden sm:block"
            style={{
              backgroundImage: "url('/logo-chill.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="w-full p-6 bg-white flex flex-col items-center space-y-4">
            <button className="w-full py-2 text-black font-semibold rounded-md border-2 border-black hover:bg-gray-100 flex items-center justify-center">
              <img src="/google_logo.png" alt="Google" className="mr-2 h-5 w-5" />
              Continue with Google
            </button>
            <button className="w-full py-2 text-black font-semibold rounded-md border-2 border-black hover:bg-gray-100 flex items-center justify-center">
              <img src="/apple_logo.png" alt="Apple" className="mr-2 h-5 w-5" />
              Continue with Apple
            </button>
            <button className="w-full py-2 text-black font-semibold rounded-md border-2 border-black hover:bg-gray-100 flex items-center justify-center">
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
