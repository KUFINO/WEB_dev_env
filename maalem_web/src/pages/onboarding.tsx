import React from 'react';
import Footer from '@/components/layout/onboardingScreenFooter';
import NavBar from '@/components/layout/onboardingScreenHeader';

const OnboardingPage: React.FC = () => {
  return (
    <div className="bg-black bg-cover bg-center bg-no-repeat flex flex-col min-h-screen w-full">
      <NavBar />
      <main className="flex flex-col justify-end flex-grow w-full">
        <h1 className="text-4xl md:text-7xl sm:text-6xl  lg:text-8xl text-left ml-0 lg:ml-[150px] sm:ml-[120px]  md:ml-[120px] text-white">
          Need a Hand?
        </h1>
        <h1 className="text-3xl lg:text-4xl md:text-4xl sm:text-2xl  text-phoenix text-center font-black ml-0 lg:ml-[400px] sm:ml-[270px] md:ml-[310px] ">
          We&apos; ve Got You Covered!
        </h1>
      </main>
      <Footer />
    </div>
  );
};

export default OnboardingPage;
