import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 border border-gray-300 rounded-md my-16">
      <div className=" px-4">
        <img
          src={assets.deliveryImg}
          className="w-16 m-auto mb-5"
          alt="policy-img"
        />
        <p className="font-medium text-lg text-gray-800">
          Fast & Reliable Delivery
        </p>
        <p className="text-gray-500 text-base font-light">
          We offer your order delivered swiftly and on time, every time.
        </p>
      </div>
      <div className=" px-4">
        <img
          src={assets.returnImg}
          className="w-12 m-auto mb-5"
          alt="policy-img"
        />
        <p className="font-medium text-lg text-gray-800">7-Day Easy Returns</p>
        <p className="text-gray-500 text-base font-light">
          Changed your mind? Return within 7 days, no questions asked.
        </p>
      </div>
      <div className="px-4">
        <img
          src={assets.customerSupImg}
          className="w-12 m-auto mb-5"
          alt="policy-img"
        />
        <p className="font-medium text-lg text-gray-800">
          24/7 Customer Support
        </p>
        <p className="text-gray-500 text-base font-light">
          Need help? Our friendly team is available around the clock to assist
          you.
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
