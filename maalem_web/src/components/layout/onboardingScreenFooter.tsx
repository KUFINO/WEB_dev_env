import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
const OnboardingFooter : React.FC =()=>{
return (
    <footer className="text-white p-4 flex items-center " >
      <button className="w-15 h-15 p-2 bg-transparent   rounded-full flex items-center justify-center focus:outline-none">
        <FontAwesomeIcon icon={faArrowDown} className="w-12 h-12 hover:text-customRed" /> 
      </button>
    </footer>
);
};
export default OnboardingFooter;