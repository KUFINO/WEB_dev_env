import React from 'react';
import SearchbarPage from '../ui/searchbar';
import LogingPage from "@/pages/loginpage";
import Link from 'next/link';

const NavBar : React.FC =()=>{
return (
    <nav className="  text-white p-4 w-full fixed top-0  ">

    <div className="container mx-auto flex justify-between items-center ">

    <ul className="flex space-x-4" >
        <li><a href="/" className="p-2 text-white hover:text-customGreen text-sm  " >Maalems</a></li>
        <li><a href="/about" className=" p-2 text-white hover:text-customGreen text-sm">Features</a></li>
        <li><a href="/contact" className="  p-2 text-white hover:text-customGreen text-sm">Pricing</a></li>
        <li><a href="/contact" className=" p-2 text-white hover:text-customGreen text-sm">Ressources</a></li>
    </ul>

    <h1 className="text-2xl text-customGreen text-center font-black" >MaaleM</h1>

    <ul className="flex space-x-4">
    <SearchbarPage/>
    <Link href="/loginpage">
    <button className="animate-bounce bg-transparent h-10 border  border-customGreen rounded-mixed text-sm py-2 px-4 ">
        Log in
      </button>
    </Link>
    <button className=" bg-customGreen  h-10  text-sm  py-2 px-4  rounded-15p" >
       Get Started
    </button>
    </ul>

    
    </div>

  </nav>
);
;}
export default NavBar