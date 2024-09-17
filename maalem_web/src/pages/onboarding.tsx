
import React from 'react';
import Footer from '@/components/layout/onboardingScreenFooter'
import NavBar from '@/components/layout/onboardingScreenHeader';

const OnboardingPage: React.FC = () => {
  return (
    <div className=" bg-onboarding-screen   bg-cover bg-center bg-no-repeat flex flex-col min-h-screen   w-full ">
   
     <NavBar />
     
      <main className="flex flex-col justify-end flex-grow w-full   ">
      <h1 className="text-9xl text-left font-black ml-[10%]">Need a Hand?</h1>
      <h1 className="text-6xl text-customRed text-center font-black  ml-[540px]" >We've Got You Covered!</h1>
      </main>

    <Footer/>

    </div>
  );
};

export default OnboardingPage;
