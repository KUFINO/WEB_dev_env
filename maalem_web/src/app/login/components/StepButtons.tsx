import React from 'react';
import { Button } from "@/components/ui/button";
import RoundNumberCircle from "./ui/RoundNumberCircle";
import { STEPS } from "@/constants";

interface StepButtonsProps {
  activeButton: number;
  onButtonClick: (index: number) => void;
}

const StepButtons: React.FC<StepButtonsProps> = ({ activeButton, onButtonClick }) => {
  return (
    <div className="flex flex-col mt-10 w-full space-y-4 sm:space-y-4 md:space-y-4 lg:space-y-4">
      {STEPS.map((text, index) => (
        <Button
          key={index}
          onClick={() => onButtonClick(index)}
          className={`flex items-center justify-start w-full h-12 
          ${activeButton === index ? 'bg-white text-black' : 'bg-dobby text-white'} 
          h-12 sm:h-12 md:h-12 lg:h-12`}
        >
          <RoundNumberCircle number={index + 1} isActive={activeButton === index} />
          <span className="font-medium">{text}</span>
        </Button>
      ))}
    </div>
  );
};

export default StepButtons;
