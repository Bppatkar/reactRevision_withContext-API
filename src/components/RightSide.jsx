import React from "react";
import { Link } from "react-router-dom";

const RightSide = () => {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-4">
      <Link
        to="/details/1"
        className="group flex h-[300px] flex-col items-center justify-between rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-lg"
      >
        <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-gray-50">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            className="h-full w-full object-contain p-2 transition-transform duration-300 ease-in-out will-change-transform group-hover:scale-105 sm:p-4"
            alt="Product Image"
          />
        </div>
        <div className="flex w-full flex-col items-center space-y-2">
          <h2 className="line-clamp-2 text-center text-lg font-semibold text-gray-800 group-hover:text-blue-600">
            Fjallraven Backpack
          </h2>
          <span className="text-lg font-bold text-blue-600">$109.95</span>
        </div>
      </Link>
    </div>
  );
};

export default RightSide;
