import React from 'react';
import SignupForm from './components/SignupForm';
import StepButtonControl from './components/StepButtonControl'; 
import { APP_NAME } from "@/constants"; 
import { LeftArrow } from "@/icons";


const LoginPage: React.FC = () => {
  return (
    <div className="bg-sparkler flex flex-col h-screen w-full lg:flex-row">
  <div className="absolute inset-0 bg-login_side bg-no-repeat bg-cover"></div>
  
  <div className="absolute inset-0 bg-black opacity-30"></div>

  </div>  
      <div className="relative z-10 text-white text-center">
          <div className="flex items-center justify-center mb-6">
            <LeftArrow />
            <h2 className="text-xl font-bold">{APP_NAME}</h2>
          </div>
          <h1 className="text-2xl font-bold pb-2">GET STARTED WITH US</h1>
          <div className="mt-1 text-sm text-gray-400">
            <p>Complete these easy steps to register</p>
            <p>your account.</p>
          </div>
          <StepButtonControl /> 
        </div>
      </div>
      <div className="h-screen w-full p-10 flex items-start justify-center">
        <SignupForm />
      </div>
    </div>
  );
};

export default LoginPage;
