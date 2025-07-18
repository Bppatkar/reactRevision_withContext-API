import React from "react";
import RightSide from "./RightSide";

const Navbar = () => {
  return (
    <div className="flex h-screen w-screen">
      <nav className="flex h-full w-[15%] flex-col items-center bg-neutral-200 pt-5">
        <a className="rounded-lg bg-rose-500 p-3 text-white" href="/create">
          Add New Product
        </a>
        <hr className="mt-5 w-[80%] bg-slate-400" />

        <h1 className="mt-5 mb-3 w-[80%] text-3xl font-bold">Categories</h1>
        <ul className="w-[80%]">
          <li className="mb-3 flex items-center">
            <span className="mr-2 h-[20px] w-[20px] rounded-full bg-green-400"></span>
            Mens
          </li>
          <li className="mb-3 flex items-center">
            <span className="mr-2 h-[20px] w-[20px] rounded-full bg-rose-400"></span>
            Womens
          </li>
          <li className="mb-3 flex items-center">
            <span className="mr-2 h-[20px] w-[20px] rounded-full bg-orange-400"></span>
            Kids
          </li>
          <li className="mb-3 flex items-center">
            <span className="mr-2 h-[20px] w-[20px] rounded-full bg-blue-400"></span>
            Mens
          </li>
        </ul>
      </nav>

      <RightSide />
    </div>
  );
};

export default Navbar;
