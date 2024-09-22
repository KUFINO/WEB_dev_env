import React from "react";
import SocialIcons from "./social-icons";

export default function FooterContent() {
  return (
    <div
      className="bg-black py-8 px-12 h-full w-full flex flex-col justify-between relative"
      style={{
        backgroundImage: `repeating-radial-gradient(circle, rgba(255, 255, 255, 0.1) 0, rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 2px)`,
        opacity: 1,
      }}
    >
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div className="flex justify-center items-center shrink-0 gap-20 pt-[5rem]">
      <div className="flex flex-col w-full max-w-[60rem] justify-center items-center space-y-4">
        <div className="w-full text-center text-[2.5rem] lg:text-[70px] font-comico leading-tight text-red">
          Start with Kufino and get more customers!
        </div>
        <div className="text-[14px] text-center font-regular opacity-90 text-gray-300 w-[33rem]">
          Kufino is all about connecting people with workers, we mean
          professional workers. Get things done quicker and securely.
        </div>
        <div className="flex gap-4 mt-[6rem]">
          <button className="bg-phoenix text-black px-6 py-3 rounded-lg">
            Get Started
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-end w-full">
      <div className="flex flex-col lg:flex-row justify-between items-end w-full min-w-[60rem] gap-16">
        {/* Left Section: Social Icons and Description */}
        <div className="flex flex-col space-y-2 text-left items-start">
          <SocialIcons />
          <p className="text-gray-400 text-sm max-w-xs">
            © 2024 Kufino. All rights reserved.
          </p>
        </div>

        {/* Right Section: App Links */}
        <div className="flex flex-col justify-start items-center gap-3">
          <div className="flex justify-center items-center gap-4 h-[3rem]">
            <a
              href="#"
              className="flex flex-row items-center justify-center bg-white text-black px-3 py-3 gap-2 rounded-lg hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0,0,256,256"
              >
                <g fill="#000000">
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M16.125,1c-1.153,0.067 -2.47667,0.70934 -3.26367,1.52734c-0.711,0.744 -1.27197,1.84897 -1.04297,2.91797c1.253,0.033 2.51067,-0.62598 3.26367,-1.45898c0.703,-0.779 1.23597,-1.86633 1.04297,-2.98633zM16.19336,5.44336c-1.809,0 -2.56536,1.11133 -3.81836,1.11133c-1.289,0 -2.46734,-1.04102 -4.02734,-1.04102c-2.122,0.001 -5.34766,1.96666 -5.34766,6.59766c0,4.213 3.81766,8.88867 5.97266,8.88867c1.309,0.013 1.62634,-0.82303 3.40234,-0.83203c1.778,-0.013 2.16166,0.84303 3.47266,0.83203c1.476,-0.011 2.6287,-1.63297 3.4707,-2.91797c0.604,-0.92 0.85231,-1.38969 1.32031,-2.42969c-3.473,-0.88 -4.164,-6.48067 0,-7.63867c-0.786,-1.341 -3.08031,-2.57031 -4.44531,-2.57031z"></path>
                  </g>
                </g>
              </svg>
              <div>Download it for IOS</div>
            </a>
            <a
              href="#"
              className="flex flex-row items-center justify-center bg-white text-black px-3 py-3 gap-2 rounded-lg hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0,0,256,256"
              >
                <g fill="#000000">
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M5.41602,2.32813l7.88086,8.20703l2.33008,-2.42578c-4.015,-2.271 -9.32494,-5.27525 -10.21094,-5.78125zM3.14063,2.84766c-0.085,0.198 -0.14062,0.41525 -0.14062,0.65625v17.08789c0,0.197 0.04438,0.37883 0.10938,0.54883l8.80078,-9.16211zM17.42383,9.12695l-2.74023,2.85156l2.71875,2.83203c1.669,-0.945 2.82422,-1.59961 2.82422,-1.59961c0.499,-0.303 0.77848,-0.76934 0.77148,-1.27734c-0.007,-0.495 -0.29544,-0.95166 -0.77344,-1.22266c-0.065,-0.037 -1.19278,-0.67499 -2.80078,-1.58398zM13.29688,13.42383l-7.82227,8.14258c1.347,-0.766 6.32286,-3.58423 10.13086,-5.74023z"></path>
                  </g>
                </g>
              </svg>
              <div>Get it for Android</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
