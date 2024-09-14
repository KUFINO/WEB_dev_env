
import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import SearchbarPage from '../components/ui/searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const OnboardingPage: React.FC = () => {
  return (
    <div className=" bg-background flex flex-col min-h-screen   w-full ">
   
      <nav className="bg-background  text-white p-4 w-full  ">
        <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
            <li><a href="/" className="p-2 text-white hover:text-customRed text-sm">Creators</a></li>
            <li><a href="/about" className=" p-2 text-white hover:text-customRed text-sm">Features</a></li>
            <li><a href="/contact" className="  p-2 text-white hover:text-customRed text-sm">Pricing</a></li>
            <li><a href="/contact" className=" p-2 text-white hover:text-customRed text-sm">Ressources</a></li>
          </ul>
          <p className=" font-bold text-xl text-customRed text-center " style={{fontWeight:"900"}}>PATREON</p>
          <ul className="flex space-x-4">
           <SearchbarPage/>
           
           <button className=" animate-bounce bg-transparent h-10 border-customRed text-sm  py-2 px-4 border border-foreground  " style={{ borderRadius: '10% 25%' , borderColor:"#FF4C33" }}>
           Log in
           </button>
           <button className=" bg-customRed bg-transparent h-10  text-sm  py-2 px-4  " style={{ borderRadius: ' 15%',backgroundColor:"#FF4C33" }}>
           Get Started
           </button>
          

 
          </ul>
        </div>
      </nav>

   
      <main className="flex flex-col justify-end flex-grow ">
        <div className="w-auto text-center min-h-[100px]   ">
            <h1 className="  text-9xl text-left  text-foreground font-bold mb-4"style={{marginLeft:"60px"}}>Your wildest</h1>
            <h1 className="p-4 text-9xl text-foreground font-bold mb-4  text-right">creative reality</h1>
        </div>
    </main>

    <footer className="text-white p-4">
    <FontAwesomeIcon icon={faArrowDown} className="w-12 h-12" />
  </footer>
    </div>
  );
};

export default OnboardingPage;
