import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center py-4 px-[4%] justify-between bg-white">
       <p className="text-2xl font-semibold">MODVEIL</p>
      {/* <img className="w-[max(10%,80px)]" src={assets.logo} alt="navlogo" /> */}
      <button onClick={() => setToken('')} className="border border-gray-600 px-5 py-2 sm:px-7 sm:py-2 rounded-md text-xs sm:text-sm hover:bg-gray-800 hover:text-white transition">Logout</button>
    </div>
  );
};

export default Navbar;
