'use client';
import React, { useState } from 'react';
import StepButtons from './StepButtons';

const StepButtonControl: React.FC = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <StepButtons activeButton={activeButton} onButtonClick={handleButtonClick} />
  );
};

export default StepButtonControl;
