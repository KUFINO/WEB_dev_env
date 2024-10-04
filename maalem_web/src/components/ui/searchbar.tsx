import React, { FC } from 'react';
import { Input } from "@/components/ui/input";

const SearchbarPage : React.FC=()=>{
return (
    <div className='max-w-md mx-auto'>
      <div className="relative flex items-center w-full h-9 rounded-lg overflow-hidden border border-white rounded-custom " >
        <div className="grid place-items-center h-full w-9 text-gray-300   ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor " >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        className="peer p-2 h-full w-full outline-none text-sm text-white-700 pr-2 bg-transparent "
        type="text"
        id="search"
        placeholder="Find a Creator" /> 
      </div>
    </div>);
}

const SearchIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
};

const SearchComponent: FC = () => {
  return (
    <div className="flex items-center w-200  h-10 max-w-sm space-x-2 rounded-lg border px-3.5 py-2">
      <SearchIcon className="h-4 w-4" />
      <Input type="search" placeholder="Find a maalem" className="w-full  h-8 bg-transparent" />
    </div>
  );
};

export default SearchComponent;
