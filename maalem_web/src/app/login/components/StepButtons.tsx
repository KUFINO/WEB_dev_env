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
    <div className="flex flex-col space-y-4 mt-10 w-full">
      {STEPS.map((text, index) => (
        <Button
          key={index}
          onClick={() => onButtonClick(index)}
          className={`flex items-center justify-start w-full h-12 
          ${activeButton === index ? 'bg-white text-black' : 'bg-dobby text-white'}`}
        >
          <RoundNumberCircle number={index + 1} isActive={activeButton === index} />
          <span className="font-medium">{text}</span>
        </Button>
      ))}
    </div>
  );
};

export default StepButtons;
