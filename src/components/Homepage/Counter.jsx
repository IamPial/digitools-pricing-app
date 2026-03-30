import React from "react";

const Counter = () => {
  return (
    <div>
      <div className="py-15 bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          <div className="flex flex-col justify-center items-center space-y-3 lg:border-base-300 lg:border-r-2 border-r-2-none">
            <h2 className="text-6xl text-white font-extrabold">50K+</h2>
            <p className="text-white text-2xl font-medium">Active Users</p>
          </div>

          <div className="flex flex-col justify-center items-center lg:border-base-300 lg:border-r-2 border-r-2-none space-y-3">
            <h2 className="text-6xl text-white font-extrabold">200+</h2>
            <p className="text-white text-2xl font-medium">Premium Tools</p>
          </div>

          <div className="flex flex-col justify-center items-center space-y-3">
            <h2 className="text-6xl text-white font-extrabold">4.9</h2>
            <p className="text-white text-2xl font-medium">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
