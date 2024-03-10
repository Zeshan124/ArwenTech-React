import React from "react";

const ContactSection = () => {
  return (
    <div className="w-full py-8 text-white bg-gray-900 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-4">
          <h1 className="text-center md:text-4xl sm:text-3xl text-2xl bold py-2">
            0800-ARWEN (27936)
          </h1>
          <p className="text-center md:text-3xl text-[#00df9a] cursor-pointer">
            Contact Us
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
