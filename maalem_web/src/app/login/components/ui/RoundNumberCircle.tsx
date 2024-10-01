import React from 'react';

interface RoundNumberCircleProps {
  number: number;
  isActive: boolean;
}

const RoundNumberCircle: React.FC<RoundNumberCircleProps> = ({ number, isActive }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full border-2 w-6 h-6 mr-2 
      ${isActive ? 'border-black bg-dobby text-white' : 'border-transparent bg-[#141414] text-white'}`}
    >
      <span>{number}</span>
    </div>
  );
};

export default RoundNumberCircle;
