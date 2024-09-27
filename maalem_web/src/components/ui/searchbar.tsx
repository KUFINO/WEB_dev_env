import React, { FC } from 'react';
import { Input } from "@/components/ui/input";

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
