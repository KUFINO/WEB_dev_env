import React, { useState } from 'react';
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; 
import '../styles/globals.css';
import { GoogleIcon, GitHubIcon } from "@/components/ui/icons/Icons";

const LoginPage: React.FC = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleButtonClick = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="bg-black flex h-screen w-full overflow-hidden">
      <div className="w-3/5 h-full bg-onboarding-screen bg-no-repeat bg-cover flex items-end justify-center rounded-lg pb-16">
        <div className="text-white text-center">
          <div className="flex items-center justify-center mb-6">
            <svg 
              className="w-4 h-4 text-white mr-2" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor">
              <path d="M9 5v14l11-7z" />
            </svg>
            <h2 className="text-xl font-bold">MaaleM</h2>
          </div>
          <h1 className="text-2xl font-bold pb-2">GET STARTED WITH US</h1>
          <p className="mt-1 text-sm text-gray-400">Complete those easy steps to register your account</p>

          <div className="flex flex-col space-y-4 mt-6 w-full">
            {['Sign Up Your Account', 'Set Up Your Space', 'Set Up Your Profile'].map((text, index) => (
              <Button
                key={index}
                onClick={handleButtonClick}
                className={`flex items-center justify-center w-full h-12 ${isLightMode ? 'bg-white text-black' : 'bg-[#141414] text-white'}`}
              >
                <span className={`mr-2 font-bold ${isLightMode ? 'text-black' : 'text-white'}`}>
                  {index + 1}
                </span>
                <span className="font-medium">{text}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Sign Up Section */}
      <div className="w-2/5 h-full flex flex-col items-center justify-center text-white p-8 overflow-y-auto">
        <h2 className="mt-6 text-xl font-bold pb-7">Sign Up Account</h2>

        <div className="mt-4 flex space-x-4">
          <Button variant="outline" className="flex items-center bg-transparent justify-center w-28">
            <GoogleIcon className="w-5 h-5 mr-2" />
            <span className="font-medium">Google</span>
          </Button>
          <Button variant="outline" className="flex items-center bg-transparent justify-center w-28">
            <GitHubIcon className="w-5 h-5 mr-2" />
            <span className="font-medium">GitHub</span>
          </Button>
        </div>

        <div className="flex items-center my-4 w-full">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-2 text-gray-400">or</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        <div className="w-full space-y-3"> 
          <div className="flex w-full space-x-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="firstName" className="text-sm font-medium text-gray-400 mb-1">First Name</label>
              <Input 
                id="firstName" 
                placeholder="e.g. Hajar" 
                className="h-12 w-full bg-[#141414] text-white placeholder-gray-400 rounded-md px-3 text-sm" 
              />
            </div>

            <div className="flex flex-col w-1/2">
              <label htmlFor="lastName" className="text-sm font-medium text-gray-400 mb-1">Last Name</label>
              <Input 
                id="lastName" 
                placeholder="e.g. Aloua" 
                className="h-12 w-full bg-[#141414] text-white placeholder-gray-400 rounded-md px-3 text-sm" 
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-sm font-medium text-gray-400 mb-1">Email</label>
            <Input 
              id="email" 
              type="email" 
              placeholder="e.g. hajar@example.com" 
              className="h-12 w-full bg-[#141414] text-white placeholder-gray-400 rounded-md px-3 text-sm" 
            />
          </div>

          <div className="flex flex-col w-full relative">
            <label htmlFor="password" className="text-sm font-medium text-gray-400 mb-1">Password</label>
            <div className="relative">
              <Input 
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password" 
                className="h-12 w-full bg-[#141414] text-white placeholder-gray-400 rounded-md px-3 pr-12 text-sm" 
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
            <p className="mt-1 text-xs text-gray-400">Must be at least 8 characters</p>
          </div>
        </div>

        <Button className="flex items-center justify-center w-3/5 h-10 mt-6 bg-white text-black hover:bg-gray-100">
          <span className="font-medium">Sign Up</span>
        </Button>

        <p className="mt-4 text-gray-400 text-sm">
          Already have an account? <a href="/login" className="text-white font-bold hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage; 
