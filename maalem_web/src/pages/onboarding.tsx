"use client";
import React from "react";
import SearchbarPage from "../components/ui/searchbar";
import Footer from "@/components/ui/onboarding-footer";

import { useEffect } from "react";
import Lenis from "lenis";

export default function OnboardingPage() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="w-full">
      <nav className="text-white p-4 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="p-2 text-black hover:text-customRed">
                Creators
              </a>
            </li>
            <li>
              <a href="/about" className="p-2 text-black hover:text-customRed">
                Features
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="p-2 text-black hover:text-customRed"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="p-2 text-black hover:text-customRed"
              >
                Resources
              </a>
            </li>
          </ul>
          <ul className="flex space-x-4 text-black">
            <SearchbarPage />
            <button className="h-10 text-sm py-2 px-4">Log in</button>
            <button className="h-10 text-sm py-2 px-4">Get Started</button>
          </ul>
        </div>
      </nav>

      <main className="flex-grow flex flex-col justify-end min-h-[40rem] mb-[40rem]">
        <div className="w-full text-center">
          <h1 className="text-9xl text-left text-black font-regular mb-4 pl-16">
            your wildest
          </h1>
          <h1 className="text-9xl text-right text-black font-regular mb-4 pr-16">
            creative reality
          </h1>
        </div>
        <div className="flex justify-center mt-8"></div>
      </main>
      <Footer />
    </main>
  );
}
