import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-[#fcfdb5]">
      <div className="max-w-[800] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#f8faa0] font-bold p-2">
          {" "}
          GROWING WITH DATA ANALYTICS{" "}
        </p>
        <h1 className="md:text-4xl sm:text-6xl text-4xl font-bold md:py-6">
          ARWEN - A GLOBAL ENTERPRISE SOLUTIONS COMPANY
        </h1>

        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-4xl text-xl font-bold py-4">
            Fast, Flexible Monitoring Of
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl font-bold md:pl-4 pl-2"
            strings={["Network", "WINDOWS", "INTERFACES"]}
            typeSpeed={95}
            backSpeed={70}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-pink-200">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-gradient-to-r from-blue-800 to-pink-800 hover:from-blue-500 hover:to-pink-700 border-blue-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-gray-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
