import React from 'react';

const Searchbar : React.FC=()=>{
return (
    <div className=' max-w-md mx-auto  ' >
    <div className="  relative flex items-center w-full h-9 rounded-lg focus-within:shadow-lg bg-transparent  overflow-hidden border border-white rounded-custom " >
        <div className="grid place-items-center h-full w-9 text-gray-300   ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor " >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        className="peer p-2 h-full w-full outline-none text-sm text-white pr-2 bg-transparent "
        type="text"
        id="search"
        placeholder="Find a Maalem" /> 
    </div>
</div>
);
};

export default Searchbar ;