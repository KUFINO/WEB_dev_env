import React from 'react';

interface RoundNumberCircleProps {
  number: number;
  isActive: boolean;
}

const RoundNumberCircle: React.FC<RoundNumberCircleProps> = ({ number, isActive }) => {
  return (
    <div
      className="flex items-center border-none justify-center rounded-full border-2 w-6 h-6 mr-2"
    >
      <span>{number}</span>
    </div>
  );
};

export default RoundNumberCircle;
