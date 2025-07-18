import React from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";

const Details = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="flex w-[80%] rounded-lg bg-white p-10 shadow-lg">
        <div className="flex flex-col w-[60%] pr-10 ml-15 mt-10">
          <h1 className="text-3xl font-bold">HandBag</h1>
          <p className="mt-3 text-lg text-gray-600 w-[60%] opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            consequatur atque, illo incidunt praesentium per
          </p>
          <p className="mt-3 text-lg font-bold text-primary">$50</p>
          <button className="mt-5 w-[40%] rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
        <div className="flex w-[40%] items-center">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            className="h-[40vh] w-full object-contain"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;

