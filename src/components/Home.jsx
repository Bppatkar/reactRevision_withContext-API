import React from "react";
import Sidebar from "./Sidebar";
import RightSide from "./RightSide";

const Home = () => {
 
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <div className="min-h-screen w-full border-gray-200 bg-white shadow-md md:w-[250px] lg:w-[15%]">
        <Sidebar />
      </div>

      <div className="flex-1 p-4">
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
