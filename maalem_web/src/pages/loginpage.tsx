import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import '../styles/globals.css';
import { GoogleIcon, GitHubIcon } from "@/components/ui/icons/Icons";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeButton, setActiveButton] = useState(0);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <div className="bg-sparkler flex flex-col lg:flex-row h-screen w-full overflow-hidden">
      
      <div className="flex-[0_0_60%] h-[99%] w-[95%] ml-3 md:w-[98%] md:ml-2 sm:w-[98%] mt-1 ml-[0.40rem] bg-login_side bg-no-repeat bg-cover flex items-end justify-center pb-10 rounded-[25px]">
        <div className="text-white text-center">
          <div className="flex items-center justify-center mb-6 md:mt-6 sm:mt-6">
            <svg
              className="w-4 h-4 text-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 5v14l11-7z" />
            </svg>
            <h2 className="text-xl font-bold">KUFINO</h2>
          </div>
          <h1 className="text-2xl font-bold pb-2">GET STARTED WITH US</h1>
          <div className="mt-1 text-sm text-gray-400">
            <p>Complete these easy steps to register</p>
            <p>your account.</p>
          </div>

          
          <div className="flex flex-col space-y-4 mt-10 w-full">
            {['Sign Up Your Account', 'Set Up Your Space', 'Set Up Your Profile'].map((text, index) => (
              <Button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`flex items-center justify-start w-full h-12 
                ${activeButton === index ? 'bg-white text-black' : 'bg-dobby text-white'}`}
              >
                {/* Round number circle */}
                <div
                  className={`flex items-center justify-center rounded-full border-2 w-6 h-6 mr-2 
                  ${activeButton === index ? 'border-black bg-dobby text-white' : 'border-transparent bg-[#141414] text-white'}`}
                >
                  <span className={`font-bold text-white`}>{index + 1}</span>
                </div>
                <span className="pl-4">{text}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Sign Up Section */}
      <div className="flex-[0_0_40%] flex items-center justify-center text-white p-4 overflow-y-auto bg-sparkler">
        <div className="mt-[100%] lg:mt-7 max-w-md w-full lg:w-[70%]">
          <h2 className="text-xl font-bold text-dobby text-center lg:mt-3">Sign Up Account</h2>
          <p className="mt-1 text-sm text-gray-400 pb-5 text-center lg:mb-4">Enter your personal data to create your account</p>

          {/* Google and GitHub Buttons */}
          <div className="lg:mt-4 flex space-x-4 justify-center">
            <Button
              variant="outline"
              className="flex items-center justify-center w-32 sm:w-36 md:w-40 h-10 py-3 px-4 sm:px-5 md:px-6 bg-transparent text-dobby font-bold"
            >
              <GoogleIcon className="w-5 h-5 mr-2" />
              <span className="font-bold">Google</span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center w-32 sm:w-36 md:w-40 h-10 py-3 px-4 sm:px-5 md:px-6 bg-transparent text-dobby font-bold"
            >
              <GitHubIcon className="w-5 h-5 mr-2" />
              <span className="font-bold">GitHub</span>
            </Button>
          </div>

          <div className="flex items-center my-4 w-full">
            <hr className="flex-grow border-gray-600" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-gray-600" />
          </div>

          <div className="w-full space-y-3">
            <div className="flex flex-wrap -mx-2">
              <div className="flex flex-col w-full sm:w-1/2 px-2">
                <label htmlFor="firstName" className="text-sm font-medium text-dobby mb-1">First Name</label>
                <Input
                  id="firstName"
                  placeholder="e.g. Hajar"
                  className="h-12 w-full bg-[#d3d3d3] text-dobby placeholder-gray-400 rounded-md px-3 text-sm"
                />
              </div>

              <div className="flex flex-col w-full sm:w-1/2 px-2">
                <label htmlFor="lastName" className="text-sm font-medium text-dobby mb-1">Last Name</label>
                <Input
                  id="lastName"
                  placeholder="e.g. Aloua"
                  className="h-12 w-full bg-[#d3d3d3] text-dobby placeholder-gray-400 rounded-md px-3 text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="email" className="text-sm font-medium text-dobby mb-1">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="e.g. hajar@example.com"
                className="h-12 w-full bg-[#d3d3d3] text-dobby placeholder-gray-400 rounded-md px-3 text-sm"
              />
            </div>

            <div className="flex flex-col w-full relative">
              <label htmlFor="password" className="text-sm font-medium text-dobby mb-1">Password</label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="h-12 w-full bg-[#d3d3d3] text-dobby placeholder-gray-400 rounded-md px-3 pr-12 text-sm"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="mt-1 text-xs text-dobby">Must be at least 8 characters</p>
            </div>
          </div>

          <Button className="flex items-center justify-center w-full h-10 mt-6 bg-phoenix text-dobby hover:text-white hover:bg-dobby">
            <span className="font-medium">Sign Up</span>
          </Button>

          <p className="mt-4 text-dobby text-sm text-center">
            Already have an account? <a href="/login" className="text-dobby font-semibold hover:underline">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
