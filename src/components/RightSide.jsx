import React from "react";
import { Link } from "react-router-dom";

const RightSide = () => {
  return (
    <div className="flex h-full w-[85%] flex-wrap gap-6 overflow-y-auto p-8">
      <Link 
        to="/details/1" 
        className="group flex h-[320px] w-[230px] flex-col items-center justify-between rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md"
      >
        <div className="relative h-[70%] w-full overflow-hidden rounded-lg bg-gray-50 p-4">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            className="absolute inset-0 h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
            alt="Product Image"
          />
        </div>
        <div className="flex w-full flex-col items-center space-y-2 pt-4">
          <h2 className="text-center text-lg font-semibold text-gray-800 group-hover:text-blue-600">
            Fjallraven Backpack
          </h2>
          <span className="text-lg font-bold text-blue-600">$109.95</span>
        </div>
      </Link>
    </div>
  );
};

export default RightSide;
