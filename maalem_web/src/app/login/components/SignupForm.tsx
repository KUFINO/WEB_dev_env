'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import AuthButtons from './AuthButtons';

const SignupForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputClassName = "h-12 w-full border-2 focus:border-2 bg-sparkler text-dobby placeholder-dobby/50 rounded-md px-3 text-sm";

  return (
    <div className="w-full h-screen p-6 bg-sparkler">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/logos/logo.png"
            alt="Kufino Logo"
            width={60}
            height={60}
            priority
          />
        </div>
        <h2 className="text-4xl font-bold text-dobby text-center">Create Your Account</h2>
        <p className="mt-1 text-sm text-dobby opacity-70 pb-5 text-center">
          Please provide your information to set up your account (Beta Version)
        </p>
        <div className="w-full space-y-3">
          <div className="flex flex-wrap -mx-2">
            <div className="flex flex-col w-full px-2 sm:w-1/2">
              <label htmlFor="firstName" className="text-sm font-medium text-dobby mb-1">First Name</label>
              <Input
                id="firstName"
                placeholder="Enter your first name"
                className={inputClassName}
              />
            </div>
            <div className="flex flex-col mt-3 w-full px-2 sm:w-1/2 sm:mt-0">
              <label htmlFor="lastName" className="text-sm font-medium text-dobby mb-1">Last Name</label>
              <Input
                id="lastName"
                placeholder="Enter your last name"
                className={inputClassName}
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-sm font-medium text-dobby mb-1">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className={inputClassName}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="phone" className="text-sm font-medium text-dobby mb-1">Phone Number</label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className={inputClassName}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="nationality" className="text-sm font-medium text-dobby mb-1">Nationality</label>
            <Input
              id="nationality"
              value="Morocco"
              readOnly
              className={`${inputClassName} cursor-not-allowed`}
            />
            <p className="text-xs text-dobby mt-1">Only Morocco is available for the Beta version.</p>
          </div>
          <div className="flex flex-col w-full relative">
            <label htmlFor="password" className="text-sm font-medium text-dobby mb-1">Password</label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className={inputClassName}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-dobby"
              >
                {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={acceptTerms}
              onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
              className="border-dobby text-phoenix"
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none text-dobby peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I accept the <a href="/terms" className="text-dobby font-semibold italic hover:underline">Terms and Conditions</a>
            </label>
          </div>
        </div>
        <div className="flex items-center my-4 w-full">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-2 text-gray-400">or</span>
          <hr className="flex-grow border-gray-600" />
        </div>
        <AuthButtons />
        <Button 
          className="flex items-center justify-center w-full h-10 mt-6 bg-phoenix text-dobby hover:bg-phoenix"
          disabled={!acceptTerms}
        >
          <span className="font-medium">Create Account</span>
        </Button>
        <p className="mt-4 text-dobby text-sm text-center">
          Already have an account? <a href="/login" className="font-semibold hover:underline">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
