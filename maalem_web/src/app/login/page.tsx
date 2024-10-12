import React from 'react';
import SignupForm from './components/SignupForm';
import { APP_NAME } from "@/constants"; 
import { LeftArrow } from "@/icons";

const LoginPage: React.FC = () => {
  return (
    <div className="bg-sparkler flex h-screen w-full">
      <div className="hidden lg:flex lg:w-1/2 bg-login_side bg-no-repeat bg-cover items-end justify-center pb-10 rounded-[25px] m-1">
        <div className="text-sparkler text-center">
          <h1 className="text-3xl font-bold">GET STARTED WITH US</h1>
          <div className="mb-[1rem] text-sm text-sparkler opacity-70">
            <p>Complete these easy steps to register</p>
            <p>your account.</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10 flex items-center justify-center">
        <SignupForm />
      </div>
    </div>
  );
};

export default LoginPage;
