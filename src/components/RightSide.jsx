import React from "react";

const RightSide = () => {
  return (
    <div className="flex h-full max-h-screen min-h-[95%] w-[85%] flex-wrap gap-5 overflow-x-hidden overflow-y-auto p-10 pt-[2%]">
      <div className="card flex h-[25vh] w-[18%] flex-col items-center justify-center rounded-lg bg-white p-5 shadow-lg">
        <div className="relative mb-3 h-[80%] w-full bg-contain bg-center bg-no-repeat transition-transform duration-300 hover:scale-150">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>
        <hr className="mb-2 w-[65%]" />
        <h1 className="text-center text-xl font-semibold">Hand Bag</h1>
      </div>
    </div>
  );
};

export default RightSide;
