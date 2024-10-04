import React from 'react';
import { Button } from "@/components/ui/button";
import { GoogleIcon, GitHubIcon } from "../../../../public/assets/icons/Icons";

const AuthButtons: React.FC = () => (
  <div className="flex justify-center space-x-4 sm:mt-4 md:mt-4 lg:mt-4">
    <Button
      variant="outline"
      className="flex items-center justify-center w-32 h-10 py-3 px-4 bg-transparent text-dobby font-bold sm:w-36 sm:px-5 md:w-40 md:px-6"
    >
      <GoogleIcon className="w-5 h-5 mr-2" />
      <span className="font-bold">Google</span>
    </Button>
    <Button
      variant="outline"
      className="flex items-center justify-center w-32 h-10 py-3 px-4 bg-transparent text-dobby font-bold sm:w-36 sm:px-5 md:w-40 md:px-6"
    >
      <GitHubIcon className="w-5 h-5 mr-2" />
      <span className="font-bold">GitHub</span>
    </Button>
  </div>
);

export default AuthButtons;
