import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import mainlogo from "./mainlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <div className="flex items-center">
        <a href="http://localhost:3000/" rel="noopener noreferrer">
        <img src={mainlogo} alt="Logo" className="h-16 w-30 mr-2" />
        </a>
        
      </div>

      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4 cursor-pointer">
          <Link to="/servicelines">ServiceLines</Link>
        </li>
        <li className="p-4 cursor-pointer">
          <Link to="/solutions">Solutions</Link>
        </li>
        <li className="p-4 cursor-pointer">
          <Link to="/sponsored">Partners</Link>
        </li>
        <li className="p-4 cursor-pointer">
          <Link to="/clientele">Clientele</Link>
        </li>
        <li className="p-4 cursor-pointer">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="p-4 cursor-pointer">
          <Link to="/careers">Careers</Link>
        </li>
        <li className="p-4 cursor-pointer">
          <Link to="/newsroom">News Room</Link>
        </li>
        <li className="p-4 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="blockmd:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 md:w-[22%] rounded-md border-r border-r-gray-900 bg-gradient-to-r from-pink-900 ease-out duration-1000"
            : "fixed left-[-100%]"
        }
      >
        <img className="w-[200px]" src={mainlogo} alt="logo" />

        <ul className="uppercase p-4">
    <a href="http://localhost:3000/" rel="noopener noreferrer">
      <li className="p-4 border-b border-gray-600">Home</li>
    </a>
    <a href="http://localhost:3000/resources" rel="noopener noreferrer">
      <li className="p-4 border-b border-gray-600">Resources</li>
    </a>
    <a href="http://localhost:3000/about" rel="noopener noreferrer">
      <li className="p-4 border-b border-gray-600">About</li>
    </a>
    <a href="http://localhost:3000/contact" rel="noopener noreferrer">
      <li className="p-4 border-b border-gray-600">Contact</li>
    </a>
  </ul>

  <div className="">
    <ul className={`uppercase p-4 ${isExpanded ? 'block' : 'hidden'}`}>
      <a href="http://localhost:3000/servicelines" rel="noopener noreferrer">
        <li className="p-4 border-b border-gray-600">ServiceLines</li>
      </a>
      <a href="http://localhost:3000/solutions" rel="noopener noreferrer">
        <li className="p-4 border-b border-gray-600">Solutions</li>
      </a>
      <a href="http://localhost:3000/projects" rel="noopener noreferrer">
        <li className="p-4 border-b border-gray-600">Projects</li>
      </a>
      <a href="http://localhost:3000/clientele" rel="noopener noreferrer">
        <li className="p-4 border-b border-gray-600">Clientele</li>
      </a>
      
    </ul>
          <button
                    onClick={handleToggle}
                    className="text-pink-500 hover:underline focus:outline-none mt-2 text-sm"
                  >
                    {isExpanded ? 'Read Less ^' : 'Read More >'}
                  </button>
          
        </div>
        </div>
      </div>
    
  );
};

export default Navbar;
