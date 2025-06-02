import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border  mt-[5.3rem] rounded-lg h-auto md:h-[600px] overflow-hidden">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-[#f1ece9]  px-6">
        <div className="text-[#414141] ">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">TRENDING NOW</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed text-slate-900 font-bold">
            Elevate Your Wardrobe
          </h1>
          <div className="flex items-center">
            {/* <p className="font-semibold text-sm md:text-base">SHOP NOW</p> */}
            {/* <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p> */}
            <div className="w-auto  mt-12 border">
              <Link to="/collection">
                <button
                  type="button"
                  className="bg-black text-white px-10 py-3 text-sm hover:bg-gray-700"
                >
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Hero right side */}
      <img
        src={assets.heroNewImg}
        alt="hero-img"
        className="w-full h-[400px] sm:h-auto sm:w-1/2 object-cover object-top"
      />
    </div>
  );
};

export default Hero;
