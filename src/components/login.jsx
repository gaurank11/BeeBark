import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg h-[560px] sm:h-auto flex-col sm:flex-row">
        {/* Left side: Login Form */}
        <div className="w-full sm:w-1/2 p-8 space-y-6 flex flex-col justify-between">
          <h2 className="text-3xl font-semibold text-gray-800 text-center font-montserrat">TheBeeBark Login</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
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
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Keep me signed in</label>
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
              <a href="#" className="hover:text-blue-600">Forgot Password?</a>
            </div>

            {/* Join Us Link */}
            <div className="text-center text-sm text-gray-600 mt-4">
              <span>Don't have an account? </span>
              <a href="/sign-up" className="text-green-600 hover:text-green-800">Join Us</a>
            </div>
          </form>

          {/* Legal Terms */}
          <div className="text-xs text-center mt-6 text-gray-500">
            By signing up, signing in, or continuing, I agree to the <a href="/terms" className="text-green-600 hover:text-green-800">Terms and Conditions</a> and <a href="/privacy" className="text-green-600 hover:text-green-800">Privacy Policy</a>.
          </div>
        </div>

        {/* Right side: Image and Social Login */}
        <div 
          className="w-full sm:w-1/2 bg-cover bg-center rounded-r-lg relative" 
          style={{ 
            backgroundImage: "url('/logochill.png')", 
            backgroundSize: 'contain', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat' 
          }}
        >
          {/* Social Media Login Buttons */}
          <div className="absolute bottom-0 left-0 right-0 bg-white p-4 flex flex-col justify-center space-y-4" style={{ height: '30%' }}>
            <button className="w-full py-2 text-black font-semibold rounded-md border-2 border-black hover:bg-gray-100 focus:outline-none">
              <span className="flex items-center justify-center">
                <img src="/google_logo.png" alt="Google" className="mr-2 h-5 w-5" />
                Continue with Google
              </span>
            </button>
            <button className="w-full py-2 text-black font-semibold rounded-md border-2 border-black hover:bg-gray-100 focus:outline-none">
              <span className="flex items-center justify-center">
                <img src="/apple_logo.png" alt="Apple" className="mr-2 h-5 w-5" />
                Continue with Apple
              </span>
            </button>
            <button className="w-full py-2 text-black font-semibold rounded-md border-2 border-black hover:bg-gray-100 focus:outline-none">
              <span className="flex items-center justify-center">
                <img src="/facebook_logo.png" alt="Facebook" className="mr-2 h-5 w-5" />
                Continue with Facebook
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
