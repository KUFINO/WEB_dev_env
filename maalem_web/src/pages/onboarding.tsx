
import React from 'react';
import Footer from '@/components/layout/onboardingScreenFooter'
import NavBar from '@/components/layout/onboardingScreenHeader';

const OnboardingPage: React.FC = () => {
  return (
    <div className=" bg-black   bg-cover bg-center bg-no-repeat flex flex-col min-h-screen   w-full ">
   
     <NavBar />
      <main className="flex flex-col justify-end flex-grow w-full   ">
      <h1 className="text-8xl text-left  ml-[10%] text-white ">Need a Hand?</h1>
      <h1 className="text-4xl text-customGreen text-center font-black  ml-[520px]" >We've Got You Covered!</h1>
      </main>

    <Footer/>

    </div>
  );
};

export default OnboardingPage;
