import React from "react";
import RightSide from "./RightSide";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex h-screen w-screen bg-gray-50">
      <nav className="flex h-full w-[15%] flex-col items-center bg-white py-8 shadow-lg">
        <Link 
          to="/create"
          className="transform rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md"
        >
          Add New Product
        </Link>
        
        <hr className="my-8 w-[80%] border-gray-200" />

        <div className="w-[80%]">
          <h1 className="mb-6 text-2xl font-bold text-gray-800">Categories</h1>
          <ul className="space-y-4">
            <li className="flex items-center rounded-lg p-2 transition-all hover:bg-gray-50">
              <span className="mr-3 h-3 w-3 rounded-full bg-green-500"></span>
              <span className="font-medium text-gray-700">Men's Clothing</span>
            </li>
            <li className="flex items-center rounded-lg p-2 transition-all hover:bg-gray-50">
              <span className="mr-3 h-3 w-3 rounded-full bg-rose-500"></span>
              <span className="font-medium text-gray-700">Women's Clothing</span>
            </li>
            <li className="flex items-center rounded-lg p-2 transition-all hover:bg-gray-50">
              <span className="mr-3 h-3 w-3 rounded-full bg-orange-500"></span>
              <span className="font-medium text-gray-700">Kids Collection</span>
            </li>
            <li className="flex items-center rounded-lg p-2 transition-all hover:bg-gray-50">
              <span className="mr-3 h-3 w-3 rounded-full bg-blue-500"></span>
              <span className="font-medium text-gray-700">Accessories</span>
            </li>
          </ul>
        </div>
      </nav>

      <RightSide />
    </div>
  );
};

export default Navbar;
