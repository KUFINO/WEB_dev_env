'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import AuthButtons from './AuthButtons';

const SignupForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mt-[100%] lg:mt-7 max-w-md w-full lg:w-[70%]">
      <h2 className="text-xl font-bold text-dobby text-center lg:mt-3">Sign Up Account</h2>
      <p className="mt-1 text-sm text-gray-400 pb-5 text-center lg:mb-4">
        Enter your personal data to create your account
      </p>

     
      <AuthButtons />

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
              {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
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
  );
};

export default SignupForm;
