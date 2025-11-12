import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-3 px-6 md:px-20 bg-white shadow-md w-full fixed top-0 left-0 z-50">
   
      <div className="text-2xl font-bold flex items-center gap-2 ml-2 md:ml-10">
        <span className="text-red-500">📋</span> doList
      </div>


      <ul className="hidden md:flex gap-8 text-gray-700 ml-10">
        <li >About Us</li>
        <li >Features</li>
        <li >More Option</li>
        <li >Contact</li>
      </ul>

     
      <div className="hidden md:flex gap-3">
        <button className="px-8 py-1 border border-red-500 text-red-500 rounded-md hover:bg-red-50">
          Log In
        </button>
        <button className="px-8 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
          Sign Up
        </button>
      </div>

    
      <div
        className="md:hidden text-3xl text-red-500 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-lg p-6 flex flex-col items-center gap-4 md:hidden">
          <ul className="flex flex-col gap-4 text-gray-700 text-lg">
            <li className="hover:text-red-500 cursor-pointer">About Us</li>
            <li className="hover:text-red-500 cursor-pointer">Features</li>
            <li className="hover:text-red-500 cursor-pointer">More Option</li>
            <li className="hover:text-red-500 cursor-pointer">Contact</li>
          </ul>

          <div className="flex flex-col gap-3 mt-4 w-full px-8">
            <button className="border border-red-500 text-red-500 py-2 rounded-md hover:bg-red-50 w-full">
              Log In
            </button>
            <button className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600 w-full">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
