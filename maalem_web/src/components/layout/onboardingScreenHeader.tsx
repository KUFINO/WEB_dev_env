import React from 'react';
import SearchbarPage from '../ui/searchbar';
const NavBar : React.FC =()=>{
return (
    <nav className="  text-white p-4 w-full fixed top-0  ">

    <div className="container mx-auto flex justify-between items-center ">

    <ul className="flex space-x-4" >
        <li><a href="/" className="p-2 text-white hover:text-customRed text-sm  " >Maalems</a></li>
        <li><a href="/about" className=" p-2 text-white hover:text-customRed text-sm">Features</a></li>
        <li><a href="/contact" className="  p-2 text-white hover:text-customRed text-sm">Pricing</a></li>
        <li><a href="/contact" className=" p-2 text-white hover:text-customRed text-sm">Ressources</a></li>
    </ul>

    <h1 className="text-2xl text-customRed text-center font-black" >MaaleM</h1>

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
);
;}
export default NavBar