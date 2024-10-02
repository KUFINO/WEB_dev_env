"use client";
import React, { useState } from "react";
import SignupForm from "./components/SignupForm";
import StepButtons from "./components/StepButtons";
import { APP_NAME } from "@/constants";
import { LeftArrow } from "../../../public/assets/icons/Icons";

const LoginPage: React.FC = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <div className="bg-sparkler flex flex-col lg:flex-row h-screen w-full overflow-hidden">
      <div className="flex-[0_0_60%] h-[99%] w-[95%] ml-3 md:w-[98%] md:ml-2 sm:w-[98%] mt-1 bg-login_side bg-no-repeat bg-cover flex items-end justify-center pb-10 rounded-[25px]">
        <div className="text-white text-center">
          <div className="flex items-center justify-center mb-6 md:mt-6 sm:mt-6">
            <LeftArrow />
            <h2 className="text-xl font-bold">{APP_NAME}</h2>
          </div>
          <h1 className="text-2xl font-bold pb-2">GET STARTED WITH US</h1>
          <div className="mt-1 text-sm text-gray-400">
            <p>Complete these easy steps to register</p>
            <p>your account.</p>
          </div>

          <StepButtons
            activeButton={activeButton}
            onButtonClick={handleButtonClick}
          />
        </div>
      </div>

      <div className="flex-1 h-full w-full flex items-center justify-center lg:mr-5 lg:mt-0">
        <SignupForm />
      </div>
    </div>
  );
};

export default LoginPage;
