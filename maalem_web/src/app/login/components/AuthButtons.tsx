'use client';
import React from 'react';
import { Button } from "@/components/ui/button";
import { GoogleIcon, GitHubIcon } from "../../../../public/assets/icons/Icons";

const AuthButtons: React.FC = () => (
  <div className="lg:mt-4 flex space-x-4 justify-center">
    <Button
      variant="outline"
      className="flex items-center justify-center w-32 sm:w-36 md:w-40 h-10 py-3 px-4 sm:px-5 md:px-6 bg-transparent text-dobby font-bold"
    >
      <GoogleIcon className="w-5 h-5 mr-2" />
      <span className="font-bold">Google</span>
    </Button>
    <Button
      variant="outline"
      className="flex items-center justify-center w-32 sm:w-36 md:w-40 h-10 py-3 px-4 sm:px-5 md:px-6 bg-transparent text-dobby font-bold"
    >
      <GitHubIcon className="w-5 h-5 mr-2" />
      <span className="font-bold">GitHub</span>
    </Button>
  </div>
);

export default AuthButtons;
